import React, { Component, useState} from 'react';
class Btn extends Component {
    constructor(props){
        super(props);

    }
    state = {count:0}
    handleClick=()=>{

this.setState({count:this.state.count+1})


    } 
    render() { 
            return (
                <button onClick={this.handleClick}>{ this.state.count+''+this.props.label}</button>
                
            );
        
    }
}
 
export default Btn;