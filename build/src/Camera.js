class Camera {
    //-------------------------
    constructor(position) {
        this.position = position ? position : new p5.Vector();
        this.azimuth = 0;
        this.inclination = 0;
        this.velocity = 100;
    }
    update() {
        //#region Translation
        if (keyIsDown(KeyCode.Z)) {
            this.position.x += this.velocity * dt() * cos(this.azimuth) * sin(this.inclination);
            this.position.y += this.velocity * dt() * sin(this.azimuth) * sin(this.inclination);
            this.position.z += this.velocity * dt() * cos(this.inclination);
        }
        else if (keyIsDown(KeyCode.Q)) {
            this.position.z += this.velocity * dt() * cos(this.azimuth) * sin(this.inclination);
            this.position.x += this.velocity * dt() * cos(this.inclination);
        }
        else if (keyIsDown(KeyCode.S)) {
            this.position.x -= this.velocity * dt() * cos(this.azimuth) * sin(this.inclination);
            this.position.y -= this.velocity * dt() * sin(this.azimuth) * sin(this.inclination);
            this.position.z -= this.velocity * dt() * cos(this.inclination);
        }
        else if (keyIsDown(KeyCode.D)) {
            this.position.z -= this.velocity * dt() * cos(this.azimuth) * sin(this.inclination);
            this.position.x -= this.velocity * dt() * cos(this.inclination);
        }
        //#endregion
        translate(this.position);
        rotateY(this.azimuth);
        // We negate inclination, because positive values goes up to down, and we want to go down to up
        rotateX(-this.inclination);
    }
}
//# sourceMappingURL=Camera.js.map