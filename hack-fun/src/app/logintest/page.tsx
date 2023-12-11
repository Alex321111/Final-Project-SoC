//Register page tsx
'use client'

/*import { Input, Button } from '@supabase/ui'
import supabase from '../utils/supabase'


export default function signInWithEmail() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    { data, error } = await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password'
    })
    return (
        <div className="mx-auto flex min-h-screen max-w-2xl items-center px-4">
          <form className="w-full space-y-2" onSubmit={handleSubmit}>
            <Input type="email" name="email" label="Email" />
            <Input type="password" name="password" label="Password" />
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
            <p>Forgotten Password</p>
            <p>Here for the first time?</p>
            <Button type="primary" htmlType="submit">
              Create an Account
            </Button>
          </form>
        </div>
      )
  }
} */

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Input, Button } from '@supabase/ui';
import supabase from '../utils/supabase';

const SignInWithEmail: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (data) {
      // Check if router is ready before navigating
      if (router.isReady) {
        router.push('/register1');
      }
    } else {
      // Handle error
      setErrorMessage(error?.message || 'An error occurred');
    }
  };


/*
const SignInWithEmail: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (data) {
      // Redirect to the homepage
      router.push('/');
    } else {
      // Handle error
      setErrorMessage(error?.message || 'An error occurred');
    }
  };
  */





/*const SignInWithEmail: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });*/
    // Handle the result of the sign in here

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl items-center px-4">
      <form className="w-full space-y-2" onSubmit={handleSubmit}>
        <Input type="email" name="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" name="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="primary" htmlType="submit">
          Log In
        </Button>
        <p>Forgotten Password</p>
        <p>Here for the first time?</p>
        <Button type="primary" htmlType="submit">
          Create an Account
        </Button>
      </form>
    </div>
  );
};

export default SignInWithEmail;