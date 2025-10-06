"use client";
import { motion } from "framer-motion";

export default function WebAnim() {
  return (
    <div className="w-full h-32 bg-gray-900/50 rounded-lg relative overflow-hidden">
      {/* Browser chrome */}
      <div className="h-6 bg-gray-800 flex items-center px-2 space-x-1">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-red-400 rounded-full" />
          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
          <div className="w-2 h-2 bg-green-400 rounded-full" />
        </div>
        <div className="flex-1 h-3 bg-gray-700 rounded mx-2" />
      </div>
      
      {/* Viewport */}
      <div className="relative flex-1 p-2">
        {/* Wireframe blocks */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="h-4 bg-gray-600 rounded w-3/4" />
          <div className="h-2 bg-gray-600 rounded w-1/2" />
          <div className="flex space-x-2">
            <div className="h-8 bg-gray-600 rounded flex-1" />
            <div className="h-8 bg-gray-600 rounded flex-1" />
          </div>
        </motion.div>
        
        {/* Colored final version */}
        <motion.div
          className="absolute inset-2 space-y-2"
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded w-3/4" />
          <div className="h-2 bg-gray-300 rounded w-1/2" />
          <div className="flex space-x-2">
            <div className="h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded flex-1" />
            <div className="h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded flex-1" />
          </div>
        </motion.div>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ delay: 2.5, duration: 1, repeat: Infinity, repeatDelay: 3 }}
        />
      </div>
    </div>
  );
}