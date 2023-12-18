import supabase from "../utils/supabase";
import React from "react";

async function createTeams() {
	// Fetch mentors and non-mentors
	const { data: mentors, error: mentorsError } = await supabase.rpc(
		"get_mentors"
	);
	if (mentorsError) {
		console.error("Error fetching mentors: ", mentorsError);
		return;
	}

	const { data: nonMentors, error: nonMentorsError } = await supabase.rpc(
		"get_nonmentors"
	);
	if (nonMentorsError) {
		console.error("Error fetching non-mentors: ", nonMentorsError);
		return;
	}
	// Create a team for each mentor and store the team ids
	const teamIds = await Promise.all(
		mentors.map(async (mentor) => {
			const { data: team, error } = await supabase
				.from("all_teams")
				.insert([{ user_id: mentor.id }]);
			console.log(mentor.id).single();
			if (error) {
				console.error("Error inserting team: ", error);
				return;
			}
			return team.id;
		})
	);
	// Assign non-mentors to teams in a round-robin fashion
	for (let i = 0; i < nonMentors.length; i++) {
		const teamId = teamIds[i % teamIds.length];
		const { error } = await supabase
			.from("all_teams")
			.update({ team_id: teamId })
			.eq("user_id", nonMentors[i].id);
		if (error) {
			console.error("Error updating team_id: ", error);
		}
	}

	createTeams().catch(console.error);
}
export default createTeams;
