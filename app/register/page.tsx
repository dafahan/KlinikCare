"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [successRegist,setSuccessRegist] = useState(0)
    const [nextForm,updateNextForm] = useState(1)
  return (
    <div className={`flex min-h-[calc(100vh-1.5rem-2rem)] w-full bg-white justify-start items-center py-8 relative flex-col`}>
        {successRegist && (
            <div className="flex backdrop-blur-xl fixed w-full h-full justify-center items-center fixed top-0">
                <div className={`flex z-50 w-full lg:w-1/2 rounded-xl shadow-2xl p-18 bg-white flex-col text-center items-center justify-center gap-4 p-16`}>
                    <div className="flex py-4 px-8 bg-tertiary text-white rounded-md">
                        Registration Was Successful
                    </div>
                    <Link href={'/home'} className="bg-tertiary rounded-md text-white px-3  text-sm">Back</Link>

                </div>
            </div>
        )}
        <Image src={'/images/plus.svg'} width={150} height={100} className="object-contain absolute left-0 top-[25%]" alt=""/>
        <Image src={'/images/logo.svg'} width={300} height={100} className="object-contain" alt=""/>
        <div className="flex w-full h-full px-16 lg:px-28   flex-col items-center gap-8 pt-6">
            <div className="flex w-full lg:w-2/3   justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="text-black text-4xl">Sign Up</h1>
                    <h1 className="text-black text-xl">Welcome to Klinik UNILA </h1>
                </div>
                <Link href={'/register'} className="text-white bg-tertiary px-3 py-2 text-xl flex h-fit mt-4 rounded-xl">Sign Up</Link>
            </div>
            {nextForm ? (
            <div className="flex w-full lg:w-2/3  bg-accent flex-col  justify-between p-16 gap-4 rounded-lg"  >
                <div className="flex w-full gap-8">
                    <div className="flex w-full flex-col">
                        <h1 className="text-2xl">Email Address</h1>
                        <input type="text" placeholder="username" className="bg-gray-200 rounded-xl h-12 p-2 w-full"/>
                    </div>
                    <div className="flex w-full flex-col">
                        <h1 className="text-2xl">Phone Number</h1>
                        <input type="password" placeholder="password" className="bg-gray-200 rounded-xl h-12 p-2 w-full"/>
                    </div>
                </div>
                <div className="flex w-full gap-8">
                    <div className="flex w-full flex-col">
                        <h1 className="text-2xl">Create a Username</h1>
                        <input type="text" placeholder="username" className="bg-gray-200 rounded-xl h-12 p-2 w-full"/>
                    </div>
                    <div className="flex w-full flex-col">
                        <h1 className="text-2xl">Password</h1>
                        <input type="password" placeholder="password" className="bg-gray-200 rounded-xl h-12 p-2 w-full"/>
                    </div>
                </div>
                <div className="flex items-center justify-between text-md">
                    <button className="bg-tertiary px-4 py-1 text-xl text-white rounded-lg" onClick={()=>updateNextForm(0)}>Next</button>
                    <p>Already have an account? <Link href={'/login'} className="text-[#77B0AA]">Login</Link></p>
                </div>

            </div>
            ):(
                <div className="flex w-full lg:w-2/3  bg-accent flex-col  justify-between p-16 gap-4 rounded-lg">
                     <div className="flex w-full gap-8">
                        <div className="flex w-full flex-col gap-2">
                            <h1 className="text-2xl">Name</h1>
                            <input type="text" placeholder="name" className="bg-gray-200 rounded-xl h-12 p-2 w-full"/>
                        </div>
                    </div>
                    <div className="flex w-full gap-8">
                        <div className="flex w-full flex-col gap-2">
                            <h1 className="text-2xl">Gender</h1>
                            <div className="flex gap-8">
                            <div className="flex w-full flex-col">
                                <div className="flex items-center w-full rounded-xl h-12 px-8 bg-gray-200 gap-4 ">
                                        <input type="radio" placeholder="Female" name="gender" id="female" value={"female"} className="rounded-xl h-4 " />
                                        <label htmlFor="female">Female</label><br></br>
                                    </div>
                                </div>

                                <div className="flex w-full flex-col">
                                    <div className="flex items-center w-full rounded-xl h-12 px-8 bg-gray-200 gap-4 ">
                                        <input type="radio" placeholder="Male" name="gender" id="male" value={"female"} className="rounded-xl h-4 " />
                                        <label htmlFor="male">Male</label><br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full gap-8">
                        <div className="flex w-full flex-col gap-2">
                            <h1 className="text-2xl">BPJS Identification Number (Optional)</h1>
                            <input type="number" placeholder="BPJS Identification Number" name="bpjs" className="bg-gray-200 rounded-xl h-12 p-2 w-full"/>
                        </div>
                    </div>

                    <div className="flex w-full gap-8">
                        <div className="flex w-full flex-col gap-2">
                            <h1 className="text-2xl">Date of Birth</h1>
                            <input type="date" placeholder="DD/MM/YYYY" name="birth" className="bg-gray-200 rounded-xl h-12 p-2 w-full"/>
                        </div>
                    </div>

                    <div className="flex w-full gap-8">
                        <div className="flex w-full flex-col gap-2">
                            <h1 className="text-2xl">Address</h1>
                            <textarea className="bg-gray-200 rounded-xl h-24 p-2 w-full"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-start text-md">
                        <button className="bg-tertiary px-4 py-1 text-xl text-white rounded-lg hover:opacity-60" onClick={()=>setSuccessRegist(1)}>Submit</button>

                    </div>
                </div>
            )}

        </div>
    </div>
  
  );
}
