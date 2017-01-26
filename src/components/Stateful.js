import React from 'react';
import { Button } from 'reactstrap';

let Stateful = React.createClass({
  getInitialState: function() {
    return {
      clicks: 0,
      state: "",
    };
  },

  clicksUp: function() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  },

  clicksDown: function(){
    this.setState({
      clicks: this.state.clicks - 1
    });
  },

  turnOn: function() {
    this.setState({
      state: "ON"
    });
  },

  turnOff: function() {
    this.setState({
      state: "OFF"
    });
  },

  render() {
    return(
      <div>
        <h1>Stateful</h1>
        <hr/>
        <h2>Clicks: {this.state.clicks}</h2>
        <Button onClick = {this.clicksUp}>+1</Button>
        <Button onClick = {this.clicksDown}>-1</Button>
        <h2>State: {this.state.state}</h2>
        <Button onClick = {this.turnOn}>On</Button>
        <Button onClick = {this.turnOff}>Off</Button>
      </div>
    )
  }
});

export default Stateful;
