"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, Send, X, Bot } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {useTheme} from "next-themes";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const {messages, sendMessage, status} = useChat()
    const [inputValue, setInputValue] = useState("")
    const scrollAreaRef = useRef<HTMLDivElement>(null)
    const { resolvedTheme } = useTheme();


    const isLoading = status === "submitted" || status === "streaming"

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({
                top: scrollAreaRef.current.scrollHeight,
                behavior: "smooth",
            })
        }
    }, [messages])

    const toggleChat = () => setIsOpen(!isOpen)

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!inputValue.trim()) return
        sendMessage({files: undefined, parts: undefined, text: inputValue})
        setInputValue("")
    }

    if (!isOpen) {
        return (
            <Button
                onClick={toggleChat}
                className="fixed bottom-4 left-4 w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg z-50"
            >
                <MessageSquare className="w-8 h-8 text-primary-foreground"/>
            </Button>
        )
    }

    const isDark = resolvedTheme === "dark";

    return (
        <Card
            className="fixed bottom-4 left-4 w-full max-w-sm z-50 h-[70vh] max-h-[600px] flex flex-col shadow-2xl rounded-2xl border bg-background">
            <CardHeader className="flex flex-row items-center justify-between p-4 border-b flex-shrink-0">
                <div className="flex items-center gap-3">
                    <Image
                        src={
                            isDark
                                ? "/logo_for_black_background.svg"
                                : "/logo_for_white_background.svg"
                        }
                        alt="Mosae Web Solutions Logo"
                        width={96}
                        height={24}
                        className="h-6 w-auto"
                    />
                </div>
                <Button variant="ghost" size="icon" onClick={toggleChat}>
                    <X className="h-5 w-5 text-muted-foreground"/>
                </Button>
            </CardHeader>
            <CardContent className="flex-1 p-0 overflow-hidden">
                <ScrollArea className="h-full w-full" ref={scrollAreaRef}>
                    <div className="p-4 space-y-4">
                        {messages.map((m) => (
                            <div key={m.id}
                                 className={cn("flex gap-3", m.role === "user" ? "justify-end" : "justify-start")}>
                                {m.role === "assistant" && (
                                    <div
                                        className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                        <Bot className="w-5 h-5 text-primary-foreground"/>
                                    </div>
                                )}
                                <div
                                    className={cn(
                                        "p-3 rounded-xl max-w-[80%] text-sm",
                                        m.role === "user"
                                            ? "bg-primary text-primary-foreground rounded-br-none"
                                            : "bg-secondary text-secondary-foreground rounded-bl-none",
                                    )}
                                >
                                    <div className="leading-relaxed whitespace-pre-wrap">
                                        {m.parts.map((part, index) => {
                                            if (part.type === "text") {
                                                return <span key={index}>{part.text}</span>
                                            }
                                            return null
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start gap-3">
                                <div
                                    className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                    <Bot className="w-5 h-5 text-primary-foreground"/>
                                </div>
                                <div className="bg-secondary text-secondary-foreground rounded-bl-none p-3 rounded-xl">
                                    <div className="flex items-center space-x-1">
                                        <span
                                            className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span
                                            className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span
                                            className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>
            </CardContent>
            <CardFooter className="p-4 border-t flex-shrink-0">
                <form onSubmit={handleFormSubmit} className="flex w-full items-center space-x-2">
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask about our services..."
                        className="flex-1"
                    />
                    <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90" disabled={isLoading}>
                        <Send className="h-4 w-4"/>
                    </Button>
                </form>
            </CardFooter>
        </Card>
    )
}