import React, { Component } from 'react';
import Card from './card';
import PageHeader from "./pageHeader";
import Counter from './counter';


class Home extends Component {
    state = { 
        image: {
            url: "https://picsum.photos/700/1200",
            alt: "Random image",
        },
        array: new Array(10),
        counter: 0
     }; 

     colorHeadLine = {
        color: "red",
        fontSize: "2rem",
     }
     cbClick() {
        alert("opaa, that worked");
     }

     setCounter = () => {
        let {counter} = this.state;
        counter++;
        this.setState({counter});
     }
    render() {
        const { url, alt } = this.state.image; 
        const array = [... this.state.array];
        if(!array.length) return <p>No Items in the Array</p>
        return(
            <div className='container'>
                <PageHeader />
                <Card />
                <p>Counter num = {this.state.counter}</p>
                <button onClick={this.setCounter} className="btn-primary"> + </button>
                {
                    array.map((item, index, array) => {
                        console.log(array);
                        return <div key={index}>{item}</div>;
                    })
                }
                <button onClick={this.cbClick} className="btn btn-primary"> Func In CC </button>
                <Counter />
            </div>
        ) 
    }
}
 
export default Home;