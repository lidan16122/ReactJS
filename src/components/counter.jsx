import React, { Component } from "react";
class Counter extends Component {
    state = { 
        counter: 0,
     }
     
     setCounter = (value , counter) => {
        if (value == '-'){
            counter--;
            this.setState({counter});
        }
        else if (value == '+'){
            counter++;
            this.setState({counter});
        }
     }
     renderCounter = (counter) => {
        if (counter > 0) return
        else if (counter < 0) {
           return <p>Counter: {this.state.counter}</p>;
        }
     }
     renderBtn = (counter) => {
        return (
            <div>
                <button onClick={() => this.setCounter('+',counter)} className="btn btn-success"> + </button>
                <button onClick={() => this.setCounter('-',counter)} className="btn btn-danger"> - </button>
            </div>
        )
     }
    render() {
        let {counter} = this.state; 
        console.log(counter);
        return (
            <div>
                {this.renderCounter(counter)}
                {this.renderBtn(counter)}
            </div>
        );
    }
}
 
export default Counter;