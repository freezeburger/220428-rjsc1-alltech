import React from "react";

import store from "../store";
import { ActionTypes } from "../store/actions";

export const useStore = () => {

    const [ localState, setLocalState] = React.useState( store.getState() );

    React.useEffect(() => {
      const unsubscribe = store.subscribe(() => setLocalState( store.getState() ))
      return () => unsubscribe();
    } , []);

    return [localState, store.dispatch, ActionTypes]
}