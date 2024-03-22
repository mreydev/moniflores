

const playSound = function() {
    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
      <audio autoplay loop>
        <source src="./img/1.mp3" type="audio/mpeg">
      </audio>
    `;
  document.body.appendChild(element);
    document.removeEventListener('click', playSound);
}

document.addEventListener('click', playSound);
//onload = () => {

   // document.body.classList.remove("container");

 // };



