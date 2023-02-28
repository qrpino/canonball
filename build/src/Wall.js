///<reference path="../references/references.ts" />
class Wall extends A_ColliderEntity {
    constructor(position, dimension, azimuth, inclination, mass) {
        super(position, dimension, azimuth, inclination, mass);
    }
    draw() {
        super.draw();
        box(this.dimension.x, this.dimension.y, this.dimension.z);
        pop();
    }
}
//# sourceMappingURL=Wall.js.map