class Player {
    constructor() {
        this.pos = {x: n_cols/2, y: n_rows/2};
        this.vel = {x: 0, y: 0};
    }
    move() {
        // only move when there is no blocking
        if (terrain_data[this.pos.y + this.vel.y][this.pos.x + this.vel.x] == 0) {
            this.pos.x += this.vel.x;
            this.pos.y += this.vel.y;
        }
    }
    update() {
        this.move();
    }
    render() {
        draw_rect(this.pos);
    }
}

class Terrain {
    constructor() {
        this.coords = this.setup_coords();
    }
    setup_coords(time_ind, order) {
        var coords = [];
        for (let yi = 0; yi < terrain_data.length; yi++) {
            for (let xi = 0; xi < terrain_data[yi].length; xi++) {
                for (let zi = 0; zi < terrain_data[yi][xi].length; zi++) {
                    if (terrain_data[yi][xi] == 1) {
                        // push the coords depending on order
                        coords.push({x: xi, y: yi});
                    }
                }
            }
        }
        return coords;
    }
    update(time_ind) {

    }
    render() {
        for (let i = 0; i < this.coords.length; i++) {
            const c = this.coords[i];
            draw_rect(c, "orange");
        }
    }
}