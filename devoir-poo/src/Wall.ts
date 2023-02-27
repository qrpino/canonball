///<reference path="../references/references.ts" />
class Wall extends A_ColliderEntity {
    public constructor(position: p5.Vector, dimension: p5.Vector, azimuth?: number, inclination?: number, mass?: number) {
        super(position, dimension, azimuth, inclination, mass);
    }
    public draw() {
        super.draw();
        box(this.dimension.x, this.dimension.y, this.dimension.z);
        pop();
    }
}