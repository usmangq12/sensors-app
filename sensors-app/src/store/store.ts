import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middelWare = [thunk];
const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(...middelWare))
);

export default store;