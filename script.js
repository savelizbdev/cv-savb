/**
 * Samuel Veliz - Portafolio Personal
 * Interacciones y UI Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. SELECTORS
  const html = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const scrollProgressBar = document.getElementById('scroll-progress');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailText = document.getElementById('email-text');
  const toast = document.getElementById('toast');
  const backToTopBtn = document.getElementById('back-to-top');
  const desktopNavLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // 2. THEME CONTROLLER (Dark / Light)
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  } else {
    html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // 3. MOBILE DRAWER NAVIGATION
  const openMobileMenu = () => {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // 4. SCROLL PROGRESS BAR & BACK TO TOP VISIBILITY
  const updateScrollProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
    }
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('resize', updateScrollProgress, { passive: true });
  updateScrollProgress();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 5. PROJECT CATEGORY FILTERING
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. COPY EMAIL WITH TOAST
  let toastTimeout;
  if (copyEmailBtn && emailText && toast) {
    const handleCopy = async () => {
      const emailToCopy = emailText.textContent.trim();
      try {
        await navigator.clipboard.writeText(emailToCopy);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = emailToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      toast.classList.add('show');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    };

    copyEmailBtn.addEventListener('click', handleCopy);
    copyEmailBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCopy();
      }
    });
  }

  // 7. ACTIVE NAVIGATION LINK ON SCROLL (IntersectionObserver)
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          desktopNavLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }
});

// Keyframe animation for card filtering
const dynamicStyle = document.createElement('style');
dynamicStyle.textContent = `
@keyframes fadeInCard {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
`;
document.head.appendChild(dynamicStyle);
