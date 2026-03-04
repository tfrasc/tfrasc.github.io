export const projectsData = [
  {
    title: "memeO",
    description: "iOS dating app based on memes",
    tags: ["React-Native", "Ruby on Rails", "PostgreSQL"],
    link: "https://github.com/tfrasc/memeO/",
    demo: null,
    icon: "/memeO_icon.png"
  },
  {
    title: "Cryptomon",
    description: "Web app for creating and battling NFT cards on the Ethereum blockchain",
    tags: ["Solidity", "React", "PostgreSQL"],
    link: "https://github.com/tfrasc/cryptomon/",
    demo: null
  },
  {
    title: "Taylor's Mugs",
    description: "Custom website for local artist who paints and sells coffee mugs",
    tags: ["Ruby on Rails", "Javascript", "PostgreSQL"],
    link: "https://github.com/tfrasc/taylorsmugs",
    demo: null
  },
  {
    title: "Radio Reddit",
    description: "Google Chrome Extension for Reddit to continuously play music from your favorite subreddits",
    tags: ["Javascript"],
    link: "https://github.com/tfrasc/Radio-Reddit-Chrome-Extension",
    demo: null,
    icon: "/radio-reddit.png"
  },
  {
    title: "Coinranking Plus",
    description: "Google Chrome Extension for Coinranking that adds favorites functionality",
    tags: ["Javascript"],
    link: "https://github.com/tfrasc/Coinranking-Plus",
    demo: null,
    icon: "/coinranking-plus.png"
  }
];

export const experienceData = [
  {
    title: "Senior Software Engineer",
    company: "Block / Square",
    period: "Nov 2021 – Feb 2026",
    description: [
      "Served as primary engineer for Payment Links, driving the product to 99.99% SLO — establishing it as the reliability standard for the team.",
      "Owned production reliability for Payment Links — resolving critical outages, mitigating DDoS SEVs, and proactively patching additional vulnerable services before they were exploited.",
      "Migrated ~23,000 merchants off a sunset platform as DRI, resolving a critical SLO degradation from 98.5% to 99.99% in the onboarding flow.",
      "Owned end-to-end delivery of Afterpay, Cash App Pay, Apple Pay, and Google Pay for Payment Links across multiple international markets, working cross-functionally across engineering, product, and partner teams through breaking API changes.",
      "Identified and eliminated redundant service calls across multiple services, achieving a 66% reduction in infrastructure load and 60ms latency savings per request.",
      "Designed, built, and maintained a proxy service bridging two separate infrastructures, providing authentication and routing between platforms — adopted by multiple teams to unblock key migration projects.",
    ],
    skills: ["Golang", "PHP", "Kotlin", "React", "Ember", "Vue", "PostgreSQL", "MySQL"]
  },
  {
    title: "Software Engineer",
    company: "Block / Square",
    period: "May 2019 – Nov 2021",
    description: [
      "Led international expansion of Payment Links to Japan, Canada, Australia, UK, and Ireland as sole engineer, independently managing eng design, stakeholder coordination, and production deployment to meet GTM deadlines.",
      "Led a multi-quarter seller onboarding initiative working cross-functionally across multiple teams — improving seller verification onboarding completion by 23% and overall signup rate by 24%.",
      "Identified and resolved a long-standing onboarding bug initially affecting ~1,500 sellers — directly restoring their ability to process payments and unblocking all future sellers from the same failure.",
      "Drove a UI redesign of the first-time experience using Square's Design System, resulting in a 3.8% increase in seller conversion rate.",
      "Led migration from a legacy internal platform to Square's public API, enabling third-party developer integrations and unlocking long-term platform extensibility.",
      "Instrumented observability across critical onboarding & payments flows, enabling proactive detection and faster resolution of production issues.",
    ],
    skills: ["Golang", "PHP", "Kotlin", "React", "Ember", "Vue", "PostgreSQL", "MySQL"]
  },
  {
    title: "Web Developer & Teaching Assistant",
    company: "Elevate Blue",
    period: "June 2016 – June 2018",
    description: [
      "Full-stack development across multiple production codebases at an early-stage startup; built and integrated RESTful APIs, third-party service integrations, and iOS/Android mobile experiences using React Native.",
      "Served as Teaching Assistant for an in-house coding bootcamp, mentoring students and junior developers through a full-stack web development curriculum.",
    ],
    skills: ["Ruby on Rails", "Node.js", "React Native", "PostgreSQL", "MongoDB"]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    school: "University of Nevada, Reno",
    period: "2013 - 2018",
    description: "Comprehensive computer science education with focus on software engineering and algorithms. Minors in Cyber Security and Mathematics"
  }
];
