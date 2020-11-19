import React from 'react';

export default class DigitButton extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button 

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