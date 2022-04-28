import React from "react";


export default function FunctionalFecth ( {id}){

    const [user,setUser] = React.useState(null);

    React.useEffect(
        ()=>{
            fetch(`http://localhost:3030/users/${id}`)
            .then(response => response.json())
            .then(user => setUser(user))
        },
        [id]
    );

    React.useEffect(
        ()=>{
            const signal = evt =>  (evt.keyCode === 32) && alert(user?.name);
            window.addEventListener('keydown', signal);
            return ()=>{
               window.removeEventListener('keydown', signal);
            }
        },
        []
    );


    return(
        <>
            {user ? <h1>{user.name}</h1> : <h1>Loading...</h1>}
        </>
    )

}