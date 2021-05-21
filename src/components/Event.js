import { React, useState } from "react";

import Navbar from "./navbar";
import "./event.css";
const Event = () => {
	const [show, setshow] = useState(false);
	const [data, setData] = useState();
	let events = [
		{
			img: "https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?width=700&crop=2:1",
			name: "Event name",
			desc: "event description",
			data: { desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, orci dignissim tincidunt pellentesque, elit urna sodales lorem, eget ultricies magna nisi id libero", img: "https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?width=700&crop=2:1" },
		},	{
			img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
			name: "Event name",
			desc: "event description",
			data: { desc: " magna nisi id libero", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80" },
		},	{
			img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
			name: "Event name",
			desc: "event description",
			data: { desc: " magna nisi id libero Lorem ipsum dolor sit amet ", img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" },
		},{
			img: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
			name: "Event name",
			desc: "event description",
			data: { desc: " magna nisi id libero Lorem ipsum dolor sit amet ", img: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" },
		},
		
	];
	return (
		<div>
			<Navbar />
			{!show ? (
				<div className="card-cont">
					{events.map((item, i) => {
						return (
							<div
								onClick={() => {
									setData(item.data);
									setshow(true);
								}}
								key={i}
								className="card"
							>
								<img src={item.img} alt="Avatar" />
								<div className="container">
									<span>{item.name}</span>
									<p>{item.desc}</p>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div className="popup">
                    <span onClick={()=>{
                        setshow(false)
                    }} className="close">&#10006;</span>
                    <div className="contev">
                        <div className="image">
                            <img src={data.img} alt=""/>
                        </div>
                        <div className="text">
                            {data.desc}
                        </div>
                    </div>
                </div>
			)}
		</div>
	);
};

export default Event;
