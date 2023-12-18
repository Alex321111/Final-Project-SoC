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

	/*const teamIds = await Promise.all(
		mentorsData.map(async (mentor) => {
			//console.log("Processing mentor:", mentor);
			const { data: team, error } = await supabase
				.from("all_teams")
				.insert([{ user_id: mentor.user_id, team_id: team.indexOf(mentor)}])
				.single();
			if (error) {
				console.error("Error inserting team: ", error);
			}
			return team.team_id;
		}) 
	);*/


    const teamIds = await Promise.all(
        mentorsData.map(async (mentor, index) => {
          console.log("Processing mentor:", mentor);
          const teamId = index + 1; // Generate a new teamId starting from 1
          const { data: team, error } = await supabase
            .from("all_teams")
            .insert([{ user_id: mentor.user_id, team_id: teamId }])
            .single();
          if (error) {
            console.error("Error inserting team: ", error);
          }
          return teamId; // Return the generated teamId
        })
      );


    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }
      // Shuffle the nonmentorsData array
      let shuffledNonmentorsData = shuffle(nonmentorsData);
      for (let i = 0; i < shuffledNonmentorsData.length; i++) {
        const teamId = teamIds[i % teamIds.length];
        const { error } = await supabase
          .from("all_teams")
          .insert({ user_id: shuffledNonmentorsData[i].user_id, team_id: teamId });
        if (error) {
          console.error("Error inserting team member: ", error);
        }









	// Assign non-mentors to teams in a round-robin fashion
	/*for (let i = 0; i < nonMentors.length; i++) {
	 	const teamId = teamIds[i % teamIds.length];
	 	const { error } = await supabase
	 		.from("all_teams")
	 		.update({ team_id: teamId })
	 		.eq("user_id", nonMentors[i].id);
	 	if (error) {
	 		console.error("Error updating team_id: ", error);
	 	}
	 }*/


     //put in all the people
     /*for (let i = 0; i < nonmentorsData.length; i++) {
        const teamId = teamIds[i % teamIds.length];
        const { error } = await supabase
          .from("all_teams")
          .insert({ user_id: nonmentorsData[i].user_id, team_id: teamId })
          .eq("user_id", nonmentorsData[i].id);
        if (error) {
          console.error("Error inserting team member: ", error);
        }
      }*/

     /* for (let i = 0; i < nonmentorsData.length; i++) {
        const teamId = teamIds[i % teamIds.length];
        const { error } = await supabase
          .from("all_teams")
          .insert({ user_id: nonmentorsData[i].user_id, team_id: teamId })
          .update({ team_id: teamId })
          .eq("user_id", nonmentorsData[i].id);
        if (error) {
          console.error("Error inserting team member: ", error);
        }
      }*/

	// createTeams().catch(console.error);
}
}
export default createTeams;
