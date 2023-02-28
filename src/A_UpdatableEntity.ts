///<reference path="../references/references.ts" />
abstract class A_UpdatableEntity extends A_ColliderEntity {
    private static updatables: Array<A_UpdatableEntity>;
    protected velocity: p5.Vector;
    public constructor(position: p5.Vector, dimension: p5.Vector, azimuth?: number, inclinaison?: number, mass?: number) {
        super(position, dimension, azimuth, inclinaison, mass);
        this.velocity = new p5.Vector();
        A_UpdatableEntity.collection().push(this);
    };
    public update(extForces?: p5.Vector): void {
        this.position.x += this.velocity.x * dt();
        this.position.y += this.velocity.y * dt();
        this.position.z += this.velocity.z * dt();
        if(A_UpdatableEntity.collection().length > 30){
            A_UpdatableEntity.collection().pop();
        }
    }
    public static collection(): Array<A_UpdatableEntity> {
        if (!A_UpdatableEntity.updatables) {
            A_UpdatableEntity.updatables = [];
        }
        return A_UpdatableEntity.updatables;
    }
}