///<reference path="../references/references.ts" />
class World {
    private static instance: World;
    private forces: p5.Vector;
    private cannon: Cannon;
    private constructor() {
        this.forces = createVector(0, 9.81, 0);
        this.setup();
        this.cannon = new Cannon(createVector(0, -10, 500 - 40), createVector(20, 20, 80), Ui.getInstance().getSliders());
    };
    public static getInstance(): World {
        if (!World.instance) {
            World.instance = new World();
        }
        return World.instance;
    };

    private setup(): void {
        // Ground
        new Wall(createVector(), createVector(1000, 10, 1000));
        // Front wall
        new Wall(createVector(0, -100 + 50, -499), createVector(1000, 100, 10));
        // Right wall
        new Wall(createVector(500, -100 + 50, 0), createVector(10, 100, 1000));
        // Left wall
        new Wall(createVector(-500, -100 + 50, 0), createVector(10, 100, 1000));
    };
    public update(): void {
       colliderManager();
        for (let updatable of A_UpdatableEntity.collection()) {
            updatable.update(this.forces);
        }
    }
    public draw(): void {
        for (let entity of A_Entity.collection()) {
            entity.draw();
        }
    };
    public keyPressed(): void{
        this.cannon.keyPressed();
    }
}

