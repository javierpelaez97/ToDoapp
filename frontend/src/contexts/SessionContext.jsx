
import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const SessionContext = createContext()

export function SessionProvider({children}){
    const[user,setUser] = useState(null)
  
    useEffect(()=>{
        const storedUser = localStorage.getItem("user")
        const token = localStorage.getItem("token")
        
        
        if (storedUser && token) {
            try {
              setUser(JSON.parse(storedUser)); 
            } catch (error) {
              console.error("Error al analizar JSON:", error);
               
            }
          }
    },[])

   const login = async (email,password)=> {
        
        try{
            const response = await axios.post("http://localhost:5000/api/users/login",{"email": email, "password":password})
            const token= response.data.token 
            const user = response.data
            
            
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUser(user)
            
            return{success:true}
        }catch(error){
            return{success: false, message: error.response?.data?.message}
        }
    
   }
   const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

    return(
        <SessionContext.Provider value={{login, logout, user}}>
        {children}
        </SessionContext.Provider>
    )
}


