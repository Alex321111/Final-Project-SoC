import { render, fireEvent, act } from "@testing-library/react";
import HomeCard from "./HomeCard";
import supabase from "../utils/supabase";

jest.mock("../utils/supabase");

test("handleSignUp is called when the sign up button is clicked", async () => {
	// Mock the supabase insert method
	const insertMock = jest.fn().mockResolvedValue({ data: {}, error: null });
	supabase.from.mockReturnValue({ insert: insertMock });

	// Mock the supabase auth object
	supabase.auth = {
		user: {
			id: "9f5bda9b-25e6-43cc-a6c0-c3d80a65bb64", // Mock user id
			// Add other properties as needed
		},
		onAuthStateChange: jest.fn().mockImplementation((callback) => {
			callback("SIGNED_IN", { user: supabase.auth.user });
			return { data: "mock-data" };
		}),
	};

	// Render the HomeCard component
	const { getByText } = render(<HomeCard />);

	// Find the sign up button
	const signUpButton = getByText("Sign Up");

	// Click the sign up button
	await act(async () => {
		fireEvent.click(signUpButton);
	});

	// Check if supabase.from was called with 'hackathon_sign_up'
	expect(supabase.from).toHaveBeenCalledWith("hackathon_sign_up");

	// Check if insert was called with the mock user id
	expect(insertMock).toHaveBeenCalledWith([
		{
			user_id: "9f5bda9b-25e6-43cc-a6c0-c3d80a65bb64",
			brief_name: "Test Brief",
		},
	]);
});
