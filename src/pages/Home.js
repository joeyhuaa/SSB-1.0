import React from "react"

function Home() {
  return (
		<div className="main-container">
			<div className="contain">
				<div className="vert-container">
					<span className="main-title">SSB BASKETBALL ACADEMY</span>
					<span className="subtitle">where learning feels like playing</span>
				</div>
				<video className="video" controls src="./vid/ssb-1.mp4"></video>	
			</div>
		</div>
  )
}

export default Home