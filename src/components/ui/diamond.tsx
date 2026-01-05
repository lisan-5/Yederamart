import React from "react";

type Props = {
  className?: string;
};

const Diamond: React.FC<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--ethiopian-gold) / 1)" />
        <stop offset="50%" stopColor="hsl(var(--primary) / 1)" />
        <stop offset="100%" stopColor="hsl(var(--ethiopian-red) / 1)" />
      </linearGradient>
      <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12" />
      </filter>
    </defs>

    {/* Outer diamond shape with subtle stroke and shadow */}
    <g filter="url(#softShadow)">
      <path
        d="M60 6 L108 60 L60 114 L12 60 Z"
        fill="url(#diamondGrad)"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </g>

    {/* Inner facets */}
    <g fill="rgba(255,255,255,0.12)">
      <path d="M60 12 L94 60 L60 60 Z" opacity="0.14" />
      <path d="M60 12 L60 60 L26 60 Z" opacity="0.12" />
      <path d="M26 60 L60 60 L60 108 Z" opacity="0.08" />
      <path d="M94 60 L60 60 L60 108 Z" opacity="0.06" />
    </g>

    {/* Central highlight */}
    <circle cx="60" cy="60" r="6" fill="rgba(255,255,255,0.14)" />
  </svg>
);

export default Diamond;
