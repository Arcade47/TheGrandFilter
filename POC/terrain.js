// loaded from bitmap (see py script)
const terrain_data = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
    [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

// prepare empty terrain data

var terrain_3D_data = [];
var len_x = 0;
var len_y = 0;
var len_z = 0;
for (let yi = 0; yi < n_rows; yi++) {
    terrain_3D_data.push([]);
    len_x = terrain_3D_data.length;
    for (let xi = 0; xi < n_rows; xi++) {
        terrain_3D_data[len_x-1].push([]);
        len_y = terrain_3D_data[len_x - 1].length;
        for (let zi = 0; zi < n_rows; zi++) {
            terrain_3D_data[len_x-1][len_y-1].push(0);
        }
    }
}

// debug: init with same ground
var terrain_3D_data = [];
var len_x = 0;
var len_y = 0;
var len_z = 0;
for (let yi = 0; yi < terrain_data.length; yi++) {
    terrain_3D_data.push([]);
    len_x = terrain_3D_data.length;
    for (let xi = 0; xi < terrain_data[yi].length; xi++) {
        terrain_3D_data[len_x-1].push([]);
        len_y = terrain_3D_data[len_x-1].length;
        for (let zi = 0; zi < n_rows; zi++) {
            terrain_3D_data[len_x-1][len_y-1].push(terrain_data[yi][xi]);
        }
    }
}
