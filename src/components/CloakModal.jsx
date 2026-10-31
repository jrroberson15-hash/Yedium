import React, { useState } from 'react';
import { CLOAK_PRESETS, applyCloak, openAboutBlank } from '../utils/cloak';
import { X, Shield, ExternalLink, Keyboard, Check, EyeOff, Sparkles } from 'lucide-react';

export const CloakModal = ({
  isOpen,
  onClose,
  cloakConfig,
  onSaveCloak,
  panicConfig,
  onSavePanic,
  onTriggerPanic,
}) => {
  if (!isOpen) return null;

  const [selectedPreset, setSelectedPreset] = useState(cloakConfig?.preset || 'classroom');
  const [customTitle, setCustomTitle] = useState(cloakConfig?.title || 'Classes');
  const [customIcon, setCustomIcon] = useState(cloakConfig?.iconUrl || '');

  const [panicKey, setPanicKey] = useState(panicConfig?.hotkey || '`');
  const [panicMode, setPanicMode] = useState(panicConfig?.screenMode || 'classroom');
  const [panicRedirect, setPanicRedirect] = useState(panicConfig?.redirectUrl || 'https://classroom.google.com');
  const [aboutBlankStatus, setAboutBlankStatus] = useState(null);

  const handleApplyPreset = (id) => {
    setSelectedPreset(id);
    const preset = CLOAK_PRESETS[id];
    const newConfig = {
      preset: id,
      title: id === 'custom' ? customTitle : preset.title,
      iconUrl: id === 'custom' ? customIcon : preset.iconUrl,
    };
    onSaveCloak(newConfig);
    applyCloak(newConfig);
  };

  const handleSaveCustom = (e) => {
    e.preventDefault();
    const newConfig = {
      preset: 'custom',
      title: customTitle.trim() || 'Classes',
      iconUrl: customIcon.trim() || CLOAK_PRESETS.classroom.iconUrl,
    };
    setSelectedPreset('custom');
    onSaveCloak(newConfig);
    applyCloak(newConfig);
  };

  const handleSavePanicSettings = (e) => {
    e.preventDefault();
    const updated = {
      hotkey: panicKey,
      screenMode: panicMode,
      redirectUrl: panicRedirect.trim() || 'https://classroom.google.com',
      enabled: true,
    };
    onSavePanic(updated);
  };

  const handleLaunchAboutBlank = () => {
    const success = openAboutBlank();
    if (success) {
      setAboutBlankStatus('Opened about:blank window!');
      setTimeout(() => setAboutBlankStatus(null), 3000);
    } else {
      setAboutBlankStatus('Pop-up was blocked. Please allow popups in your browser.');
      setTimeout(() => setAboutBlankStatus(null), 4000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto text-neutral-100 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Stealth &amp; Cloaking Engine</h2>
              <p className="text-xs text-neutral-400">
                Disguise browser tab, bind panic switches, and evade history logs
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* About:Blank Launcher Strip */}
          <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <EyeOff className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-semibold text-white">about:blank Stealth Window</h3>
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Launches Yedium inside a clean <code className="text-emerald-400 bg-neutral-900 px-1 py-0.5 rounded font-mono">about:blank</code> tab. Leaves no web URL trace in browser history.
              </p>
            </div>
            <button
              onClick={handleLaunchAboutBlank}
              className="px-3.5 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors flex items-center gap-2 shrink-0 shadow-sm cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Launch Stealth Tab
            </button>
          </div>
          {aboutBlankStatus && (
            <p className="text-xs text-emerald-400 px-1 -mt-4">{aboutBlankStatus}</p>
          )}

          {/* Section 1: Tab Presets */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-neutral-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" /> Tab Disguise Presets
              </h3>
              <span className="text-xs text-neutral-400">Click to instantly disguise this tab</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {Object.keys(CLOAK_PRESETS).map((key) => {
                const item = CLOAK_PRESETS[key];
                const isSelected = selectedPreset === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleApplyPreset(key)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 cursor-pointer ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-500/10 shadow-sm'
                        : 'border-neutral-800 bg-neutral-950/40 hover:border-neutral-700 hover:bg-neutral-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center p-1 bg-neutral-900 border border-neutral-700">
                        <img src={item.iconUrl} alt={item.label} className="w-full h-full object-contain" />
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-indigo-400" />}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-200 truncate">{item.label}</p>
                      <p className="text-[11px] text-neutral-400 truncate">{item.title}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: Custom Tab Details */}
          {selectedPreset === 'custom' && (
            <form onSubmit={handleSaveCustom} className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Custom Tab Settings</h4>
              <div className="space-y-2">
                <div>
                  <label className="text-xs text-neutral-300 block mb-1">Custom Tab Title</label>
                  <input
                    type="text"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    placeholder="e.g. Science Lab Notes - Period 4"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-neutral-300 block mb-1">Favicon URL or Data URI</label>
                  <input
                    type="text"
                    value={customIcon}
                    onChange={(e) => setCustomIcon(e.target.value)}
                    placeholder="https://example.com/icon.png"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-3 py-1.5 text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg cursor-pointer"
              >
                Apply Custom Tab
              </button>
            </form>
          )}

          {/* Section 3: Panic Switch Configuration */}
          <form onSubmit={handleSavePanicSettings} className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-rose-400" />
                <h3 className="text-sm font-semibold text-white">Emergency Panic Switch (Close Tab)</h3>
              </div>
              <button
                type="button"
                onClick={onTriggerPanic}
                className="px-3 py-1 text-xs font-medium bg-rose-600/20 border border-rose-500/30 text-rose-300 hover:bg-rose-600/30 rounded-lg transition-colors cursor-pointer"
              >
                Close Tab Now
              </button>
            </div>
            <p className="text-xs text-neutral-400">
              When a teacher or proctor approaches, clicking the Panic button or pressing your panic hotkey immediately closes the current tab (with an instant fallback redirect to Google Classroom).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-neutral-300 block mb-1">Trigger Hotkey</label>
                <select
                  value={panicKey}
                  onChange={(e) => setPanicKey(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="`">Backtick / Tilde (`) [Recommended]</option>
                  <option value="Escape">Escape (Esc)</option>
                  <option value="F2">F2 Key</option>
                  <option value="q">Key: Q</option>
                  <option value="p">Key: P</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-neutral-300 block mb-1">Panic Action</label>
                <div className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-emerald-400 flex items-center justify-between">
                  <span>Close Tab Immediately</span>
                  <span className="text-[10px] text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded">Active</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors cursor-pointer"
            >
              Save Panic Keybind
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 flex justify-end bg-neutral-900/60 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
