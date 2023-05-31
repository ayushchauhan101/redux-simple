const redux = require('redux')

// function to interact with the store; takes current and action value
// function will return a new updated object
function counterReducer(state = { counter: 32 }, action) {
    return {
        counter: state.counter + 10
    }
}

// creating a data store
const store = redux.createStore(counterReducer)

// print current store
console.log(store.getState())

// triggers when state updates; get the latest state
function counterSubscriber() {
    const latestState = store.getState()
    console.log(latestState)
}

// update the UI once state changes; points toward custom function
store.subscribe(counterSubscriber)