import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./Users/userReducer";

const store = createStore(userReducer, applyMiddleware(thunk));

// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
