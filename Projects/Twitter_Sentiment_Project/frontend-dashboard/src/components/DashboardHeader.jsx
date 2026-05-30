import { Award, Shield } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(15, 23, 42, 0.6))',
        padding: '24px 32px',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        marginBottom: '32px',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)',
              padding: '10px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)',
            }}
          >
            <Shield size={28} color="#0A0F1D" style={{ strokeWidth: 2.5 }} />
          </div>
          <div>
            <h1
              style={{
                fontSize: '24px',
                fontWeight: '800',
                letterSpacing: '-0.025em',
                margin: 0,
                background: 'linear-gradient(to right, #FFFFFF, #94A3B8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Sentinel Lync Engine
            </h1>
            <p style={{ color: '#64748B', fontSize: '13px', fontWeight: '500', marginTop: '2px', marginBottom: 0 }}>
              Advanced Platform Safety & Linguistic Sentiment Analytics Dashboard
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(56, 189, 248, 0.06)',
          padding: '10px 18px',
          borderRadius: '10px',
          border: '1px solid rgba(56, 189, 248, 0.15)',
        }}
      >
        <Award size={18} color="#38BDF8" />
        <span style={{ fontSize: '13px', fontWeight: '600', color: '#38BDF8', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          PREMIUM ACCESS
        </span>
      </div>
    </header>
  );
}