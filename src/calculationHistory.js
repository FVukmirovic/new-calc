import React from "react";

export default class CalculationHistory extends React.Component {
    constructor(props){
        super(props);
        // kako komponente koje smo proslijedili komponenti vezujemo za komponentu
    }

    render(){
        return(<div className = {this.props.classes}>
            {this.props.history}
        </div>);
    }
}