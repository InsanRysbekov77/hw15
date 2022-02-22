import { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(){
    super()
    this.state = {
			task: [],
		 }
  }
  addTodoHandler (newTask){
    this.setState({ task: [...this.state.task,newTask] })
    console.log(newTask);
  }
  deleteHandler(e) {
		this.setState({ 
            task: this.state.task.filter((el) => el.id !== e.target.id) })
	}
  
  render(){
    return (
      <div className="App">
        <TodoForm onGetData={this.addTodoHandler.bind(this)}/>
        <TodoList onFiltered={this.deleteHandler.bind(this)} task={this.state.task}/>
      </div>
    );
  }
}

export default App;
