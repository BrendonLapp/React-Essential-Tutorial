import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import {Book} from './Book'
import {Hiring} from './Hiring'
import {NotHiring} from './NotHiring'

     class Library extends Component {

    //Set up a default value to show when there are no results instead of the page crashing for the user
    static defaultProps = {
      books: [
        {"title": "Tahoe Tales", author: "Chet Whitley", pages: 1000}
      ]
    }
  
    //component lifecycle methods can only be used for classes and not the function syntax
    //by adding this line below I can remove my constructor
    state = {open: false,
            freeBookmark: true,
            hiring: false,
            data: [],
            loading: false
          } 
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //     open: true
    //   }
    //   this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
    // }
  
    componentDidMount() {
      this.setState({loading: true})
      fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}))
    }
  
    componentDidUpdate() {
      console.log("The componenet did update")
    }
  
    //there is also componentWillUnmount which is good for if there are timers or anything of the like where I want to clear it
  
    //removing my constructor and adding the arrow syntax below I can find my method into the class instead of calling it in the constructor
    toggleOpenClosed = () => {
      this.setState(prevState => ({
        open: !prevState.open
      }))
    }
  
    toggleHiringButton = () => {
      this.setState(prevState => ({
        hiring: !prevState.hiring
      }))
    }
  
    render() {
      const {books} = this.props
      return(
        <div>
          {this.state.hiring ? <Hiring/> : <NotHiring/>}
          {this.state.loading 
            ? "loading..." 
            : <div>
                {this.state.data.map(product => {
                  return (
                    <div key={product.id}>
                      <h3>Library product of the week</h3>
                      <h4>{product.name}</h4>
                      <img alt={product.name} src={product.image} height={100}></img>
                    </div>
                  )
                })}
              </div>  
            }
          <button onClick={this.toggleHiringButton}>Hiring</button>
          <h1>This library is {this.state.open ? 'open' : 'closed'}</h1>
          <button onClick={this.toggleOpenClosed}>{this.state.open ? 'close' : 'open'} the library</button>
          {books.map(
            (book, id) =><Book 
                          id={id}
                          title={book.title} 
                          author={book.author} 
                          pages={book.pages}
                          freeBookmark={this.state.freeBookmark}/>
          )}
  
          
  
        </div>
      )
    }
  }

  Library.propTypes = {
    books: PropTypes.array
  }
  
  Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
  }

  export default Library