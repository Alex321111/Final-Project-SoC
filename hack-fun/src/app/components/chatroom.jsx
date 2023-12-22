import { useEffect } from "react";
import supabase from "../utils/supabase";
import CustomAvatar from "./Avatar";
import AvatarUnmodified from "./AvatarUnmodified";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleStop,
  faComments,
  faListCheck,
  faDiagramProject,
  faUser,
  faRightFromBracket,
  faPowerOff,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
const ChatRoom = ({ userName }) => {
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
    //  authListener.unsubscribe();
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
    //  supabase.removeSubscription(generalChat);
    // };
  }, []);
  /*    const fetchMessages = async () => {
        const { data, error } = await supabase
        .from("general_chat")
        .select("*");
        if (error) console.error("Error fetching messages: ", error);
        else setMessages(data);
    };*/
  const fetchMessages = async () => {
		const { data, error } = await supabase
			.from("general_chat")
			.select("*, user_profiles: user_id(username)")
			.is("team_id", null);

		if (error) {
			console.error("Error fetching messages: ", error);
		} else {
			setMessages(data);
		}
	};

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };
  const handleNewMessage = async (event) => {
    event.preventDefault();
    if (newMessage.trim() === "") return;
    if (user) {
      const { data, error } = await supabase.from("general_chat").insert([
        {
          message_content: newMessage,
          user_id: user.id,
        },
      ]);
      if (error) {
        console.error("Error inserting message: ", error);
      } else {
        setNewMessage("");
      }
    }
  };
  //    return (
  //        <div>
  //            <ul>
  //                {messages.map((message, index) => (
  //                    <li key={index}>
  //                        <p>
  //                            <strong>{message.username}</strong>: {message.message_content}
  //                        </p>
  //                        <p>{new Date(message.created_at).toLocaleString()}</p>
  //                    </li>
  //                ))}
  //            </ul>
  //            <form onSubmit={handleNewMessage}>
  //                <input
  //                    type="text"
  //                    value={newMessage}
  //                    onChange={handleNewMessageChange}
  //                    placeholder="Type your message here..."
  //                />
  //                <button type="submit">Send</button>
  //            </form>
  //        </div>
  //    );
  // };
  //example 2
 return (
		<div className="flex flex-col w-full flex-auto h-full p-6">
			<div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-dark-1 h-full p-4">
				<div className="flex flex-col h-full overflow-x-auto mb-4">
					<div className="flex flex-col h-full">
						<ul className="grid grid-cols-1 w-100% gap-y-2">
							{messages.map((message, index) => (
								<li
									key={index}
									className={`flex ${
										message.sentByCurrentUser ? "justify-end" : "justify-start"
									}`}>
									{!message.sentByCurrentUser && (
										<div className="flex items-center">
											<CustomAvatar
												size={30}
												variant="beam"
												username={message.user_profiles.username}
											/>
											<span className="text-white-600 ml-2">
												{message.user_profiles.username}
											</span>
										</div>
									)}
									<div className="flex flex-col">
										<div className="flex items-center mb-1">
											<span className="text-xs text-gray-400">
												<p></p>
												{new Date(message.created_at).toLocaleString()}
											</span>
										</div>
										<div
											className={`flex items-center ${
												message.sentByCurrentUser
													? "justify-center"
													: "justify-start"
											}`}>
											<div className="bg-white p-4 rounded shadow">
												<p className="text-black">{message.message_content}</p>
											</div>
										</div>
									</div>
									{message.sentByCurrentUser && (
										<div className="flex items-center ml-2">
											<AvatarUnmodified size={20} />
											<span className="text-gray-600 ml-2">
												{message.username}
											</span>
										</div>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="flex flex-row  mb-7 items-center">
					<div className="flex-grow ml-4">
						<div className="relative w-full">
							<form onSubmit={handleNewMessage}>
								<div className="bg-dark-2 p-3 flex items-center justify-between">
									<input
										type="text"
										value={newMessage}
										onChange={handleNewMessageChange}
										placeholder="Type your message here..."
										className="flex-grow h-10 rounded px-3 text-sm"
									/>
									<button
										type="submit"
										className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">
										Send
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ChatRoom;
