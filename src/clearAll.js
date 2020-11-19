import React from "react";

export default class ClearAll extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick = { () => {
                this.props.clickHandle();
            }}>
            C
            </button>
        )
    }
}