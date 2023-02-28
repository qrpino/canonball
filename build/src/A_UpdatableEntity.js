///<reference path="../references/references.ts" />
class A_UpdatableEntity extends A_ColliderEntity {
    constructor(position, dimension, azimuth, inclinaison, mass) {
        super(position, dimension, azimuth, inclinaison, mass);
        this.velocity = new p5.Vector();
        A_UpdatableEntity.collection().push(this);
    }
    ;
    update(extForces) {
        this.position.x += this.velocity.x * dt();
        this.position.y += this.velocity.y * dt();
        this.position.z += this.velocity.z * dt();
        if (A_UpdatableEntity.collection().length > 30) {
            A_UpdatableEntity.collection().pop();
        }
    }
    static collection() {
        if (!A_UpdatableEntity.updatables) {
            A_UpdatableEntity.updatables = [];
        }
        return A_UpdatableEntity.updatables;
    }
}
//# sourceMappingURL=A_UpdatableEntity.js.map