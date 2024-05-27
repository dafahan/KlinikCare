import {prisma} from "@/app/lib/prisma"
import bcrypt from 'bcrypt';

export const getUsers = async()=>{
    try{
        const users = await prisma.user.findMany();
    }catch(error){
        throw new Error("Failed to fetch users data");
    }
}
export const login = async (username:string, password:string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        });

        // Check if user exists and password matches
        if (user && await bcrypt.compare(password, user.password)) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw new Error("Failed to login");
    }
}


export const register = async (username:string, password:string) => {
    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                username: username
            }
        });

        if (existingUser) {
            throw new Error("Username already taken");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Store the new user in the database
        const newUser = await prisma.user.create({
            data: {
                username: username,
                password: hashedPassword
            }
        });

        return {
            message: "User registered successfully",
            user: newUser
        };
    } catch (error) {
        throw new Error( "Failed to register user");
    }
}
