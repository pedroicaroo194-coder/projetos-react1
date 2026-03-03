import { useState } from "react"

export default function Tarefas(){
    const [nometarefa,setnometarefa] = useState("")
    const [tarefas,settarefas] = useState([])


    const enviar = () =>{
        settarefas([...tarefas,nometarefa]);
        
        
    }
    const delet = () =>{
      settarefas([])
    }

    return(
        <>
        <div>
            <input type="text" placeholder="digite sua terefa" onChange={(e) => setnometarefa(e.target.value)}/>
        </div>
        <div>
            <button onClick={enviar}>enviar</button>
            <button onClick={delet}>delete</button>
        </div>
        <ul>
           {
            tarefas.map((tarefa)=>
                <li  >
                <p>{tarefa}</p>
                </li>
            )
           }
        </ul>
        </>
    )
}