import React, { useState } from 'react';
import { ChatInput } from './ChatInput';
import { ChatMessageList } from './ChatMessageList';
import { sendMessage } from '../../api';

export function ChatInterface() {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hello! I'm your university assistant. How can I help you today?", isBot: true },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (userMessage: string) => {
    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const history = messages.map((msg) => msg.text);
      const response = await sendMessage(userMessage, history);
      setMessages((prev) => [...prev, { text: response.response, isBot: true }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: 'Sorry, I encountered an error. Please try again.', isBot: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <ChatMessageList messages={messages} isLoading={isLoading} />
      <ChatInput onSend={handleSend} isLoading={isLoading} />
    </div>
  );
}