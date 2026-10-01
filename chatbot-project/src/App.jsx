import { useEffect, useState } from 'react'
import { PositionSwitcher } from './components/PositionSwitcher.jsx'
import { ChatbotPosition } from './components/ChatboxPosition.jsx'
import { AddResponseModal } from './components/modals/AddResponseModal.jsx'
import { useAdditionalResponses } from './utils/chatbotExtensions.js'
import { getContainerPosition } from './utils/chatbotContainer.js'

import './App.css'
import { Chatbot } from 'supersimpledev'



function App() {
    const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
    const [additionalResponses, setAdditionalResponses] = useState(useAdditionalResponses());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSwitchToTop, setIsSwitchToTop] = useState(
        JSON.parse(localStorage.getItem('position')) || false);

    useEffect(() => {
        Chatbot.addResponses(additionalResponses);
    }, [additionalResponses]);
    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(chatMessages));
    }, [chatMessages]);
    
    useEffect(() => {
        localStorage.setItem('position', (JSON.stringify(isSwitchToTop)));
    }, [isSwitchToTop]);

    return (
        <>
            <AddResponseModal open={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                setAdditionalResponses={setAdditionalResponses} />
            <div className={getContainerPosition(isSwitchToTop)}>
                <PositionSwitcher isSwitchToTop={isSwitchToTop} setIsSwitchToTop={setIsSwitchToTop}/>
                <ChatbotPosition 
                    isSwitchToTop={isSwitchToTop} 
                    chatMessages={chatMessages} 
                    setChatMessages={setChatMessages}
                    setIsModalOpen={setIsModalOpen} />
            </div>
        </>
    );
}

export default App
