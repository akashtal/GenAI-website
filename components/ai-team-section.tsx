"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, Clock, Zap } from "lucide-react"

interface Message {
  text: string
  sender: string
  delay: number
}

const conversations = [
  {
    title: "Mobile App Development Inquiry",
    messages: [
      { text: "Hi! I have an idea for a fitness app. Can you give me a quote?", sender: "customer", delay: 0 },
      {
        text: "We'd love to help! To give you an accurate estimate, do you need iOS, Android, or both?",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "Both please. And it needs user profiles and workout tracking.",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "Excellent. For a cross-platform Flutter app with those features, we have custom packages available. This includes design, development, and launch. Would you like to see our portfolio?",
        sender: "ai",
        delay: 3500,
      },
      { text: "Yes, that sounds great!", sender: "customer", delay: 5000 },
      {
        text: "I've sent our portfolio to your email. We can schedule a free 30-min consultation to discuss your idea in detail. How does tomorrow at 10 AM look?",
        sender: "ai",
        delay: 6000,
      },
    ],
  },
  {
    title: "Marketing Campaign Performance",
    messages: [
      { text: "How is my Google Ads campaign performing this week?", sender: "customer", delay: 0 },
      {
        text: "It's going great! Your CTR has increased by 15% and we've generated 45 new qualified leads so far this week.",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "That's amazing! What's the cost per lead?",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "Your CPL is currently lower than last month. We're optimizing the ad copy to drive it down further.",
        sender: "ai",
        delay: 4000,
      },
      { text: "Fantastic work. Keep it up!", sender: "customer", delay: 5500 },
    ],
  },
  {
    title: "Website Maintenance Support",
    messages: [
      {
        text: "I need to update the pricing on my landing page ASAP.",
        sender: "customer",
        delay: 0,
      },
      {
        text: "I can help with that immediately. Please send over the new pricing details.",
        sender: "ai",
        delay: 1000,
      },
      { text: "What are your current plan rates?", sender: "customer", delay: 2500 },
      {
        text: "Got it. I'm updating the pricing table now...",
        sender: "ai",
        delay: 3500,
      },
      {
        text: "Update complete! The new prices are live on your site. I've also checked the checkout flow to ensure everything works perfectly.",
        sender: "ai",
        delay: 6000,
      },
    ],
  },
]

