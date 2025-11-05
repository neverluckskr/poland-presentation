import { useEffect, useRef } from 'react';

export default function ParticlesCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lastTime = 0;
    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    
    const isLowPerformance = navigator.hardwareConcurrency <= 4 || 
                            (navigator.deviceMemory && navigator.deviceMemory < 4);
    const snowflakeCount = isLowPerformance ? 40 : 120;
    const snowflakes = [];
    
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        snowflakes.forEach(flake => {
          if (flake.x > canvas.width) flake.x = canvas.width;
          if (flake.y > canvas.height) flake.y = canvas.height;
        });
      }, 250);
    };
    window.addEventListener('resize', handleResize);

    // Функція для малювання красивої сніжинки
    const drawSnowflake = (ctx, size, branches = 6) => {
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.8})`;
      ctx.lineWidth = size * 0.15;
      ctx.lineCap = 'round';
      
      for (let i = 0; i < branches; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -size);
        ctx.stroke();
        
        // Маленькі гілки
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.5);
        ctx.lineTo(-size * 0.3, -size * 0.7);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.5);
        ctx.lineTo(size * 0.3, -size * 0.7);
        ctx.stroke();
        
        ctx.rotate((Math.PI * 2) / branches);
      }
    };

    class Snowflake {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.max(3, Math.random() * 8 + 3);
        this.speedY = Math.random() * 0.8 + 0.4;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = isLowPerformance ? 0.5 : Math.random() * 1.5 + 0.5;
        this.branches = 6;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.wobble) * 0.3;
        this.rotation += this.rotationSpeed;
        this.wobble += this.wobbleSpeed;

        if (this.y > canvas.height + 20) {
          this.reset();
          this.y = -20;
        }

        if (this.x > canvas.width + 20) {
          this.x = -20;
        } else if (this.x < -20) {
          this.x = canvas.width + 20;
        }
      }

      draw() {
        if (this.size <= 0) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;
        
        if (isLowPerformance || this.size < 4) {
          // Для маленьких сніжинок або слабких ПК - простий круг
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
          ctx.beginPath();
          ctx.arc(0, 0, this.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Для великих сніжинок - красива форма
          drawSnowflake(ctx, this.size, this.branches);
        }
        
        ctx.restore();
      }
    }

    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push(new Snowflake());
    }

    const animate = (currentTime) => {
      if (currentTime - lastTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        snowflakes.forEach(snowflake => {
          snowflake.update();
          snowflake.draw();
        });
        
        lastTime = currentTime;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-40"
    />
  );
}
