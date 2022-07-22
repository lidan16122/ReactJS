const FatherCompSFC = () => {
    const user = {
        firstName: "Victor",
        lastName: "Yampolsky"
    }
    return ( 
    <div style={{minHeight: 250}} className="bg-success container mt-5">
        Father Component
        <ChildComponent user={user} />
    </div> );
}
 
const ChildComponent = props => {
    const { user:{firstName, lastName} } = props;
    return ( 
        <div className="mt-5 bg-danger col-6">
            Child Component 
            <br />
            <span> my first name: {firstName} </span> <br />
            <span> my last name: {lastName} </span>
        </div>
     );
}
 


export default FatherCompSFC;