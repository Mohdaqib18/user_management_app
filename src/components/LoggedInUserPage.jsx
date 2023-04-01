import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "./LogoutButton";

const LoggedInUserPage = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}
	// if (!isAuthenticated) {
	// 	window.location.href = "http://localhost:5174";
	// }
	return (
		isAuthenticated && (
			<div className="h-[100vh] border-[2px] border-x-pink-950 flex items-center justify-center">
				<div className="flex flex-col">
					<img src={user.picture} alt={user.name} />
					<h2 className="mb-4 text-center">{user.name}</h2>
					<LogoutButton />
				</div>
			</div>
		)
	);
};

export default LoggedInUserPage;
