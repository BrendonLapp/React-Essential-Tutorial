import React, {Component} from 'react'

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        console.log(e.target.value)
        this.setState({title: e.target.value}) //if i want to do multiple fields i can go [e.target.title] and each entry that the value relates to, it must be in the [] to work
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.title)
        this.setState({title: ''})
    }

    render() {
        return (
            <form 
                onSubmit={this.onSubmit}
                style={{display: 'flex', padding: '10px'}}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Add to do..." 
                    style={{flex: '10'}} 
                    value={this.state.title}
                    onChange={this.onChange}
                    />
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddTodo