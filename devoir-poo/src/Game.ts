///<reference path="../references/references.ts" />
class Game {
    private static instance: Game;
    private renderer: Renderer;
    private ui: Ui;
    private world: World;
    private camera: Camera;
    private constructor() {
        this.setup();
    };
    public static getInstance(): Game {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    private setup(): void {
        Renderer.getInstance();
        angleMode(DEGREES);
        this.ui = Ui.getInstance();
        this.renderer = Renderer.getInstance();
        this.world = World.getInstance();
        this.camera = new Camera(createVector(0, 100, 0));
    };
    public update(): void {
        this.camera.update();
        this.world.update();
    };
    public draw(): void {
        this.renderer.refresh();
        this.world.draw();
    };
    public keyPressed(): void{
        this.world.keyPressed();
    }
}