'use client';
import React, { useState, useEffect } from 'react';
import supabase from '../src/app/utils/supabase';
import AvatarUnmodified from '../src/app/components/AvatarUnmodified';
import '../styles/globals.css';
import { useRouter } from 'next/router';

function AccountForm() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [skills, setSkills] = useState('');
  const [roleDescription, setRoleDescription] = useState('');
  const [github, setGithub] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [loading, setLoading] = useState(false); // Set initial loading state to false
  const router = useRouter();
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const currentUser = session?.user;
        setUser(currentUser);
        setName(currentUser?.user_metadata?.name || '');
        setUsername(currentUser?.user_metadata?.username || '');
        setSkills(currentUser?.user_metadata?.skills || '');
        setRoleDescription(currentUser?.user_metadata?.role_description || '');
        setGithub(currentUser?.user_metadata?.github_link || '');
        setLinkedIn(currentUser?.user_metadata?.linkedin_link || '');
        setAboutMe(currentUser?.user_metadata?.about_me || '');
      }
    );

    // return () => {
    //   authListener.unsubscribe();
    // };
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRoleDescription(e.target.value);
  };

  const handleGithubChange = (e) => {
    setGithub(e.target.value);
  };

  const handleLinkedInChange = (e) => {
    setLinkedIn(e.target.value);
  };

  const handleAboutMeChange = (e) => {
    setAboutMe(e.target.value);
  };

  const handleSave = async () => {
    setLoading(true);
    console.log(user.id); // Debug log
    console.log(name, username); // Debug log
    const { error } = await supabase
      .from('user_profiles')
      .update({
        name: name,
        username: username,
        skills: skills,
        role_description: roleDescription,
        github_link: github,
        linkedin_link: linkedIn,
        about_me: aboutMe,
      })
      .eq('id', user.id);
    if (error) {
      console.error(error);
    } else {
      console.log('Profile updated successfully'); // Debug log
      setLoading(false);
      router.push('/profile');
    }
  };

  return (
    <section className="bg-dark-2 max-w-4xl p-6 mx-auto rounded-md shadow-md mt-5">
      <div className="flex justify-between text-2xl font-bold text-white mb-4">
        Edit Profile
        <AvatarUnmodified username={username} />
      </div>

      <div className="flex flex-col space-y-4">
        <div className="text-white">
          <label htmlFor="name">Full name </label>
          <input
            type="text"
            className="block w-full px-4 py-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
        </div>
        <div className="text-gray-900">
          <label htmlFor="name">User name </label>
          <input
            type="text-gray-900"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="block w-full px-4 py-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div className="text-white">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Skills"
            className="block w-full px-4 py-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div className="text-white">
          <label htmlFor="role_description">Role</label>
          <select
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            value={roleDescription}
            onChange={(e) => setRole(e.target.value)}
            id="role_description"
            name="role_description"
          >
            <option value="bootcamper">bootcamper</option>
            <option value="exbootcamper">exbootcamper</option>
            <option value="mentor">mentor</option>
          </select>
        </div>
        <div className="text-white">
          <label htmlFor="github">Github</label>
          <input
            type="text"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="Github"
            className="block w-full px-4 py-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div className="text-white">
          <label htmlFor="linkedIn">LinkedIn</label>
          <input
            type="text"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
            placeholder="LinkedIn"
            className="block w-full px-4 py-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div className="text-white">
          <label htmlFor="aboutMe">About Me</label>
          <textarea
            type="text"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            placeholder="About Me"
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <button
          onClick={handleSave}
          disabled={loading}
          className="bg-indigo-500 w-17 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 disabled:opacity-50"
        >
          Save
        </button>
      </div>
    </section>
  );
}

export default AccountForm;
