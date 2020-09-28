import React, {Component} from 'react'
import ReactDOM from 'react-dom'


export const Book = ({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>By: {author}</p>
        <p>Pages: {pages}</p>
        <p>Free bookmark Today: {freeBookmark ? 'yes!': 'no!'}</p>
      </section>
    )
  }