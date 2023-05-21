"use client"
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin,} from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa'
import Image from 'next/image';
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import deved from "../public/deved.png";
import web7 from "../public/web7.png";
import { useState } from 'react';
// import { ThemeProvider } from "next-themes"
import { useTheme } from "next-themes";
// import { useState } from 'react';
// useState

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">@Rick</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://docs.google.com/document/d/1wSBXxyGNslEeZo_McddWC9W5EOtMO5b9hu2u0s88w4M/edit?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Erick Adikah   
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Back-End Developer and Graphics designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let&apos;s get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-5 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://github.com/ErickAdikah ">
            <AiFillGithub />
            </a>
              <a href="https://twitter.com/https:/erick_adikah">
            <AiFillTwitterCircle />
            </a>
              <a href="mailto:erickadikah2030@gmail.com">
            <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/erick-adikah-0b0b3a1b0/">
              <AiFillLinkedin />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-20 md:h-60 md:w-60">
            <Image alt="profile" src={deved} layout="fill" objectFit="cover"/>
          </div>
          </div>
        </section>
        <section>
          <div className='mx-auto'>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance graphics designer and
              developer. I&apos;ve done some graphics works for Companies
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including Graphics design,
              Web development, and consulting.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image alt="design" src={design} width={100} height={100} className='mx-auto'/>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs  For Graphics Needs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt="code" src={code} width={100} height={100} className='mx-auto'/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let&rsquo;s make it a reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">ReactJs</p>
              <p className="text-gray-800 py-1">NodeJs</p>
              <p className="text-gray-800 py-1">ExpressJs</p>
              <p className="text-gray-800 py-1">Python</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt="consulting" src={consulting} width={100} height={100} className='mx-auto'/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a Freelancer Graphics designer and
              developer, I&rsquo;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand Graphics design,
              programming, and consulting.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt="project1"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="project2"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="project3"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt="project4"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt="project5"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt="project6"
              />
            </div>
            <div className="basis-1/2 flex-2">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"80%"}
                layout="responsive"
                src={web7}
                alt="project7"
              />
              </div>
              </div>
              <div className="flex justify-center py-2 dark:text-white
              ">
              <footer>
                Erick adikah © {new Date().getFullYear()}
              </footer>
              </div>
              </section>
              </main>
            </div>
  );
}