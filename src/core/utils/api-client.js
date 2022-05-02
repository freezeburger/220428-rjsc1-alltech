const ENDPOINT = process.env.REACT_APP_ENDPOINT;

const request = (path, options = {}) => {
    return fetch(`${ENDPOINT}/${path}`, options).then(res =>res.json())
}

export  const ApiCLient = Object.freeze({

    read( path ) {
        return request( path );
    },
    create(path, payload){
        return request( path, {body:payload} );
    },
    update(path,id, payload){
        return request(  `${path}/${id}`, {body:payload} )
    },
    delete(path,id){
        return request( `${path}/${id}` );
    }

})

