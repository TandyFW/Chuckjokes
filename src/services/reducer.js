import { createStore } from "redux";

const INITIAL_STATE = {
  jokes: [],
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_JOKE':
      return { ...state, jokes: [...state.jokes, action.payload] };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;