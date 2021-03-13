const img = document.querySelector('img');
const h1 = document.querySelector('h1');
let i = 0;
let o = 1;
let timer = setInterval(blur, 30);

function blur() {
  if (i < 100) {
    img.style.filter = `blur(${i}px)`;
    h1.textContent = `${i + 1}%`;
    o = o - 0.01;
    h1.style.opacity = o;
    console.log(o);
    i++;
  } else {
    clearInterval(timer);
    return;
    //break삽질
  }
}
