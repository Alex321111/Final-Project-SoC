import LeftSideBar from '../src/app/components/LeftSideBar';
import HomeIntro from '../src/app/components/HomeIntro';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
import ChatRoom from '../src/app/components/chatroom';


import BottomBar from '../src/app/components/BottomBar';
const GroupChat = ({ userName }) => {
  return (
    <>

      <Header />
      <LeftSideBar />
      <h1></h1>
      <ChatRoom/>
      <Footer />
/*
      <div className="flex flex-col min-h-screen ">
        <div className="flex flex-grow h-full">
          <div className="left-side-bar">
            <LeftSideBar userName={userName} />
          </div>

          <section className="flex  items-center justify-center flex-col md:flex-grow">
            <ChatRoom />
          </section>
        </div>
      </div>

      <div className="bottom-bar-container">
        <BottomBar userName={userName} />
      </div>
*/
    </>
  );
};

export default GroupChat;
{
  /* <div className="flex flex-col flex-grow w-full">
        <section className="flex flex-col flex-grow w-full max-w-xl bg-dark-2 shadow-xl rounded-lg overflow-hidden">
          <ChatComponent />
        </section>

        <div className="bottom-bar-container flex-shrink-0">
          <BottomBar userName={userName} />
        </div>
      </div>
    </div> */
}
