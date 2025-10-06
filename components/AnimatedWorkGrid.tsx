'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

const getProjectIcon = (tags: string[]) => {
  if (tags.includes('Agent')) return '🤖';
  if (tags.includes('Realtime')) return '📊';
  if (tags.includes('Scraping')) return '🕷️';
  if (tags.includes('RAG') || tags.includes('Search')) return '📄';
  return '💼';
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const cardHoverVariants = {
  rest: { 
    scale: 1,
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    scale: 1.05,
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

interface WorkProject {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  thumb?: string;
  description?: string;
  outcomes?: string[];
}

interface AnimatedWorkGridProps {
  workProjects: WorkProject[];
}

export default function AnimatedWorkGrid({ workProjects }: AnimatedWorkGridProps) {
  return (
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {workProjects.map((project, index) => (
        <motion.div
          key={project.slug}
          variants={itemVariants}
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          <motion.div
            variants={cardHoverVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover-lift"
          >
            <Link href={`/portfolio/${project.slug}`} className="block">
              <div className="relative">
                {/* Project Image with Parallax Effect */}
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-xl overflow-hidden">
                  {project.thumb ? (
                    <motion.div
                      variants={imageVariants}
                      className="w-full h-full"
                    >
                      <Image
                        src={project.thumb}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ) : (
                    <motion.div 
                      className="w-full h-full flex items-center justify-center"
                      variants={imageVariants}
                    >
                      <span className="text-6xl">{getProjectIcon(project.tags)}</span>
                    </motion.div>
                  )}
                  
                  {/* Floating Number Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 mb-4 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {project.description || project.summary}
                  </motion.p>
                  
                  {/* Animated Outcomes */}
                  {project.outcomes && (
                    <motion.div 
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.outcomes.slice(0, 3).map((outcome, outcomeIndex) => (
                          <motion.li 
                            key={outcomeIndex}
                            className="text-sm text-gray-300 flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 + outcomeIndex * 0.1 }}
                          >
                            <motion.div 
                              className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 flex-shrink-0"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.8 + index * 0.1 + outcomeIndex * 0.1 }}
                            />
                            {outcome}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  
                  {/* Animated Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}