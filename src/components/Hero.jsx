import React from "react";

const Hero = () => {
	return (
		<div>
			<div className="bg-hero-img bg-cover h-[100vh] p-10">
				<p className="text-white font-[600] text-[100px] text-[#16DB93]">
					Offset your
				</p>
				<p className="text-white  font-[600] text-[100px]">carbon footprint now</p>
				<button className="bg-[#faa307]  rounded-[100px] font-[600] text-[40px] p-[10px] mt-10 text-white w-[250px]">
					Sign In
				</button>
			</div>
		</div>
	);
};

export default Hero;
