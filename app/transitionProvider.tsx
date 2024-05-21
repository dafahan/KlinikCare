"use client";
import { usePathname } from "next/navigation";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  const firstPathName = pathName.split("/")[1];
  return (
    <>
        <Topbar/>
        {!(firstPathName=="") && <Navbar />}
        {children}
        {!(firstPathName=="") && <Footer />}
    </>
  );
};

export default TransitionProvider;