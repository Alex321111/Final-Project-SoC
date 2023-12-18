export default function HomeIntro({ userName }) {
  return (
    <div
      class="bg-dark-2  p-10 m-10 rounded-lg shadow-lg"
      style={{
        backgroundImage: `url(${'../components/header-background.jpeg'})`,
      }}
    >
      <h2>Welcome to Hack-a-fun! {userName}</h2>
      <br></br>
      <p>
        {' '}
        Welcome to the Hack-a-fun app. You are about to take part in hackathons
        with a difference! Here you will work with a randomised group of fellow
        School of Code bootcampers, recent graduates and a mentor to solve a
        Hackathon. New hackathons go live every 4 weeks. Sign up if you are
        interested. You will then be assigned into a group. Your team will then
        have access to the GitHub repo for that Hackathon. Once your team had
        completed the hackathon you can Save it! Make a video about it! Add it
        to your portfolio. Have fun and remember - it is all about working and
        learning together!{' '}
      </p>
    </div>
  );
}
