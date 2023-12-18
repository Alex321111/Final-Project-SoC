'use client';
import React, { useState, useEffect } from 'react';
import ProjectImg from '../components/project-brief.png';
import SocLogo from '../components/take-three.png';
import Link from 'next/link';
import Image from 'next/image';
import supabase from '../utils/supabase';
import CountDownTimer from '../components/Countdown';

import {
  faHouse,
  faCircleStop,
  faComments,
  faListCheck,
  faDiagramProject,
  faUser,
  faRightFromBracket,
  faPowerOff,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HomeCard = () => {
  const [user, setUser] = useState(null);

  const projectDeadline = '2023-12-31T23:59:59';
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user;
        setUser(currentUser);
      }
    );
    // Cleanup function
    // return () => {
    // 	authListener.unsubscribe();
    // };
  }, []);
  const handleSignUp = async () => {
    if (user) {
      const { data, error } = await supabase
        .from('hackathon_sign_up')
        .insert([{ user_id: user.id, brief_name: 'Test Brief' }]);
      if (error) console.error(error);
    } else {
      console.error('User is not authenticated');
    }
  };

  // useEffect(() => {
  // //   const { data: authListener } = supabase.auth.onAuthStateChange(
  // //     async (event, session) => {
  // //       const currentUser = session?.user;
  // //       setUser(currentUser);
  // //     }
  // //   );
  //   // Cleanup function
  //   // return () => {
  //   // 	authListener.unsubscribe();
  //   // };
  // }, []);

  return (
    <section>
      <div className="bg-dark-2  p-10 m-10 shadow-lg rounded-lg shadow-lg">
        <CountDownTimer deadline={projectDeadline} />
        <div className="p-6 bg-dark-1 m-5 flex flex-col items-center justify-center w-180">
          <h2 className="font-bold mb-2 text-2xl text-p">
            Sign up to take part in this month's project
          </h2>
          <Link href="/profile">
            Read more 🚀
            {/* <FontAwesomeIcon
              icon={faLink}
              href="/profile"
              size="lg"
              className="text-indigo-500  pl-2 hover:text-purple-500 underline text-sm"
            />{' '} */}
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleSignUp}
            type="submit"
            className="w-[150px] bg-indigo-500 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};
export default HomeCard;
