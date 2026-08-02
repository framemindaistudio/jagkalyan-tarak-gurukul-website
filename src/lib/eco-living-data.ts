// Source: client-supplied concept layout, "Khanyale property REVISED
// 20.07.2026-Model.pdf" and the plot/phase figures given directly by the
// client. See assets/documents/eco-living-concept-layout.pdf.

export const ecoLivingMeta = {
  tagline: "A gated, plotted Saiccha Wisdom Valley scheme beside the Gurukul campus",
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
    icon: "Ruler",
    title: "500 sq.m Plots",
    body: "The larger plot format, laid out along the scheme's main internal roads.",
    image: "/images/jk-illust-d-plot-500sqm.png",
    alt: "A miniature architectural site model of a larger residential plot",
  },
  {
    key: "150sqm",
    icon: "House",
    title: "150 sq.m Plots",
    body: "A compact plot format for buyers seeking a smaller, more affordable footprint.",
    image: "/images/jk-illust-d-plot-150sqm.png",
    alt: "A miniature architectural site model of a compact residential plot",
  },
];

export const roads = [
  {
    key: "road-15m",
    title: "15.0 m wide roads",
    body: "The scheme's main internal roads, generous enough for comfortable two-way traffic.",
    image: "/images/jk-illust-d-el-road-wide.png",
    alt: "A miniature architectural model of a wide paved road section",
  },
  {
    key: "road-12m",
    title: "12.0 m wide roads",
    body: "Secondary internal roads connecting every plot back to the main network.",
    image: "/images/jk-illust-d-el-road-narrow.png",
    alt: "A miniature architectural model of a narrower paved road section",
  },
];

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
  {
    key: "site-office",
    title: "Site office",
    body: "The on-site administrative base for the scheme, from launch through handover.",
    image: "/images/jk-illust-d-el-site-office.png",
    alt: "A leather portfolio case with rolled architectural blueprints",
  },
  {
    key: "electrical-substation",
    title: "Electrical sub-station & transformer",
    body: "Dedicated power infrastructure sized for the full scheme, not shared with the grid.",
    image: "/images/jk-illust-d-el-transformer.png",
    alt: "An abstracted minimalist electrical transformer form in matte metal",
  },
  {
    key: "stp",
    title: "Sewage Treatment Plant (STP)",
    body: "On-site treatment so wastewater is processed and reused, not simply discharged.",
    image: "/images/jk-illust-d-el-stp.png",
    alt: "A smooth carved stone spiral form suggesting water circulation",
  },
  {
    key: "caretaker-quarters",
    title: "Caretaker quarters",
    body: "On-site housing for the staff who keep the scheme running day to day.",
    image: "/images/jk-illust-d-el-caretaker.png",
    alt: "A miniature architectural model of a small caretaker cottage",
  },
];
