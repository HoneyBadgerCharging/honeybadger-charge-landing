"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Search,
  MapPin,
  Building2,
  Zap,
  HelpCircle,
  MessageCircle,
  Car,
  FileText,
  ChevronRight,
  ArrowRight,
  TrendingUp,
  Settings,
  Clock,
} from "lucide-react";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDialog = ({ isOpen, onClose }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const quickActions = [
    {
      icon: MapPin,
      label: "Find Charger",
      description: "Locate nearby charging stations",
      href: "/find-charger",
    },
    {
      icon: Building2,
      label: "Host Charger",
      description: "Install charging at your property",
      href: "/host-charger",
    },
    {
      icon: HelpCircle,
      label: "Support",
      description: "Get help with charging",
      href: "/support",
    },
    {
      icon: Car,
      label: "Fleet Solutions",
      description: "EV charging for businesses",
      href: "/fleet",
    },
  ];

  const popularSearches = [
    {
      icon: Clock,
      label: "Charging times",
      href: "/guide/charging-times",
    },
    {
      icon: TrendingUp,
      label: "Energy costs",
      href: "/guide/costs",
    },
    {
      icon: Settings,
      label: "Installation process",
      href: "/guide/installation",
    },
    {
      icon: Zap,
      label: "Charging speeds",
      href: "/guide/speeds",
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
        onClick={onClose}
      />

      {/* Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-x-0 top-4 mx-auto z-[101] max-w-2xl p-4"
      >
        <div className="bg-background rounded-2xl shadow-2xl border border-border overflow-hidden">
          {/* Search Input */}
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for chargers, guides, or get support..."
                className="w-full pl-10 pr-4 py-3 bg-muted/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              />
              <button
                onClick={onClose}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                title="Close search dialog"
                aria-label="Close search dialog"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="px-2 pb-4">
            {/* Quick Actions */}
            <div className="mb-6">
              <h3 className="px-2 mb-2 text-sm font-medium text-muted-foreground">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className="flex items-start gap-3 p-2 hover:bg-muted rounded-lg transition-colors group"
                  >
                    <div className="mt-1 text-primary">
                      <action.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {action.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {action.description}
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Popular Searches */}
            <div>
              <h3 className="px-2 mb-2 text-sm font-medium text-muted-foreground">
                Popular
              </h3>
              <div className="space-y-1">
                {popularSearches.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-2 py-1.5 hover:bg-muted rounded-lg transition-colors group"
                  >
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.label}
                    </span>
                    <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-border bg-muted/50">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span>
                  Press{" "}
                  <kbd className="px-2 py-1 bg-muted rounded text-foreground">
                    ESC
                  </kbd>{" "}
                  to close
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="/help"
                  className="hover:text-foreground transition-colors"
                >
                  Help
                </a>
                <a
                  href="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SearchDialog;
