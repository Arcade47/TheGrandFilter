class Player {
    constructor() {
        this.pos = {x: n_cols/2, y: n_rows/2};
        this.vel = {x: 0, y: 0};
    }
    move() {
        // TODO find refactored way to write this if time left
        if (terrain.order[0] == "t") {
            if (terrain.order[1] == "x" && terrain_3D_data[time_dim_ind][this.pos.x + this.vel.x][this.pos.y + this.vel.y] == 1) return;
            if (terrain.order[1] == "y" && terrain_3D_data[time_dim_ind][this.pos.y + this.vel.y][this.pos.x + this.vel.x] == 1) return;
        }
        if (terrain.order[1] == "t") {
            if (terrain.order[0] == "x" && terrain_3D_data[this.pos.x + this.vel.x][time_dim_ind][this.pos.y + this.vel.y] == 1) return;
            if (terrain.order[0] == "y" && terrain_3D_data[this.pos.y + this.vel.y][time_dim_ind][this.pos.x + this.vel.x] == 1) return;
        }
        else {
            if (terrain.order[0] == "x" && terrain_3D_data[this.pos.x + this.vel.x][this.pos.y + this.vel.y][time_dim_ind] == 1) return;
            if (terrain.order[0] == "y" && terrain_3D_data[this.pos.y + this.vel.y][this.pos.x + this.vel.x][time_dim_ind] == 1) return;
        }
        // if no problems until then --> valid movement
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
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
        this.order = "xty";
        this.dim_switch_active = true; // flag to make constant switching impossible
        this.x_pressed = false;
        this.y_pressed = false;

        this.coords = this.setup_coords();
    }
    setup_coords() {
        var coords = [];

        // hardcoded for now;
        // TODO somehow refactor it if time left (according to javidx9 not necessary)
        if (this.order[0] == "t") {
            // for (let tdim_i = time_dim_ind; tdim_i >= 0; tdim_i--) {
            //     const element = array[tdim_i];
                
            // }
            for (let dim1_i = 0; dim1_i < terrain_3D_data[time_dim_ind].length; dim1_i++) {
                for (let dim2_i = 0; dim2_i < terrain_3D_data[time_dim_ind][dim1_i].length; dim2_i++) {
                    // check in time dimension until there is a "hit"
                    for (let tdim_i = time_dim_ind; tdim_i >= 0; tdim_i--) {
                        if (terrain_3D_data[tdim_i][dim1_i][dim2_i] == 1) {
                            if (this.order[1] == "x") coords.push({x: dim1_i, y: dim2_i});
                            if (this.order[1] == "y") coords.push({x: dim2_i, y: dim1_i});
                            break;
                        }
                    }
                }
            }
        }
        else if (this.order[1] == "t") {
            for (let dim1_i = 0; dim1_i < terrain_3D_data.length; dim1_i++) {
                for (let dim2_i = 0; dim2_i < terrain_3D_data[dim1_i][time_dim_ind].length; dim2_i++) {
                    // check in time dimension until there is a "hit"
                    for (let tdim_i = time_dim_ind; tdim_i >= 0; tdim_i--) {
                        if (terrain_3D_data[dim1_i][tdim_i][dim2_i] == 1) {
                            if (this.order[0] == "x") coords.push({x: dim1_i, y: dim2_i});
                            if (this.order[0] == "y") coords.push({x: dim2_i, y: dim1_i});
                            break;
                        }
                    }
                }
            }
        }
        else {
            for (let dim1_i = 0; dim1_i < terrain_3D_data.length; dim1_i++) {
                for (let dim2_i = 0; dim2_i < terrain_3D_data[dim1_i].length; dim2_i++) {
                    for (let tdim_i = time_dim_ind; tdim_i >= 0; tdim_i--) {
                        if (terrain_3D_data[dim1_i][dim2_i][tdim_i] == 1) {
                            if (this.order[0] == "x") coords.push({x: dim1_i, y: dim2_i});
                            if (this.order[0] == "y") coords.push({x: dim2_i, y: dim1_i});
                            break;
                        }
                    }
                }
            }
        }
        return coords;

        // old code
        /*
        for (let yi = 0; yi < terrain_data.length; yi++) {
            for (let xi = 0; xi < terrain_data[yi].length; xi++) {
                for (let zi = 0; zi < terrain_data[yi][xi].length; zi++) {
                    if (terrain_data[yi][xi][] == 1) {
                        // push the coords depending on order
                        coords.push({x: xi, y: yi});
                    }
                }
            }
        }
        */
        
    }
    add_coord(coord) {
        // TODO refactor this hardcoding when time left
        if (this.order[0] == "t") {
            if (this.order[1] == "x")   terrain_3D_data[time_dim_ind][coord.x][coord.y] = 1;
            else                        terrain_3D_data[time_dim_ind][coord.y][coord.x] = 1;
        }
        else if (this.order[1] == "t") {
            if (this.order[0] == "x")   terrain_3D_data[coord.x][time_dim_ind][coord.y] = 1;
            else                        terrain_3D_data[coord.y][time_dim_ind][coord.x] = 1;
        }
        else {
            if (this.order[0] == "x")   terrain_3D_data[coord.x][coord.y][time_dim_ind] = 1;
            else                        terrain_3D_data[coord.y][coord.x][time_dim_ind] = 1;
        }
    }
    dim_switch(button) {
        // convert to array
        var split_order = this.order.split("");
        // find relevant indices
        const t_ind       = split_order.findIndex((e) => e == "t");
        const switch_ind  = split_order.findIndex((e) => e == button);
        // piece things together and update the class variable order
        split_order[t_ind]      = button;
        split_order[switch_ind] = "t";
        this.order = split_order.join("");
    }
    update() {
        this.coords = this.setup_coords(); // TODO find a more clever way than read out from 2D every frame ...
    }
    render() {
        for (let i = 0; i < this.coords.length; i++) {
            const c = this.coords[i];
            draw_rect(c, "orange");
        }
    }
}