/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CLOAK_PRESETS, applyCloak, closeCurrentTab } from './utils/cloak';
import { playChime } from './utils/audio';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HubHome } from './components/HubHome';
import { WebsitesView } from './components/WebsitesView';
import { InterdimentionalLiteGame } from './components/InterdimentionalLiteGame';
import { SettingsView } from './components/SettingsView';
import { CloakModal } from './components/CloakModal';
import { PanicOverlay } from './components/PanicOverlay';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedGame, setSelectedGame] = useState('kiwi');
  const [isCloakModalOpen, setIsCloakModalOpen] = useState(false);
  const [isPanicActive, setIsPanicActive] = useState(false);

  // Tab Cloaking State - Default to Google Classroom
  const [cloakConfig, setCloakConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('yedium_cloak_config');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {
      preset: 'classroom',
      title: CLOAK_PRESETS.classroom.title,
      iconUrl: CLOAK_PRESETS.classroom.iconUrl,
    };
  });

  // Panic Switch Configuration State (Close tab default)
  const [panicConfig, setPanicConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('yedium_panic_config');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {
      hotkey: '`',
      screenMode: 'close',
      redirectUrl: 'https://classroom.google.com',
      enabled: true,
    };
  });

  // Apply tab cloak on initial mount and when cloakConfig changes
  useEffect(() => {
    applyCloak(cloakConfig);
  }, [cloakConfig]);

  // Global Keyboard listener for Panic hotkey
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if user is typing in an input or textarea
      const target = e.target;
      const isInput = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA');

      // Check if the pressed key matches panic hotkey
      const isPanicKey =
        e.key === panicConfig.hotkey ||
        (panicConfig.hotkey === '`' && (e.key === '`' || e.key === '~'));

      if (isPanicKey) {
        if (!isInput || e.key === 'Escape') {
          e.preventDefault();
          triggerPanic();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [panicConfig]);

  // Panic handler: plays chime and closes the tab immediately
  const triggerPanic = () => {
    playChime('panic');
    closeCurrentTab();
  };

  const handleSaveCloak = (newConfig) => {
    setCloakConfig(newConfig);
    localStorage.setItem('yedium_cloak_config', JSON.stringify(newConfig));
  };

  const handleSavePanic = (newConfig) => {
    setPanicConfig(newConfig);
    localStorage.setItem('yedium_panic_config', JSON.stringify(newConfig));
  };

  return (
    <>
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        {/* Top Header strictly complying with the 3-zone Top Bar Contract */}
        <Header
          activeTab={activeTab}
          onTabChange={(tab) => {
            playChime('click');
            setActiveTab(tab);
          }}
          onOpenCloakModal={() => setIsCloakModalOpen(true)}
          onTriggerPanic={triggerPanic}
          panicConfig={panicConfig}
        />

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
          {activeTab === 'home' && (
            <HubHome
              onTabChange={(tab, gameId) => {
                playChime('click');
                if (tab === 'game' || tab === 'interdimentional-lite' || tab === 'kiwi') {
                  setSelectedGame(gameId || (tab === 'interdimentional-lite' ? 'interdimentional' : 'kiwi'));
                  setActiveTab('game');
                } else {
                  setActiveTab(tab);
                }
              }}
              onOpenCloakModal={() => setIsCloakModalOpen(true)}
              onTriggerPanic={triggerPanic}
              cloakConfig={cloakConfig}
              panicConfig={panicConfig}
            />
          )}

          {activeTab === 'games' && (
            <WebsitesView
              onLaunchLive={(gameId) => {
                playChime('click');
                setSelectedGame(gameId || 'kiwi');
                setActiveTab('game');
              }}
            />
          )}

          {(activeTab === 'game' || activeTab === 'interdimentional-lite' || activeTab === 'kiwi') && (
            <InterdimentionalLiteGame
              selectedGameId={selectedGame}
              onBack={() => setActiveTab('games')}
              onOpenCloakModal={() => setIsCloakModalOpen(true)}
            />
          )}

          {activeTab === 'settings' && (
            <SettingsView
              cloakConfig={cloakConfig}
              onSaveCloak={handleSaveCloak}
              panicConfig={panicConfig}
              onSavePanic={handleSavePanic}
              onTriggerPanic={triggerPanic}
            />
          )}
        </main>

        {/* Footer */}
        <Footer
          onTabChange={(tab) => {
            playChime('click');
            setActiveTab(tab);
          }}
          onOpenCloakModal={() => setIsCloakModalOpen(true)}
        />
      </div>

      {/* Cloak Settings Modal */}
      <CloakModal
        isOpen={isCloakModalOpen}
        onClose={() => setIsCloakModalOpen(false)}
        cloakConfig={cloakConfig}
        onSaveCloak={handleSaveCloak}
        panicConfig={panicConfig}
        onSavePanic={handleSavePanic}
        onTriggerPanic={triggerPanic}
      />

      {/* Fallback Overlay if tab close is blocked by browser */}
      {isPanicActive && (
        <PanicOverlay
          config={panicConfig}
          onExit={() => setIsPanicActive(false)}
        />
      )}
    </>
  );
}
