import { motion } from "framer-motion";

const EMAIL = "vikramaditya.23bcs10061@sst.scaler.com";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/VikramAditya144",
    icon: (
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vikramaditya7/",
    icon: (
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
    ),
  },
  {
    label: "X",
    href: "https://x.com/0alloc",
    icon: (
      <path d="M18.24 2.25h3.31l-7.23 8.26L23 21.75h-6.64l-5.2-6.8-5.96 6.8H1.88l7.73-8.84L1 2.25h6.81l4.7 6.21 5.73-6.21Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z" />
    ),
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: (
      <path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10 7.41 8-5.41H4l8 5.41Zm0 2.42L3.3 7.97V18h17.4V7.97L12 13.83Z" />
    ),
  },
];

const Footer = () => {
  return (
    <footer className='relative z-10 border-t border-white/5 bg-primary/60 backdrop-blur-md'>
      <div className='max-w-7xl mx-auto px-6 sm:px-16 py-12 flex flex-col items-center gap-6'>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex flex-col items-center gap-5'
        >
          <p className='font-display text-white text-[22px] font-semibold'>
            Let&apos;s build something{" "}
            <span className='text-gradient-accent'>impactful</span>.
          </p>

          <div className='flex items-center gap-4'>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target='_blank'
                rel='noreferrer'
                aria-label={s.label}
                title={s.label}
                className='group w-11 h-11 rounded-full flex items-center justify-center border border-white/10 bg-white/5 hover:bg-accent hover:border-accent transition-all duration-300 hover:-translate-y-1'
              >
                <svg
                  viewBox='0 0 24 24'
                  className='w-5 h-5 fill-secondary group-hover:fill-white transition-colors'
                >
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </motion.div>

        <div className='w-full pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-secondary text-[13px]'>
          <span>© {new Date().getFullYear()} Vikramaditya. All rights reserved.</span>
          <span>Designed &amp; built with React, Three.js &amp; Framer Motion.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
