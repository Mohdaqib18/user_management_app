import React from "react";
import { LoginButton } from "../components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const Hero = () => {
	const { isAuthenticated } = useAuth0();
	const { isLoading } = useAuth0();
	return (
		<div>
			<div className="bg-hero-img bg-cover h-[100vh] p-10">
				<p className="text-white font-[600] text-[100px] text-[#16DB93]">
					Offset your
				</p>
				<p className="text-white  font-[600] text-[100px]">
					carbon footprint now
				</p>

				{!isAuthenticated && !isLoading && (
					<>
						<LoginButton name="Log in" route="/profile"/>
						<LoginButton name="Admin Login" route="/admin" />
					</>
				)}
			</div>
		</div>
	);
};

export default Hero;
