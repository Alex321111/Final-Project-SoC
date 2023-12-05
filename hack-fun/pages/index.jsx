import LeftSideBar from '../src/app/components/LeftSideBar';
import HomeIntro from '../src/app/components/HomeIntro';
import Homepage from '../src/app/components/HomeCard';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
// import '../styles/globals.css';
const Home = () => {
  return (
    <div className="flex">
      <LeftSideBar />
      <HomeIntro />
      <Homepage />
    </div>
  );
};

export default Home;