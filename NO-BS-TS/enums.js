"use strict";
var loadingState;
(function (loadingState) {
    loadingState["beforeLoad"] = "beforeload";
    loadingState["loading"] = "loading";
    loadingState["loaded"] = "loaded";
})(loadingState || (loadingState = {}));
const englishLoadingStates = {
    [loadingState.beforeLoad]: "Before Load"
};
const isLoading = (state) => state === loadingState.loading;
console.log(isLoading(loadingState.beforeLoad));
// literal types
function rollDice(dice) {
    let pip = 0;
    for (let i = 0; i < dice; i++) {
        pip += Math.floor(Math.random() * 5) + 1;
    }
    return pip;
}
console.log(rollDice(2));
function sandEvent(name, data) {
    console.log(`${name}: ${JSON.stringify(data)}`);
}
sandEvent('addToCart', { productId: 12334 });
