import type { Metadata } from 'next';
import Link from 'next/link';
import { animeList, siteConfig } from '@/data/anime';
import AnimeCard from '@/components/AnimeCard';

type Props = { params: { type: string } };

export function generateStaticParams() {
  return [{ type: 'era' }, { type: 'genre' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isEra = params.type === 'era';
  return {
    title: isEra ? '年代別アニメ' : 'ジャンル別アニメ',
    description: `${siteConfig.name}の${isEra ? '年代別' : 'ジャンル別'}アニメ一覧。`,
  };
}

export default function CategoryPage({ params }: Props) {
  const isEra = params.type === 'era';

  // Group by era or genre
  const grouped: Record<string, typeof animeList> = {};

  if (isEra) {
    const eras = ['2000s', '2010s', '2020s'] as const;
    eras.forEach((era) => {
      grouped[era] = animeList.filter((a) => a.era === era);
    });
  } else {
    animeList.forEach((anime) => {
      anime.info.genre.forEach((genre) => {
        if (!grouped[genre]) grouped[genre] = [];
        if (!grouped[genre].find((a) => a.slug === anime.slug)) {
          grouped[genre].push(anime);
        }
      });
    });
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <Link
            href="/category/era"
            style={{
              padding: '8px 20px',
              borderRadius: '4px',
              fontWeight: 600,
              fontSize: '13px',
              textDecoration: 'none',
              border: '1px solid',
              transition: 'all 0.2s',
              background: isEra ? '#00d4ff' : 'transparent',
              borderColor: isEra ? '#00d4ff' : '#1a2540',
              color: isEra ? '#060a14' : '#8a9bc0',
            }}
          >
            年代別
          </Link>
          <Link
            href="/category/genre"
            style={{
              padding: '8px 20px',
              borderRadius: '4px',
              fontWeight: 600,
              fontSize: '13px',
              textDecoration: 'none',
              border: '1px solid',
              transition: 'all 0.2s',
              background: !isEra ? '#00d4ff' : 'transparent',
              borderColor: !isEra ? '#00d4ff' : '#1a2540',
              color: !isEra ? '#060a14' : '#8a9bc0',
            }}
          >
            ジャンル別
          </Link>
        </div>

        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00d4ff', letterSpacing: '0.12em', marginBottom: '10px' }}>
          // CATEGORY
        </div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', color: '#e8f0ff' }}>
          {isEra ? '年代別アニメ' : 'ジャンル別アニメ'}
        </h1>
      </div>

      {/* Grouped sections */}
      {Object.entries(grouped)
        .filter(([, items]) => items.length > 0)
        .map(([key, items]) => (
          <section key={key} style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <h2
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '22px',
                  color: '#e8f0ff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span
                  style={{
                    padding: '4px 12px',
                    background: '#00d4ff22',
                    border: '1px solid #00d4ff44',
                    borderRadius: '2px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '12px',
                    color: '#00d4ff',
                  }}
                >
                  {key}
                </span>
                {isEra ? `${key} アニメ` : key}
              </h2>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#4a5872' }}>
                {items.length}作品
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
              {items.map((anime) => (
                <AnimeCard key={anime.slug} anime={anime} />
              ))}
            </div>
          </section>
        ))}
    </div>
  );
}
