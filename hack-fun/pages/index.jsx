import LeftSideBar from '../src/app/components/LeftSideBar';
import HomeIntro from '../src/app/components/HomeIntro';
import HomeCard from '../src/app/components/HomeCard';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
import BottomBar from '../src/app/components/BottomBar';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/globals.css';
import HackAFunLogo from '../src/app/components/hack-a-fun.png';

const Home = () => {
  return (
    <>
      <div
        className="flex flex-col min-h-screen border border-solid border-green-300"
        style={{ minHeight: '100vh', border: '2px solid green' }}
      >
        <div className="flex flex-grow h-full">
          <div className="left-side-bar">
            <LeftSideBar />
          </div>
          <div className="flex flex-col flex-grow">
            <section className="flex flex-col md:flex-grow">
              <div className="flex flex-col items-center justfy-center">
                <Image
                  className="hack-logo"
                  width={380}
                  height={80}
                  src={HackAFunLogo}
                  alt="hack-a-fun-logo"
                />
              </div>

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
