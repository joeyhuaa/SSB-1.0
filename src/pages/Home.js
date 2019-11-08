import React from "react"
import HomeVideo from "../components/HomeVideo"

function Home() {
  return (
		<div>
			<HomeVideo />
			<div className="main-container">
				<div className="contain">
					<img src="../img/ssb-logo-water.png" id="home-logo"></img>
					<span className="title">Weekday and Weekend Classes, Year-Round!</span>
					<span className="subtitle" style={{marginTop:"50px"}}>Our Locations</span>
					<span className="center-text blurb">Ardenwood Elementary — 33955 Emilia Ln, Fremont, CA 94555</span>
					<span className="center-text">•</span>
					<span className="center-text blurb">John F. Kennedy Elementary — 35430 Blackburn Dr, Newark, CA 94560</span>
				</div>
				<div className="white-contain">
					<div className="title">See us in action!</div>
					<div id="carouselExampleControls" class="carousel slide photo-carousel" data-ride="carousel">
						<div class="carousel-inner">
							<div class="carousel-item active">
								<img class="d-block w-100" src="./img/mike-hug.jpg"></img>
							</div>
							<div class="carousel-item">
								<img class="d-block w-100" src="./img/indoor-circle.jpg"></img>
							</div>
							<div class="carousel-item">
								<img class="d-block w-100" src="./img/mike-tj-indoor.jpg"></img>
							</div>
							<div class="carousel-item">
								<img class="d-block w-100" src="./img/outdoor2.jpg"></img>
							</div>
							<div class="carousel-item">
								<img class="d-block w-100" src="./img/outdoor3.jpg"></img>
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
		</div>
	)
}
export default Home