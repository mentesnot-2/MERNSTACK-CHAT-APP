



function ChatBox() {
    return (
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
    )
}

export default ChatBox