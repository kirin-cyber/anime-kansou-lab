'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/anime', label: 'アニメ一覧' },
    { href: '/ranking', label: 'ランキング' },
    { href: '/category/era', label: 'カテゴリ' },
    { href: '/profile', label: 'プロフィール' },
  ];

  return (
    <header
      style={{
        background: 'rgba(6,10,20,0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #00d4ff22',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(135deg, #00d4ff, #7b5cf0)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '14px',
                  color: '#060a14',
                  boxShadow: '0 0 20px #00d4ff44',
                  flexShrink: 0,
                }}
              >
                ALab
              </div>
              <span
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#e8f0ff',
                  letterSpacing: '0.02em',
                }}
              >
                アニメ感想ラボ
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '8px', alignItems: 'center' }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: '#8a9bc0',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 500,
                  padding: '6px 14px',
                  borderRadius: '4px',
                  transition: 'all 0.2s',
                  letterSpacing: '0.02em',
                  border: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = '#00d4ff';
                  (e.target as HTMLElement).style.borderColor = '#00d4ff33';
                  (e.target as HTMLElement).style.background = '#00d4ff0a';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = '#8a9bc0';
                  (e.target as HTMLElement).style.borderColor = 'transparent';
                  (e.target as HTMLElement).style.background = 'transparent';
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid #1a2540',
              borderRadius: '4px',
              padding: '8px',
              cursor: 'pointer',
              color: '#8a9bc0',
              flexDirection: 'column',
              gap: '4px',
              width: '36px',
              height: '36px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-menu-btn"
            aria-label="メニュー"
          >
            <span style={{ width: '18px', height: '1.5px', background: menuOpen ? '#00d4ff' : '#8a9bc0', display: 'block', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ width: '18px', height: '1.5px', background: '#8a9bc0', display: 'block', opacity: menuOpen ? 0 : 1, transition: 'all 0.2s' }} />
            <span style={{ width: '18px', height: '1.5px', background: menuOpen ? '#00d4ff' : '#8a9bc0', display: 'block', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              padding: '12px 0 20px',
              borderTop: '1px solid #1a2540',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: '#8a9bc0',
                  textDecoration: 'none',
                  fontSize: '14px',
                  padding: '10px 12px',
                  borderRadius: '4px',
                  display: 'block',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
