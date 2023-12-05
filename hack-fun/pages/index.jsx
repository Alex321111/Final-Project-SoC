import LeftSideBar from "../src/app/components/LeftSideBar";
import HomeIntro from "../src/app/components/HomeIntro";
import HomeCard from "../src/app/components/HomeCard";
import Footer from "../src/app/components/Footer";
import Header from "../src/app/components/Header";
import "../styles/globals.css";
const Home = () => {
  return (
    <div className="flex">
      <Header />
      <LeftSideBar />
      <HomeIntro />
      <HomeCard />
      <Footer />
    </div>
  );
};

export default Home;
