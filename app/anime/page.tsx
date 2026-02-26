import type { Metadata } from 'next';
import { animeList, siteConfig } from '@/data/anime';
import AnimeCard from '@/components/AnimeCard';
import AdSpace from '@/components/AdSpace';
import { getAnimeImageUrl } from '@/lib/jikan';

export const metadata: Metadata = {
  title: 'アニメ一覧',
  description: `${siteConfig.name}のアニメ一覧ページ。2000〜2020年代の人気アニメのレビューをまとめています。`,
};

export default async function AnimePage() {
  const genres = Array.from(new Set(animeList.flatMap((a) => a.info.genre)));

  // Jikan APIから全アニメの画像URLを並列取得
  const imageUrls = await Promise.all(
    animeList.map((a) => getAnimeImageUrl(a.malId))
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00d4ff', letterSpacing: '0.12em', marginBottom: '10px' }}>
          // ANIME LIST
        </div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: '#e8f0ff', marginBottom: '16px' }}>
          アニメ一覧
        </h1>
        <p style={{ color: '#8a9bc0', fontSize: '15px', lineHeight: 1.8 }}>
          全{animeList.length}作品のレビューを掲載しています。
        </p>
      </div>

      {/* Genre tags */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {genres.map((g) => (
          <span key={g} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', padding: '5px 12px', background: '#0d1424', border: '1px solid #1a2540', borderRadius: '4px', color: '#8a9bc0', cursor: 'pointer' }}>
            {g}
          </span>
        ))}
      </div>

      <div style={{ marginBottom: '32px' }}><AdSpace size="banner" /></div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
        {animeList.map((anime, i) => (
          <AnimeCard key={anime.slug} anime={anime} imageUrl={imageUrls[i]} />
        ))}
      </div>
    </div>
  );
}
