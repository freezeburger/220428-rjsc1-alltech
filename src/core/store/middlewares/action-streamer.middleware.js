
import {BehaviorSubject} from 'rxjs';

export const actions$ = new BehaviorSubject({});

export const actionStreamer = store => next => action => {
    console.log('I am a process in the Middle of Redux Store');
   
    // Custom Observable Flow
    actions$.next({ action, dispatch:store.dispatch});
    
    // Redux Flow
    next(action);
}