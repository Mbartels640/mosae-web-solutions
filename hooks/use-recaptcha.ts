"use client"

import { useCallback, useEffect, useState } from "react"

declare global {
    interface Window {
        grecaptcha: {
            ready: (callback: () => void) => void
            execute: (siteKey: string, options: { action: string }) => Promise<string>
        }
    }
}

interface UseRecaptchaOptions {
    siteKey: string
    action: string
}

export function useRecaptcha({ siteKey, action }: UseRecaptchaOptions) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // Check if reCAPTCHA is already loaded
        if (window.grecaptcha) {
            setIsLoaded(true)
            return
        }

        // Load reCAPTCHA script
        const script = document.createElement("script")
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
        script.async = true
        script.defer = true

        script.onload = () => {
            window.grecaptcha.ready(() => {
                setIsLoaded(true)
            })
        }

        document.head.appendChild(script)

        return () => {
            // Cleanup script if component unmounts
            const existingScript = document.querySelector(`script[src*="recaptcha"]`)
            if (existingScript) {
                document.head.removeChild(existingScript)
            }
        }
    }, [siteKey])

    const executeRecaptcha = useCallback(async (): Promise<string | null> => {
        if (!isLoaded || !window.grecaptcha) {
            console.warn("reCAPTCHA not loaded yet")
            return null
        }

        setIsLoading(true)
        try {
            const token = await window.grecaptcha.execute(siteKey, { action })
            return token
        } catch (error) {
            console.error("reCAPTCHA execution failed:", error)
            return null
        } finally {
            setIsLoading(false)
        }
    }, [isLoaded, siteKey, action])

    return {
        isLoaded,
        isLoading,
        executeRecaptcha,
    }
}
