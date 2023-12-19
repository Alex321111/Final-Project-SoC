import React, { useEffect, useState } from 'react';
import  supabase  from '../utils/supabase';
// Function to fetch team ID

/*async function fetchTeamId(userId) {
  const { data, error } = await supabase
    .from('all_teams')
    .select('team_id')
    .eq('user_id', userId)
    .single();
  if (error) {
    console.error('Error fetching team ID:', error);
    return;
  }
  return data.team_id;
}
// Function to post a message
async function postMessage(newMessage, teamId) {
  const { error } = await supabase
    .from('general_chat')
    .insert([
      { message_content: newMessage, team_id: teamId },
    ]);
  if (error) {
    console.error('Error posting message:', error);
  }
}
// Function to fetch team messages
async function fetchTeamMessages(teamId) {
  let { data: messages, error } = await supabase
    .from('general_chat')
    .select('*')
    .eq('team_id', teamId);
  if (error) {
    console.error('Error fetching team messages:', error);
    return;
  }
  return messages;
}*/
// ChatRoom component

/*const TeamChatRoom = () => {
  const [user, setUser] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [teamId, setTeamId] = useState(null);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user;
        setUser(currentUser);
        if (currentUser) {
          const { data, error } = await supabase
            .from('all_teams')
            .select('team_id')
            .eq('user_id', currentUser.id)
            .single();
          if (error) {
            console.error('Error fetching team ID:', error);
            return;
          }
          setTeamId(data.team_id);
        }
      }
    );
    return () => {
      authListener.unsubscribe();
    };
  }, []);
  useEffect(() => {
    if (teamId) {
      fetchMessages();
    }
    const generalChat = supabase
      .channel("custom-insert-channel")
      // ...
  }, [teamId]);
  // ...
};


  // Fetch teamId when the component mounts
  useEffect(() => {
    fetchTeamId(userId).then(setTeamId);
  }, [userId]);
  // Fetch messages when teamId changes
  useEffect(() => {
    if (teamId) {
      fetchTeamMessages(teamId).then(setMessages);
    }
  }, [teamId]);
  // Subscribe to new messages
  useEffect(() => {
    if (teamId) {
      const subscription = supabase
        .from(`general_chat:team_id=eq.${teamId}`)
        .on('INSERT', payload => {
          setMessages(messages => [...messages, payload.new]);
        })
        .subscribe();
      return () => {
        supabase.removeSubscription(subscription);
      };
    }
  }, [teamId]);
  const handleSendMessage = async () => {
    if (teamId) {
      await postMessage(newMessage, teamId);
      setNewMessage('');
    }
  };
  return (
    <div className="flex items-center justify-center">
      {messages.map((message, index) => (
        <p key={index}>{message.text}</p>
      ))}
      <input
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};*/

/*
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
*/

const TeamChatRoom = () => {
  const [user, setUser] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [teamId, setTeamId] = useState(null);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user;
        setUser(currentUser);
        if (currentUser) {
          const { data, error } = await supabase
            .from('all_teams')
            .select('team_id')
            .eq('user_id', currentUser.id)
            .single();
          if (error) {
            console.error('Error fetching team ID:', error);
            return;
          }
          setTeamId(data.team_id);
        }
      }
    );
    return () => {
      authListener.unsubscribe();
    };
  }, []);
  useEffect(() => {
    if (teamId) {
      fetchMessages();
    }
  }, [teamId]);
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('general_chat')
      .select('*')
      .eq('team_id', teamId);
    if (error) {
      console.error('Error fetching messages:', error);
      return;
    }
    setMessages(data);
  };
  const postMessage = async () => {
    const { error } = await supabase
      .from('general_chat')
      .insert([
        { message_content: newMessage, team_id: teamId, user_id: user.id },
      ]);
    if (error) {
      console.error('Error posting message:', error);
    }
    setNewMessage('');
  };
  return (
    <div className="flex items-center justify-center mt-50px">
      {messages.map((message, index) => (
        <p key={index}>{message.message_content}</p>
      ))}
      <input
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
      />
      <button onClick={postMessage}>Send</button>
    </div>
  );
};

export default TeamChatRoom;
