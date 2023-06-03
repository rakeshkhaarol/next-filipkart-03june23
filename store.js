import { legacy_createStore } from 'redux';

// Define your initial state
const initialState = {
  // your initial state here
};

// Define your reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    // handle different action types here
    default:
      return state;
  }
}

// Create the store
const store = legacy_createStore(reducer);

export default store;