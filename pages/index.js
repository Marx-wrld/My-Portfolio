import Head from "next/head";
import { useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    let intervalId;

    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };

    // Check if the component is mounted before setting up the interval
    if (typeof window !== "undefined") {
      intervalId = setInterval(updateYear, 60000);
    }

    return () => {
      // Clear the interval if it's set
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div className={darkMode ? "" : "dark"}>
      <Head>
        <title>Ian Marx - Portfolio</title>
        <meta name="description" content="Ian Marx is a software engineer passionate about coding, problem solving, and continuously expanding knowledge in the ever-evolving field of software engineering." />
        <link rel="icon" href="/profile.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-700 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1Jbj8G7rxuO_aG32KfFQzMakjq26XGAKg/view?usp=sharing">
                  View Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10 ">
            <h2 className="text-5xl py-4 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Ian Marx
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
             Software Engineer 
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              A software engineer passionate about coding, problem solving, and continuously expanding knowledge in the ever evolving field of software engineering. Connect with me & let's get cracking!
            </p>
            <br/>
            <a
              className="bg-gradient-to-r from-cyan-500 text- to-blue-700 text-white px-4 py-2 border-none rounded-md ml-1"
              href="https://www.github.com/Marx-wrld">
              GitHub
            </a>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 md:w-96 md:h-96 mt-20 relative overflow-hidden">
              <Image src={deved} alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer custom software development, full-stack development, API integration, software maintenance, code review, technology consulting, software testing, and project management services. With expertise in diverse<span className="text-teal-500"> programming languages and frameworks</span>, I deliver quality solutions tailored to your needs, ensuring<span className="text-teal-500"> optimal functionality</span>.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I also offer other services, including DevOps and building machine learning models.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-blue-600 ">
                UI/UX Design
              </h3>
              <p className="py-2">
                Creating elegant designs suited to your needs.
              </p>
              <h4 className="py-4 text-teal-500">Design Tools:-</h4>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 text-blue-600">
                Coding
              </h3>
              <p className="py-2">
                Do you have an idea of your next Website or Application? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-500">Coding Languages:-</h4>
              <p className="text-gray-800 py-1">Kotlin (SpringBoot)</p>
              <p className="text-gray-800 py-1">Javascript (React.js, Next.js, Node.js)</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-gray-800 py-1">SQL & NoSQL</p>
              <p className="text-gray-800 py-1">Python (Django, Flask)</p>
              <p className="text-gray-800 py-1">Php</p>
              <p className="text-gray-800 py-1">Dart</p>
              <p className="text-gray-800 py-1">Html5, Css3 & Sass</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 text-blue-600 ">Consultation & Cooperation</h3>
              <p className="py-2">
                Are you interested in my feedback on your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-500">Available On:-</h4>
              <p className="text-gray-800 py-1">LinkedIn</p>
              <p className="text-gray-800 py-1">X(Twitter)</p>
              <p className="text-gray-800 py-1">Reddit</p>
              <p className="text-gray-800 py-1">Discord</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a software engineer, I have developed and debugged several <span className="text-teal-500">software.</span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Below are a few examples of my work.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <a href="https://www.figma.com/file/mieqraQE2M2GgDk9BZomv0/Movie-Ticket-Booking-High-Fidelity-Prototype-App?type=design&node-id=0%3A1&mode=design&t=3i0r80gzrV4Te8px-1" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                alt=""
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://www.figma.com/file/WSNppc3g1uGVyNRr0UloIG/NFT'S-High-Fidelity-Prototype?type=design&mode=design&t=vDJSwNd8IsVtMQOP-1" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                alt=""
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://github.com/Marx-wrld" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                alt=""
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://github.com/Marx-wrld" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                alt=""
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://github.com/Marx-wrld/StudyPal" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                alt=""
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://github.com/Marx-wrld/Hotel-booking-site" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                alt=""
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </a>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Contact</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
             Get in touch with me via the links below, for more <span className="text-teal-500"> inquiry.</span>
            </p>
            <br/>
            <div>
      <FacebookShareButton
        url={'https://www.facebook.com/lan.marx.3/'} >
        <FacebookIcon size={35} round />
      </FacebookShareButton>
      &nbsp;
      &nbsp;
      <PinterestShareButton
        url={'https://www.pinterest.com/its_imarx/'} >
        <PinterestIcon size={35} round />
      </PinterestShareButton>
      &nbsp;
      &nbsp;
      <RedditShareButton
        url={'https://www.reddit.com/user/its_imarx'} >
        <RedditIcon size={35} round />
      </RedditShareButton>
      &nbsp;
      &nbsp;
      <WhatsappShareButton
        url={'https://wa.me/254740334255?text=Hello,%20Ian%20Marx?'} >
        <WhatsappIcon size={35} round />
      </WhatsappShareButton>
      &nbsp;
      &nbsp;
      <LinkedinShareButton
        url={'https://www.linkedin.com/in/ian-marx-761ab61b4/'} >
        <LinkedinIcon size={35} round />
      </LinkedinShareButton>
    </div>
    <br/>
        <div>
          <footer>
              {/* Dynamically display the current year */}
              <p className="text-white text-center text-sm sm:text-base" style={{ color: '#fff', textAlign: 'center' }}>
               Copyright &copy; {currentYear}. All Rights Reserved
              </p>
            </footer>
        </div>
          </div>
        </section>
      </main>
    </div>
  );
}
