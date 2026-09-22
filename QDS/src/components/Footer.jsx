import React from "react";
import { Code, Mail, ShieldAlert, Terminal } from "lucide-react";

export default function Footer({ setActiveTab, scrollToSection }) {
  return (
    <footer className="relative bg-[#030506] border-t border-cyan-400/10 text-slate-500 font-mono overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[linear-gradient(to_right,#00e5ff_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-[10px] font-bold">
                Q
              </div>

              <div>
                <div className="text-sm font-bold tracking-[0.12em] text-white">
                  QDS
                  <span className="text-cyan-400">.</span>
                  ENGINE
                </div>

                <div className="text-[7px] uppercase tracking-[0.25em] text-slate-700 mt-1">
                  Quantum Digital Security
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-lg text-[11px] leading-6 text-slate-600">
              A quantum cryptographic security framework designed for
              information-theoretic digital signature verification, threat
              detection, and zero-trust transmission analysis.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

              <span className="text-[8px] uppercase tracking-[0.2em] text-emerald-400">
                Bell-State Validation Active
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />

              <h4 className="text-[9px] uppercase tracking-[0.25em] text-white">
                Navigation
              </h4>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setActiveTab("home");

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="block text-[9px] uppercase tracking-widest text-slate-600 hover:text-cyan-400 transition-colors"
              >
                Platform Overview
              </button>

              <button
                onClick={() => {
                  setActiveTab("docs");

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="block text-[9px] uppercase tracking-widest text-slate-600 hover:text-cyan-400 transition-colors"
              >
                Documentation
              </button>

              <button
                onClick={() => {
                  setActiveTab("simulator");

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="block text-[9px] uppercase tracking-widest text-slate-600 hover:text-cyan-400 transition-colors"
              >
                Test Bed
              </button>

              <button
                onClick={() => {
                  setActiveTab("home");

                  setTimeout(() => {
                    const element = document.getElementById("pipeline");

                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }, 50);
                }}
                className="block text-[9px] uppercase tracking-widest text-slate-600 hover:text-cyan-400 transition-colors"
              >
                Security Architecture
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />

              <h4 className="text-[9px] uppercase tracking-[0.25em] text-white">
                System Status
              </h4>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-[8px] uppercase tracking-widest text-slate-700">
                  Core
                </span>

                <span className="text-[8px] text-emerald-400">ONLINE</span>
              </div>

              <div className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-[8px] uppercase tracking-widest text-slate-700">
                  Telemetry
                </span>

                <span className="text-[8px] text-cyan-400">ACTIVE</span>
              </div>

              <div className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-[8px] uppercase tracking-widest text-slate-700">
                  Threat Level
                </span>

                <span className="text-[8px] text-emerald-400">LOW</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[8px] uppercase tracking-widest text-slate-700">
                  Version
                </span>

                <span className="text-[8px] text-slate-500">V1.0.0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[8px] uppercase tracking-[0.2em] text-slate-700">
              QDS_ENGINE
            </span>

            <span className="w-px h-3 bg-slate-800" />

            <span className="text-[8px] uppercase tracking-[0.2em] text-slate-700">
              SECURE TRANSMISSION FRAMEWORK
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              title="GitHub Repository"
              className="w-8 h-8 border border-white/10 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
            >
              <Code className="w-3.5 h-3.5" />
            </a>

            <a
              href="mailto:contact@qds-secure.io"
              className="flex items-center gap-2 text-[8px] uppercase tracking-widest text-slate-600 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              contact@qds-secure.io
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-3 text-[7px] uppercase tracking-[0.25em] text-slate-800">
          <span>Quantum Digital Signature Threat Detection Engine © 2026</span>

          <span className="text-emerald-400/60">ALL TELEMETRY VERIFIED</span>
        </div>
      </div>
    </footer>
  );
}
