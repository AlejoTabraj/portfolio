import React, { useState, useEffect } from 'react';

export default function Transition() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-wrapper ${animate ? 't-left' : ''}`}>
      <div className={`transition-top ${animate ? 't-top' : ''}`} />
      <div className={`transition-bottom ${animate ? 't-bottom' : ''}`} />
    </div>
  );
}
