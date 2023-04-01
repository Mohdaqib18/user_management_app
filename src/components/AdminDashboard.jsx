import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
	const [users, setUsers] = useState([]);
	const { user, isAuthenticated } = useAuth0();

	console.log(user?.["http://localhost:3000/user_roles"]);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		await fetch("http://localhost:8000/users")
			.then((res) => res.json())
			.then((data) => {
				setUsers(data.result);
			});
	};

	return (
		// Render the list of users
		isAuthenticated &&
			user?.["http://localhost:3000/user_roles"] === "admin" ? (
			<div className="flex flex-col items-center justify-center border h-[100vh] gap-5">
				<h1 className="text-[#f14593] underline">
					Management API for listing all users consumed
				</h1>
				<h1 className="text-[green] font-bold text-[23px]">User List</h1>

				<ul>
					{users.map((user) => (
						<li key={user.user_id} className="text-[#2e7f8b]">
							{user.name}
						</li>
					))}
				</ul>
				<h1 className="text-[orange] font-bold text-[20px]">
					No. of users: {users.length}
				</h1>
				<LogoutButton />
			</div>
		) : (
			<>
				<div className="h-[100vh] flex flex-col items-center justify-center font-bold text-[25px]">
					<div>
				
						You've been logged in but you are not authorized to view this page
					</div>

					<div className="border rounded-2xl bg-orange-600 p-5 mt-3">
						<Link to="/">Go to home page</Link>
					</div>
				</div>
			</>
		)
	);
};

export default AdminDashboard;
