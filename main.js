var MouseEvent = "empty";
canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");

color = "black";
console.log(color);
width_line = "2";
console.log(width_line);
radius = 10;
console.log(radius);

canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e) {
    color = document.getElementById("colour").value;
    console.log("Color is " + color);
    widths_of_line = document.getElementById("width_of_line").value;
    console.log("width of line is  " + widths_of_line);
    radius = document.getElementById("radius").value;
    console.log(radius);
    MouseEvent = "mouseDown";
    console.log(MouseEvent);

}
canvas.addEventListener("mousemove", my_mousmove);

function my_mousmove(e) {
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    console.log("x position = " + current_position_of_x + "y position "+ current_position_of_y);

    if (MouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;

        ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2 * Math.PI);
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.stroke();
    }
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}