import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
	return (
		<div className="min-h-screen">
			<div>
				<Navbar />
				<Hero />
			</div>
		</div>
	);
}

export default App;
