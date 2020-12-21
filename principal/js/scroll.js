
const container = document.getElementById('scroll');
container.addEventListener('wheel', function(event) {
  const delta = Math.max(-1, Math.min(1,(event.deltaY)));
  container.scrollLeft += (delta * 20);
  event.preventDefault();
});