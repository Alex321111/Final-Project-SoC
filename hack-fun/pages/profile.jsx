import LeftSideBar from '../src/app/components/LeftSideBar';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';

const UserProfile = () => {
  return (
    <>
      {' '}
      <Header />
      <LeftSideBar />
      <h1>You are in your profile page!</h1>
      <Footer />
    </>
  );
};

export default UserProfile;
