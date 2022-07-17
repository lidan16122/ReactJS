const FnWithArgsSfc = () => {
    return ( 
        <button onClick={() => callMe("you called!")} className="btn btn-info"> Func w/arg SFC</button>
     );
}

const callMe = text => console.log(text);
 
export default FnWithArgsSfc;