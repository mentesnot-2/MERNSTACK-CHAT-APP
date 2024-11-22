



import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../authContext/authContext";

export default function useSignup() {
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async ({fullName,gender,username,password,confirmPassword}) => {
        const success = handleUserError({fullName,gender,username,password,confirmPassword});
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({fullName,gender,username,password,confirmPassword})
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
    return {loading,signup}
}

function handleUserError({fullName,gender,username,password,confirmPassword}) {
    if (fullName === "" || username === "" || password === "" || confirmPassword === "" )  {
        toast.error("Please provide full credentials")
        return false
    }
    if (password !== confirmPassword) {
        toast.error("Password do not match")
        return false
    }
    return true
}

