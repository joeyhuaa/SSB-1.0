import React from 'react'
import Photos from "../components/Photos"

function HomePanel() {
  return (
    <div className="main-container">
      <div className="contain">
        <img src="../img/ssb-logo-water.png" id="home-logo"></img>
        <span className="title">Weekday and Weekend Classes, Year-Round!</span>
        <span className="subtitle" style={{marginTop:"50px"}}>Our Locations</span>
        <span className="center-text blurb">Ardenwood Elementary — 33955 Emilia Ln, Fremont, CA 94555</span>
        <span className="center-text">•</span>
        <span className="center-text blurb">John F. Kennedy Elementary — 35430 Blackburn Dr, Newark, CA 94560</span>
      </div>
      <Photos />
    </div>
  )
}
export default HomePanel