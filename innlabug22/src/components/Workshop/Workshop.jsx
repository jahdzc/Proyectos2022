import React, {Fragment} from 'react'
import Menu from '../Menu/Menu'
import "./workshop.css"

const Workshop = () => {
  return (
    <Fragment>
      <section className="topSection" id="top">
        <Menu url={"/workshops"}/>
        <div className="texto1">
          <h1 className="welcome">Welcome to Workshops</h1>
        </div>
      </section>
    </Fragment>
    
  )
}

export default Workshop