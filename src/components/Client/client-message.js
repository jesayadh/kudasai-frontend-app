import React, { useContext, useEffect, useRef } from 'react'
import BubbleMessageSent from '../Chat/bubble-message-sent'
import BubbleMessageReceived from '../Chat/bubble-message-received'
// import { ChatContext } from '../../context/ChatContext'

const ClientMessage = ({ message }) => {
    // const { currentUser } = useContext(AuthContext);
    const currentUser = {
        uid: '1',
    }
    // const { data } = useContext(ChatContext);

    const ref = useRef()

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }, [message])

    return (
        <>
            <div ref={ref}>
                {message.type === 'inbound' ? (
                    <>
                        <BubbleMessageSent text={message.text} />
                        {message.img && <img src={message.img} alt="" />}
                    </>
                ) : (
                    <>
                        <BubbleMessageReceived text={message.text} />
                        {message.img && <img src={message.img} alt="" />}
                    </>
                )}
            </div>
        </>
    )
}

export default ClientMessage
