import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./modules";

const initialState = {};

const middleware = [thunk, logger];

//rootReducer, state, enhancer(logger etc)
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

console.log(store.getState());
export default store;
