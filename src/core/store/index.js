
import { applyMiddleware, legacy_createStore } from "redux";
import { actionStreamer } from "./middlewares/action-streamer.middleware";
import { mainReducer } from "./reducers";


const store = legacy_createStore(mainReducer, applyMiddleware(actionStreamer));

export default store;