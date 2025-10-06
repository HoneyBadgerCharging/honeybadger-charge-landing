"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Check } from "lucide-react";

interface Language {
  code: string;
  label: string;
  region: string;
}

const languages: Language[] = [
  { code: "EN", label: "English", region: "Canada" },
  { code: "FR", label: "French", region: "Canada" },
];

interface LanguageSelectProps {
  className?: string;
}

export function LanguageSelect({ className }: LanguageSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 ${className}`}
        title="Select language"
        aria-label="Select language"
      >
        <Globe className="h-5 w-5" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-1 w-48 rounded-xl border border-border bg-background shadow-lg z-50"
          >
            <div className="p-2 space-y-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    setSelectedLanguage(language);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-muted transition-colors group text-left"
                >
                  <div className="flex-1">
                    <div className="font-medium text-sm text-foreground">
                      {language.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {language.region}
                    </div>
                  </div>
                  {selectedLanguage.code === language.code && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
