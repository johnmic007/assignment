"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useCallback, useState } from 'react';
import logo from '../public/logo.png'
import NavbarItem from './NavbarItems';
import { FaBell, FaSearch } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import pro from '../public/no-profile.jpg'
import AccountMenu from "./AccountMenu";

export const Navbar = () => {

    const [showMobileMenu , setShowMobileMenu] = useState(false)
    const [showBackground, setShowBackground] = useState(false);
    const [showAccountMenu ,setShowAccountMenu]= useState(false);
    const [search, setSearch] = useState(false);

    const handleSearch = () => {
        setSearch(!search);
    }

    const toggleMobileMenu =useCallback (()=>{
           setShowMobileMenu((current)=>!current)
    },[])

    const toggleAccountMenu =useCallback (()=>{
        setShowAccountMenu((current)=>!current)
 },[])

    return (
        <nav className="w-full bg-black fix z-40">
            <div className="flex p-2">
                <Image src={logo} className="h-4 lg:h-7" alt="Logo" width={140} height={60} />
                <div className='lg:flex hidden gap-5 '>
                    <NavbarItem label="Home" />
                    <NavbarItem label="Tv Shows" />
                    <NavbarItem label="Movies" />
                    <NavbarItem label="New & popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by language" />
                </div>

                <div onClick={toggleMobileMenu} className='lg:hidden cursor-pointer '>
                    <div className=''> Browser</div>
                   < MobileMenu visible={showMobileMenu} />
                </div>

                <div className=" flex flex-row ml-auto gap-7 items-center  ">
                    <div className="  text-gray-200 hover:text-gray-400 cursor-pointer">
                        <FaSearch />
                    </div>
                    <div className="  text-gray-200 hover:text-gray-400 cursor-pointer">
                        <FaBell/>
                    </div>
                    <div className=" flex flex-row items-center gap-2 cursor-pointer  relative ">
                        <div onClick={toggleAccountMenu} className=" w-6 h-6 lg:h-10 rounded-md overflow-hidden ">
                             <Image src={pro} alt='' />
                        </div>
                             <AccountMenu visible={showAccountMenu} />
                    </div>

                </div>

            </div>

        </nav>
    )
}
