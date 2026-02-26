import type { Metadata } from 'next';
import { siteConfig, animeList } from '@/data/anime';
import AdSpace from '@/components/AdSpace';

export const metadata: Metadata = {
  title: 'プロフィール',
  description: `${siteConfig.name}の運営者プロフィール。アニメが好きな個人ブロガーによるレビューサイトです。`,
};

export default function ProfilePage() {
  const totalReviews = animeList.length;
  const avgRating = (animeList.reduce((sum, a) => sum + a.rating, 0) / totalReviews).toFixed(1);
  const top5Count = animeList.filter((a) => a.rating === 5).length;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px' }}>
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00d4ff', letterSpacing: '0.12em', marginBottom: '10px' }}>
          // PROFILE
        </div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', color: '#e8f0ff' }}>
          プロフィール
        </h1>
      </div>

      {/* Profile card */}
      <div
        style={{
          background: '#0d1424',
          border: '1px solid #1a2540',
          borderRadius: '12px',
          padding: '40px',
          marginBottom: '40px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* BG decoration */}
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, #00d4ff08, transparent)', pointerEvents: 'none' }} />

        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Avatar */}
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00d4ff, #7b5cf0, #ff3cac)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: '32px',
              color: '#060a14',
              flexShrink: 0,
              boxShadow: '0 0 30px #00d4ff33',
            }}
          >
            AAJ
          </div>

          <div style={{ flex: 1, minWidth: '200px' }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '24px', color: '#e8f0ff', marginBottom: '8px' }}>
              AAJ編集部
            </h2>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#00d4ff', marginBottom: '16px' }}>
              @AnimeArchiveJP
            </div>
            <p style={{ color: '#8a9bc0', fontSize: '14px', lineHeight: 1.9 }}>
              2010年代からアニメを見続けているアニメオタク。
              Steins;Gate が人生を変えた作品で、SFと心理描写が強い作品を好みます。
              このサイトでは自分の感想と考察を正直に書くことを大切にしています。
            </p>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #1a2540' }}>
          {[
            { label: 'レビュー数', value: totalReviews },
            { label: '平均評価', value: avgRating },
            { label: '★5作品数', value: top5Count },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '28px', color: '#00d4ff', textShadow: '0 0 20px #00d4ff55' }}>
                {stat.value}
              </div>
              <div style={{ color: '#4a5872', fontSize: '12px', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About the site */}
      <div style={{ background: '#0d1424', border: '1px solid #1a2540', borderRadius: '12px', padding: '32px', marginBottom: '32px' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '18px', color: '#e8f0ff', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#7b5cf0', padding: '2px 8px', border: '1px solid #7b5cf044', borderRadius: '2px' }}>SITE</span>
          このサイトについて
        </h2>
        <p style={{ color: '#8a9bc0', fontSize: '14px', lineHeight: 2, marginBottom: '16px' }}>
          Anime Archive Japan（AAJ）は、個人が運営するアニメレビュー・考察サイトです。
          2000〜2020年代の日本アニメを中心に、深掘りしたレビューと個人的な考察をお届けしています。
        </p>
        <p style={{ color: '#8a9bc0', fontSize: '14px', lineHeight: 2, marginBottom: '16px' }}>
          「次に何を見ようか」で迷っている方の参考になれば幸いです。
          評価は完全に個人の主観によるものですが、なるべく理由を丁寧に書くよう心がけています。
        </p>
        <p style={{ color: '#4a5872', fontSize: '13px', lineHeight: 2 }}>
          ※当サイトはGoogle AdSenseおよびアフィリエイトプログラムを利用しています。
          広告収入はサイト運営のためにのみ使用します。
        </p>
      </div>

      {/* Favorites */}
      <div style={{ background: '#0d1424', border: '1px solid #1a2540', borderRadius: '12px', padding: '32px', marginBottom: '40px' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '18px', color: '#e8f0ff', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#ff3cac', padding: '2px 8px', border: '1px solid #ff3cac44', borderRadius: '2px' }}>FAVE</span>
          好きなジャンル・特徴
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['SF・タイムトラベル', 'ダークファンタジー', '群像劇', '伏線・考察系', '心理描写', 'ufotable作品', '名作認定作品'].map((tag) => (
            <span key={tag} style={{ padding: '6px 16px', border: '1px solid #ff3cac33', borderRadius: '20px', fontSize: '13px', color: '#ff3cac', background: '#ff3cac08' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <AdSpace size="banner" />
    </div>
  );
}
