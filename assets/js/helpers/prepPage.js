import * as g from "../../../global.js";

export function prepPage() {
  
  // Display page and throw in a loading image for a while
  document.body.style.display = '';
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
    }, 1000); // 1000ms = 1s delay
  }
  
  // Add current year to the footer
  document.getElementById("getFullYear").innerHTML = new Date().getFullYear();
  
  const myModal = document.getElementById('myModal');
  
  if (!g.storage.local.get('cookieUse')) {
    myModal.classList.add('show');
    myModal.style.display = 'block';
    

  }
  
}