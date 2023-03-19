// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`14003c00010101010101010101010101010101010101010101000000000000000000000000000000000000010100000000000000000000000000000000000001010000000000000000000000000000000000000101000000000000000000000000000000000000010100000000000000000000000000000000000001010000000000000000000000000000000000000101000000000000000000000000000000000000010100000000000000000000000000000000000001010000000000000000000000000000000000000101000000000000000000000000000000000000010100000000000000000000000000000000000001010000000000000000000000000000000000000101000000000000000000000000000000000000010100000000000000000000000000000000000001010000000000000000000000000000000000000101000000000000000000000000000000000000010100000000000000000000000000000000000001010000000000000000000000000000000000000101010101010101010101010101010100010101010000000000000000000000000000010001000000000000000000010101010101010101000100000000000000010100000000000000000000010000000000000100000000000000000000000000010000000001000000000000000000000000000000010000000100000000000000000000000000000001000001000000000000000000000000000000000001000100000000000000000000000000000000000100010000000000000000000000000000000000010001000000000000000000000000000000000001000100000000000000000000000000000000000100010000000000000000000000000000000000010001000000000000000000000000000000000001000100000000000000000000000000000000000100010000000000000000000000000000000000010000010000000000000000000000000000000100000001000000000000000000000000000000010000000001000000000000000000000000000100000000000001010000000000000000000101000000000000000000010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
22222222222222222222
2........2.2.......2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
222222222222222.2222
..............2.2...
......222222222.2...
....22..........2...
...2.............2..
..2...............2.
..2...............2.
.2.................2
.2.................2
.2.................2
.2.................2
.2.................2
.2.................2
.2.................2
.2.................2
.2.................2
..2...............2.
..2...............2.
...2.............2..
....22.........22...
......222222222.....
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
`, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.