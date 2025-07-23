"use client";
import Link from "next/link";
import { Mountain, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ModeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";

export function Header() {
  const { lang } = useLanguage();
  const currentContent = content[lang];

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Mountain className="h-6 w-6 text-red-600" />
          <span className="text-lg">Mosae Web Solutions</span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="/#services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {currentContent.nav.services}
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Mountain className="h-6 w-6 text-red-600" />
                  <span className="text-lg">Mosae Web Solutions</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  <SheetClose asChild>
                    <Link
                      href="/#services"
                      className="text-lg font-medium hover:text-primary"
                    >
                      {currentContent.nav.services}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/#contact"
                      className="text-lg font-medium hover:text-primary"
                    >
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
  );
}
