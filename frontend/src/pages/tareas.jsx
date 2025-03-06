
import { useContext, useEffect, useState } from "react";
import Tarea from "../components/Tarea";




export default function Tareas ({usuario}){


    /* const token = usuario.token

    const [data,setData] = useState(null)
    

    async function traerTareas(){
        try{
            const response = await axios.get(`http://localhost:5000/api/tasks/?token=${token}`)
            setData(response)
        }catch(error){
            console.error(error)
        }
    }
    
    traerTareas() */
    
    console.log("Tareas datos:", usuario);
    

    return (
        <>

           <h1>Todas mis tareas</h1>
            
                <Tarea ></Tarea>
                
            
            <h2>Tareas borradas</h2>

        </>
        
    )
}