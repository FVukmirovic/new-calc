import React from "react";

export default class CalculationHistory extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(<div className = {this.props.classes}>
            {this.props.history}
        </div>);
    }
}