"use client";
import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";
import { motion } from "framer-motion";
import {scaleIn} from "@/lib/framer-variants";
import {Hero} from "@/components/home/hero";
import {Services} from "@/components/home/services";

export default function HomePage() {
  const { lang } = useLanguage();
  const currentContent = content[lang];

  return (
    <>
      <Hero />
      <Services />
      <motion.section
        id="contact"
        className="w-full py-20 md:py-24 lg:py-32 bg-white dark:bg-gray-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto max-w-2xl"
            variants={scaleIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <ContactForm
              content={currentContent.contact}
              services={currentContent.services.items.map((s) => s.title)}
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
