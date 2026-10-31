import React, { useState, useMemo, useRef } from 'react';
import {
  Globe,
  Gamepad2,
  Play,
  EyeOff,
  Zap,
  Shield,
  Search,
  X,
} from 'lucide-react';
import { openAboutBlank } from '../utils/cloak';

const AVAILABLE_WEBSITES = [
  {
    id: 'kiwi',
    title: 'Kiwi',
    category: 'Unblocked Game Portals',
    domain: 'kiwi',
    directUrl: 'https://math.gr.com/kiwi.html?kiwi-frame=1',
    badge: 'Unblocked Portal',
    badgeSub: '100+ Games',
    description:
      'Fast unblocked gaming portal with 100+ titles, instant loading, clean controls, and full gamepad support.',
    tags: ['Unblocked', '100+ Games', 'Cloak Safe', 'Instant Play', 'Full Catalog', 'Gamepad Support', 'Stealth Safe'],
    playButtonText: 'Play Kiwi',
    borderClass: 'border-emerald-500/40',
    gradientClass: 'from-neutral-900 via-emerald-950/20 to-neutral-900',
    badgeBgClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    btnBgClass: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30',
    accentColor: 'text-emerald-400',
    badgeIcon: Zap,
    iconColor: 'text-amber-400',
  },
  {
    id: 'interdimentional',
    title: 'Interdimensional Lite',
    category: 'Arcade Portals',
    domain: 'pinkdev',
    directUrl: 'https://pinkdev.d13qic2f6zga3.amplifyapp.com/games/',
    badge: 'Live Arcade Hub',
    badgeSub: 'Arcade Collection',
    description:
      'Curated lightweight unblocked arcade gaming portal with instant loading, sandbox isolation, and fullscreen mode for quick play sessions.',
    tags: ['Arcade Collection', 'Low Latency', 'Sandbox Isolated', 'Cloak Safe', '100+ Arcade Games'],
    playButtonText: 'Play Interdimensional Lite',
    borderClass: 'border-indigo-500/30',
    gradientClass: 'from-neutral-900 via-indigo-950/20 to-neutral-900',
    badgeBgClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    btnBgClass: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/30',
    accentColor: 'text-indigo-400',
    badgeIcon: Gamepad2,
    iconColor: 'text-indigo-400',
  },
];

export const WebsitesView = ({ onLaunchLive }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  // Filter available websites strictly by name (title)
  const filteredWebsites = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return AVAILABLE_WEBSITES;

    return AVAILABLE_WEBSITES.filter((site) =>
      site.title.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <span className="text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
            <Globe className="w-3.5 h-3.5" /> Verified Portals
          </span>
          <span aria-hidden="true">·</span>
          <span>Live &amp; Unblocked</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Websites &amp; Unblocked Portals
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-3xl leading-relaxed">
          Access our active gaming portals and arcade catalogs. All portals are tested for high performance, zero-install instant play, and cloaked browser evasion.
        </p>
      </div>

      {/* Name-based Search Input Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Search Field */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search websites by name (e.g. Kiwi)..."
              className="w-full pl-10 pr-9 py-2.5 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  searchInputRef.current?.focus();
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-white rounded-md transition-colors cursor-pointer"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Counter & Reset */}
          <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-300">
              {filteredWebsites.length} of {AVAILABLE_WEBSITES.length} Available
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-2 transition-colors cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Available Websites Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available Websites ({filteredWebsites.length})</span>
          </h2>
          {searchQuery && (
            <span className="text-xs text-neutral-400 font-mono">
              Name matching "{searchQuery}"
            </span>
          )}
        </div>

        {/* Websites Grid */}
        {filteredWebsites.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredWebsites.map((site) => {
              const BadgeIcon = site.badgeIcon;
              return (
                <div
                  key={site.id}
                  className={`relative rounded-2xl border ${site.borderClass} bg-gradient-to-br ${site.gradientClass} p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-xl transition-all hover:border-opacity-80`}
                >
                  <div className="space-y-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded border flex items-center gap-1 ${site.badgeBgClass}`}>
                          <BadgeIcon className={`w-3 h-3 ${site.iconColor}`} /> {site.badge}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                          {site.badgeSub}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-neutral-400">{site.domain}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">
                        {site.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                        {site.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {site.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onLaunchLive(site.id)}
                      className={`flex-1 px-5 py-3.5 ${site.btnBgClass} text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer`}
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>{site.playButtonText}</span>
                    </button>

                    <button
                      onClick={() => openAboutBlank(site.directUrl)}
                      className="px-4 py-3.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
                      title={`Launch ${site.title} in stealth about:blank window`}
                    >
                      <EyeOff className="w-4 h-4 text-emerald-400" />
                      <span>about:blank</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className="p-10 rounded-2xl bg-neutral-900/40 border border-neutral-800 text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 flex items-center justify-center mx-auto text-neutral-400">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">No websites match your search</h3>
              <p className="text-xs text-neutral-400 max-w-md mx-auto">
                No active websites found matching the name <span className="text-indigo-400 font-mono">"{searchQuery}"</span>.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                searchInputRef.current?.focus();
              }}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear Search</span>
            </button>
          </div>
        )}
      </div>

      {/* Stealth & Performance Tips for Available Websites */}
      <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-white font-semibold text-xs">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Direct Frame Bypass</span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            All listed websites load the raw game canvas directly without nested refresh barriers or splash ad delays.
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-white font-semibold text-xs">
            <EyeOff className="w-4 h-4 text-emerald-400" />
            <span>about:blank Cloaking</span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Click the <strong className="text-neutral-200">about:blank</strong> button on any portal to open an untracked window that school monitoring extensions cannot log.
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-white font-semibold text-xs">
            <Shield className="w-4 h-4 text-indigo-400" />
            <span>Emergency Hotkey Armed</span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Panic close remains active across all websites. Press your configured panic hotkey to close the tab instantly if someone walks by.
          </p>
        </div>
      </div>
    </div>
  );
};
