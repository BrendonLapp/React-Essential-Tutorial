import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/about'
import Axios from 'axios';

class App extends React.Component {

  state = {
    todos: []
  }

  //this is making a call on component load by using a library called Axios to do the request for me
  //alternatively I can use the normal way that javascript handles making rest requests
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  deleteTodo = (id) => {
    Axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
      .then(res => this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }));
  }

  AddTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }));

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo AddTodo={this.AddTodo}/>
                <Todos 
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo}  />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
          
        </div>
        
      </BrowserRouter>

    );
  }
}
//without using a library such as redux i will need to pass my methods to control state across diffferent components - line 36
export default App;
