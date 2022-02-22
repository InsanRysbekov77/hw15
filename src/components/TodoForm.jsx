import { Component } from "react";
import './TodoForm.css'

class TodoForm extends Component {
    constructor(){
		super()
		this.state = {
			task: '',
		}
	}
	taskChangeHandler = (event) => {
		this.setState({ task: event.target.value })
	}
	submitChangeHandler = (event) => {
		event.preventDefault()
		if(this.state.task.trim().length > 0){
			const newTask = {
				task: this.state.task,
				date: new Date().toLocaleDateString(),
				id: Math.random().toString(),
				completed: false,
			}
			this.props.onGetData(newTask)
		} else alert('Вы не заполнили все поля!!!')
		
	}
    render(){
        return(
            <>
			<form onSubmit={this.submitChangeHandler.bind(this)} className='todo-form' >
					<h1><span className='styling'>TODO</span>   List</h1>
					<div className='div'>
					<input
						type='text'
						className='input'
						placeholder='Enter a Todo...'
						onChange={this.taskChangeHandler.bind(this)}
						value={this.state.task}
					/>
					<button className = 'addButton' type='submit'>
						Add
					</button>
					</div>
			</form>
		</>
        )
    }
}

export default TodoForm;