import LeftSideBar from '../src/app/components/LeftSideBar';
import HomeIntro from '../src/app/components/HomeIntro';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
import MySubmitProjectPage from '../src/app/components/SubmitProjectPage';
const SubmitProject = () => {
  return (
    <>
      {' '}
      <Header />
      <LeftSideBar />
      <h1>You are in project submissions page !</h1>
      <Footer />
    </>
  );
};
export default SubmitProject;
