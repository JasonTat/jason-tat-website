import Image from "next/image";

import { Fredoka } from "next/font/google";

import Socials from '../components/Socials';



const fredoka = Fredoka({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (

    <div className={`${fredoka.className} pt-16 text-slate-700 flex flex-col items-center justify-center`}>
      
      {/* intro */}
      <div className="text-6xl">
        <h1>Hi! I'm Jason Tat.</h1>
      </div>
      {/* about me */}
      <div className="mt-6 text-xl w-1/2">
        <p className="italic font-semibold mb-2">A little about me</p>
        <p className="mb-6">
          I'm a Full Stack Developer with a passion for creating excellent and innovative projects. 
        </p>
        <p className="">
          I've always had a passion for technology, especially software. The first time I've ever read, touched, and written code was back in 2010 during the peak era of Tumblr blogs, where I'd edit the HTML and CSS of my own blog page.  
        </p>
        <p className="mt-6">
          What got me interested in software was working at TELUS as a Technical Support Representative. We'd use multiple pieces of software to analyze and diagnose a client's issue, and it was through doing that, that I became aware of how amazing software can be, and interested how it looked like under the hood.
        </p>
      </div>

      {/* education */}
      <div className="mt-6 text-xl w-1/2">

        <p>
          I graduated with honours from Northern Alberta Institute of Technology (NAIT) with a 3.8 GPA. I'm extremely grateful for my time at NAIT, for the instructors that taught me. 
          Their passion for technology, development, and career development inspires me to continue my own learning and career development in this field. 
        </p>
      </div>

      {/* projects / experience */}
      <div className="mt-6 text-xl w-1/2">
        <h2 className="italic font-semibold">  
          Projects
        </h2>
        {/* PROJECTS component */}


      </div>
      {/* socials */}
      <div className="mt-6 text-xl w-1/2">
        <p className="italic font-semibold mb-2">Contact Me!</p>
        <Socials />
      </div>

    </div>
    
  );
}
