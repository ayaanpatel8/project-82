canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_x,last_position_y;
color="gold";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    console.log(color);
     mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_position_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of x and y coordinates=");
        console.log("X="+last_position_x+"Y="+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);
        console.log("current position of x and y coordinates=");
        console.log("X="+current_position_mouse_x+"Y="+current_position_mouse_y);
        ctx.lineTo(current_position_mouse_x,current_position_mouse_y);
        ctx.stroke(); 
    }
    last_position_x=current_position_mouse_x;
    last_position_y=current_position_mouse_y;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUp";
}
canvas.addEventListener("mouseup",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseLeave";
}
function cleararea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}