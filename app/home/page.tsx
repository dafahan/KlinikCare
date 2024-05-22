import Image from "next/image"

const page = () => {
  return (
    
    <div className="flex w-full bg-white justify-start items-center relative flex-col relative">
        <div className="flex h-[calc(100vh-1.5rem-2rem)] w-full before:absolute before:content-[''] before:w-full before:h-full before:bg-opacity-50 bg-[url('/images/klinikunila.svg')] bg-cover ">

        </div>
        <div className="flex w-full h-screen rounded-ellipse bg-white relative top-[-100px]">
           
        </div>
    </div>
  )
}

export default page