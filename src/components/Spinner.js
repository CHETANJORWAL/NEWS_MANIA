

import React, { Component } from 'react'
import spinner from '../images/4Mg1.gif'
import './Spinner.css'
export class Spinner extends Component {
  

  render() {
    return (
      <div>
        <div className="spinner"> <img src={spinner} alt="WAIT..." /></div>
       
      </div>
    )
  }
}

export default Spinner
