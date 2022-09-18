import React from 'react';
import '../styles/About.css';
import me from '../images/me.jpg';

const About = () => {
  return (
    <div id='about' className='pt-20'>
        <h1 className='text-3xl text-lightGrey font-bold mb-2'><span className='text-lightGreen text-xl mr-2'>01.</span>About Me</h1>

        <main className='flex items-center justify-between'>
          <article className='text-deepGrey text-lg mt-3 font-medium flex-1 px-4'>
            <p>Hi again&#128075;, I am Tobi and I enjoy building items that live on the web. </p>

            <p className='my-2'>My interest in web development grew in early 2022 due to inspiration from friends and my
              desire to attain a technical skill.</p>

            <p className='my-2 leading-snug'>Prior to this, I was a Navigator. <br /> </p>

            <p className="my-2">Fast-forward to today, I&apos;ve had the priviledge to learn my web development skills from 
              <a className='text-lightGreen hover:underline' href="https://www.stutern.com/" target='_blank' rel="noreferrer"> Stutern </a>
              and I&apos;ve had a few projects since then.
            </p>

            <div id="skills">
              <p className="my-2">The few technologies I&apos;m proficient with include: </p>
              {/* <div className="flex items-center justify-between w-3/4 md:w-2/4 text-sm"> */}
              <div className="flex items-center justify-between w-full max-w-xs text-base">
                <ol className='list-none'>
                  <li>HTML</li>
                  <li>CSS</li>
                </ol>
                <ol className='list-none'>
                  <li>JavaScript</li>
                  <li>React Js</li>
                </ol>
              </div>
            </div>

            {/* <h3>Why did I switch?</h3>
            <p>Well, at first, I had little or no idea about tech or coding. However, has time went on, I began to meet
              techies and have them as friends. They inspired me. I mean, they could easily make web pages and applications look
              astonishing by writing a few lines of code. I was mesmerized and wanted to try it too. I began to feel the huge
              to build web pages just by clicking my laptop's keyboards (so I thought). So I enrolled at Stutern and began then 
              I totally fell in love with it! I wanted to know more, thereby making research, and increasing my knowledge. It was
              extremely challenging at first but the joy of been able to build and solve technical problems motivated and still
              motivates me.</p> */}
          </article>

          <section className='w-full max-w-sm mt-8 hover:opacity-90'>
            <img 
              src={me} 
              alt="Me"
              className='rounded-xl w-4/5 mx-auto' 
            />
          </section>

        </main>
    </div>
  )
}

export default About