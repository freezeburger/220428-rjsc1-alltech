import React from "react"


export function useGlobalEvent( eventName, callback){

    React.useEffect(
        () => {
            window.addEventListener( eventName, callback )
            return () => window.removeEventListener( eventName, callback )
        }, [callback]
    );

}