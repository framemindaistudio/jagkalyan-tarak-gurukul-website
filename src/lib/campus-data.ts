// Phase-1 Detailed Project Report figures, supplied directly by the client's
// architectural brief. See assets/documents/architectural-brief-phase1.md for
// the full source document.

export const campusStats = [
  { icon: "Ruler", value: "20.4", suffix: " Acres", label: "Total site area" },
  { icon: "Buildings", value: "8,000", suffix: " sq.m", label: "Permanent built-up area" },
  { icon: "ArrowsHorizontal", value: "550", suffix: "m", label: "Campus length" },
  { icon: "ArrowsVertical", value: "150", suffix: "m", label: "Campus width" },
];

export const mainBuilding = {
  name: "Main Building",
  configuration: "G+2",
  totalArea: "4,000 sq.m",
  floors: [
    {
      name: "Ground Floor",
      area: "1,500 sq.m",
      facilities: [
        "Grand Reception",
        "Administrative Office",
        "Board Room",
        "Exhibition Gallery",
        "Auditorium",
        "Dining Hall",
        "Kitchen",
        "Medical Centre",
      ],
    },
    {
      name: "First Floor",
      area: "1,300 sq.m",
      facilities: [
        "Library & Knowledge Centre",
        "Digital Learning Centre",
        "Innovation Lab",
        "Research Centre",
        "Faculty Rooms",
        "Meeting Rooms",
      ],
    },
    {
      name: "Second Floor",
      area: "1,200 sq.m",
      facilities: [
        "Meditation Hall",
        "Yoga Hall",
        "Conference Hall",
        "Skill Training Rooms",
        "Spiritual Wisdom Centre",
        "VIP Suites",
      ],
    },
  ],
};

export const residentialBuildings = {
  count: 6,
  configuration: "G+1",
  eachArea: "600 sq.m",
  totalArea: "3,600 sq.m",
  uses: [
    "Students Living",
    "Faculty Residence",
    "Aaharshala (dining)",
    "Students Activity Centre",
    "Arogyashala (health)",
    "Natural Nutrition Centre",
    "Skill Development Centre",
    "Research & Innovation Centre",
  ],
};

export const utilityBuildings = {
  count: 4,
  configuration: "G+1",
  eachArea: "100 sq.m",
  totalArea: "400 sq.m",
  uses: [
    "Security Office",
    "Electrical Room",
    "Telecom Room",
    "Maintenance Office",
    "Store Room",
    "Food Courts",
    "Wash Rooms",
    "Horticulture Office",
  ],
};

export const grandEntrance = [
  "Monumental Gate",
  "Security Check",
  "Visitor Parking",
  "Digital Display",
  "Reception Plaza",
];

export const sustainableInfrastructure = {
  landscape: [
    "Native trees",
    "Fruit orchard",
    "Medicinal plants",
    "Bamboo plantation",
    "Flower gardens",
    "Butterfly garden",
  ],
  greenInfrastructure: [
    { icon: "SunHorizon", label: "Solar Power Plant" },
    { icon: "CloudRain", label: "Rain Water Harvesting" },
    { icon: "Recycle", label: "Sewage Treatment Plant (STP)" },
    { icon: "Leaf", label: "Organic Waste Compost Plant" },
    { icon: "Drop", label: "Drip Irrigation" },
    { icon: "ArrowsClockwise", label: "Grey Water Recycling" },
    { icon: "ChargingStation", label: "EV Charging" },
    { icon: "Lightbulb", label: "Smart Lighting" },
  ],
};

export const roads = [
  "12 m Main Road",
  "6 m Internal Roads",
  "Walking Track",
  "Cycling Track",
  "Disabled-friendly pathways",
];

export const waterFeatures = ["Central Fountain", "Lotus Pond", "Water Bodies", "Recharge Pits"];

export const parking = ["Visitors", "Staff", "Students", "Electric Vehicle Charging"];

export const futureExpansion = {
  area: "4,000 sq.m",
  items: ["Modular structures", "Training halls", "Dormitories", "Workshops", "Startup incubation"],
};
