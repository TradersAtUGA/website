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
    ],
  },
  logo: <Image src={logo} alt="UGA Trading" width={40} height={40} />,
  footer: {
    text: "© {new Date().getFullYear()} UGA Trading",
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
    "Traders@UGA is the University of Georgia’s premier Quantitative Finance Club, dedicated to fostering innovation, education, and collaboration in trading, quantitative research, and market analysis. Our mission is to bridge the gap between academia and the financial industry, empowering students to transform their theoretical knowledge into practical applications.",
  join_text:
    "Are you passionate about trading, quantitative research, or applying software engineering skills in the world of finance? Traders@UGA is a project-based community for ambitious individuals who want to make an impact by working on real-world, high-level financial challenges.",
  join_disabled: false,
  application_opens: "August 1, 2025",
  join_link:
    "https://docs.google.com/forms/d/e/1FAIpQLSfM8G4H0TWRnknVNwyCoVF6j22w2Yuxju0N3YnTN1re3i0hZg/viewform?usp=header",
  contact_text:
    "We'd love to hear from you! Reach out to us at any of the following:",
  members: [
    {
      name: "Brennan Davenport",
      role: "President",
      slug: "brennan-davenport",
      img: "/members/bd.jpeg",
      description:
        "Brennan Davenport is a double major in Mathematics and Computer Science. He enjoys researching trading strategies and optimizing computer systems, focusing on fine-tuning elements down to individual registers and bytes to enhance speed and performance. Outside of academics, Brennan participates in trading competitions to further develop his skills and plays tennis on the club team, balancing both intellectual and physical pursuits.",
      socials: [
        {
          name: "GitHub",
          href: "https://github.com/brennandavenport",
          icon: <BsGithub />,
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/brennan-davenport/",
          icon: <FaLinkedin />,
        },
      ],
    },
    {
      name: "Alexander Kimmig",
      role: "Head of SWE",
      slug: "alexander-kimmig",
      img: "/members/ak.jpeg",
      description:
        "Alex Kimmig is a Computer Science major specializing in Artificial Intelligence, with a minor in Biology. He is passionate about the transformative potential of AI in finance, particularly in trading and market analysis. His academic focus is fueled by the belief that AI will play a pivotal role in reshaping the financial sector. Outside of his studies, Alex enjoys playing piano, traveling, and staying active at the gym.",
      socials: [
        {
          name: "GitHub",
          href: "https://github.com/Alexanderk30",
          icon: <BsGithub />,
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/alex-kimmig",
          icon: <FaLinkedin />,
        },
      ],
    },
    {
      name: "Nate Levy",
      role: "Quant Trader",
      slug: "nate-levy",
      img: "/members/nl.jpeg",
      description:
        "Nate Levy is a double major in Mathematics and Economics with a focus on how markets and trading strategies evolve over time. He enjoys understanding the dynamics of financial markets through mathematical modeling and economic theory. Outside of school, Nate enjoys cooking, soccer, and college football.",
      socials: [
        {
          name: "GitHub",
          href: "https://github.com/natelevy1",
          icon: <BsGithub />,
        },
        {
          name: "LinkedIn",
          href: "https://linkedin.com/in/nathaniellevy/",
          icon: <FaLinkedin />,
        },
      ],
    },
    {
      name: "Wayne Lam",
      role: "Software Engineer",
      slug: "wayne-lam",
      img: "/members/wl.jpeg",
      description:
        "Wayne Lam is a junior at the University of Georgia with a deep passion for the applications of technology, particularly in the field of quantitative finance. With experience in software development, machine learning, and cybersecurity, Wayne enjoys exploring how these fields intersect with financial markets. Outside of computer science, Wayne enjoys playing violin and pickleball.",
      socials: [
        {
          name: "GitHub",
          href: "https://github.com/wayne-617",
          icon: <BsGithub />,
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/wayne-lamm",
          icon: <FaLinkedin />,
        },
      ],
    },
    {
      name: "Hadiza Sarr",
      role: "Quant Trader",
      slug: "hadiza-sarr",
      img: "/members/hs.jpeg",
      description:
        "Hadiza Sarr is a junior studying Financial Mathematics, Computer Science, and Business. With a strong interest in strategy within the finance industry, she has experience in consulting, fintech strategy, and portfolio management. She aims to enhance both her technical skills and strategic insight.",
      socials: [
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/hadiza-sarr-",
          icon: <FaLinkedin />,
        },
      ],
    },
    {
      name: "James Nguyen",
      slug: "james-nguyen",
      role: "Software Engineer",
      img: "/members/jn.jpeg",
      description:
        "James Nguyen is a junior majoring in Computer Science with a minor in Statistics. His passion for quantitative finance began early, sparked by an interest in the stock market that led to personal investing at the age of 16. Since then, he has developed a keen interest in machine learning, particularly in how it can be leveraged to solve real-world problems and make meaningful advances in society.",
      socials: [
        {
          name: "GitHub",
          href: "https://github.com/JamestheNguyenir",
          icon: <BsGithub />,
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/james-nguyen-76bab32ab/",
          icon: <FaLinkedin />,
        },
      ],
    },
    {
      name: "Jemia Johnson",
      role: "Quant Trader",
      slug: "jemia-johnson",
      img: "/members/jj.jpeg",
      description:
        "Jemia Johnson is passionate about continuous improvement and learning, with a strong foundation in Data Science and Mathematics. This summer, Jemia will join Delta Airlines as an Operations Analyst, applying her analytical skills to optimize large-scale systems and improve efficiency across the airline's network.",
      socials: [
        {
          name: "GitHub",
          href: "https://github.com/jemiaj",
          icon: <BsGithub />,
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/jemiajohnson",
          icon: <FaLinkedin />,
        },
      ],
    },
    {
      name: "Arjun Sakthi",
      role: "Software Engineer",
      slug: "arjun-sakthi",
      img: "/members/as.jpeg",
      description:
        "Arjun Sakthi is a junior at the University of Georgia, majoring in Computer Science. He has a strong interest in algorithmic trading, where he enjoys developing and testing systematic strategies that blend his programming expertise with his understanding of market behavior. He is also involved in research on autonomous vehicles and co-simulation platforms. Outside of academics, Arjun enjoys traveling, go-karting, and experimenting in the kitchen with new recipes.",
      socials: [
        {
          name: "GitHub",
          href: "https://github.com/arjun-sa",
          icon: <BsGithub />,
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/arjunsakthi/",
          icon: <FaLinkedin />,
        },
      ],
    },
    {
      name: 'Hyeongkeum "Han" Seo',
      role: "Quant Trader",
      slug: "hyeongkeum-seo",
      img: "/members/hhs.jpeg",
      description:
        "HyeongKeum Seo, often referred to as Han, is a Data Science major at the University of Georgia. He is deeply passionate about the intersection of mathematical models and financial technology, particularly in the context of quantitative finance. Han is focused on how statistical theory and algorithmic strategies can be applied to real-world markets.",
      socials: [
        {
          name: "LinkedIn",
          href: "http://www.linkedin.com/in/hkseo99",
          icon: <FaLinkedin />,
        },
      ],
    },
  ],
  alumni: [
    {
      name: "Raul Perez-Lopez",
      role: "Software Engineer",
      slug: "raul-perez-lopez",
      img: "/members/rp.JPG",
      description:
        "Raul Perez-Lopez is a senior majoring in Computer Science with a strong passion for Systems Research, Distributed Systems, and Machine Learning. He's focused on developing high-performance trading systems and optimizing large-scale financial models. Raul will be joining Two Sigma as a Software Engineer after graduation.",
      work: {
        title: "",
        company: "",
        location: "",
      },
      socials: [
        {
          name: "GitHub",
          href: "https://github.com/RaulP0402",
          icon: <BsGithub />,
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/raul-perez-lopez/",
          icon: <FaLinkedin />,
        },
      ],
    },
  ],
  projects: [
    {
      name: "FNN-Enhanced LSM for American Option Pricing",
      img: "/projects/LSM.png",
      date: "January - Present",
      description: [
        "This project explores a modern approach to pricing American-style options, which are challenging to value due to their early exercise features.",
        "Rather than relying on traditional techniques, we integrated machine learning by replacing the standard regression model with a neural network. This shift enabled a more flexible and data-driven estimation of future payoffs, resulting in a more robust and accurate valuation framework."
      ],
      socials: [
        // { name: "GitHub", href: "http://github.com", icon: <BsGithub /> },
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
