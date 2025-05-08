export function setupLoader() {
  
  const loader = document.querySelector('.template-loader');
if (loader) {
setTimeout(() => {
loader.style.opacity = 1;
loader.style.transition = 'opacity 0.1s';
setTimeout(() => {
loader.style.opacity = 0;
}, 0);
setTimeout(() => {
loader.style.display = 'none';
}, 100); // 100ms = 0.1s fade out duration
}, 3000); // 3000ms = 3s delay
}

  
}