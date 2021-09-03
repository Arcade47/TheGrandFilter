// TODO:
/*
- no gravity, no real physics
- dim switch on button press
- wrapping
*/

// user parameters

var n_rows = 20;
var n_cols = n_rows;
var fps = 10;

// derived and global vars

var edge_len = Math.round(Math.min(window.innerWidth, window.innerHeight)/Math.min(n_rows + 10, n_cols + 10));
var time_dim_ind = 2;
const orders = ["xyt", "xty", "txy"];
var order_ind = 0;
var store_mvmnts = true;

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

function debug_info_display(ll) {
    ctx.font = '20px serif';
    ctx.fillStyle = "black";
    for (let i = 0; i < ll.length; i++) {
        const l = ll[i];
        ctx.fillText(l, 10, (i+1)*20);    
    }
}