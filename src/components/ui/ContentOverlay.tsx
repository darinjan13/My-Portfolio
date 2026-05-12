import React from 'react';

interface ContentOverlayProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentOverlay({ children, className = '' }: ContentOverlayProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-surface-dark/60 backdrop-blur-[1px] -z-10" />
      {children}
    </div>
  );
}