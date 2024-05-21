import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex h-[calc(100vh-1.5rem)] w-full bg-tertiary lg:bg-[url('/images/homeBanner.svg')] bg-no-repeat bg-contain bg-right-bottom bg-[length:800px] justify-start items-center">
       <div className="flex flex-col px-8 lg:px-24 gap-8 lg:w-1/2">
        <h1 className="text-primary font-bold text-2xl">WELCOME TO KLINIKCARE</h1>
        <h1 className="text-white font-bold text-4xl">Meet the Best <br/>Doctor</h1>
        <h2 className="text-primary font-bold text-2xl italic">“Inovasi untuk Kesehatan Anda Antrian Tanpa Stres!”</h2>
        <div className="flex flex-col"></div>
        <h3 className="text-white text-2xl font-medium">Sign in as</h3>
        <div className="flex gap-4">

          <div className="flex bg-coolMint rounded-xl flex-col gap-4 text-primary text-center items-center justify-between px-2 py-2 w-48"  >
            <Image src={'/icons/patient.svg'} alt="" width={100} height={10} className="object-contain" loading={"lazy"}/>
            <h2 className="text-xl font-medium">Patient</h2>
            <Link href={'/login'} className="bg-primary px-8 py-4 text-white rounded-xl hover:opacity-90">Sign-in</Link>
          </div>

          <div className="flex bg-coolMint rounded-xl flex-col gap-4 text-primary text-center items-center justify-between px-2 py-2 w-48"  >
            <Image src={'/icons/doctor.svg'} alt="" width={100} height={10} className="object-contain" loading={"lazy"}/>
            <h2 className="text-xl font-medium">Staff or Doctor</h2>
            <Link href={'/admin'} className="bg-primary px-8 py-4 text-white rounded-xl hover:opacity-90">Sign-in</Link>
          </div>
        </div>
       </div>
    </div>
  
  );
}
