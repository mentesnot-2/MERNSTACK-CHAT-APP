import { useState } from "react";
import{useAuthContext} from "../context/authContext";

export default function useLogout() {
    const { setAuthUser } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const Logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.removeItem("authUser");
            setAuthUser(null);

        } catch (error) {
           toast.error(error.message) 
        } finally {
            setLoading(false)
        }
    }
    return { loading, Logout }
}