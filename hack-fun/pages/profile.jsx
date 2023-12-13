import LeftSideBar from '../src/app/components/LeftSideBar';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
import BottomBar from '../src/app/components/BottomBar';
import { useCallback, useState, useEffect } from 'react';
import react from 'react';
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import supabase from '../src/app/utils/supabase';
import AccountForm from '../src/app/components/AccountForm';




  export default async function UserProfile () {
    const {
      data: { session },
    } = await supabase.auth.getSession()
  return (
    <>
      {' '}
      <Header />
      <LeftSideBar />
      <AccountForm session={session} />
      <Footer />
      <BottomBar />
    </>
  );
};