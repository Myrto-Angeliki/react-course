import ReactDom from 'react-dom'
import AddResponseForm from './AddResponseForm.jsx'

import '../chat-input/ChatInput.css'
import './AddResponseModal.css'

export function AddResponseModal({open, onClose, setAdditionalResponses}){
    if(!open) return null
    return ReactDom.createPortal(
        <AddResponseForm onClose={onClose}
        setAdditionalResponses={setAdditionalResponses} />,
        document.getElementById('portal')
    );
}