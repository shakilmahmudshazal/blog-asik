import React, {Component} from 'react';
import "./App.css";
import CostCalculator from './CostCal';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cost:"this is a cost",
            costValue:2.15
        }
    }
     
      changeCost=()=>{
        this.setState({cost:"cost is new", costValue:3.14});
        console.log("function running ",this.state.cost)
     }
    render() {
        return (
            <div className="appPage">
                <h1 className="headline">{this.state.cost} value= {this.state.costValue}</h1>
                <button onClick={this.changeCost}>change</button>
                <CostCalculator myValue={this.state.costValue}/>
            </div>
        );
    }
}

export default App;
