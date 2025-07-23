"use client"

import { useState } from "react"
import Link from "next/link"
import { Mountain } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { content } from "@/lib/content"
import type { Language } from "@/lib/content"

export default function PrivacyPolicyPage() {
    const [lang, setLang] = useState<Language>("nl")
    const currentContent = content[lang].privacyPolicy

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
                            <h2>{currentContent.introduction.title}</h2>
                            <p>{currentContent.introduction.p1}</p>
                        </section>

                        <section>
                            <h2>{currentContent.dataWeCollect.title}</h2>
                            <p>{currentContent.dataWeCollect.p1}</p>
                            <ul>
                                {currentContent.dataWeCollect.list.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2>{currentContent.howWeUseData.title}</h2>
                            <p>{currentContent.howWeUseData.p1}</p>
                        </section>

                        <section>
                            <h2>{currentContent.dataStorage.title}</h2>
                            <p>{currentContent.dataStorage.p1}</p>
                        </section>

                        <section>
                            <h2>{currentContent.yourRights.title}</h2>
                            <p>{currentContent.yourRights.p1}</p>
                            <ul>
                                {currentContent.yourRights.list.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2>{currentContent.contactUs.title}</h2>
                            <p>{currentContent.contactUs.p1}</p>
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
