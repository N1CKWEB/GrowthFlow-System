import React, { useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
  TrendingUp,
  Target,
  Lightbulb,
  BarChart3,
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestions = [
  {
    icon: <TrendingUp className="w-4 h-4" />,
    text: "¿Cómo puedo mejorar mi tasa de conversión?",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Target className="w-4 h-4" />,
    text: "Analiza mis mejores leads de esta semana",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Lightbulb className="w-4 h-4" />,
    text: "Sugerencias para optimizar mis automatizaciones",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    text: "Genera un reporte de métricas del mes",
    color: "from-emerald-500 to-teal-500",
  },
];

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "¡Hola! Soy tu asistente de IA en GrowthFlow. Puedo ayudarte a analizar tus leads, sugerir mejoras en tu funnel y optimizar tus automatizaciones. ¿En qué puedo ayudarte hoy?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content:
          "Esta es una vista previa de la funcionalidad de IA. En producción, aquí analizaría tus datos y te proporcionaría insights personalizados basados en tu pregunta.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleSuggestionClick = (text: string) => {
    setInputValue(text);
  };

  return (
    <div className="space-y-6 h-[calc(100vh-12rem)] flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-white">AI Assistant</h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <p className="text-slate-400 text-sm">
                Online y listo para ayudar
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Beta Badge */}
      <div className="flex-shrink-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-white font-medium mb-1">Funcionalidad Beta</h3>
            <p className="text-sm text-slate-300">
              La IA analiza tus leads y sugiere mejoras en tu funnel. Esta
              función está en desarrollo y se perfeccionará con el tiempo.
            </p>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      {messages.length === 1 && (
        <div className="flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-3">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion.text)}
              className="flex items-center gap-3 p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-white/10 transition-all text-left group"
            >
              <div
                className={`p-2.5 rounded-xl bg-gradient-to-br ${suggestion.color} text-white`}
              >
                {suggestion.icon}
              </div>
              <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                {suggestion.text}
              </p>
            </button>
          ))}
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 min-h-0">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {message.type === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}

            <div
              className={`max-w-[80%] md:max-w-[70%] rounded-2xl p-4 ${
                message.type === "user"
                  ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white"
                  : "bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 text-slate-200"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p
                className={`text-xs mt-2 ${
                  message.type === "user" ? "text-blue-200" : "text-slate-500"
                }`}
              >
                {message.timestamp.toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

            {message.type === "user" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">
                U
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex-shrink-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-2xl p-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Pregunta algo sobre tus leads o automatizaciones..."
            className="flex-1 bg-slate-700/50 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:from-slate-700 disabled:to-slate-700 text-white rounded-xl transition-all disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
