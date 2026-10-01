import { ChatInput } from './ChatInput.jsx'
import { ChatMessages } from './ChatMessages.jsx'

export function ChatbotPosition({isSwitchToTop, chatMessages, setChatMessages}){

    return <>
        <ChatInput  
            isVisibile={isSwitchToTop ? true : false}
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
        />
        <ChatMessages chatMessages={chatMessages} isSwitchToTop={isSwitchToTop} />
        <ChatInput
            isVisibile={!isSwitchToTop ? true : false}
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
        />
    </>
}