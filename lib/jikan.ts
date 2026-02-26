// Jikan API - MyAnimeListの無料非公式API
// アニメIDから公式画像URLを取得する

const imageCache: Record<number, string> = {};

export async function getAnimeImageUrl(malId: number): Promise<string> {
  if (imageCache[malId]) return imageCache[malId];

  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${malId}`, {
      next: { revalidate: 86400 }, // 24時間キャッシュ
    });
    if (!res.ok) throw new Error('Jikan API error');
    const data = await res.json();
    const url: string = data?.data?.images?.jpg?.large_image_url ?? '';
    if (url) imageCache[malId] = url;
    return url;
  } catch {
    return ''; // フォールバックはコンポーネント側で処理
  }
}
