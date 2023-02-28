///<reference path="../references/references.ts" />
class A_ColliderEntity extends A_Entity {
    constructor(position, dimension, azimuth, inclinaison, mass) {
        super(position, dimension, azimuth, inclinaison);
        this.mass = mass ? mass : 1;
        A_ColliderEntity.collection().push(this);
    }
    ;
    static collection() {
        if (!A_ColliderEntity.colliders) {
            A_ColliderEntity.colliders = [];
        }
        return A_ColliderEntity.colliders;
    }
}
//# sourceMappingURL=A_ColliderEntity.js.map