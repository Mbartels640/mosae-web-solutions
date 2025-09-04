"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ModeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Header() {
  const { lang } = useLanguage()
  const currentContent = content[lang]
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const Logo = () => {
    if (!mounted) {
      return <div className="h-8 w-32 bg-muted animate-pulse rounded" />
    }

    // bekijk https://github.com/pacocoursey/next-themes
    const isDark = resolvedTheme === "dark"
    return (
        <Image
            src={isDark ? "/logo_for_black_background.svg" : "/logo_for_white_background.svg"}
            alt="Mosae Web Solutions Logo"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
        />
    )
  }

  return (
      <motion.header
          className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between my-2 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-4 md:flex">
            <Link
                href="/#services"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-mosae-orange mosae-body"
            >
              {currentContent.nav.services}
            </Link>
            <Link
                href="/#contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-mosae-orange mosae-body"
            >
              {currentContent.nav.contact}
            </Link>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
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
                  <Link href="/" className="flex items-center gap-2 font-semibold">
                    <Logo />
                  </Link>
                  <nav className="flex flex-col gap-4">
                    <SheetClose asChild>
                      <Link href="/#services" className="text-lg font-medium hover:text-mosae-orange mosae-body">
                        {currentContent.nav.services}
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/#contact" className="text-lg font-medium hover:text-mosae-orange mosae-body">
                        {currentContent.nav.contact}
                      </Link>
                    </SheetClose>
                  </nav>
                  <div className="mt-auto flex items-center gap-4">
                    <LanguageSwitcher />
                    <ModeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
  )
}
