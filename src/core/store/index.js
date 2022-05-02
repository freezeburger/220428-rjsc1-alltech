
import { applyMiddleware, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { actionStreamer } from "./middlewares/action-streamer.middleware";
import { mainReducer } from "./reducers";


import './mediators/messages.mediator';

const store = legacy_createStore(mainReducer,
    composeWithDevTools(
        applyMiddleware(actionStreamer)
    )
);

export default store;