import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  cplusplus,
  fastapi,
  postgresql,
  pytorch,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  zuvees,
  threejs,
  jomoPreview,
  widelabPreview,
  hftPreview,
  twinmindPreview,
} from "../assets";

import bgRemoval from "../assets/journey/bg_removal.jpg";
import bgRemoval2 from "../assets/journey/bg_removal2.jpg";
import bgRemoval3 from "../assets/journey/bg_removal3.jpg";
import housePhoenix from "../assets/journey/house_phoenix.jpg";
import housePhoenix2 from "../assets/journey/house_phoenix2.jpg";
import housePhoenix3 from "../assets/journey/house_phoenix3.jpg";
import gavinWood from "../assets/journey/gavin_wood.jpg";
import iitd from "../assets/journey/iitd.jpg";
import rajanAnandan from "../assets/journey/rajan_anandan.jpg";
import stanfordAI from "../assets/journey/stanford_ai.jpg";
import hackathon from "../assets/journey/hackathon.jpg";
import hackathon2 from "../assets/journey/hackathon2.jpg";
import zeroToOne from "../assets/journey/zero_to_one.jpg";
import iimCert from "../assets/journey/iim_cert.jpg";
import reactNexus from "../assets/journey/react_nexus.jpg";
import bitsHyderabad from "../assets/journey/bits_hyderabad.jpg";
import bluelearn from "../assets/journey/bluelearn.jpg";
import dukaanCto from "../assets/journey/dukaan_cto.jpg";
import mohakMangal from "../assets/journey/mohak_mangal.jpg";
import vivekMicrosoft from "../assets/journey/vivek_microsoft.jpg";
import mentorCertificate from "../assets/journey/mentor_certificate.jpg";
import solanaHackerHouse from "../assets/journey/solana_hacker_house.jpg";
import iimbTalk from "../assets/journey/iimb_talk.jpg";
import prathamMittal from "../assets/journey/pratham_mittal.jpg";
import achinAvytv from "../assets/journey/achina_avytv.jpg";
import avniBarman from "../assets/journey/avni_barman.jpg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "honors",
    title: "Honors",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI / GenAI Engineer",
    icon: creator,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Systems Programmer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "Kivio Technologies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2024 – Jan 2025",
    points: [
      "Built voice-driven conversational workflows using NLP and LLM-powered pipelines.",
      "Improved user engagement and reduced manual input errors through intelligent automation.",
      "Contributed to production reliability of AI systems deployed at scale.",
    ],
  },
  {
    title: "Software Engineer Intern – AI Systems",
    company_name: "TradeIndia",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2025 – Mar 2025",
    points: [
      "Integrated LLM-powered automation services into enterprise B2B platforms.",
      "Improved production reliability of AI systems handling high-traffic workloads.",
      "Collaborated with cross-functional teams to deliver AI-first product features.",
    ],
  },
  {
    title: "Product Engineer – AI / GenAI",
    company_name: "TradeIndia",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2025 – Oct 2025",
    points: [
      "Led deployment of TradeIndia.AI, saving 40+ lakhs through AI automation and optimised LLM infrastructure.",
      "Built production AI systems including OCR, Speech-to-Text, AI content generation, and background removal pipelines.",
      "Developed scalable AI workflows using FastAPI, async processing, and cloud deployment pipelines.",
      "Owned end-to-end AI product delivery from architecture through monitoring in a high-impact production environment.",
    ],
  },
];

const honors = [
  {
    title: "2nd Rank – CP Nightout",
    by: "NlogN CP Club",
    description: "Secured 2nd rank in a competitive programming contest organised by the NlogN Competitive Programming Club.",
    emoji: "🏆",
  },
  {
    title: "Hackathon Mentor",
    by: "Meta × Hugging Face × PyTorch",
    description: "Mentored 100+ participants at the Open Env Hackathon, guiding teams on building AI-powered projects.",
    emoji: "🎯",
  },
];

