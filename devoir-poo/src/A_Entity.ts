///<reference path="../references/references.ts" />
abstract class A_Entity {
    private static entities: Array<A_Entity>;

    protected position: p5.Vector;
    protected dimension: p5.Vector;
    protected azimuth: number;
    protected inclination: number;
    public constructor(position: p5.Vector, dimension: p5.Vector, azimuth?: number, inclination?: number) {
        this.position = position;
        this.dimension = dimension;
        this.azimuth = azimuth ? azimuth : 0;
        this.inclination = inclination ? inclination : 0,
        A_Entity.collection().push(this);
    }
    public draw(): void {
        push();
        translate(this.position);
        rotateY(this.azimuth);
        // We negate inclination, because positive values goes up to down, and we want to go down to up
        rotateX(-this.inclination);
    };
    public static collection() {
        if (!A_Entity.entities) {
            A_Entity.entities = [];
        }
        return A_Entity.entities;
    }
    public getPosition(): p5.Vector{
        return this.position;
    }
    public getDimension(): p5.Vector{
        return this.dimension;
    }
    public setAzimuth(value: number): void {
        this.azimuth = value;
    }
    public setInclination(value: number): void {
        this.inclination = value;
    }
    public getAzimuth(): number {
        return this.azimuth;
    }
    public getInclination(): number {
        return this.inclination;
    }
}