import React,{useState} from "react";


function Sidebar({users = [], setSelectedUser, selectedUser}) {
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleUserClick = (userId) => {
        setSelectedUser(userId);
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    
    return (
            <ul className="flex-grow p-4 overflow-y-auto">
            {filteredUsers.map((user) => (
                <li
                key={user.id}
                className={`flex items-center p-2 cursor-pointer rounded-lg mb-2 text-gray-800 ${
                    selectedUser === user.id ? 'bg-blue-100' : 'hover:bg-gray-100'
                }`}
                onClick={() => handleUserClick(user.id)}
                >
                <img
                    src={`${user.profilePic}?username=${user.name}` || 'https://via.placeholder.com/40'}
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-3"
                />
                <span className="font-medium">{user.name}</span>
                </li>
            ))}
            </ul>
      
    )
}

export default Sidebar