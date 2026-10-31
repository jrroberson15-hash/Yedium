import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, FileText, ArrowLeft } from 'lucide-react';

export const PanicOverlay = ({ config, onExit }) => {
  const [activeScreen, setActiveScreen] = useState(
    config?.screenMode === 'redirect' ? 'classroom' : (config?.screenMode || 'classroom')
  );
  const [docContent, setDocContent] = useState(
    `Investigation of Catalase Kinetics Under Varying Temperature and Substrate Concentrations

Abstract:
In this investigative inquiry, the catalytic velocity of bovine liver catalase was quantified across five distinct thermal regimes (0°C, 22°C, 37°C, 55°C, and 80°C). Substrate degradation rates were monitored utilizing a gasometric water-displacement apparatus measuring the volumetric displacement of oxygen gas (O₂) generated per 30-second interval.

Methodology:
Standardized 3% hydrogen peroxide (H₂O₂) aliquots (15.0 mL) were buffered to pH 7.0 utilizing 0.1 M phosphate buffer. Reaction vessels were incubated within thermostated water baths for 10 minutes prior to enzymatic introduction. Triplicate trials were executed for each thermal bracket to maintain experimental reproducibility and minimize systematic variance.

Results & Observations:
Peak enzymatic reaction velocity was observed at 37.4°C (Vmax = 14.2 mL O₂ / min). Severe thermal denaturation with complete cessation of effervescence occurred above 55°C, corroborating the tertiary structural collapse of globular heme-protein assemblies.`
  );

  return (
    <div className="fixed inset-0 z-[999999] bg-white text-slate-800 font-sans select-text overflow-auto">
      {/* Discreet Exit & Disguise Screen Switcher: Clickable subtle bar in bottom-right */}
      <div className="fixed bottom-3 right-3 z-50 opacity-25 hover:opacity-100 transition-opacity flex flex-wrap items-center gap-2 bg-slate-900 text-white px-3.5 py-2 rounded-xl text-xs shadow-2xl border border-slate-800">
        <div className="flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] text-slate-300">
            Panic Active (Press <strong>{config?.hotkey}</strong>)
          </span>
        </div>

        <span className="text-slate-600">|</span>

        {/* Quick screen switcher */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveScreen('classroom')}
            className={`px-2 py-0.5 rounded text-[11px] transition-colors cursor-pointer ${
              activeScreen === 'classroom' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Classroom
          </button>
          <button
            onClick={() => setActiveScreen('docs')}
            className={`px-2 py-0.5 rounded text-[11px] transition-colors cursor-pointer ${
              activeScreen === 'docs' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Docs
          </button>
          <button
            onClick={() => setActiveScreen('desmos')}
            className={`px-2 py-0.5 rounded text-[11px] transition-colors cursor-pointer ${
              activeScreen === 'desmos' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Desmos
          </button>
        </div>

        <span className="text-slate-600">|</span>

        <button
          onClick={onExit}
          className="text-xs text-indigo-400 hover:text-indigo-300 underline font-semibold cursor-pointer"
        >
          Exit to Yedium
        </button>
      </div>

      {activeScreen === 'classroom' && (
        <div className="min-h-screen bg-slate-50 flex flex-col">
          {/* Fake Google Classroom Header */}
          <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={onExit} title="Exit disguise" className="p-1 hover:bg-slate-100 rounded text-slate-600 cursor-pointer">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-emerald-700 rounded flex items-center justify-center text-white text-xs font-bold">
                  GC
                </div>
                <div>
                  <h1 className="text-base font-semibold text-slate-800 leading-tight">AP English Literature &amp; Composition</h1>
                  <p className="text-xs text-slate-500">Period 3 · Room 214 · Ms. Clara Henderson</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-600">
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Turned In
              </span>
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                S
              </div>
            </div>
          </header>

          {/* Classroom Main Assignment Body */}
          <main className="max-w-4xl mx-auto w-full p-6 md:p-8 space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-1">Essay #3: Rhetorical Devices in The Great Gatsby</h2>
                  <p className="text-xs text-slate-500 mb-4">Ms. Henderson · Due Yesterday, 11:59 PM · 100 points</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-emerald-600">Graded: 96 / 100</span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 text-sm text-slate-700 space-y-3">
                <p>
                  <strong>Instructions:</strong> Analyze how F. Scott Fitzgerald uses color symbolism (green, white, gold, gray) to critique the disillusionment of the American Dream in the 1920s. Support your claims with at least three direct citations from Chapters 1–5.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-600 shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">Rubric_AP_Lit_Essay_Standard_2026.pdf</p>
                    <p className="text-xs text-slate-500">PDF Document · 184 KB</p>
                  </div>
                </div>
              </div>

              {/* Submitted Work Strip */}
              <div className="mt-6 border-t border-slate-200 pt-4">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Your Work</h3>
                <div className="flex items-center gap-3 p-3 bg-blue-50/50 border border-blue-200 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <div className="flex-1 text-xs">
                    <p className="font-semibold text-slate-800">Gatsby_Symbolism_Essay_Final_Draft.gdoc</p>
                    <p className="text-slate-500">Google Docs · Submitted on time</p>
                  </div>
                  <button
                    onClick={() => setActiveScreen('docs')}
                    className="px-3 py-1 bg-white border border-slate-300 hover:bg-slate-50 text-xs font-medium rounded text-slate-700 cursor-pointer"
                  >
                    Open Document
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}

      {activeScreen === 'docs' && (
        <div className="min-h-screen bg-slate-100 flex flex-col">
          {/* Google Docs Toolbar */}
          <div className="bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              <div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    defaultValue="AP Biology Investigation: Catalase Enzyme Kinetics"
                    className="font-medium text-slate-800 text-base focus:outline-none focus:ring-1 focus:ring-blue-500 px-1 rounded"
                  />
                  <span className="text-xs text-slate-400">Saved to Drive</span>
                </div>
                <div className="flex gap-3 text-xs text-slate-600 mt-0.5">
                  <span className="cursor-pointer hover:bg-slate-100 px-1 rounded">File</span>
                  <span className="cursor-pointer hover:bg-slate-100 px-1 rounded">Edit</span>
                  <span className="cursor-pointer hover:bg-slate-100 px-1 rounded">View</span>
                  <span className="cursor-pointer hover:bg-slate-100 px-1 rounded">Insert</span>
                  <span className="cursor-pointer hover:bg-slate-100 px-1 rounded">Format</span>
                  <span className="cursor-pointer hover:bg-slate-100 px-1 rounded">Tools</span>
                  <span className="cursor-pointer hover:bg-slate-100 px-1 rounded">Help</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveScreen('classroom')}
                className="text-xs text-slate-600 hover:bg-slate-100 px-2.5 py-1 rounded border border-slate-200 cursor-pointer"
              >
                Back to Classroom
              </button>
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                S
              </div>
            </div>
          </div>

          {/* Google Docs Paper Document View */}
          <div className="flex-1 py-8 flex justify-center overflow-auto">
            <div className="w-[820px] min-h-[1050px] bg-white shadow-md border border-slate-200 p-16 font-serif leading-relaxed text-slate-800">
              <h1 className="text-2xl font-bold text-center mb-6 font-sans">
                Laboratory Report: Investigating the Temperature Coefficients of Bovine Catalase
              </h1>
              <div className="text-center text-xs text-slate-500 mb-8 font-sans">
                Alex Turner · AP Biology · Lab Group 4 · Date: October 2026
              </div>

              <textarea
                value={docContent}
                onChange={(e) => setDocContent(e.target.value)}
                className="w-full h-[650px] resize-none focus:outline-none text-slate-800 text-sm leading-7 font-serif bg-transparent"
              />
            </div>
          </div>
        </div>
      )}

      {activeScreen === 'desmos' && (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col font-sans">
          {/* Desmos Top Bar */}
          <div className="bg-slate-800 border-b border-slate-700 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-teal-500 flex items-center justify-center font-bold text-xs text-slate-950">
                D
              </div>
              <span className="font-semibold text-sm tracking-wide">Desmos | Graphing Calculator</span>
              <span className="text-xs text-slate-400">· Quadratic Polynomials Lab</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveScreen('classroom')}
                className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded text-slate-200 cursor-pointer"
              >
                Switch to Classroom
              </button>
            </div>
          </div>

          {/* Split View: Math Expressions + SVG Graph Canvas */}
          <div className="flex-1 flex flex-col md:flex-row">
            {/* Expression List */}
            <div className="w-full md:w-80 bg-slate-850 border-r border-slate-800 p-4 space-y-3 font-mono text-xs">
              <div className="p-3 bg-slate-800 rounded border-l-4 border-emerald-500">
                <span className="text-emerald-400 font-bold">1.</span> f(x) = -0.4x² + 3x + 1
              </div>
              <div className="p-3 bg-slate-800 rounded border-l-4 border-blue-500">
                <span className="text-blue-400 font-bold">2.</span> g(x) = 2sin(1.5x)
              </div>
              <div className="p-3 bg-slate-800 rounded border-l-4 border-amber-500">
                <span className="text-amber-400 font-bold">3.</span> y = 0.5x - 2
              </div>
              <div className="p-3 bg-slate-800/50 rounded border border-dashed border-slate-700 text-slate-400 text-center py-2">
                + add expression
              </div>
            </div>

            {/* Simulated Cartesian Graph Canvas */}
            <div className="flex-1 relative bg-slate-950 flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full min-h-[400px]" viewBox="0 0 800 500">
                {/* Grid Lines */}
                {Array.from({ length: 17 }).map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={i * 50}
                    y1={0}
                    x2={i * 50}
                    y2={500}
                    stroke="#1e293b"
                    strokeWidth="1"
                  />
                ))}
                {Array.from({ length: 11 }).map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1={0}
                    y1={i * 50}
                    x2={800}
                    y2={i * 50}
                    stroke="#1e293b"
                    strokeWidth="1"
                  />
                ))}

                {/* Main Axes */}
                <line x1={0} y1={250} x2={800} y2={250} stroke="#475569" strokeWidth="2" />
                <line x1={400} y1={0} x2={400} y2={500} stroke="#475569" strokeWidth="2" />

                {/* Parabola Curve 1 */}
                <path
                  d="M 100 480 Q 400 60 700 480"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                />

                {/* Sine Wave Curve 2 */}
                <path
                  d="M 0 250 Q 100 130 200 250 T 400 250 T 600 250 T 800 250"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                />

                {/* Linear Curve 3 */}
                <line x1={0} y1={450} x2={800} y2={50} stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 4" />

                {/* Coordinate Markers */}
                <circle cx={400} cy={165} r="5" fill="#10b981" />
                <text x={415} y={160} fill="#10b981" fontSize="12" fontFamily="monospace">Vertex (0, 3.8)</text>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
