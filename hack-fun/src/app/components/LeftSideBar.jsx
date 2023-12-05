import Link from "next/link";

const LeftSideBar = () => {
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
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
          <Link href="/projectsubmissions">
            <li>Project submissions </li>
          </Link>
          <Link href="/pastprojects">
            <li>Past projects </li>
          </Link>
          <Link href="/profile">
            <li>Profile </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default LeftSideBar;
