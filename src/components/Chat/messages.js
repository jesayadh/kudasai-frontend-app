// import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from 'react'
// import { ChatContext } from "../../context/ChatContext";
// import { db } from "../../firebase";
import Message from './message'
import axios from '@/lib/axios'

const Messages = ({ id }) => {
    const [messages, setMessages] = useState([])
    // const { data } = useContext(ChatContext);

    useEffect(() => {
        const unSub = setInterval(() => {
            axios
                .get('/api/client/interaction/' + id)
                .then(data => {
                    setMessages(data.data.data.conversations)
                    console.log(data)
                    console.log('success')
                })
                .catch(error => {
                    console.log(error)
                })
        }, 3000)
        return () => clearInterval(unSub)
    }, [id])

    return (
        <div className="messages">
            {messages.map(m => (
                <Message message={m} key={m.id} />
            ))}
        </div>
    )
}

export default Messages
