"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, usernameUpdate] = useState('');
  const [password, passwordUpdate] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const proceedLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (validate()) {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
          console.log(data.message);
          router.push('/dashboard'); // Replace with your desired route
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
    return username !== '' && password !== '';
  };

  return (
    <div className="flex h-[calc(100vh-1.5rem-2rem)] w-full bg-white justify-start items-center pt-8 relative flex-col">
      <Image src={'/images/plus.svg'} width={150} height={100} className="object-contain absolute left-0 top-[25%]" alt=""/>
      <Image src={'/images/logo.svg'} width={300} height={100} className="object-contain" alt=""/>
      <div className="flex w-full h-full px-16 lg:px-28 flex-col items-center gap-8 pt-12">
        <form onSubmit={proceedLogin} className="flex w-full flex-col justify-center items-center">
          <div className="flex w-full lg:w-2/3 justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-black text-4xl">Sign In</h1>
              <h1 className="text-black text-xl">Welcome to Klinik UNILA</h1>
            </div>
            <Link href={'/register'} className="text-white bg-tertiary px-3 py-2 text-xl flex h-fit mt-4 rounded-xl">Sign Up</Link>
          </div>
          <div className="flex w-full lg:w-2/3 bg-accent flex-col justify-between p-16 gap-4 rounded-lg">
            <div className="flex w-full gap-8">
              <div className="flex w-full flex-col">
                <h1 className="text-2xl">Username</h1>
                <input
                  type="text"
                  value={username}
                  onChange={e => usernameUpdate(e.target.value)}
                  placeholder="username"
                  name="username"
                  className="bg-gray-200 rounded-xl h-12 p-2 w-full"
                />
              </div>
              <div className="flex w-full flex-col">
                <h1 className="text-2xl">Password</h1>
                <input
                  type="password"
                  value={password}
                  onChange={e => passwordUpdate(e.target.value)}
                  placeholder="password"
                  name="password"
                  className="bg-gray-200 rounded-xl h-12 p-2 w-full"
                />
              </div>
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <div className="flex items-center justify-between text-md">
              <button className="bg-tertiary px-4 py-1 text-xl text-white rounded-lg" type="submit">Submit</button>
              <p>Don't have an account yet? <Link href={'/register'} className="text-[#77B0AA]">Register</Link></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
