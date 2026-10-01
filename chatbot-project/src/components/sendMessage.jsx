import dayjs from 'dayjs';
import LoadingSpinner from '../assets/loading-spinner.gif'
import { Chatbot } from 'supersimpledev'

export async function sendMessage(chatMessages, setChatMessages, 
    inputText, setInputText, setIsLoading){
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