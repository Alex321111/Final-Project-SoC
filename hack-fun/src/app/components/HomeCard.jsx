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
		return () => {
			authListener.unsubscribe();
		};
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
					<h2 className="font-bold mb-2 text-2xl text-purple-800">
						Take part in this month&aposs project
					</h2>
					<p className="text-purple-700 mb-2"></p>
					<a
						href="#"
						className="text-purple-600 hover:text-purple-500 underline text-sm">
						Read More :point_right:
					</a>
				</div>
				<button
					onClick={handleSignUp}
					className="text-purple-600 hover:text-purple-500 underline text-sm">
					Sign Up :point_right:
				</button>
			</div>
		</section>
	);
};
export default HomeCard;
