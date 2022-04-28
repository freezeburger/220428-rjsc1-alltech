import { useEffect, useState } from "react";


export default function FunctionalComponentWithMechanics() {

    const [title, setTitle] = useState('ALLTECH FUNCTIONAL WITH MECHNANICS');

    useEffect(
        function componentDidMount() {
            console.log('componentDidMount');
            /* 
                Méthode appelée lorsque le composant est monté dnas le DOM
            */
           return function componentWillUnmount() {
                console.log('componentWillUnmount');
                /* 
                    Méthode appelée lorsque le composant est démonté du DOM
                */
            }
        },
        [] /* Condition de redéclenchement */ 
   )

    return (
        <h1 onDoubleClick={ () => setTitle( title + '!!') }>{title}</h1>
    );
}