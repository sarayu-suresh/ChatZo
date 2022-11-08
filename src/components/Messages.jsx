import { onSnapshot,doc } from "firebase/firestore"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { ChatContext } from "../context/ChatContext"
import Message from "./Message"
import { db } from "../firebase";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const {data} = useContext(ChatContext);

    useEffect(()=> {
        const unsub = onSnapshot(doc(db, "Chats", data.chatId), (doc)=>{
            doc.exists() && setMessages(doc.data().messages);
        })

        return () => {
            unsub();
        }
    },[data.chatId])

    return(
        <div className="messages">
            {messages.map(m=>(
              <Message message={m} key={m.id}/>  
            ))}
            
        </div>
    )
}

export default Messages