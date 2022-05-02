

import { MessagesService } from '../../services/messages.service';
import {ActionTypes} from '../../store/actions';
import {actions$} from '../middlewares/action-streamer.middleware';

const observer = ({action, dispatch}) => {

    if(!action || !action.type) return;

    console.log(action)

    if(action.type === ActionTypes.MESSAGE_LIST_UPDATE_REQUEST) {
        MessagesService.refresh().then( () => dispatch(
             {type: ActionTypes.MESSAGE_LIST_UPDATE_SUCCESS, payload:MessagesService.get() }
              ) ) ;
    }
}

actions$.subscribe(observer);