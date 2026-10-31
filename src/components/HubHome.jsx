import React from 'react';
import {
  Shield,
  ShieldAlert,
  Gamepad2,
  ArrowRight,
  EyeOff,
  CheckCircle2,
  Play,
  Flame,
} from 'lucide-react';
import { openAboutBlank } from '../utils/cloak';

export const HubHome = ({
  onTabChange,
  onOpenCloakModal,
  onTriggerPanic,
  cloakConfig,
  panicConfig,
}) => {
  return (
    <div className="space-y-12">
      {/* Featured Game Spotlight: Kiwi */}
      <div className="relative rounded-3xl overflow-hidden border border-emerald-500/40 bg-gradient-to-r from-neutral-900 via-emerald-950/20 to-neutral-900 shadow-2xl">
        <div className="p-6 sm:p-10 md:p-12 space-y-5 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 font-mono">
            <span className="text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-400" /> Featured Game Portal
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-300">100+ Games</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Kiwi
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            Play Kiwi’s unblocked catalog with 100+ titles, full gamepad support, low latency, and stealth tab cloaking.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onTabChange('game', 'kiwi')}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Play Kiwi</span>
            </button>

            <button
              onClick={() => onTabChange('game', 'interdimentional')}
              className="px-5 py-3.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4 text-indigo-400" />
              <span>Interdimensional Lite</span>
            </button>

            <button
              onClick={() => openAboutBlank('https://math.gr.com/kiwi.html?kiwi-frame=1')}
              className="px-4 py-3.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 rounded-xl text-xs font-medium flex items-center gap-2 transition-all cursor-pointer"
              title="Launch Kiwi in stealth about:blank window"
            >
              <EyeOff className="w-4 h-4 text-emerald-400" />
              <span>about:blank</span>
            </button>
          </div>
        </div>
      </div>

      {/* Primary Feature Launchpad Bento Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight">Quick Launch Modules</h2>
          <span className="text-xs text-neutral-400">Direct student shortcuts</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Module 1: Kiwi Play Card */}
          <div
            onClick={() => onTabChange('game', 'kiwi')}
            className="p-6 rounded-2xl bg-neutral-900/50 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-neutral-900/80 transition-all cursor-pointer flex flex-col justify-between gap-4 group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Kiwi
                  </h3>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                    Live
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Kiwi unblocked game collection with 100+ titles and fast loading.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span className="text-emerald-400 font-semibold">Unblocked</span>
              <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-semibold">
                Play Now <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Module 2: Stealth Tab Cloaker */}
          <div
            onClick={() => onTabChange('settings')}
            className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-indigo-500/50 hover:bg-neutral-900/80 transition-all cursor-pointer flex flex-col justify-between gap-4 group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Tab Cloak Engine
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Disguise your browser tab as Google Classroom, Google, Google Docs, Google Slides, or No Cloak in 1 click.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>Active: {cloakConfig?.preset ? cloakConfig.preset.toUpperCase() : 'DEFAULT'}</span>
              <span className="text-indigo-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                Customize <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Module 3: Emergency Panic Switch */}
          <div
            onClick={onTriggerPanic}
            className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-rose-500/50 hover:bg-neutral-900/80 transition-all cursor-pointer flex flex-col justify-between gap-4 group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                  Emergency Panic Switch
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Press <strong>{panicConfig?.hotkey === '`' ? 'Backtick (~)' : panicConfig?.hotkey}</strong> to instantly close the current tab.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>Action: CLOSE TAB</span>
              <span className="text-rose-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                Close Tab Now <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Module 4: about:blank Stealth Launcher */}
          <div
            onClick={() => openAboutBlank()}
            className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-900/80 transition-all cursor-pointer flex flex-col justify-between gap-4 group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <EyeOff className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    about:blank Cloak
                  </h3>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                    Stealth
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Open an untraceable about:blank popup tab to bypass school extension monitoring and history tracking.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span className="text-emerald-400 font-semibold">Extension Proof</span>
              <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-semibold">
                Launch Window <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stealth Guidelines & Student Advice */}
      <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 space-y-4">
        <h3 className="text-sm font-semibold text-neutral-200 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Yedium School Network Evasion Guide</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-400 leading-relaxed">
          <div className="space-y-1">
            <h4 className="font-semibold text-white">1. Use Tab Cloaking</h4>
            <p>
              Setting your tab disguise to Google Classroom or Canvas ensures teachers glance at your screen and see legitimate course titles in the browser tab bar.
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-white">2. Master the Panic Hotkey</h4>
            <p>
              Keep your finger near the backtick key (<code className="text-indigo-400 font-mono">`</code>) or Esc. Triggering it immediately closes the current tab.
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-white">3. Play in about:blank</h4>
            <p>
              Playing games inside an about:blank iframe stops Chrome extension URL interceptors from recording domain visits in your browsing history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
