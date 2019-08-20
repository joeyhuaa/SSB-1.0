import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
	var styles = {
		backgroundColor: "whitesmoke",
		width: "100%",
		marginBottom: "0px"
	}
	return (
		<div className="nav-container">
			<nav className="navbar navbar-expand-lg navbar-light fixed-top" style={styles}>
				<Link to='/'><img className="super-splash-bros" src="./img/super-splash-bros.png"></img></Link>
				<Link to='/' className="navbar-brand"><img src="./img/logo.png" className="logo"></img></Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul data-toggle="collapse" data-target="#navbarSupportedContent"  className="navbar-nav mr-auto">
						<li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
						<li className="nav-item"><Link to='/about' className="nav-link">About</Link></li>
						<li className="nav-item"><Link to='/signup' className="nav-link">Sign Up</Link></li>
						<li className="nav-item"><Link to='/news' className="nav-link">News</Link></li>
						<li className="nav-item"><Link to='/promo' className="nav-link">Promotions</Link></li>
						<li className="nav-item"><Link to='/terms' className="nav-link">Terms</Link></li>
						<li className="nav-item"><Link to ='/contact' className="nav-link">Contact</Link></li>
					</ul>
					<a href="https://www.facebook.com/ssb.basketball/" target="_blank"><img src="./img/fb-bw.jpg" width="40" height="40" className="social-media fb"></img></a>
					<a href="https://www.yelp.com/biz/ssb-basketball-academy-fremont-3" target="_blank"><img src="./img/yelp-bw.png" width="40" height="40" className="social-media yelp"></img></a>
				</div>
			</nav>  
		</div>
	)
}
export default NavBar