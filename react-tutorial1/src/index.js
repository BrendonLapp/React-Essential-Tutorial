import React, {Component} from 'react'
import ReactDOM from 'react-dom'

let skiData = {
  total: 20,
  powder: 10,
  backCountry: 4,
  goal: 15
}

const getPercent = decimal => {
  return decimal * 100 + '%'
}
const calcGoalProgress = (total, goal) => {
  return getPercent(total/goal)
}

const SkiDayCounter = (props) => {
  return (
    <section>
        <div>
          <p>Total Days: {props.total}</p>
        </div>
        <div>
          <p>powder Days: {props.powder}</p>
        </div>
        <div>
          <p>backCountry Days: {props.backCountry}</p>
        </div>
        <div>
          <p>Goal Progress: {calcGoalProgress(props.total, props.goal)}</p>
        </div>
    </section>
  )
}

ReactDOM.render(
  <SkiDayCounter 
    total={skiData.total}
    powder={skiData.powder}
    backCountry={skiData.backCountry}
    goal={skiData.goal}
  />,
  
  document.getElementById('root')
)