import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const skillGroups = [
  {
    category: "AI / ML Engineering",
    color: "#915EFF",
    skills: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "Deep Learning", "Computer Vision", "NLP", "Model Fine-tuning", "OCR", "Speech-to-Text"],
  },
  {
    category: "Generative AI & LLMs",
    color: "#00cea8",
    skills: ["LangChain", "CrewAI", "OpenAI API", "Hugging Face", "RAG", "Vector DBs", "Prompt Engineering", "Agentic Workflows", "Embeddings", "LLM Serving"],
  },
  {
    category: "MLOps & DevOps",
    color: "#FF6B6B",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "GCP", "MLflow", "Model Deployment", "Monitoring", "Linux", "Terraform", "Git"],
  },
  {
    category: "Backend & Systems",
    color: "#4ECDC4",
    skills: ["FastAPI", "Node.js", "REST APIs", "WebSockets", "Celery", "Redis", "PostgreSQL", "MongoDB", "C++17", "Low-latency IPC"],
  },
];

const SkillTag = ({ skill, color, index }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.04 }}
    className="px-3 py-1 rounded-full text-[13px] font-medium border cursor-default hover:scale-105 transition-transform duration-200"
    style={{
      color: color,
      borderColor: `${color}44`,
      backgroundColor: `${color}11`,
    }}
  >
    {skill}
  </motion.span>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            variants={fadeIn("up", "spring", gi * 0.15, 0.6)}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: group.color }} />
              <h3 className="text-white font-bold text-[16px]">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <SkillTag key={skill} skill={skill} color={group.color} index={si} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
