import React from "react"
import MyMap from '../components/MyMap.js'

function Home() {
  return (
		<div className="main-container">
			<div className="contain">
				<span className="main-title" style={{margin:"0", padding:"0"}}>SUPER SPLASH BROS</span> 
				<span className="title" style={{margin:"0", padding:"10px"}}>BASKETBALL ACADEMY</span>
				<span className="subtitle" style={{marginTop:"10px"}}>where learning feels like playing</span>
			</div>
			<div className="white-contain">
				<span className="title">See it for yourself!</span>
				<video className="video" controls src="./vid/ssb-1.mp4"></video>	
			</div>
			<div className="contain">
				<span className="subtitle" style={{color:"whitesmoke"}}>Weekday and Weekend Classes, Year-Round!</span>
				<span className="center-text">33955 Emilia Ln, Fremont, CA 94555</span>
				<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							{/* <div class="map-container"><MyMap /></div> */}
							<img class="d-block w-100" src="./img/court.jpg" alt="First slide"></img>
						</div>
						<div class="carousel-item">
							<img class="d-block w-100" src="..." alt="Second slide"></img>
						</div>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Home