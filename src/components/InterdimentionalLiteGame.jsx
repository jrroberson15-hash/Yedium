import React, { useState } from 'react';
import {
  ArrowLeft,
  Maximize2,
  Minimize2,
  RotateCcw,
  ExternalLink,
  Shield,
  Zap,
  Gamepad2,
  Sparkles,
} from 'lucide-react';
import { openAboutBlank } from '../utils/cloak';

export const LIVE_GAMES = {
  kiwi: {
    id: 'kiwi',
    name: 'Kiwi',
    domain: 'kiwi',
    url: 'https://math.gr.com/kiwi.html?kiwi-frame=1',
    badge: 'Unblocked Library',
    badgeSub: 'Instant Play',
    description: 'Kiwi unblocked gaming interface with 100+ titles and clean controls.',
  },
  interdimentional: {
    id: 'interdimentional',
    name: 'Interdimensional Lite',
    domain: 'pinkdev',
    url: 'https://pinkdev.d13qic2f6zga3.amplifyapp.com/games/',
    badge: 'Arcade Hub',
    badgeSub: 'Unblocked',
    description: 'Lightweight arcade gaming portal with instant loading and sandbox isolation.',
  },
};

export const InterdimentionalLiteGame = ({
  onBack,
  onOpenCloakModal,
  selectedGameId = 'kiwi',
}) => {
  const [activeGameKey, setActiveGameKey] = useState(
    LIVE_GAMES[selectedGameId] ? selectedGameId : 'kiwi'
  );
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const activeGame = LIVE_GAMES[activeGameKey] || LIVE_GAMES.kiwi;

  const toggleFullscreen = () => {
    const el = document.getElementById('activeGameFrame');
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleOpenDirect = () => {
    window.open(activeGame.url, '_blank', 'noopener,noreferrer');
  };

  const handleLaunchAboutBlank = () => {
    openAboutBlank(activeGame.url);
  };

  return (
    <div className="w-full flex flex-col items-center rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl">
      {/* Top Game Bar */}
      <div className="w-full bg-neutral-900 border-b border-neutral-800 px-3 sm:px-4 py-2.5 flex flex-wrap items-center justify-between z-10 gap-2.5">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-1.5 hover:bg-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              title="Return to Websites Directory"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Websites</span>
              <span className="sm:hidden">Back</span>
            </button>
          )}

          {/* Game Switcher Tabs */}
          <div className="flex items-center bg-neutral-950 p-1 rounded-xl border border-neutral-800">
            <button
              onClick={() => {
                setActiveGameKey('kiwi');
                setReloadKey((k) => k + 1);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeGameKey === 'kiwi'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Kiwi</span>
            </button>

            <button
              onClick={() => {
                setActiveGameKey('interdimentional');
                setReloadKey((k) => k + 1);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeGameKey === 'interdimentional'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5 text-indigo-300" />
              <span>Interdimensional Lite</span>
            </button>
          </div>
        </div>

        {/* Quick Toolbar */}
        <div className="flex items-center gap-1.5">
          {onOpenCloakModal && (
            <button
              onClick={onOpenCloakModal}
              className="p-1.5 hover:bg-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Tab Cloak Settings"
            >
              <Shield className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={handleLaunchAboutBlank}
            className="p-1.5 hover:bg-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-colors cursor-pointer"
            title="Launch in stealth about:blank window"
          >
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
              about:blank
            </span>
          </button>

          <button
            onClick={handleOpenDirect}
            className="p-1.5 hover:bg-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-colors cursor-pointer"
            title="Open Game in New Tab"
          >
            <ExternalLink className="w-4 h-4" />
          </button>

          <button
            onClick={() => setReloadKey((k) => k + 1)}
            className="p-1.5 hover:bg-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-colors cursor-pointer"
            title="Reload Game Screen"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 hover:bg-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-colors cursor-pointer"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Embed Frame Container */}
      <div className="w-full h-[760px] bg-neutral-950 relative">
        <iframe
          key={`${activeGame.id}-${reloadKey}`}
          id="activeGameFrame"
          src={activeGame.url}
          title={activeGame.name}
          sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms allow-popups allow-modals allow-downloads"
          allow="fullscreen; autoplay; clipboard-read; clipboard-write; gamepad"
          allowFullScreen
          className="w-full h-full border-0 block bg-black"
        />
      </div>

      {/* Discreet bottom advice */}
      <div className="w-full bg-neutral-900/60 border-t border-neutral-800/80 px-4 py-2 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{activeGame.name}</span>
          <span className="text-neutral-600">·</span>
          <span className="text-emerald-400">{activeGame.badge}</span>
        </span>
        <span className="hidden sm:inline">Press Panic Key (~) if teacher approaches</span>
      </div>
    </div>
  );
};
