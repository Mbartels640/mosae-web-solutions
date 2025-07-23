"use client"

import { useState } from "react"
import Link from "next/link"
import { Mountain } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { content } from "@/lib/content"
import type { Language } from "@/lib/content"

export default function CookiePolicyPage() {
    const [lang, setLang] = useState<Language>("nl")
    const currentContent = content[lang].cookiePolicy

    return (
        <div className="flex min-h-[100dvh] flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Mountain className="h-6 w-6" />
                        <span>Dynamic Web Studio</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/#services"
                            className="hidden text-sm font-medium text-muted-foreground hover:text-foreground md:block"
                        >
                            {content[lang].nav.services}
                        </Link>
                        <Link
                            href="/#contact"
                            className="hidden text-sm font-medium text-muted-foreground hover:text-foreground md:block"
                        >
                            {content[lang].nav.contact}
                        </Link>
                        <LanguageSwitcher lang={lang} setLang={setLang} />
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-20">
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                        <h1>{currentContent.title}</h1>
                        <p className="lead">{currentContent.lastUpdated}</p>

                        <section>
                            <h2>{currentContent.whatAreCookies.title}</h2>
                            <p>{currentContent.whatAreCookies.p1}</p>
                        </section>

                        <section>
                            <h2>{currentContent.howWeUse.title}</h2>
                            <p>{currentContent.howWeUse.p1}</p>
                            <ul>
                                {currentContent.howWeUse.list.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2>{currentContent.cookiesWeUse.title}</h2>
                            <h3>{currentContent.cookiesWeUse.essential.title}</h3>
                            <p>{currentContent.cookiesWeUse.essential.p1}</p>

                            <h3>{currentContent.cookiesWeUse.analytics.title}</h3>
                            <p>{currentContent.cookiesWeUse.analytics.p1}</p>
                            <p>
                                <strong>Vercel Analytics:</strong> {currentContent.cookiesWeUse.analytics.vercel}
                            </p>
                            <p>
                                <strong>Google Analytics:</strong> {currentContent.cookiesWeUse.analytics.google}
                            </p>
                        </section>

                        <section>
                            <h2>{currentContent.managing.title}</h2>
                            <p>{currentContent.managing.p1}</p>
                        </section>
                    </div>
                </div>
            </main>
            <footer className="border-t bg-muted">
                <div className="container p-6 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Dynamic Web Studio. {content[lang].footer.rights}
                </div>
            </footer>
        </div>
    )
}
