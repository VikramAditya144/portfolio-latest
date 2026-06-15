import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full glass-card shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='mt-4 flex flex-col-reverse md:flex-row items-center md:items-start gap-10'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm an AI / GenAI engineer with hands-on production experience building
          LLM-powered systems, OCR pipelines, speech-to-text services, and
          AI-driven automation platforms. I've shipped real products used across
          11+ states in India, saved 40+ lakhs through AI infrastructure
          optimisation at TradeIndia, and built low-latency C++17 systems
          modelling HFT architectures. I thrive at the intersection of AI
          research and production engineering — turning complex ideas into
          scalable, reliable software. Let's build something impactful together!
        </motion.p>

        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.85)}
          className='shrink-0'
        >
          <Tilt
            options={{ max: 20, scale: 1.03, speed: 450 }}
            className='green-pink-gradient p-[2px] rounded-2xl shadow-card'
          >
            <img
              src='/profile.jpg'
              alt='Vikramaditya'
              className='w-[240px] h-[300px] object-cover object-top rounded-2xl'
              loading='lazy'
            />
          </Tilt>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
