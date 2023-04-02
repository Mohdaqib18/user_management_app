import React from "react";
import logo from "../assets/logo.png";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
	const { isAuthenticated } = useAuth0();
	return (
		<div className="bg-white md:h-14 sm:h-20 flex sm:items-center  xs:h-[150px] xs:my-5">
			<div className=" flex  justify-between items-center sm:h-14  sm:mx-[50px] w-full md:flex-row sm:flex-col xs:flex-col xs:mx-0  ">
				<div className="flex justify-between items-center w-[170px]">
					<img src={logo} className="w-8" />
					<h1 className="font text-[#2947A9] font-bold text-[20px]">
						Green Earth
					</h1>
				</div>
				<div>
					<nav >
						<ul className="flex justify-between sm:w-[400px] font-[500] sm:flex-row xs:flex-col xs:w-[100%] xs:items-center sm:ml-5 sm:mt-2">
							<li>Home</li>
							<li>About us</li>
							<li>Projects</li>
							<li>Services</li>
							<li>
								{isAuthenticated && (
									<>
										<LogoutButton />
									</>
								)}
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
