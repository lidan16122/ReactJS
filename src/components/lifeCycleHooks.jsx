import { Component } from "react";
class LifeCycleHooks extends Component {
    state = { 
        data: 'data from state',
     } 

     componentDidMount() {

        const interval = setInterval(() => {
           console.log(`interval random ${Math.random()}`);
        }, 1000);
        this.setState({interval});

        console.log('in componentDidMount');
        setTimeout(() => {
            let { data } = this.state;
            console.log(data);
            this.setState({ data })
        }, 3000);
     }
    
     componentWillUnmount(){
        console.log('in componentWillUnmount');
        clearInterval(this.state.interval)
     }
     componentDidUpdate(){
        
        console.log("in componentDidUpdate");
     }

    render() { 
        console.log('in render');
        return (
            <button className="btn btn-success" onClick={() => this.setState({data:"data changes"})}>Click Me!</button>
        );
    }
}
 
export default LifeCycleHooks;