import Link from 'next/link';

const BottomBar = () => {
  return (
    <nav className="bottom-bar">
      <div className="rounded-[10px]">
        <ul className="flex items-center">
          <Link href="/">
            <li className="px-4">Home</li>
          </Link>
          <Link href="/groupchat">
            <li className="px-4">Community</li>
          </Link>
          <Link href="/teamchat">
            <li className="px-4">Team</li>
          </Link>
          <Link href="/projectsubmission">
            <li className="px-4">Submissions</li>
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
