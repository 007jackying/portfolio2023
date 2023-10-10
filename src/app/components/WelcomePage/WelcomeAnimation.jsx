'use client'

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import "./styles.css";

const iconList = [
  {
    name: faGithub,
    link: "https://github.com/007jackying/"
  },
  {
    name: faLinkedin,
    link: "https://www.linkedin.com/in/teng-hong-lee-a83bb8192/"
  },
  {
    name: faEnvelope,
    link: "mailto: dreamerofjack@gmail.com"
  }
];

const  Welcome = () =>  {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <div style={{ display: "flex" }}>
        <Image src={"/cover.jpg"} alt="coverPhoto" width={600} height={750} />
        <div className="typing" style={{ marginLeft: "20%", marginTop: "15%" }}>
          <motion.div   initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }} > <p>Greetings !</p>
          <p>{`My name is Teng Hong Lee. I'm a full stack developer !`}</p></motion.div>
         
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              listStyle: "none",
              padding: 0,
            }}
          >
            {iconList.map((icon, index) => (
              <li key={index}>
                <FontAwesomeIcon
                  key={index}
                  style={{
                    cursor: "pointer",
                    display: "inline-block",
                    margin: "0 10px",
                  }}
                  icon={icon.name}
                  onClick={() => window.open(icon.link, "_blank")}
                  bounce
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Welcome;