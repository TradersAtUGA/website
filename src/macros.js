import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../public/ugatraderslogo.png";

export const macros = {
  title: "Traders@UGA",
  splash_text: "University of Georgia's Premier Quantitative Finance Club",
  description: "University of Georgia's Premier Quantitative Finance Club",
  email: "tradersatuga@gmail.com",
  nav: {
    logo: "UGA Trading",
    links: [
      { href: "/", text: "Home" },
      { href: "/about", text: "About" },
      { href: "/join", text: "Join Us" },
      { href: "/projects", text: "Projects" },
      { href: "/alumni", text: "Alumni" },
      { href: "/placements", text: "Placements"}
    ],
  },
  logo: <Image src={logo} alt="UGA Trading" width={40} height={40} />,
  footer: {
    // text: "© {new Date().getFullYear()} Traders @ UGA®",
    text: "© 2026 Traders @ UGA®",
    disclaimer: "Disclaimer: © 2026 Traders @ UGA®. “UGA” and related names and logos are registered trademarks of the University of Georgia. Traders @ UGA® is a student organization that is not affiliated with, sponsored by, or endorsed by the University of Georgia. Use of the “UGA” trademark complies with university policies. All rights reserved."
  },
  socials: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/traders-uga",
      icon: <FaLinkedin className="w-6 h-6" />,
    },
  ],
  images: {
    logo: {
      src: "logo.png",
      alt: "UGA Trading",
    },
  },
  about_text:
    "Traders@UGA is the University of Georgia's premier Quantitative Finance Club, dedicated to fostering innovation, education, and collaboration in trading, quantitative research, and market analysis. Our mission is to bridge the gap between academia and the financial industry, empowering students to transform their theoretical knowledge into practical applications.",
  join_text:
    "Are you passionate about trading, quantitative research, or applying software engineering skills in the world of finance? Traders@UGA is a project-based community for ambitious individuals who want to make an impact by working on real-world, high-level financial challenges.",
  join_disabled: false,
  application_opens: "January 31, 2026",
  join_link:
    "https://forms.gle/x2degEXZveXUZRrx9",
  contact_text:
    "We'd love to hear from you! Reach out to us at any of the following:",
  members: [
    {
      name: "Brennan Davenport",
      role: "President",
      slug: "brennan-davenport",
      img: "/members/bd.jpeg",
      linkedin: "https://www.linkedin.com/in/brennan-davenport/"
    },
    {
      name: "Nate Levy",
      role: "Head of Trading",
      slug: "nate-levy",
      img: "/members/nl.jpeg",
      linkedin: "https://linkedin.com/in/nathaniellevy/"
    },
     {
      name: "Vikas Katari",
      role: "Software Engineer",
      slug: "vikas-katari",
      img: "/members/VikasKatari.jpg",
      linkedin: "https://www.linkedin.com/in/vikas-katari-264652347/"
    },
    {
      name: "Edwin Cheung",
      role: "Quant Trader",
      slug: "edwin-cheung",
      img: "/members/ec.JPG",
      linkedin: "https://www.linkedin.com/in/cheungedwin/"
    },
    {
      name: "Arjun Sakthi",
      role: "Software Engineer",
      slug: "arjun-sakthi",
      img: "/members/as.jpeg",
      linkedin: "https://www.linkedin.com/in/arjunsakthi/"
    },
    {
      name: "Jemia Johnson",
      role: "Quant Trader",
      slug: "jemia-johnson",
      img: "/members/jj.jpeg",
      linkedin: "https://www.linkedin.com/in/jemiajohnson"
    },
    {
      name: "Wayne Lam",
      role: "Software Engineer",
      slug: "wayne-lam",
      img: "/members/WayneLam.jpeg",
      linkedin: "https://www.linkedin.com/in/wayne-lamm"
    },
    {
      name: "Hadiza Sarr",
      role: "Quant Trader",
      slug: "hadiza-sarr",
      img: "/members/hs.jpeg",
      linkedin: "https://www.linkedin.com/in/hadiza-sarr-"
    },
    {
      name: "James Nguyen",
      slug: "james-nguyen",
      role: "Software Engineer",
      img: "/members/jn.jpeg",
      linkedin: "https://www.linkedin.com/in/james-nguyen-932ae/"
    },
    {
      name: "Matt Mocklin",
      role: "Software Engineer",
      slug: "matt-mocklin",
      img: "/members/mm.jpg",
      linkedin: "https://www.linkedin.com/in/matt-mocklin/"
    },
    {
      name: 'Hyeongkeum "Han" Seo',
      role: "Quant Trader",
      slug: "hyeongkeum-seo",
      img: "/members/hhs.jpeg",
      linkedin: "http://www.linkedin.com/in/hkseo99"
    },
    {
      name: "Alexander Kimmig",
      role: "Software Engineer",
      slug: "alexander-kimmig",
      img: "/members/ak.jpeg",
      linkedin: "https://www.linkedin.com/in/alex-kimmig"
    },
  ],
  placements: [
    {
      company: "Jane Street",
      link: "https://www.janestreet.com/",
      img: "/companies/JaneStreet.png"
    },
    {
      company: "Two Sigma",
      link: "https://www.twosigma.com/",
      img: "/companies/TwoSigma.png"
    },
    {
      company: "Barclays",
      link: "https://home.barclays/",
      img: "/companies/Barclays.png"
    },
    {
      company: "Mathworks",
      link: "https://www.mathworks.com/",
      img: "/companies/MathWorks.webp"
    },
    {
      company: "Black Rock",
      link: "https://www.blackrock.com/us/individual",
      img: "/companies/BlackRock.png"
    },
    {
      company: "Moody's",
      link: "https://www.moodys.com/",
      img: "/companies/Moodys.png"
    },
    {
      company: "Delta Airlines",
      link: "https://www.delta.com/",
      img: "/companies/DeltaAirlines.png"
    },
    {
      company: "Apple",
      link: "https://www.apple.com/",
      img: "/companies/Apple.png"
    },
    {
      company: "Goldman Sachs",
      link: "https://www.goldmansachs.com/",
      img: "/companies/GoldmanSachs.png"
    },
  ],

  projects: [
      {
      name: "Market Exchange",
      img: "/projects/orderbook.png",
      date: "January - Present",
      description: [
        "We are developing a fully functional financial exchange engine in C++, designed to simulate the core mechanics of real-world trading infrastructure. The system features a high-speed order matching engine, support for limit and market orders, and an order book that processes bids and asks in real time. Built with a focus on low latency and performance, the project gives members hands-on experience with the systems that power firms like Jane Street, Two Sigma, and Citadel"
      ],
      socials: [
        { name: "GitHub", href: "https://github.com/TradersAtUGA/exchange-backend", icon: <BsGithub /> },
        // { name: "Twitter", href: "http://twitter.com", icon: <FaTwitter /> },
        // { name: "LinkedIn", href: "http://linkedin.com", icon: <FaLinkedin /> },
      ],
    },
    {
      name: "FNN-Enhanced LSM for Bermudan Option Pricing",
      img: "/projects/LSM.png",
      date: "January - Present",
      description: [
        "This project explores a modern approach to pricing high-dimensional OTC Bermudan-style options, which are challenging to value due to their early exercise features.",
        "Rather than relying on traditional techniques, we integrated machine learning by replacing the standard regression model with a neural network. This shift enabled a more flexible and data-driven estimation of future payoffs, resulting in a more robust and accurate valuation framework."
      ],
      socials: [
        { name: "GitHub", href: "https://github.com/TradersAtUGA/FNN-Enhanced-LSM", icon: <BsGithub /> },
        // { name: "Twitter", href: "http://twitter.com", icon: <FaTwitter /> },
        // { name: "LinkedIn", href: "http://linkedin.com", icon: <FaLinkedin /> },
      ],
    },
    {
      name: "Poker Strategy Simulator",
      img: "/projects/poker_bot.png",
      date: "April",
      description: [
        "We built a Texas Hold'em poker engine that powered an internal club competition. Members were paired into teams to develop automated poker strategies, which were run autonomously in a simulated environment during meetings.",
        "The project was a great showcase of diverse strategic thinking—some teams used simple probabilistic heuristics, while others built advanced models leveraging game theory and machine learning. It highlighted the trade-offs between simplicity and complexity in algorithmic decision-making."
      ],
      socials: [
        { name: "GitHub", href: "https://github.com/brennandavenport/PokerBot", icon: <BsGithub /> },
      ]
    },
  ],
};
