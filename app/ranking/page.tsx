import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { animeList, siteConfig } from '@/data/anime';
import AdSpace from '@/components/AdSpace';

export const metadata: Metadata = {
  title: 'アニメランキング',
  description: `${siteConfig.name}の個人的なアニメランキング。`,
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ fontSize: '14px', color: i <= rating ? '#fbbf24' : '#1a2540' }}>★</span>
      ))}
    </div>
  );
}

export default function RankingPage() {
  const ranked = [...animeList].sort((a, b) => b.rating - a.rating);
  const medalColors = [
    { bg: 'linear-gradient(135deg, #fbbf24, #f59e0b)', text: '#060a14' },
    { bg: 'linear-gradient(135deg, #d1d5db, #9ca3af)', text: '#060a14' },
    { bg: 'linear-gradient(135deg, #d97706, #b45309)', text: '#060a14' },
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 24px' }}>
      <style>{`
        .rank-card { transition: transform 0.3s; }
        .rank-card:hover { transform: translateY(-4px); }
        .rank-row { transition: background 0.2s; }
        .rank-row:hover { background: #0d1424 !important; }
        @media (max-width: 600px) { .podium-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#ff3cac', letterSpacing: '0.12em', marginBottom: '10px' }}>// RANKING</div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: '#e8f0ff', marginBottom: '16px' }}>
          アニメランキング
        </h1>
        <p style={{ color: '#8a9bc0', fontSize: '15px', lineHeight: 1.8 }}>
          個人評価をもとにしたおすすめアニメランキング。全{ranked.length}作品掲載。
        </p>
      </div>

      {/* Top 3 */}
      <div className="podium-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px' }}>
        {ranked.slice(0, 3).map((anime, i) => (
          <Link key={anime.slug} href={`/anime/${anime.slug}`} style={{ textDecoration: 'none', order: i === 0 ? 1 : i === 1 ? 0 : 2 }}>
            <div className="rank-card" style={{ background: '#0d1424', border: '1px solid #1a2540', borderRadius: '8px', overflow: 'hidden', paddingBottom: '16px', marginTop: i === 0 ? '0' : '20px' }}>
              <div style={{ background: medalColors[i].bg, padding: '12px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: i === 0 ? '28px' : '22px', color: medalColors[i].text }}>#{i + 1}</div>
              </div>
              <div style={{ position: 'relative', height: '120px' }}>
                <Image src={anime.image} alt={anime.title} fill style={{ objectFit: 'cover' }} sizes="300px" />
              </div>
              <div style={{ padding: '12px 16px 0' }}>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '14px', color: '#e8f0ff', marginBottom: '8px' }}>{anime.title}</h3>
                <StarRating rating={anime.rating} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginBottom: '32px' }}><AdSpace size="banner" /></div>

      {/* Full list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1a2540', borderRadius: '8px', overflow: 'hidden' }}>
        {ranked.map((anime, i) => (
          <Link key={anime.slug} href={`/anime/${anime.slug}`} style={{ textDecoration: 'none' }}>
            <div className="rank-row" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 24px', background: '#060a14', cursor: 'pointer' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '15px', background: i < 3 ? medalColors[i].bg : 'transparent', border: i >= 3 ? '1px solid #1a2540' : 'none', color: i < 3 ? medalColors[i].text : '#4a5872' }}>
                {i + 1}
              </div>
              <div style={{ position: 'relative', width: '64px', height: '48px', borderRadius: '4px', overflow: 'hidden', flexShrink: 0 }}>
                <Image src={anime.image} alt={anime.title} fill style={{ objectFit: 'cover' }} sizes="64px" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '15px', color: '#e8f0ff', marginBottom: '4px' }}>{anime.title}</div>
                <div style={{ color: '#4a5872', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}>{anime.info.year} · {anime.info.studio}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', flexShrink: 0 }}>
                <StarRating rating={anime.rating} />
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '18px', color: '#fbbf24' }}>{anime.rating}.0</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
