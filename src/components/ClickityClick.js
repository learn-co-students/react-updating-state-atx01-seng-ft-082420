import React, { Component } from "react";

class ClickityClick extends Component {
  constructor() {
    super();

    // Define initail State
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    this.setState(
      {
        hasBeenClicked: true
      },
      () => console.log(this.state.hasBeenClicked)
    );
  };
  render() {
    return (
      <div>
        <p>I Have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default ClickityClick;
// Button Counter
// import React, {Component} from 'react';

// class ButtonCounter extends Component {
//   constructor() {
//     super()
//     // initial state has count set at 0
//     this.state = {
//       count: 0
//     }
//   }

//   handleClick = () => {
//     // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
//     let newCount = this.state.count + 1
//     this.setState({
//       count: newCount
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Click Me</button>
//       </div>
//     )
//   }
// }

// export default ButtonCounter
