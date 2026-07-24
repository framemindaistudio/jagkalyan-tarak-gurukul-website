export const vision =
  "JagKalyan Tarak Gurukul is a living ecosystem, not just a campus, where education, wellness, research, sustainability, and innovation grow from the same root. Inspired by the timeless wisdom of the Gurukul tradition and empowered by modern science, it is a university built the way a forest grows: every part feeding every other.";

export const mission =
  "Education reaches its highest purpose only when it serves. JagKalyan Tarak Gurukul exists to empower people, restore the environment, and build solutions that outlast us, for the generations who come after.";

export const originStory =
  "The world is moving faster than we were built to follow. Progress has given us more speed, more noise, more screens, but not always more peace. JagKalyan Tarak Gurukul began as a question: what if the next generation didn't have to choose between success and stillness, between ambition and meaning? The answer is a campus in Dodamarg, North Goa, where Vedic wisdom sits beside artificial intelligence, and sustainability sits beside entrepreneurship.";

export type FounderOrgLink = {
  name: string;
  logo: string | null;
  href?: string;
};

export const founders: {
  name: string;
  role: string;
  photo: string;
  orgLinks?: FounderOrgLink[];
}[] = [
  {
    name: "Dr. Jagdish Kalyandurgmath",
    role: "Founding Member",
    photo: "/images/founder-jagdish-kalyandurgmath.jpg",
    orgLinks: [
      { name: "JagKalyan Trust", logo: "/images/logo-jagkalyan-trust.jpg", href: "https://www.jagkalyantrust.org/" },
      {
        name: "JagKalyan Tarak Gurukul",
        logo: "/images/logo-jagkalyan-tarak-gurukul.jpg",
        href: "https://www.jagkalyantarakgurukul.com/",
      },
      {
        name: "JagKalyan Holistic",
        logo: "/images/logo-jagkalyan-holistic.png",
        href: "https://www.jagkalyanholistic.com/#home",
      },
      { name: "Nandi Foundation", logo: null },
    ],
  },
  {
    name: "Dr. Tarak Arolkar",
    role: "Founding Member",
    photo: "/images/founder-tarak-arolkar.jpg",
    orgLinks: [
      {
        name: "Saiccha Developers",
        logo: "/images/logo-saiccha-developers.png",
        href: "https://saiccha-developers-website.vercel.app",
      },
    ],
  },
  {
    name: "Kiran Sawant",
    role: "Founding Member",
    photo: "/images/founder-kiran-sawant.jpg",
  },
];

export const foundersNote =
  "Discuss, question, and help us clarify this vision as it grows. This campus is being built in the open, in partnership with everyone who believes education should serve the whole person.";
