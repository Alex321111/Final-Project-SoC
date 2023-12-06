import LeftSideBar from '../src/app/components/LeftSideBar';
import HomeIntro from '../src/app/components/HomeIntro';
import HomeCard from '../src/app/components/HomeCard';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
import '../styles/globals.css';
const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header className="fixed top-0 left-0 w-full" />

      <div className="flex flex-grow">
        <div className="left-side-bar">
          <LeftSideBar />
        </div>
        <div className="flex flex-col flex-grow">
          <section className="flex flex-col md:flex-grow">
            <HomeIntro />
            <HomeCard />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
