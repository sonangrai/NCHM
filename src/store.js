import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevtools } from "redux-devtools-extension";

const initialState = [];
const middleware = [thunk];

const store = createStore(
  initialState,
  composeWithDevtools(applyMiddleware(middleware))
);

export default store;
