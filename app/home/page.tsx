import Image from "next/image"
import Link from "next/link"
import { getUsers } from "../lib/data"


const page =async () => {
  const users = await getUsers();

  return (
    
    <div className="flex w-full bg-white justify-start items-center relative flex-col relative">
        <div className="flex h-[calc(100vh-1.5rem-2rem)] w-full before:absolute before:content-[''] relative before:w-full before:h-full before:bg-opacity-50 bg-[url('/images/klinikunila.svg')] bg-cover ">
          <div className="flex w-full h-full items-start justify-start flex-col lg:px-44 py-24">
            <h1 className="text-white text-4xl font-bold leading-relaxed">MAKE YOUR <br/>APPOINTMENT NOW!</h1>
            <p className="text-white">Comfort and convenience in planning your <br></br>health care by making reservations online.<br>
            </br> Immediately find a schedule that suits your<br></br> needs and ensure you get the care you need <br></br>on time.</p>
            <Link href={''} className="px-4 py-2 bg-[#77B0AA] text-white rounded-xl">Reserve Now</Link>
          </div>
          <Image src={'/images/doctor.svg'} alt="" width={100} height={50} className="object-contain w-2/3 h-[60%] absolute bottom-5 right-[-100px]"/>
        </div>
        <div className="flex w-full h-screen rounded-ellipse bg-white relative top-[-70px] justify-center">
            <div className="flex lg:w-1/2 w-full rounded-lg h-32 relative top-[-90px] bg-secondary p-16 items-start gap-8">
              <div className="flex w-2/3 items-start justify-start">
                <div className="flex flex-col justify-start text-start">
                  <h1 className="text-[#A7D5F4] text-2xl font-bold relative top-[-50px]">KLINIKCARE</h1>
                  <h2 className="text-white relative top-[-50px] opacity-70 text-xl">“Inovasi untuk Kesehatan Anda Antrian Tanpa Stres!”</h2>
                </div>
              </div>
              <div className="flex w-1/3 items-start justify-start">
                <div className="flex flex-col justify-start text-start">
                  <Image src={'/icons/healplus.svg'} alt="" width={20} height={10} className="object-contain relative top-[-40px] left-[40px]"/>
                  <h2 className="text-[#B8CED1] relative top-[-50px] left-[60px]">Choose the doctor and schedule as you like</h2>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default page