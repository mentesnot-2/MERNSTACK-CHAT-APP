import React, { useState } from 'react';
import SearchInput from '../SearchInput';
import Sidebar from '../Sidebar';
import SideBarLinks from '../SideBarLink';
import RightSideBar from '../RightSideBar';
import Conversation from '../Conversation';
import ChatBox from '../ChatBox'
import { useGetConversation } from '../../hooks/useGetConversation';


let users = [
  { _id: 1, fullName: 'User 1', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { _id: 2, fullName: 'User 2', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'female' },
  { _id: 3, fullName: 'User 3', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { _id: 4, fullName: 'User 4', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { _id: 5, fullName: 'User 5', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'female' },
  { _id: 6, fullName: 'User 6', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { _id: 7, fullName: 'User 7', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { _id: 8, fullName: 'User 8', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'female' },
  { _id: 9, fullName: 'User 9', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { _id: 10, fullName: 'User 10', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { _id: 11, fullName: 'User 11', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'female' },
  { _id: 12, fullName: 'User 12', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { _id: 13, fullName: 'User 13', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { _id: 14, fullName: 'User 14', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'female' },
  { _id: 15, fullName: 'User 15', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { _id: 16, fullName: 'User 16', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
  { _id: 17, fullName: 'User 17', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'female' },
  { _id: 18, fullName: 'User 18', profilePic: 'https://avatar.iran.liara.run/public/boy', gender: 'male' },
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
  const {loading,conversations} = useGetConversation();
  users = conversations;
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
                src={users.find((u) => u._id === selectedUser)?.profilePic}
                alt="Selected User Profile"
                className="w-10 h-10 rounded-full mr-6"
                />
                <span className="font-semibold text-lg text-gray-800">
                {users.find((u) => u._id === selectedUser)?.fullName}
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
