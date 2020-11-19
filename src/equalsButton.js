import React from "react";

export default class EqualsButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button 
            className = {this.props.classes}
            onClick = { () => {
                this.props.clickHandle();
            }}
            >
            =</button>
        )
    }
}