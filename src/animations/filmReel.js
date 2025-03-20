export const filmReel = (canvas, ctx) => {
  const frames = Array.from({ length: 15 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 40 + 20,
    speed: Math.random() * 1 + 0.5,
    rotation: Math.random() * Math.PI * 2
  }));

  return () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    
    frames.forEach(frame => {
      ctx.save();
      ctx.translate(frame.x, frame.y);
      ctx.rotate(frame.rotation);
      
      // Draw film frame
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.strokeRect(-frame.size/2, -frame.size/2, frame.size, frame.size);
      
      // Draw sprocket holes
      ctx.fillRect(-frame.size/2, -frame.size/2 - 5, 5, 3);
      ctx.fillRect(frame.size/2 - 5, -frame.size/2 - 5, 5, 3);
      
      frame.y = (frame.y + frame.speed) % canvas.height;
      frame.rotation += 0.01;
      
      ctx.restore();
    });
  };
}; 