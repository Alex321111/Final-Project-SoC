import LeftSideBar from "../src/app/components/LeftSideBar";
import HomeIntro from "../src/app/components/HomeIntro";
import Footer from "../src/app/components/Footer";
import Header from "../src/app/components/Header";
import MySubmitProjectPage from "../src/app/components/SubmitProjectPage";
import ProjectForm from "../src/app/components/ProjectForm";
import BottomBar from "../src/app/components/BottomBar";
const SubmitProject = ({ userName }) => {
  return (
    <>
      <title>Project Submissions</title>

      <div className="flex flex-col min-h-screen ">
        <div className="flex flex-grow h-full">
          <div className="left-side-bar">
            <LeftSideBar userName={userName} />
          </div>

          <section className="flex  items-center justify-center flex-col md:flex-grow">
            <ProjectForm />
          </section>
        </div>
      </div>

      <div className="bottom-bar-container">
        <BottomBar userName={userName} />
      </div>
    </>
  );
};
export default SubmitProject;
