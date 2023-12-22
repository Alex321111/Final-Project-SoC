"use client";
import LeftSideBar from "../src/app/components/LeftSideBar";
import HomeIntro from "../src/app/components/HomeIntro";
// import HomeCard from '../src/app/components/HomeCard';
import Footer from "../src/app/components/Footer";
import Header from "../src/app/components/Header";
import BottomBar from "../src/app/components/BottomBar";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";
import HackAFunLogo from "../src/app/components/hack-a-fun.png";
import CustomAvatar from "../src/app/components/Avatar";
import { useEffect } from "react";
import { useState } from "react";
import supabase from "../src/app/utils/supabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountDownTimer from "../src/app/components/Countdown";
import dynamic from "next/dynamic";
const HomeCard = dynamic(() => import("../src/app/components/HomeCard"), {
  ssr: false,
});

const Home = () => {
  const notify = () => toast("Wow so easy!");
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
useEffect(() => {
		if (typeof window !== "undefined") {
			if (sessionStorage.getItem("justLoggedIn")) {
				sessionStorage.removeItem("justLoggedIn"); // Clear the flag
				window.location.reload();
			}
		}
	}, []);
  return (
    <>
      <title>Hackafun Home</title>
      <div className="flex flex-col min-h-screen overflow-hidden ">
        <div className="flex flex-grow h-full">
          <div className="left-side-bar">
            <LeftSideBar userName={userName} />
          </div>
          <div className="flex flex-col flex-grow">
            <section className="flex flex-col md:flex-grow">
              <div className="flex items-end justify-center ">
                <Image
                  className="hack-logo m-10"
                  width={380}
                  height={80}
                  src={HackAFunLogo}
                  alt="hack-a-fun-logo"
                />
              </div>

              <HomeIntro userName={userName} />
              <HomeCard />
            </section>
          </div>
        </div>
      </div>
      <div className="bottom-bar-container">
        <BottomBar userName={userName} />
      </div>
    </>
  );
};

export default Home;
