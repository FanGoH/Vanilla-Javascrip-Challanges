const images = document.querySelectorAll(".slide-in");
let currentTop = 0;
let currentBottom = 0;

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}


const onScroll = () => {
    currentTop = window.scrollY;
    currentBottom = window.scrollY + window.innerHeight;

    images.forEach((image) => {
        const imageTop = image.offsetTop;
        const imageBottom = image.offsetTop + image.height;

        const isTopVisible = imageTop > currentTop && imageTop < currentBottom;
        const isBottomVisible = imageBottom > currentTop && imageBottom < currentBottom;


        if(!image.classList.contains("active") && (isTopVisible || isBottomVisible)) {
            image.classList.add("active");
        }
        else if (image.classList.contains("active") && (!isTopVisible && !isBottomVisible)) {
            image.classList.remove("active");
        }
    
    })
}

window.addEventListener("scroll", debounce(onScroll));
