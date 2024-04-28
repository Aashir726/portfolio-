import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div  id="Projects">



  <section className="text-gray-600 mt-16 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          My Projects
        </h1>
        <p className="lg:w-2/3 mx-auto text-2xl leading-relaxed ">
         Here are Some Projects I can have done with the help of Tailwind HTML  CSS & Next.js
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require("../../../public/project/Screenshot (1).png")}
            />
            <div className="px-8 py-11  z-10 w-full border-4 border-gray-600 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-xl  title-font font-medium text-red-800 mb-2">
               Facebook clone
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Clone
              </h1>
              <p className="leading-relaxed mb-3">
                Project Creating clone like orignal facebook page       
              </p>
                <Link href={"https://vercel.com/aashir-shabbirs-projects/clone"}
                target="_blank">
              <p className="leading-relaxed mb-3 text-red-950 text-xl">

                View Project     
              </p>
                </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require("../../../public/project//Screenshot (5).png")}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-600 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-lg title-font font-medium text-red-800 mb-6">
                The Clothing Store
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Store
              </h1>
              <p className="leading-relaxed">
                A reliable clothing store for All of your needs
              </p>
              <Link target="_blank"
               href="https://github.com/Aashir726/new-project">
                  <p className="mt-5 text-red-900 text-xl">
                    View project on github
                  </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require("../../../public/project/Screenshot (6).png")}
            />
            <div className="px-8 py-10 relative z-10  w-full sm:w-full border-4 border-gray-600 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-lg title-font font-medium text-red-800 mb-1">
                Portfolio
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Old portfolio new update soon
              </h1>
              <p className="leading-relaxed">
                Portfolio to showing my skills
              </p>
              <Link  target="_blank"
               href="https://github.com/Aashir726/old-portfolio/tree/main/nextjsport">
                <p className='text-xl  mt-10 text-red-950'>
                  View Project 
                </p>
              
              </Link>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  </section>
)










    </div>
  )
}

export default Projects