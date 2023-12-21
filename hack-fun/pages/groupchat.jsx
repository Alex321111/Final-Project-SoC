import LeftSideBar from "../src/app/components/LeftSideBar";
import HomeIntro from "../src/app/components/HomeIntro";
import Footer from "../src/app/components/Footer";
import Header from "../src/app/components/Header";
import ChatRoom from "../src/app/components/chatroom";
import { useState } from "react";
import BottomBar from "../src/app/components/BottomBar";
import supabase from "../src/app/utils/supabase";
import { useEffect } from "react";

const GroupChat = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const { authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const currentUser = session?.user;
        if (currentUser) {
          setUserName(currentUser.user_metadata?.username);
        } else {
          setUserName("Guest");
        }
      }
    );
  }, []);

  return (
    <>
      <title>Community Chat</title>;
      <div className="flex flex-col min-h-screen ">
        <div className="flex flex-grow h-full">
          <div className="left-side-bar">
            <LeftSideBar userName={userName} />
          </div>

          <section className="flex  items-center justify-center flex-col md:flex-grow">
            <ChatRoom userName={userName} />
          </section>
        </div>
      </div>
      <div className="bottom-bar-container">
        <BottomBar userName={userName} />
      </div>
    </>
  );
};

export default GroupChat;
