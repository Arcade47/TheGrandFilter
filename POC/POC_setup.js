// TODO:
/*
- no gravity, no real physics
- dim switch on button press
- wrapping
*/

// global vars

var n_rows = 60;
var n_cols = 80;
var edge_len = Math.round(Math.min(window.innerWidth, window.innerHeight)/Math.min(n_rows + 10, n_cols + 10));
var fps = 10;

// setup canvas

var canvas = document.getElementById("GameCanvas");
canvas.width = edge_len*n_cols;//window.innerWidth;
canvas.height = edge_len*n_rows;//window.innerHeight;

var ctx = canvas.getContext("2d");

// setup animation

startDate = Date.now();

// draw functions

function refresh_canvas(color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
}

function draw_rect(pos, color="black") {
    ctx.beginPath();
    ctx.rect(pos.x*edge_len, pos.y*edge_len, edge_len, edge_len);
    ctx.fillStyle = color;
    ctx.fill();
}

// event listener functions

function keyup() {}
function keydown() {}

function keydown(e) {

    if (e.code == "ArrowUp")    player.vel.y = -1;
    if (e.code == "ArrowDown")  player.vel.y = 1;
    if (e.code == "ArrowLeft")  player.vel.x = -1;
    if (e.code == "ArrowRight") player.vel.x = 1;
}

function keyup(e) {
    
    if (e.code == "ArrowUp")    player.vel.y = 0;
    if (e.code == "ArrowDown")  player.vel.y = 0;
    if (e.code == "ArrowLeft")  player.vel.x = 0;
    if (e.code == "ArrowRight") player.vel.x = 0;
}