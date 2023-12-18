import React, { useState, useEffect } from "react";
import ProjectImg from "../components/project-brief.png";
import SocLogo from "../components/take-three.png";
import Link from "next/link";
import Image from "next/image";
import supabase from "../utils/supabase";
const HomeCard = () => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				const currentUser = session?.user;
				setUser(currentUser);
			}
		);
		// Cleanup function
		// return () => {
		// 	authListener.unsubscribe();
		// };
	}, []);
	const handleSignUp = async () => {
		if (user) {
			const { data, error } = await supabase
				.from("hackathon_sign_up")
				.insert([{ user_id: user.id, brief_name: "Test Brief" }]);
			if (error) console.error(error);
		} else {
			console.error("User is not authenticated");
		}
	};
	return (
		<section>
			<div className="bg-dark-2  p-10 m-10 shadow-lg rounded-lg shadow-lg">
				<Image
					className="project-img"
					width={580}
					height={20}
					src={ProjectImg}
				/>
				<div className="p-6">
					<h2 className="font-bold mb-2 text-2xl text-blue-800">
						Take part in this months Hackathon
					</h2>
					<p className="text-blue-700 mb-2"></p>
					<a
						href="#"
						className="text-blue-600 hover:text-blue-500 underline text-sm">
						Read More
					</a>
				</div>
				<button
					onClick={handleSignUp}
					class="w-full rounded border-solid border-white border bg-blue-900 shadow-lg shadow-blue-500/50 py-1 px-3 mt-4" type="submit">
					Sign Up
				</button>
			</div>
		</section>
	);
};
export default HomeCard;
