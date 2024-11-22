
import { useState } from "react"
import  toast  from "react-hot-toast"
import { useAuthContext } from "../authContext/authContext"

export default function  useLogin() {
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    const Login = async ({username,password}) => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username,password}),
                credentials: "include",
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("authUser",JSON.stringify(data.user))
            setAuthUser(data.user)

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return {loading,Login}
}