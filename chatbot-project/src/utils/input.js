const USER_MESSAGE_OFFSET = 2;

export function handleUpArrowButtonPress(messagesIndex, setInputText, 
    setMessagesIndex, chatMessages) {
    if (messagesIndex > 0) {
        setInputText(chatMessages[messagesIndex-USER_MESSAGE_OFFSET].message);
        setMessagesIndex(messagesIndex - USER_MESSAGE_OFFSET);
    }
    else
        chatMessages.length != 0 && setInputText(chatMessages[messagesIndex].message);
}

export function handleDownArrowButtonPress(messagesIndex, setInputText, 
    setMessagesIndex, chatMessages) {
    if (messagesIndex < chatMessages.length-USER_MESSAGE_OFFSET) {
        setMessagesIndex(messagesIndex + USER_MESSAGE_OFFSET);
        setInputText(chatMessages[messagesIndex + USER_MESSAGE_OFFSET].message)
    }
    else
        setInputText('');
}