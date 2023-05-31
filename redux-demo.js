const redux = require('redux')

// function to interact with the store; takes current and action value
// function will return a new updated object
function counterReducer(state = { counter: 0 }, action) {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    } else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    } else {
        return state
    }
}

// creating a data store
const store = redux.createStore(counterReducer)

// triggers when state updates; get the latest state
function counterSubscriber() {
    const latestState = store.getState()
    console.log(latestState)
}

// update the UI once state changes; points toward custom function
store.subscribe(counterSubscriber)

// type must match a function inside counterReducer to mutate the state
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })
store.dispatch({ type: 'increment' })