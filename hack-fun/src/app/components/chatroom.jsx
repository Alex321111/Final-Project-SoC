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

		const generalChat = supabase
			.channel("custom-insert-channel")
			.on(
				"postgres_changes",
				{ event: "INSERT", schema: "public", table: "general_chat" },
				(payload) => {
					console.log("Change received!", payload);
					setMessages((prevMessages) => [...prevMessages, payload.new]);
				}
			)
			.subscribe();

		// return () => {
		// 	supabase.removeSubscription(generalChat);
		// };
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
			}
		}
	};

	// 	return (
	// 		<div>
	// 			<ul>
	// 				{messages.map((message, index) => (
	// 					<li key={index}>
	// 						<p>
	// 							<strong>{message.username}</strong>: {message.message_content}
	// 						</p>
	// 						<p>{new Date(message.created_at).toLocaleString()}</p>
	// 					</li>
	// 				))}
	// 			</ul>
	// 			<form onSubmit={handleNewMessage}>
	// 				<input
	// 					type="text"
	// 					value={newMessage}
	// 					onChange={handleNewMessageChange}
	// 					placeholder="Type your message here..."
	// 				/>
	// 				<button type="submit">Send</button>
	// 			</form>
	// 		</div>
	// 	);
	// };

	//example 2

	return (
		<div className="bg-dark-2  h-screen flex justify flex-col">
			<div className="flex-1 overflow-y-auto p-4">
				<ul className="space-y-4">
					{messages.map((message, index) => (
						<li
							key={index}
							className="flex flex-col">
							<div className="flex items-center justify-end mb-1">
								<span className="text-gray-600 mr-2">{message.username}</span>
								<span className="text-xs text-gray-400">
									{new Date(message.created_at).toLocaleString()}
								</span>
							</div>
							<div className="flex items-center justify-end">
								<div className="bg-white p-4 rounded shadow">
									<p className="text-gray-800">{message.message_content}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
			<form onSubmit={handleNewMessage}>
				<div className="flex items-center justify-end">
					<input
						type="text"
						value={newMessage}
						onChange={handleNewMessageChange}
						placeholder="Type your message here..."
						className="flex-1 border p-2 rounded-l focus:outline-none"
					/>
					<button
						type="submit"
						className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600 focus:outline-none">
						Send
					</button>
				</div>
			</form>
		</div>
	);
};

export default ChatRoom;
