import { ChatInput } from './chat-input/ChatInput.jsx'
import { ChatMessages } from './chat-messages/ChatMessages.jsx'

export function ChatbotPosition({isSwitchToTop, chatMessages, setChatMessages, setIsModalOpen}){

    return <>
        <ChatInput  
            isVisibile={isSwitchToTop ? true : false}
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            setIsModalOpen={setIsModalOpen}
        />
        <ChatMessages chatMessages={chatMessages} isSwitchToTop={isSwitchToTop} />
        <ChatInput
            isVisibile={!isSwitchToTop ? true : false}
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            setIsModalOpen={setIsModalOpen}
        />
    </>
}