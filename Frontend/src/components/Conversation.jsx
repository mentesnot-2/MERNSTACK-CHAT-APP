import { useAuthContext } from "../context/authContext"
import { extractTime } from "../utils/extractTime"
import { useConversation } from "../zustand/useConversation"



function Conversation({ chat, index }) {
  const { authUser } = useAuthContext()
  const { selectedConversation } = useConversation()
  const fromMe = chat.senderID == authUser._id
  const formattedTime = extractTime(chat.updatedAt)
  const shakeClass = chat.shouldShake?"shake":""
  return (
    <div
      key={index}
      className={`flex w-full mb-2 ${fromMe ? 'justify-end' : 'justify-start'
        }`}
    >
      <div
        className={`w-full p-2 rounded-lg max-w-xs ${fromMe ? 'bg-blue-200' : 'bg-gray-200'
          }`}
      >
        <p className={`text-sm text-slate-800 ${shakeClass}`} >{chat.message}</p>
        <p className="text-xs text-slate-500 mt-1 text-right">
          {formattedTime}
        </p>

      </div>
    </div>
  )
}

export default Conversation