import React , {useState,useContext} from "react";
import Context from "../Context";


function Login(){
    const [username,setUsername] = useState("")
    const{setUser} = useContext(Context)

    const handelSubmit = () =>{
        if(username.trim() === '') return
        setUsername('')
        setUser(username)
    }
    const handelKeydown = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault()
            handelSubmit()
        }
    }
    
    return(
        <div className="h-[120px] w-[350px] sm:w-[400px] m-2 rounded-2xl bg-white dark:bg-gray-800 flex flex-col justify-center items-center gap-2 transition-all duration-500 ease-in-out">
            <input type="text" placeholder="username" className="border rounded-lg p-1 text-black outline-none bg-gray-200 dark:bg-gray-700 dark:text-white "
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            onKeyDown={handelKeydown}
            />
            <button onClick={handelSubmit} className="border rounded-2xl p-1 w-[80px] text-[16px] font-bold dark:text-gray-800  bg-amber-100 dark:bg-amber-300">submit</button>
        </div>
    )
}

export default Login