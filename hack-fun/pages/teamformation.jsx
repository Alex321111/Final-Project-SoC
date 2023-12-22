import React from "react";
import createTeams from "../src/app/components/teamformation";
const handleClick = async () => {
	await createTeams();
};

export default function teamformation() {
	return (
		<div>
			<div>
				<h1>Create Teams</h1>
				<button onClick={handleClick}>Create Teams</button>
			</div>
		</div>
	);
}
