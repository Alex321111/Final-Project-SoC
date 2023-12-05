import Link from "next/link";
import Avatar, { genConfig } from "react-nice-avatar";
export default function Header() {
  return (
    <>
      <Link href="/profile">
        {/* <Avatar style={{ width: "8rem", height: "8rem" }} /> */}
        <img
          width="100px"
          src="https://robohash.org/mycustomseed.png?set=set4"
          alt="Cartoon Avatar"
        />
      </Link>
      {/* <img className="image" alt="SoC-logo" />
      <img className="image" alt="Hackafun-logo" /> */}
    </>
  );
}
