export type Anime = {
  slug: string;
  malId: number;
  title: string;
  titleJa: string;
  tagline: string;
  image: string;
  synopsis: string;
  review: string;
  rating: number;
  highlights: string[];
  recommended_for: string[];
  not_for: string[];
  info: {
    year: number;
    episodes: number | string;
    studio: string;
    genre: string[];
    status: string;
  };
  related: string[];
  affiliate_link?: string;
  tags: string[];
  era: '2000s' | '2010s' | '2020s';
  updatedAt: string;
};

export const animeList: Anime[] = [
  {
    slug: 'steins-gate',
    malId: 9253,
    title: 'Steins;Gate',
    titleJa: 'シュタインズ・ゲート',
    tagline: '時間を超えた愛と後悔の物語',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80',
    synopsis:
      '発明家を自称する大学生・岡部倫太郎は、秋葉原のラボで"未来ガジェット"の開発に明け暮れていた。ある日、偶然から電話レンジ（仮）がタイムマシンとして機能することを発見。過去へのメッセージ送信（Dメール）を繰り返すうちに、世界線が変動し、仲間たちの命を巻き込んだ壮絶な運命が幕を開ける。科学アドベンチャーゲームを原作とする、SF・タイムトラベル・青春が交差する傑作アニメ。',
    review:
      '序盤はゆったりとした日常描写が続くが、中盤以降の怒濤の展開に息を呑む。「収束」という概念を軸にした伏線回収の精巧さは圧巻で、1話に戻って見返したくなる構成の完成度が突出している。岡部倫太郎というキャラクターの成長と葛藤は、アニメ史上屈指の感情体験を提供してくれる。「El Psy Kongroo」という合言葉が、今でも胸に刺さる。絶対に第22話は覚悟して見てほしい。',
    rating: 5,
    highlights: [
      '精巧に設計された時間軸と伏線回収',
      '岡部倫太郎の唯一無二なキャラクター性',
      'ダークになるほど引き込まれる中盤以降の展開',
      'サウンドトラックの完成度が高く世界観を強化',
      '原作ゲームファンも満足できる高い再現度',
    ],
    recommended_for: [
      'SFやタイムトラベル系が好きな人',
      '伏線と考察が楽しいアニメを求めている人',
      '感情移入できるドラマを求める視聴者',
      '一気見で鑑賞したい人',
    ],
    not_for: ['テンポ重視でアクションを求める人', '序盤の日常パートが苦手な人'],
    info: {
      year: 2011,
      episodes: 24,
      studio: 'White Fox',
      genre: ['SF', 'タイムトラベル', 'ドラマ', 'サスペンス'],
      status: '完結',
    },
    related: ['re-zero', 'fate-zero'],
    tags: ['SF', 'タイムトラベル', '名作', '考察', '秋葉原'],
    era: '2010s',
    updatedAt: '2024-06-01',
  },
  {
    slug: 're-zero',
    malId: 31240,
    title: 'Re:ゼロから始める異世界生活',
    titleJa: 'リゼロ',
    tagline: '死に戻りを繰り返す少年の、絶望と希望のダークファンタジー',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
    synopsis:
      'コンビニからの帰り道、突然異世界に召喚されたナツキ・スバル。彼が持つ唯一の能力「死に戻り」—死ぬたびにある地点まで時間が巻き戻る。最愛の人を守るため、何度も残酷な死を繰り返しながら前進し続ける、重厚なダークファンタジー。ライトノベル原作で、TVシリーズ第1期・第2期が放送済み。',
    review:
      '「死に戻り」という設定を最大限に活かしたダーク描写は、ライトノベル原作とは思えない重厚さ。スバルの精神崩壊描写（第18話）はトラウマ級の視聴体験で、見た後しばらく引きずる。レムというキャラクターの人気は社会現象になり、「レムはヒロイン」論争は今も続く。第2期はやや長尺だが、スバルの覚醒シーンの格好よさは最高峰。',
    rating: 4,
    highlights: [
      '「死に戻り」による緊張感ある物語構造',
      'スバルとレム/エミリアの感情描写の深さ',
      '魔女教・ロズワール邸など濃密な世界観',
      '心理描写とキャラクターの葛藤の丁寧さ',
    ],
    recommended_for: [
      'ダークファンタジーが好きな人',
      'キャラクターの心理描写を重視する視聴者',
      '異世界ものに慣れてきて刺激を求めている人',
    ],
    not_for: ['主人公最強系を求めている人', '暗い展開が苦手な人'],
    info: {
      year: 2016,
      episodes: '50+（第1期・第2期）',
      studio: 'WHITE FOX',
      genre: ['異世界', 'ダークファンタジー', 'アクション', 'ドラマ'],
      status: '継続中',
    },
    related: ['steins-gate', 'sword-art-online'],
    tags: ['異世界', 'ダーク', 'レム', '死に戻り', '考察'],
    era: '2010s',
    updatedAt: '2024-06-01',
  },
  {
    slug: 'sword-art-online',
    malId: 11757,
    title: 'ソードアート・オンライン',
    titleJa: 'ソードアート・オンライン',
    tagline: 'VRゲームに閉じ込められた少年の、命を賭けた冒険',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    synopsis:
      '2022年、完全没入型VRMMOゲーム「ソードアート・オンライン」にログインした1万人のプレイヤーは、ゲームをクリアするまで現実世界に戻れないことを告げられる。ゲーム内で死ぬと現実でも死ぬ——。最前線で戦うキリトと出会う人々、そしてアスナとの絆を軸に描く、壮大なVRファンタジー。',
    review:
      'アインクラッド編（第1期前半）はVRゲーム世界の没入感と緊張感が白眉で、アニメ化VRゲームものの原点とも言える作品。アスナとの関係性の描き方も丁寧で感情移入しやすい。後半のアルヴヘイム編は賛否があるが、キリトの強さとビジュアルは圧倒的。批判も多い作品だが、現代アニメに与えた影響は計り知れず、一度は見ておくべき一作。',
    rating: 4,
    highlights: [
      'アインクラッド編のゲーム×死の恐怖という斬新な世界観',
      'キリトとアスナの関係性の自然な描写',
      '戦闘シーンの迫力と映像美',
      'VRゲームという概念をアニメで初めて本格的に描いた歴史的作品',
    ],
    recommended_for: [
      'ゲーム好き・RPG好きのアニメファン',
      '恋愛要素のある冒険ものが好きな人',
      'アクションシーンを楽しみたい人',
    ],
    not_for: ['主人公無双が苦手な人', '深い考察系を求めている人'],
    info: {
      year: 2012,
      episodes: '96+（複数シリーズ）',
      studio: 'A-1 Pictures',
      genre: ['VRゲーム', 'ファンタジー', 'アクション', '恋愛'],
      status: '継続中',
    },
    related: ['steins-gate', 're-zero'],
    tags: ['SAO', 'ゲーム', 'キリト', 'アスナ', 'VR'],
    era: '2010s',
    updatedAt: '2024-06-01',
  },
  {
    slug: 'fate-zero',
    malId: 10087,
    title: 'Fate/Zero',
    titleJa: 'フェイト/ゼロ',
    tagline: '聖杯戦争——最強の英霊たちが激突する、ダークファンタジーの最高峰',
    image: 'https://images.unsplash.com/photo-1604076913837-52ab5629fde9?w=800&q=80',
    synopsis:
      '7人の魔術師（マスター）が7騎の英霊（サーヴァント）を呼び出し、あらゆる願いを叶えるとされる「聖杯」を賭けて戦う「聖杯戦争」。冬木市を舞台に、衛宮切嗣・遠坂時臣・ケイネス・エルメロイ・アーチボルトらが繰り広げる第四次聖杯戦争の物語。Fate/stay nightの前日譚にあたる虚淵玄原作の傑作。',
    review:
      'ufotableの圧倒的な映像美と、虚淵玄が書くダークで哲学的なシナリオが融合した、アニメ史に残る傑作。各マスターとサーヴァントの思想や生き様の対比が鮮やかで、全員が主役と言えるほどキャラクターが立っている。特にアーチャーとライダーの「征服」を巡る問答、切嗣の冷酷な選択の裏にある信念は、何度見ても考えさせられる。Fateシリーズ入門にも最適の一作。',
    rating: 5,
    highlights: [
      'ufotable制作による映画レベルの映像クオリティ',
      '虚淵玄による哲学的で容赦ない脚本',
      '全キャラクターが深く掘り下げられた群像劇',
      '英霊の個性と「英雄性」への独自の解釈',
      '音楽（梶浦由記）が世界観を完璧に演出',
    ],
    recommended_for: [
      'ダークで重厚なファンタジーが好きな人',
      '群像劇・複数視点の物語が好きな視聴者',
      '哲学的なテーマのあるアニメを求めている人',
      'Fateシリーズを深く知りたい人',
    ],
    not_for: ['軽くサクッと見たい人', '暗い展開が苦手な人'],
    info: {
      year: 2011,
      episodes: 25,
      studio: 'ufotable',
      genre: ['ダークファンタジー', 'アクション', '魔法', '群像劇'],
      status: '完結',
    },
    related: ['steins-gate', 're-zero'],
    tags: ['Fate', 'ufotable', '群像劇', 'ダーク', '英霊'],
    era: '2010s',
    updatedAt: '2024-06-01',
  },
  {
    slug: 'dungeon-ni-deai',
    malId: 28121,
    title: 'ダンジョンに出会いを求めるのは間違っているだろうか',
    titleJa: 'ダンまち',
    tagline: '迷宮都市オラリオで夢を追う少年と、女神の絆を描くファンタジー',
    image: 'https://images.unsplash.com/photo-1604076913837-52ab5629fde9?w=800&q=80',
    synopsis:
      '迷宮都市オラリオ。地下迷宮（ダンジョン）に潜り強さを求める冒険者たちが集う街で、弱小ファミリアに所属する少年・ベル・クラネルは憧れの剣士アイズ・ヴァレンシュタインと出会い、強くなることを誓う。美の女神ヘスティアの庇護のもと、ベルが仲間とともに成長していく王道ファンタジー。ライトノベル原作で、複数シリーズが制作されている人気作。',
    review:
      '「好きな子に強くなりたい」という純粋な動機を軸にした王道成長譚が心地よい。ベルの成長速度を表す「憧憬一途」スキルの設定が物語と綺麗にリンクしており、少年漫画的な熱さとファンタジーRPG的な世界観が絶妙に融合している。ヘスティア様のキャラクター人気と「ヘスティアリボン」が社会現象になったのも記憶に新しい。アクションシーンのテンポも良く、一気に見られる爽快感がある。',
    rating: 4,
    highlights: [
      '王道でありながら丁寧に積み上げられた主人公の成長描写',
      'RPG的なスキル・ステータス設定の世界観への溶け込み方',
      'ヘスティアとベルの関係性が生む独特の温かみ',
      'テンポの良いダンジョン攻略とアクションシーン',
    ],
    recommended_for: [
      '王道ファンタジー・冒険ものが好きな人',
      'RPGやゲーム的な世界観が好きな人',
      'ハートウォーミングな主人公とヒロインの関係が好きな人',
      '爽快感のある一気見作品を探している人',
    ],
    not_for: ['ダーク・シリアス系を求めている人', 'ハーレム展開が苦手な人'],
    info: {
      year: 2015,
      episodes: '37+（第1〜4期）',
      studio: 'J.C.Staff',
      genre: ['ファンタジー', 'アクション', '冒険', '成長'],
      status: '継続中',
    },
    related: ['sword-art-online', 're-zero'],
    tags: ['ダンまち', 'ダンジョン', 'ベル', 'ヘスティア', '王道ファンタジー'],
    era: '2010s',
    updatedAt: '2024-06-01',
  },
  {
    slug: 'saekano',
    malId: 23277,
    title: '冴えない彼女の育てかた',
    titleJa: '冴えカノ',
    tagline: 'オタク青年と三人のヒロインが挑む、同人ゲーム制作の青春群像劇',
    image: 'https://cdn.myanimelist.net/images/anime/1329/142757l.jpg',
    synopsis:
      '筋金入りのオタク・安芸倫也は、ある春の日に坂道で帽子を拾う少女・加藤恵と運命的な出会いをする。彼女をヒロインにした同人ゲームを作ることを決意した倫也は、幼馴染の作曲家・澤村・スペンサー・英梨々と先輩シナリオライター・霞ヶ丘詩羽を口説き落とし、制作サークルを立ち上げる。A-1 Pictures制作の恋愛ラブコメ×クリエイター青春アニメ。',
    review:
      'ラブコメとしての完成度が非常に高く、ヒロイン三者三様の魅力がしっかり描き分けられている。特に「普通の子」である加藤恵が物語を通じて最も輝くキャラクターになっていく構成の巧みさは出色。メタ的なオタク文化への目配せやギャグも秀逸で、同人・創作活動をしたことがある視聴者には刺さるネタが多い。第2期「♭」は感情の爆発度が高く、続けて一気見することを強く勧める。',
    rating: 4,
    highlights: [
      '「普通のヒロイン」加藤恵の圧倒的な存在感と成長',
      'オタク・同人文化へのリアルで愛のある描写',
      '三人のヒロインが立つ、バランスの取れたキャラクター設定',
      'メタ的なギャグと本気の感情描写の緩急',
      '第2期「♭」でのドラマチックな感情の爆発',
    ],
    recommended_for: [
      'ラブコメ・恋愛アニメが好きな人',
      '創作・同人活動に興味がある人',
      'オタク文化へのメタ的な目線を楽しめる視聴者',
      'キャラクターの感情描写が丁寧なアニメを求める人',
    ],
    not_for: ['アクションや異世界ものを求めている人', 'ラブコメのじれったさが苦手な人'],
    info: {
      year: 2015,
      episodes: '26（第1期・第2期♭）',
      studio: 'A-1 Pictures',
      genre: ['ラブコメ', '学園', '青春', 'クリエイター'],
      status: '完結',
    },
    related: ['sword-art-online', 'steins-gate'],
    tags: ['冴えカノ', '加藤恵', '同人ゲーム', 'ラブコメ', 'クリエイター'],
    era: '2010s',
    updatedAt: '2024-06-01',
  },
];

export function getAnimeBySlug(slug: string): Anime | undefined {
  return animeList.find((a) => a.slug === slug);
}

export function getRelatedAnime(slugs: string[]): Anime[] {
  return animeList.filter((a) => slugs.includes(a.slug));
}

export function getAnimeByEra(era: Anime['era']): Anime[] {
  return animeList.filter((a) => a.era === era);
}

export function getAnimeByGenre(genre: string): Anime[] {
  return animeList.filter((a) => a.info.genre.includes(genre));
}

export const siteConfig = {
  name: 'アニメ感想ラボ',
  nameShort: 'ALab',
  tagline: '名作アニメの感想と考察',
  description:
    '日本アニメの感想・レビュー・ランキング・考察を掲載する個人サイト。2000〜2020年代の名作を中心に、深掘りレビューをお届けします。',
  url: 'https://anime-kansou-lab.vercel.app',
  author: 'アニメ感想ラボ編集部',
  twitter: '@AnimeKansouLab',
};
