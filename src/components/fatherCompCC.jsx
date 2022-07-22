import { Component } from "react";

class FatherCompCC extends Component {
    state = { 
        firstName: "Victor",
        lastName: "Yampolsky"
     } 
    render() { 
        return (
            <div style={{minHeight: 250}} className="bg-success container mt-5">
                <ins>Father Component</ins>
                <ChildCompCC firstName={this.state.firstName} lastName={this.state.lastName} />
            </div>
        );
    }
}
 class ChildCompCC extends Component {
    state = {  } 
    render() {
        console.log(this.props);
        const { firstName, lastName } = this.props; 
        return (
            <div className="mt-5 bg-danger col-6">
                <ins>Child Component</ins> 
                <br />
                <span> my first name: {firstName} </span> <br />
                <span> my last name: {lastName} </span>
            </div>
        );
    }
 }
  


export default FatherCompCC;