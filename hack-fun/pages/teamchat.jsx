import LeftSideBar from '../src/app/components/LeftSideBar';
import HomeIntro from '../src/app/components/HomeIntro';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
import TeamChatRoom from '../src/app/components/TeamChatComponent';
import BottomBar from '../src/app/components/BottomBar';

const TeamChat = ({ userName }) => {
  return (
    <>
      <title>Team Chat</title>
      <div className="flex flex-col min-h-screen ">
        <div className="flex flex-grow h-full">
          <div className="left-side-bar">
            <LeftSideBar userName={userName} />
          </div>

          <section className="flex  items-center justify-center flex-col md:flex-grow">
            <TeamChatRoom userName={userName} />
          </section>
        </div>
      </div>
      <div className="bottom-bar-container">
        <BottomBar userName={userName} />
      </div>
    </>
  );
};
export default TeamChat;
