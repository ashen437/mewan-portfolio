export const brand = {
  name: "Marlowe Fenn",
  tagline: "Architect & Spatial Designer",
  email: "hello@marlowefenn.studio",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
];

export const hero = {
  statusLabel: "Available for Select Projects — 2026",
  stats: [
    { num: "32+", cap: "Projects Completed" },
    { num: "11", cap: "Design Awards" },
  ],
  award: {
    eyebrow: "Latest Achievement",
    title: "AIA Merit Award",
    sub: "Cascade Ridge House — 2025",
  },
};

export const statsStrip = [
  { count: 32, suffix: "+", cap: "Completed Projects" },
  { count: 11, suffix: "", cap: "Design Awards" },
  { count: 7, suffix: "", cap: "Countries" },
  { count: 14, suffix: "+", cap: "Years of Practice" },
];

export const featureProject = {
  image: "/images/project-1.jpg",
  alt: "Cascade Ridge House",
  tags: ["Residential", "Sustainable", "2025"],
  name: "Cascade Ridge House",
  desc: "A hillside home that folds into its slope — passive-solar orientation, board-formed concrete, and locally milled cedar framing the valley below.",
};

export const gridProjects = [
  {
    image: "/images/project-2.jpg",
    alt: "Foundry Loft",
    tags: ["Renovation", "Urban"],
    name: "Foundry Loft",
    desc: "Adaptive reuse of a 1920s machine shop into a light-flooded live-work space that keeps its iron bones on display.",
  },
  {
    image: "/images/project-3.jpg",
    alt: "Larch Retreat",
    tags: ["Cabin", "Off-Grid"],
    name: "Larch Retreat",
    desc: "An off-grid cabin sited between two firs — rainwater capture, a wood stove, and a single long window onto the canopy.",
  },
  {
    image: "/images/project-4.jpg",
    alt: "Commons Library",
    tags: ["Public", "Community"],
    name: "Commons Library",
    desc: "A neighborhood library reimagined as a porch for the whole block — open stacks, soft acoustics, and a reading garden.",
  },
  {
    image: "/images/project-5.jpg",
    alt: "Tideline House",
    tags: ["Residential", "Coastal"],
    name: "Tideline House",
    desc: "An oceanfront residence raised on piloti to weather the storm surge, framing a long horizon of grey Pacific.",
  },
];

export const about = {
  portrait: "/images/portrait.jpg",
  heading: "Designing With Purpose & Precision",
  paragraphs: [
    "I'm an architect based in Portland, Oregon, with a fixation on spaces that quietly improve the lives lived inside them — and tread lightly on the land that holds them.",
    "After an M.Arch from MIT and years with practices in New York and Kyoto, I opened my own studio in 2017 to chase work that honors craft, climate, and context over spectacle.",
    "Every project is an argument made in concrete, glass, and timber: that good architecture should feel inevitable, generous, and built to outlast its trends.",
  ],
  credentials: [
    { strong: "Licensed Architect", rest: "— Oregon, California, New York" },
    { strong: "LEED AP BD+C", rest: "— Sustainable design specialist" },
    { strong: "Awards", rest: "— AIA Merit Award, Architizer A+ Award" },
  ],
};

export const focusAreas = [
  {
    icon: "home" as const,
    title: "Custom Homes",
    desc: "Residential design tuned to how you actually live — from a tight urban infill to a rambling rural retreat.",
    items: ["New Construction", "Renovations", "Additions"],
  },
  {
    icon: "globe" as const,
    title: "Sustainable Design",
    desc: "Climate-first architecture: passive strategy, low-carbon material, and a long honest life cycle.",
    items: ["Passive Strategies", "LEED Projects", "Net-Zero Goals"],
  },
  {
    icon: "grid" as const,
    title: "Small-Scale Civic",
    desc: "Public and commercial spaces sized for their community — libraries, studios, shops, and reuse.",
    items: ["Cultural Spaces", "Retail & Hospitality", "Adaptive Reuse"],
  },
];

export const approachSteps = [
  {
    num: "01",
    label: "Listen",
    desc: "Understanding your vision, lifestyle, and the grain of the site through long, careful conversation.",
  },
  {
    num: "02",
    label: "Explore",
    desc: "Working the idea through sketches, physical models, and digital studies until it earns its shape.",
  },
  {
    num: "03",
    label: "Refine",
    desc: "Iterating with your feedback into resolved drawings, details, and material specifications.",
  },
  {
    num: "04",
    label: "Build",
    desc: "Stewarding the project through construction with the oversight that protects the design intent.",
  },
];

export const testimonials = [
  {
    avatar: "/images/avatar-1.jpg",
    name: "Michael & Lisa Torres",
    role: "Cascade Ridge Clients",
    quote:
      "Marlowe turned our awkward hillside lot into a home that feels both modern and ancient. The attention to material and daylight was beyond anything we imagined.",
  },
  {
    avatar: "/images/avatar-2.jpg",
    name: "Jennifer Park",
    role: "Foundry Loft Client",
    quote:
      "A genuinely collaborative process. Marlowe listened to how I work, then designed a space that balances industrial character with real warmth.",
  },
  {
    avatar: "/images/avatar-3.jpg",
    name: "David & Rachel Kim",
    role: "Larch Retreat Clients",
    quote:
      "Our off-grid cabin is a small masterpiece — comfortable through every season while barely touching the forest floor.",
  },
  {
    avatar: "/images/avatar-4.jpg",
    name: "Maria Santos",
    role: "Library Director",
    quote:
      "The Commons Library has become the heart of our neighborhood. Marlowe knows how to make public space that feels like it belongs to everyone.",
  },
];

export const contactCta = {
  heading: "Let's Create Something Meaningful",
  copy: "I take on a limited number of projects each year. If you have something in mind for 2026–2027, I'd love to hear about it.",
};

export const footerLinks = {
  left: [
    { label: "Selected Work", href: "#work" },
    { label: "About Me", href: "#about" },
    { label: "My Approach", href: "#approach" },
  ],
  right: [
    { label: "Get in Touch", href: "#contact" },
    { label: "All Projects", href: "#work" },
    { label: brand.email, href: `mailto:${brand.email}` },
  ],
};
