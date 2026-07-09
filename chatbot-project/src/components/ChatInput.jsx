import { useState} from 'react'
import dayjs from 'dayjs';
import LoadingSpinner from '../assets/loading-spinner.gif'
import { Chatbot } from 'supersimpledev'

import './ChatInput.css';   

export function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event){
      setInputText(event.target.value);
  }

  async function sendMessage(){
    const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                time: dayjs().format('h:mma'),
                id: crypto.randomUUID()
            }
        ];
    
    setChatMessages(newChatMessages);
    setInputText('');
    
    setChatMessages([
        ...newChatMessages,
        {
            message: <img src={LoadingSpinner} className="loading-spinner" />,
            sender: 'robot',
            time: '',
            id: crypto.randomUUID()
        }
    ]);
    
    setIsLoading(true);
    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
        ...newChatMessages,
        {
            message: response,
            sender: 'robot',
            time: dayjs().format('h:mma'),
            id: crypto.randomUUID()
        }
    ]);

    setIsLoading(false);
  }

  return (
      <div className="chat-input-container">
          <input 
              placeholder="Send a message to Chatbot" 
              size="30" 
              onChange={saveInputText}
              onKeyDown={(e) => { 
                  e.key === 'Enter' ? 
                      (inputText != '' && isLoading === false) && (sendMessage()) : 
                      e.key === 'Escape' && setInputText('');
              }}
              value={inputText}
              className="chat-input"
          />
          <button
                className="input-button"
                id="send"
                onClick={() => {
                    (inputText != '' && isLoading === false) && sendMessage();
                }}
            >Send</button>

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