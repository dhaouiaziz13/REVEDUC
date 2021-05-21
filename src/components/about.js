import React from "react";
import Navbar from "./navbar";
import "./about.css";
const About = () => {
	return (
		<div>
			<Navbar />
			<div className="whorwe">
				<div className="container-1">
					<div className="xtit x">
						WHO <span>ARE</span> WE
					</div>
					{/* paragraph goes here */}
					<p className="parag x">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						mollis, libero in ullamcorper sollicitudin, lorem diam ornare velit,
						a porttitor lectus nisi id arcu. Cras ut ante libero. Curabitur
						aliquam dolor metus, malesuada placerat ex vehicula at. Integer
						maximus augue sed ipsum tincidunt malesuada. Sed interdum sapien
						lacinia, imperdiet dui id
					</p>
				</div>
			</div>
			<div className="cont">
				<section className="container">
					<figure className="chart" data-percent="75">
						<figcaption>50</figcaption>
						<svg width="200" height="200">
							<circle
								className="outer"
								cx="95"
								cy="95"
								r="85"
								transform="rotate(-90, 95, 95)"
							/>
						</svg>
					</figure>
					<span>something</span>
				</section>
				{/*  */}
				<section className="container">
					<figure className="chart" data-percent="75">
						<figcaption>5</figcaption>

						<svg width="200" height="200">
							<circle
								className="outer"
								cx="95"
								cy="95"
								r="85"
								transform="rotate(-90, 95, 95)"
							/>
						</svg>
					</figure>
					<span>events</span>
				</section>
				{/*  */}
				<section className="container">
					<figure className="chart" data-percent="75">
						<figcaption>20</figcaption>
						<svg width="200" height="200">
							<circle
								className="outer"
								cx="95"
								cy="95"
								r="85"
								transform="rotate(-90, 95, 95)"
							/>
						</svg>
					</figure>
					<span>members</span>
				</section>
			</div>
		</div>
	);
};

export default About;
