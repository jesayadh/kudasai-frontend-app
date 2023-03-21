import InputClient from '@/components/Chat/input-client'
import ClientMessages from './client-messages'

function ClientChat({ id }) {
    return (
        <>
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
                        <ClientMessages id={id} />
                    </div>
                </div>
                <InputClient id={id}></InputClient>
            </div>
        </>
    )
}

export default ClientChat
