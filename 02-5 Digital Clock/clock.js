document.addEventListener("DOMContentLoaded", () => {
	function updateClock() {
		let date = new Date();
		let seconds = date.getSeconds();

		if (seconds < 10) {
			seconds = `0${seconds}`;
		}

		clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${seconds}`;
	}

	setInterval(updateClock, 1000);
	updateClock();
});
