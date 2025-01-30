import { createStore, combineReducers } from "redux";
import userReducer from "./user/userReducer.js";

const rootReducer = combineReducers({
  userReducer,
  // other reducers
});

const store = createStore(rootReducer);

export default store;
