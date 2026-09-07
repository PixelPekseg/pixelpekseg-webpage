// ==========================================================
// Mobile navigation (hamburger menu)
// ==========================================================
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Close the menu when a link or the booking button is clicked (mobile view)
mainNav.querySelectorAll('a, .nav-book-btn').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// ==========================================================
// Setmore "Book Now" widget – switch to the correct link
// Setmore's own script only ever uses the URL from the FIRST button that
// was ever clicked: it creates the popup and its iframe once, and after
// that just re-shows the same iframe for every button, ignoring the new
// URL. Since this site currently only has one booking button, this isn't
// an issue yet — but if a second booking button is ever added, keep this
// snippet so each button correctly loads its own booking link.
document.querySelectorAll('.anywhere-book-now-button').forEach(btn => {
  btn.addEventListener('click', () => {
    const url = btn.dataset.bookingUrl;
    const iframe = document.querySelector('.anywhere-iframe');
    if (iframe && iframe.getAttribute('src') !== url) {
      const box = iframe.closest('.anywhere-box');
      const loader = box ? box.querySelector('.anywhere-loader') : null;
      if (loader) loader.style.display = 'block';
      iframe.style.display = 'none';
      iframe.src = url;
    }
  });
});

// ==========================================================
// Language picker modal
// ==========================================================
const langToggle = document.getElementById('langToggle');
const langModal = document.getElementById('langModal');
const langModalClose = document.getElementById('langModalClose');
const langModalBackdrop = document.getElementById('langModalBackdrop');

if (langToggle && langModal && langModalClose && langModalBackdrop) {
  const openLangModal = () => {
    langModal.classList.add('open');
    langToggle.classList.add('open');
    langToggle.setAttribute('aria-expanded', 'true');
  };

  const closeLangModal = () => {
    langModal.classList.remove('open');
    langToggle.classList.remove('open');
    langToggle.setAttribute('aria-expanded', 'false');
  };

  langToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    openLangModal();
  });

  langModalClose.addEventListener('click', closeLangModal);
  langModalBackdrop.addEventListener('click', closeLangModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLangModal();
  });
}

// ==========================================================
// Current year in the footer
// ==========================================================
document.getElementById('year').textContent = new Date().getFullYear();
