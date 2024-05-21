"use client";
import { faPhone ,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Topbar = () => {

  return (
    <div className="h-full flex items-center justify-end h-[1.5rem] bg-secondary tg text-white px-8 lg:px-48 ">
      <div className="flex gap-16 items-center ">
        <Link href={"tel:+62859196338649"}><FontAwesomeIcon icon={faPhone}/> Tel: 222.133.1212</Link>
        <Link href={"mailto:ontact@klinikcare.com"}><FontAwesomeIcon icon={faEnvelope}/> contact@klinikcare.com</Link>

      </div>
    </div>
  );
};
export default Topbar;