import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface ChatSession {
  id: string;
  title: string;
  messages: Array<{ text: string; isBot: boolean }>;
}

interface ChatHistoryProps {
  sessions: ChatSession[];
  currentSessionId: string;
  onSelectSession: (id: string) => void;
  onDeleteSession: (id: string) => void;
  onCreateNewSession: () => void;
}

export function ChatHistory({
  sessions,
  currentSessionId,
  onSelectSession,
  onDeleteSession,
  onCreateNewSession,
}: ChatHistoryProps) {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={onCreateNewSession}
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus size={18} />
          <span>New Chat</span>
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          {sessions.map((session) => (
            <li key={session.id}>
              <div
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer group ${
                  session.id === currentSessionId
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => onSelectSession(session.id)}
              >
                <span className="truncate flex-1">{session.title}</span>
                {sessions.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteSession(session.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-500 transition-opacity"
                    aria-label="Delete chat"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}