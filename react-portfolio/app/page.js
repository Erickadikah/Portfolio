"use client";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";
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
import web10 from "../public/web10.png";
import web8 from "../public/web8.png";
import web12 from "../public/web12.png";
import { useState } from "react";
import { useTheme } from "next-themes";
import Services from "../app/components/Services/index.js";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { BsReddit, BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaPython } from "react-icons/fa";
import { BiLogoGit } from "react-icons/bi";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Erick Adikah</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl font-bold">@Rick</h1>
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
                  href="https://1drv.ms/w/s!AnEH2Aptv4ePgQN6F-0msqBEL3nL?e=fKHOpo"
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
            <div className="text-3xl flex justify-center gap-5 py-3 text-gray-600 dark:text-gray-400">
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
              <a>
                <BsReddit />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-20 md:h-60 md:w-60">
              <Image
                alt="profile"
                src={deved}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto">
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance graphics designer
              and developer. I&apos;ve done some graphics works for Companies
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
              <Image
                alt="design"
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs For Graphics Needs
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
              <Image
                alt="code"
                src={code}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let&rsquo;s
                make it a reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">ReactJs</p>
              <p className="text-gray-800 py-1">NodeJs</p>
              <p className="text-gray-800 py-1">ExpressJs</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">NextJs</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                alt="consulting"
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />
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
              Since the beginning of my journey as a Freelancer Graphics
              designer and developer, I&rsquo;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand Graphics
              design, programming, and consulting.
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
            <div
              className="w-full x1:w-1/2 fle flex-col gap-6 
          items-end text-right x1:-m-1-16 z-10"
            >
              <p className="font-titleFont text-textGreen text-center text-sm tracking-wide dark:text-white">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold text-center dark:text-white">
                Art Galary
              </h3>
              <a href="https://art-gala2b2cbb.netlify.app/">
                <div className="basis-1/2 flex-2">
                  <Image
                    className="w-full h-full object-contain justify-between"
                    width={"80%"}
                    height={"80%"}
                    layout="responsive"
                    src={web10}
                    alt="project7"
                  />
                </div>
              </a>
              <p className="bg-[#003459] text-sm md:text-base p-2 md:p-6 rounded-md  dark:text-white">
                Art Galary is a website where you can find all the art work of
                your favorite artist. and you can also buy the art work from the
                website. you can also find the art work of your{" "}
                <span className="text-teal-500">favorite </span>artist.
              </p>
            </div>
            <div
              className="w-full x1:w-1/2 fle flex-col gap-6 
              items-end text-right x1:-m-1-16 z-10"
            >
              <p className="font-titleFont text-textGreen text-center text-sm tracking-wide dark:text-white">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold text-center dark:text-white">
                Digital Wallet
              </h3>
              <a href="https://digital-credentials-wallet.vercel.app/">
                <div className="basis-1/2 flex-2">
                  <Image
                    className="w-full object-contain justify-between"
                    layout="responsive"
                    src={web8}
                    alt="project7"
                  />
                </div>
              </a>
              <p className="bg-[#003459] text-sm md:text-base md:p-6 rounded-md  dark:text-white">
                the effortless way to manage your job application documents.
                Store your CV, certificates, images, and cover letters in one
                secure place.{" "}
                <span className="text-teal-500">
                  and you can also share your data with other's
                </span>{" "}
                <ul
                  className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
                md:gap-5 justify-between text-textDark flex-wrap"
                >
                  <li className="text-sm md:text-base">React</li>
                  <li className="text-sm md:text-base">JavaScript</li>
                  <li className="text-sm md:text-base">NodeJs</li>
                  <li className="text-sm md:text-base">Express</li>
                  <li className="text-sm md:text-base">MongoDB</li>
                  <li className="text-sm md:text-base">Redux</li>
                  <li className="text-sm md:text-base">Netlify Deployment </li>
                </ul>
              </p>
            </div>
            <div
              className="w-full x1:w-1/2 fle flex-col gap-6 
              items-end text-right x1:-m-1-16 z-10"
            >
              <p className="font-titleFont text-textGreen text-center text-sm tracking-wide dark:text-white">
                Future Projects
              </p>
              <h3 className="text-2xl font-bold text-center dark:text-white">
                Traffi Watch
              </h3>
              <div className="basis-1/2 flex-2">
                <Image
                  className="w-full h-full object-contain justify-between"
                  layout="responsive"
                  src={web12}
                  alt="project7"
                />
              </div>
              <p className="bg-[#003459] text-sm md:text-base p-2 md:p-6 rounded-md  dark:text-white">
                your go-to traffic monitoring and navigation website.
                <span className="text-teal-500">
                  {" "}
                  informed about city traffic and effortlessly navigate to your
                  destination.
                </span>
                S Get real-time updates from fellow drivers, ensuring a smooth
                journey. Try Traffi Watch today and make your commute a breeze.
                <p>
                  {" "}
                  Stack used:{" "}
                  <span className="text-teal-500">
                    <ul className="flex flex-row gap-6">
                      <li>React js</li>
                      <li>Next js</li>
                      <li>Tailwind css</li>
                      <li>Mapbox</li>
                    </ul>
                  </span>
                </p>
              </p>
              <div className=" text-center text-white mt-6 ">
                <h1 className=" font-bold text-2xl">Skills</h1>
                <p className="bg-[#003459] mt-4 p-6">
                  I have strong knowledge of HTML, CSS, JavaScript, React, Next
                  js, Tailwind css, Node js, Express js, MongoDB, Git, Github,
                  and Heroku. And I am also familiar with Firebase.
                </p>
                <div class="flex justify-center items-center mt-8 flex-wrap gap-5 sm:gap-8 sm:flex-row sm:justify-between">
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.1, delay: 0.2 }}
    class="card bg-[#363B49] rounded-lg p-4 w-45 h-40 sm:w-32 sm:h-32 items-center hover:bg-[#4A4E5C] sm:items-start"
  >
    <BiLogoFirebase
      style={{ color: "yellow" }}
      class="card-image w-16 h-16 object-cover rounded-full mb-4"
      alt="Stack 1"
    />
    <p class="card-title text-xl mb-2 text-center text-white">
      Firebase
    </p>
  </motion.div>
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.1, delay: 0.2 }}
    class="card bg-[#363B49] rounded-lg p-4 w-45 h-40 sm:w-32 sm:h-32 flex flex-col items-center"
  >
    <FaNodeJs
      class="card-image w-16 h-16 object-cover rounded-full mb-4"
      alt="Stack 2"
      style={{ color: "green" }}
    />
    <p class="card-title text-xl mb-2 text-center text-white">
      NodeJs
    </p>
  </motion.div>
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.1, delay: 0.2 }}
    class="card bg-[#363B49] rounded-lg p-4 w-45 h-40 sm:w-32 sm:h-32 flex flex-col items-center"
  >
    <TbBrandNextjs
      style={{ color: "#61DAFB" }}
      class="card-image w-16 h-16 object-cover rounded-full mb-4"
      alt="Stack 2"
    />
    <p class="card-title text-xl mb-2 text-center text-white">
      NextJs
    </p>
  </motion.div>
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.1, delay: 0.2 }}
    class="card bg-[#363B49] rounded-lg p-4 w-45 h-40 sm:w-32 sm:h-32 flex flex-col items-center"
  >
    <RiReactjsLine
      style={{ color: "#61DAFB", fontSize: "30px" }}
      class="card-image w-16 h-16 object-cover rounded-full mb-4"
      alt="Stack 2"
    />
    <p class="card-title text-xl mb-2 text-center text-white">
      ReactJs
    </p>
  </motion.div>
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.1, delay: 0.2 }}
    class="card bg-[#363B49] rounded-lg p-4 w-45 h-40 sm:w-32 sm:h-32 flex flex-col items-center"
  >
    <SiTailwindcss
      style={{ color: "#61DAFB" }}
      class="card-image w-16 h-16 object-cover rounded-full mb-4"
      alt="Stack 2"
    />
    <p class="card-title text-xl mb-2 text-center text-white">
      Tailwind
    </p>
  </motion.div>
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.1, delay: 0.2 }}
    class="card bg-[#363B49] rounded-lg p-4 w-45 h-40 sm:w-32 sm:h-32 flex flex-col items-center"
  >
    <SiJavascript
      style={{ color: "yellow" }}
      class="card-image w-16 h-16 object-cover rounded-full mb-4"
      alt="Stack 2"
    />
    <p class="card-title text-xl mb-2 text-center text-white">
      JavaScript
    </p>
  </motion.div>
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.1, delay: 0.2 }}
    class="card bg-[#363B49] p-4 w-45 h-40 sm:w-32 sm:h-32 flex flex-col items-center"
  >
    <FaPython
      style={{ color: "yellow" }}
      class="card-image w-16 h-16 object-cover rounded-full mb-4"
      alt="Stack 2"
    />
    <p class="card-title text-xl mb-2 text-center text-white">
      Python
    </p>
  </motion.div>
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.1, delay: 0.2 }}
    class="card bg-[#363B49] rounded-lg p-4 w-45 h-40 sm:w-32 sm:h-32 flex flex-col items-center"
  >
    <BiLogoGit
      style={{ color: "red" }}
      class="card-image w-16 h-16 object-cover rounded-full mb-4"
      alt="Stack 2"
    />
    <p class="card-title text-xl mb-2 text-center text-white">
      Git
    </p>
  </motion.div>
</div>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center py-2 dark:text-white
              "
          >
            <footer>Erick adikah © {new Date().getFullYear()}</footer>
          </div>
        </section>
      </main>
    </div>
  );
}
