# Anime Archive Japan 🎌

日本アニメのレビュー・考察・ランキングサイト。Next.js 14 (App Router) で構築。

## 📁 フォルダ構成

```
anime-archive-japan/
├── app/
│   ├── layout.tsx          # 共通レイアウト（Header/Footer/SEO）
│   ├── page.tsx            # トップページ
│   ├── globals.css         # グローバルスタイル
│   ├── not-found.tsx       # 404ページ
│   ├── anime/
│   │   ├── page.tsx        # アニメ一覧ページ
│   │   └── [slug]/
│   │       └── page.tsx    # 個別アニメ詳細ページ
│   ├── ranking/
│   │   └── page.tsx        # ランキングページ
│   ├── category/
│   │   └── [type]/
│   │       └── page.tsx    # カテゴリページ（年代別・ジャンル別）
│   └── profile/
│       └── page.tsx        # プロフィールページ
├── components/
│   ├── Header.tsx          # ヘッダー
│   ├── Footer.tsx          # フッター
│   ├── AnimeCard.tsx       # アニメカードコンポーネント
│   └── AdSpace.tsx         # 広告スペース・アフィリエイト
├── data/
│   └── anime.ts            # ★ アニメデータ（ここを編集するだけで記事追加！）
└── README.md
```

## 🚀 セットアップ手順

```bash
# 1. Node.jsをインストール（https://nodejs.org/）
# 2. プロジェクトフォルダで
npm install
npm run dev
# → http://localhost:3000 で確認
```

## ✏️ 新記事の追加方法

`data/anime.ts` の `animeList` 配列に追記するだけです。

## 🌐 Vercelで無料公開

1. GitHubにプッシュ
2. https://vercel.com でGitHubログイン
3. リポジトリを選択して「Deploy」
4. 完了！
