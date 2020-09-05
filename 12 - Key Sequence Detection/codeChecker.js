const password = "password";
let typedArray  = [];

const audio = document.createElement("audio");
audio.src = "chad.wav";
audio.volume = 0.05;
audio.loop = true;

const hooray = () => {
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "<img src=\"chad.gif\">";
    audio.play();    
}

document.addEventListener("keyup", (e) => {
    typedArray.push(e.key);
    typedArray = typedArray.slice(-password.length);
    if(typedArray.join("").toLowerCase() == password.toLowerCase()){
        hooray();
        return;
    }
})

