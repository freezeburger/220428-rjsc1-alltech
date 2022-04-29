/*
useReducer délivre une gestion d'état de rendu normalisée.
*/

import React from "react";

const PossibleActions = Object.freeze(
    {
        ACTION_A:'ACTIO_A',
        ACTION_B:'ACTIO_B'
    }
)

//Normalisation des interaction avec le state
function reducer(state, action) {
    switch (action.type) {

      case PossibleActions.ACTION_A:
        return {count: state.count + 1};

      case PossibleActions.ACTION_B:
        return {count: state.count - 1};

      default:
            return state;
    }
  }

  // Etat de départ normalisé
const initialState = {count: 0};

export function ComponentWithReducer(){

    const [state , dispatch] = React.useReducer(reducer,initialState);

    return (
        <>
        {state.count}
        <button onClick={()=>dispatch({type:PossibleActions.ACTION_A})}>+</button>
        <button onClick={()=>dispatch({type:PossibleActions.ACTION_B})}>-</button>
        </>
    )

}