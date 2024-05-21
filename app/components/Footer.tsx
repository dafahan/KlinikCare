"use client";
import { faPhone ,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

  return (
    <div className="h-full flex items-center justify-end h-[1.5rem] bg-secondary tg text-white px-8 lg:px-48 ">
      <div className="flex gap-16 items-center ">
        <span><FontAwesomeIcon icon={faPhone}/> Tel: 222.133.1212</span>
        <span><FontAwesomeIcon icon={faEnvelope}/> contact@klinikcare.com</span>

      </div>
    </div>
  );
};
export default Footer;