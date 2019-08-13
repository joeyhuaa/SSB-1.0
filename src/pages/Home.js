import React from "react"
import MapContainer from '../components/MapContainer.js'

function Home() {
  return (
		<div className="main-container">
			<div className="contain">
				<span className="main-title">SSB BASKETBALL ACADEMY</span>
				<span className="subtitle">where learning feels like playing</span>
			</div>
			<div className="contain">
				<span className="subtitle">See it for yourself!</span>
				<video className="video" controls src="./vid/ssb-1.mp4"></video>	
			</div>
			<div className="contain">
				<span className="subtitle">Weekday and Weekend Classes</span>
				<span className="subtitle">Year-Round in Fremont, CA</span>
				<span className="center-text">33955 Emilia Ln, Fremont, CA 94555</span>
				<div id="map"><MapContainer /></div>
			</div>
		</div>
	)
}

export default Home