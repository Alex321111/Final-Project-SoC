import { render, act } from "@testing-library/react";
import ChatRoom from "../src/app/components/chatroom";

it("ChatRoom: Renders correctly", async () => {
	let container;
	await act(async () => {
		const result = render(<ChatRoom />);
		container = result.container;
	});
	expect(container).toBeInTheDocument();
});
