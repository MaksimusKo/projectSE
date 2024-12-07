import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export function ChatMessage({ message, isBot }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 ${isBot ? 'bg-gray-50' : ''} p-4 rounded-lg`}>
      {isBot ? (
        <Bot className="w-6 h-6 text-indigo-600" />
      ) : (
        <User className="w-6 h-6 text-gray-600" />
      )}
      <p className="text-gray-800">{message}</p>
    </div>
  );
}