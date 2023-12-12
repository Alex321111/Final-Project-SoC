import LeftSideBar from '../src/app/components/LeftSideBar';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
import BottomBar from '../src/app/components/BottomBar';
import { createClient } from '@supabase/supabase-js'
import supabase from '../src/app/utils/supabase'

async function getUserProfile(userId) {
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
})

const UserProfile = () => {
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

export default UserProfile;