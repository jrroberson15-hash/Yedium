import React from 'react';
import { Shield } from 'lucide-react';

export const Footer = ({ onTabChange, onOpenCloakModal }) => {
  return (
    <footer className="mt-20 border-t border-neutral-900 bg-neutral-950/60 text-xs text-neutral-500 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-neutral-300">Yedium</span>
          <span>·</span>
          <span>Unblocked School Portal</span>
          <span>·</span>
          <span className="font-mono">JS v1.0</span>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => onTabChange('home')}
            className="hover:text-neutral-300 transition-colors cursor-pointer"
          >
            Hub
          </button>
          <button
            onClick={() => onTabChange('games')}
            className="hover:text-neutral-300 transition-colors cursor-pointer"
          >
            Websites
          </button>
          <button
            onClick={() => onTabChange('settings')}
            className="hover:text-neutral-300 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Shield className="w-3 h-3 text-indigo-400" />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
