"use client"
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
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
  // const { systemTheme, theme, setTheme } = useTheme();
  //   const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div className={darkMode ? "dark" : ""} >
    <div className='dark:bg-gray-900'>
      <Head className='dark:bg-gray-900'>
      <title>Erick Adikah</title>
      <meta name='description' content='generic'></meta>
      </Head>
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-grey-900'>
    <section className='min-h-screen'>
    <nav className='py-10 mb-12 flex justify-between'>
    <h1 className='text-xl'>Erick Adikah</h1>
    <ul className='flex items-center'>
    <li><BsFillMoonStarsFill  onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl
    '/></li>
    <li>
    <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
    </ul>
    </nav>
    <div className='text-center p-10 py-10'>
      <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Erick Adikah</h2>
      <h3 className='text-2xl py-2 md:text-3xl'>Back-End Developer and Graphics Designer</h3>
      <p className='text-md py-5 leading-8 text-grey-800 md:text-xl max-w-lg mx-auto'>
      Freelance developer and graphics designer with over 1 years of experience in Web development 2 years Experince in Graphics Design.
       I have worked with several companies and individuals to create websites and graphics designs for their businesses.
      </p>
    </div>
    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:bg-grey-900'>
    <a href="https://github.com/ErickAdikah ">
      <AiFillGithub />
      </a>
      <a href="https://twitter.com/https:/erick_adikah">
      <AiFillTwitterCircle />
      </a>
      <a href="https://www.linkedin.com/in/erick-adikah-0b0b3a1b0/">
      <AiFillLinkedin />
      </a>
      <a href="mailto:erickadikah2030@gmail.com">
      <FaEnvelope />
      </a>
    </div>
    <div className='mx-auto relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 dark:bg-grey-900'>
    {/* <Image src={deved} alt="Picture of the author" /> add Image component here */}
    <Image src={deved} layout="fill" objectFit='cover'/>
    </div>
    </section>
    <section>
    <div className='text-center p-10 py-10'>
    <h3 className='text-3xl py-1'>Services I Offer</h3>
    <p className='text-md py-2 leading-8 text-grey-800'>
    Since I started my career as a developer and graphics designer, 
    I have worked with several companies and individuals to create websites and graphics for their businesses.
    <span className='text-teal-600'>Here are some of the services I offer:
    <span className="text-teal-600"> I create websites and graphics for their businesses</span>
    </span>
    </p>
    </div>
    <div className='lg:flex gap-10'>
    <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-900'>
    <Image src={design} width={100} height={100} className='mx-auto' />
    <h3 className='text-lg font-medium pt-8 pb-2'>Graphics Design</h3>
    <p className='py-2'>
    Creating graphics for your business is one of the best ways to attract customers and clients.
    </p>
    <h4 className='py-4 text-teal-800'>Design tools I use</h4>
    <p className='text-gray-800 py-1'>Adobe Photoshop</p>
    <p className='text-gray-800 py-1'>Adobe Illustrator</p>
    <p className='text-gray-800 py-1'>Correl Draw</p>
    <p className='text-gray-800 py-1'>Figma</p>
    </div>
    <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-900'>
      <Image src={code} width={100} height={100} className='mx-auto' />
    <h3 className='text-lg font-medium pt-8 pb-2'>Websites Design</h3>
    <p className='py-2'>
    Creating Websites for your business is one of the best ways to attract customers and clients.
    </p>
    <h4 className='py-4 text-teal-800'>Design tools I use</h4>
    <p className='text-gray-800 py-1'>ReactJs</p>
    <p className='text-gray-800 py-1'>Express Js</p>
    <p className='text-gray-800 py-1'>Node Js</p>
    <p className='text-gray-800 py-1'>JavaScript</p>
    <p className='text-gray-800 py-1'>NextJs</p>
    <p className='text-gray-800 py-1'>Python</p>
    </div>
    <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-900'>
      <Image src={consulting} width={100} height={100} className='mx-auto' />
    <h3 className='text-lg font-medium pt-8 pb-2'>Reach me Through my Socials</h3>
    <p className='py-2'>
    Creating graphics for your business is one of the best ways to attract customers and clients.
    </p>
    <h4 className='py-4 text-teal-800'>Design tools I use</h4>
    <p className='text-gray-800 py-1'>Adobe Photoshop</p>
    <p className='text-gray-800 py-1'>Adobe Illustrator</p>
    <p className='text-gray-800 py-1'>Correl Draw</p>
    <p className='text-gray-800 py-1'>Figma</p>
    </div>
    </div>
    </section>
    <section>
    <div>
    <h3 className='text-3xl text-center py-1 '>Portfolio</h3>
    <p className='text-md py-2 leading-8 text-grey-800 '>
    Since I started my career as a developer and graphics designer, 
    I have worked with several companies and individuals to create websites and graphics for their businesses.
    <span className='text-teal-600'>Here are some of the Projects I have worked on:
    I have worked with several companies and <span className="text-teal-600"></span>
    </span>
    </p>
    </div>
    <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
    <div className='basis-1/3 flex-1'>
    <Image src={web1} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
    </div>
    <div className='basis-1/3 flex-1'>
    <Image src={web2} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
    </div>
    <div className='basis-1/3'>
    <Image src={web3}/>
    </div>
    <div className='basis-1/3 flex-1'>
    <Image src={web4} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
    </div>
    <div className='basis-1/3 flex-1'>
    <Image src={web5} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
    </div>
    <div className='basis-1/3 flex-1'>
    <Image src={web6} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
    </div>
    <div className='basis-1/3 flex-1'>
    <Image src={web7} className="rounded-lg object-cover" width={"50%"} height={"50%"} layout="responsive"/>
    </div>
    </div>
    </section>
    <div className='text-center px-4'>Erick Adikah © {new Date().getFullYear()}</div>
    </main>
    </div>
    </div>
  )
}
