import React from 'react';
import { ShieldAlert, Shield, Gamepad2 } from 'lucide-react';

export const Header = ({
  activeTab,
  onTabChange,
  onOpenCloakModal,
  onTriggerPanic,
  panicConfig,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title (Single text element wordmark) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onTabChange('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" fill="none" stroke="currentColor" strokeWidth="2" />
                <polyline points="2 12 12 17 22 12" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group-hover:text-indigo-300 transition-colors">
              Yedium
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation links, single-line */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
          <button
            onClick={() => onTabChange('home')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'home' ? 'text-white font-semibold' : 'hover:text-neutral-200'
            }`}
          >
            Hub
          </button>
          <button
            onClick={() => onTabChange('games')}
            className={`whitespace-nowrap shrink-0 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'games' || activeTab === 'game' || activeTab === 'interdimentional-lite' || activeTab === 'kiwi'
                ? 'text-white font-semibold'
                : 'hover:text-neutral-200'
            }`}
          >
            <span className="bg-black">Websites</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Live
            </span>
          </button>
          <button
            onClick={() => onTabChange('settings')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'settings' ? 'text-white font-semibold' : 'hover:text-neutral-200'
            }`}
          >
            Settings
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2.5 shrink-0">

          <button
            onClick={onOpenCloakModal}
            title="Stealth & Tab Cloaking Settings"
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg border border-neutral-800 transition-colors cursor-pointer"
          >
            <Shield className="w-4 h-4" />
          </button>
          <button
            onClick={onTriggerPanic}
            title={`Panic: Closes current tab immediately (Hotkey: ${panicConfig?.hotkey})`}
            className="px-3.5 py-2 text-xs font-semibold text-rose-200 bg-rose-950/50 hover:bg-rose-900/60 border border-rose-800/60 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>Panic</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-rose-900/80 rounded border border-rose-700/60 font-mono text-rose-200">
              {panicConfig?.hotkey === '`' ? '~' : panicConfig?.hotkey}
            </kbd>
          </button>
        </div>
      </div>

      {/* Mobile Secondary Navigation Row */}
      <div className="md:hidden flex items-center gap-6 px-4 py-2 border-t border-neutral-800/60 overflow-x-auto text-xs font-medium text-neutral-400 no-scrollbar">
        <button
          onClick={() => onTabChange('home')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'home' ? 'text-white font-semibold' : ''}`}
        >
          Hub
        </button>
        <button
          onClick={() => onTabChange('games')}
          className={`whitespace-nowrap shrink-0 flex items-center gap-1 ${
            activeTab === 'games' || activeTab === 'game' || activeTab === 'interdimentional-lite' || activeTab === 'kiwi'
              ? 'text-white font-semibold'
              : ''
          }`}
        >
          <span>Websites</span>
          <span className="text-[9px] px-1 rounded bg-indigo-500/20 text-indigo-300">Live</span>
        </button>
        <button
          onClick={() => onTabChange('settings')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'settings' ? 'text-white font-semibold' : ''}`}
        >
          Settings
        </button>
      </div>
    </header>
  );
};
