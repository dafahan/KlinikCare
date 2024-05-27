"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
    const [successRegist,setSuccessRegist] = useState(0)
    const [nextForm,updateNextForm] = useState(1)
    const [username, usernameUpdate] = useState('');
    const [password, passwordUpdate] = useState('');
    const [email, emailUpdate] = useState('');
    const [phone, phoneUpdate] = useState('');
    const [name, nameUpdate] = useState('');
    const [gender, genderUpdate] = useState('');
    const [bpjs, bpjsUpdate] = useState('');
    const [birthDate, birthDateUpdate] = useState('');
    const [address, addressUpdate] = useState('');

    const proceedRegist = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
    
        if (validate()) {
          try {
            const response = await fetch('/api/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password, email, phone, name, gender, birthDate, address,bpjs }),
            });
    
            const data = await response.json();
            if (response.ok) {
              console.log(data.message);

            } else {
              setError(data.message);
            }
          } catch (error) {
            setError('Failed to login. Please try again later.');
          }
        } else {
          setError('Please fill in all fields');
        }
      };
      const validate = () => {
        const requiredFields = [username, password, email, phone, name, gender, birthDate, address];
        const allFieldsNotEmpty = requiredFields.every(field => field.trim() !== '');
        return allFieldsNotEmpty;
    };
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

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
        <form onSubmit={proceedRegist} className="flex w-full h-full px-16 lg:px-28   flex-col items-center gap-8 pt-6">
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
                        <input type="text" onChange={e => emailUpdate(e.target.value)} placeholder="email" name="" className="bg-gray-200 rounded-xl h-12 p-2 w-full"/>
                    </div>
                    <div className="flex w-full flex-col">
                        <h1 className="text-2xl">Phone Number</h1>
                        <input type="phone" onChange={e => phoneUpdate(e.target.value)} placeholder="phone" className="bg-gray-200 rounded-xl h-12 p-2 w-full"/>
                    </div>
                </div>
                <div className="flex w-full gap-8">
                    <div className="flex w-full flex-col">
                        <h1 className="text-2xl">Create a Username</h1>
                        <input type="text" onChange={e => usernameUpdate(e.target.value)} placeholder="username" className="bg-gray-200 rounded-xl h-12 p-2 w-full"/>
                    </div>
                    <div className="flex w-full flex-col">
                        <h1 className="text-2xl">Password</h1>
                        <input type="password" onChange={e => passwordUpdate(e.target.value)} placeholder="password" className="bg-gray-200 rounded-xl h-12 p-2 w-full"/>
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
                            <input type="text" onChange={e => nameUpdate(e.target.value)} placeholder="name" name="name" className="bg-gray-200 rounded-xl h-12 p-2 w-full"/>
                        </div>
                    </div>
                    <div className="flex w-full gap-8">
                        <div className="flex w-full flex-col gap-2">
                            <h1 className="text-2xl">Gender</h1>
                            <div className="flex gap-8">
                            <div className="flex w-full flex-col">
                                <div className="flex items-center w-full rounded-xl h-12 px-8 bg-gray-200 gap-4 ">
                                        <input type="radio" onChange={e => genderUpdate(e.target.value)} placeholder="Female" name="gender" id="female" value={"female"} className="rounded-xl h-4 " />
                                        <label htmlFor="female">Female</label><br></br>
                                    </div>
                                </div>

                                <div className="flex w-full flex-col">
                                    <div className="flex items-center w-full rounded-xl h-12 px-8 bg-gray-200 gap-4 ">
                                        <input type="radio" placeholder="Male" onChange={e => genderUpdate(e.target.value)} name="gender" id="male" value={"female"} className="rounded-xl h-4 " />
                                        <label htmlFor="male">Male</label><br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full gap-8">
                        <div className="flex w-full flex-col gap-2">
                            <h1 className="text-2xl">BPJS Identification Number (Optional)</h1>
                            <input type="number" onChange={e => bpjsUpdate(e.target.value)} placeholder="BPJS Identification Number" name="bpjs" className="bg-gray-200 rounded-xl h-12 p-2 w-full"/>
                        </div>
                    </div>

                    <div className="flex w-full gap-8">
                        <div className="flex w-full flex-col gap-2">
                            <h1 className="text-2xl">Date of Birth</h1>
                            <input type="date" onChange={e => birthDateUpdate(e.target.value)} placeholder="DD/MM/YYYY" name="birth" className="bg-gray-200 rounded-xl h-12 p-2 w-full"/>
                        </div>
                    </div>

                    <div className="flex w-full gap-8">
                        <div className="flex w-full flex-col gap-2">
                            <h1 className="text-2xl">Address</h1>
                            <textarea onChange={e => addressUpdate(e.target.value)} className="bg-gray-200 rounded-xl h-24 p-2 w-full" name="address"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-start text-md">
                        <button type="submit" className="bg-tertiary px-4 py-1 text-xl text-white rounded-lg hover:opacity-60" onClick={()=>setSuccessRegist(1)}>Submit</button>

                    </div>
                </div>
            )}

        </form>
    </div>
  
  );
}
