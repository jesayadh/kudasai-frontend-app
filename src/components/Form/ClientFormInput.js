import Input from '@/components/Chat/input'
import Messages from '@/components/Chat/messages'

function ClientFormInput({ type, label, id, onChange }) {
    return (
        <div class="form-floating m-2 mx-4">
            <input
                type={type ? type : 'text'}
                className="form-control"
                id={id}
                placeholder="input"
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default ClientFormInput
