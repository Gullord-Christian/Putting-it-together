//import react
import React, {Component} from 'react';

// define class and link component
const PersonCard = props => {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         age: this.props.age
    //     }
    // }
    // increaseAge = () => {
    //     this.setState ({ age: this.state.age +1});
    // 
        return (
        <div>
            <h3>{props.lastName}, {props.firstName}</h3>
            <p>Age:{props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            {/* <button onClick={this.increaseAge}> Birthday Button for {this.props.firstName}{this.props.lastName}</button> */}
        </div>
        );
}



// export class 
export default PersonCard;