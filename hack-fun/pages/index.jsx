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

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN') {
          router.push('/home');
        }
        else {router.push('/');}
      }
    );
  }, []);

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
        <Auth
          supabaseClient={supabase}
          socialLayout="horizontal"
          styles={{
            container: 'max-w-md w-full',
            buttonPrimary: 'bg-green-500 hover:bg-green-600',
            input: 'border rounded-md p-2 mb-2 w-full',
            label: 'text-sm text-gray-600',
            link: 'text-sm text-gray-600 hover:text-gray-800',}}
            >
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
            <div className="flex space-x-2">
              <button className="bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-md">Google</button>
              <button className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md">GitHub</button>
              <button className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md">Azure</button>
            </div>
          </div>
          </Auth>
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
