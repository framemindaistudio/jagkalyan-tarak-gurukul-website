export type ChatTopic = {
  id: string;
  label: string;
  reply: string;
  href?: string;
  hrefLabel?: string;
};

export type ChatFaq = {
  id: string;
  question: string;
  answer: string;
};

export type ChatbotConfig = {
  name: string;
  greeting: string;
  topicsIntro: string;
  topics: ChatTopic[];
  faqs: ChatFaq[];
  enquireHref: string;
  whatsappHref: string;
};

export const chatbotConfig: ChatbotConfig = {
  name: "JagKalyan Assistant",
  greeting:
    "Namaste! I can share what's planned for the campus, or connect you with the team directly.",
  topicsIntro: "What would you like to know about?",
  topics: [
    {
      id: "campus",
      label: "The Campus",
      reply:
        "The Phase-1 master plan spans 20.4 acres: a main building with a library, innovation lab, and meditation hall, six residential and activity buildings, and a grand entrance, all designed as one self-sustaining ecosystem.",
      href: "/campus",
      hrefLabel: "See the full master plan",
    },
    {
      id: "eco-living",
      label: "Eco Living",
      reply:
        "A gated, plotted scheme right beside the Gurukul campus: 500 sq.m and 150 sq.m plots, Phase 1 of 1,000 plots with 3,000 planned in total, plus a cricket stadium, sports and shopping centres, and a decorative entrance gate.",
      href: "/eco-living",
      hrefLabel: "Explore Eco Living",
    },
    {
      id: "education",
      label: "Holistic Education",
      reply:
        "Education here goes beyond textbooks: smart classrooms, meditation halls, AI and robotics labs, organic farming as a subject, martial arts, and the arts, all part of one curriculum.",
      href: "/education",
      hrefLabel: "Learn about the curriculum",
    },
    {
      id: "wellness",
      label: "Wellness & Sustainable Living",
      reply:
        "Yoga, Ayurveda, naturopathy, and sattvic nutrition aren't electives here, they're the daily rhythm of campus life, alongside solar power and rainwater harvesting.",
      href: "/wellness",
      hrefLabel: "See the daily rhythm",
    },
    {
      id: "innovation",
      label: "Innovation & Entrepreneurship",
      reply:
        "A startup incubation space for students and rural entrepreneurs alike, working with AI, drones, and GIS to turn ideas into enterprises that strengthen the local economy.",
      href: "/innovation",
      hrefLabel: "See what's being built",
    },
    {
      id: "community",
      label: "Community & Seva",
      reply:
        "JagKalyan Seva Udyan (Nandi Seva Park) serves the differently-abled, seniors, single mothers, and farmers with residential care, medical support, and skill training, right on campus.",
      href: "/community",
      hrefLabel: "Read about Seva Udyan",
    },
  ],
  faqs: [
    {
      id: "location",
      question: "Where is the campus located?",
      answer:
        "Village Khanyale, Dodamarg Taluka, Sindhudurg District, Maharashtra, just north of the Goa border.",
    },
    {
      id: "status",
      question: "Is the campus open yet?",
      answer:
        "Not yet. This is a concept currently in development. The Phase-1 master plan covers 20.4 acres for the Gurukul campus, and Phase 1 of the Eco Living scheme plans 1,000 of a total 3,000 plots.",
    },
    {
      id: "difference",
      question: "What's the difference between the Gurukul and Eco Living?",
      answer:
        "The Gurukul is the education, wellness, and research campus itself. Eco Living is the gated, plotted residential scheme built right beside it, one integrated development in two parts.",
    },
    {
      id: "founders",
      question: "Who founded JagKalyan Tarak Gurukul?",
      answer: "Dr. Jagdish Kalyandurgmath, Dr. Tarak Arolkar, and Kiran Sawant, as founding members.",
    },
    {
      id: "get-involved",
      question: "How do I get involved?",
      answer:
        "As a student, a mentor, a partner, or a founding supporter. Use the Get Involved page or Enquire Now below and the team will follow up directly.",
    },
  ],
  enquireHref: "https://docs.google.com/forms/d/e/1FAIpQLSeBEZgv6EVBmFRfXRur-7uEBiGo8PRQpYv_z5QEMYByvmgq0A/viewform",
  whatsappHref: "https://wa.me/919820012345",
};
