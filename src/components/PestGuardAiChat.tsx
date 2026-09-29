import React, { useState } from 'react';
import {
  MessageSquare,
  Send,
  Sparkles,
  Bot,
  User,
  AlertTriangle,
  RotateCcw,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';

interface Props {
  initialQuery?: string;
  petSafeMode?: boolean;
  childSafeMode?: boolean;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  'There are tiny black insects near my kitchen sink.',
  'I see ants trailing every morning near the coffee maker.',
  'There is a pale lizard on my bedroom wall.',
  'Something is chewing holes in my garden tomato leaves.',
  'I found dark droppings near my food pantry cupboard.',
  'I found a black spider with a red marking in my garage.'
];

export const PestGuardAiChat: React.FC<Props> = ({
  initialQuery,
  petSafeMode,
  childSafeMode
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I am **PestGuard AI**, your certified entomology, wildlife, and household safety assistant.

“**Identify it. Understand it. Handle it safely.**”

Describe what creature, signs, or symptoms you are seeing, and where you found it. I prioritize non-chemical exclusion, humane wildlife management, and prompt safety guidance whenever a hazardous species is suspected.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState(initialQuery || '');
  const [loading, setLoading] = useState(false);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/advice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query.trim(),
          context: {
            petSafeMode: !!petSafeMode,
            childSafeMode: !!childSafeMode
          }
        })
      });

      if (!res.ok) throw new Error('AI advice request failed');

      const data = await res.json();

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'I am evaluating your query. Could you please specify which room or property location you observed it in?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        text: 'I encountered an issue connecting to the AI knowledge service. Please verify your observation details or try a quick prompt below.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <Bot className="w-3.5 h-3.5" />
          <span>Interactive Pest & Wildlife Specialist</span>
        </div>
        <h1 className="text-2xl font-black text-white">PestGuard AI Assistant</h1>
        <p className="text-xs text-slate-400">
          Ask questions naturally. The AI asks follow-up diagnostic questions, differentiates harmless from hazardous creatures, and provides non-toxic remediation.
        </p>
      </div>

      {/* Safety Banner */}
      {(petSafeMode || childSafeMode) && (
        <div className="bg-slate-950 border border-emerald-500/30 rounded-2xl px-4 py-2.5 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>
              Active Constraints:{' '}
              {petSafeMode && <strong className="text-emerald-400">Pet-Safe Priority</strong>}
              {petSafeMode && childSafeMode && ' • '}
              {childSafeMode && <strong className="text-blue-400">Child-Safe Protocol</strong>}
            </span>
          </div>
          <span className="text-[11px] text-slate-500">Toxic chemicals and poisons are strictly excluded</span>
        </div>
      )}

      {/* Chat Messages Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl min-h-[420px] max-h-[560px] overflow-y-auto space-y-4 flex flex-col">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse self-end' : 'self-start'} max-w-[85%]`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                  isUser
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gradient-to-tr from-teal-600 to-emerald-500 text-white shadow'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-emerald-600 text-white rounded-tr-none'
                    : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none space-y-2'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>
                <div
                  className={`text-[10px] mt-1 text-right ${
                    isUser ? 'text-emerald-200' : 'text-slate-500'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex items-center gap-3 self-start max-w-[85%]">
            <div className="w-8 h-8 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 animate-spin" />
            </div>
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-2xl text-xs text-slate-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>PestGuard AI is evaluating safety guidelines...</span>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Quick Prompts */}
      <div className="space-y-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>Quick Inquiries:</span>
        </span>
        <div className="flex flex-wrap gap-1.5">
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-300 border border-slate-800 hover:border-slate-700 transition"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask PestGuard AI (e.g. 'I see small black insects on my kitchen counter each morning')..."
          className="flex-1 bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition shadow-inner"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl shadow-lg transition disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};
