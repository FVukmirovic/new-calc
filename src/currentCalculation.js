import React from "react";

export default class CurrentCalculation extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const arrayOfCharacters = this.props.current;

        return(<div className = {this.props.classes}>
                {
                    arrayOfCharacters && Object.values(arrayOfCharacters).length ?  
                    Object.values(arrayOfCharacters).map((char) => {
                        return char;
                    }) : ''
                }
        </div>);
    }
}