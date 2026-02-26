'use client';

type AdSpaceProps = {
  slot?: string;
  size?: 'banner' | 'rectangle' | 'leaderboard';
  className?: string;
};

const sizes = {
  banner: { width: '100%', height: '90px', label: '広告スペース (728×90)' },
  rectangle: { width: '300px', height: '250px', label: '広告スペース (300×250)' },
  leaderboard: { width: '100%', height: '120px', label: '広告スペース (970×120)' },
};

export default function AdSpace({ slot, size = 'banner', className }: AdSpaceProps) {
  const { width, height, label } = sizes[size];

  // When you have your AdSense ID, replace this with actual ad code:
  // return (
  //   <ins className="adsbygoogle"
  //     style={{ display: 'block', width, height }}
  //     data-ad-client="ca-pub-XXXXXXXXXX"
  //     data-ad-slot={slot}
  //     data-ad-format="auto"
  //     data-full-width-responsive="true" />
  // );

  return (
    <div
      className={className}
      style={{
        width,
        maxWidth: '100%',
        height,
        border: '1px dashed #1a2540',
        background: '#0d1424',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#4a5872',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '11px',
        letterSpacing: '0.08em',
        borderRadius: '4px',
        margin: '0 auto',
      }}
    >
      {label}
    </div>
  );
}

// Affiliate link component
type AffiliateButtonProps = {
  href: string;
  label?: string;
};

export function AffiliateButton({ href, label = '公式サイトで視聴する →' }: AffiliateButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 24px',
        background: 'linear-gradient(135deg, #00d4ff22, #7b5cf022)',
        border: '1px solid #00d4ff44',
        borderRadius: '6px',
        color: '#00d4ff',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '14px',
        transition: 'all 0.2s',
        letterSpacing: '0.02em',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background = 'linear-gradient(135deg, #00d4ff33, #7b5cf033)';
        el.style.boxShadow = '0 0 20px #00d4ff22';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background = 'linear-gradient(135deg, #00d4ff22, #7b5cf022)';
        el.style.boxShadow = 'none';
      }}
    >
      ▶ {label}
    </a>
  );
}
