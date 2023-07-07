import React, { Component } from "react";
import Tasks from "./Tasks";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      value: "",
    };
  }
  inputHandler = (e) => {
    this.setState({ value: e.target.value });
  };
  pushHandler = () => {
    this.setState({ arr: [...this.state.arr, this.state.value] });
    console.log(this.state.arr);
  };
  deleteHandler = (e) => {
    this.setState({ arr: this.state.arr.filter((item)=> item !== e) });
  };
  render() {
    return (
      <div>
        <input className="inputTask" onChange={this.inputHandler} type="text"></input>
        <button className="addTask" onClick={this.pushHandler}>Add Task</button>
        { this.state.arr.length?(
        this.state.arr.map((data, i) => {
          return (
            <div className="tasks">
              <h2 className="task">{data}</h2>
              <button className="deleteTask" onClick={() => this.deleteHandler(data)}>X</button>
            </div>);
        //   return <Tasks key={i} data={data}></Tasks>
        })):(<h1 className="alert" >Task Yoxdur</h1>)}
      </div>
    );
  }
}

export default TodoInput;
