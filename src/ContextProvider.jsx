import React, { useEffect, useState } from "react";
import Context from "./Context";

function UserContextProvider({children}){
    const [user,setUser] = useState(null)
    const [userData, setUserData] = useState()

    useEffect(() =>{
        if (!user) return
        fetch(`https://api.github.com/users/${user}`,{
            headers:{
                "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
            }
        })
        .then((res) => res.json())
        .then(data => setUserData(data))
    },[user])
    return(
        <Context.Provider value={{user,setUser,userData}}>
            {children}
        </Context.Provider>
    )
}
export default UserContextProvider