'use client';
import Link from 'next/link';
import { siteConfig } from '@/data/anime';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #1a2540',
        background: '#060a14',
        marginTop: '80px',
        padding: '48px 24px 32px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '18px',
                color: '#e8f0ff',
                marginBottom: '12px',
              }}
            >
              アニメ感想ラボ
            </div>
            <p style={{ color: '#4a5872', fontSize: '13px', lineHeight: 1.8 }}>
              {siteConfig.tagline}
              <br />
              2000〜2020年代の名作アニメを深掘りレビュー
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: '#00d4ff',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              NAVIGATION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { href: '/', label: 'トップページ' },
                { href: '/anime', label: 'アニメ一覧' },
                { href: '/ranking', label: 'ランキング' },
                { href: '/profile', label: 'プロフィール' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#4a5872',
                    textDecoration: 'none',
                    fontSize: '13px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00d4ff')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#4a5872')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Category */}
          <div>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: '#00d4ff',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              CATEGORY
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { href: '/category/era', label: '年代別' },
                { href: '/category/genre', label: 'ジャンル別' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#4a5872',
                    textDecoration: 'none',
                    fontSize: '13px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00d4ff')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#4a5872')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid #1a2540',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ color: '#4a5872', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}>
            © {new Date().getFullYear()} アニメ感想ラボ. All rights reserved.
          </p>
          <p style={{ color: '#4a5872', fontSize: '11px' }}>
            当サイトはアフィリエイトプログラムを利用しています
          </p>
        </div>
      </div>
    </footer>
  );
}
