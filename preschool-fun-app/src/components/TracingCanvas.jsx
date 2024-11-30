import React, { useRef } from 'react';


const TracingCanvas = () => {
  const canvasRef = useRef(null);

  const handleMouseDown = (e) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleMouseMove = (e) => {
    if (e.buttons !== 1) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="tracing-canvas-container">
      <canvas
        ref={canvasRef}
        width={500}
        height={300}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      />
      <br />
      <button onClick={clearCanvas}>Șterge</button>
    </div>
  );
};

export default TracingCanvas;
