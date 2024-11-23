import React,{useState,useEffect} from "react";
import { useConversation } from "../zustand/useConversation";
import toast from 'react-hot-toast';




export const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const {messages,setMessages,selectedConversation } = useConversation();
    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await fetch(`http://localhost:5000/api/message/${selectedConversation._id}`, {
                    method: "GET",
                    credentials: "include",
                })
                const data = await res.json();
                
                if (data.error) {
                    throw new Error(data.error)
                }
                setMessages(data)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id,setMessages])

    return { loading, messages }
}