import { useEffect, useState} from 'react'
import { ChatInput } from './components/ChatInput.jsx'
import { ChatMessage } from './components/ChatMessage'
import ChatMessages from './components/ChatMessages'
import { WelcomeMessage } from './components/WelcomeMessage'

import './App.css'
import { Chatbot } from 'supersimpledev'


function useAddAdditionalResponses(){
    const additionalResponses = {
    'hey' : 'Hello! How can I help you?',
    'greetings' : 'Hello! How can I help you?',
    'you good okay' : 'I\'m doing great! How can I help you?',
    'date' : function () {
            const now = new Date();
            const months = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            const month = months[now.getMonth()];
            const day = now.getDate();

            return `Today is ${month} ${day}`;
        },
        'What can you do help me with I don\'t know' : 
            'I know how to flip a coin, roll a dice, or get today\'s date. Let me know how I can help!',
        'Goodbye bye' : 'Goodbye! Let me know if you need help with anything else!'
    };

    useEffect(() => {
        Chatbot.addResponses(additionalResponses)
    });
}

function App(){
    const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

    useAddAdditionalResponses();
    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(chatMessages));
    }, [chatMessages]);
        
    return (
        <div className="app-container">
            <WelcomeMessage chatMessages={chatMessages} />
            <ChatMessages chatMessages={chatMessages} />
            <ChatInput 
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />
        </div>
    );  
}

export default App
