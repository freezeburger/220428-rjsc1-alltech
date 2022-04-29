import React from "react";


export class ClassRef extends React.Component {

    divRef = React.createRef();

    constructor(){
        super()
    }

    componentDidMount(){
        setInterval( () => this.bigger(), 1000);
    }

    size = 1;
    bigger(){
        this.divRef.current.style.borderWidth = `${this.size++}px`;
    }

    render( ) {
        return (
            <div style={ {border:'1px solid red'}} ref={this.divRef}>
                REF
            </div>
        );
    }

   
}


let size = 1;

export function FunctionalRef(){

    const divRef = React.useRef();

    React.useEffect( () => {
        const timerId = setInterval( () => divRef.current.style.borderWidth = `${size++}px`, 1000);
        return()=>clearInterval(timerId);
    },[]);
    
    return (
        <div style={ {border:'1px solid red'}} ref={divRef}>
            FUNCTIONNAL REF
        </div>
    );
}