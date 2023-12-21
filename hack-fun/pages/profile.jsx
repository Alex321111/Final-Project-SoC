import LeftSideBar from "../src/app/components/LeftSideBar";
import Footer from "../src/app/components/Footer";
import Header from "../src/app/components/Header";
import BottomBar from "../src/app/components/BottomBar";
import supabase from "../src/app/utils/supabase";
import AccountForm from "../src/app/components/AccountForm";
import { useState, useEffect } from "react";
import "../styles/globals.css";
import ProfilePage from "../src/app/components/profilePage";

export default function UserProfile({ userName }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );

    // return () => {
    //   authListener.unsubscribe();
    // };
  }, []);

  return (
    <>
      <title>Profile</title>;<div className="project-profile"></div>
      <div className="flex flex-col min-h-screen ">
        <div className="flex flex-grow h-full">
          <div className="left-side-bar">
            <LeftSideBar userName={userName} />
          </div>
          <section className="flex  items-center justify-center flex-col md:flex-grow">
            <ProfilePage />
            {session && <AccountForm session={session} />}
          </section>
        </div>
      </div>
      <div className="bottom-bar-container">
        <BottomBar userName={userName} />
      </div>
    </>
  );
}
