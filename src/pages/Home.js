import React from "react"
import MyMap from '../components/MyMap.js'

function Home() {
  return (
		<div className="main-container">
			<div className="contain">
				<span className="main-title">SSB BASKETBALL ACADEMY</span>
				<span className="subtitle">where learning feels like playing</span>
			</div>
			<div className="white-contain">
				<span className="title">See it for yourself!</span>
				<video className="video" controls src="./vid/ssb-1.mp4"></video>	
			</div>
			<div className="contain">
				<span className="subtitle" style={{textAlign:"left", color:"whitesmoke"}}>Weekday and Weekend Classes...</span>
				<span className="subtitle" style={{textAlign:"right", color:"whitesmoke"}}>...Year-Round in Fremont, CA</span>
				<span className="center-text">33955 Emilia Ln, Fremont, CA 94555</span>
				<div class="map-container"><MyMap /></div>
			</div>
		</div>
	)
}

export default Home