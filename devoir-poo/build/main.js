///<reference path="../references/references.ts" />
/** @type Game */
let game;

function setup() {
    game = Game.getInstance();
}

function draw(){
    game.update();
    game.draw();
}

function mouseMoved(){
}

function keyPressed(){
    game.keyPressed();
}

// Notes : J'ai fait un peu n'importe quoi à inverser des valeurs de rotation, d'angle etc pour avoir un résultat visuel qui paraisse normal
// Je suis toujours autant perdu en 3D et j'ai du y aller à tatons, car même avec une formule définie, il suffit que mes repères ne soient
// Pas les mêmes pour que tout soit chamboulé. 