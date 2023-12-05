import Image from 'next/image';
import LeftSideBar from '../src/app/components/LeftSideBar';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LeftSideBar />
    </main>
  );
}
