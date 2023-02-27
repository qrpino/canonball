///<reference path="../references/references.ts" />
class Game {
    constructor() {
        this.setup();
    }
    ;
    static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
    ;
    setup() {
        Renderer.getInstance();
        angleMode(DEGREES);
        this.ui = Ui.getInstance();
        this.renderer = Renderer.getInstance();
        this.world = World.getInstance();
        this.camera = new Camera(createVector(0, 100, 0));
    }
    ;
    update() {
        this.camera.update();
        this.world.update();
    }
    ;
    draw() {
        this.renderer.refresh();
        this.world.draw();
    }
    ;
    keyPressed() {
        this.world.keyPressed();
    }
}
//# sourceMappingURL=Game.js.map