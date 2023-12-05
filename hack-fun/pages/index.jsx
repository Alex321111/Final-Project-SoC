import LeftSideBar from '../src/app/components/LeftSideBar';
import HomeIntro from '../src/app/components/HomeIntro';
import Homepage from '../src/app/components/HomeCard';
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
