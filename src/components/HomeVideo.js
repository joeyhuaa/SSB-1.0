import React from 'react'
import {Link} from "react-router-dom"

function HomeVideo() {
  return (
    <div id="home-contain">
      <div style={{'marginBottom':'10em'}}>
        <div class="grid-container">
          <span id="home-title">SUPER SPLASH BROS</span>
          <span id="home-subtitle">BASKETBALL ACADEMY</span>
          <span id="home-subtitle-2">WHERE LEARNING FEELS LIKE PLAYING</span>
          <Link to="/signup">
            <button id="home-register-btn" className="btn-buy">JOIN US NOW!</button>
          </Link>
        </div>
        <video id="home-video" autoplay="true" loop muted>
          <source src="./vid/ssb-2.mov" />
        </video> 
      </div>
    </div>
  )
}
export default HomeVideo