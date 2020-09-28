import React, {Component} from 'react'
import ReactDOM from 'react-dom'

let bookList = [
  {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
  {"title": "Cat's Crade", "author": "Zadie Smith", "pages": 480}
]

const Book = ({title, author, pages, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages}</p>
      <p>Free bookmark Today: {freeBookmark ? 'yes!': 'no!'}</p>
    </section>
  )
}

const Hiring = () => {
  return (
    <div>
      <p>The library is hiring. Go to www.library.com/jobs for more</p>
    </div>
  )
}

const NotHiring = () => {
  return (
    <div>
      <p>The library is not hiring. Check back later.</p>
    </div>
  )
}

class Library extends Component {
  //by adding this line below I can remove my constructor
  state = {open: false,
          freeBookmark: true,
          hiring: false} 
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     open: true
  //   }
  //   this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
  // }

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

ReactDOM.render(
  <Library books={bookList}/>,
  
  document.getElementById('root')
)