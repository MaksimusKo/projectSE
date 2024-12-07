import React from 'react';
import { ChatInput } from './ChatInput';
import { ChatMessageList } from './ChatMessageList';

interface Message {
  text: string;
  isBot: boolean;
}

interface ChatInterfaceProps {
  messages: Message[];
  isLoading: boolean;
  onSend: (message: string) => void;
}

export function ChatInterface({ messages, isLoading, onSend }: ChatInterfaceProps) {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <ChatMessageList messages={messages} isLoading={isLoading} />
      <ChatInput onSend={onSend} isLoading={isLoading} />
    </div>
  );
}