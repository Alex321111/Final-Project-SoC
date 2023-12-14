"use client";
import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase";

function AccountForm() {
	const [user, setUser] = useState(null);
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [skills, setSkills] = useState("");
	const [roleDescription, setRoleDescription] = useState("");
	const [github, setGithub] = useState("");
	const [linkedIn, setLinkedIn] = useState("");
	const [aboutMe, setAboutMe] = useState("");
	const [loading, setLoading] = useState(false); // Set initial loading state to false

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				const currentUser = session?.user;
				setUser(currentUser);
				setName(currentUser?.user_metadata?.name || "");
				setUsername(currentUser?.user_metadata?.username || "");
				setSkills(currentUser?.user_metadata?.skills || "");
				setRoleDescription(currentUser?.user_metadata?.role_description || "");
				setGithub(currentUser?.user_metadata?.github_link || "");
				setLinkedIn(currentUser?.user_metadata?.linkedin_link || "");
				setAboutMe(currentUser?.user_metadata?.about_me || "");
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

	const handleSkillsChange = (e) => {
		setSkills(e.target.value);
	};

	const handleRoleChange = (e) => {
		setRoleDescription(e.target.value);
	};

	const handleGithubChange = (e) => {
		setGithub(e.target.value);
	};

	const handleLinkedInChange = (e) => {
		setLinkedIn(e.target.value);
	};

	const handleAboutMeChange = (e) => {
		setAboutMe(e.target.value);
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
				skills: skills,
				role_description: roleDescription,
				github_link: github,
				linkedin_link: linkedIn,
				about_me: aboutMe,
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
			<input
				type="text"
				value={skills}
				onChange={handleSkillsChange}
				placeholder="Skills"
			/>
			<div>
				<label htmlFor="role_description">Role</label>
				<select
					className="block relative w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
					value={roleDescription}
					onChange={handleRoleChange}
					id="role_desciption"
					name="role_desciption">
					<option value="bootcamper">bootcamper</option>
					<option value="exbootcamper">exbootcamper</option>
					<option value="mentor">mentor</option>
				</select>
			</div>
			<input
				type="text"
				value={github}
				onChange={handleGithubChange}
				placeholder="Github"
			/>
			<input
				type="text"
				value={linkedIn}
				onChange={handleLinkedInChange}
				placeholder="LinkedIn"
			/>
			<input
				type="text"
				value={aboutMe}
				onChange={handleAboutMeChange}
				placeholder="About Me"
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
