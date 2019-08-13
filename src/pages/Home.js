import React from "react"

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
				<div id="map"></div>
			</div>
		</div>
  )
}

export default Home