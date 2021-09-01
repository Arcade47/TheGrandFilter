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
        //update objects
        player.update();
        // draw functions
        render_all();
        startDate = Date.now();
    }
    
}

function render_all() {
    // refresh
    refresh_canvas("lightblue");
    // draw objects
    player.render();
    terrain.render();
}

update_all();