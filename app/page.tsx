import Link from 'next/link';
import Image from 'next/image';
import { getAnimeImageUrl } from '@/lib/jikan';
import type { Metadata } from 'next';
import { animeList, siteConfig } from '@/data/anime';
import AnimeCard from '@/components/AnimeCard';
import AdSpace from '@/components/AdSpace';

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
};

// Structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/anime?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default async function Home() {
  const featuredAnime = animeList.slice(0, 4);
  const topRated = [...animeList].sort((a, b) => b.rating - a.rating).slice(0, 3);

  // Jikan APIから画像を並列取得
  const [featuredImages, topRatedImages] = await Promise.all([
    Promise.all(featuredAnime.map((a) => getAnimeImageUrl(a.malId))),
    Promise.all(topRated.map((a) => getAnimeImageUrl(a.malId))),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '80px',
          paddingBottom: '80px',
          minHeight: '520px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(#00d4ff08 1px, transparent 1px), linear-gradient(90deg, #00d4ff08 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, #00d4ff15 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 50%, #7b5cf015 0%, transparent 50%)',
          }}
        />
        {/* Scan line */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '150px',
            background: 'linear-gradient(to bottom, transparent, #00d4ff04, transparent)',
            animation: 'scanLine 8s linear infinite',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', width: '100%' }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 14px',
              border: '1px solid #00d4ff44',
              borderRadius: '20px',
              marginBottom: '24px',
              background: '#00d4ff08',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00d4ff', boxShadow: '0 0 8px #00d4ff' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00d4ff', letterSpacing: '0.1em' }}>
              ANIME ARCHIVE JAPAN
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(36px, 6vw, 72px)',
              lineHeight: 1.1,
              marginBottom: '20px',
              color: '#e8f0ff',
              letterSpacing: '-0.02em',
            }}
          >
            名作アニメの
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #7b5cf0 50%, #ff3cac 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              記録と考察
            </span>
          </h1>

          <p
            style={{
              color: '#8a9bc0',
              fontSize: 'clamp(14px, 2vw, 18px)',
              maxWidth: '560px',
              lineHeight: 1.8,
              marginBottom: '36px',
            }}
          >
            2000〜2020年代の日本アニメを深掘りレビュー。
            <br />
            見るべき作品を、徹底した考察とともにお届けします。
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              href="/anime"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                background: 'linear-gradient(135deg, #00d4ff, #7b5cf0)',
                borderRadius: '6px',
                color: '#060a14',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.02em',
                boxShadow: '0 0 30px #00d4ff33',
                transition: 'all 0.2s',
              }}
            >
              アニメ一覧を見る →
            </Link>
            <Link
              href="/ranking"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 28px',
                border: '1px solid #1a2540',
                borderRadius: '6px',
                color: '#8a9bc0',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              ランキングを見る
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '32px', marginTop: '48px', flexWrap: 'wrap' }}>
            {[
              { num: animeList.length, label: 'レビュー記事数' },
              { num: '★ 5.0', label: '最高評価作品あり' },
              { num: '毎月', label: '更新予定' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: '28px',
                    color: '#00d4ff',
                    textShadow: '0 0 20px #00d4ff55',
                  }}
                >
                  {stat.num}
                </div>
                <div style={{ color: '#4a5872', fontSize: '12px', marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 40px' }}>
        <AdSpace size="leaderboard" />
      </div>

      {/* Featured Anime */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00d4ff', letterSpacing: '0.12em', marginBottom: '8px' }}>
              // FEATURED
            </div>
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(22px, 3vw, 30px)',
                color: '#e8f0ff',
              }}
            >
              注目のレビュー
            </h2>
          </div>
          <Link
            href="/anime"
            style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}
          >
            すべて見る →
          </Link>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {featuredAnime.map((anime, i) => (
            <AnimeCard key={anime.slug} anime={anime} imageUrl={featuredImages[i]} />
          ))}
        </div>
      </section>

      <style>{`.top-rank-row:hover { border-color: #ff3cac33 !important; background: #0d1424 !important; }`}</style>
      {/* Top Rated Mini Ranking */}
      <section
        style={{
          background: '#0d1424',
          borderTop: '1px solid #1a2540',
          borderBottom: '1px solid #1a2540',
          padding: '60px 24px',
          marginBottom: '80px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#ff3cac', letterSpacing: '0.12em', marginBottom: '8px' }}>
                // TOP RATED
              </div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 30px)', color: '#e8f0ff' }}>
                高評価ランキング
              </h2>
            </div>
            <Link href="/ranking" style={{ color: '#ff3cac', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
              ランキング全件 →
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {topRated.map((anime, i) => (
              <Link key={anime.slug} href={`/anime/${anime.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  className="top-rank-row"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 20px',
                    background: '#060a14',
                    border: '1px solid #1a2540',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  }}

                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: i === 0 ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : i === 1 ? 'linear-gradient(135deg, #9ca3af, #6b7280)' : 'linear-gradient(135deg, #b45309, #92400e)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: '14px',
                      color: '#060a14',
                      flexShrink: 0,
                      boxShadow: i === 0 ? '0 0 16px #fbbf2444' : 'none',
                    }}
                  >
                    {i + 1}
                  </div>
                  <div style={{ position: 'relative', width: '56px', height: '40px', borderRadius: '4px', overflow: 'hidden', flexShrink: 0 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={topRatedImages[i] || anime.image} alt={anime.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '14px', color: '#e8f0ff' }}>{anime.title}</div>
                    <div style={{ color: '#4a5872', fontSize: '12px', marginTop: '2px' }}>{anime.info.genre.slice(0, 2).join(' / ')}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '2px', flexShrink: 0 }}>
                    {[1,2,3,4,5].map(s => (
                      <span key={s} style={{ color: s <= anime.rating ? '#fbbf24' : '#1a2540', fontSize: '13px' }}>★</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to use / SEO content */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div
          style={{
            background: '#0d1424',
            border: '1px solid #1a2540',
            borderRadius: '8px',
            padding: '40px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              color: '#e8f0ff',
              marginBottom: '16px',
            }}
          >
            Anime Archive Japanについて
          </h2>
          <p style={{ color: '#8a9bc0', fontSize: '14px', lineHeight: 1.9, marginBottom: '16px' }}>
            当サイトは2000〜2020年代の日本アニメを中心に、深掘りレビュー・ランキング・考察記事を掲載している個人運営のアニメレビューサイトです。
          </p>
          <p style={{ color: '#8a9bc0', fontSize: '14px', lineHeight: 1.9 }}>
            「次に何を見ようか」と迷っているアニメファンの方へ、本当に面白い作品を正直な感想とともにご紹介します。Steins;Gate、Re:ゼロ、SAO、Fate/Zeroなどの名作から、隠れた傑作まで幅広くレビューしています。
          </p>
        </div>
      </section>
    </>
  );
}
