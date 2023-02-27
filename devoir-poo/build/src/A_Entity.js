///<reference path="../references/references.ts" />
class A_Entity {
    constructor(position, dimension, azimuth, inclination) {
        this.position = position;
        this.dimension = dimension;
        this.azimuth = azimuth ? azimuth : 0;
        this.inclination = inclination ? inclination : 0,
            A_Entity.collection().push(this);
    }
    draw() {
        push();
        translate(this.position);
        rotateY(this.azimuth);
        // We negate inclination, because positive values goes up to down, and we want to go down to up
        rotateX(-this.inclination);
    }
    ;
    static collection() {
        if (!A_Entity.entities) {
            A_Entity.entities = [];
        }
        return A_Entity.entities;
    }
    getPosition() {
        return this.position;
    }
    getDimension() {
        return this.dimension;
    }
    setAzimuth(value) {
        this.azimuth = value;
    }
    setInclination(value) {
        this.inclination = value;
    }
    getAzimuth() {
        return this.azimuth;
    }
    getInclination() {
        return this.inclination;
    }
}
//# sourceMappingURL=A_Entity.js.map