import LeftSideBar from '../src/app/components/LeftSideBar';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
import BottomBar from '../src/app/components/BottomBar';
import supabase from '../src/app/utils/supabase';
import AccountForm from '../src/app/components/AccountForm';
import { useState, useEffect } from 'react';
import '../styles/globals.css';


export default function UserProfile() {
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
      <LeftSideBar />
      {session && <AccountForm session={session} />}

		// Cleanup function
		// return () => {
		// 	authListener.unsubscribe();
		// };
	}, []);


      <BottomBar />
    </>
  );
}
