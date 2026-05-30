import { Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

export default function SentimentChart({ timelineChartData, pieChartData }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '32px' }}>
      <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.25)', padding: '24px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 20px 0', color: '#FFFFFF', letterSpacing: '-0.01em' }}>
          Chronological Sentiment Oscillations
        </h3>
        <div style={{ width: '100%', height: '260px' }}>
          <ResponsiveContainer>
            <LineChart data={timelineChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
              <XAxis dataKey="time" stroke="#475569" fontSize={11} tickLine={false} />
              <YAxis stroke="#475569" fontSize={11} domain={[-1, 1]} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0F172A', borderColor: 'rgba(255,255,255,0.08)', color: '#F8FAFC', borderRadius: '10px' }} />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
              <Line type="monotone" dataKey="Compound Sentiment" stroke="#38BDF8" strokeWidth={2.5} dot={{ r: 1.5, fill: '#38BDF8' }} activeDot={{ r: 4 }} />
              <Line type="monotone" dataKey="Positivity Index" stroke="#10B981" strokeWidth={1.2} strokeDasharray="5 5" dot={false} />
              <Line type="monotone" dataKey="Negativity Index" stroke="#EF4444" strokeWidth={1.2} strokeDasharray="5 5" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.25)', padding: '24px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 16px 0', color: '#FFFFFF', width: '100%', textAlign: 'left', letterSpacing: '-0.01em' }}>
          Class Proportions
        </h3>
        <div style={{ width: '100%', height: '180px' }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={pieChartData} cx="50%" cy="50%" innerRadius={52} outerRadius={72} paddingAngle={4} dataKey="value">
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#0F172A', borderColor: 'rgba(255,255,255,0.08)', color: '#F8FAFC' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', marginTop: '12px' }}>
          {pieChartData.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', fontWeight: '500' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.color }}></div>
                <span style={{ color: '#94A3B8' }}>{item.name}</span>
              </div>
              <strong style={{ color: '#FFFFFF' }}>{item.value.toLocaleString()} rows</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}