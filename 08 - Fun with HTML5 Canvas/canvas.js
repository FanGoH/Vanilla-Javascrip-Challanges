document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector(".drawingCanvas");
    const ctx = canvas.getContext("2d");

    let isDrawing = false;
    let [lastX, lastY] = [0, 0];
    let hue = 0;

    let draw = (e) => {
        if (!isDrawing) return;
        ctx.beginPath();

        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.lineWidth = 25;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";

        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];

        hue++;
        hue %= 360;
    };

    const windowResize = () => {
        canvas.width = window.innerWidth - 20;
        canvas.height = window.innerHeight - 20;

        // console.log(`(${canvas.width}, ${canvas.height})`);
    };

    let updateFlags = (e) => {
        isDrawing = !isDrawing;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    };

    window.onresize = windowResize;
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mousedown", updateFlags);
    canvas.addEventListener("mouseout", () => (isDrawing = false));
    canvas.addEventListener("mouseup", () => (isDrawing = false));

    windowResize();
});