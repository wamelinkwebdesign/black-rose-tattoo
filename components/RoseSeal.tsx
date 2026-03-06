"use client";

import { motion } from "framer-motion";

interface RoseSealProps {
  className?: string;
}

export default function RoseSeal({ className }: RoseSealProps) {
  const text = "BLACK ROSE TATTOO & GALLERY \u00B7 AMSTERDAM \u00B7 EST. 2015 \u00B7 ";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative flex items-center justify-center ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 300 300"
        className="h-full w-full"
      >
        {/* Dark circle background */}
        <circle cx="150" cy="150" r="145" fill="#0a0a0a" />
        {/* Thin crimson border */}
        <circle
          cx="150"
          cy="150"
          r="145"
          fill="none"
          stroke="#C41E3A"
          strokeWidth="1"
        />
        {/* Inner decorative ring */}
        <circle
          cx="150"
          cy="150"
          r="118"
          fill="none"
          stroke="#C41E3A"
          strokeWidth="0.5"
          opacity="0.4"
        />

        {/* Stylized rose in center */}
        <g transform="translate(150,150) scale(0.55)" fill="none">
          {/* Outer petals */}
          <path
            d="M0,-50 C20,-45 40,-25 35,0 C30,25 10,40 0,45 C-10,40 -30,25 -35,0 C-40,-25 -20,-45 0,-50Z"
            fill="#C41E3A"
            opacity="0.3"
          />
          <path
            d="M0,-50 C20,-45 40,-25 35,0 C30,25 10,40 0,45 C-10,40 -30,25 -35,0 C-40,-25 -20,-45 0,-50Z"
            fill="none"
            stroke="#C41E3A"
            strokeWidth="1.5"
          />
          {/* Rotated petals */}
          <path
            d="M0,-50 C20,-45 40,-25 35,0 C30,25 10,40 0,45 C-10,40 -30,25 -35,0 C-40,-25 -20,-45 0,-50Z"
            fill="#C41E3A"
            opacity="0.25"
            transform="rotate(72)"
          />
          <path
            d="M0,-50 C20,-45 40,-25 35,0 C30,25 10,40 0,45 C-10,40 -30,25 -35,0 C-40,-25 -20,-45 0,-50Z"
            fill="none"
            stroke="#C41E3A"
            strokeWidth="1.2"
            transform="rotate(72)"
          />
          <path
            d="M0,-50 C20,-45 40,-25 35,0 C30,25 10,40 0,45 C-10,40 -30,25 -35,0 C-40,-25 -20,-45 0,-50Z"
            fill="#C41E3A"
            opacity="0.2"
            transform="rotate(144)"
          />
          <path
            d="M0,-50 C20,-45 40,-25 35,0 C30,25 10,40 0,45 C-10,40 -30,25 -35,0 C-40,-25 -20,-45 0,-50Z"
            fill="none"
            stroke="#C41E3A"
            strokeWidth="1"
            transform="rotate(144)"
          />
          <path
            d="M0,-50 C20,-45 40,-25 35,0 C30,25 10,40 0,45 C-10,40 -30,25 -35,0 C-40,-25 -20,-45 0,-50Z"
            fill="#C41E3A"
            opacity="0.2"
            transform="rotate(216)"
          />
          <path
            d="M0,-50 C20,-45 40,-25 35,0 C30,25 10,40 0,45 C-10,40 -30,25 -35,0 C-40,-25 -20,-45 0,-50Z"
            fill="none"
            stroke="#C41E3A"
            strokeWidth="1"
            transform="rotate(216)"
          />
          <path
            d="M0,-50 C20,-45 40,-25 35,0 C30,25 10,40 0,45 C-10,40 -30,25 -35,0 C-40,-25 -20,-45 0,-50Z"
            fill="#C41E3A"
            opacity="0.25"
            transform="rotate(288)"
          />
          <path
            d="M0,-50 C20,-45 40,-25 35,0 C30,25 10,40 0,45 C-10,40 -30,25 -35,0 C-40,-25 -20,-45 0,-50Z"
            fill="none"
            stroke="#C41E3A"
            strokeWidth="1.2"
            transform="rotate(288)"
          />
          {/* Inner spiral / bud */}
          <circle cx="0" cy="0" r="12" fill="#C41E3A" opacity="0.5" />
          <circle cx="0" cy="0" r="12" fill="none" stroke="#C41E3A" strokeWidth="1.5" />
          <path
            d="M0,-8 C5,-6 8,-2 6,3 C4,7 1,9 0,9 C-1,9 -4,7 -6,3 C-8,-2 -5,-6 0,-8Z"
            fill="#C41E3A"
            opacity="0.7"
          />
        </g>

        {/* Rotating text path */}
        <defs>
          <path
            id="textCircle"
            d="M150,150 m-130,0 a130,130 0 1,1 260,0 a130,130 0 1,1 -260,0"
          />
        </defs>
        <text
          fill="#F5F0E8"
          fontSize="10.5"
          letterSpacing="3.5"
          fontFamily="var(--font-inter), sans-serif"
          textAnchor="start"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 150 150"
            to="360 150 150"
            dur="45s"
            repeatCount="indefinite"
          />
          <textPath href="#textCircle">
            {text}
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}
