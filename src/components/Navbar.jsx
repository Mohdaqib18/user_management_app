import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
	return (
		<div className="bg-white h-14  flex items-center">
			<div className=" flex justify-between items-center  mx-[50px] w-full">
				<div className="flex justify-between items-center  w-[170px] ">
					<img src={logo} className="w-8" />
					<h1 className="font text-[#2947A9] font-bold text-[20px]">Green Earth</h1>
				</div>
				<div>
					<nav>
						<ul className="flex justify-between w-[450px] font-[500]">
							<li>Home</li>
							<li>About us</li>
							<li>Projects</li>
							<li>Services</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
