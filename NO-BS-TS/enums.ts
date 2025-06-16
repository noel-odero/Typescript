enum loadingState {
    beforeLoad = "beforeload",
    loading = "loading",
    loaded = "loaded",
}

const englishLoadingStates = {
    [loadingState.beforeLoad]: "Before Load"
}
const isLoading = (state: loadingState) => state === loadingState.loading;


console.log(isLoading(loadingState.beforeLoad));

// literal types
function rollDice(dice: 1 | 2 | 3): number {
    let pip = 0
    for(let i = 0; i< dice; i++){
        pip += Math.floor(Math.random() * 5) + 1
    }
    return pip
}

console.log(rollDice(2))


function sandEvent(name: 'addToCart', data: {productId: number;}): void
function sandEvent(name: 'checkout', data: {cartCount: number;}): void;
function sandEvent(name: string, data: unknown): void {
    console.log(`${name}: ${JSON.stringify(data)}`)
}

sandEvent('addToCart', {productId: 12334})
