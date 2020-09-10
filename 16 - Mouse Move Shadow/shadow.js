const hoverableArea = document.querySelector("div.container");
const text = document.querySelector("h1");
const walk = 200;

const mouseListener = (e) => {
    const { offsetWidth: width, offsetHeight: height } = hoverableArea;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgb(145, 145, 145)`;

    
}

hoverableArea.addEventListener("mousemove", mouseListener);