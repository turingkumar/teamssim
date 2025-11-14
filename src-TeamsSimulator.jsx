import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Smile, Bot, Users, Calendar, FileText, CheckSquare, Search, Briefcase, Beaker, BookOpen, FlaskConical } from 'lucide-react';

const TeamsSimulator = () => {
  const [activeBot, setActiveBot] = useState('AssistBot');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'AssistBot',
      text: 'Hello! I\'m AssistBot, your virtual assistant. I can help you with:\n\n• 📊 Project information\n• ✅ Task management\n• 📅 Meeting scheduling\n• 📄 Document search\n• 💼 Team updates\n\nJust ask me anything!',
      timestamp: new Date(Date.now() - 60000),
      isBot: true,
      botName: 'AssistBot'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Switch between bots
  const switchBot = (botName) => {
    setActiveBot(botName);
    const welcomeMessage = botName === 'AssistBot' 
      ? 'Hello! I\'m AssistBot, your virtual assistant. I can help you with:\n\n• 📊 Project information\n• ✅ Task management\n• 📅 Meeting scheduling\n• 📄 Document search\n• 💼 Team updates\n\nJust ask me anything!'
      : 'Hi! I\'m Luna, your R&D formulation assistant. I specialize in:\n\n• 🧪 Formula search & retrieval\n• 📋 Ingredient database & compatibility\n• ⚖️ Regulatory compliance\n• 🔬 Stability testing data\n• 📊 Batch records & scaling\n• 📚 Literature & research\n• 🔧 Lab equipment management\n\nHow can I help with your formulation work?';
    
    setMessages([{
      id: Date.now(),
      sender: botName,
      text: welcomeMessage,
      timestamp: new Date(),
      isBot: true,
      botName: botName
    }]);
  };

  // Luna (R&D Formulator Bot) skill handlers
  const handleLunaResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Formula Search & Retrieval
    if (lowerMessage.includes('formula') || lowerMessage.includes('formulation') || lowerMessage.includes('recipe')) {
      return {
        text: '🧪 **Formula Search Results**\n\nFound 4 relevant formulations:\n\n**F-2024-089: Anti-Aging Night Cream**\n• Type: Emulsion (O/W)\n• pH: 5.5-6.0\n• Viscosity: 45,000 cPs\n• Status: Production approved\n• Last modified: Nov 10, 2025\n\n**F-2024-067: Hydrating Serum Base**\n• Type: Aqueous gel\n• pH: 6.0-6.5\n• Stability: 24 months proven\n• Status: In production\n\n**F-2024-112: Moisturizing Lotion**\n• Type: Emulsion (O/W)\n• pH: 5.8-6.2\n• Status: Stability testing phase\n\nWould you like detailed ingredient lists or processing parameters?',
        delay: 1600
      };
    }
    
    // Ingredient Database & Compatibility
    if (lowerMessage.includes('ingredient') || lowerMessage.includes('compatibility') || lowerMessage.includes('substitute')) {
      return {
        text: '📋 **Ingredient Information**\n\n**Hyaluronic Acid (Sodium Hyaluronate)**\n• INCI: Sodium Hyaluronate\n• Function: Humectant, skin conditioning\n• Usage: 0.1-2.0%\n• pH stability: 4.0-7.0\n• Solubility: Water soluble\n• Incompatibilities: Strong oxidizing agents\n\n**Compatible with:**\n• Glycerin, propylene glycol\n• Peptides and proteins\n• Niacinamide\n• Most preservative systems\n\n**Substitutes:**\n• Tremella Extract (similar MW)\n• Polyglutamic Acid\n• Beta-Glucan\n\nNeed information on a different ingredient?',
        delay: 1500
      };
    }
    
    // Regulatory Compliance
    if (lowerMessage.includes('regulat') || lowerMessage.includes('compliance') || lowerMessage.includes('restriction') || lowerMessage.includes('approved')) {
      return {
        text: '⚖️ **Regulatory Compliance Check**\n\n**Current Formula: F-2024-089**\n\n✅ **FDA Compliant** (USA)\n• All ingredients GRAS listed\n• No prohibited substances\n• Labeling requirements met\n\n✅ **EU Compliant** (Cosmetics Regulation 1223/2009)\n• All ingredients on CosIng database\n• Preservatives within limits\n• No CMR substances\n\n⚠️ **China NMPA** - Pending\n• Animal testing documentation needed\n• Registration in progress\n\n✅ **ISO 22716:2007 GMP** - Certified\n\nNeed specific country regulations?',
        delay: 1700
      };
    }
    
    // Stability Testing
    if (lowerMessage.includes('stability') || lowerMessage.includes('testing') || lowerMessage.includes('test result')) {
      return {
        text: '🔬 **Stability Testing Data**\n\n**Product: F-2024-089 (Anti-Aging Night Cream)**\n\n**Accelerated Testing (40°C/75% RH)**\n• Week 4: ✅ Passed - No separation\n• Week 8: ✅ Passed - pH: 5.7, Color stable\n• Week 12: ✅ Passed - Viscosity maintained\n\n**Real-Time Testing (25°C/60% RH)**\n• Month 3: ✅ Passed\n• Month 6: ✅ Passed\n• Month 12: Testing in progress (Week 48)\n\n**Freeze-Thaw Cycles**\n• 5 cycles completed: ✅ No phase separation\n\n**Microbial Challenge Test**\n• Status: ✅ Passed (Preservative effective)\n\n**Next testing date:** Nov 20, 2025\n\nWould you like detailed analytical data?',
        delay: 1800
      };
    }
    
    // Batch Records & Scaling
    if (lowerMessage.includes('batch') || lowerMessage.includes('production') || lowerMessage.includes('scal') || lowerMessage.includes('manufacturing')) {
      return {
        text: '📊 **Batch Records & Scaling**\n\n**Recent Batches: F-2024-089**\n\n**Batch #20241110-01** (Lab scale: 2kg)\n• Date: Nov 10, 2025\n• Yield: 98.5%\n• Quality: ✅ Passed all specs\n• pH: 5.65, Viscosity: 44,200 cPs\n\n**Batch #20241025-01** (Pilot scale: 50kg)\n• Date: Oct 25, 2025\n• Yield: 97.8%\n• Quality: ✅ Passed\n• Notes: Slight adjustment needed in mixing time\n\n**Scale-up Recommendation (Lab → Production)**\n• Target batch: 500kg\n• Equipment: Vessel #3 (1000L capacity)\n• Mixing time: +15% compared to lab\n• Homogenization: 8000 RPM, 3 passes\n• Estimated production time: 4.5 hours\n\nNeed the full batch manufacturing record?',
        delay: 1900
      };
    }
    
    // Literature & Research
    if (lowerMessage.includes('research') || lowerMessage.includes('literature') || lowerMessage.includes('study') || lowerMessage.includes('paper')) {
      return {
        text: '📚 **Literature Search Results**\n\nSearch: "anti-aging peptides efficacy"\n\n**Recent Publications:**\n\n1. **"Efficacy of Palmitoyl Peptides in Skin Aging"**\n   • Journal: Int J Cosmet Sci, 2024\n   • Authors: Chen et al.\n   • Key Finding: 23% wrinkle reduction at 3%\n   • Relevance: High - matches current project\n\n2. **"Synergistic Effects of HA and Peptides"**\n   • Journal: J Dermatol Sci, 2024\n   • Clinical study: n=120, 12 weeks\n   • Result: Combined use shows 1.8x improvement\n\n3. **"Stability of Peptides in Cosmetic Emulsions"**\n   • Journal: Cosmet Toiletries, 2024\n   • pH range tested: 4.5-7.0\n   • Optimal stability: pH 5.5-6.0\n\n**Patent Search:** 3 relevant patents found\n\nWould you like full abstracts or PDF access?',
        delay: 1700
      };
    }
    
    // Lab Equipment & Availability
    if (lowerMessage.includes('equipment') || lowerMessage.includes('lab') || lowerMessage.includes('instrument') || lowerMessage.includes('available')) {
      return {
        text: '🔧 **Lab Equipment Status**\n\n**Available Now:**\n✅ Homogenizer #2 (IKA T25)\n✅ pH Meter #3\n✅ Viscometer #1 (Brookfield DV2T)\n✅ Analytical Balance #4\n✅ Hot Plate Stirrer #5-7\n\n**In Use:**\n🔄 HPLC #1 - Available at 3:00 PM\n   • Current user: Dr. Kim\n   • Running: Stability samples\n\n🔄 Rheometer - Available tomorrow 9 AM\n   • Scheduled: Texture analysis\n\n**Maintenance:**\n⚠️ Centrifuge #2 - Under repair\n   • Expected: Nov 16, 2025\n\n**Booking Available:**\n• Microscope #1: Nov 15, 2 PM - 5 PM\n• Stability Chamber A: Nov 18 onwards\n\nWould you like to book equipment?',
        delay: 1600
      };
    }
    
    // Help/Capabilities for Luna
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you') || lowerMessage.includes('capabilities')) {
      return {
        text: '🤖 **Luna\'s R&D Capabilities**\n\nI\'m specialized in formulation support:\n\n🧪 **Formula Management**\n• Search and retrieve formulations\n• Access ingredient lists and procedures\n• Compare formulation versions\n\n📋 **Ingredient Intelligence**\n• Ingredient specifications and compatibility\n• Suggest substitutions\n• Check supplier information\n\n⚖️ **Regulatory & Compliance**\n• Check regulatory status by country\n• Verify ingredient restrictions\n• Generate compliance reports\n\n🔬 **Testing & Quality**\n• Access stability test results\n• Track testing schedules\n• Review quality control data\n\n📊 **Production Support**\n• Batch record access\n• Scaling calculations\n• Manufacturing parameters\n\n📚 **Research Tools**\n• Literature and patent search\n• Scientific database access\n\n🔧 **Lab Operations**\n• Equipment availability\n• Booking and scheduling\n\nWhat would you like to explore?',
        delay: 1800
      };
    }
    
    // Default response
    return {
      text: 'I can help you with formulation-related queries about "' + userMessage + '". Try asking me:\n\n• "Search for moisturizer formulas"\n• "Tell me about hyaluronic acid"\n• "Check regulatory compliance"\n• "Show stability test results"\n• "What batches were produced?"\n• "Find research on peptides"\n• "Is the HPLC available?"\n\nWhat do you need help with?',
      delay: 1000
    };
  };

  // AssistBot skill handlers
  const handleAssistBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Project Information Skill
    if (lowerMessage.includes('project') || lowerMessage.includes('status')) {
      return {
        text: '📊 **Project Status Update**\n\nHere are your active projects:\n\n**Project Alpha** - 85% Complete\n• Status: On track\n• Next milestone: Sprint review on Nov 18\n• Team: 6 members\n\n**Project Beta** - 40% Complete\n• Status: Needs attention\n• Blocker: Awaiting design approval\n• Team: 4 members\n\nWould you like details on a specific project?',
        delay: 1500
      };
    }
    
    // Task Management Skill
    if (lowerMessage.includes('task') || lowerMessage.includes('todo') || lowerMessage.includes('to do')) {
      return {
        text: '✅ **Your Tasks**\n\nHigh Priority:\n• Review Q4 budget proposal (Due: Nov 15)\n• Complete team performance reviews (Due: Nov 20)\n\nMedium Priority:\n• Update project documentation (Due: Nov 22)\n• Schedule client demo (Due: Nov 25)\n\nYou have 4 tasks total. Would you like me to create a new task?',
        delay: 1200
      };
    }
    
    // Meeting/Calendar Skill
    if (lowerMessage.includes('meeting') || lowerMessage.includes('schedule') || lowerMessage.includes('calendar')) {
      return {
        text: '📅 **Your Schedule Today**\n\n9:00 AM - Team Standup (30 min)\n• Conference Room A\n\n11:00 AM - Client Review (1 hour)\n• Virtual Meeting\n\n2:00 PM - Design Workshop (2 hours)\n• Conference Room B\n\nYou have 1 hour free between 1:00-2:00 PM. Would you like to schedule something?',
        delay: 1300
      };
    }
    
    // Document Search Skill
    if (lowerMessage.includes('document') || lowerMessage.includes('file') || lowerMessage.includes('search')) {
      return {
        text: '📄 **Document Search Results**\n\nFound 5 relevant documents:\n\n1. **Q3_Financial_Report.xlsx** - Modified 2 days ago\n2. **Product_Roadmap_2024.pptx** - Modified 5 days ago\n3. **Team_Guidelines.docx** - Modified 1 week ago\n4. **Client_Proposal_Draft.pdf** - Modified 3 days ago\n5. **Meeting_Notes_Nov.docx** - Modified today\n\nWould you like me to open any of these?',
        delay: 1400
      };
    }
    
    // Team Updates Skill
    if (lowerMessage.includes('team') || lowerMessage.includes('member') || lowerMessage.includes('colleague')) {
      return {
        text: '💼 **Team Updates**\n\n**Sarah Chen** - Available\n• Working on: API integration\n• Last active: 5 minutes ago\n\n**Michael Rodriguez** - In a meeting\n• Returns: 3:00 PM\n• Status: Client call\n\n**Emily Watson** - Available\n• Working on: UI design\n• Last active: Just now\n\nYour team has 8 members total. Would you like to see the full roster?',
        delay: 1200
      };
    }
    
    // Help/Capabilities
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you') || lowerMessage.includes('capabilities')) {
      return {
        text: '🤖 **My Capabilities**\n\nI can help you with:\n\n📊 **Project Management**\n• View project status and updates\n• Track milestones and deadlines\n\n✅ **Task Tracking**\n• View and manage your tasks\n• Create new tasks and reminders\n\n📅 **Calendar & Meetings**\n• Check your schedule\n• Find available meeting times\n\n📄 **Document Search**\n• Find files and documents\n• Access recent documents\n\n💼 **Team Collaboration**\n• Check team member availability\n• View team updates and status\n\nJust ask me in natural language!',
        delay: 1600
      };
    }
    
    // Default response
    return {
      text: 'I understand you\'re asking about "' + userMessage + '". I can help with projects, tasks, meetings, documents, and team information. Try asking me about:\n\n• "What\'s my project status?"\n• "Show me my tasks"\n• "What meetings do I have?"\n• "Search for documents"\n• "Show team updates"\n\nWhat would you like to know?',
      delay: 1000
    };
  };

  // Main bot response router
  const handleBotResponse = (userMessage) => {
    if (activeBot === 'Luna') {
      return handleLunaResponse(userMessage);
    } else {
      return handleAssistBotResponse(userMessage);
    }
  };

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const newUserMessage = {
      id: messages.length + 1,
      sender: 'You',
      text: inputText,
      timestamp: new Date(),
      isBot: false,
      botName: activeBot
    };

    setMessages([...messages, newUserMessage]);
    setInputText('');
    setIsTyping(true);

    // Get bot response
    const botResponse = handleBotResponse(inputText);

    // Simulate bot typing delay
    setTimeout(() => {
      const newBotMessage = {
        id: messages.length + 2,
        sender: activeBot,
        text: botResponse.text,
        timestamp: new Date(),
        isBot: true,
        botName: activeBot
      };
      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, botResponse.delay);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  const assistBotActions = [
    { icon: <CheckSquare size={16} />, label: 'My Tasks', action: 'Show me my tasks' },
    { icon: <Calendar size={16} />, label: 'Schedule', action: 'What meetings do I have?' },
    { icon: <FileText size={16} />, label: 'Documents', action: 'Search for documents' },
    { icon: <Briefcase size={16} />, label: 'Projects', action: 'Show project status' },
  ];

  const lunaActions = [
    { icon: <FlaskConical size={16} />, label: 'Formulas', action: 'Search for formulas' },
    { icon: <Beaker size={16} />, label: 'Ingredients', action: 'Tell me about ingredients' },
    { icon: <FileText size={16} />, label: 'Stability', action: 'Show stability test results' },
    { icon: <BookOpen size={16} />, label: 'Research', action: 'Find research papers' },
  ];

  const quickActions = activeBot === 'AssistBot' ? assistBotActions : lunaActions;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-16 bg-gray-800 flex flex-col items-center py-4 space-y-6">
        <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center text-white font-bold">
          T
        </div>
        <div className="space-y-4">
          <div 
            onClick={() => switchBot('AssistBot')}
            className={`w-10 h-10 rounded flex items-center justify-center text-gray-300 cursor-pointer transition-colors ${
              activeBot === 'AssistBot' ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'
            }`}
            title="AssistBot - General Assistant"
          >
            <Bot size={20} />
          </div>
          <div 
            onClick={() => switchBot('Luna')}
            className={`w-10 h-10 rounded flex items-center justify-center text-gray-300 cursor-pointer transition-colors ${
              activeBot === 'Luna' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
            }`}
            title="Luna - R&D Formulator"
          >
            <Beaker size={20} />
          </div>
          <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center text-gray-300 hover:bg-gray-600 cursor-pointer">
            <Users size={20} />
          </div>
          <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center text-gray-300 hover:bg-gray-600 cursor-pointer">
            <Calendar size={20} />
          </div>
          <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center text-gray-300 hover:bg-gray-600 cursor-pointer">
            <FileText size={20} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              activeBot === 'AssistBot' ? 'bg-purple-600' : 'bg-blue-600'
            }`}>
              {activeBot === 'AssistBot' ? (
                <Bot size={18} className="text-white" />
              ) : (
                <Beaker size={18} className="text-white" />
              )}
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-800">{activeBot}</h1>
              <p className="text-xs text-gray-600">
                {activeBot === 'AssistBot' ? 'General Virtual Assistant' : 'R&D Formulation Specialist'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-xs text-green-600 flex items-center">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-1"></span>
              Active
            </div>
            <Search size={20} className="text-gray-600 cursor-pointer hover:text-gray-800 ml-4" />
          </div>
        </div>

        {/* Quick Actions Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex space-x-2 overflow-x-auto">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                setInputText(action.action);
                setTimeout(sendMessage, 100);
              }}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 whitespace-nowrap transition-colors"
            >
              {action.icon}
              <span>{action.label}</span>
            </button>
          ))}
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`flex items-start space-x-2 max-w-2xl ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isBot 
                    ? (message.botName === 'Luna' ? 'bg-blue-600' : 'bg-purple-600')
                    : 'bg-green-600'
                }`}>
                  {message.isBot ? (
                    message.botName === 'Luna' ? (
                      <Beaker size={18} className="text-white" />
                    ) : (
                      <Bot size={18} className="text-white" />
                    )
                  ) : (
                    <span className="text-white text-sm font-semibold">Y</span>
                  )}
                </div>
                <div>
                  <div className={`px-4 py-2 rounded-lg ${
                    message.isBot
                      ? 'bg-white border border-gray-200'
                      : 'bg-green-600 text-white'
                  }`}>
                    <div className="text-xs font-semibold mb-1 opacity-70">
                      {message.sender}
                    </div>
                    <div className="text-sm whitespace-pre-line">
                      {message.text}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 px-2">
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2 max-w-2xl">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activeBot === 'Luna' ? 'bg-blue-600' : 'bg-purple-600'
                }`}>
                  {activeBot === 'Luna' ? (
                    <Beaker size={18} className="text-white" />
                  ) : (
                    <Bot size={18} className="text-white" />
                  )}
                </div>
                <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex items-end space-x-3">
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
              <Paperclip size={20} />
            </button>
            <div className="flex-1 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-transparent">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="w-full px-4 py-3 outline-none resize-none rounded-lg"
                rows="1"
                style={{ maxHeight: '120px' }}
              />
            </div>
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
              <Smile size={20} />
            </button>
            <button
              onClick={sendMessage}
              disabled={inputText.trim() === ''}
              className={`p-3 rounded-lg ${
                inputText.trim() === ''
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : activeBot === 'Luna'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              <Send size={20} />
            </button>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            Press Enter to send, Shift + Enter for new line
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsSimulator;