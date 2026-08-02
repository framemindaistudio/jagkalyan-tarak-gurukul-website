export const siteMeta = {
  name: "JagKalyan Tarak Gurukul",
  tagline: "Where Ancient Wisdom Meets Future Innovation",
  closingLine: "Educating Minds. Nurturing Character. Building a Sustainable Future.",
  location: "Dodamarg, North Goa",
  parentInitiatives: ["JagKalyan Holistic Mission", "Saiccha Developers"],
};

export const contact = {
  address: "Village Khanyale, Dodamarg Taluka, Sindhudurg District, Maharashtra",
  email: "connect@jagkalyan.org",
  parentSiteHref: "https://www.jagkalyanholistic.com/",
};

export const coreValues = [
  {
    key: "wellness",
    title: "Wellness",
    body: "Physical, mental, and spiritual wellbeing woven into every part of campus life.",
    image: "/images/jk-illust-d-cv-wellness.png",
    alt: "A carved stone bowl of still water with a single floating flower",
  },
  {
    key: "wisdom",
    title: "Wisdom",
    body: "Vedic knowledge held alongside modern learning, science, and technology.",
    image: "/images/jk-illust-d-cv-wisdom.png",
    alt: "An open leather-bound book beside a small glowing brass oil lamp",
  },
  {
    key: "welfare",
    title: "Welfare",
    body: "Compassion and care extended to students, staff, and the wider community.",
    image: "/images/jk-illust-d-cv-welfare.png",
    alt: "A pair of gently clasped hands rendered as a matte clay sculpture",
  },
  {
    key: "wealth",
    title: "Wealth",
    body: "Entrepreneurship and skill-building that create real, lasting prosperity.",
    image: "/images/jk-illust-d-cv-wealth.png",
    alt: "A ceramic bowl gently overflowing with golden wheat grain",
  },
  {
    key: "harmony",
    title: "Harmony",
    body: "A community where every generation, background, and belief finds its place.",
    image: "/images/jk-illust-d-cv-harmony.png",
    alt: "Three smooth natural stones balanced in a simple stacked cairn",
  },
  {
    key: "sustainability",
    title: "Sustainability",
    body: "Renewable energy, organic farming, and a genuinely zero-waste campus.",
    image: "/images/jk-illust-d-cv-sustainability.png",
    alt: "A single green leaf resting on stone with one clear water droplet",
  },
  {
    key: "service",
    title: "Service",
    body: "Seva as a daily practice, not an occasional act of charity.",
    image: "/images/jk-illust-d-cv-service.png",
    alt: "A pair of matte clay hands gently offering a small ceramic bowl",
  },
];

type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: Array<NavLink & { items?: NavLink[] }> = [
  { label: "Home", href: "/" },
  { label: "Vision & Founders", href: "/vision" },
  { label: "The Campus", href: "/campus" },
  { label: "Saiccha Wisdom Valley", href: "/eco-living" },
  {
    label: "The Ecosystem",
    href: "/education",
    items: [
      { label: "Holistic Education", href: "/education" },
      { label: "Wellness & Sustainable Living", href: "/wellness" },
      { label: "Innovation & Entrepreneurship", href: "/innovation" },
      { label: "Community & Seva", href: "/community" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Live Updates", href: "/live-updates" },
];

export const footerColumns = [
  {
    title: "The Ecosystem",
    links: [
      { label: "Holistic Education", href: "/education" },
      { label: "Wellness & Sustainable Living", href: "/wellness" },
      { label: "Innovation & Entrepreneurship", href: "/innovation" },
      { label: "Community & Seva", href: "/community" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Vision & Founders", href: "/vision" },
      { label: "The Campus", href: "/campus" },
      { label: "Saiccha Wisdom Valley", href: "/eco-living" },
      { label: "Gallery", href: "/gallery" },
      { label: "Live Updates", href: "/live-updates" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Become a Student", href: "/get-involved#student" },
      { label: "Become a Mentor", href: "/get-involved#mentor" },
      { label: "Partner With Us", href: "/get-involved#partner" },
      { label: "Support the Mission", href: "/get-involved#support" },
    ],
  },
];

export const pillars = [
  {
    key: "natural-living",
    icon: "Leaf",
    title: "Natural Living",
    body: "Eco-friendly homes, clean air and water, organic gardens and farms, renewable energy, and a zero-waste lifestyle.",
    image: "/images/jk-illust-d-natural-living.png",
    alt: "A handcrafted ceramic planter holding a young sapling in rich soil",
  },
  {
    key: "holistic-wellness",
    icon: "Heartbeat",
    title: "Holistic Wellness",
    body: "Yoga, meditation, and pranayama alongside Ayurveda and naturopathy, preventive healthcare, and sattvic nutrition.",
    image: "/images/jk-illust-d-wellness.png",
    alt: "A matte clay sculpture of a figure seated in meditation, eyes closed",
  },
  {
    key: "lifelong-learning",
    icon: "BookOpenText",
    title: "Lifelong Learning & Growth",
    body: "Value-based education and lifelong learning programs, arts, culture and creativity, digital literacy for all ages, research and innovation.",
    image: "/images/jk-illust-d-learning.png",
    alt: "A leather-bound book with handmade paper pages beside a graduation cap",
  },
  {
    key: "community-connection",
    icon: "UsersThree",
    title: "Community & Connection",
    body: "An inclusive and caring community, intergenerational bonding, celebrations and festivals, volunteering and seva, support and companionship.",
    image: "/images/jk-illust-d-community.png",
    alt: "Abstract sculptural clay figures standing closely together",
  },
  {
    key: "purpose-prosperity",
    icon: "Sparkle",
    title: "Purpose & Prosperity",
    body: "Following your passion, skill sharing and mentoring, entrepreneurship opportunities, meaningful engagement, and financial well-being.",
    image: "/images/jk-illust-d-purpose.png",
    alt: "A young tree sapling with visible roots growing from fertile soil",
  },
];

export const ecosystemZones = [
  { icon: "GraduationCap", label: "Holistic Gurukul Campus" },
  { icon: "Heartbeat", label: "Wellness & Healthcare Centre" },
  { icon: "PersonSimpleTaiChi", label: "Yoga, Ayurveda & Naturopathy" },
  { icon: "Plant", label: "Organic Farms" },
  { icon: "House", label: "Eco Homes" },
  { icon: "Flask", label: "Research & Innovation Labs" },
  { icon: "Storefront", label: "Gramodyog & Business Incubation" },
  { icon: "TreeEvergreen", label: "Meditation Forests" },
  { icon: "Cow", label: "Goshala & Indigenous Cow Research" },
  { icon: "SunHorizon", label: "Renewable Energy Systems" },
  { icon: "Drop", label: "Water Conservation & Sustainable Infrastructure" },
];

export const getInvolvedOptions = [
  {
    key: "student",
    icon: "GraduationCap",
    title: "Become a Student",
    body: "Join a curriculum that places Vedic wisdom beside artificial intelligence, and discipline beside imagination.",
  },
  {
    key: "mentor",
    icon: "ChalkboardTeacher",
    title: "Become a Mentor",
    body: "Guide students and rural innovators as they turn ideas into enterprises and callings into careers.",
  },
  {
    key: "partner",
    icon: "Handshake",
    title: "Become a Partner",
    body: "CSR partners, philanthropists, and global collaborators are core to building this campus.",
  },
  {
    key: "support",
    icon: "HandHeart",
    title: "Become a Founding Supporter",
    body: "Support the mission at its earliest stage, as the master plan moves from brief to groundbreaking.",
  },
];
