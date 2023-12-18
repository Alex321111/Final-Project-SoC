import supabase from "../utils/supabase";
import React from "react";

async function createTeams() {
	console.log("createTeams called");
	// Fetch mentors and non-mentors
	// let { data: mentors, error: mentorsError } = await supabase.rpc(
	// 	"get_mentors"
	// );
	// if (mentorsError) {
	// 	console.error("Error fetching mentors: ", mentorsError);
	// 	return;
	// }
	// console.log(mentors);

	let { data: mentorsData, error: mentorsError } = await supabase.rpc(
		"get_mentors"
	);
	if (mentorsError) {
		console.error("Error calling get_mentors:", mentorsErrorrror);
		return;
	}

	let { data: nonmentorsData, error: nonmentorsError } = await supabase.rpc(
		"get_nonmentors"
	);
	if (nonmentorsError) {
		console.error("Error calling get_mentors:", nonmentorsError);
		return;
	}

	console.log("get_mentors returned:", mentorsData);
	console.log("get_nonmentors returned:", nonmentorsData);

	// data.forEach((mentor) => {
	// 	let userId = mentor.user_id;
	// 	let roleDescription = mentor.role_description;
	// 	console.log(mentor);
	// Use userId and roleDescription in your team forming functions
	// });

	// const { data: nonMentors, error: nonMentorsError } = await supabase.rpc(
	// 	"get_nonmentors"
	// );
	// if (nonMentorsError) {
	// 	console.error("Error fetching non-mentors: ", nonMentorsError);
	// 	return;
	// }
	// console.log("Mentors:", mentors);
	// console.log("Non-mentors:", nonMentors);

	// const teamIds = await Promise.all(
	// 	mentors.map(async (mentor) => {
	// 		console.log("Processing mentor:", mentor);
	// 		const { data: team, error } = await supabase
	// 			.from("all_teams")
	// 			.insert([{ user_id: mentor.id }]);
	// 		console.log(mentor.id).single();
	// 		if (error) {
	// 			console.error("Error inserting team: ", error);
	// 			return;
	// 		}
	// 		return team.id;
	// 	})
	// );
	// Assign non-mentors to teams in a round-robin fashion
	// for (let i = 0; i < nonMentors.length; i++) {
	// 	const teamId = teamIds[i % teamIds.length];
	// 	const { error } = await supabase
	// 		.from("all_teams")
	// 		.update({ team_id: teamId })
	// 		.eq("user_id", nonMentors[i].id);
	// 	if (error) {
	// 		console.error("Error updating team_id: ", error);
	// 	}
	// }

	// createTeams().catch(console.error);
}
export default createTeams;
