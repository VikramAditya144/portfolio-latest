import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { journey } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Lightbox for viewing full images
const Lightbox = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  const prev = (e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length); };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 z-50"
        >
          ×
        </button>

        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-4 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 z-50">
              ‹
            </button>
            <button onClick={next} className="absolute right-4 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 z-50">
              ›
            </button>
          </>
        )}

        <motion.img
          key={current}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          src={images[current]}
          alt=""
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        {images.length > 1 && (
          <div className="absolute bottom-5 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/40"}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

// Mini image strip inside card
const ImageStrip = ({ images, onImageClick }) => {
  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div
        className="w-full h-[220px] overflow-hidden rounded-xl cursor-zoom-in"
        onClick={() => onImageClick(0)}
      >
        <img src={images[0]} alt="" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-1 h-[200px] rounded-xl overflow-hidden">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden cursor-zoom-in" onClick={() => onImageClick(i)}>
            <img src={img} alt="" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    );
  }

  // 3+ images: big left + right column (flex to avoid row-span grid issues)
  return (
    <div className="flex gap-1 h-[220px] rounded-xl overflow-hidden">
      <div className="flex-1 overflow-hidden cursor-zoom-in" onClick={() => onImageClick(0)}>
        <img src={images[0]} alt="" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="flex flex-col gap-1 w-[45%]">
        <div className="flex-1 overflow-hidden cursor-zoom-in relative" onClick={() => onImageClick(1)}>
          <img src={images[1]} alt="" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="flex-1 overflow-hidden cursor-zoom-in relative" onClick={() => onImageClick(2)}>
          <img src={images[2]} alt="" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
          {images.length > 3 && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white text-xl font-bold">+{images.length - 3}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const JourneyCard = ({ item, index }) => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="bg-[#1a1a2e] border border-[#915EFF22] rounded-2xl overflow-hidden hover:border-[#915EFF55] transition-all duration-300"
      >
        {item.images && item.images.length > 0 && (
          <div className="p-3 pb-0">
            <ImageStrip
              images={item.images}
              onImageClick={(i) => setLightbox(i)}
            />
          </div>
        )}

        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-semibold bg-[#915EFF22] text-[#915EFF] px-3 py-1 rounded-full">
              {item.date}
            </span>
          </div>
          {item.title && (
            <h3 className="text-white font-bold text-[15px] leading-snug mb-2">{item.title}</h3>
          )}
          <p className="text-secondary text-[13px] leading-[22px] whitespace-pre-line line-clamp-4">
            {item.content}
          </p>
          {(item.likes || item.comments) && (
            <div className="mt-3 pt-3 border-t border-white/5 flex gap-4 text-[12px] text-secondary">
              {item.likes && <span>👍 {item.likes}</span>}
              {item.comments && <span>💬 {item.comments}</span>}
            </div>
          )}
        </div>
      </motion.div>

      {lightbox !== null && (
        <Lightbox
          images={item.images}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
};

const Journey = () => {
  if (!journey || journey.length === 0) return null;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>From LinkedIn · Real moments</p>
        <h2 className={styles.sectionHeadText}>My Journey.</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-3 text-secondary text-[16px] max-w-2xl leading-[28px]"
      >
        Milestones, people, and experiences that shaped who I am as a builder.
      </motion.p>

      <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {journey.map((item, index) => (
          <div key={index} className="break-inside-avoid">
            <JourneyCard item={item} index={index} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Journey, "journey");
