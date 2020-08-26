document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".card"));

  document.addEventListener("keydown", (event) => {
    let audio = document.querySelector(
      `audio[data-keycode="${event.keyCode}"]`
    );
    if (!audio) return;

    let keyCard = document.querySelector(
      `div[data-keycode="${event.keyCode}"]`
    );

    keyCard.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  });

  cards.forEach((keycard) => {
    keycard.addEventListener("transitionend", () => {
      keycard.classList.remove("playing");
    });
  });
});
