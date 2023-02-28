///<reference path="../references/references.ts" />
abstract class A_ColliderEntity extends A_Entity {
    private static colliders: Array<A_ColliderEntity>;
    protected mass: number;
    public constructor(position: p5.Vector, dimension: p5.Vector, azimuth?: number, inclinaison?: number, mass?: number) {
        super(position, dimension, azimuth, inclinaison);
        this.mass = mass ? mass : 1;
        A_ColliderEntity.collection().push(this);
    };
    public static collection(): Array<A_ColliderEntity> {
        if (!A_ColliderEntity.colliders) {
            A_ColliderEntity.colliders = [];
        }
        return A_ColliderEntity.colliders;
    }
}