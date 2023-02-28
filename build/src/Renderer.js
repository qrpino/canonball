///<reference path="../references/references.ts" />
class Renderer {
    constructor() {
        this.setup();
    }
    ;
    static getInstance() {
        if (!Renderer.instance) {
            Renderer.instance = new Renderer();
        }
        return Renderer.instance;
    }
    ;
    setup() {
        createCanvas(windowWidth, windowHeight * 95 / 100, WEBGL);
        frameRate(60);
    }
    ;
    refresh() {
        clear();
        smooth();
        normalMaterial();
    }
    ;
}
//# sourceMappingURL=Renderer.js.map