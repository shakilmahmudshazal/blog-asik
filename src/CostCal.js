import React, { Component } from 'react';
class CostCal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div >
                <h1>this is a cost cal = {this.props.myValue * 2}</h1>
            </div>
         );
    }
}
 
export default CostCal;