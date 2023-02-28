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
function collisionTest(collider1, collider2) {
    // collideTest ? return true : return false;
}
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
})(KeyCode || (KeyCode = {}));
//# sourceMappingURL=globalFunctions.js.map