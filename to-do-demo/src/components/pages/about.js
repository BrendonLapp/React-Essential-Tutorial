import React from 'react' 

//by using a react.fragment i dont need to return a div or another over arching type of container jsx element
//react.fragment will allow me to return something that i might not necessarily want to have inside a div in my dom
export default function About() {
    return (
        <React.Fragment> 
            <h1>About</h1>
            <p>This is the to do list app version 1.0.0. It is part of a react tutorial which you can find here: https://www.youtube.com/watch?v=sBws8MSXN7A</p>
        </React.Fragment>
    )
}