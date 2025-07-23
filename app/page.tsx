"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mountain, CheckCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ContactForm } from "@/components/contact-form";
import { content } from "@/lib/content";
import type { Language } from "@/lib/content";
import { ModeToggle } from "@/components/theme-toggle";

export default function Component() {
  const [lang, setLang] = useState<Language>("nl");
  const currentContent = content[lang];

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
          <Link href="#home" className="flex items-center gap-2 font-semibold">
            <Mountain className="h-6 w-6" />
            <span className="text-lg">Mosae Web Solutions</span>
          </Link>
          <nav className="hidden items-center gap-4 md:flex">
            <Link
              href="#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {currentContent.nav.services}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {currentContent.nav.contact}
            </Link>
            <div className="flex items-center gap-2">
              <LanguageSwitcher lang={lang} setLang={setLang} />
              <ModeToggle />
            </div>
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigatiemenu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <Link
                    href="#home"
                    className="flex items-center gap-2 font-semibold"
                  >
                    <Mountain className="h-6 w-6" />
                    <span className="text-lg">Mosae Web Solutions</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    <SheetClose asChild>
                      <Link
                        href="#services"
                        className="text-lg font-medium hover:text-primary"
                      >
                        {currentContent.nav.services}
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="#contact"
                        className="text-lg font-medium hover:text-primary"
                      >
                        {currentContent.nav.contact}
                      </Link>
                    </SheetClose>
                  </nav>
                  <div className="mt-auto flex items-center gap-4">
                    <LanguageSwitcher lang={lang} setLang={setLang} />
                    <ModeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section id="home" className="relative w-full py-24 md:py-40 lg:py-56">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1631107452534-b8f9868a8b20?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern web development workspace"
              fill
              className="object-cover"
              priority
            />
            {/* Softer gradient overlay for better text warmth */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
          </div>
          <div className="container relative mx-auto px-4 text-center md:px-6">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tighter text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl/none">
                {currentContent.hero.title}
              </h1>
              <p className="mt-6 text-lg text-slate-100/95 md:text-xl">
                {currentContent.hero.subtitle}
              </p>
              <p className="mt-4 text-base text-slate-200/90 md:text-lg">
                {currentContent.hero.body}
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                >
                  <Link href="#contact">{currentContent.hero.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="w-full bg-gray-50 dark:bg-gray-900 py-20 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-gray-50">
                {currentContent.services.title}
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 md:text-xl">
                {currentContent.services.subtitle}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentContent.services.items.map((service, index) => {
                const ServiceIcons = {
                  0: (
                    <div className="h-48 w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                      <svg
                        viewBox="0 0 400 300"
                        className="w-full h-full max-w-80 max-h-60"
                      >
                        {/* Browser Window */}
                        <rect
                          x="50"
                          y="60"
                          width="300"
                          height="200"
                          rx="8"
                          fill="#f8fafc"
                          stroke="#e2e8f0"
                          strokeWidth="2"
                        />
                        <rect
                          x="50"
                          y="60"
                          width="300"
                          height="40"
                          rx="8"
                          fill="#334155"
                        />
                        <circle cx="70" cy="80" r="6" fill="#ef4444" />
                        <circle cx="90" cy="80" r="6" fill="#f59e0b" />
                        <circle cx="110" cy="80" r="6" fill="#10b981" />
                        {/* Code Elements */}
                        <rect
                          x="70"
                          y="120"
                          width="80"
                          height="8"
                          rx="4"
                          fill="#6366f1"
                        />
                        <rect
                          x="70"
                          y="140"
                          width="120"
                          height="8"
                          rx="4"
                          fill="#8b5cf6"
                        />
                        <rect
                          x="70"
                          y="160"
                          width="60"
                          height="8"
                          rx="4"
                          fill="#06b6d4"
                        />
                        {/* Gear Icon */}
                        <g transform="translate(280, 180)">
                          <circle cx="0" cy="0" r="25" fill="#f59e0b" />
                          <circle cx="0" cy="0" r="12" fill="#fff" />
                          <rect
                            x="-3"
                            y="-30"
                            width="6"
                            height="10"
                            rx="3"
                            fill="#f59e0b"
                          />
                          <rect
                            x="-3"
                            y="20"
                            width="6"
                            height="10"
                            rx="3"
                            fill="#f59e0b"
                          />
                          <rect
                            x="20"
                            y="-3"
                            width="10"
                            height="6"
                            rx="3"
                            fill="#f59e0b"
                          />
                          <rect
                            x="-30"
                            y="-3"
                            width="10"
                            height="6"
                            rx="3"
                            fill="#f59e0b"
                          />
                        </g>
                        {/* Developer Figure */}
                        <g transform="translate(320, 140)">
                          <circle cx="0" cy="-20" r="12" fill="#fbbf24" />
                          <rect
                            x="-8"
                            y="-10"
                            width="16"
                            height="25"
                            rx="8"
                            fill="#3b82f6"
                          />
                          <rect
                            x="-6"
                            y="15"
                            width="5"
                            height="15"
                            fill="#1e40af"
                          />
                          <rect
                            x="1"
                            y="15"
                            width="5"
                            height="15"
                            fill="#1e40af"
                          />
                        </g>
                      </svg>
                    </div>
                  ),
                  // SEO Optimization
                  1: (
                    <div className="h-48 w-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                      <svg
                        viewBox="0 0 400 300"
                        className="w-full h-full max-w-80 max-h-60"
                      >
                        {/* Search Bar */}
                        <rect
                          x="50"
                          y="80"
                          width="250"
                          height="40"
                          rx="20"
                          fill="#fff"
                          stroke="#e2e8f0"
                          strokeWidth="2"
                        />
                        <circle cx="280" cy="100" r="15" fill="#10b981" />
                        <path
                          d="m285 105 5 5"
                          stroke="#fff"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        {/* Search Results */}
                        <rect
                          x="70"
                          y="140"
                          width="200"
                          height="12"
                          rx="6"
                          fill="#3b82f6"
                        />
                        <rect
                          x="70"
                          y="160"
                          width="150"
                          height="8"
                          rx="4"
                          fill="#6b7280"
                        />
                        <rect
                          x="70"
                          y="175"
                          width="180"
                          height="8"
                          rx="4"
                          fill="#6b7280"
                        />
                        <rect
                          x="70"
                          y="200"
                          width="180"
                          height="12"
                          rx="6"
                          fill="#3b82f6"
                        />
                        <rect
                          x="70"
                          y="220"
                          width="160"
                          height="8"
                          rx="4"
                          fill="#6b7280"
                        />
                        <rect
                          x="70"
                          y="235"
                          width="140"
                          height="8"
                          rx="4"
                          fill="#6b7280"
                        />
                        {/* Analytics Chart */}
                        <g transform="translate(300, 160)">
                          <rect
                            x="0"
                            y="40"
                            width="8"
                            height="20"
                            fill="#10b981"
                          />
                          <rect
                            x="12"
                            y="30"
                            width="8"
                            height="30"
                            fill="#10b981"
                          />
                          <rect
                            x="24"
                            y="20"
                            width="8"
                            height="40"
                            fill="#10b981"
                          />
                          <rect
                            x="36"
                            y="10"
                            width="8"
                            height="50"
                            fill="#10b981"
                          />
                          <rect
                            x="48"
                            y="5"
                            width="8"
                            height="55"
                            fill="#10b981"
                          />
                        </g>
                        {/* Magnifying Glass */}
                        <g transform="translate(320, 100)">
                          <circle
                            cx="0"
                            cy="0"
                            r="20"
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="4"
                          />
                          <path
                            d="m15 15 10 10"
                            stroke="#f59e0b"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </g>
                      </svg>
                    </div>
                  ),
                  // Maintenance & Support
                  2: (
                    <div className="h-48 w-full bg-gradient-to-br from-purple-50 to-violet-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                      <svg
                        viewBox="0 0 400 300"
                        className="w-full h-full max-w-80 max-h-60"
                      >
                        {/* Shield */}
                        <path
                          d="M200 50 L160 70 L160 150 Q160 180 200 200 Q240 180 240 150 L240 70 Z"
                          fill="#8b5cf6"
                        />
                        <path
                          d="M200 70 L175 85 L175 145 Q175 165 200 180 Q225 165 225 145 L225 85 Z"
                          fill="#a78bfa"
                        />
                        {/* Checkmark */}
                        <path
                          d="m185 125 10 10 20-20"
                          stroke="#fff"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        {/* Tools */}
                        <g transform="translate(120, 180)">
                          <rect
                            x="0"
                            y="0"
                            width="40"
                            height="8"
                            rx="4"
                            fill="#f59e0b"
                            transform="rotate(45)"
                          />
                          <rect
                            x="15"
                            y="-15"
                            width="8"
                            height="40"
                            rx="4"
                            fill="#f59e0b"
                            transform="rotate(45)"
                          />
                        </g>
                        <g transform="translate(280, 180)">
                          <circle
                            cx="0"
                            cy="0"
                            r="20"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="4"
                          />
                          <rect
                            x="-15"
                            y="-3"
                            width="30"
                            height="6"
                            rx="3"
                            fill="#10b981"
                          />
                          <rect
                            x="-3"
                            y="-15"
                            width="6"
                            height="30"
                            rx="3"
                            fill="#10b981"
                          />
                        </g>
                        {/* Gears */}
                        <g transform="translate(100, 120)">
                          <circle cx="0" cy="0" r="15" fill="#06b6d4" />
                          <circle cx="0" cy="0" r="8" fill="#fff" />
                          <rect
                            x="-2"
                            y="-18"
                            width="4"
                            height="6"
                            rx="2"
                            fill="#06b6d4"
                          />
                          <rect
                            x="-2"
                            y="12"
                            width="4"
                            height="6"
                            rx="2"
                            fill="#06b6d4"
                          />
                          <rect
                            x="12"
                            y="-2"
                            width="6"
                            height="4"
                            rx="2"
                            fill="#06b6d4"
                          />
                          <rect
                            x="-18"
                            y="-2"
                            width="6"
                            height="4"
                            rx="2"
                            fill="#06b6d4"
                          />
                        </g>
                        <g transform="translate(300, 120)">
                          <circle cx="0" cy="0" r="12" fill="#f59e0b" />
                          <circle cx="0" cy="0" r="6" fill="#fff" />
                          <rect
                            x="-1.5"
                            y="-15"
                            width="3"
                            height="5"
                            rx="1.5"
                            fill="#f59e0b"
                          />
                          <rect
                            x="-1.5"
                            y="10"
                            width="3"
                            height="5"
                            rx="1.5"
                            fill="#f59e0b"
                          />
                          <rect
                            x="10"
                            y="-1.5"
                            width="5"
                            height="3"
                            rx="1.5"
                            fill="#f59e0b"
                          />
                          <rect
                            x="-15"
                            y="-1.5"
                            width="5"
                            height="3"
                            rx="1.5"
                            fill="#f59e0b"
                          />
                        </g>
                      </svg>
                    </div>
                  ),
                };

                return (
                  <Card
                    key={service.title}
                    className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 bg-white dark:bg-gray-800 p-0"
                  >
                    {ServiceIcons[index as keyof typeof ServiceIcons]}
                    <div className="flex flex-1 flex-col p-6">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-gray-600 dark:text-gray-400">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 p-0">
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-20 md:py-24 lg:py-32 bg-white dark:bg-gray-950"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <ContactForm
                content={currentContent.contact}
                services={currentContent.services.items.map((s) => s.title)}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mosae Web Solutions.{" "}
            {currentContent.footer.rights}
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#services"
              className="text-sm hover:underline underline-offset-4"
            >
              {currentContent.nav.services}
            </Link>
            <Link
              href="#contact"
              className="text-sm hover:underline underline-offset-4"
            >
              {currentContent.nav.contact}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
