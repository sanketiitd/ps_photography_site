/* ============================================
   MAIN.JS — All Site Interactions
   ============================================ */

/* ── Mobile Menu Toggle ── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    mobileMenu.classList.toggle('open');
  }
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
}


/* ── Sticky Nav Shrink on Scroll ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) {
    nav.style.padding = '1rem 5vw';
  } else {
    nav.style.padding = '1.5rem 5vw';
  }
});


/* ── Portfolio Gallery Filter ──
   Filters items by data-cat attribute.
   Add new categories in index.html by:
   1. Adding a <button class="filter-btn"> with onclick="filterGallery('your-cat', this)"
   2. Adding data-cat="your-cat" to matching .portfolio-item divs
*/
function filterGallery(cat, btn) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show / hide items
  document.querySelectorAll('.portfolio-item').forEach(item => {
    if (cat === 'all' || item.dataset.cat === cat) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}


/* ── Contact Form Submission ──
   Currently shows a success message inline.
   To send real emails, replace the body of this
   function with a fetch() call to your backend
   or a service like Formspree / EmailJS.
*/
function submitForm() {
  const fname = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!fname || !email) {
    alert('Please fill in your name and email address.');
    return;
  }

  // Show success message
  document.getElementById('form-success').style.display = 'block';

  // Disable the submit button
  const btn = document.querySelector('.form-submit');
  btn.disabled = true;
  btn.textContent = 'Message Sent ✦';
}
