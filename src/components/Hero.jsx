import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const ROLES = [
  "AI / GenAI systems",
  "production backends",
  "full-stack applications",
  "low-latency C++ systems",
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/VikramAditya144" },
  { label: "LinkedIn", href: "https://linkedin.com/in/vikramaditya7" },
  { label: "X", href: "https://x.com/0alloc" },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className='inline-block mb-3 px-3 py-1 rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 text-[#dcd3ff] text-[12px] sm:text-[14px] font-medium tracking-wide'
          >
            ● Available for AI / Engineering roles
          </motion.span>

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='hero-name-gradient'>Vikramaditya</span>
          </h1>

          <p
            className={`${styles.heroSubText} mt-2 text-white-100 flex flex-wrap items-baseline gap-x-2`}
          >
            <span>I build</span>
            <AnimatePresence mode='wait'>
              <motion.span
                key={ROLES[roleIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className='text-[#915EFF] font-semibold'
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className='mt-6 flex flex-wrap items-center gap-4'
          >
            <a
              href='#work'
              className='bg-[#915EFF] hover:bg-[#7d49e6] transition-colors text-white font-semibold text-[14px] sm:text-[16px] py-3 px-6 rounded-xl shadow-lg shadow-[#915EFF]/20'
            >
              View My Work
            </a>
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noreferrer'
              className='border border-white/30 hover:border-white hover:bg-white/5 transition-colors text-white font-semibold text-[14px] sm:text-[16px] py-3 px-6 rounded-xl'
            >
              Résumé
            </a>

            <div className='flex items-center gap-4 sm:ml-2'>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target='_blank'
                  rel='noreferrer'
                  className='text-secondary hover:text-white text-[14px] font-medium transition-colors'
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
