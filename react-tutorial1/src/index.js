import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Library from './Library'

let bookList = [
  {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 280},
  {"title": "Cat's Crade", "author": "Zadie Smith", "pages": 480}
]

//important to remember to set my default values so my UI will always render properly

class FavoriteColorForm extends Component {
  state = {
    value: ''
  }

  newColor = e => (
    this.setState({value: e.target.value})
  )
  
  submit = e => {
    console.log('New color:', this.state.value)
    e.preventDefault()
  }

  render() {
    return (
      <form>
        <label>Favorite Colour
          <input type="color" onChange={this.newColor}/>
        </label>
        <button onClick={this.submit}>Submit</button>
      </form>
    )
  }
}



ReactDOM.render(
  <Library books={bookList}/>,
  //<FavoriteColorForm />,
  document.getElementById('root')
)