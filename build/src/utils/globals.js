///<reference path="../../references/references.ts" />
/**
 * Returns time elapsed between both previous and actual frame
 */
function dt() {
    return (millis() / frameCount) / 1000;
}
/**
 * @param val1
 * @param val2
 */
function difference(val1, val2) {
    return val2 - val1;
}
//function collisionTest(colliders1: A_collidersEntity, colliders2: A_collidersEntity) {
// collideTest ? return true : return false;
//}
function singleton(model) {
}
var SliderType;
(function (SliderType) {
    SliderType[SliderType["Azimuth"] = 0] = "Azimuth";
    SliderType[SliderType["Inclination"] = 1] = "Inclination";
    SliderType[SliderType["Power"] = 2] = "Power";
})(SliderType || (SliderType = {}));
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["Z"] = 90] = "Z";
    KeyCode[KeyCode["Q"] = 81] = "Q";
    KeyCode[KeyCode["S"] = 83] = "S";
    KeyCode[KeyCode["D"] = 68] = "D";
    KeyCode[KeyCode["SPACE"] = 32] = "SPACE";
    KeyCode[KeyCode["UP"] = 38] = "UP";
    KeyCode[KeyCode["LEFT"] = 37] = "LEFT";
    KeyCode[KeyCode["DOWN"] = 40] = "DOWN";
    KeyCode[KeyCode["RIGHT"] = 39] = "RIGHT";
    KeyCode[KeyCode["CTRL"] = 17] = "CTRL";
    KeyCode[KeyCode["SHIFT"] = 16] = "SHIFT";
})(KeyCode || (KeyCode = {}));
var Axis;
(function (Axis) {
    Axis[Axis["X"] = 0] = "X";
    Axis[Axis["Y"] = 1] = "Y";
    Axis[Axis["Z"] = 2] = "Z";
})(Axis || (Axis = {}));
function getVolumeDimension(volume) {
    let volumeDimension = {
        minX: volume.getPosition().x - volume.getDimension().x / 2,
        maxX: volume.getPosition().x + volume.getDimension().x / 2,
        minY: volume.getPosition().y - volume.getDimension().y / 2,
        maxY: volume.getPosition().y + volume.getDimension().y / 2,
        minZ: volume.getPosition().z - volume.getDimension().z / 2,
        maxZ: volume.getDimension().z + volume.getDimension().z / 2
    };
    return volumeDimension;
}
/** Si vous passez plus de 5 minutes sur un problème, passez à autre chose.
 * Après une demi journée d'essais, j'ai décidé de passer à autre chose et de rendre mon code 🤡
 */
