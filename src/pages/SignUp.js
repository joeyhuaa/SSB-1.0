import React from "react"

function SignUp() {
	return (
		<div className="main-container">
			<div className="contain">
				<span className="main-title">OUR CLASSES</span>
			</div>
			<div className="white-contain">
				<span className="title" style={{margin:"0"}}>Beginner and Intermediate classes</span>
				<span className="title">for ages <span style={{color:"#a3a3c2"}}>5-13</span></span>
				<span className="title">Find a class time that works for you!</span>
				<a href="https://app.punchpass.net/org/3239/classes" target="_blank"><button className="btn-black btn-schedule">OUR SCHEDULE</button></a>
			</div>
			<div className="contain">
				<span className="title" style={{marginTop:"5em"}}>Browse our registration plans below!</span>
				<img src="./img/triangle.png" style={{width:"30px", margin:"auto", display:"block", marginTop:"6em", filter:"invert(100%)"}}></img>
			</div>
			<div className="white-contain">
				<span className="subtitle">BRONZE</span>
				<img src="./img/bronze.png" className="sign-up-img"></img>
				<ul className="info">
					<li className="list-blurb">Designed for players training 1 time per week, Bronze is for recreational players looking to gain ball handling skills, shooting technique, and teamwork experience.</li>
					<br></br>
					<li className="info-title list-blurb">Included:</li>
					<li className="list-blurb">x1 Class Per Week ($25 each)</li>
					<li className="list-blurb">x1 SSB T-Shirt</li>
					<a href="https://app.punchpass.com/org/3239/passes/49512" target="_blank"><button className="btn-black btn-buy">REGISTER NOW</button></a>
				</ul>
			</div>
			<div className="contain">
				<span className="subtitle">SILVER</span>
				<img src="./img/silver.png" className="sign-up-img"></img>
				<ul className="info">
					<li className="list-blurb">Designed for players training 2 times per week, Silver is for players looking to rapidly improve their abilities in ball handling, shooting, defense, and more.</li>
					<br></br>
					<li className="info-title list-blurb">Included:</li>
					<li className="list-blurb">x2 Classes Per Week ($22.50 each)</li>
					<li className="list-blurb">x1 SSB Achievements Journal</li>
					<li className="list-blurb">x1 SSB T-Shirt</li>
					<a href="https://app.punchpass.com/org/3239/passes/49513" target="_blank"><button className="btn-white btn-buy">REGISTER NOW</button></a>
				</ul>
			</div>
			<div className="white-contain">
				<span className="subtitle">GOLD</span>
				<img src="./img/gold.png" className="sign-up-img"></img>
				<ul className="info">
					<li className="list-blurb">Designed for players training 3 times per week, Gold is the premium package for players who thoroughly enjoy playing basketball and want to rapidly improve.</li>
					<br></br>
					<li className="info-title list-blurb">Included:</li>
					<li className="list-blurb">x3 Classes Per Week ($20 each)</li>
					<li className="list-blurb">x1 SSB Achievements Journal</li>
					<li className="list-blurb">x1 SSB T-Shirt</li>
					<li className="list-blurb">+ Personalized training advice</li>
					<a href="https://app.punchpass.com/org/3239/passes/49640" target="_blank"><button className="btn-black btn-buy">REGISTER NOW</button></a>
				</ul>
			</div>
			<div className="contain">
				<span className="subtitle">PLATINUM</span>
				<img src="./img/platinum.png" className="sign-up-img"></img>
				<ul className="info">
					<li className="list-blurb">Designed for players training 4 times per week, Platinum is the premium+ package for players who thoroughly enjoy playing basketball and want to rapidly improve.</li>
					<br></br>
					<li className="info-title list-blurb">Included:</li>
					<li className="list-blurb">x4 Classes Per Week ($18.75 each)</li>
					<li className="list-blurb">x1 SSB Achievements Journal</li>
					<li className="list-blurb">x1 SSB T-Shirt</li>
					<li className="list-blurb">+ Personalized training advice</li>
					<a href="https://app.punchpass.com/org/3239/passes/49641" target="_blank"><button className="btn-white btn-buy">REGISTER NOW</button></a>
				</ul>
			</div>
		</div>
	)
}

export default SignUp