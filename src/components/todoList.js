import React from "react";

class toDoList extends React.Component {
  handeleDone(id) {
    this.props.donetaskHandle(id);
  }

  render() {
    let listOfTasks = this.props.tasks.map(item => (
      <li
        key={item.id}
        onClick={this.handeleDone.bind(this, item.id)}
        className={item.done ? "done" : "undone"}
      >
        {item.task}
        <button>delete</button>
      </li>
    ));

    return <ol>{listOfTasks}</ol>;
  }
}

export default toDoList;