function colliderManager() {
    for (let updatable of A_UpdatableEntity.collection()) {
        for (let collider of A_ColliderEntity.collection()) {
            if (updatable instanceof (CannonBall) && collider instanceof (Wall)) {
                if (updatable.getPosition().x + updatable.getDimension().x / 2 > collider.getPosition().x - collider.getDimension().x / 2 &&
                    updatable.getPosition().x - updatable.getDimension().x / 2 < collider.getPosition().x + collider.getDimension().x / 2 &&
                    updatable.getPosition().y + updatable.getDimension().x / 2 > collider.getPosition().y - collider.getDimension().y / 2 &&
                    updatable.getPosition().y - updatable.getDimension().x / 2 < collider.getPosition().y + collider.getDimension().y / 2 &&
                    updatable.getPosition().z + updatable.getDimension().x / 2 > collider.getPosition().z - collider.getDimension().z / 2 &&
                    updatable.getPosition().z - updatable.getDimension().x / 2 < collider.getPosition().z + collider.getDimension().z / 2) {
                    updatable.reverseVelocity();
                    // We touched right side or left side and nothing else
                    /*  if ((updatable.getPosition().x - updatable.getDimension().x / 2 < collider.getPosition().x + collider.getDimension().x / 2 ||
                      updatable.getPosition().x + updatable.getDimension().x / 2 > collider.getPosition().x - collider.getDimension().x / 2)
                      && !(updatable.getPosition().y - updatable.getDimension().x / 2 < collider.getPosition().y + collider.getDimension().y / 2 ||
                      updatable.getPosition().y + updatable.getDimension().x / 2 > collider.getPosition().y - collider.getDimension().y / 2)
                      && !(updatable.getPosition().z - updatable.getDimension().x / 2 < collider.getPosition().z + collider.getDimension().z / 2 ||
                      updatable.getPosition().z + updatable.getDimension().x / 2 > collider.getPosition().z - collider.getDimension().z / 2)) {
                          console.log('X Axis touched');
                          //updatable.reverseVelocity(Axis.X);
                      }
                      // We touched top side or bottom side and nothing else
                      if ((updatable.getPosition().y - updatable.getDimension().x / 2 < collider.getPosition().y + collider.getDimension().y / 2 ||
                      updatable.getPosition().y + updatable.getDimension().x / 2 > collider.getPosition().y - collider.getDimension().y / 2)
                      && ! (updatable.getPosition().x - updatable.getDimension().x / 2 < collider.getPosition().x + collider.getDimension().x / 2 ||
                      updatable.getPosition().x + updatable.getDimension().x / 2 > collider.getPosition().x - collider.getDimension().x / 2)
                      && ! (updatable.getPosition().z - updatable.getDimension().x / 2 < collider.getPosition().z + collider.getDimension().z / 2 ||
                      updatable.getPosition().z + updatable.getDimension().x / 2 > collider.getPosition().z - collider.getDimension().z / 2)) {
                          console.log('Y Axis touched');
                       //   updatable.reverseVelocity(Axis.Y);
                      }
                      // We touched front side or rear side and nothing else
                      if ((updatable.getPosition().z - updatable.getDimension().x / 2 < collider.getPosition().z + collider.getDimension().z / 2 ||
                      updatable.getPosition().z + updatable.getDimension().x / 2 > collider.getPosition().z - collider.getDimension().z / 2)
                      && !(updatable.getPosition().x - updatable.getDimension().x / 2 < collider.getPosition().x + collider.getDimension().x / 2 ||
                      updatable.getPosition().x + updatable.getDimension().x / 2 > collider.getPosition().x - collider.getDimension().x / 2)
                      && !(updatable.getPosition().y - updatable.getDimension().x / 2 < collider.getPosition().y + collider.getDimension().y / 2 ||
                      updatable.getPosition().y + updatable.getDimension().x / 2 > collider.getPosition().y - collider.getDimension().y / 2)) {
                          console.log('Z Axis touched');
                          //updatable.reverseVelocity(Axis.Z);
                      } */
                    // I attempted something there... 🤡
                    // Bounce with top of the box
                    /*  if(updatable.getPosition().y < collider.getPosition().y + collider.getDimension().y/2){
                          updatable.reverseVelocity(Axis.Y);
                      }
                      if(updatable.getPosition().z < collider.getPosition().z + collider.getDimension().z/2 && !(updatable.getPosition().y < collider.getPosition().y + collider.getDimension().y/2)){
                          updatable.reverseVelocity(Axis.Z);
                      }*/
                }
            }
            // At least, collision between CannonBalls works..
            else if (updatable instanceof (CannonBall) && collider instanceof (CannonBall)) {
                if (updatable.guid != collider.guid) {
                    let distance = Math.sqrt((updatable.getPosition().x - collider.getPosition().x) * (updatable.getPosition().x - collider.getPosition().x) +
                        (updatable.getPosition().y - collider.getPosition().y) * (updatable.getPosition().y - collider.getPosition().y) +
                        (updatable.getPosition().z - collider.getPosition().z) * (updatable.getPosition().z - collider.getPosition().z));
                    /** If distance < 2x radius */
                    if (distance < updatable.getDimension().x) {
                        updatable.reverseVelocity();
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=globals.js.map