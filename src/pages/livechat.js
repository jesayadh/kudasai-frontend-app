import Input from '@/components/Chat/input'
import Messages from '@/components/Chat/messages'
import ClientChat from '@/components/Client/client-chat'
import ClientForm from '@/components/Client/client-form'
import { useState } from 'react'

function LiveChat() {
    const [key, setKey] = useState(undefined)
    return (
        <>
            {key !== undefined ? (
                <ClientChat id={key}/>
            ) : (
                <ClientForm setKey={setKey}/>
            )}
        </>
    )
}

export default LiveChat
