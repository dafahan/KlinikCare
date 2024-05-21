"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';


export default function Home() {
  const [username,usernameupdate] = useState('');
  const [password,passwordupdate] = useState('');
  const proceedLogin = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(1);
    e.preventDefault();
    if (validate()) {
      fetch(`http://localhost:5000/user?username=${username}`)
        .then((res) => res.json())
        .then((resp) => {
            console.log(resp[0].password)
          if (Object.keys(resp).length === 0) {
            
          } else {
            if (resp[0].password === password) {
              
              sessionStorage.setItem('username', username);
              alert('login success');
              window.location.href = '/user/dashboard'
            } else {
                alert('wrong password');
            }
          }
        })
        .catch((err) => {
         
        });
    }
  };

 
  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
    
    }
    if (password === '' || password === null) {
      result = false;
      
    }
    return result;
  };

  return (
    <div className="flex h-[calc(100vh-1.5rem-2rem)] w-full bg-white justify-start items-center pt-8 relative flex-col">
        <Image src={'/images/plus.svg'} width={150} height={100} className="object-contain absolute left-0 top-[25%]" alt=""/>
        <Image src={'/images/logo.svg'} width={300} height={100} className="object-contain" alt=""/>
        <div className="flex w-full h-full px-16 lg:px-28 flex-col items-center gap-8 pt-24">
            <form onSubmit={proceedLogin} className="flex w-full flex-col justify-center items-center   ">
            <div className="flex w-full lg:w-2/3 justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="text-black text-6xl">Sign In</h1>
                    <h1 className="text-black text-2xl">Welcome to Klinik UNILA </h1>
                </div>
                <Link href={'/admin'} className="text-white bg-tertiary px-6 py-4 text-2xl flex h-fit mt-4 rounded-xl">Sign Up</Link>
            </div>
            <div className="flex w-full lg:w-2/3  bg-accent flex-col  justify-between p-16 gap-4 rounded-lg"  >
                <div className="flex w-full gap-8">
                <div className="flex w-full flex-col">
                    <h1 className="text-4xl">Username</h1>
                    <input type="text" value={username} onChange={e=>usernameupdate(e.target.value)} placeholder="username" name="usernane" className="bg-gray-200 rounded-xl h-24 p-2 w-full"/>
                </div>
                <div className="flex w-full flex-col">
                    <h1 className="text-4xl">Password</h1>
                    <input type="password" value={password} onChange={e=>passwordupdate(e.target.value)}  placeholder="password" name="password" className="bg-gray-200 rounded-xl h-24 p-2 w-full"/>
                </div>
                </div>
                <div className="flex items-center justify-between text-xl">
                    <button className="bg-tertiary px-8 py-2 text-xl text-white rounded-lg" type="submit">Submit</button>
                    <p>Don't have an account yet? <Link href={'/user/register'} className="text-[#77B0AA]">Register</Link></p>
                </div>

            </div>
            </form>
        </div>
    </div>
  
  );
}
