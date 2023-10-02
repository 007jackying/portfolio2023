'use client'

import { motion, useScroll } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./styles.css";


export default function Welcome() {
  const { scrollYProgress } = useScroll();

  return (
    <>
    <motion.div  className="progress-bar"
    style={{ scaleX: scrollYProgress }}/>
    <div className="typing">
    <p>Greetings !</p>
    <Typewriter
    options={{
      strings: [`<p style="font-family: nothing;">My name is Teng Hong Lee</p>`,`<p style="font-family: nothing;">I'
      m a full stack developer</p>`],
      autoStart: true,
      loop: true,
      cursor: ''
    }}/>
      </div>
    </>
    
  

    

  );
}
