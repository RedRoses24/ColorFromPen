canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

color="#FF0000";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mouse_down);
function mouse_down(e){

    color=document.getElementById("Color").value;
    console.log(color);
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("x= "+mouse_x+", y= "+mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}