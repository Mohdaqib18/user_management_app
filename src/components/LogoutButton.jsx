import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
	const { logout, isAuthenticated } = useAuth0();
	return (
		isAuthenticated && (
			<button
				className="bg-[#8999df] border rounded-lg w-[100px] py-1 text-white"
				onClick={() =>
					logout({ logoutParams: { returnTo: window.location.origin } })
				}
			>
				Logout
			</button>
		)
	);
};

export default LogoutButton;
