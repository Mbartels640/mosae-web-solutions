"use client"

import type React from "react"
import { createContext, useContext } from "react"

interface RecaptchaContextType {
    siteKey: string
}

const RecaptchaContext = createContext<RecaptchaContextType | null>(null)

export function useRecaptchaContext() {
    const context = useContext(RecaptchaContext)
    if (!context) {
        throw new Error("useRecaptchaContext must be used within a RecaptchaProvider")
    }
    return context
}

interface RecaptchaProviderProps {
    children: React.ReactNode
    siteKey: string
}

export function RecaptchaProvider({ children, siteKey }: RecaptchaProviderProps) {
    return <RecaptchaContext.Provider value={{ siteKey }}>{children}</RecaptchaContext.Provider>
}
