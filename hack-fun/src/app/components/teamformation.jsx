import supabase from "../utils/supabase";
import React from 'react';


async function createTeams() {
    // Fetch mentors and non-mentors
    const { data: mentors } = await supabase
        .from('hackathon_sign_up')
        .select('hackathon_sign_up.*, user_profiles.role_description')
        .eq('user_profiles.role_description', 'mentor')
        .innerJoin('user_profiles', 'user_id');
    const { data: nonMentors } = await supabase
        .from('hackathon_sign_up')
        .select('hackathon_sign_up.*, user_profiles.role_description')
        .neq('user_profiles.role_description', 'mentor')
        .innerJoin('user_profiles', 'user_id');
    // Create a team for each mentor and store the team ids
    const teamIds = await Promise.all(mentors.map(async (mentor) => {
        const { data: team, error } = await supabase
            .from('all_teams')
            .insert([{ mentor_id: mentor.user_id }])
            .single();
        if (error) {
            console.error('Error inserting team: ', error);
            return;
        }
        return team.id;
    }));
    // Assign non-mentors to teams in a round-robin fashion
    for (let i = 0; i < nonMentors.length; i++) {
        const teamId = teamIds[i % teamIds.length];
        const { error } = await supabase
            .from('all_teams')
            .update({ team_id: teamId })
            .eq('user_id', nonMentors[i].user_id);
        if (error) {
            console.error('Error updating team_id: ', error);
        }
    }

createTeams().catch(console.error);
};
export default createTeams;