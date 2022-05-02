

export const actionStreamer = store => next => action => {
    console.log('I Am a process in the Middle of Redux Store');
    next(action);
}