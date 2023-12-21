'use client';
import React, { useState, useEffect } from 'react';
import ProjectImg from '../components/project-brief.png';
import SocLogo from '../components/take-three.png';
import Link from 'next/link';
import Image from 'next/image';
import supabase from '../utils/supabase';
import Alert from '../components/Alert';
import HomeIntro from './HomeIntro';

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
  const [alert, setAlert] = useState(false);
  // function handleAlert() {
  //   setAlert(true);
  // }
  function handleCloseAlert() {
    setAlert(false);
  }
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
    //   authListener.unsubscribe();
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
    setAlert(true);
  };

  function CountDownTimer() {
    function calculateTimeLeft() {
      const now = new Date(
        new Date().toLocaleString('en-US', { timeZone: 'Europe/London' })
      );
      const difference = new Date(projectDeadline) - now;

      let timeLeft = {};
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      }
      return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
      if (timeLeft?.days > 0) {
        const timer = setInterval(() => {
          setTimeLeft((prevTimeLeft) => calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
      }
    }, [timeLeft, calculateTimeLeft]);

    return (
      <section>
        <div className="bg-dark-2 p-6 md:w-800 md:ml-28 md:mr-0  first-letter: pr-2 mb-8  shadow-lg rounded-lg shadow-lg">
          <div className="bg-dark-2 ">
            <div className="flex flex-col items-center justify-center w-full h-full gap-8  sm:gap-16">
              <span className="text-2xl bg-dark-2 sm:text-3xl font-semibold text-white text-center tracking-widest px-2">
                Time left until project starts
              </span>
              {timeLeft?.days > 0 && (
                <div className="flex justify-center gap-3 sm:gap-8">
                  <div className="bg-dark-2">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
                      <div className="flex justify-center gap-3 sm:gap-8">
                        <div className="flex flex-col gap-5 relative">
                          <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                              {timeLeft?.days}
                            </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
                          </div>
                          <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                            {timeLeft?.days == 1 ? 'Day' : 'Days'}
                          </span>
                        </div>
                        <div className="flex flex-col gap-5 relative">
                          <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                              {timeLeft?.hours}
                            </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
                          </div>
                          <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
                            {timeLeft?.hours == 1 ? 'Hour' : 'Hours'}
                          </span>
                        </div>
                        <div className="flex flex-col gap-5 relative">
                          <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                              {timeLeft?.minutes}
                            </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
                          </div>
                          <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                            {timeLeft?.minutes == 1 ? 'Minute' : 'Minutes'}
                          </span>
                        </div>
                        <div className="flex flex-col gap-5 relative">
                          <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                              {timeLeft?.seconds}
                            </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
                          </div>
                          <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                            {timeLeft?.seconds == 1 ? 'Second' : 'Seconds'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-6 bg-dark-1 m-5 flex flex-col items-center justify-center w-180">
            <h2 className="font-bold mb-2 text-2xl text-p text-center">
              Sign up to take part in this months project
            </h2>
            <Link
              href="/profile"
              className="text-indigo-500 text-center hover:text-yellow-500"
            >
              Read more 🚀
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
            {alert && (
              <Alert
                message={`You have signed up !`}
                type="indigo"
                onClose={handleCloseAlert}
              />
            )}
          </div>
        </div>
      </section>
    );
  }

  return <CountDownTimer />;
};

export default HomeCard;
