import Link from "next/link";

const BottomBar = () => {
  return (
    <nav
      className="bottom-bar"
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        backgroundColor: "#ff0377",
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        flexDirection: "row",
      }}
    >
      <div className="rounded-[10px]">
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/groupchat">
            <li>Community chat</li>
          </Link>
          <Link href="/teamchat">
            <li>Team chat</li>
          </Link>
          <Link href="/projectsubmission">
            <li>Project submissions </li>
          </Link>
          <Link href="/pastprojects">
            <li>Past projects </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default BottomBar;
