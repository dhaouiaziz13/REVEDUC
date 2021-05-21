import "./navbar.css";
import { Link } from "react-router-dom"
export default function Navbar() {
	return (
		<div className="navbar">
			<div className="logo"><span className="rev">REV</span> <span className="educ">EDUC</span> </div>
			<div className="navs">
				<Link to="/" className="nav-item">home</Link>
				<Link to="/about" className="nav-item">about us</Link>
				<Link to="/event" className="nav-item">events</Link>
				<Link to="/club" className="nav-item">club</Link>
				<Link to="/contact" className="nav-item">contact</Link>
			</div>
		</div>
	);
}
