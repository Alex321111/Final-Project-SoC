import { render, fireEvent } from "@testing-library/react";
import HomeCard from "./HomeCard";
import supabase from "../utils/supabase";

jest.mock("../utils/supabase");

test("handleSignUp is not called when an unauthenticated user clicks the sign up button", async () => {
	// Mock the supabase insert method
	const insertMock = jest.fn();
	supabase.from.mockReturnValue({ insert: insertMock });

	// Mock the supabase auth object to represent an unauthenticated user
	supabase.auth = {
		user: null,
		onAuthStateChange: jest.fn().mockReturnValue({ data: "mock-data" }),
	};

	// Render the HomeCard component
	const { getByText } = render(<HomeCard />);

	// Find the sign up button
	const signUpButton = getByText("Sign Up");

	// Click the sign up button
	fireEvent.click(signUpButton);

	// Check if supabase.from was not called
	expect(supabase.from).not.toHaveBeenCalled();

	// Check if insert was not called
	expect(insertMock).not.toHaveBeenCalled();
});
