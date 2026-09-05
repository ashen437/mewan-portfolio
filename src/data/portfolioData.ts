export const brand = {
  name: "T-Frame Media",
  tagline: "Brand & Film Production",
  email: "mewanliyanageofficial@gmail.com",
  phone: "071 774 2544",
  phoneHref: "tel:+94717742544",
  instagram: "https://www.instagram.com/mewliyan/",
  linkedin: "https://lk.linkedin.com/in/mewan-liyanage-0767b3254",
};

export const socialLinks = [
  { label: "Instagram", handle: "@mewliyan", icon: "instagram" as const, href: brand.instagram },
  { label: "LinkedIn", handle: "Mewan Liyanage", icon: "linkedin" as const, href: brand.linkedin },
];

export const navLinks = [
  { label: "Brands", href: "#brands" },
  { label: "Work", href: "#work" },
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
  statusLabel: "Now Booking Productions — 2026",
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

export const marketingConsultantClients = ["Ashok Films", "Noyotha", "Roop Kalaa"];

export const businessPartnerships = [
  { company: "November 15 Films", partner: "Shalani Tharaka" },
  { company: "Maharoof Productions", partner: "Ferveez Maharoof" },
];

export const about = {
  heading: "A Full-Service Production House",
  paragraphs: [
    "T-Frame Media is a Sri Lankan production company working across brand campaigns, television drama, and feature film — carrying projects from strategy and casting through to production and distribution.",
    "We partner with consumer brands on marketing consultancy and campaign production, and with filmmakers as executive producers, line producers, and distribution leads — bringing the same discipline to a supermarket campaign as we do to a feature film release.",
    "Every credit on this page reflects a project we saw through, not just signed onto — from the first brief to the final cut.",
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
