import LeftSideBar from "../src/app/components/LeftSideBar";
import HomeIntro from "../src/app/components/HomeIntro";
import Footer from "../src/app/components/Footer";
import Header from "../src/app/components/Header";
import ChatRoom from "../src/app/components/chatroom";

const GroupChat = () => {
	return (
		<>
			<Header />
			<LeftSideBar />
			<h1>You are in the group chat page !</h1>
			<ChatRoom />
			<Footer />
		</>
	);
};
export default GroupChat;
