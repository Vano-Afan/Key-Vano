import React from 'react';
 import ReactDOM from 'react-dom';

 class Todo extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        name: ' TODO ',
        count: 0,
        tasks: []
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleClickIndex = this.handleClickIndex.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleClick(event){
      eval(this[event.target.name]).bind(this)(event)
    }
    handleClickIndex(index, event){
      eval(this[event.target.name]).bind(this)(index, event)
    }
    handleChange(event){
      eval(this[event.target.name]).bind(this)(event)
    }
    handleSubmit(event){
      event.preventDefault()
      eval(this[event.target.name]).bind(this)(event)
    }
    task(event) {
      this.setState({task:event.target.value})
    }
    addTask(event) {
      if (!this.state.task) return
      const tasks = this.state.tasks || []
      tasks.push(this.state.task)
      this.setState({tasks:tasks, task:''})
    }
    removeTask(index, event) {
      const tasks = this.state.tasks
      tasks.splice(index, 1)    
      this.setState({tasks})
    }
    render(){
      const tasks = (this.state.tasks||[]).map((task,index)=>(
        <li>
          {task} <button name="removeTask" onClick={event=>this.handleClickIndex(index,event)}>x</button>
        </li>
      ))
      return (
        <div className="container">
          <h1>{this.state.name}</h1>
          <div>
            <ol>
              {tasks}
              {
                this.state.task &&
                <li>{this.state.task}</li>
              }
            </ol>
            <div>
              <form name="sendTask" onSubmit={this.handleSubmit}>
                <input name="task" value={this.state.task} onChange={this.handleChange}/>
                <button type="submit" name="addTask" onClick={this.handleClick}>Добавить</button>
              </form>
            </div>
            <div style={{marginTop:'1rem'}}>
            </div>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <Todo/>,
    document.getElementById('root')
  );