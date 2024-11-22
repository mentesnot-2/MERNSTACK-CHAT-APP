


function Conversation({chat,index}) {
    return (
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
    )
}

export default Conversation