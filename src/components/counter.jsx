import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags:['tag 1','tag 2','tag 3']
  };

  handleIncrement() {
    console.log("Increment Clicked");
  }

  render() {


    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.state.count}</span>
      <button onClick={ handleIncrement()} className="btn btn-success btn- sm">Increment</button>
    <ul>
    {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
      < /ul>
      </div>
    );
  }

  getBadgeClasses(){
    let classes = "badge m-2 btn-";
classes += (this.state.count === 0) ? "danger" : "primary";
return classes;
     }
}

export default Counter;
