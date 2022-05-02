const ENDPOINT = process.env.REACT_APP_ENDPOINT;


const defaultOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'AUTH_TOKEN': 'VERY_PRIVATE_TOKEN_OBTAINED_AT_START'
    },
    body:null
}

const Stringifier = {
    set(target, key, value) {  
        debugger; 
        if( key === 'body') value = value ? JSON.stringify(value): '';
        target[key] = value;
        return true;
    }
}

const request = (path, options = {}) => {
    const requestOptions = Object.assign( (new Proxy({},Stringifier)), defaultOptions, options);

    return fetch(`${ENDPOINT}/${path}`, requestOptions).then(res =>res.json())
}

export  const ApiClient = Object.freeze({

    read( path ) {
        return request( path, {method:'GET'} );
    },
    create(path, payload){
        return request( path, {method:'POST', body:payload} );
    },
    update(path,id, payload){
        return request(  `${path}/${id}`, {method:'PUT', body:payload} )
    },
    delete(path,id){
        return request( `${path}/${id}` , { method:'DELETE' });
    }

})

