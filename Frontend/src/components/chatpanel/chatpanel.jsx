import React, { useState, useEffect } from 'react';
import SearchInput from '../SearchInput';
import Sidebar from '../Sidebar';
import SideBarLinks from '../SideBarLink';
import RightSideBar from '../RightSideBar';
import Conversation from '../Conversation';
import ChatBox from '../ChatBox'
import { useGetConversation } from '../../hooks/useGetConversation';
import { useConversation } from '../../zustand/useConversation';
import { useGetMessages } from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeleton/messageSkeleton';
import { useListenMessage } from '../../hooks/useListenMessage';




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
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [searchQuery, setSearchQuery] = useState('');
  const { loading, conversations } = useGetConversation();
  const [users, setUsers] = useState([]);
  const {messages,loading:messageLoading} = useGetMessages();
  useListenMessage();

  useEffect(() => {
    setUsers(conversations);
  }, [conversations]);


  return (
    <>
      <SideBarLinks />
      <div className="flex h-screen bg-white w-full p-6 mt-4 rounded-2xl mb-6">
        <div className="w-5/12 bg-white border-r flex flex-col pr-5">
          <SearchInput/>
          <Sidebar/>
        </div>

        <div className="flex-1 bg-white flex flex-col">
          {selectedConversation && (
            <div className="p-2 flex items-center border-b bg-gray-200 ml-2 rounded-xl">
              <img
                src={users.find((u) => u._id === selectedConversation._id)?.profilePic}
                alt="Selected User Profile"
                className="w-10 h-10 rounded-full mr-6"
              />
              <span className="font-semibold text-lg text-gray-800">
                {users.find((u) => u._id === selectedConversation._id)?.fullName}
              </span>
            </div>
          )}

          <div className="flex-1 p-4 overflow-y-auto">
            {selectedConversation ? (
              <>
              {messageLoading && [...Array(10)].map((_, index) => <MessageSkeleton key={index}/>)},

              {!messageLoading && messages.length == 0 && (
                <p className='text-center'>Send a Message to Start conversation</p>
              )} 
              {messages?.map((chat, index) => (
                <Conversation chat={chat} index={index} key={index} />
              ))}
              </>
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
          {selectedConversation && (
            <ChatBox />
          )}
        </div>
      </div>
      <RightSideBar selectedUser={selectedConversation} users={users} />

    </>
  );
}

export default ChatApp;
