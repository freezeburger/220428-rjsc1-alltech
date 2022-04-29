
import { legacy_createStore } from "redux";
import { mainReducer } from "./reducers";


const store = legacy_createStore(mainReducer);

export default store;