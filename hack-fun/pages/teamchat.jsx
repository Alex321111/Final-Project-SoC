import LeftSideBar from '../src/app/components/LeftSideBar';
import HomeIntro from '../src/app/components/HomeIntro';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
import TeamChatRoom from '../src/app/components/TeamChatComponent';
import BottomBar from '../src/app/components/BottomBar';



const TeamChat = () => {
  return (
    <>
      {' '}
      <Header />
      <div className= "left-side-bar, justify-left">
      <LeftSideBar />
      </div>
      <TeamChatRoom />
      <div className="bottom-bar-container">
      <BottomBar />
      </div>
    </>
  );
};
export default TeamChat;
