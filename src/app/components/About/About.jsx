'use client'

import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
        style={{
            height: '120vh',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        exit={{ opacity: 0 }}>
        <h1>About</h1>
        <p>
            Full-stack developer with a passion for crafting high-quality web and mobile apps. Skilled in React, Nextjs, React Native, Node.js, PHP, Laravel, and AWS serverless technologies
        </p>
        <p>
            Experience building robust front-end UI components, integrating third-party APIs, and architecting scalable cloud-based back-ends. Believes in writing tested, maintainable, and well-documented code.
        </p>
        <p>
            Enthusiastic about learning and adopting new languages, frameworks, and best practices. Loves bringing ideas to life and seeing tangible outcomes.
        </p>
        <p>
            Excited to join a team of like-minded developers to build innovative products. Eager to take on new challenges and make meaningful contributions.
        </p>
        <p>
            Outside of programming, interests include gaming, digital art, anime, and exploring the outdoors. Always seeking to expand skills and knowledge.
        </p>
        </motion.div>
    );
}