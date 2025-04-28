import React, { useState } from 'react';
import geminiService from '../services/geminiServices';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async () => {
        const result = await geminiService.getResponse(input);
        setResponse(result);
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
            />
            <button onClick={handleSubmit}>Send</button>
            <p>{response}</p>
        </div>
    );
};

export default Chatbot;