export function AITeamSection() {
  const sectionRef = useRef<HTMLElement>(null) // Added section ref for intersection observer
  const [isVisible, setIsVisible] = useState(false)
  const [currentConversation, setCurrentConversation] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [displayedMessages, isTyping])

  useEffect(() => {
    const conversation = conversations[currentConversation]
    setDisplayedMessages([])
    setIsTyping(false)

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    let messageIndex = 0

    const showNextMessage = () => {
      if (messageIndex >= conversation.messages.length) {
        // Wait 3 seconds then move to next conversation
        timeoutRef.current = setTimeout(() => {
          setCurrentConversation((prev) => (prev + 1) % conversations.length)
        }, 3000)
        return
      }

      const message = conversation.messages[messageIndex]

      timeoutRef.current = setTimeout(() => {
        if (message.sender === "ai") {
          setIsTyping(true)
          timeoutRef.current = setTimeout(() => {
            setDisplayedMessages((prev) => [...prev, message])
            setIsTyping(false)
            messageIndex++
            showNextMessage()
          }, 800) // Reduced typing delay from 1500ms to 800ms for faster replies
        } else {
          setDisplayedMessages((prev) => [...prev, message])
          messageIndex++
          showNextMessage()
        }
      }, message.delay)
    }

    showNextMessage()

    // Cleanup timeout on unmount or conversation change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentConversation])

  return (
    <section id="ai-team" ref={sectionRef} className="relative z-10">
      <div className="bg-white rounded-b-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <MessageCircle className="w-4 h-4" />
              our recent works
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              Experience Seamless{" "}
              <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
                Communication
              </span>
            </h2>

            <p
              className={`text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              Get instant updates on your project, real-time analytics, and immediate support. We're always here for you.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* Left side - Text content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:h-[600px] space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div
                className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">
                  This is what you get updates in real time
                </h3>

                <div className="space-y-3 lg:space-y-4 text-base lg:text-lg text-slate-700 leading-relaxed">
                  <p>
                    Stay connected with your project's progress 24/7. No more waiting for weekly status meetings or wondering where your development stands.
                  </p>

                  <p className="text-lg lg:text-xl font-semibold text-slate-900">
                    We believe in complete transparency.
                  </p>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
              >
                <div className="p-4 lg:p-6 bg-slate-50 rounded-xl border-l-4 border-slate-900">
                  <p className="text-slate-800 font-medium text-sm lg:text-base">
                    "Finally, an agency that doesn't keep us in the dark. We know exactly what's happening with our project every single day. width 100% transparency."
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="max-w-md w-full">
                <div
                  className={`relative transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                  <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-[2rem] p-1">
                      <div className="bg-white rounded-[1.5rem] overflow-hidden">
                        {/* Status bar */}
                        <div className="bg-slate-50 px-6 py-3 flex justify-between items-center text-sm">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                            <span className="font-medium text-slate-700">Agency Support</span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-500">
                            <Clock className="w-3 h-3" />
                            <span className="text-xs">24/7</span>
                          </div>
                        </div>

                        <div className="bg-slate-900 px-6 py-4 text-white">
                          <div className="flex items-center gap-3">
                            <img
                              src="/images/michael-ai-agent.jpg"
                              alt="Support Agent"
                              width={32}
                              height={32}
                              className="w-8 h-8 rounded-full object-cover mr-2 mt-1 flex-shrink-0"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-sm">Project Manager</h3>
                              <p className="text-xs text-slate-300">Always Online</p>
                            </div>
                            <div className="text-xs text-green-400 flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              Online
                            </div>
                          </div>
                        </div>

                        {/* Chat messages */}
                        <div
                          ref={chatContainerRef}
                          className="h-96 overflow-y-scroll scrollbar-hide p-4 space-y-3 bg-slate-50"
                          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                          {displayedMessages.map((message, index) => (
                            <div
                              key={index}
                              className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"}`}
                            >
                              {message.sender === "ai" && (
                                <img
                                  src="/images/michael-ai-agent.jpg"
                                  alt="Michael"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6 rounded-full object-cover mr-2 mt-1 flex-shrink-0"
                                />
                              )}
                              <div
                                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${message.sender === "customer"
                                  ? "bg-slate-900 text-white rounded-br-md"
                                  : "bg-white text-slate-800 shadow-sm border border-slate-200 rounded-bl-md"
                                  }`}
                              >
                                {message.text.split("\n").map((line, i) => (
                                  <div key={i}>{line}</div>
                                ))}
                              </div>
                              {message.sender === "customer" && (
                                <div className="w-6 h-6 rounded-full bg-slate-400 ml-2 mt-1 flex-shrink-0 flex items-center justify-center text-xs text-white font-medium">
                                  C
                                </div>
                              )}
                            </div>
                          ))}

                          {/* Typing indicator */}
                          {isTyping && (
                            <div className="flex justify-start items-start">
                              <img
                                src="/images/michael-ai-agent.jpg"
                                alt="Michael"
                                className="w-6 h-6 rounded-full object-cover mr-2 mt-1 flex-shrink-0"
                              />
                              <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border border-slate-200">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                  <div
                                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.1s" }}
                                  ></div>
                                  <div
                                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="p-4 bg-white border-t border-slate-200">
                          <div className="flex items-center gap-3 bg-slate-100 rounded-full px-4 py-2">
                            <span className="text-slate-500 text-sm lg:text-base flex-1">Michael is responding...</span>
                            <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                              <Zap className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
