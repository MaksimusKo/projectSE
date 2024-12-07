import React from 'react';
import { ChatMessage } from './ChatMessage';

interface Message {
  text: string;
  isBot: boolean;
}

interface ChatMessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export function ChatMessageList({ messages, isLoading }: ChatMessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message.text} isBot={message.isBot} />
      ))}
      {isLoading && (
        <div className="flex gap-2 items-center text-gray-500 p-4">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-indigo-500 border-t-transparent" />
          Thinking...
        </div>
      )}
    </div>
  );
}