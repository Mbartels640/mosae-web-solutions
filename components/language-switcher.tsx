"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import type { Language } from "@/lib/content";

interface LanguageSwitcherProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function LanguageSwitcher({ lang, setLang }: LanguageSwitcherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Taal wijzigen</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLang("nl")}>
          🇳🇱 Nederlands
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("de")}>
          🇩🇪 Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("en")}>
          🇬🇧 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
