import { ListFilter, Search } from 'lucide-react';

export default function TweetTable({ searchTerm, onSearchChange, activeFilter, rowLimit, onRowLimitChange, filteredTweets }) {
  return (
    <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.25)', padding: '24px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', margin: 0, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            Data Stream Corpus Logs: <span style={{ color: '#38BDF8', textTransform: 'capitalize' }}>{activeFilter} View</span>
          </h3>
          <span style={{ fontSize: '12px', color: '#64748B', fontWeight: '500' }}>
            Isolating database allocation rows dynamically based on dashboard card filters.
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#090F1D', border: '1px solid rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '8px' }}>
            <ListFilter size={14} color="#64748B" />
            <select
              value={rowLimit}
              onChange={(e) => onRowLimitChange(Number(e.target.value))}
              style={{ backgroundColor: 'transparent', color: '#94A3B8', border: 'none', outline: 'none', fontSize: '13px', cursor: 'pointer', fontWeight: '600' }}
            >
              <option value={10} style={{ backgroundColor: '#0A0F1D' }}>Show 10 Rows</option>
              <option value={100} style={{ backgroundColor: '#0A0F1D' }}>Show 100 Rows</option>
              <option value={1000} style={{ backgroundColor: '#0A0F1D' }}>Show 1000 Rows</option>
              <option value={10000} style={{ backgroundColor: '#0A0F1D' }}>Show 10000 Rows</option>
              <option value={-1} style={{ backgroundColor: '#0A0F1D' }}>Show ALL Data</option>
            </select>
          </div>

          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', color: '#475569' }} />
            <input
              type="text"
              placeholder="Search matching text..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              style={{ backgroundColor: '#090F1D', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '8px 12px 8px 36px', width: '200px', fontSize: '13px', outline: 'none' }}
            />
          </div>
        </div>
      </div>

      <div style={{ overflowX: 'auto', maxHeight: '400px', overflowY: 'auto', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
        {filteredTweets.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#475569', padding: '32px', fontStyle: 'italic', margin: 0 }}>
            No historical data rows match your current logical filter strings.
          </p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead style={{ position: 'sticky', top: 0, backgroundColor: '#111827', zIndex: 10, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <tr style={{ color: '#64748B', fontWeight: '600' }}>
                <th style={{ padding: '14px 16px' }}>Vector ID</th>
                <th style={{ padding: '14px 16px' }}>Chronology</th>
                <th style={{ padding: '14px 16px' }}>Purified Tokenized Tweet Sequence</th>
                <th style={{ padding: '14px 16px' }}>Compound Score</th>
                <th style={{ padding: '14px 16px' }}>Classification Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTweets.map((tweet) => (
                <tr key={tweet.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)', backgroundColor: tweet.label === 1 ? 'rgba(239, 68, 68, 0.02)' : 'transparent', transition: 'background-color 0.2s' }}>
                  <td style={{ padding: '14px 16px', fontWeight: '600', color: '#475569' }}>#{tweet.id}</td>
                  <td style={{ padding: '14px 16px', color: '#64748B' }}>{tweet.timestamp}</td>
                  <td style={{ padding: '14px 16px', fontStyle: 'italic', color: '#94A3B8', maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    "{tweet.ultra_clean_tweet}"
                  </td>
                  <td style={{ padding: '14px 16px', fontWeight: '700', color: tweet.compound >= 0 ? '#10B981' : '#EF4444' }}>
                    {tweet.compound > 0 ? `+${tweet.compound.toFixed(2)}` : tweet.compound.toFixed(2)}
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span
                      style={{
                        backgroundColor: tweet.label === 1 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                        color: tweet.label === 1 ? '#EF4444' : '#10B981',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {tweet.label === 1 ? 'Hate Speech Violator' : 'Verified Secure'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}