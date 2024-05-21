"use client";
import { faUser,faBell} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  return (
    <div className="h-full flex items-center justify-between h-24 bg-whiteSmoke tg text-white px-8 lg:px-24 ">
        <Image src={'/images/logo.svg'} width={150} height={100} alt="" className="object-contain h-full"/>
      <div className="flex gap-24 items-center justify-center  text-black text-xl font-medium">
            <Link href={'/home'}>Home</Link> 
            <Link href={'/'}>Doctor</Link>
            <Link href={'/'}>Information</Link>
      </div>
      <div className="flex gap-8 items-center justify-between">
        <Link href={'/'} className=""><FontAwesomeIcon icon={faUser} className="flex h-full w-4 object-contain text-[#A7A7A7]"/></Link>
        <Link href={'/'} className=""><FontAwesomeIcon icon={faBell} className="flex h-full w-4  object-contain text-[#A7A7A7]"/></Link>

      </div>
    </div>
  );
};
export default Navbar;