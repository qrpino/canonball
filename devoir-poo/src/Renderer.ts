///<reference path="../references/references.ts" />
class Renderer {
    private static instance: Renderer;
    private constructor() {
        this.setup();
    };
    public static getInstance(): Renderer {
        if (!Renderer.instance) {
            Renderer.instance = new Renderer();
        }
        return Renderer.instance;
    };
    private setup(): void {
        createCanvas(windowWidth, windowHeight*95/100, WEBGL);
        frameRate(60);
    };
    public refresh(): void {
        clear();
        smooth();
        normalMaterial();
    };
}