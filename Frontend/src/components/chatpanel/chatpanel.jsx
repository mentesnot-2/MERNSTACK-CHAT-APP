import React, { useState } from 'react';
import SearchInput from '../SearchInput';
import Sidebar from '../Sidebar';
import SideBarLinks from '../SideBarLink';
import RightSideBar from '../RightSideBar';
import Conversation from '../Conversation';
import ChatBox from '../ChatBox'


let users = [
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



function ChatApp() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
        <SideBarLinks/>
        <div className="flex h-screen bg-white w-full p-6 mt-4 rounded-2xl mb-6">
          <div className="w-5/12 bg-white border-r flex flex-col pr-5">
              <SearchInput 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
              />
              <Sidebar 
                users={users} 
                setSelectedUser={setSelectedUser} 
                selectedUser={selectedUser}
              />
          </div>

          <div className="flex-1 bg-white flex flex-col">
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

            <div className="flex-1 p-4 overflow-y-auto">
            {selectedUser ? (
                chats[selectedUser]?.map((chat, index) => (
                  <Conversation chat={chat} index={index}/>
                ))
            ) : (
              <div className="flex justify-center items-center">
                <p className="text-gray-500 text-center p-6 rounded-lg border border-gray-200 bg-gray-50 shadow-md max-w-md mx-auto">
                  <span className="text-lg font-semibold">No user selected</span>
                  <br />
                  <span className="text-sm">Please select a user to start chatting.</span>
                </p>
              </div>
            
            )}
            </div>
            {selectedUser && (
              <ChatBox/>
            )}
        </div>        
        </div>
        <RightSideBar selectedUser={selectedUser} users={users}/>

    </>
  );
}

export default ChatApp;
