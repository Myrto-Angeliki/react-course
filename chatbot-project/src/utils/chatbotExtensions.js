export function useAdditionalResponses(){
    const additionalResponses = {
    'hey' : 'Hello! How can I help you?',
    'hi' : 'Hello! How can I help you?',
    'greetings' : 'Hello! How can I help you?',
    'you good': 'I\'m doing great! How can I help you?',
    'you okay' : 'I\'m doing great! How can I help you?',
    'okay' : 'Okay. How can I help you?',
    'good' : 'Good. How can I help you?',
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
        'Goodbye' : 'Goodbye! Let me know if you need help with anything else!',
        'bye Bye BYE' : 'Goodbye! Let me know if you need help with anything else!'
    };

    return additionalResponses;
}