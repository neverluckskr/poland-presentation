const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const isLowPerformance = navigator.hardwareConcurrency <= 4 || 
                        (performance.memory && performance.memory.jsHeapSizeLimit < 2000000000);

const snowflakes = [];
const snowflakeCount = isLowPerformance ? 10 : 40;

class Snowflake {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.size = Math.max(2, Math.random() * 5 + 2);
    this.speedY = Math.random() * 1.2 + 0.6;
    this.speedX = Math.random() * 0.6 - 0.3;
    this.opacity = Math.random() * 0.7 + 0.3;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = isLowPerformance ? 0 : Math.random() * 2.5 - 1.25;
    this.wobble = Math.random() * 2;
    this.wobbleSpeed = isLowPerformance ? 0 : Math.random() * 0.05;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX + Math.sin(this.wobble) * 0.5;
    this.rotation += this.rotationSpeed;
    this.wobble += this.wobbleSpeed;

    if (this.y > canvas.height + 10) {
      this.reset();
      this.y = -10;
    }

    if (this.x > canvas.width + 10) {
      this.x = -10;
    } else if (this.x < -10) {
      this.x = canvas.width + 10;
    }
  }

  draw() {
    if (this.size <= 0) return;

    ctx.save();
    ctx.translate(this.x, this.y);
    
    if (!isLowPerformance) {
      ctx.rotate((this.rotation * Math.PI) / 180);
    }
    
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(0, 0, this.size, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  }
}

function initSnowflakes() {
  for (let i = 0; i < snowflakeCount; i++) {
    snowflakes.push(new Snowflake());
  }
}

function animateSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach(snowflake => {
    snowflake.update();
    snowflake.draw();
  });
  requestAnimationFrame(animateSnowflakes);
}

initSnowflakes();
animateSnowflakes();

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, 250);
});

window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  const loadingProgress = document.getElementById('loadingProgress');
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 500);
      }, 300);
    }
    loadingProgress.style.width = `${progress}%`;
  }, 100);
});

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icons = {
    info: '🔵',
    success: '✅',
    warning: '⚠️',
    error: '❌'
  };
  
  toast.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <span class="toast-message">${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function animateNumber(el) {
  const target = parseFloat(el.dataset.target);
  const duration = 2500;
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    if (target > 1000) {
      el.textContent = Math.floor(current).toLocaleString();
    } else {
      el.textContent = current.toFixed(1);
    }
  }, 16);
}

