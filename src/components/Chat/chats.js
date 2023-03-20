import ContactCard from './contact-card'
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../../context/ChatContext'
import { useAuth } from '@/hooks/auth'

function Chats() {
    const [chats, setChats] = useState([])

    const { user } = useAuth({ middleware: 'auth' })
    // const { currentUser } = useContext(AuthContext);
    // const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
            // const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
            //   setChats(doc.data());
            // });

            return () => {
                // unsub();
            }
        }

        // currentUser.uid && getChats();
    }, [user])

    const handleSelect = u => {
        dispatch({ type: 'CHANGE_USER', payload: u })
    }

    return (
        <>
            <div className="list-group list-group-flush border-bottom middle z-0">
                {Object.entries(chats)
                    ?.sort((a, b) => b[1].date - a[1].date)
                    .map(chat => (
                        <ContactCard
                            chat={chat}
                            onClick={() =>
                                handleSelect(chat[1].userInfo)
                            }></ContactCard>
                    ))}
            </div>
        </>
    )
}

export default Chats
