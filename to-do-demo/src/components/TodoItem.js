import React, {Component} from 'react'

class TodoItem extends Component {

    //by using an arrow function vs making my own function I can avoid having to add a .bind(this) to each function call i do in this class
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            broderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo; //this is an option to avoid doing a this.props to use my variables

        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} />
                {this.props.todo.title}
                <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, this.props.todo.id)}>X</button>
            </div>
        )
    }
}

const itemStyle = {
    backgroundColor: '#f4f4f4'
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
