"use client";

import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../styles/globals.css";
import HackAFunLogo from "../src/app/components/hack-a-fun.png";
import { Auth } from "@supabase/auth-ui-react";
import SocLogo from "../src/app/components/take-three.png";
import Link from "next/link";
import {
	// Import predefined theme
	ThemeSupa,
} from "@supabase/auth-ui-shared";

const supabase = createClient(
	process.env.NEXT_PUBLIC_URL,
	process.env.NEXT_PUBLIC_ANON_KEY
);

function SignInWithEmail() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          router.push("/home");
        } else {
          router.push("/");
        }
      }
    );
  }, []);
  async function handleSignIn(e) {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (user) {
        router.push("/home");
      } else {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <title>Hackafun Login</title>
      <div className=" mt-4">
        <div className="flex flex-col items-center justfy-center">
          <Image
            className="soc-logo"
            width={80}
            height={80}
            src={SocLogo}
            alt="Hackafun-logo"
          />
        </div>
        {/* <section className="flex flex-col md:flex-grow p-4"> */}
        <div className="flex items-center justify-center">
          <Image
            className="hack-logo"
            width={480}
            height={120}
            src={HackAFunLogo}
            alt="hack-a-fun-logo"
          />
        </div>
        {/* </section> */}
      </div>
      {/* 
      <div className="bg-dark-2 max-w-4xl p-6 mx-auto rounded-md shadow-md mt-5">
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                className="bg-dark-2"
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-dark-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </div>
      </div> */}
      <div className="bg-dark-2 px-5 py-5 pb-5 m-10 rounded-lg shadow-lg">
        <div className="flex justify-center">
          {" "}
          <form className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="pb-4">
              <button
                class="w-full rounded border-solid border-white border bg-blue-900 shadow-lg shadow-blue-500/50 py-1 px-3 mt-4"
                type="submit"
                onClick={handleSignIn}
              >
                Log in
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/register">
            <li className=" "> Create an account</li>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignInWithEmail;

/*  <div className="bg-dark-2 max-w-4xl p-6 mx-auto rounded-md shadow-md mt-5">
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    </div>
  );
}*/

//export default SignInWithEmail;
