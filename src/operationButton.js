import React from "react";

export default class OperationButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button className = {this.props.classes}

                onClick = { () => {
                if (!this.props.clickHandle) return;
                this.props.clickHandle();
            }}
            >
            {this.props.content}
            </button>
        )
    }
}