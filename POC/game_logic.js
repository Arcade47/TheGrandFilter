// attach & define event listeners

document.addEventListener('keyup', keyup);
document.addEventListener('keydown', keydown);

// setup objects

var player = new Player();
var terrain = new Terrain();

// update loop

function update_all() {

    // keep animation going
    window.requestAnimationFrame(update_all);

    endDate = Date.now();
    elapsed = endDate - startDate;

    if (elapsed > (1000/fps)) {
        // TODO store the past movements
        if (store_mvmnts) terrain.add_coord(player.pos);
        // step forward the index of third dim
        time_dim_ind = (time_dim_ind + 1)%n_rows;
        //update objects
        player.update();
        terrain.update(); // very comput. expensive
        // draw functions
        render_all();
        startDate = Date.now();
        // update order ind (debug)
        if (time_dim_ind == n_rows - 1) {
            order_ind = (order_ind + 1)%orders.length;
            terrain.order = orders[order_ind];
            store_mvmnts = false;
        }
    }
    
}

function render_all() {
    // refresh
    refresh_canvas("lightblue");
    // draw objects
    player.render();
    terrain.render();
    // debug info
    debug_info_display([
        terrain.order,
        String(time_dim_ind),
        "x: " + String(player.pos.x),
        "y: " + String(player.pos.y)
    ]);
}

// event listener functions

function keydown(e) {

    // movement
    if (e.code == "ArrowUp")    player.vel.y = -1;
    if (e.code == "ArrowDown")  player.vel.y = 1;
    if (e.code == "ArrowLeft")  player.vel.x = -1;
    if (e.code == "ArrowRight") player.vel.x = 1;

    if (e.code == "KeyX") {
        terrain.x_pressed = true;
        if (terrain.dim_switch_active) {
            terrain.dim_switch("x");
            terrain.dim_switch_active = false;
        }
    }
    if (e.code == "KeyZ") {
        terrain.y_pressed = true;
        if (terrain.dim_switch_active) {
            terrain.dim_switch("y");
            terrain.dim_switch_active = false;
        }
    }
}

function keyup(e) {
    
    // release movement
    if (e.code == "ArrowUp")    player.vel.y = 0;
    if (e.code == "ArrowDown")  player.vel.y = 0;
    if (e.code == "ArrowLeft")  player.vel.x = 0;
    if (e.code == "ArrowRight") player.vel.x = 0;

    // check state of X and Y keys
    if (e.code == "KeyX" && terrain.x_pressed) terrain.x_pressed = false;
    if (e.code == "KeyZ" && terrain.y_pressed) terrain.y_pressed = false;
    // reset terrain switch listener if all keys released
    if (!terrain.x_pressed && !terrain.y_pressed) terrain.dim_switch_active = true;

}

// start animation

update_all();