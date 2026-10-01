export function handleUpArrowButtonPress(messagesIndex, setInputText, 
    setMessagesIndex, chatMessages, inputText) {
    if (messagesIndex >= 0) {
        setInputText(chatMessages[messagesIndex].message);
        setMessagesIndex(messagesIndex - 2);
    }
    else
        setInputText(inputText);
}

export function handleDownArrowButtonPress(messagesIndex, setInputText, 
    setMessagesIndex, chatMessages) {
    if (0 <= messagesIndex && messagesIndex < (chatMessages.length - 2)) {
        setMessagesIndex(messagesIndex + 2);
        setInputText(chatMessages[messagesIndex + 2].message)
    }
    else if (0 > messagesIndex && messagesIndex < (chatMessages.length - 2)) {
        setMessagesIndex(messagesIndex + 4);
        setInputText(chatMessages[messagesIndex + 4].message)
    }
    else
        setInputText('');
}