"use client";
import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase";

function AccountForm() {
	const [user, setUser] = useState(null);
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [loading, setLoading] = useState(false); // Set initial loading state to false

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				const currentUser = session?.user;
				setUser(currentUser);
				setName(currentUser?.user_metadata?.name || "");
				setUsername(currentUser?.user_metadata?.username || "");
			}
		);

		return () => {
			authListener.unsubscribe();
		};
	}, []);

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handleSave = async () => {
		setLoading(true);
		console.log(user.id); // Debug log
		console.log(name, username); // Debug log
		const { error } = await supabase
			.from("user_profiles")
			.update({
				name: name,
				username: username,
			})
			.eq("id", user.id);
		if (error) {
			console.error(error);
		} else setLoading(false);
	};

	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={handleNameChange}
				placeholder="Full Name"
			/>
			<input
				type="text"
				value={username}
				onChange={handleUsernameChange}
				placeholder="Username"
			/>
			<button
				onClick={handleSave}
				disabled={loading}>
				Save
			</button>
		</div>
	);
}

export default AccountForm;