const certifications = [
  {
    title: "Cloud Machine Learning Engineering and MLOps",
    issuer: "Duke University",
    description: "End-to-end ML engineering, model deployment, and MLOps pipelines on cloud infrastructure.",
    emoji: "☁️",
  },
  {
    title: "Generative AI Essentials",
    issuer: "University of Michigan",
    description: "Foundations of generative AI, large language models, and practical application development.",
    emoji: "🤖",
  },
  {
    title: "Leadership Skills",
    issuer: "IIM Ahmedabad",
    description: "Strategic leadership, team management, and organisational communication from India's premier management institute.",
    emoji: "👥",
  },
];

const journey = [
  {
    date: "May 2025",
    title: "This single project got me a Full-Time Product Engineer offer — in just my 2nd year of college",
    content: "During my internship at TradeIndia, I was given an open-ended challenge: poor-quality product images were hurting SEO. Third-party vendors quoted ₹30–40 lakhs for bulk background removal of 10 lakh+ images.\n\nI built an in-house Background Removal Tool using BiRefNet, fine-tuned and deployed on our own GPU infra — saving 40+ lakhs and earning me a full-time Product Engineer role.",
    images: [bgRemoval, bgRemoval2, bgRemoval3],
    likes: "1.2K",
    comments: "89",
  },
  {
    date: "Apr 2026",
    title: "Mentor at Meta PyTorch OpenEnv Hackathon × Scaler School of Technology",
    content: "Received the Certificate of Appreciation for mentorship and support during the Meta PyTorch OpenEnv Hackathon × Scaler School of Technology.\n\nMentored 100+ participants — guiding teams on AI-powered project development, encouragement, and helping them learn, build, and innovate.",
    images: [mentorCertificate],
    likes: "543",
    comments: "61",
  },
  {
    date: "Dec 2024",
    title: "House Phoenix — Best House of the Year 🏆 (Captain, SST)",
    content: "After 10 months of dedication, House Phoenix won Best House of the Year with a 43-point lead!\n\nAs House Captain at Scaler School of Technology, this journey was an unforgettable mix of challenges, celebrations, and growth. A heartfelt thank you to all 160 house members — you made this dream a reality.",
    images: [housePhoenix, housePhoenix2, housePhoenix3],
    likes: "320",
    comments: "42",
  },
  {
    date: "Feb 2025",
    title: "JAM Tour with Gavin Wood — Co-Founder of Ethereum at IIT Delhi",
    content: "Attended the JAM Tour session with Gavin Wood at IIT Delhi, diving deep into JAM, Polkadot, and Core Play.\n\n\"Web3 is the technological embodiment of less trust and more truth.\"\n\nVisited the IIT Delhi Research & Innovation Park — one of the most inspiring experiences of my college journey.",
    images: [gavinWood, iitd],
    likes: "415",
    comments: "31",
  },
  {
    date: "Jun 2024",
    title: "Session with Rajan Anandan, MD PeakXV (formerly Sequoia India)",
    content: "Had the incredible opportunity to learn from Rajan Anandan — VP of Google India, MD of Microsoft India, and MD at Sequoia Capital.\n\nKey lessons: The Role of Hunger · Never Forget Your Roots · Chase Excellence · It's Not Okay to Be Just Okay · Embrace Failure.\n\nThis session reignited my passion for the startup ecosystem.",
    images: [rajanAnandan],
    likes: "287",
    comments: "24",
  },
  {
    date: "Jan 2025",
    title: "Speaking at IIM Bangalore — Identifying Problems Worth Solving",
    content: "Had the incredible opportunity to speak at IIM Bangalore on identifying real problems worth solving as a student founder.\n\nSharing my journey of building at the intersection of AI and real-world impact — from WiseLab to TradeIndia.AI.",
    images: [iimbTalk],
    likes: "312",
    comments: "38",
  },
  {
    date: "May 2024",
    title: "Completed Stanford's 'AI Awakening: Implications for the Economy and Society'",
    content: "Learned from Erik Brynjolfsson (Stanford HAI) and Eric Schmidt (Former CEO of Google) about Generative AI's technological foundations and economic implications.\n\nThis course fundamentally reshaped how I think about AI's role in shaping our future.",
    images: [stanfordAI],
    likes: "198",
    comments: "17",
  },
  {
    date: "Jul 2024",
    title: "Solana Hacker House Bengaluru",
    content: "Attended the Solana Hacker House in Bengaluru — an amazing gathering of builders at the frontier of Web3, blockchain, and decentralized tech.\n\nExplored the Solana ecosystem, met incredible founders, and got inspired by the energy of people building the future.",
    images: [solanaHackerHouse],
    likes: "167",
    comments: "19",
  },
  {
    date: "Jul 2024",
    title: "Hacker House Hackathon — AI-Powered Education Platform",
    content: "Built an AI education app over 2 days tackling:\n• 65% of students struggle with traditional lecture notes\n• Professors spend 17% of their workweek on class prep\n• In India, 45% of professor time is consumed by admin tasks\n\nBuilt automated note generation, quizzes, and performance analytics.",
    images: [hackathon, hackathon2],
    likes: "156",
    comments: "22",
  },
  {
    date: "Jul 2024",
    title: "React Nexus — Learning from the Best in Frontend",
    content: "Attended React Nexus and learned from industry leaders on performance tuning, React 19 API design, React Server Components, and defensive development.\n\nEarned a pass by building a React.js challenge app with Framer Motion and Dice Bear — one of the most fun builds I've done.",
    images: [reactNexus],
    likes: "143",
    comments: "16",
  },
  {
    date: "May 2024",
    title: "Leadership Skills Certification — IIM Ahmedabad",
    content: "Completed the Leadership Skills program from the Indian Institute of Management Ahmedabad — India's premier management institute.\n\nDeep-dived into strategic leadership, team management, organisational communication, and decision-making under uncertainty.",
    images: [iimCert],
    likes: "221",
    comments: "28",
  },
  {
    date: "Jun 2024",
    title: "Met Vivek — CTO, Microsoft for Startups",
    content: "Had a great conversation with Vivek, CTO of Microsoft for Startups, about building AI-first products, scaling infra, and navigating the startup ecosystem as a student founder.",
    images: [vivekMicrosoft],
    likes: "134",
    comments: "14",
  },
  {
    date: "Jun 2024",
    title: "Met Achina — Content Creator, AevyTV (Microsoft for Startups event)",
    content: "Connected with Achina from AevyTV at the Microsoft for Startups event — inspiring conversation about building in public, content creation, and the intersection of tech and community.",
    images: [achinAvytv],
    likes: "89",
    comments: "9",
  },
  {
    date: "Jun 2024",
    title: "Met Avni Barman — Founder, Genshe (Microsoft for Startups event)",
    content: "Connected with Avni Barman, founder of Genshe, at a Microsoft for Startups event. Inspiring to see student founders building at scale.",
    images: [avniBarman],
    likes: "98",
    comments: "11",
  },
  {
    date: "Jun 2024",
    title: "Immersive Visit to BITS Hyderabad",
    content: "Two-day immersive visit to BITS Hyderabad — connecting with inspiring professors, attending engaging sessions, exploring labs, and participating in activities.\n\nGained deep insight into the vibrant academic and research environment. Feeling inspired!",
    images: [bitsHyderabad],
    likes: "189",
    comments: "21",
  },
  {
    date: "May 2024",
    title: "Met Pratham Mittal — Co-Founder, Master's Union & Outgrow",
    content: "Had a great time meeting Pratham Mittal, co-founder of Master's Union and Outgrow. Pitched startup ideas and got candid, actionable feedback on building education-tech products.",
    images: [prathamMittal],
    likes: "178",
    comments: "19",
  },
  {
    date: "May 2024",
    title: "Met Mohak Mangal",
    content: "Had a great conversation with Mohak Mangal — discussing building in public, tech content creation, and the intersection of engineering and communication.",
    images: [mohakMangal],
    likes: "112",
    comments: "13",
  },
  {
    date: "Feb 2024",
    title: "Session with Bluelearn — Entrepreneurship Insights (Forbes 30 Under 30)",
    content: "Enlightening session on entrepreneurship with the Bluelearn team — who raised $3.5 million while still in college and earned a spot on Forbes 30 Under 30.\n\nKey insight: the best time to start is when you have nothing to lose.",
    images: [bluelearn],
    likes: "145",
    comments: "17",
  },
  {
    date: "Jun 2024",
    title: "Just Finished Reading Zero to One",
    content: "Key takeaways:\n\n1. The next big leap comes from innovation, not iteration.\n2. The real value lies in carving out your own niche — where you set the rules.\n3. Start small, dominate a focused market, then expand.\n4. The future isn't inevitable — it's built by people willing to challenge convention.",
    images: [zeroToOne],
    likes: "203",
    comments: "29",
  },
  {
    date: "Feb 2024",
    title: "Session with Subhash Choudhary — CTO of Dukaan ($70M company)",
    content: "Had a wonderful session with Subhash Choudhary, CTO of Dukaan. From a small village in Bihar and staying in the slums of Mumbai — to building a $70 million company.\n\nA story of pure grit, resilience, and the power of staying hungry.",
    images: [dukaanCto],
    likes: "267",
    comments: "33",
  },
];

