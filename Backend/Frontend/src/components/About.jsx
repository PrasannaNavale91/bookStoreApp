import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import team from "../../public/team-work.jpg";

const About = () => {
  return (
    <>
      <Navbar />
        <div className='mx-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 dark:bg-slate-900 dark:text-white'>
          <div className='w-full md:w-1/2 pt-12 md:pt-28 order-2 md:order-1'>
            <div className='space-y-12'>
              <span className='text-xl uppercase'>
                About Us
              </span>
              <h2 className='text-4xl font-bold'>
                We care about your business than your money!
              </h2>
              <p className='text-xl font-semibold'>
                Bring to the table win-win survival strategies to ensure proactive domination.
              </p>
              <p className=''>
                Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Taking seamless key performance indicators offline to maximize the long tail.
              </p>
            </div>
            <button className="btn mt-6 mr-6 btn-secondary">Learn More</button>
            <button className="btn mx-6 btn-outline btn-secondary">Purchase Now</button>
          </div>
          <div className='w-full md:w-1/2 order-1 pt-12 md:ml-12 md:mt-24'>
            <img src={team} className='md:w-[550px] md:h-[440px]' alt='team-image' />
          </div>
        </div>
        
        <div className='text-center px-4 py-9 space-y-5'>
          <h2 className='text-2xl font-bold'>We're BookStore</h2>
          <p className='lg:w-[30%] mx-auto'>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
        </div>

        <div className='mx-w-screen-2xl container my-8 mx-auto md:px-20 px-4 flex flex-col lg:flex-row'>
          <div className="card grid flex-grow w-auto bg-neutral shadow-xl m-3">
            <div className="card-body space-y-5">
              <h2 className="card-title font-bold">Browse over 12 Million books</h2>
              <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits</p>
              <div className="card-actions justify-start">
                <button className="btn btn-secondary hover:bg-slate-800 hover:text-secondary duration-300 cursor-pointer">Browse Now</button>
              </div>
            </div>
          </div>
          <div className="card grid flex-grow w-auto bg-neutral shadow-xl m-3">
            <div className="card-body space-y-5">
              <h2 className="card-title font-bold">We are here to help!</h2>
              <p>Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop.</p>
              <div className="card-actions justify-start">
                <button className="btn btn-secondary hover:bg-slate-800 hover:text-secondary duration-300 cursor-pointer">Call Now</button>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default About;