import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase";

const ChatRoom = () => {
	const [user, setUser] = useState(null);
	const [newMessage, setNewMessage] = useState("");
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				const currentUser = session?.user;
				setUser(currentUser);
			}
		);

		// return () => {
		// 	authListener.unsubscribe();
		// };
	}, []);

	useEffect(() => {
		fetchMessages();
	}, []);

	const fetchMessages = async () => {
		const { data, error } = await supabase.from("general_chat").select("*");
		if (error) console.error("Error fetching messages: ", error);
		else setMessages(data);
	};

	const handleNewMessageChange = (event) => {
		setNewMessage(event.target.value);
	};

	const handleNewMessage = async (event) => {
		event.preventDefault();

		if (newMessage.trim() === "") return;

		if (user) {
			const { data, error } = await supabase
				.from("general_chat")
				.insert([{ message_content: newMessage, user_id: user.id }]);

			if (error) {
				console.error("Error inserting message: ", error);
			} else {
				setNewMessage("");
				fetchMessages();
			}
		}
	};

	return (
		<div>
			<ul>
				{messages.map((message, index) => (
					<li key={index}>
						<p>
							<strong>{message.username}</strong>: {message.message_content}
						</p>
						<p>{new Date(message.created_at).toLocaleString()}</p>
					</li>
				))}
			</ul>
			<form onSubmit={handleNewMessage}>
				<input
					type="text"
					value={newMessage}
					onChange={handleNewMessageChange}
					placeholder="Type your message here..."
				/>
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default ChatRoom;
