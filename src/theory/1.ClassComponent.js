import React from "react";


export default class ClassComponent extends React.Component {
    /* 
        Par extension de React.Component, 
        La class bénéfécie des mécanises de React

        Mécanisme de rendu: Component State

        Cycle de vie: Etapes de création et de rendu.

        Props: Les propriétés passées au composant.
    */

    //Mécanisme de rendu: Component State
    state = {}

    title = 'ALLTECH CLASS';

   constructor(){
       console.log('constructor');
       super();
   }

    render(){
        console.log('render');
        return (
                <h1 onClick={ () => this.title+='!' }  onDoubleClick={ ()=>this.setState({})} >{this.title}</h1>
        );
    }

    componentDidMount(){
        console.log('componentDidMount');
        /* 
            Méthode appelée lorsque le composant est monté dnas le DOM
        */
    }

    componentWillUnmount(){
        /* 
            Méthode appelée lorsque le composant est démonté du DOM
        */
    }

}