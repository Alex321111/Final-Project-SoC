import Link from "next/link";

const BottomBar = () => {
  return (
    <nav className="bottom-bar">
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
