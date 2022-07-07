import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: this.props.age
        }
    }
    increaseAge = () => {
        this.setState ({ age: this.state.age +1});
    }
    render(){
        return (
        <div>
            <h3>{this.props.lastName}, {this.props.firstName}</h3>
            <p>Age:{this.state.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={this.increaseAge}> Birthday Button for {this.props.firstName}{this.props.lastName}</button>
        </div>
        );
    }
}
export default PersonCard;