const projects = [
  {
    name: "JOMO – AI Marketing Automation",
    description:
      "AI agent platform using CrewAI for automated poster, carousel, reel, ad, and copy generation. Currently live with 25+ pilot users, automating end-to-end marketing workflows.",
    tags: [
      {
        name: "CrewAI",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Multi-modal AI",
        color: "pink-text-gradient",
      },
    ],
    image: jomoPreview,
    source_code_link: "https://github.com/VikramAditya144/Project-Hackathon",
  },
  {
    name: "WiseLab.AI – AI LMS",
    description:
      "AI-powered Learning Management System deployed across 11+ states in India for Brahma Kumaris. Features automated note generation, quiz creation, and analytics dashboards reducing instructor workload by 50%.",
    tags: [
      {
        name: "LLMs",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: widelabPreview,
    source_code_link: "https://github.com/VikramAditya144/BK-TEST-APP",
  },
  {
    name: "HFT Market Data System",
    description:
      "Low-latency market data distribution system in C++17 with lock-free SPSC ring buffer IPC (64-byte cache-line aligned), TCP consumer, and shared-memory consumer modelling HFT architectures.",
    tags: [
      {
        name: "C++17",
        color: "blue-text-gradient",
      },
      {
        name: "Boost.Asio",
        color: "green-text-gradient",
      },
      {
        name: "lock-free IPC",
        color: "pink-text-gradient",
      },
    ],
    image: hftPreview,
    source_code_link: "https://github.com/VikramAditya144/HFT_Final_Project",
  },
  {
    name: "TwinMind – AI Meeting Copilot",
    description:
      "AI meeting copilot for live audio transcription, contextual AI suggestions, and real-time conversational Q&A. Built with LLMs and WebSockets for sub-second response latency.",
    tags: [
      {
        name: "WebSockets",
        color: "blue-text-gradient",
      },
      {
        name: "LLMs",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
    ],
    image: twinmindPreview,
    source_code_link: "https://github.com/VikramAditya144/meetingscribe",
    live_link: "",
  },
  {
    name: "Zuvees – E-Commerce Platform",
    description:
      "Complete e-commerce solution for fans and ACs with multi-user roles (Customer, Admin, Rider), variant-based products, Google OAuth, order tracking, and a PWA for delivery riders.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js/Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: zuvees,
    source_code_link: "https://github.com/VikramAditya144/zuvees-ecommerce",
    live_link: "https://zuvees-ecommerce.vercel.app/",
  },
];

export { services, technologies, experiences, honors, certifications, journey, projects };
