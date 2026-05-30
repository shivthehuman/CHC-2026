import { MessageSquare } from 'lucide-react';

export default function TextSimulator({ customInputText, onChangeText, simulatedMetrics }) {
  return (
    <div style={{ width: '100%', marginBottom: '32px' }}>
      <div
        style={{
          backgroundColor: 'rgba(30, 41, 59, 0.25)',
          padding: '28px',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          background: 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.3), rgba(15, 23, 42, 0.4))',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <MessageSquare size={20} color="#38BDF8" />
          <h3 style={{ fontSize: '18px', fontWeight: '700', margin: 0, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            Real-Time Arbitrary Text Evaluation Engine Simulator
          </h3>
        </div>
        <p style={{ color: '#64748B', fontSize: '13px', marginTop: 0, marginBottom: '20px', fontWeight: '500' }}>
          Upgraded Kernel Execution Model: Type any raw string sequence below to execute live, sub-second lexical token classification mappings.
        </p>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', marginBottom: '24px' }}>
          <input
            type="text"
            placeholder="Type testing text string here... (e.g., 'fuck', 'hate' or positive expressions to test responsive state shifts)"
            value={customInputText}
            onChange={(e) => onChangeText(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: '#090F1D',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '16px 20px',
              outline: 'none',
              fontSize: '14px',
              transition: 'all 0.2s',
              boxSizing: 'border-box',
            }}
          />
          {customInputText && (
            <button
              onClick={() => onChangeText('')}
              style={{
                position: 'absolute',
                right: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#94A3B8',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: '600',
              }}
            >
              Clear Input
            </button>
          )}
        </div>

        {simulatedMetrics ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', backgroundColor: '#090F1D', padding: '20px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: '#475569', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Model Classification</span>
              <span style={{ color: simulatedMetrics.label === 1 ? '#EF4444' : '#10B981', fontSize: '14px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: simulatedMetrics.label === 1 ? '#EF4444' : '#10B981' }}></div>
                {simulatedMetrics.label === 1 ? 'Flagged Violation' : 'Secure Discourse'}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: '#475569', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Positivity Metric</span>
              <span style={{ color: '#10B981', fontSize: '15px', fontWeight: '700' }}>{simulatedMetrics.positive.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: '#475569', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Negativity Metric</span>
              <span style={{ color: '#EF4444', fontSize: '15px', fontWeight: '700' }}>{simulatedMetrics.negative.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: '#475569', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Compound Index Amplitude</span>
              <span style={{ color: '#38BDF8', fontSize: '15px', fontWeight: '700' }}>{simulatedMetrics.compound.toFixed(2)}</span>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '16px', color: '#475569', fontSize: '13px', fontStyle: 'italic', border: '1px dashed rgba(255, 255, 255, 0.03)', borderRadius: '12px' }}>
            Waiting for live keystroke inputs... Character array sequence empty.
          </div>
        )}
      </div>
    </div>
  );
}