import React from "react";
import { LoginButton } from "../components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const Hero = () => {
	const { isAuthenticated } = useAuth0();
	const { isLoading } = useAuth0();
	return (
		<div>
			<div className="bg-hero-img bg-cover sm:h-[100vh] p-10 xs:text-[50px] xs:bg-center xs:h-[470px]">
				<p className="text-white font-[600] sm:text-[50px] lg:text-[70px] text-[#16DB93] xs:text-[40px]">
					Offset your
				</p>
				<p className="text-white  font-[600] sm:text-[50px]  lg:text-[70px] xs:text-[40px]">
					carbon footprint now
				</p>

				{!isAuthenticated && !isLoading && (
					<div className="flex lg:flex-row lg:justify-start xs:flex-col xs:justify-between xs:items-center">
						<LoginButton name="Log in" route="/profile" />
						<LoginButton name="Admin Login" route="/admin" />
					</div>
				)}
			</div>
		</div>
	);
};

export default Hero;
