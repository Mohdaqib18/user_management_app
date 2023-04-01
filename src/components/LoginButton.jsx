import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton = ({name, route}) => {
	const { loginWithRedirect } = useAuth0();

	const handleLogin = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: route,
			},
		});
	};

	return (
		<button
			className="bg-[#faa307]  rounded-[100px] font-[600] text-[40px] p-[10px] mt-10 text-white w-[280px] mx-5"
			onClick={handleLogin}
		>
		{name}
		</button>
	);
};
