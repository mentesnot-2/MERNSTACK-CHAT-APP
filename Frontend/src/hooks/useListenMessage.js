import {useConversation} from '../zustand/useConversation';
import {useSocketContext} from '../context/socketContext';
import { useEffect } from 'react';
import notificationRing from "../assets/sound.mp3"


export const useListenMessage = () => {
    const {messages,setMessages} = useConversation();
    const {socket} = useSocketContext();

    useEffect(() => {
        socket?.on("getMessage",(newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationRing);
            sound.play();
            setMessages([...messages,newMessage])
        })
        return () => socket?.off("getMessage")
    },[socket,messages,setMessages])
}
