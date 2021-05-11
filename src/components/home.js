import { useState } from "react";
import { useHistory } from "react-router-dom";
// import svgblob from "../static/blob.svg";
import heart from "../static/heart.svg";
import fb from "../static/fb.svg"
import Jawedi from "../static/jawadiyassin.jpg";
import nouri from "../static/nourisalim.jpg";
import miss from "../static/missaoui.jpg";
import jbeli from "../static/jbeli.jpg";
import gaston from "../static/guesmi.jpg";
import baraa from "../static/baraa.jpg";
import mariem from "../static/mariem.jpg";
import pres from "../static/presa.jpg";
import rima from "../static/bargaoui.jpg";
import emna from "../static/emna.jpg";
import yakine from "../static/yakine.jpg";
// import svg1 from '../static/new_wave_57.76550661967117.svg'
export default function Home() {
	let hist = useHistory();

	const [commite1] = useState([
		{ name: "Yassin Jawedi", role: "chef c organisation", img: Jawedi },
		{ name: "Salim Nouri", role: "chef c art", img: nouri },
		{ name: "Wassim Missaoui", role: "chef c sponsoring", img: miss },
		{ name: "yassine Jbeli", role: "chef c media ", img: jbeli },
	]);
	const [commite2] = useState([
		{ name: "ghassen guesmi", role: "c relations externes", img: gaston },
		{ name: "baraa sghaier", role: "c relation interne", img: baraa },
		{ name: "Mariem riahi", role: "vice presidente", img: mariem },
		{ name: "Yassmine Missaoui", role: "presidente", img: pres },
	]);

	const [commite3] = useState([
		// { name: "Adem Maddouri", role: "chef protocole", img: "../static/" },
		{ name: "Rima Bargaoui", role: "tresoriere", img: rima },
		{ name: "Emna Boulaares", role: "secretaire", img: emna },
		{ name: "Yakine Ayari", role: "sec adjoint", img: yakine },
	]);
	return (
		<div className="home">
			<div className="intro">
				<div className="reveduc">
					<span className="rev">REV</span>
					<span className="educ">EDUC</span>
				</div>
			</div>
			{/* //////////////////////////////////////////////////////// */}
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
			{/* //////////////////////////////////////////////////////// */}
			<div className="membersdiv">
				<div className="commitee">
					{commite1.map((a, b) => {
						return (
							<div key={a.name} className="person">
								<img src={a.img} alt="" />
								<span className="name">{a.name}</span>
								<span className="role">{a.role}</span>
							</div>
						);
					})}
				</div>
				{/* <div className="title">MEET THE STAFF</div> */}
				<div className="commitee">
					{commite2.map((a, b) => {
						return (
							<div key={a.name} className="person">
								<img src={a.img} alt="" />
								<span className="name">{a.name}</span>
								<span>{a.role}</span>
							</div>
						);
					})}
				</div>
				{/*  */}
				<div className="commitee">
					{commite3.map((a, b) => {
						return (
							<div key={a.name} className="person">
								<img src={a.img} alt="" />
								<span className="name">{a.name}</span>
								<span>{a.role}</span>
							</div>
						);
					})}
				</div>
			</div>
			{/* //////////////////////////////////////////////////////// */}
			<div className="footer">
				{/* <img className="blob" src={svgblob} alt="" /> */}
				<div className="btn">
					<span onClick={()=>{
						hist.push('/join')
					}}>join us</span>
				</div>

				<div className="info">
					<div className="info2">
						<div className="social" onClick={()=>{
							window.location.href="https://www.facebook.com/Ambassadeurs-REV_Educ-Siliana-101778102029237"
						}} ><img src={fb} alt=""/></div>
						<div onClick={()=>{
							window.location.href = 'https://github.com/dhaouiaziz13'
						}} className="credits">
							{" "}
							<span>coded with</span>
							<img src={heart} alt="" />
						</div>
					</div>
				</div>
			</div>
			{/* //////////////////////////////////////////////////////// */}
		</div>
	);
}
