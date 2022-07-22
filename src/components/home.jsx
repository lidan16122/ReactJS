import React, { Component } from 'react';
import Card from './card';
import PageHeader from "./pageHeader";
import Counter from './counter';
import CounterSFC from './counterSFC'


class Home extends Component {
    state = { 
        image: {
            url: "https://picsum.photos/700/1200",
            alt: "Random image",
        },
        array: new Array(10),
        counter: 0,
        cards: [
            {
                img: { 
                     title: 'first card',
                     url: "https://cdn.pixabay.com/photo/2022/01/25/16/01/sky-6966721_960_720.jpg",
                     alt: "sky pic",
             },
             description: 'this is the first card',
             phone: '050-1234567',
             address: 'la la land',
             number: '1000000',
             id: 0,
            },
            {
                img: { 
                     title: 'second card',
                     url: "https://cdn.pixabay.com/photo/2022/01/25/16/01/sky-6966721_960_720.jpg",
                     alt: "sky pic",
             },
             description: 'this is the second card',
             phone: '050-1234567',
             address: 'la la land',
             number: '1000000',
             id: 1,
            },
            {
                img: { 
                     title: 'third card',
                     url: "https://cdn.pixabay.com/photo/2022/01/25/16/01/sky-6966721_960_720.jpg",
                     alt: "sky pic",
             },
             description: 'this is the third card',
             phone: '050-1234567',
             address: 'la la land',
             number: '1000000',
             id: 2,
            },
        ]
        
     }; 

     colorHeadLine = {
        color: "red",
        fontSize: "2rem",
     }
     cbClick() {
        alert("opaa, that worked");
     }

     setCounter = (value, counter) => {
        if(value == '+') counter++;
        if(value == '-') counter--;
        this.setState({counter});
     }


     handleDelete = (filter) => {
        let cards  = [...this.state.cards];
        console.log(cards);
        for (let i = 0; i < cards.length; i++) {
            if(cards[i].id == filter){
                cards.splice(i , 1);
            } 
            
        }
        this.setState({cards});
     }

    render() {
        const { url, alt } = this.state.image; 
        const array = [... this.state.array];
        const cards =[...this.state.cards];
        const { counter } = this.state;

        if(!cards.length) return <p>No Items in the Array</p>
        return(
            <div className='container'>
                <PageHeader title={"Business Card App"} subTitle={cards.length ? "Here you will find business cards" : ''} />
                {
                    cards.map((c,k) => <Card card={c} key={k} handleDelete={this.handleDelete}/>)
                }
                in counter-container
                <CounterSFC counter={counter} setCounter={this.setCounter}/>
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