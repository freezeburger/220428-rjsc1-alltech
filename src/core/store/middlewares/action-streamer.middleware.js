

export const actionStreamer = store => next => action => {
    console.log('I am a process in the Middle of Redux Store');
   
    next(action);
}