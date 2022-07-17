class Counter extends Component {
    state = { 
        counter: 0,
     } 

    setCounter = (value , counter) => {
        let {counter} = this.state;
        value = counter;
        if (value > 0){
            counter++
            this.state({counter})
        }
        else if (value < 0){
            counter--
            this.state({counter})
        }
        renderCounter = () => {
            if(this.state.counter < 0){
                return <p>counter: {this.state.counter}</p>
            }
            else if(this.state.counter > 0){
                return
            }
        }
        renderBtn = (counter) => {
            <div>
                <button onClick={() => this.setCounter(counter++)} style="color: green"> + </button>
                <button onClick={() => this.setCounter(counter--)} style="color: red"> - </button>
            </div>
        }
    }
    render() { 
        return (
            <div>
                
            </div>
        );
    }
}
 
export default Counter;