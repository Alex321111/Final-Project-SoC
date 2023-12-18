import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import supabase from "../utils/supabase";
// import { useEffect } from 'react';
// const styleName = 'gridy';
// function RandomAvatar() {
//   const [avatarUrl, setAvatarUrl] = useState('');
//   useEffect(() => {
//     const seed = Math.random().toString(36).substring(7);
//     const apiUrl = `https://api.dicebear.com/7.x/croodles/svg?backgroundColor=b6e3f4,c0aede,d1d4f9`;
//     fetch(apiUrl)
//       .then((response) => response.text())
//       .then((data) => setAvatarUrl(data))
//       .catch((error) => console.error('Error fetching avatar:', error));
//   }, [styleName]);
//   return <img src={avatarUrl} alt="Random avatar" />;
//
const CustomAvatar = ({
	variant = "beam",
	size = 100,
	username = "Mary",
	color1 = "6E6CD5",
	color2 = "61B4FB",
	color3 = "847AEE",
	color4 = "2A153B",
	color5 = "FFB238",
}) => {
	const [user, setUser] = useState(null);
	const [avatarKey, setAvatarKey] = useState(0);
	const [points, setPoints] = useState(null);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				const currentUser = session?.user;
				setUser(currentUser);
				setPoints(currentUser?.user_metadata?.hack_points || "");
			}
		);
	}, []);
	useEffect(() => {
		if (user) {
			displayPoints();
		}
	}, [user]);
	const displayPoints = async () => {
		setLoading(true);
		const { data, error } = await supabase
			.from("user_profiles")
			.select("hack_points")
			.eq("id", user.id);
		if (error) {
			console.error(error);
		} else {
			// Set the points state variable with the result
			setPoints(data[0].hack_points);
			setLoading(false);
		}
	};
	const generateNewAvatar = () => {
		setAvatarKey((prevKey) => prevKey + 1);
	};
	const avatarUrl = `https://source.boringavatars.com/${variant}/${size}/${encodeURIComponent(
		username
	)}?colors=${color1},${color2},${color3},${color4},${color5}`;
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				backgroundColor: "black",
				borderRadius: "50px", // This will give the div a stadium shape
				border: "2px solid lightblue", // This will give the div a thin light blue outer border
				padding: "10px", // Add some padding to separate the circles from the border
				//borderRadius: '5vw',  Use vw for responsive border radius
				//border: '0.2vw solid lightblue',  Use vw for responsive border
				//padding: '1vw'  Use vw for responsive padding
			}}>
			<img
				key={avatarKey}
				src={avatarUrl}
				alt={`Avatar for ${username}`}
				style={{
					borderRadius: "50%",
					width: `${size}px`,
					height: `${size}px`,
					marginRight: "10px",
				}}
			/>
			<div
				className="text-white"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					border: "2px solid white",
					color: "white",
					borderRadius: "50%",
					width: `${size}px`,
					height: `${size}px`,
					fontFamily: "Impact, sans-serif",
					boxShadow:
						"0 0 10px #FF0000, 0 0 20px #FF0000, 0 0 30px #FF0000, 0 0 40px #FF0000",
					background: "transparent",
				}}>
				<p
					style={{
						textShadow:
							"0 0 5px #FF0000, 0 0 10px #FF0000 0 0 15px #FF0000, 0 0 20px #FF0000",
					}}>
					{points}
				</p>
			</div>
		</div>
	);
};
export default CustomAvatar;
// button to generate new avatar test
/*<button type="button" onClick={generateNewAvatar}>
Generate new avatar
</button>;
*/
