import {prisma} from "@/app/lib/prisma"


export const getUsers = async()=>{
    try{
        const users = await prisma.user.findMany();
        return users;
    }catch(error){
        throw new Error("Failed to fetch users data");
    }
}

export const getSchedule = async()=>{
  try{
      const schedules = await prisma.schedule.findMany();
      return schedules;
  }catch(error){
      throw new Error("Failed to fetch users data");
  }
}

export const login = async (username:string, password:string) => {
    try {
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (user && (password === user.password)) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw new Error("Failed to login");
    }
}

export const register = async (
    email: string,
    phone: string,
    username: string,
    password: string,
    name: string,
    gender: string,
    bpjs: string | null, 
    birthDate: string,
    address: string
  ): Promise<boolean> => {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { username },
      });
  
      if (existingUser) {
        return false;
      }
  
      // Convert birthDate to ISO-8601 format
      const isoBirthDate = new Date(birthDate).toISOString();
  
      await prisma.user.create({
        data: {
          email,
          phone,
          username,
          password, 
          name,
          gender,
          bpjs,
          birthDate: isoBirthDate, // Use ISO-8601 format
          address,
        },
      });
  
      return true; 
    } catch (error) {
      console.error("Error registering user:", error);
      throw new Error("Failed to register user");
    }
  };
  


