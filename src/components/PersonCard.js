import React, { Component } from "react";

class PersonCard extends Component {
  increaseAge = () => {
    const count = this.state.personAge + 1;
    this.setState({ personAge: count });
  };

  constructor(props) {
    super(props);
    this.state = {
      personAge: this.props.age,
    };
  }

  render() {
    const { firstName, lastName, hairColor } = this.props;
    return (
      <div>
        <h1>
          {lastName},{firstName}
        </h1>
        <p>Age: {this.state.personAge}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={this.increaseAge}>
          Birthday button for {lastName}, {firstName}
        </button>
      </div>
    );
  }
}

export default PersonCard;
