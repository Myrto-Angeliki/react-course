import { useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage.jsx'
import { WelcomeMessage } from './WelcomeMessage'
import './ChatMessages.css';


export function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useAutoScroll([chatMessages]);

    function useAutoScroll(dependencies) {
        const ref = useRef(null);

        useEffect(() => {
            const containerElem = ref.current;
            if (containerElem) {
                containerElem.scrollTop = containerElem.scrollHeight;
            }
        }, dependencies);

        return ref;
    }


    return (
        <>  
            <WelcomeMessage chatMessages={chatMessages} />
            <div className="chat-messages-container"
                ref={chatMessagesRef}>
                {chatMessages.map((chatMessage) => {
                    return (
                        <ChatMessage
                            message={chatMessage.message}
                            sender={chatMessage.sender}
                            time={chatMessage.time}
                            key={chatMessage.id}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default ChatMessages;