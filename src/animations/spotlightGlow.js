export const spotlightGlow = (canvas, ctx) => {
  let time = 0;
  const spotlights = [{
    x: canvas.width * 0.3,
    y: canvas.height * 0.3,
    radius: 150
  }, {
    x: canvas.width * 0.7,
    y: canvas.height * 0.7,
    radius: 180
  }];

  return () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    spotlights.forEach((spot, i) => {
      const gradient = ctx.createRadialGradient(
        spot.x + Math.sin(time * 0.5) * 100,
        spot.y + Math.cos(time * 0.3) * 50,
        0,
        spot.x + Math.sin(time * 0.5) * 100,
        spot.y + Math.cos(time * 0.3) * 50,
        spot.radius
      );
      
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(
        spot.x + Math.sin(time * 0.5) * 100,
        spot.y + Math.cos(time * 0.3) * 50,
        spot.radius,
        0,
        Math.PI * 2
      );
      ctx.fill();
    });
    
    time += 0.01;
  };
}; 