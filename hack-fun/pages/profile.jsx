import LeftSideBar from '../src/app/components/LeftSideBar';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
import BottomBar from '../src/app/components/BottomBar';
import supabase from '../src/app/utils/supabase';
import { useState, useEffect } from 'react';
import react from 'react';

/*const UserProfile = () => {
  return (
    <>
      {' '}
      <Header />
      <LeftSideBar />
      <h1>You are in your profile page!</h1>
      <Footer />
      <BottomBar />
    </>
  );
};

export default UserProfile;*/
useEffect(() => {
  const currentSession = supabase.auth.session();
  setSession(currentSession);

  const { data: authListener } = supabase.auth.onAuthStateChange((_event, newSession) => {
    setSession(newSession);
  });

  // Cleanup function to remove the listener when the component is unmounted
  return () => {
    authListener.unsubscribe();
  };
}, []);



export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  useEffect(() => {
    let ignore = false
    async function getProfile() {
      setLoading(true)
      const { user } = session
      const { data, error } = await supabase
        .from('user_profiles')
        .select(`username`)
        .eq('userid', user.id)
        .single()
      if (!ignore) {
        if (error) {
          console.warn(error)
        } else if (data) {
          setUsername(data.username)
        }
      }
      setLoading(false)
    }
    getProfile()
    return () => {
      ignore = true
    }
  }, [session])
  async function updateProfile(event, avatarUrl) {
    event.preventDefault()
    setLoading(true)
    const { user } = session
    const updates = {
      id: user.id,
      username,
      updated_at: new Date(),
    }
    const { error } = await supabase.from('user_profiles').upsert(updates)
    if (error) {
      alert(error.message)
    } else {
      setAvatarUrl(avatarUrl)
    }
    setLoading(false)
  }
  return (
    <form onSubmit={updateProfile} className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          required
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <button className="button block primary" type="submit" disabled={loading}>
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>
      <div>
        <button className="button block" type="button" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </form>
  )
}









/*async function getUserProfile(userId) {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('name, username')
    .eq('userid', userId)
  if (error) {
    console.error('Error: ', error)
    return null
  }
  return data
}
// Usage
getUserProfile('').then(userProfile => {
  console.log(userProfile)
})*/