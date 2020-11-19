import React from "react";

export default class DeleteButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick = { () => {
                this.props.clickHandle();
            }}
            >
            del</button>
        )
    }
}