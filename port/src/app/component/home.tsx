"use client"
import Typewriter from 'typewriter-effect';
import { LuPhoneOutgoing } from "react-icons/lu";
import React from 'react'
import Image from 'next/image';

const Hero = () => {
    return (
        <div id="Home">

            <section className="text-black font-sans">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Hey ! I Am Aashir Shabbir

                            <Typewriter
                                options={{
                                    strings: ['Web Developer / UX/UI designer ', "Front End / Back End Developer ", "Creative Designer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p className="mb-8 text-xl leading-relaxed">
                            A passionate and Creative web Developer for your websites.
                        </p>
                        <div className="flex  items-center justify-center">
                            <button className="flex items-center  gap-2 mt-2 text-white bg-[#35374B] border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                               Contact
                               <LuPhoneOutgoing/>
                            </button>

                        </div>
                    </div>
                    <div className="lg:max-w-lg px-24 lg:w-full md:w-1/2 w-5/6">
                        <Image
                            className="object-cover object-center rounded"
                            alt="hero"
                            src={require("../../../public/logo/IMG_8909.jpg")} height={250} width={350}
                        />
                    </div>
                </div>
            </section>





        </div>
    )
}

export default Hero