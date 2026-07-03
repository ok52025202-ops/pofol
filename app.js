document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Active Link Highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (currentPath.includes(linkHref) || (linkHref === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('index.html')))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Lightbox Modal for Activities Gallery
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const captionText = document.getElementById('modalCaption');
  const closeBtn = document.querySelector('.modal-close');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (modal && modalImg && galleryCards) {
    galleryCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('.gallery-img');
        const title = card.querySelector('.gallery-title').innerText;
        const subtitle = card.querySelector('.gallery-subtitle').innerText;
        
        modal.classList.add('active');
        modalImg.src = img.src;
        captionText.innerText = `${title} - ${subtitle}`;
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-content')) {
        modal.classList.remove('active');
      }
    });
  }

  // Skill Fill Animation on Page Load
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if (skillBars.length > 0) {
    // Small delay to make sure transitions are rendered
    setTimeout(() => {
      skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = `${width}%`;
      });
    }, 100);
  }

  // Theme Toggle Handler
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  
  // Set theme initial state
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    document.documentElement.classList.add('light-theme');
  } else {
    document.documentElement.classList.remove('light-theme');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('light-theme');
      
      const theme = document.documentElement.classList.contains('light-theme') ? 'light' : 'dark';
      localStorage.setItem('theme', theme);
    });
  }
});
