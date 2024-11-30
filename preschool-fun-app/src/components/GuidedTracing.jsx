import React, { useRef, useEffect } from 'react';

const GuidedTracing = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Desenează un model de bastonașe
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 250);
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 2;
    ctx.stroke();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={300}
      style={{ border: '1px solid black' }}
    />
  );
};

export default GuidedTracing;
