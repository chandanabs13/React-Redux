const redux = require("redux");
const createStore = redux.createStore;
// creating our first action in redux

// const BUY_CAKE="BUY_CAKE"
// {
//     type:BUY_CAKE,
//     intro:"this is the first redux action"
// }

// action creator : function that return the action
const BUY_CAKE = "BUY_CAKE";
function buyCake() {
  return {
    type: BUY_CAKE,
    intro: "this is the first redux action",
  };
}

// reducers : (prevState,action)=>newState

// first we need to have one initial state and according to 1st principle the state should have only one object

const initialState = {
  noOfCake: 10,
};
// now write reducers (state=initialState,action)=>newState

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);
console.log("Initial State : ", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated State : ", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
