import { useEffect, useState} from 'react'
import {handleUpArrowButtonPress, handleDownArrowButtonPress} from '../../utils/input.js'
import { sendMessage } from './sendMessage.jsx'

import './ChatInput.css';   

export function ChatInput({isVisibile, chatMessages, setChatMessages, setIsModalOpen}){
  const [inputText, setInputText] = useState('');
  const [messagesIndex, setMessagesIndex] = useState(chatMessages.length);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMessagesIndex(chatMessages.length-2);
  }, [chatMessages]);

  function saveInputText(event){
      setInputText(event.target.value);
  }

  if(!isVisibile )
    return null
  return (
      <div className="chat-input-container">
          <input 
              placeholder="Send a message to Chatbot" 
              size="30" 
              onChange={saveInputText}
              onKeyDown={(e) => { 
                  e.key === 'Enter' 
                    ? (inputText != '' && isLoading === false) 
                        && (sendMessage(chatMessages, setChatMessages, inputText, setInputText, setIsLoading)) 
                    : e.key === 'Escape' && setInputText('');
                  if(e.key === 'ArrowUp')
                    handleUpArrowButtonPress(messagesIndex, setInputText, 
                        setMessagesIndex, chatMessages);
                  if(e.key === 'ArrowDown')
                    handleDownArrowButtonPress(messagesIndex, setInputText, 
                        setMessagesIndex, chatMessages);
              }}
              value={inputText}
              className="chat-input"
          />
          <button
                className="input-button"
                id="send"
                onClick={() => {
                    (inputText != '' && isLoading === false) 
                        && (sendMessage(chatMessages, setChatMessages, inputText, setInputText, setIsLoading));
                }}
            >Send</button>

            <button
                className="input-button"
                id="add-response"
                onClick={() => setIsModalOpen(true)}
            >Add Response</button>

            <button 
                className="input-button"
                id="clear"
                onClick={() => {
                    setChatMessages([]);
                }}
            >Clear</button>
          </div>
  );
}