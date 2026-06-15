import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { honors, certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const HonorCard = ({ index, title, by, description, emoji }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className='glass-card p-6 flex gap-4 items-start'
  >
    <div className='w-12 h-12 rounded-full bg-tertiary flex justify-center items-center flex-shrink-0 text-2xl'>
      {emoji}
    </div>
    <div>
      <h3 className='text-white font-bold text-[18px]'>{title}</h3>
      <p className='text-[#915EFF] text-[14px] font-semibold mb-2'>{by}</p>
      <p className='text-secondary text-[14px] leading-[22px]'>{description}</p>
    </div>
  </motion.div>
);

const CertCard = ({ index, title, issuer, description, emoji }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.2, 0.75)}
    className='glass-card p-5 flex gap-4 items-start'
  >
    <div className='w-10 h-10 rounded-full bg-black-200 flex justify-center items-center flex-shrink-0 text-xl'>
      {emoji}
    </div>
    <div>
      <h3 className='text-white font-semibold text-[15px]'>{title}</h3>
      <p className='text-secondary text-[13px] mt-1'>{issuer}</p>
    </div>
  </motion.div>
);

const Honors = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Recognition & Learning</p>
        <h2 className={styles.sectionHeadText}>Honors & Awards.</h2>
      </motion.div>

      <div className='mt-10 flex flex-col gap-5'>
        {honors.map((honor, index) => (
          <HonorCard key={honor.title} index={index} {...honor} />
        ))}
      </div>

      <motion.div variants={textVariant()} className='mt-16'>
        <p className={styles.sectionSubText}>Continuous Learning</p>
        <h2 className='font-display text-white font-bold text-[30px]'>Certifications.</h2>
      </motion.div>

      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {certifications.map((cert, index) => (
          <CertCard key={cert.title} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Honors, "honors");
