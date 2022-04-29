import React from "react";

const cache = new WeakMap();

export default function useApi (id) {

    const [data,setData] = React.useState(null);

    React.useEffect(
        ()=>{
            if(cache.has(id)) return  setData(cache.get(id));

            fetch(`http://localhost:3030/users/${id}`)
            .then(response => response.json())
            .then( data => {
                cache.set(id,data);
                return data;
            })
            .then( data => setData(data))
        },
        [id]
    );

    return data;

}