import Link from "next/link";
export default function Header() {
  return (
    <>
      <Link href="/profile">
        <img
          src="hack-fun/src/app/components/avatar-test.jpeg"
          className="image"
          alt="Profile-logo"
        />
      </Link>
      <img className="image" alt="SoC-logo" />
      <img className="image" alt="Hackafun-logo" />

      <h2>Welcome to Hack-a-fun!</h2>
    </>
  );
}
