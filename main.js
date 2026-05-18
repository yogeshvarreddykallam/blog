/* =====================================================
   Yogeshvar Kallam — Portfolio JS
   ===================================================== */

/* ==================== MOBILE NAV ==================== */
const navToggle = document.getElementById('nav-toggle');
const navClose  = document.getElementById('nav-close');
const navList   = document.getElementById('nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => navList.classList.add('show-menu'));
}
if (navClose && navList) {
  navClose.addEventListener('click', () => navList.classList.remove('show-menu'));
}
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => navList && navList.classList.remove('show-menu'));
});

/* ==================== EXPERIENCE TABS ==================== */
const tabs = document.querySelectorAll('.qualification__button');
const tabContents = document.querySelectorAll('.qualification__content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach(c => c.classList.remove('qualification__active'));
    tabs.forEach(t => t.classList.remove('qualification__active'));
    if (target) target.classList.add('qualification__active');
    tab.classList.add('qualification__active');
  });
});

/* ==================== SCROLL: ACTIVE LINK ==================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector('.nav__list a[href*=' + sectionId + ']');
    if (!link) return;
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* ==================== SCROLL: HEADER STYLING ==================== */
function scrollHeader() {
  const nav = document.getElementById('header');
  if (!nav) return;
  if (window.scrollY >= 30) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* ==================== SCROLL TOP BUTTON ==================== */
function scrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;
  if (window.scrollY >= 400) btn.classList.add('show-scroll');
  else btn.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

/* ==================== THEME TOGGLE ==================== */
const themeButton = document.getElementById('theme-button');
const themeIcon   = document.getElementById('theme-icon');
const darkClass   = 'dark-theme';
const sunIcon     = 'uil-sun';
const moonIcon    = 'uil-moon';

const savedTheme = localStorage.getItem('selected-theme');
if (savedTheme === 'dark') {
  document.body.classList.add(darkClass);
  if (themeIcon) {
    themeIcon.classList.remove(moonIcon);
    themeIcon.classList.add(sunIcon);
  }
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkClass);
    const isDark = document.body.classList.contains(darkClass);
    if (themeIcon) {
      themeIcon.classList.toggle(sunIcon, isDark);
      themeIcon.classList.toggle(moonIcon, !isDark);
    }
    localStorage.setItem('selected-theme', isDark ? 'dark' : 'light');
  });
}

<<<<<<< HEAD
=======
/* ==================== PROJECT FILTERS ==================== */
const filterBtns = document.querySelectorAll('.filter__btn');
const projectCards = document.querySelectorAll('.projects__grid .project');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach(b => b.classList.remove('filter__btn--active'));
    btn.classList.add('filter__btn--active');

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

>>>>>>> 83d8d9a (Initial commit from local folder)
/* ==================== FADE-IN ON SCROLL ==================== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
