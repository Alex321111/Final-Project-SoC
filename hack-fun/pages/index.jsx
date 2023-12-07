// Home.js
import LeftSideBar from '../src/app/components/LeftSideBar';
import HomeIntro from '../src/app/components/HomeIntro';
import HomeCard from '../src/app/components/HomeCard';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
import BottomBar from '../src/app/components/BottomBar';
import '../styles/globals.css';

// Home.js
const Home = () => {
  return (
    <>
      <Header className="fixed flex-col top-0 left-0 w-full" />
      <div
        className="flex  min-h-screen border border-solid border-green-300"
        style={{ minHeight: '100vh', border: '2px solid green' }}
      >
        <div className="flex flex-grow h-full">
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

      <div className="bottom-bar-container">
        <BottomBar />
      </div>
    </>
  );
};

export default Home;
