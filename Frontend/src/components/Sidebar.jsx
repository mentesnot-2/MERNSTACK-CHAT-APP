import React,{useState,useEffect} from "react";
import { useConversation } from "../zustand/useConversation";
import { useGetConversation } from "../hooks/useGetConversation";
import { useSocketContext } from "../context/socketContext";

function Sidebar() {
    let [users,setUsers] = useState([])
    const {selectedConversation, setSelectedConversation} = useConversation();
    const {conversations} = useGetConversation()
    const {onlineUsers} = useSocketContext()

    useEffect(() => {
        setUsers(conversations)
    },[conversations])
    const handleUserClick = (user) => {
        setSelectedConversation(user);
    };
    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    
    return (
            <ul className="flex-grow p-4 overflow-y-auto">
            {users.map((user) => (
                <li
                key={user._id}
                className={`flex items-center p-2 cursor-pointer rounded-lg mb-2 text-gray-800 ${
                    selectedConversation?._id === user._id ? 'bg-blue-100' : 'hover:bg-gray-100'
                }`}
                onClick={() => handleUserClick(user)}
                >
                    <div className="relative">
                        <img
                            src={`${user.profilePic}`}
                            alt="Profile"
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        {onlineUsers.includes(user._id) && (
                            <span className="absolute top-0 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                        )}
                    </div>
                    <span className="font-medium ml-2">{user.fullName}</span>
                </li>
            ))}
            </ul>
      
    )
}

export default Sidebar