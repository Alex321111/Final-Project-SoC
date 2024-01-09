import React, { useEffect, useState } from 'react';
import supabase from '../utils/supabase';
import CustomAvatar from './Avatar';
import AvatarUnmodified from './AvatarUnmodified';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
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
/*
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

//our version
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
		<div className="bg-dark-2  h-screen flex justify flex-col">
			<div className="flex-1 overflow-y-auto p-4">
				<ul className="space-y-4">
      {messages.map((message, index) => (
        <li key={index} {...message.message_content} className="flex flex-col">
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
      <form onSubmit={postMessage}>
				<div className="flex items-center justify-end">
					<input
						type="text"
						value={newMessage}
						onChange={e => setNewMessage(e.target.value)}
						placeholder="Type your message here..."
						className="flex-1 border p-2 rounded-l focus:outline-none"
					/>
					<button
						type="submit"
						className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600 focus:outline-none"
            onClick={postMessage}>
						Send
            </button>
				</div>
			</form>
		</div>
	);
};*/

/*      <input
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
      />
      <button onClick={postMessage}>Send</button>
    </div>
  );
};*/

//co-pilot suggestion

const TeamChatRoom = () => {
  const [user, setUser] = useState(null);
  const [newMessage, setNewMessage] = useState('');
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
  }, []);
  useEffect(() => {
    if (teamId) {
      fetchMessages();
      const generalChat = supabase
        .channel('general_chat')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'general_chat' },
          (payload) => {
            console.log('Change received!', payload);
            if (payload.new.team_id === teamId) {
              setMessages((prevMessages) => [...prevMessages, payload.new]);
            }
          }
        )
        .subscribe();
    }
  }, [teamId]);
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('general_chat')
      .select('*,user_profiles:user_id(username)')
      .order('created_at', { ascending: true })
      .eq('team_id', teamId);
    if (error) console.error('Error fetching messages: ', error);
    else setMessages(data);
  };
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };
  const handleNewMessage = async (event) => {
    event.preventDefault();
    if (newMessage.trim() === '') return;
    if (user && teamId) {
      const { data, error } = await supabase
        .from('general_chat')
        .insert([
          { message_content: newMessage, user_id: user.id, team_id: teamId },
        ]);
      if (error) {
        console.error('Error inserting message: ', error);
      } else {
        setNewMessage('');
        setTimeout(fetchMessages, 1000);
      }
    }
  };
  return (
    <div className="flex flex-col w-full flex-auto h-80 p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-dark-1 h-full p-4">
        <h2 className="m-auto pb-2">
          Team chat <FontAwesomeIcon icon={faUsers} className="px-2" />
        </h2>
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="flex flex-col h-full">
            <ul className="grid grid-cols-1 w-100% gap-y-2">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={`flex ${
                    message.sentByCurrentUser ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {!message.sentByCurrentUser && (
                    <div className="flex flex-col  items-center px-2  ">
                      <div className="pr-8">
                        <AvatarUnmodified
                          className=" pr-10"
                          size={30}
                          variant="beam"
                          username={
                            message.user_profiles
                              ? message.user_profiles.username
                              : 'anonymous'
                          }
                        />
                      </div>

                      <span className="text-white-600 text-xs mr-5 ">
                        {message.user_profiles
                          ? message.user_profiles.username
                          : 'loading...'}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col">
                    <div className="flex items-center mb-1">
                      <span className="text-xs text-gray-400">
                        {new Date(message.created_at).toLocaleString()}
                      </span>
                    </div>
                    <div
                      className={`flex items-center ${
                        message.user ? 'justify-center' : 'justify-start'
                      }`}
                    >
                      <div className="bg-white p-4 rounded shadow">
                        <p className="text-black">{message.message_content}</p>
                      </div>
                    </div>
                  </div>
                  {message.sentByCurrentUser && (
                    <div className="flex items-center ml-2">
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
        <div className="flex flex-row mb-7 items-center">
          <div className="flex-grow ml-4">
            <div className="relative w-full">
              <form onSubmit={handleNewMessage}>
                <div class="bg-dark-1  p-2 gap-4 pb-6 flex w-full px-8 ">
                  <input
                    class="flex items-center h-10 w-full text-black rounded py-4 px-10 text-sm"
                    type="text"
                    placeholder="Type your message…"
                    value={newMessage}
                    onChange={handleNewMessageChange}
                  />
                  <button
                    type="submit"
                    className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
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

export default TeamChatRoom;
