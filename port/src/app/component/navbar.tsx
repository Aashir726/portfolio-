import { IoIosCloudDownload } from "react-icons/io";
import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <div>


            <header className="text-white bg-[#35374B] body-font">
                <div className="container mx-auto flex  justify-end p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium  items-center text-gray-900 mb-4 md:mb-0">
                        
                        <span className=" text-white text-3xl">Portfolio</span>
                    </a>
                    <nav className="md:ml-auto text-xl flex flex-wrap items-center  justify-end">
                        <Link href={"#Home"} className="mr-5 cursor-pointer hover:text-gray-500">Profile </Link>
                        <Link href={"#About"} className="mr-5 cursor-pointer hover:text-gray-500">About   </Link>
                        <Link href={"#Projects"} className="mr-5 cursor-pointer hover:text-gray-500">Projects</Link>
                        <Link href={"#Skills"} className="mr-5 cursor-pointer hover:text-gray-500">Skills </Link>
                        <Link href={"#Contact"} className="mr-5 cursor-pointer hover:text-gray-500">Contact </Link>
                        <Link href={"#CV"} className="mr-1 cursor-pointer hover:text-gray-500">CV</Link>
                        <IoIosCloudDownload />
                    </nav>
                   
                </div>
            </header>
            

        </div>
    )
}

export default Navbar