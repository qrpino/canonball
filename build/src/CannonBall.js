///<reference path="../references/references.ts" />
class CannonBall extends A_UpdatableEntity {
    constructor(position, dimension, azimuth, inclination, power, mass) {
        super(position, dimension, azimuth - 90, inclination + 90, mass);
        // We adapt the position to match the cannon's relative position
        this.position.x += dimension.z * cos(this.azimuth) * sin(this.inclination);
        this.position.y += dimension.z * cos(this.inclination);
        this.position.z += dimension.z * sin(this.azimuth) * sin(this.inclination) + dimension.z / 2;
        this.velocity.x = power * cos(this.azimuth) * sin(this.inclination);
        this.velocity.y = power * cos(this.inclination);
        this.velocity.z = power * sin(this.azimuth) * sin(this.inclination);
        this.elapsedTime = 0;
        if (!CannonBall.guid) {
            CannonBall.guid = 0;
        }
        this.guid = CannonBall.guid;
        CannonBall.guid += 1;
    }
    ;
    update(extForces) {
        this.elapsedTime += dt();
        this.velocity.x += this.elapsedTime * extForces.x / this.mass * 0.99;
        this.velocity.y += this.elapsedTime * extForces.y / this.mass;
        this.velocity.z += this.elapsedTime * extForces.z / this.mass * 0.99;
        super.update();
    }
    draw() {
        super.draw();
        sphere(this.dimension.x / 2);
        pop();
    }
    ;
    reverseVelocity(axis) {
        switch (axis) {
            case Axis.X: {
                this.velocity.x *= -1;
                break;
            }
            case Axis.Y: {
                this.velocity.y *= -1;
                break;
            }
            case Axis.Z: {
                this.velocity.z *= -1;
                break;
            }
            default: {
                this.velocity.x *= -1;
                this.velocity.y *= -1;
                this.velocity.z *= -1;
                break;
            }
        }
    }
}
//# sourceMappingURL=CannonBall.js.map