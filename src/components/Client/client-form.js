import ClientFormInput from '@/components/Form/ClientFormInput'
import axios from '@/lib/axios'
import { useState } from 'react'

function ClientForm({setKey}) {
    const [data, setData] = useState({})

    const csrf = axios.get('/sanctum/csrf-cookie')

    const start = e => {
        csrf
        axios
            .post('/api/start', data)
            .then((data) => {
                setKey(data.data.data.interaction_id);
                console.log('success')
            })
            .catch(error => {
                console.log(error)
            })
        e.preventDefault()
    }

    const handleInput = e => {
        const id = e.target.id
        const value = e.target.value
        setData({ ...data, [id]: value })
    }

    return (
        <>
            <div
                style={{ height: '100%' }}
                className="chat rounded chat-container wrapper px-2 py-2">
                <div className="user-bar top rounded-top">
                    <div className="name">
                        <span className="status">
                            <i className="fad fa-headset ps-2 pt-1"></i>
                            <span style={{ marginLeft: '10px' }}>
                                Live Chat
                            </span>
                        </span>
                    </div>
                </div>
                <div className="conversation middle">
                    <form onSubmit={start}>
                        <div className="my-4">
                            <ClientFormInput
                                onChange={handleInput}
                                id={'firstname'}
                                label={'First Name'}
                            />
                            <ClientFormInput
                                onChange={handleInput}
                                id={'lastname'}
                                label={'Last Name'}
                            />
                            <ClientFormInput
                                onChange={handleInput}
                                id={'email'}
                                label={'Email'}
                                type={'email'}
                            />
                            <ClientFormInput
                                onChange={handleInput}
                                id={'phone'}
                                label={'Phone'}
                                type={'number'}
                            />
                            <ClientFormInput
                                onChange={handleInput}
                                id={'text'}
                                label={'Text'}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-secondary mb-4 mx-4">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-success mb-4 mx-4"
                            style={{ float: 'right' }}>
                            Start Chat
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ClientForm
