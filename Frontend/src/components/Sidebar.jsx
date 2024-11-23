import React,{useState,useEffect} from "react";
import { useConversation } from "../zustand/useConversation";

function Sidebar({users = []}) {
    const [searchQuery, setSearchQuery] = useState('');
    const {selectedConversation, setSelectedConversation} = useConversation();
    const handleUserClick = (user) => {
        setSelectedConversation(user);
    };
    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);
    const filteredUsers = users.filter((user) =>
        user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    
    return (
            <ul className="flex-grow p-4 overflow-y-auto">
            {filteredUsers.map((user) => (
                <li
                key={user._id}
                className={`flex items-center p-2 cursor-pointer rounded-lg mb-2 text-gray-800 ${
                    selectedConversation?._id === user._id ? 'bg-blue-100' : 'hover:bg-gray-100'
                }`}
                onClick={() => handleUserClick(user)}
                >
                <img
                    src={`${user.profilePic}`}
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-3"
                />
                <span className="font-medium">{user.fullName}</span>
                </li>
            ))}
            </ul>
      
    )
}

export default Sidebar