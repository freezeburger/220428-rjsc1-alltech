import { ActionTypes } from "../actions";
import { State } from "../state";


export const mainReducer = (state = State, action) => {

    switch (action.type) {
        case ActionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        case ActionTypes.MESSAGE_CREATION_SUCCESS:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case ActionTypes.MESSAGE_LIST_UPDATE_SUCCESS:
            return {
                ...state,
                messages: action.payload
            }
        case ActionTypes.MESSAGE_LIST_UPDATE_AUTO:
            return {
                ...state,
                messages: action.payload
            }
        default:
            return state;
    }

}
