import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./components/todoList";
import FormAddTask from "./components/form";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfTasks: [
        { id: "1", task: "text of task 1", done: false },
        {
          id: "2",
          task: "text of task 2",
          done: true
        }
      ]
    };
    this.doneUndenTask = this.doneUndenTask.bind(this);
    this.HendleSubmit = this.HendleSubmit.bind(this);
  }

  HendleSubmit(taskText) {
    let newList = [...this.state.listOfTasks];
    newList.push({ id: newList.length + 1, task: taskText, done: false });
    this.setState({
      listOfTasks: newList
    });
  }

  doneUndenTask(id) {
    let list = [...this.state.listOfTasks];
    list.map(function(item) {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    this.setState({
      listOfTasks: list
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>

        <FormAddTask submitFunction={this.HendleSubmit} />
        <ToDoList
          tasks={this.state.listOfTasks}
          donetaskHandle={this.doneUndenTask}
        />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <FormAddTask />
//       <ToDoList />
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
