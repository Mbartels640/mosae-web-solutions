"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";

export function Footer() {
  const { lang } = useLanguage();
  const currentContent = content[lang];

  return (
    <motion.footer
      className="border-t bg-muted"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mosae Web Solutions.{" "}
          {currentContent.footer.rights}
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/#services"
            className="text-sm hover:underline underline-offset-4"
          >
            {currentContent.nav.services}
          </Link>
          <Link
            href="/#contact"
            className="text-sm hover:underline underline-offset-4"
          >
            {currentContent.nav.contact}
          </Link>
        </nav>
      </div>
    </motion.footer>
  );
}
