import { useEffect, useState } from 'react'
import { PositionSwitcher } from './components/PositionSwitcher.jsx'
import { ChatbotPosition } from './components/ChatboxPosition.jsx'
import { useAdditionalResponses } from './utils/chatbotExtensions.js'
import { getContainerPosition } from './utils/chatbotContainer.js'

import './App.css'
import { Chatbot } from 'supersimpledev'



function App() {
    const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
    const additionalResponses = useAdditionalResponses();
    const [isSwitchToTop, setIsSwitchToTop] = useState(
        JSON.parse(localStorage.getItem('position')) || false);

    useEffect(() => {
        Chatbot.addResponses(additionalResponses);
    });
    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(chatMessages));
    }, [chatMessages]);
    
    useEffect(() => {
        localStorage.setItem('position', (JSON.stringify(isSwitchToTop)));
    }, [isSwitchToTop]);

    return (
        <div className={getContainerPosition(isSwitchToTop)}>
            <PositionSwitcher isSwitchToTop={isSwitchToTop} setIsSwitchToTop={setIsSwitchToTop}/>
            <ChatbotPosition 
                isSwitchToTop={isSwitchToTop} 
                chatMessages={chatMessages} 
                setChatMessages={setChatMessages} />
        </div>
    );
}

export default App
