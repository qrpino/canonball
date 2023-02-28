///<reference path="../references/references.ts" />
class Cannon extends A_Entity {
    private sliderPointers: Array<any>;
    /** @constructor position, dimension, and sliders references for azimuth, inclination & power */
    constructor(position: p5.Vector, dimension: p5.Vector, sliders: Array<any>) {
        super(position, dimension);
        this.sliderPointers = sliders;
    }
    public draw() {
        // Refresh azimuth & inclination values
        this.azimuth = this.sliderPointers[SliderType.Azimuth].value();
        this.inclination = this.sliderPointers[SliderType.Inclination].value();
        // We don't call super.draw() because we want to change the origin of the Cannon
        push();
        translate(this.position.x, this.position.y, this.position.z + this.dimension.z/2);
        rotateY(-this.azimuth);
        rotateX(-this.inclination);
        translate(0, 0, -this.dimension.z/2);
        box(this.dimension.x, this.dimension.y, this.dimension.z);
        pop();
    }
    private fire() {
        // We must create a new vector, if we pass this.position as a parameter, it will be passed as a reference and the cannon
        // Will take the same coordinates as the cannonball
        new CannonBall(createVector(this.position.x, this.position.y, this.position.z), this.dimension, this.azimuth, this.inclination, this.sliderPointers[SliderType.Power].value());
    }
    public keyPressed(): void{
        if(keyCode === KeyCode.SPACE){
            this.fire();
        }
    }
}