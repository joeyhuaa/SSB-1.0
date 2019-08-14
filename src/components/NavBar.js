import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
	var styles = {
		backgroundColor: "whitesmoke",
		width: "100%"
		// height: "4em"
	}
	return (
		<div className="nav-container">
			<nav className="navbar navbar-expand-lg navbar-light fixed-top" style={styles}>
				<Link to='/' className="navbar-brand"><img src="./img/logo.png" className="logo"></img></Link>
				<Link to='/' className="super-splash-bros">SUPER SPLASH BROS</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
						<li className="nav-item"><Link to='/about' className="nav-link">About</Link></li>
						<li className="nav-item"><Link to='/signup' className="nav-link">Sign Up</Link></li>
						<li className="nav-item"><Link to='/promo' className="nav-link">Promotions</Link></li>
						<li className="nav-item"><Link to='/terms' className="nav-link">Terms</Link></li>
						<li className="nav-item"><Link to='/updates' className="nav-link">Updates</Link></li>
						<li className="nav-item"><Link to ='/contact' className="nav-link">Contact</Link></li>
					</ul>
					<a href="https://www.facebook.com/ssb.basketball/" target="_blank"><img src="./img/fb-bw.jpg" width="40" height="40" className="social-media"></img></a>
					<a href="https://www.yelp.com/biz/ssb-basketball-academy-fremont-3" target="_blank"><img src="./img/yelp-bw.png" width="40" height="40" className="social-media"></img></a>
				</div>
			</nav>  
		</div>
	)
}

export default NavBar