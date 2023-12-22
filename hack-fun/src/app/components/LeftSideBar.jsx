"use client";
import Link from "next/link";
import Image from "next/image";
import SocLogo from "../components/take-three.png";
import Avatar from "./Avatar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomAvatar from "./Avatar.jsx";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import "../../../styles/globals.css";
const supabase = createClient(
  process.env.NEXT_PUBLIC_URL,
  process.env.NEXT_PUBLIC_ANON_KEY
);

import {
  faHouse,
  faCircleStop,
  faComments,
  faListCheck,
  faDiagramProject,
  faUser,
  faUsers,
  faRightFromBracket,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

const LeftSideBar = ({ userName }) => {
  const router = useRouter();
  async function handleSignOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      console.log("Signed out successfully");
      router.push("/");
    } catch (error) {
      console.log("Your connection timed out", error.message);
    }
  }
  return (
    <nav className="hidden md:flex  px-8  bg-dark-2 fixed flex-col  min-w-[270px] min-h-screen -mr-3.5">
      <div className="flex flex-col gap-11 flex-grow">
        <div className="flex flex-col items-center justfy-center">
          <a href="https://www.schoolofcode.co.uk/" alt="school-of-code-logo">
            <Image className="soc-logo" width={80} height={80} src={SocLogo} />
          </a>
        </div>
        <ul className="py-4 px-3">
          <Link href="/home">
            <li className=" hover:bg-indigo-500 rounded-lg py-2 m-1">
              {" "}
              <FontAwesomeIcon icon={faHouse} className="px-2" /> Home
            </li>
          </Link>
          <Link href="/groupchat">
            <li className=" hover:bg-indigo-500  rounded-lg py-2 m-1">
              <FontAwesomeIcon icon={faComments} className="px-2" />
              Community chat
            </li>
          </Link>
          <Link href="/teamchat">
            <li className=" hover:bg-indigo-500  rounded-lg py-2 m-1">
              <FontAwesomeIcon icon={faUsers} className="px-2" />
              Team chat
            </li>
          </Link>
          <Link href="/projectsubmissions">
            <li className="py-3 hover:bg-indigo-500 rounded-lg py-2 px-1 m-1">
              <FontAwesomeIcon icon={faListCheck} className="px-2" />
              Project submissions
            </li>
          </Link>
          <Link href="/pastprojects">
            <li className="py-3 hover:bg-indigo-500  rounded-lg py-2 m-1">
              <FontAwesomeIcon icon={faDiagramProject} className="px-2" />
              Past projects{" "}
            </li>
          </Link>
          <Link href="/profile">
            <li className="py-3 hover:bg-indigo-500 rounded-lg px-2">
              <FontAwesomeIcon icon={faUser} className="px-2" />
              Profile{" "}
            </li>
          </Link>
        </ul>
        <div className="flex items-center ml-7">
          <CustomAvatar size={30} variant="beam" username={userName} />
          <span style={{ marginLeft: "1rem" }}>{userName}</span>
        </div>
        <div className="flex items-center justify-center hover:text-indigo-500 block mb-4 mr-10">
          <FontAwesomeIcon
            onClick={handleSignOut}
            size="lg"
            icon={faPowerOff}
          />
          <div className="ml-5">Sign Out</div>
        </div>
      </div>
    </nav>
  );
};
export default LeftSideBar;
