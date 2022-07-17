const PassingEventToFn = () => {
    return ( 
        <button onClick={e => handleEvent(e)} className="btn btn-warning"> Passing Event To Fn SFC</button>
     );
}

const handleEvent = e => console.log(e);
 
export default PassingEventToFn;