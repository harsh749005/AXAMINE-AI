// src/App.js

import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css'; // This CSS file will contain all your styles.

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I’m Axamine-Ai. Do you need my help?',
    },
  ]);
  const [userInput, setUserInput] = useState('');
  const [mode, setMode] = useState('chatbot');
  const chatBoxRef = useRef(null);

  useEffect(() => {
    // Auto-scroll to the bottom of the chatbox
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user message to state
    const newUserMessage = { sender: 'user', text: userInput };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setUserInput('');

    // Add "typing" indicator
    const typingMessage = { sender: 'bot', text: 'Typing...' };
    setMessages(prevMessages => [...prevMessages, typingMessage]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput }),
      });

      const data = await response.json();
      const botResponse = data.response || '❌ Error fetching response.';

      // Replace typing indicator with the actual bot response
      setMessages(prevMessages => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = {
          sender: 'bot',
          text: botResponse,
        };
        return updatedMessages;
      });
    } catch (err) {
      console.error('API error:', err);
      setMessages(prevMessages => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = {
          sender: 'bot',
          text: '⚠️ Server error.',
        };
        return updatedMessages;
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Axamine-Ai</h2>
        <button onClick={() => setMessages([])}>+ New Chat</button>
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="chatbot">SELECT YOUR POSITION</option>
          <option value="cardiologist">Cardiologist</option>
          <option value="physiologist">Physiologist</option>
          <option value="neurologist">Neurologist</option>
        </select>
      </div>

      {/* Main Chat Area */}
      <div className="main">
        <div className="chat-header">WELCOME</div>

        <div className="chat-box" ref={chatBoxRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <div className="avatar">
                {msg.sender === 'bot' ? '🧑🏻‍💼' : '👨‍⚕️'}
              </div>
              <div className="bubble">{msg.text}</div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="chat-input-container">
          <div className="chat-input">
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="mode-select"
            >
              <option value="chatbot">^</option>
              <option value="chatbot">Chat Bot</option>
              <option value="report">Report Generator</option>
              <option value="image">Image Analysis</option>
            </select>
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              rows="1"
              placeholder="Send a message..."
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;