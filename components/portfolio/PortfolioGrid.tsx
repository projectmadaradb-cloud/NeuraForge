"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem } from './portfolioItems';
import { glass, pill, glow, cardHover } from './styles';
import clsx from 'clsx';

interface PortfolioGridProps {
  items: PortfolioItem[];
}

interface ModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ item, isOpen, onClose }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={clsx(glass(), "rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto")}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-labelledby="modal-title"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2"
                aria-label="Close modal"
              >
                ✕
              </button>
              
              {/* Animation */}
              <div className="mb-6 h-40 bg-gray-900/50 rounded-xl flex items-center justify-center overflow-hidden">
                <item.Animation />
              </div>
              
              {/* Content */}
              <h2 id="modal-title" className="text-2xl font-bold text-white mb-2">
                {item.title}
              </h2>
              
              <p className="text-gray-300 text-lg mb-4">
                {item.tagline}
              </p>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {item.blurb}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, i) => (
                  <span key={i} className={pill()}>
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Impact */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
                  Key Impact
                </h3>
                <ul className="space-y-2">
                  {item.impact.map((impact, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA */}
              <motion.button
                className={clsx(
                  "w-full py-3 px-6 bg-gradient-to-r",
                  item.color,
                  "text-white font-semibold rounded-xl transition-all duration-300",
                  "hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Project
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function PortfolioCard({ item, index, onViewDetails }: { 
  item: PortfolioItem; 
  index: number; 
  onViewDetails: () => void; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className={glow(item.color)}>
        <motion.div
          className={clsx(glass("rounded-xl"), cardHover())}
          whileHover={{ y: -8 }}
        >
          <div className="p-6">
            {/* Animation Panel */}
            <div className="mb-6 h-32 bg-gray-900/50 rounded-xl flex items-center justify-center overflow-hidden relative">
              <item.Animation />
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                style={{ backgroundImage: `linear-gradient(to right, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})` }}>
              {item.title}
            </h3>
            
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {item.tagline}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag, i) => (
                <span key={i} className={pill()}>
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Impact Preview */}
            <div className="mb-6">
              <ul className="space-y-1">
                {item.impact.slice(0, 2).map((impact, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <div className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* View Details Button */}
            <motion.button
              onClick={onViewDetails}
              className="w-full py-2 px-4 text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-all duration-300 text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Details
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              onViewDetails={() => handleViewDetails(item)}
            />
          ))}
        </div>
      </div>
      
      <Modal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}