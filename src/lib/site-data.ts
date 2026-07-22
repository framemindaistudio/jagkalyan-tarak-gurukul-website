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
  phone: "+91 98200 12345",
  parentSiteHref: "https://www.jagkalyanholistic.com/",
};

export const coreValues = [
  "Wellness",
  "Wisdom",
  "Welfare",
  "Wealth",
  "Harmony",
  "Sustainability",
  "Service",
];

type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: Array<NavLink & { items?: NavLink[] }> = [
  { label: "Vision & Founders", href: "/vision" },
  { label: "The Campus", href: "/campus" },
  { label: "Eco Living", href: "/eco-living" },
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
  { label: "Contact", href: "/contact" },
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
      { label: "Eco Living", href: "/eco-living" },
      { label: "Gallery", href: "/gallery" },
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
  },
  {
    key: "holistic-wellness",
    icon: "Heartbeat",
    title: "Holistic Wellness",
    body: "Yoga, meditation, and pranayama alongside Ayurveda and naturopathy, preventive healthcare, and sattvic nutrition.",
  },
  {
    key: "lifelong-learning",
    icon: "BookOpenText",
    title: "Lifelong Learning & Growth",
    body: "Value-based education and lifelong learning programs, arts, culture and creativity, digital literacy for all ages, research and innovation.",
  },
  {
    key: "community-connection",
    icon: "UsersThree",
    title: "Community & Connection",
    body: "An inclusive and caring community, intergenerational bonding, celebrations and festivals, volunteering and seva, support and companionship.",
  },
  {
    key: "purpose-prosperity",
    icon: "Sparkle",
    title: "Purpose & Prosperity",
    body: "Following your passion, skill sharing and mentoring, entrepreneurship opportunities, meaningful engagement, and financial well-being.",
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
