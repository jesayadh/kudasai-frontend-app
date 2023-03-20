import Input from '@/components/Chat/input'
import Messages from '@/components/Chat/messages'
import { useState } from 'react'
import ClientForm from './client-form'

function Chat({ data }) {
    const [key, setKey] = useState("")
    return (
        <>
            {key != "" ? (
                <div
                    style={{ height: '100%' }}
                    className="chat rounded chat-container wrapper px-2">
                    <div className="user-bar top rounded-top">
                        <div className="">
                            <button
                                className="btn btn-secondary border-none"
                                type="button">
                                {/* <span>{data.user?.displayName}</span> */}
                                <span>client1</span>
                            </button>
                        </div>
                        <div className="name">
                            <span className="status">
                                Connected
                                <i className="fas fa-comment-alt-check ps-2 pt-1"></i>
                            </span>
                        </div>
                    </div>
                    <div className="conversation middle pb-2">
                        <div className="conversation-container">
                            <Messages />
                        </div>
                    </div>
                    <Input></Input>
                </div>
            ) : (
                <ClientForm></ClientForm>
            )}
        </>
    )
}

export default Chat
