import React, { useState } from 'react';
import { BsChatSquare } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiNewspaperLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";


const users = [
  { id: 1, name: 'User 1', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { id: 2, name: 'User 2', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'female' },
  { id: 3, name: 'User 3', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { id: 4, name: 'User 4', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { id: 5, name: 'User 5', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'female' },
  { id: 6, name: 'User 6', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { id: 7, name: 'User 7', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { id: 8, name: 'User 8', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'female' },
  { id: 9, name: 'User 9', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { id: 10, name: 'User 10', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { id: 11, name: 'User 11', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'female' },
  { id: 12, name: 'User 12', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { id: 13, name: 'User 13', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { id: 14, name: 'User 14', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'female' },
  { id: 15, name: 'User 15', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { id: 16, name: 'User 16', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { id: 17, name: 'User 17', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'female' },
  { id: 18, name: 'User 18', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
];

const chats = {
  1: [
    { sender: 'User 1', message: 'Hey there!' },
    { sender: 'You', message: 'Hi!' },
    { sender: 'User 1', message: 'How’s it going?' },
    { sender: 'You', message: 'Good, how about you?' },
    { sender: 'User 1', message: 'How’s it going?' },
    { sender: 'You', message: 'Good, how about you?' },
    { sender: 'User 1', message: 'How’s it going?' },
    { sender: 'You', message: 'Good, how about you?' },
    { sender: 'User 1', message: 'How’s it going?' },
    { sender: 'You', message: 'Good, how about you?' },
    { sender: 'User 1', message: 'How’s it going?' },
    { sender: 'You', message: 'Good, how about you?' },
    { sender: 'User 1', message: 'How’s it going?' },
    { sender: 'You', message: 'Good, how about you?' },
    { sender: 'User 1', message: 'How’s it going?' },
    { sender: 'You', message: 'Good, how about you?' },
    { sender: 'User 1', message: 'How’s it going?' },
    { sender: 'You', message: 'Good, how about you?' },
  ],
  2: [
    { sender: 'User 1', message: 'How’s it going?' },
    { sender: 'You', message: 'Good, how about you?' },
  ],
  3: [
    { sender: 'User 1', message: 'What’s up?' },
    { sender: 'You', message: 'Not much, you?' },
  ],
  4: [
    { sender: 'User 1', message: 'What’s up?' },
    { sender: 'You', message: 'Not much, you?' },
  ],
  5: [
    { sender: 'User 1', message: 'What’s up?' },
    { sender: 'You', message: 'Not much, you?' },
  ],
  6: [
    { sender: 'User 1', message: 'What’s up?' },
    { sender: 'You', message: 'Not much, you?' },
  ],
  7: [
    { sender: 'User 1', message: 'What’s up?' },
    { sender: 'You', message: 'Not much, you?' },
  ],
  8: [
    { sender: 'User 1', message: 'What’s up?' },
    { sender: 'You', message: 'Not much, you?' },
  ],
  9: [
    { sender: 'User 1', message: 'What’s up?' },
    { sender: 'You', message: 'Not much, you?' },
  ],
  10: [
    { sender: 'User 1', message: 'What’s up?' },
    { sender: 'You', message: 'Not much, you?' },
  ],
  11: [
    { sender: 'User 1', message: 'What’s up?' },
    { sender: 'You', message: 'Not much, you?' },
  ],
};

const links = [
  { name: 'All Chats', icon: <BsChatSquare/> },
  { name: 'Works', icon: <MdOutlineWorkOutline/> },
  { name: 'Friends', icon: <LiaUserFriendsSolid/> },
  { name: 'News', icon: <PiNewspaperLight/> },
  { name: 'Profile', icon: <CgProfile/> },
  { name: 'Logout', icon: <CiLogout/>},
];

function ChatApp() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleUserClick = (userId) => {
    setSelectedUser(userId);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
        <div className="w-2/12 bg-slate-800 border-l flex flex-col items-start p-6 justify-evenly h-screen rounded-2xl pr-0">
            {links.map((link, index) => (
            <div key={index} className="flex flex-col items-center mb-4 cursor-pointer hover:text-blue-500">
                <span className="text-2xl mr-2">{link.icon}</span>
                <span className="font-normal text-sm">{link.name}</span>
            </div>
            ))}
        </div>
        <div className="flex h-screen bg-white w-full p-6 mt-4 rounded-2xl mb-6">
        {/* Left Sidebar - User List */}
        <div className="w-5/12 bg-white border-r flex flex-col pr-5">
            <div className="border-b">
            <h2 className="text-lg font-semibold text-gray-800">Users</h2>
            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search users..."
                className="input input-bordered w-full mt-2 h-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            </div>
            {/* Scrollable user list */}
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
        </div>

        {/* Middle Section - Chat Area */}
        <div className="flex-1 bg-white flex flex-col">
            {/* Selected User Header */}
            {selectedUser && (
            <div className="p-2 flex items-center border-b bg-gray-200 ml-2 rounded-xl">
                <img
                src={users.find((u) => u.id === selectedUser)?.profilePic}
                alt="Selected User Profile"
                className="w-10 h-10 rounded-full "
                />
                <span className="font-semibold text-lg text-gray-800">
                {users.find((u) => u.id === selectedUser)?.name}
                </span>
            </div>
            )}

            {/* Scrollable chat messages */}
            <div className="flex-1 p-4 overflow-y-auto">
            {selectedUser ? (
                chats[selectedUser]?.map((chat, index) => (
                <div
                    key={index}
                    className={`flex w-full mb-2 ${
                    chat.sender === 'You' ? 'justify-end' : 'justify-start'
                    }`}
                >
                    <div
                    className={`w-full p-2 rounded-lg max-w-xs ${
                        chat.sender === 'You' ? 'bg-blue-200' : 'bg-gray-200'
                    }`}
                    >
                    <p className="text-sm text-slate-800">{chat.message}</p>
                    </div>
                </div>
                ))
            ) : (
                <p className="text-gray-500">No user selected. Please select a user to start chatting.</p>
            )}
            </div>

            {/* Chat Input */}
            {selectedUser && (
            <div className="p-4 border-t bg-gray-100">
                <form className="flex items-center">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="input input-bordered w-full mr-2"
                />
                <button type="submit" className="btn btn-primary ">
                    Send
                </button>
                </form>
            </div>
            )}
        </div>

        {/* Right Sidebar - Links */}
        
        </div>
        <div className='w-4/12 h-screen bg-gray-100 border-l ml-4 rounded-2xl flex flex-col gap-2 pt-4'>
            <div className="w-full bg-gray-100 border-l  rounded-2xl">
                {selectedUser && (
                    <div className="flex flex-col items-center">
                        <img
                            src={users.find((u) => u.id === selectedUser)?.profilePic}
                            alt="Profile"
                            className="w-20 h-20 rounded-full mb-4"
                        />
                        <h3 className="text-lg font-semibold">
                            {users.find((u) => u.id === selectedUser)?.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {users.find((u) => u.id === selectedUser)?.gender}
                        </p>
                        <button className="mt-4 btn btn-secondary">Start Video Call</button>
                        <button className="mt-2 btn btn-primary">Start Voice Call</button>
                    </div>
                )}
                {!selectedUser && (
                    <p className="text-gray-500">Select a user to view details.</p>
                )}
            </div>
            <div className="w-full bg-gray-100 border-l p-2 h-full">
                <h3 className="text-lg font-semibold mb-2 ">Friend Suggestions</h3>
                <ul className="space-y-4">
                    {users.slice(0, 3).map((user) => (
                    <li key={user.id} className="flex items-center p-2 rounded-lg bg-gray-200">
                        <img
                        src={user.profilePic}
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-3"
                        />
                        <span className="font-medium">{user.name}</span>
                        <button className="ml-auto btn btn-primary">Add Friend</button>
                    </li>
                    ))}
                </ul>
            </div>


        </div>

    </>
  );
}

export default ChatApp;
