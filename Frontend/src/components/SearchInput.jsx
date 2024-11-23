import React, { useState } from 'react';
import { useGetConversation } from '../hooks/useGetConversation';
import { useConversation } from '../zustand/useConversation';
import toast from 'react-hot-toast'

function SearchInput(){
    const [searchQuery,setSearchQuery] = useState('')
    const {conversations} = useGetConversation()
    const {setSelectedConversation} = useConversation()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchQuery) return

        const conversation = conversations.find((user) => user.fullName.toLowerCase().includes(searchQuery.toLowerCase()))
        if (conversation) {
            setSelectedConversation(conversation)
            setSearchQuery('')
        } else {
            toast.error("No such user found")
        }
    }
    return (
        <div className="border-b">
              <h2 className="text-lg font-semibold text-gray-800">Users</h2>
              <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search users..."
                    className="input input-bordered w-full mt-2 h-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
    )
}
export default SearchInput