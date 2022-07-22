const CounterSFC = ({counter, setCounter}) => {
    const renderCounter = counter => {
        if(!counter) return null;
        return <div>counter: {counter}</div>
    }

    const renderBtns = counter => {
        return (
            <div>
                <button className="btn btn-success mx-2" onClick={() => setCounter('+' , counter)}>+</button>
                <button className="btn btn-danger mx-2" onClick={() => setCounter('-' , counter)}>-</button>
            </div>
        )
    }
    return ( 
        <div className="center mt-5">
            <div>
                in counterSFC
                {renderCounter(counter)}
                {renderBtns(counter)}
            </div>
        </div>
     );
}
 
export default CounterSFC;