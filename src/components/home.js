// import { useState } from "react";
// import { useHistory } from "react-router-dom";
import Navbar from "./navbar";
import "./home.css";

export default function Home() {
	// let history = useHistory();

	return (
		<div className="home">
			<Navbar />
			<div className="landing">
				<div className="welcome">
					<span className="wel">WEL</span>
					<span className="come">COME</span>
				</div>
			</div>
		</div>
	);
}
