import React ,{useState} from 'react'
import useSendMessage  from '../hooks/useSendMessage'


function ChatBox() {
    const [message, setMessage] = useState('');
    const {loading, SendMessage} = useSendMessage();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await SendMessage(message);
        setMessage('');
    }
    return (
        <div className="p-4 border-t bg-gray-100">
                <form className="flex items-center" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="input input-bordered w-full mr-2"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary ">
                       {loading? <span className='loading loading-spinner'></span>: "Send"}
                    </button>
                </form>
            </div>
    )
}

export default ChatBox