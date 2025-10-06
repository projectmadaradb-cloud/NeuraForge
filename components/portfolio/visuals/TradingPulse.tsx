"use client";
import { motion } from "framer-motion";

export default function TradingPulse() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-900/30 to-red-900/30 backdrop-blur-sm">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 400 200">
          <defs>
            <pattern id="tradingGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#22c55e" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tradingGrid)" />
        </svg>
      </div>

      {/* Candlestick Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10"
      >
        <svg width="280" height="140" viewBox="0 0 280 140">
          {/* Chart Lines */}
          <motion.path
            d="M20 120 Q80 100 140 60 T260 40"
            fill="none"
            stroke="url(#priceGradient)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          
          {/* Candlesticks */}
          {[
            { x: 40, high: 30, low: 70, open: 50, close: 40, color: "#22c55e" },
            { x: 80, high: 20, low: 80, open: 40, close: 60, color: "#ef4444" },
            { x: 120, high: 15, low: 75, open: 60, close: 25, color: "#22c55e" },
            { x: 160, high: 25, low: 85, open: 25, close: 70, color: "#ef4444" },
            { x: 200, high: 20, low: 70, open: 70, close: 35, color: "#22c55e" },
            { x: 240, high: 10, low: 60, open: 35, close: 20, color: "#22c55e" },
          ].map((candle, i) => (
            <g key={i}>
              <motion.line
                x1={candle.x}
                y1={candle.high}
                x2={candle.x}
                y2={candle.low}
                stroke={candle.color}
                strokeWidth="1"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              />
              <motion.rect
                x={candle.x - 4}
                y={Math.min(candle.open, candle.close)}
                width="8"
                height={Math.abs(candle.close - candle.open)}
                fill={candle.color}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              />
            </g>
          ))}

          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="priceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating P&L Indicator */}
      <motion.div
        className="absolute top-4 left-4 px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-lg text-xs font-mono text-green-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          +$2,847.92
        </motion.div>
      </motion.div>

      {/* Risk Gauge */}
      <motion.div
        className="absolute bottom-4 right-4"
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <svg width="60" height="30" viewBox="0 0 60 30">
          <path
            d="M 5 25 A 25 25 0 0 1 55 25"
            fill="none"
            stroke="#374151"
            strokeWidth="4"
          />
          <motion.path
            d="M 5 25 A 25 25 0 0 1 35 15"
            fill="none"
            stroke="#22c55e"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          />
          <motion.circle
            cx="35"
            cy="15"
            r="2"
            fill="#22c55e"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 3.5 }}
          />
        </svg>
        <div className="text-xs text-center text-gray-400 mt-1">Low Risk</div>
      </motion.div>

      {/* Pulse Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/10 to-blue-500/10"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}