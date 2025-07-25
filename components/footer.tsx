"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Footer() {
  const { lang } = useLanguage();
  const currentContent = content[lang];
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const FooterLogo = () => {
    if (!mounted) {
      return <div className="h-6 w-24 bg-muted animate-pulse rounded" />;
    }

    const isDark = resolvedTheme === "dark";

    return (
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
    );
  };

  return (
    <motion.footer
      className="border-t bg-muted"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 py-8 md:px-6">
        {/* Main footer content */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo and company info */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Link href="/" className="flex items-center">
              <FooterLogo />
            </Link>
            <p className="text-sm text-muted-foreground text-center sm:text-left mosae-body">
              Bridging Tradition with Digital Excellence
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="/#services"
              className="text-sm hover:text-mosae-orange transition-colors duration-200 mosae-body"
            >
              {currentContent.nav.services}
            </Link>
            <Link
              href="/#contact"
              className="text-sm hover:text-mosae-orange transition-colors duration-200 mosae-body"
            >
              {currentContent.nav.contact}
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border/40">
          <p className="text-sm text-muted-foreground text-center mosae-body">
            &copy; {new Date().getFullYear()} Mosae Web Solutions.{" "}
            {currentContent.footer.rights}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
