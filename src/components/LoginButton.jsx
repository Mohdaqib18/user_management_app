import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	const handleLogin = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: "/profile",
			},
		});
	};

	return (
		<button
			className="bg-[#faa307]  rounded-[100px] font-[600] text-[40px] p-[10px] mt-10 text-white w-[250px]"
			onClick={handleLogin}
		>
			Log In
		</button>
	);
};
