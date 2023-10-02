'use client'

import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
        style={{
            height: '100vh',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2.5 } }}
        exit={{ opacity: 0 }}>
        <h1>About</h1>
        <p>
            I am a full stack developer with a background in mechanical engineering.
            I have a passion for learning and building things. I am currently
            looking for a full time position as a software engineer.
        </p>
        <p>
            I have experience with React, Node.js, Express, PostgreSQL, and
            JavaScript. I am currently learning TypeScript and GraphQL.
        </p>
        <p>
            I am a self starter and a quick learner. I am always looking for new
            challenges and opportunities to learn and grow.
        </p>
        <p>
            When I am not coding, I enjoy playing video games, watching movies, and
            playing with my dog.
        </p>
        </motion.div>
    );
}