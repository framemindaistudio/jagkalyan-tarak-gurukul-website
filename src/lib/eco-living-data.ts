// Source: client-supplied concept layout, "Khanyale property REVISED
// 20.07.2026-Model.pdf" and the plot/phase figures given directly by the
// client. See assets/documents/eco-living-concept-layout.pdf.

export const ecoLivingMeta = {
  tagline: "A gated, plotted eco-living scheme beside the Gurukul campus",
  location: "Village Khanyale, Dodamarg Taluka, Sindhudurg District, Maharashtra",
};

export const plotStats = [
  { icon: "Ruler", value: "1,000", suffix: "", label: "Phase 1 plots" },
  { icon: "GridFour", value: "3,000", suffix: "", label: "Total planned plots" },
];

export const scale = {
  phase1: "1,000",
  phase1Label: "Phase 1 plots",
  total: "3,000",
  totalLabel: "Total planned plots",
  percent: 33,
  progressLabel: "Phase 1 underway",
};

export const plotTypes = [
  {
    key: "500sqm",
    title: "500 sq.m Plots",
    body: "The larger plot format, laid out along the scheme's main internal roads.",
  },
  {
    key: "150sqm",
    title: "150 sq.m Plots",
    body: "A compact plot format for buyers seeking a smaller, more affordable footprint.",
  },
];

export const roads = ["15.0 m wide roads", "12.0 m wide roads"];

export const amenities = [
  {
    icon: "SoccerBall",
    title: "Cricket Stadium",
    body: "A dedicated cricket stadium across 5 acres.",
    image: "/images/jk-amenity-cricket-stadium.jpg",
  },
  {
    icon: "Basketball",
    title: "Sports Centre",
    body: "A shared sports centre for residents.",
    image: "/images/jk-amenity-sports-centre.jpg",
  },
  {
    icon: "Storefront",
    title: "Shopping Centre",
    body: "Everyday retail within the scheme itself.",
    image: "/images/jk-amenity-shopping-centre.jpg",
  },
  {
    icon: "Garage",
    title: "Amenities & Parking",
    body: "A dedicated amenities and parking zone across 5.5 acres.",
    image: "/images/jk-amenity-parking.jpg",
  },
  {
    icon: "Waves",
    title: "Water Body",
    body: "A landscaped water body at the heart of the scheme.",
    image: "/images/jk-amenity-water-body.jpg",
  },
  {
    icon: "DoorOpen",
    title: "Decorative Entrance Gate",
    body: "A monumental gated entrance to the scheme.",
    image: "/images/jk-grand-entrance.jpg",
  },
  {
    icon: "Binoculars",
    title: "Watch Towers",
    body: "Four watch towers positioned around the scheme's perimeter for security.",
    image: "/images/jk-amenity-watch-tower.jpg",
  },
  {
    icon: "Buildings",
    title: "JTG Complex",
    body: "Directly adjoining the JagKalyan Tarak Gurukul campus itself.",
    image: "/images/jk-main-building-exterior.jpg",
  },
];

export const infrastructure = [
  { icon: "Briefcase", label: "Site office" },
  { icon: "Lightning", label: "Electrical sub-station & transformer" },
  { icon: "Recycle", label: "Sewage Treatment Plant (STP)" },
  { icon: "House", label: "Caretaker quarters" },
];
