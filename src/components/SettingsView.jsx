import React, { useState } from 'react';
import {
  Shield,
  Check,
  EyeOff,
  ExternalLink,
  Keyboard,
  Sparkles,
  Sliders,
  Laptop,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { CLOAK_PRESETS, applyCloak, openAboutBlank } from '../utils/cloak';

export const SettingsView = ({
  cloakConfig,
  onSaveCloak,
  panicConfig,
  onSavePanic,
  onTriggerPanic,
}) => {
  const [selectedPreset, setSelectedPreset] = useState(cloakConfig?.preset || 'classroom');
  const [panicKey, setPanicKey] = useState(panicConfig?.hotkey || '`');
  const [aboutBlankNotice, setAboutBlankNotice] = useState(null);
  const [savedToast, setSavedToast] = useState(false);

  // The 5 primary cloak options explicitly requested by user
  const PRIMARY_CLOAK_KEYS = ['classroom', 'google', 'docs', 'slides', 'none'];

  const handleSelectCloak = (key) => {
    setSelectedPreset(key);
    const preset = CLOAK_PRESETS[key];
    const newConfig = {
      preset: key,
      title: preset.title,
      iconUrl: preset.iconUrl,
    };
    onSaveCloak(newConfig);
    applyCloak(newConfig);
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  const handleSavePanicKey = (newKey) => {
    setPanicKey(newKey);
    const updated = {
      ...panicConfig,
      hotkey: newKey,
    };
    onSavePanic(updated);
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  const handleLaunchAboutBlank = () => {
    const success = openAboutBlank();
    if (success) {
      setAboutBlankNotice('Launched about:blank stealth window successfully!');
      setTimeout(() => setAboutBlankNotice(null), 3500);
    } else {
      setAboutBlankNotice('Pop-up was blocked. Please enable popups for this site.');
      setTimeout(() => setAboutBlankNotice(null), 4000);
    }
  };

  const currentPresetInfo = CLOAK_PRESETS[selectedPreset] || CLOAK_PRESETS.classroom;

  return (
    <div className="space-y-10 max-w-5xl mx-auto py-2">
      {/* Title & Overview Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Sliders className="w-5 h-5" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Cloak &amp; Stealth Settings
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1.5">
            Disguise your browser tab, choose stealth camouflage, and configure emergency panic triggers.
          </p>
        </div>

        {savedToast && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold animate-in fade-in duration-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Tab Cloak Updated!</span>
          </div>
        )}
      </div>

      {/* Live Tab Preview Simulation */}
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300">
            <Laptop className="w-4 h-4 text-indigo-400" />
            <span>Simulated Chrome Tab Preview (Top of Browser)</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Live Tab Active
          </span>
        </div>

        {/* Browser Mock Tab Bar */}
        <div className="bg-neutral-950 rounded-xl p-2.5 border border-neutral-800 flex items-center gap-2 overflow-x-auto shadow-inner">
          <div className="flex items-center gap-2.5 bg-neutral-900 border border-neutral-700/80 px-3.5 py-1.5 rounded-lg max-w-sm sm:max-w-md shadow-sm">
            <div className="w-4 h-4 shrink-0 flex items-center justify-center">
              <img
                src={currentPresetInfo.iconUrl}
                alt={currentPresetInfo.label}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xs font-medium text-neutral-200 truncate select-none">
              {currentPresetInfo.title}
            </span>
            <span className="text-neutral-500 hover:text-neutral-300 text-xs ml-auto cursor-default">
              ×
            </span>
          </div>
          <span className="text-neutral-600 text-sm select-none">+</span>
        </div>
        <p className="text-[11px] text-neutral-400">
          When teachers or friends look at your browser, this is the exact title and icon they see in your tab bar.
        </p>
      </div>

      {/* Primary Section: Choose Your Cloak (Google Classroom, Google, Docs, Slides, No Cloak) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Choose Browser Tab Cloak</span>
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Select any disguise below to immediately cloak the current browser tab.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {PRIMARY_CLOAK_KEYS.map((key) => {
            const preset = CLOAK_PRESETS[key];
            if (!preset) return null;
            const isSelected = selectedPreset === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => handleSelectCloak(key)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between gap-3 cursor-pointer group relative overflow-hidden ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-500/10 shadow-lg shadow-indigo-500/5 ring-1 ring-indigo-500/50'
                    : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-800/40'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center p-1.5 bg-neutral-950 border border-neutral-800 group-hover:scale-105 transition-transform shrink-0">
                      <img
                        src={preset.iconUrl}
                        alt={preset.label}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {preset.label}
                        </p>
                        {key === 'classroom' && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                            Default
                          </span>
                        )}
                        {key === 'none' && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
                            Original
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-400 font-mono mt-0.5 truncate max-w-[200px]">
                        Title: &ldquo;{preset.title}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'border border-neutral-700 text-transparent group-hover:border-neutral-500'
                    }`}
                  >
                    <Check className="w-3 h-3" />
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px]">
                  <span className={isSelected ? 'text-indigo-400 font-semibold' : 'text-neutral-500'}>
                    {isSelected ? '● Active Disguise' : 'Click to apply'}
                  </span>
                  <span className="text-neutral-400 font-mono text-[10px]">
                    {key === 'none' ? 'No Disguise' : 'Stealth On'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Secondary Settings Bento: Panic Switch & about:blank */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Panic Switch Control */}
        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <Keyboard className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Emergency Panic Hotkey</h3>
                <p className="text-xs text-neutral-400">Instantly closes tab if teacher approaches</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div>
              <label className="text-xs text-neutral-300 block mb-1.5 font-medium">
                Select Panic Hotkey
              </label>
              <select
                value={panicKey}
                onChange={(e) => handleSavePanicKey(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
              >
                <option value="`">Backtick / Tilde (`) [Recommended]</option>
                <option value="Escape">Escape (Esc)</option>
                <option value="F2">F2 Key</option>
                <option value="q">Key: Q</option>
                <option value="p">Key: P</option>
              </select>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-neutral-400">Active Action:</span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Close Tab Immediately
              </span>
            </div>

            <button
              type="button"
              onClick={onTriggerPanic}
              className="w-full mt-2 px-4 py-2.5 text-xs font-bold bg-rose-950/60 hover:bg-rose-900/80 border border-rose-800/80 text-rose-200 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>Test Panic Close Tab Now</span>
            </button>
          </div>
        </div>

        {/* about:blank Stealth Launcher */}
        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <EyeOff className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">about:blank History Blocker</h3>
              <p className="text-xs text-neutral-400">Evades school extension URL monitoring</p>
            </div>
          </div>

          <p className="text-xs text-neutral-300 leading-relaxed pt-1">
            Launches this hub in a blank window. The browser URL bar stays completely blank, meaning school filtering extensions and history sniffers cannot log the website domain.
          </p>

          <button
            type="button"
            onClick={handleLaunchAboutBlank}
            className="w-full px-4 py-2.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/20"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Launch Stealth Window</span>
          </button>

          {aboutBlankNotice && (
            <p className="text-xs text-emerald-400 text-center animate-in fade-in duration-150">
              {aboutBlankNotice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
