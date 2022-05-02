

import { MessagesService } from '../../services/messages.service';
import {ActionTypes} from '../../store/actions';
import {action$} from '../middlewares/action-streamer.middleware';

const observer = ({action, dispatch}) => {
    
    if(action.type === ActionTypes.MESSAGE_LIST_UPDATE_REQUEST) {
        MessagesService.refresh().then( () => dispatch(
             {type: ActionTypes.MESSAGE_LIST_UPDATE_SUCCESS, payload:MessagesService.get() }
              ) ) ;
    }
}

action$.subscribe(observer);