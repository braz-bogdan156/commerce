const casesWrapper = document.querySelector('.cases-wrapper');

let isDown = false;
let startX;
let scrollLeft;

casesWrapper.addEventListener('mousedown', (e) => {
  isDown = true;
  casesWrapper.classList.add('active');
  startX = e.pageX - casesWrapper.offsetLeft;
  scrollLeft = casesWrapper.scrollLeft;
});

casesWrapper.addEventListener('mouseleave', () => {
  isDown = false;
  casesWrapper.classList.remove('active');
});

casesWrapper.addEventListener('mouseup', () => {
  isDown = false;
  casesWrapper.classList.remove('active');
});

casesWrapper.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - casesWrapper.offsetLeft;
  const walk = (x - startX) * 2; // коефіцієнт чутливості (можна змінювати)
  casesWrapper.scrollLeft = scrollLeft - walk;
});