"use client"

import { motion } from "framer-motion";
import { Chrono } from "react-chrono";


export default function Timeline()  {
  const workStartDate = new Date(2021, 4, 5);
  const today = new Date();
  const diffInMs = Math.abs(today - workStartDate);
  const yearDiff = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
  const monthDiff = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30)) - (yearDiff * 12) +2;
  
  const items = [{
    title: `April 2021 - Today`,
    cardTitle:`Software Engineer, HeyOrca! Inc. (${yearDiff} years and ${monthDiff} months.)`,
    url: "https://www.linkedin.com/company/heyorca/about/",
    cardDetailedText: "Sole developer responsible for maintaining and building new features for HeyOrca's React Native mobile app; collaborated with product team to deliver effective solutions. Migrated legacy mobile codebase to latest standards including TypeScript and React hooks. Reduced mobile app sizes 25% through optimization. Built back-end microservices to enable API integrations. Implemented test automation with Jest, achieving 90% coverage. Continuous focus on improving UX and performance based on user analytics.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://uploads-ssl.webflow.com/64fd2ab877368d04516ae836/64fd2ab877368d04516ae902_Team%2520Photo-p-800.jpg"
      }
    }
  },{
    title: "January 2018 - November 2020",
    cardTitle: "Graduated from Memorial University of Newfoundland",
    url: "https://www.mun.ca/",
    cardDetailedText:"Bachelors of Science in Computer Science",
    media: {
      type: "IMAGE",
      source: {
        url: "graduatepic.jpg"
      }
    }
  },
  {
    title: "June 2016 - July 2017",
    cardTitle: "INTI INTERNATIONAL UNIVERSITY & COLLEGES, MALAYSIA",
    url: "https://newinti.edu.my/",
    cardDetailedText:"Studied for a year in Malaysia, majoring in Computer Science and transferred to Canada.",
    media: {
      type: "IMAGE",
      source: {
        url: "transferred.jpg"
      }
    }
  }
];

  return (
    <section>
    <motion.h1>
     My Story So far...
    </motion.h1>
    <Chrono items={items} mode="VERTICAL_ALTERNATING" mediaHeight={500}	/>

    </section>
  )
}