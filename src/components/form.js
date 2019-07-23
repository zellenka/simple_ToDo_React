import React from "react";

class FormAddTask extends React.Component {
  SubmitFunction(e) {
    e.preventDefault();
    let formValue = this.refs.taskInput.value;
    if (formValue === "") {
      alert("Empty form");
      return;
    }
    this.props.submitFunction(formValue);
  }

  render() {
    return (
      <form onSubmit={this.SubmitFunction.bind(this)}>
        <input type="text" ref="taskInput" />
        <button>Add Task</button>
      </form>
    );
  }
}

export default FormAddTask;
