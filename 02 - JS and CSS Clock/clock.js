document.addEventListener("DOMContentLoaded", () => {
	const hours = document.querySelector(".hours");
	const minutes = document.querySelector(".minutes");
	const seconds = document.querySelector(".seconds");

	function updateDate() {
		const date = new Date();

		let secondsDegrees = date.getSeconds() * 6 + 90;
		let minutesDegrees = date.getMinutes() * 6 + 90;
		let hoursDegrees = date.getHours() * 30 + 90;

		seconds.style.transform = `rotate(${secondsDegrees}deg)`;
		minutes.style.transform = `rotate(${minutesDegrees}deg)`;
		hours.style.transform = `rotate(${hoursDegrees}deg)`;
	}

	setInterval(updateDate, 1000);

	updateDate();
});
