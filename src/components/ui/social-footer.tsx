import React from 'react';
import { Twitter } from 'lucide-react';

// Custom Telegram Icon Component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export const SocialFooter = () => {
  return (
    <footer className="w-full bg-red-600 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="flex justify-center items-center space-x-8">
          {/* Telegram Icon */}
          <a
            href="https://t.me/rett_on_avax_portal"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            aria-label="Follow us on Telegram"
          >
            <TelegramIcon className="w-8 h-8 text-white group-hover:text-white/90 transition-colors duration-300" />
          </a>

          {/* Twitter Icon */}
          <a
            href="https://x.com/RETTavax"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            aria-label="Follow us on Twitter"
          >
            <Twitter className="w-8 h-8 text-white group-hover:text-white/90 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};