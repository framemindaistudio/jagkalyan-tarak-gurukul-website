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
        { icon: "DoorOpen", label: "Grand Reception" },
        { icon: "Briefcase", label: "Administrative Office" },
        { icon: "UsersThree", label: "Board Room" },
        { icon: "Image", label: "Exhibition Gallery" },
        { icon: "Microphone", label: "Auditorium" },
        { icon: "ForkKnife", label: "Dining Hall" },
        { icon: "CookingPot", label: "Kitchen" },
        { icon: "FirstAidKit", label: "Medical Centre" },
      ],
    },
    {
      name: "First Floor",
      area: "1,300 sq.m",
      facilities: [
        { icon: "BookOpenText", label: "Library & Knowledge Centre" },
        { icon: "Monitor", label: "Digital Learning Centre" },
        { icon: "Flask", label: "Innovation Lab" },
        { icon: "Microscope", label: "Research Centre" },
        { icon: "ChalkboardTeacher", label: "Faculty Rooms" },
        { icon: "UsersThree", label: "Meeting Rooms" },
      ],
    },
    {
      name: "Second Floor",
      area: "1,200 sq.m",
      facilities: [
        { icon: "PersonSimpleTaiChi", label: "Meditation Hall" },
        { icon: "Plant", label: "Yoga Hall" },
        { icon: "Microphone", label: "Conference Hall" },
        { icon: "GraduationCap", label: "Skill Training Rooms" },
        { icon: "HandHeart", label: "Spiritual Wisdom Centre" },
        { icon: "Star", label: "VIP Suites" },
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
    { icon: "House", label: "Students Living" },
    { icon: "Buildings", label: "Faculty Residence" },
    { icon: "ForkKnife", label: "Aaharshala (dining)" },
    { icon: "UsersThree", label: "Students Activity Centre" },
    { icon: "Heartbeat", label: "Arogyashala (health)" },
    { icon: "Carrot", label: "Natural Nutrition Centre" },
    { icon: "GraduationCap", label: "Skill Development Centre" },
    { icon: "Flask", label: "Research & Innovation Centre" },
  ],
};

export const utilityBuildings = {
  count: 4,
  configuration: "G+1",
  eachArea: "100 sq.m",
  totalArea: "400 sq.m",
  uses: [
    { icon: "ShieldCheck", label: "Security Office" },
    { icon: "Lightning", label: "Electrical Room" },
    { icon: "WifiHigh", label: "Telecom Room" },
    { icon: "Wrench", label: "Maintenance Office" },
    { icon: "Package", label: "Store Room" },
    { icon: "ForkKnife", label: "Food Courts" },
    { icon: "Drop", label: "Wash Rooms" },
    { icon: "Plant", label: "Horticulture Office" },
  ],
};

export const grandEntrance = [
  { icon: "DoorOpen", label: "Monumental Gate" },
  { icon: "ShieldCheck", label: "Security Check" },
  { icon: "Garage", label: "Visitor Parking" },
  { icon: "Monitor", label: "Digital Display" },
  { icon: "Path", label: "Reception Plaza" },
];

export const sustainableInfrastructure = {
  landscape: [
    { icon: "TreeEvergreen", label: "Native trees" },
    { icon: "TreeEvergreen", label: "Fruit orchard" },
    { icon: "Plant", label: "Medicinal plants" },
    { icon: "TreeEvergreen", label: "Bamboo plantation" },
    { icon: "Sparkle", label: "Flower gardens" },
    { icon: "Butterfly", label: "Butterfly garden" },
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
  { icon: "Path", label: "12 m Main Road" },
  { icon: "Path", label: "6 m Internal Roads" },
  { icon: "PersonSimpleWalk", label: "Walking Track" },
  { icon: "Bicycle", label: "Cycling Track" },
  { icon: "HandHeart", label: "Disabled-friendly pathways" },
];

export const waterFeatures = [
  { icon: "Drop", label: "Central Fountain" },
  { icon: "FlowerLotus", label: "Lotus Pond" },
  { icon: "Waves", label: "Water Bodies" },
  { icon: "CloudRain", label: "Recharge Pits" },
];

export const parking = [
  { icon: "Garage", label: "Visitors" },
  { icon: "Briefcase", label: "Staff" },
  { icon: "GraduationCap", label: "Students" },
  { icon: "ChargingStation", label: "Electric Vehicle Charging" },
];

export const futureExpansion = {
  area: "4,000 sq.m",
  items: [
    { icon: "GridFour", label: "Modular structures" },
    { icon: "ChalkboardTeacher", label: "Training halls" },
    { icon: "House", label: "Dormitories" },
    { icon: "Wrench", label: "Workshops" },
    { icon: "Rocket", label: "Startup incubation" },
  ],
};
