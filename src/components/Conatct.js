import React from "react";
import Navbar from "./navbar";
import fb from "../static/fb.svg";
import insta from "../static/insta.svg";
import whats from "../static/whats.svg";

import "./contact.css";
const Conatct = () => {
	return (
		<div>
			<Navbar />
			<div className="form-container">
				<div className="links">
					<img
						onClick={() => {
							window.location.replace(
								"https://m.facebook.com/RevEduc/?locale2=fr_CA"
							);
						}}
						src={fb}
						alt=""
					/>
					<img src={insta} alt="" />
					<img src={whats} alt="" />
				</div>
				<div className="form">
					<div className="inps">
						<input type="text" placeholder="username" />
						<input type="text" placeholder="email" />
						<textarea placeholder="what's on your mind"></textarea>
						<div className="submit">send</div>
					</div>
					<div className="social">
						<span className="rev">CONTACT</span>{" "}
						<span className="educ">US</span>
					</div>
				</div>
			<span onClick={()=>{window.location.replace('https://github.com/dhaouiaziz13')}} className="withlove">Made with ♡ in tunisia</span>
			</div>
			
		</div>
	);
};

export default Conatct;
