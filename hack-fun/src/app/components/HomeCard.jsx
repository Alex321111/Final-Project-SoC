import React from 'react';
import ProjectImg from '../components/project-brief.png';
import SocLogo from '../components/take-three.png';
import Link from 'next/link';
import Image from 'next/image';
const HomeCard = () => {
  return (
    <section>
      <div class="bg-dark-2  p-10 m-10 shadow-lg rounded-lg shadow-lg">
        <Image
          className="project-img"
          width={580}
          height={20}
          src={ProjectImg}
        />
        <div class="p-6">
          <h2 class="font-bold mb-2 text-2xl text-purple-800">
            Take part in our hackathon!
          </h2>
          <p class="text-purple-700 mb-2"></p>
          <a
            href="#"
            class="text-purple-600 hover:text-purple-500 underline text-sm"
          >
            Read More 👉
          </a>
        </div>
        <button>Sign up!</button>
      </div>
    </section>
  );
};

export default HomeCard;
