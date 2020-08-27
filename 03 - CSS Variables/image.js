document.addEventListener("DOMContentLoaded", () => {
	const inputs = [spacing, blurSlider, colorPicker];

	inputs.map((input) => {
		input.addEventListener("mousemove", () => {
			const data = input.dataset;
			const units = data.units;
			const name = data.parameter;

			document.documentElement.style.setProperty(
				`--${name}`,
				`${input.value}${units}`
			);
		});
	});

	colorPicker.addEventListener("change", () => {
		document.documentElement.style.setProperty(
			"--colorVariable",
			colorPicker.value
		);
	});
});
