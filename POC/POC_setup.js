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

var edge_len = 10;// Math.round(Math.min(window.innerWidth, window.innerHeight)/Math.min(n_rows + 10, n_cols + 10));
var time_dim_ind = 0;

// setup canvas

var canvas1 = document.getElementById("GameCanvas1");
canvas1.width = edge_len*n_cols;//window.innerWidth;
canvas1.height = edge_len*n_rows;//window.innerHeight;
var canvas2 = document.getElementById("GameCanvas2");
canvas2.width = edge_len*n_cols;//window.innerWidth;
canvas2.height = edge_len*n_rows;//window.innerHeight;
var canvas3 = document.getElementById("GameCanvas3");
canvas3.width = edge_len*n_cols;//window.innerWidth;
canvas3.height = edge_len*n_rows;//window.innerHeight;

var ctx1 = canvas1.getContext("2d");
var ctx1 = canvas2.getContext("2d");
var ctx1 = canvas3.getContext("2d");

// setup animation

startDate = Date.now();

// draw functions

function refresh_canvas(color, ctx=ctx1) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, edge_len*n_cols, edge_len*n_cols);
    ctx.closePath();
}

function draw_rect(pos, color="black", ctx=ctx1) {
    ctx.beginPath();
    ctx.rect(pos.x*edge_len, pos.y*edge_len, edge_len, edge_len);
    ctx.fillStyle = color;
    ctx.fill();
}

function debug_info_display(ll, ctx=ctx1) {
    ctx.font = '20px serif';
    ctx.fillStyle = "black";
    for (let i = 0; i < ll.length; i++) {
        const l = ll[i];
        ctx.fillText(l, 10, (i+1)*20);    
    }
}