document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const grid = document.getElementById('grid');
  const slidesSection = document.getElementById('slides');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const gridBtn = document.getElementById('gridBtn');
  const printBtn = document.getElementById('printBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const themeBtn = document.getElementById('themeBtn');
  const counter = document.getElementById('counter');
  const currentSlideEl = document.getElementById('currentSlide');
  const totalSlidesEl = document.getElementById('totalSlides');
  const progressBar = document.getElementById('progressBar');
  const currentTimeEl = document.getElementById('currentTime');

  let currentIndex = 0;
  let isGridView = false;
  let isAutoPlay = false;
  let autoPlayInterval = null;
  let isDarkTheme = true;

  totalSlidesEl.textContent = slides.length;
  
  if (isLowPerformance) {
    const particleCanvas = document.getElementById('particles');
    if (particleCanvas) {
      particleCanvas.style.opacity = '0.15';
    }
    document.body.classList.add('performance-mode');
  }

  function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('uk-UA', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    currentTimeEl.textContent = time;
  }
  updateClock();
  setInterval(updateClock, 1000);

  function updateUI() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
      
      if (index === currentIndex) {
        setTimeout(() => {
          const numbers = slide.querySelectorAll('.animated-number');
          numbers.forEach(animateNumber);
        }, 700);
      }
    });
    
    currentSlideEl.textContent = currentIndex + 1;
    const progressPercentage = ((currentIndex + 1) / slides.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    location.hash = `#${currentIndex + 1}`;
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === slides.length - 1;
  }

  function showSlide(index) {
    if (index < 0 || index >= slides.length) return;
    currentIndex = index;
    updateUI();
  }

  function showNext() {
    if (currentIndex < slides.length - 1) {
      showSlide(currentIndex + 1);
      showToast('Следующий слайд', 'info');
    } else {
      showToast('Это последний слайд', 'warning');
    }
  }

  function showPrev() {
    if (currentIndex > 0) {
      showSlide(currentIndex - 1);
      showToast('Предыдущий слайд', 'info');
    } else {
      showToast('Это первый слайд', 'warning');
    }
  }

  function toggleGrid() {
    isGridView = !isGridView;
    
    if (isGridView) {
      grid.innerHTML = '';
      slides.forEach((slide, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumb';
        if (index === currentIndex) thumb.classList.add('active');
        
        const title = document.createElement('h3');
        const slideTitle = slide.querySelector('h1, h2')?.textContent || `Слайд ${index + 1}`;
        title.innerHTML = `
          <span class="thumb-number">${index + 1}</span>
          <span class="thumb-title">${slideTitle}</span>
        `;
        
        const preview = document.createElement('div');
        preview.className = 'thumb-preview';

        const clonedSlide = slide.cloneNode(true);
        clonedSlide.style.visibility = 'visible';
        clonedSlide.style.opacity = '1';
        clonedSlide.style.position = 'relative';
        clonedSlide.style.transform = 'scale(1)';
        clonedSlide.style.height = 'auto';
        
        preview.appendChild(clonedSlide);
        thumb.appendChild(title);
        thumb.appendChild(preview);

        thumb.addEventListener('click', () => {
          showSlide(index);
          toggleGrid();
          showToast(`Переход к слайду ${index + 1}`, 'success');
        });
        
        grid.appendChild(thumb);
      });
      grid.classList.remove('hidden');
      slidesSection.style.display = 'none';
      showToast('Режим обзора слайдов', 'info');
    } else {
      grid.classList.add('hidden');
      slidesSection.style.display = 'block';
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        showToast('Полноэкранный режим включён', 'success');
      });
    } else {
      document.exitFullscreen().then(() => {
        showToast('Полноэкранный режим выключен', 'info');
      });
    }
  }

  function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('light-theme', !isDarkTheme);
    showToast(isDarkTheme ? 'Тёмная тема' : 'Светлая тема', 'success');
  }

  function toggleAutoPlay() {
    isAutoPlay = !isAutoPlay;
    
    if (isAutoPlay) {
      autoPlayInterval = setInterval(() => {
        if (currentIndex < slides.length - 1) {
          showNext();
        } else {
          showSlide(0);
        }
      }, 5000);
      showToast('Автопросмотр включён', 'success');
    } else {
      clearInterval(autoPlayInterval);
      showToast('Автопросмотр выключен', 'info');
    }
  }

  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);
  gridBtn.addEventListener('click', toggleGrid);
  fullscreenBtn.addEventListener('click', toggleFullscreen);
  themeBtn.addEventListener('click', toggleTheme);
  printBtn.addEventListener('click', () => {
    showToast('Подготовка к печати...', 'info');
    setTimeout(() => window.print(), 500);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      showNext();
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      showPrev();
    }
    if (e.key === 'g' || e.key === 'G') {
      e.preventDefault();
      toggleGrid();
    }
    if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullscreen();
    }
    if (e.key === 't' || e.key === 'T') {
      e.preventDefault();
      toggleTheme();
    }
    if (e.key === 'p' || e.key === 'P') {
      e.preventDefault();
      window.print();
    }
    if (e.key === 'a' || e.key === 'A') {
      e.preventDefault();
      toggleAutoPlay();
    }
    if (e.key === 'Home') {
      e.preventDefault();
      showSlide(0);
      showToast('Переход к первому слайду', 'info');
    }
    if (e.key === 'End') {
      e.preventDefault();
      showSlide(slides.length - 1);
      showToast('Переход к последнему слайду', 'info');
    }
    if (e.key === 'Escape' && isGridView) {
      toggleGrid();
    }
  });

  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      showNext();
    }
    if (touchEndX > touchStartX + 50) {
      showPrev();
    }
  }

  let wheelTimeout;
  document.addEventListener('wheel', (e) => {
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
      if (e.deltaY > 0) {
        showNext();
      } else if (e.deltaY < 0) {
        showPrev();
      }
    }, 50);
  }, { passive: true });

  function handleHashChange() {
    const hash = parseInt(location.hash.substring(1));
    const initialIndex = (isNaN(hash) || hash < 1 || hash > slides.length) ? 0 : hash - 1;
    if(initialIndex !== currentIndex) {
      showSlide(initialIndex);
    }
  }

  window.addEventListener('hashchange', handleHashChange);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && isAutoPlay) {
      clearInterval(autoPlayInterval);
    } else if (!document.hidden && isAutoPlay) {
      autoPlayInterval = setInterval(() => {
        if (currentIndex < slides.length - 1) {
          showNext();
        } else {
          showSlide(0);
        }
      }, 5000);
    }
  });

  handleHashChange();
  if (!location.hash) {
    showSlide(0);
  }

  setTimeout(() => {
    showToast('🇵🇱 Добро пожаловать на презентацию о Польше!', 'success');
  }, 1500);

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        showToast('🎉 Вы нашли секретный код! Автопросмотр активирован!', 'success');
        toggleAutoPlay();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  if (typeof performance !== 'undefined') {
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log(`⚡ Время загрузки: ${perfData.loadEventEnd - perfData.fetchStart}ms`);
    });
  }
});