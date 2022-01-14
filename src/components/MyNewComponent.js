import React, { Component } from "react";

class MyNewComponent extends Component {
  render() {
    const { name, lastName } = this.props;
    return (
      <div>
        <p> Mi nombre es {name}</p>
        <p>mi apellido es {lastName}</p>
      </div>
    );
  }
}

export default MyNewComponent;
