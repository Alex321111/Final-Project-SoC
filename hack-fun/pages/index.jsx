'use client';

import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '../styles/globals.css';
import HackAFunLogo from '../src/app/components/hack-a-fun.png';
import { Auth } from '@supabase/auth-ui-react';

import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared';

const supabase = createClient(
  process.env.NEXT_PUBLIC_URL,
  process.env.NEXT_PUBLIC_ANON_KEY
);

function SignInWithEmail() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN') {
          router.push('/home');
        } else {
          router.push('/');
        }
      }
    );
  }, []);
  async function handleSignIn(e) {
    e.preventDefault();
    // try {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    //   if (user) {
    //     router.push('/home');
    //   } else {
    //     console.error(error);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  }

  return (
    <>
      <div className="mr-6 mt-4">
        <section className="flex flex-col md:flex-grow">
          <div className="flex items-center justify-center">
            <Image
              className="hack-logo"
              width={680}
              height={120}
              src={HackAFunLogo}
              alt="hack-a-fun-logo"
            />
          </div>
        </section>
      </div>

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
