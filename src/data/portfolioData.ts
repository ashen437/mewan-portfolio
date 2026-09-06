export const brand = {
  name: "T-Frame Media",
  tagline: "Brand & Film Production",
  email: "mewanliyanageofficial@gmail.com",
  phone: "071 774 2544",
  phoneHref: "tel:+94717742544",
  instagram: "https://www.instagram.com/mewliyan/",
  linkedin: "https://lk.linkedin.com/in/mewan-liyanage-0767b3254",
  facebook: "https://web.facebook.com/mewanliyanageofficial",
};

export const socialLinks = [
  { label: "Facebook", handle: "Mewan Liyanage", icon: "facebook" as const, href: brand.facebook },
  { label: "Instagram", handle: "@mewliyan", icon: "instagram" as const, href: brand.instagram },
  { label: "LinkedIn", handle: "Mewan Liyanage", icon: "linkedin" as const, href: brand.linkedin },
];

export const navLinks = [
  { label: "Brands", href: "#brands" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Talent", href: "#talent" },
  { label: "Contact", href: "#contact" },
];

export const brandsWorkedWith = [
  { name: "Lux", logo: "/images/lux.png" },
  { name: "Vaseline", logo: "/images/Vaseline.png" },
  { name: "Signal", logo: "/images/Signal.png" },
  { name: "Dialog", logo: "/images/Dialog.png" },
  { name: "Rhino", logo: "/images/Rhino.png" },
  { name: "Spar Supermarket", logo: "/images/SparSupermarket.png" },
  { name: "Moose", logo: "/images/Moose.png" },
  { name: "Muthu Karuppan Chettiyar", logo: "/images/MuthuKaruppanChettiyar.png" },
  { name: "Sri Nadeeka Jewellery", logo: "/images/SriNadeekaJewellery.png" },
  { name: "Ashadi Jewelley", logo: "/images/AshadiJewelley.png" },
  { name: "Aripico", logo: "/images/Aripico.png" },
  { name: "Sanmik", logo: "/images/Sanmik.png" },
  { name: "LB Finance", logo: "/images/LBFinance.png" },
  { name: "Rich Look", logo: "/images/RichLook.png" },
  { name: "Ceylon Furniture", logo: "/images/CeylonFurniture.png" },
  { name: "Roop Kalaa", logo: "/images/RoopKalaa.png" },
  { name: "Nayotha", logo: "/images/Nayotha.png" },
  { name: "Ceyloan", logo: "/images/Ceyloan.png" },
  { name: "Minnas Saree Point", logo: "/images/MinnasSareePoint.png" },
  { name: "One i", logo: "/images/Onei.png" },
];

export const hero = {
  stats: [
    { num: `${brandsWorkedWith.length}+`, cap: "Brands Partnered" },
    { num: "7+", cap: "Productions Delivered" },
  ],
  founder: {
    eyebrow: "CEO, T-Frame Media",
    title: "Mewan Liyanage",
  },
};

export const statsStrip = [
  { count: brandsWorkedWith.length, suffix: "+", cap: "Brands Partnered" },
  { count: 7, suffix: "+", cap: "Productions Delivered" },
  { count: 11, suffix: "+", cap: "Talent Collaborated" },
  { count: 2, suffix: "", cap: "Business Partnerships" },
];

export const productionCredits = [
  {
    role: "Executive Producer",
    items: [
      { title: "Aththamai Mang Oyata Adarei", type: "Drama", image: "/images/AththamaiMangOyataAdarei.png" },
      { title: "Premiye", type: "Movie", image: "/images/Premiye.png" },
    ],
  },
  {
    role: "Line Producer",
    items: [
      { title: "Piszoo", type: "Movie", image: "/images/Piszoo.png" },
      { title: "Rosa Wedilla", type: "Drama", image: "/images/RosaWedilla.png" },
    ],
  },
  {
    role: "Casting Director & Head of Digital Marketing",
    items: [{ title: "Eda Raa", type: "Movie", image: "/images/EdaRaa.png" }],
  },
  {
    role: "Head of Digital & Distribution",
    items: [
      { title: "Kannagi", type: "Movie", image: "/images/kannagi.png" },
      { title: "Saraa Susum", type: "Movie", image: "/images/SaraaSusum.png" },
      { title: "Premiye", type: "Movie", image: "/images/Premiye.png" },
    ],
  },
];

export type VideoPlatform = "youtube" | "facebook";

export interface GalleryVideo {
  id: string;
  platform: VideoPlatform;
  title: string;
  tag: string;
  /** Original watch page — opened in a new tab when the card is clicked. */
  url: string;
  /** YouTube thumbnail image; Facebook videos fall back to a text card. */
  thumbnail?: string;
  /** width / height, used to size the card before the thumbnail loads. */
  aspectRatio: number;
  /** Parallax intensity for the floating gallery — higher drifts further from the cursor. */
  depth: number;
}

export const videoGallery: GalleryVideo[] = [
  {
    id: "ashadi-jewellers",
    platform: "youtube",
    title: "Ashadi Jewellers — We Design Your Style",
    tag: "Brand Film",
    url: "https://www.youtube.com/watch?v=AFf_WPVGX9M",
    thumbnail: "https://img.youtube.com/vi/AFf_WPVGX9M/hqdefault.jpg",
    aspectRatio: 560 / 315,
    depth: 2,
  },
  {
    id: "sri-nadeeka-jewellery",
    platform: "youtube",
    title: "Sri Nadeeka Jewellery — Collection Showcase",
    tag: "Brand Film",
    url: "https://www.youtube.com/watch?v=zH5QzICgO8k",
    thumbnail: "https://img.youtube.com/vi/zH5QzICgO8k/hqdefault.jpg",
    aspectRatio: 560 / 315,
    depth: 3,
  },
  {
    id: "kimada-nube-nawe",
    platform: "facebook",
    title: "Kimada Nube Nawe — Film Song Premiere",
    tag: "Film Promo",
    url: "https://www.facebook.com/mewanliyanageofficial/videos/1584152259967791/",
    thumbnail: "/images/videos/kimada-nube-nawe.jpg",
    aspectRatio: 380 / 476,
    depth: 1,
  },
  {
    id: "production-highlight",
    platform: "facebook",
    title: "Production Highlight Reel",
    tag: "Behind the Scenes",
    url: "https://www.facebook.com/mewanliyanageofficial/videos/1149553843350862/",
    thumbnail: "/images/videos/production-highlight.jpg",
    aspectRatio: 266 / 476,
    depth: 2.5,
  },
  {
    id: "on-set",
    platform: "facebook",
    title: "On Set — Commercial Shoot",
    tag: "Behind the Scenes",
    url: "https://www.facebook.com/mewanliyanageofficial/videos/1033810248433505/",
    thumbnail: "/images/videos/on-set.jpg",
    aspectRatio: 264 / 476,
    depth: 1.5,
  },
  {
    id: "teaser",
    platform: "facebook",
    title: "Teaser — Something's Coming",
    tag: "Teaser",
    url: "https://www.facebook.com/mewanliyanageofficial/videos/248816967720637/",
    thumbnail: "/images/videos/teaser.jpg",
    aspectRatio: 560 / 314,
    depth: 3,
  },
  {
    id: "featured-reel",
    platform: "facebook",
    title: "Featured Reel",
    tag: "Reel",
    url: "https://www.facebook.com/reel/234527529548869/",
    thumbnail: "/images/videos/featured-reel.jpg",
    aspectRatio: 267 / 476,
    depth: 2,
  },
  {
    id: "shimmer-bridal",
    platform: "facebook",
    title: "Shimmer Bridal — Kandyan Bride Styling",
    tag: "Brand Film",
    url: "https://www.facebook.com/mewanliyanageofficial/videos/961766884905901/",
    thumbnail: "/images/videos/shimmer-bridal.jpg",
    aspectRatio: 560 / 314,
    depth: 1,
  },
  {
    id: "the-grip",
    platform: "facebook",
    title: "The Grip — Short Film",
    tag: "Short Film",
    url: "https://www.facebook.com/mewanliyanageofficial/videos/652866589276718/",
    thumbnail: "/images/videos/the-grip.jpg",
    aspectRatio: 560 / 314,
    depth: 2.5,
  },
  {
    id: "spar-wattala",
    platform: "facebook",
    title: "SPAR Supermarket Wattala — Launch Campaign",
    tag: "Brand Film",
    url: "https://www.facebook.com/mewanliyanageofficial/videos/1095636241009074/",
    thumbnail: "/images/videos/spar-wattala.jpg",
    aspectRatio: 560 / 314,
    depth: 1.5,
  },
  {
    id: "womens-day",
    platform: "facebook",
    title: "International Women's Day — Short Film",
    tag: "Short Film",
    url: "https://www.facebook.com/mewanliyanageofficial/videos/491419135980957/",
    thumbnail: "/images/videos/womens-day.jpg",
    aspectRatio: 560 / 314,
    depth: 3,
  },
  {
    id: "aruthbara-premaya",
    platform: "facebook",
    title: "Aruthbara Premaya — Short Film",
    tag: "Short Film",
    url: "https://www.facebook.com/mewanliyanageofficial/videos/523950799060072/",
    thumbnail: "/images/videos/aruthbara-premaya.jpg",
    aspectRatio: 560 / 314,
    depth: 2,
  },
  {
    id: "new-tvc",
    platform: "facebook",
    title: "New TVC — Brand Commercial",
    tag: "Brand Film",
    url: "https://www.facebook.com/mewanliyanageofficial/videos/10221519784969884/",
    thumbnail: "/images/videos/new-tvc.jpg",
    aspectRatio: 560 / 314,
    depth: 1.5,
  },
  {
    id: "zmessenger-promo",
    platform: "facebook",
    title: "zMessenger — Promo Shoot",
    tag: "Behind the Scenes",
    url: "https://www.facebook.com/mewanliyanageofficial/videos/10214748493011817/",
    thumbnail: "/images/videos/zmessenger-promo.jpg",
    aspectRatio: 560 / 314,
    depth: 2.5,
  },
  {
    id: "oswold-green-tea",
    platform: "facebook",
    title: "OSWOLD Green Tea — TVC",
    tag: "Brand Film",
    url: "https://www.facebook.com/mewanliyanageofficial/videos/10215699317621838/",
    thumbnail: "/images/videos/oswold-green-tea.jpg",
    aspectRatio: 560 / 314,
    depth: 3,
  },
];

export const marketingConsultantClients = ["Ashok Films", "Noyotha", "Roop Kalaa"];

export const businessPartnerships = [
  { company: "November 15 Films", partner: "Shalani Tharaka" },
  { company: "Maharoof Productions", partner: "Ferveez Maharoof" },
];

export const about = {
  heading: "A Full-Service Production House",
  paragraphs: [
    "T-Frame Media is a Sri Lankan production company working across brand campaigns, television drama, and feature film; carrying projects from strategy and casting through to production and distribution.",
    "We partner with consumer brands on marketing consultancy and campaign production, and with filmmakers as executive producers, line producers, and distribution leads; bringing the same discipline to a supermarket campaign as we do to a feature film release.",
    "Every credit on this page reflects a project we saw through, not just signed onto; from the first brief to the final cut.",
  ],
  highlights: [
    { num: `${brandsWorkedWith.length}+`, label: "Brand Partnerships" },
    { num: "7+", label: "Film & TV Productions" },
    { num: "2", label: "Business Partnerships" },
  ],
};

export const services = [
  {
    icon: "target" as const,
    title: "Brand & Marketing",
    desc: "Marketing consultancy and campaign production for consumer brands, from FMCG to finance and retail.",
    items: ["Marketing Consultancy", "Campaign Production", "Digital Marketing"],
  },
  {
    icon: "film" as const,
    title: "Film & TV Production",
    desc: "Executive and line producing for feature films and television drama, from financing to final cut.",
    items: ["Executive Producing", "Line Producing", "Business Partnerships"],
  },
  {
    icon: "users" as const,
    title: "Casting & Distribution",
    desc: "Casting direction and digital distribution that gets a finished production in front of its audience.",
    items: ["Casting Direction", "Digital Distribution", "Digital Marketing"],
  },
];

export const process = [
  { num: "01", label: "Brief", desc: "Understanding the brand, the story, or the production's goals and constraints from day one." },
  { num: "02", label: "Develop", desc: "Shaping strategy, casting, and production planning around what the project actually needs." },
  { num: "03", label: "Produce", desc: "Running production end to end — on set, on brand, and on schedule." },
  { num: "04", label: "Distribute", desc: "Getting the finished work to its audience, across digital and traditional channels." },
];

export const talent = [
  { name: "Shalani Tharaka", image: "/images/shalaniTharaka.png" },
  { name: "Semini Iddamalgoda", image: "/images/SeminiIddamalgoda.png" },
  { name: "Nihari Perera", image: "/images/NihariPerera.png" },
  { name: "Senali Fonseka", image: "/images/SenaliFonseka.png" },
  { name: "Nethmi Roshel", image: "/images/NethmiRoshel.png" },
  { name: "Mahesha Sandamali", image: "/images/MaheshaSandamali.png" },
  { name: "Sachinthani Kaushalya", image: "/images/SachinthaniKaushalya.png" },
  { name: "Nayomi Perera", image: "/images/NayomiPerera.png" },
  { name: "Sujani Maduwanthi", image: "/images/SujaniMaduwanthi.png" },
  { name: "Uddika Premarathna", image: "/images/UddikaPremarathna.png" },
  { name: "Nimesh Edirisinghe", image: "/images/NimeshEdirisinghe.png" },
];

export const contactCta = {
  heading: "Let's Produce Something Worth Talking About",
  copy: "Whether it's a brand campaign or a feature film, we take on a limited number of productions at a time. Tell us what you're planning for 2026.",
};

export const footerLinks = {
  left: [
    { label: "Brands We Work With", href: "#brands" },
    { label: "Our Work", href: "#work" },
    { label: "Talent", href: "#talent" },
  ],
  right: [
    { label: "Get in Touch", href: "#contact" },
    { label: "Our Work", href: "#work" },
    { label: brand.email, href: `mailto:${brand.email}` },
  ],
};
