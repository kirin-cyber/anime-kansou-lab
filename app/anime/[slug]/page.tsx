import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { animeList, getAnimeBySlug, getRelatedAnime, siteConfig } from '@/data/anime';
import AnimeCard from '@/components/AnimeCard';
import AdSpace, { AffiliateButton } from '@/components/AdSpace';
import { getAnimeImageUrl } from '@/lib/jikan';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return animeList.map((anime) => ({ slug: anime.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const anime = getAnimeBySlug(params.slug);
  if (!anime) return {};
  return {
    title: `${anime.title} レビュー・感想・評価`,
    description: `${anime.title}のレビュー・感想・評価。${anime.tagline}。${anime.synopsis.slice(0, 100)}`,
    openGraph: {
      title: `${anime.title} | ${siteConfig.name}`,
      description: anime.tagline,
      images: [{ url: anime.image }],
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ fontSize: '24px', color: i <= rating ? '#fbbf24' : '#1a2540', filter: i <= rating ? 'drop-shadow(0 0 8px #fbbf2466)' : 'none' }}>
          ★
        </span>
      ))}
      <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '22px', color: '#fbbf24', marginLeft: '8px' }}>
        {rating}.0
      </span>
    </div>
  );
}

export default async function AnimeDetailPage({ params }: Props) {
  const anime = getAnimeBySlug(params.slug);
  if (!anime) notFound();

  const related = getRelatedAnime(anime.related);

  // Jikan APIからアニメ画像を取得
  const [animeImage, ...relatedImages] = await Promise.all([
    getAnimeImageUrl(anime.malId),
    ...related.map((r) => getAnimeImageUrl(r.malId)),
  ]);

  // Structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: `${anime.title} レビュー`,
    reviewBody: anime.review,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: anime.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      '@type': 'TVSeries',
      name: anime.title,
      dateCreated: String(anime.info.year),
      description: anime.synopsis,
      productionCompany: { '@type': 'Organization', name: anime.info.studio },
    },
    author: { '@type': 'Person', name: siteConfig.author },
    publisher: { '@type': 'Organization', name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Image */}
      <div style={{ position: 'relative', height: 'clamp(260px, 40vw, 440px)', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={animeImage || anime.image} alt={anime.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #060a1422 0%, #060a14 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #060a14cc 0%, transparent 50%)' }} />

        {/* Era + Genre badges */}
        <div style={{ position: 'absolute', bottom: '32px', left: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ padding: '4px 12px', background: '#00d4ff22', border: '1px solid #00d4ff44', borderRadius: '2px', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00d4ff', backdropFilter: 'blur(8px)' }}>
            {anime.era}
          </span>
          {anime.info.genre.slice(0, 3).map((g) => (
            <span key={g} style={{ padding: '4px 12px', background: '#7b5cf022', border: '1px solid #7b5cf044', borderRadius: '2px', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#7b5cf0', backdropFilter: 'blur(8px)' }}>
              {g}
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Breadcrumb */}
        <nav style={{ padding: '20px 0', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '12px', color: '#4a5872', fontFamily: 'JetBrains Mono, monospace' }}>
          <Link href="/" style={{ color: '#4a5872', textDecoration: 'none' }}>HOME</Link>
          <span>/</span>
          <Link href="/anime" style={{ color: '#4a5872', textDecoration: 'none' }}>ANIME</Link>
          <span>/</span>
          <span style={{ color: '#00d4ff' }}>{anime.title}</span>
        </nav>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr min(320px, 100%)', gap: '48px' }} className="detail-grid">
          {/* Main content */}
          <div>
            {/* Title */}
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: '#e8f0ff', lineHeight: 1.1, marginBottom: '8px', letterSpacing: '-0.02em' }}>
              {anime.title}
            </h1>
            <p style={{ color: '#8a9bc0', fontSize: '16px', marginBottom: '24px', lineHeight: 1.6 }}>
              {anime.tagline}
            </p>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <StarRating rating={anime.rating} />
              <span style={{ color: '#4a5872', fontSize: '13px', fontFamily: 'JetBrains Mono, monospace' }}>
                最終更新: {anime.updatedAt}
              </span>
            </div>

            <hr style={{ border: 'none', height: '1px', background: 'linear-gradient(90deg, transparent, #00d4ff44, transparent)', marginBottom: '40px' }} />

            {/* Synopsis */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '18px', color: '#e8f0ff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00d4ff', padding: '2px 8px', border: '1px solid #00d4ff44', borderRadius: '2px' }}>01</span>
                あらすじ
              </h2>
              <p style={{ color: '#8a9bc0', fontSize: '15px', lineHeight: 2, background: '#0d1424', padding: '24px', borderRadius: '8px', border: '1px solid #1a2540', borderLeft: '3px solid #00d4ff' }}>
                {anime.synopsis}
              </p>
            </section>

            {/* Review */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '18px', color: '#e8f0ff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#ff3cac', padding: '2px 8px', border: '1px solid #ff3cac44', borderRadius: '2px' }}>02</span>
                レビュー・感想
              </h2>
              <div style={{ color: '#b0c0d8', fontSize: '15px', lineHeight: 2, background: '#0d1424', padding: '24px', borderRadius: '8px', border: '1px solid #1a2540', borderLeft: '3px solid #ff3cac' }}>
                {anime.review}
              </div>
            </section>

            {/* Highlights */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '18px', color: '#e8f0ff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#7b5cf0', padding: '2px 8px', border: '1px solid #7b5cf044', borderRadius: '2px' }}>03</span>
                おすすめポイント
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {anime.highlights.map((point, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '14px 16px', background: '#0d1424', border: '1px solid #1a2540', borderRadius: '6px' }}>
                    <span style={{ color: '#7b5cf0', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', marginTop: '1px', flexShrink: 0 }}>
                      ✦ {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ color: '#b0c0d8', fontSize: '14px', lineHeight: 1.7 }}>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommended for / Not for */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '18px', color: '#e8f0ff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00d4ff', padding: '2px 8px', border: '1px solid #00d4ff44', borderRadius: '2px' }}>04</span>
                こんな人に向いている
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="rec-grid">
                <div style={{ background: '#0d1424', border: '1px solid #00d4ff22', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00d4ff', marginBottom: '12px' }}>✓ RECOMMENDED FOR</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {anime.recommended_for.map((r, i) => (
                      <li key={i} style={{ color: '#8a9bc0', fontSize: '13px', lineHeight: 1.6, paddingLeft: '16px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: '#00d4ff' }}>→</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: '#0d1424', border: '1px solid #ff3cac22', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#ff3cac', marginBottom: '12px' }}>✗ NOT FOR</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {anime.not_for.map((r, i) => (
                      <li key={i} style={{ color: '#8a9bc0', fontSize: '13px', lineHeight: 1.6, paddingLeft: '16px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: '#ff3cac' }}>×</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Affiliate CTA */}
            {anime.affiliate_link && (
              <div style={{ marginBottom: '40px' }}>
                <AffiliateButton href={anime.affiliate_link} />
              </div>
            )}

            {/* Ad */}
            <div style={{ marginBottom: '40px' }}>
              <AdSpace size="banner" />
            </div>
          </div>

          {/* Sidebar */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Basic Info */}
            <div style={{ background: '#0d1424', border: '1px solid #1a2540', borderRadius: '8px', padding: '24px', position: 'sticky', top: '80px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00d4ff', letterSpacing: '0.1em', marginBottom: '20px' }}>
                // BASIC INFO
              </div>
              <dl style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { label: '放送年', value: `${anime.info.year}年` },
                  { label: '話数', value: `${anime.info.episodes}話` },
                  { label: '制作会社', value: anime.info.studio },
                  { label: 'ステータス', value: anime.info.status },
                  { label: '原題', value: anime.titleJa },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', paddingBottom: '14px', borderBottom: '1px solid #1a2540' }}>
                    <dt style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#4a5872', flexShrink: 0 }}>{label}</dt>
                    <dd style={{ color: '#e8f0ff', fontSize: '13px', textAlign: 'right', fontWeight: 500 }}>{value}</dd>
                  </div>
                ))}
              </dl>

              {/* Tags */}
              <div style={{ marginTop: '20px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#4a5872', marginBottom: '10px' }}>TAGS</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {anime.tags.map((tag) => (
                    <span key={tag} style={{ padding: '3px 10px', border: '1px solid #1a2540', borderRadius: '2px', fontSize: '11px', color: '#4a5872', fontFamily: 'JetBrains Mono, monospace' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Ad Rectangle */}
            <AdSpace size="rectangle" />
          </aside>
        </div>

        {/* Related Anime */}
        {related.length > 0 && (
          <section style={{ paddingBottom: '80px' }}>
            <hr style={{ border: 'none', height: '1px', background: 'linear-gradient(90deg, transparent, #1a2540, transparent)', marginBottom: '40px' }} />
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00d4ff', letterSpacing: '0.12em', marginBottom: '10px' }}>
              // RELATED
            </div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '22px', color: '#e8f0ff', marginBottom: '24px' }}>
              関連アニメ
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
              {related.map((a, i) => (
                <AnimeCard key={a.slug} anime={a} imageUrl={relatedImages[i]} />
              ))}
            </div>
          </section>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr !important; }
          .rec-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
