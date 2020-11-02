import React from 'react';
import './App.css';
import TaskBar from './TaskBar'; 
import TodoList from './TodoList'; 

class App extends React.Component{
  state = { todolist: [], removeTask: 0 };

  onInputSubmit = (task) => {
    // 1-Opt]     this.setState({ todolist : this.state.todolist.push(task) });    
    // ******     Error : Uncaught TypeError: this.state.todolist.push is not a function    ***** 

    // 2-Opt] this.setState({ todolist: [...this.state.todolist, task] });
    // ******     Not Effective way of solving issue     *****

    // 3-Opt] Best Option to solve this issue 
    // Refer URL ==> 'https://stackoverflow.com/questions/45093714/uncaught-typeerror-this-state-students-push-is-not-a-function-and-this-state-st'
    this.state.todolist.push(task);
    this.setState({
      todolist: this.state.todolist
    });
    
    console.log(this.state.todolist);
  }

  toRemove = (id) => {
    console.log(`${id} Task is removed`);    
    // this.setState({ removeTask: id });
    // console.log(id);
    // this.setState({ todolist: this.state.todolist.splice(id, 1) });

    this.state.todolist.splice(id, 1);
    this.setState({
      todolist: this.state.todolist
    });
  }   

  render() {
    return (
      <div className="todo-app">
        <TaskBar onInputSubmit={this.onInputSubmit} />
        <div className="todo-list">
          <TodoList toRemove={this.toRemove} todolist={this.state.todolist} />
        </div>
      </div>
    );
  }
}

export default App;
