import { Component } from 'react'
import './TodoList.css'
import Button from './Ui/Button'
import Checkbox from './Ui/Checkbox'

class TodoList extends Component {

	chechedHandler(e) {
		this.setState(
			this.props.task.map((el) => {
				if (el.id === e.target.id) {
					el.completed = !el.completed
				}
				return el
			}),
		)
	}
	render() {
		return (
			<ul className='todolist'>
				{this.props.task.map((el) => {
					return (
						<li key={el.id}>
							<div className='date'>
	                     <strong>{el.date}</strong>
                        </div>
						<span className={el.completed ? 'done' : ''}><h3 className='h3'>{el.task}</h3>
						</span>
						<label>
						<Checkbox type="checkbox" id={el.id} onChange={this.chechedHandler.bind(this)} checked={el.completed} />
						</label>
						<div>
						<Button className='btn' id={el.id} onClick={(e)=> this.props.onFiltered(e)}>X</Button>
						</div>
					</li>
					)
				})}
			</ul>
		)
	}
}
export default TodoList

{/* <li key={el.id}>
<div className='date'>
	<strong>{el.date}</strong>
</div>
<h3 className='h3'>{el.task}</h3>
<label className={`${el.complete ? 'done' : 'task' }`} htmlFor="">
	<Checkbox
		type='checkbox'
		id={el.id}
		className='input'
		onChange={this.chechedHandler.bind(this)}
		checked={el.completed}
	/>
	</label>
<div>
	<Button className='btn' id={el.id} onClick={(e)=> this.props.onFiltered(e)}>X</Button>
</div>
</li> */}