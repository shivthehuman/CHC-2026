import { AlertTriangle, Calendar, Cpu, Smile } from 'lucide-react';

function MetricCard({ title, value, active, accent, icon: Icon, activeText, inactiveText, onClick, valueStyle }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: 'rgba(30, 41, 59, 0.4)',
        padding: '24px',
        borderRadius: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        border: active ? `1px solid ${accent}` : '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: active ? `0 0 25px ${accent}1a` : 'none',
        transform: active ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: accent }}>
        <span style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</span>
        <Icon size={18} />
      </div>
      <h2 style={valueStyle}>{value}</h2>
      <span style={{ fontSize: '12px', color: active ? accent : '#475569', fontWeight: '600' }}>{active ? activeText : inactiveText}</span>
    </div>
  );
}

export default function SummaryCards({ metrics, activeFilter, onSelectFilter }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '32px' }}>
      <MetricCard
        title="Total Corpus Stream"
        value={metrics.total}
        active={activeFilter === 'all'}
        accent="#38BDF8"
        icon={Calendar}
        activeText="● Active View Filter"
        inactiveText="Click to map full array"
        onClick={() => onSelectFilter('all')}
        valueStyle={{ fontSize: '36px', fontWeight: '800', margin: '14px 0 6px 0', letterSpacing: '-0.05em', color: '#FFFFFF' }}
      />
      <MetricCard
        title="Safety Dominance Index"
        value={`${metrics.safetyIndex}%`}
        active={activeFilter === 'safe'}
        accent="#10B981"
        icon={Smile}
        activeText="● Active View Filter"
        inactiveText="Click to isolate secure logs"
        onClick={() => onSelectFilter('safe')}
        valueStyle={{ fontSize: '36px', fontWeight: '800', margin: '14px 0 6px 0', letterSpacing: '-0.05em', color: '#FFFFFF' }}
      />
      <MetricCard
        title="Flagged Infractions"
        value={metrics.hateSpeechCount}
        active={activeFilter === 'flagged'}
        accent="#EF4444"
        icon={AlertTriangle}
        activeText="● Active View Filter"
        inactiveText="Click to audit anomalies"
        onClick={() => onSelectFilter('flagged')}
        valueStyle={{ fontSize: '36px', fontWeight: '800', margin: '14px 0 6px 0', letterSpacing: '-0.05em', color: '#FFFFFF' }}
      />
      <MetricCard
        title="Mean Lexical Density"
        value={
          <>
            +{metrics.avgPositiveIntensity} <span style={{ color: '#475569', fontWeight: '300', fontSize: '14px' }}>|</span> -{metrics.avgNegativeIntensity}
          </>
        }
        active={activeFilter === 'intense'}
        accent="#A855F7"
        icon={Cpu}
        activeText="● Active View Filter"
        inactiveText="Click to review distribution"
        onClick={() => onSelectFilter('intense')}
        valueStyle={{ fontSize: '20px', fontWeight: '800', margin: '26px 0 6px 0', color: '#FFFFFF' }}
      />
    </div>
  );
}