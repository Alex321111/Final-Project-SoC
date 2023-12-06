// Home.js
import LeftSideBar from '../src/app/components/LeftSideBar';
import HomeIntro from '../src/app/components/HomeIntro';
import HomeCard from '../src/app/components/HomeCard';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
import BottomBar from '../src/app/components/BottomBar';
import '../styles/globals.css';

const Home = () => {
  return (
    <div
      className="flex flex-col min-h-screen border border-solid border-green-300"
      style={{ minHeight: '100vh', border: '2px solid green' }}
    >
      <Header className="fixed top-0 left-0 w-full" />

      <div className="flex flex-grow border border-solid border-green-300">
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

      <div className="rounded-[10px] bg-primary-500 flex-center flex-col gap-1 p-2 transition">
        <BottomBar />
      </div>
    </div>
  );
};

export default Home;
