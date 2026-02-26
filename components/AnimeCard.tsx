'use client';
import Link from 'next/link';
import { Anime } from '@/data/anime';

interface Props {
  anime: Anime;
  imageUrl?: string;
}

export default function AnimeCard({ anime, imageUrl }: Props) {
  const img = imageUrl || anime.image;

  return (
    <Link href={`/anime/${anime.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        className="anime-card"
        style={{
          background: '#0d1424',
          border: '1px solid #1a2540',
          borderRadius: '8px',
          overflow: 'hidden',
          transition: 'all 0.3s',
          cursor: 'pointer',
        }}
      >
        <style>{`.anime-card:hover { border-color: #00d4ff44 !important; transform: translateY(-4px); }`}</style>

        <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#060a14' }}>
          {img ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={img} alt={anime.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2a3a5a', fontSize: '48px' }}>🎬</div>
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, #0d1424 100%)' }} />
          <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(6,10,20,0.85)', border: '1px solid #fbbf2444', borderRadius: '6px', padding: '4px 8px', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '13px', color: '#fbbf24' }}>
            ★ {anime.rating}.0
          </div>
        </div>

        <div style={{ padding: '16px' }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '15px', color: '#e8f0ff', marginBottom: '4px', lineHeight: 1.3 }}>{anime.title}</div>
          <div style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '12px', color: '#4a5872', marginBottom: '10px' }}>{anime.titleJa}</div>
          <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '12px', color: '#8a9bc0', lineHeight: 1.7, marginBottom: '12px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>
            {anime.tagline}
          </p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {anime.info.genre.slice(0, 2).map(g => (
              <span key={g} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', padding: '3px 8px', background: '#060a14', border: '1px solid #1a2540', borderRadius: '4px', color: '#00d4ff' }}>{g}</span>
            ))}
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', padding: '3px 8px', background: '#060a14', border: '1px solid #1a2540', borderRadius: '4px', color: '#4a5872' }}>{anime.info.year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
