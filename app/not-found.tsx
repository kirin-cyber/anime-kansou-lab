import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: '120px',
          color: '#00d4ff',
          lineHeight: 1,
          textShadow: '0 0 40px #00d4ff44',
          marginBottom: '16px',
        }}
      >
        404
      </div>
      <div
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '12px',
          color: '#4a5872',
          letterSpacing: '0.1em',
          marginBottom: '24px',
        }}
      >
        PAGE NOT FOUND
      </div>
      <p style={{ color: '#8a9bc0', fontSize: '15px', marginBottom: '32px' }}>
        お探しのページは見つかりませんでした。
      </p>
      <Link
        href="/"
        style={{
          padding: '12px 28px',
          background: 'linear-gradient(135deg, #00d4ff, #7b5cf0)',
          borderRadius: '6px',
          color: '#060a14',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '14px',
        }}
      >
        トップへ戻る
      </Link>
    </div>
  );
}
