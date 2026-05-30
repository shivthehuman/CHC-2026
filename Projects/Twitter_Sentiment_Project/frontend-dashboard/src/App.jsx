import { useEffect, useMemo, useState } from 'react';
import dashboardData from './dashboard_analytics.json';
import DashboardHeader from './components/DashboardHeader.jsx';
import SummaryCards from './components/SummaryCards.jsx';
import TextSimulator from './components/TextSimulator.jsx';
import SentimentChart from './components/SentimentChart.jsx';
import TweetTable from './components/TweetTable.jsx';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [rowLimit, setRowLimit] = useState(10);
  const [customInputText, setCustomInputText] = useState('');
  const [simulatedMetrics, setSimulatedMetrics] = useState(null);

  const metrics = useMemo(() => {
    const total = dashboardData.length;
    const hateSpeechCount = dashboardData.filter((item) => item.label === 1).length;
    const safeCount = total - hateSpeechCount;

    let avgPos = 0;
    let avgNeg = 0;

    dashboardData.forEach((item) => {
      avgPos += item.positive;
      avgNeg += item.negative;
    });

    return {
      total,
      hateSpeechCount,
      safeCount,
      safetyIndex: total ? ((safeCount / total) * 100).toFixed(1) : '0.0',
      avgPositiveIntensity: total ? (avgPos / total).toFixed(2) : '0.00',
      avgNegativeIntensity: total ? (avgNeg / total).toFixed(2) : '0.00',
    };
  }, []);

  useEffect(() => {
    if (!customInputText.trim()) {
      setSimulatedMetrics(null);
      return;
    }

    const lowerText = customInputText.toLowerCase();
    const toxicWords = ['hate', 'stupid', 'ugly', 'dumb', 'trash', 'racist', 'sexist', 'bad', 'worst', 'fuck', 'bitch', 'asshole', 'idiot', 'bullshit', 'motherfucker'];
    const positiveWords = ['love', 'great', 'happy', 'beautiful', 'friend', 'awesome', 'good', 'nice', 'excellent', 'amazing'];

    let negativeHits = 0;
    let positiveHits = 0;

    toxicWords.forEach((word) => {
      if (lowerText.includes(word)) {
        negativeHits += 1;
      }
    });

    positiveWords.forEach((word) => {
      if (lowerText.includes(word)) {
        positiveHits += 1;
      }
    });

    const negScore = negativeHits > 0 ? Math.min(0.4 + negativeHits * 0.2, 1.0) : 0.0;
    const posScore = positiveHits > 0 ? Math.min(0.2 + positiveHits * 0.2, 1.0) : 0.0;
    const compoundScore = posScore - negScore;
    const predictedLabel = negScore > 0.3 ? 1 : 0;

    setSimulatedMetrics({
      positive: posScore,
      negative: negScore,
      compound: compoundScore,
      label: predictedLabel,
    });
  }, [customInputText]);

  const timelineChartData = useMemo(() => {
    return dashboardData.slice(0, 30).map((item) => ({
      time: item.timestamp.split(' ')[1],
      'Compound Sentiment': item.compound,
      'Positivity Index': item.positive,
      'Negativity Index': item.negative,
    }));
  }, []);

  const pieChartData = [
    { name: 'Safe Discourse', value: metrics.safeCount, color: '#10B981' },
    { name: 'Flagged Content', value: metrics.hateSpeechCount, color: '#EF4444' },
  ];

  const filteredTweets = useMemo(() => {
    const cleanFiltered = dashboardData.filter((item) => {
      const matchesSearch = item.ultra_clean_tweet.toLowerCase().includes(searchTerm.toLowerCase());
      if (!matchesSearch) {
        return false;
      }

      if (activeFilter === 'safe') return item.label === 0;
      if (activeFilter === 'flagged') return item.label === 1;
      if (activeFilter === 'intense') return item.positive > 0.3 || item.negative > 0.3;

      return true;
    });

    if (rowLimit === -1) return cleanFiltered;
    return cleanFiltered.slice(0, rowLimit);
  }, [searchTerm, activeFilter, rowLimit]);

  const handleSelectFilter = (filter) => {
    setActiveFilter(filter);
    setRowLimit(10);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0A0F1D',
        color: '#E2E8F0',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '32px',
        boxSizing: 'border-box',
      }}
    >
      <DashboardHeader />

      <SummaryCards metrics={metrics} activeFilter={activeFilter} onSelectFilter={handleSelectFilter} />

      <TextSimulator
        customInputText={customInputText}
        onChangeText={setCustomInputText}
        simulatedMetrics={simulatedMetrics}
      />

      <SentimentChart timelineChartData={timelineChartData} pieChartData={pieChartData} />

      <TweetTable
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        activeFilter={activeFilter}
        rowLimit={rowLimit}
        onRowLimitChange={setRowLimit}
        filteredTweets={filteredTweets}
      />
    </div>
  );
}