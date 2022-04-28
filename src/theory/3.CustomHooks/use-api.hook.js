import React from "react";


export default function useApi (id) {

    const [data,setData] = React.useState(null);

    React.useEffect(
        ()=>{
            fetch(`http://localhost:3030/users/${id}`)
            .then(response => response.json())
            .then( data => setData(data))
        },
        [id]
    );

    return data;

}