import { useState } from 'react'

import './AddResponseModal.css'
import '../chat-input/ChatInput.css'

export default function AddResponseForm({onClose, setAdditionalResponses}){
    const [keyText, setKeyText] = useState('');
    const [responseText, setResponseText] = useState('');

    let response = {};

    return <>
            <div className='add-response-overlay-styles' />
            <div className='add-response-modal-styles'>
                <h2>Teach me a response to a specific prompt.</h2>
                <input 
                    placeholder="Enter the prompt you want a response to." 
                    type='text'
                    size='35'
                    onChange={(event) => setKeyText(event.target.value)}
                    className='chat-input'
                />
                <br /><br />
                <input 
                    placeholder="Enter the response to the prompt above." 
                    type='text'
                    size='35'
                    onChange={(event) => setResponseText(event.target.value)}
                    className='chat-input'
                />
                <br /><br />
                <button className='input-button' 
                    id='add-response'
                    onClick={() => {
                        response[keyText] = responseText;
                        setAdditionalResponses(response);
                        console.log(response);
                        onClose();
                    }}> Add Response</button>
                <button className='input-button' 
                    id='clear'
                    onClick={onClose}>Back</button>
            </div>
        </>
}