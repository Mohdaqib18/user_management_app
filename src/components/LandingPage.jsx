import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

const LandingPage = () => {
	return (
		<div className="overflow-hidden" >
			<Navbar />

			<Hero />
		</div>
	);
};

export default LandingPage;
