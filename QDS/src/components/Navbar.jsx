import React from "react";

export default function Navbar({ activeTab, setActiveTab, scrollToSection }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-[#050708]/95 backdrop-blur-xl border-b border-cyan-400/10 font-mono">
      <div className="h-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 flex items-center justify-between">
        <button
          onClick={() => {
            setActiveTab("home");

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="group flex items-center gap-3"
        >
          <span className="relative flex items-center justify-center w-7 h-7 border border-cyan-400/30 text-cyan-400 text-[9px] font-bold">
            Q
          </span>

          <span className="text-sm font-bold tracking-[0.12em] text-white">
            QDS
            <span className="text-cyan-400">.</span>
            ENGINE
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-10 text-[9px] uppercase tracking-[0.2em]">
          <button
            onClick={() => {
              setActiveTab("docs");

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className={`relative py-2 transition-colors ${
              activeTab === "docs"
                ? "text-cyan-400"
                : "text-slate-500 hover:text-white"
            }`}
          >
            Documentation
            {activeTab === "docs" && (
              <span className="absolute left-0 right-0 bottom-0 h-px bg-cyan-400" />
            )}
          </button>

          <button
            onClick={() => {
              setActiveTab("simulator");

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className={`relative py-2 transition-colors ${
              activeTab === "simulator"
                ? "text-cyan-400"
                : "text-slate-500 hover:text-white"
            }`}
          >
            Test Bed
            {activeTab === "simulator" && (
              <span className="absolute left-0 right-0 bottom-0 h-px bg-cyan-400" />
            )}
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
            className="relative py-2 text-slate-500 hover:text-white transition-colors"
          >
            Siemens
          </button>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

            <span className="text-[8px] uppercase tracking-[0.2em] text-slate-600">
              System Online
            </span>
          </div>

          <button
            onClick={() => {
              setActiveTab("login");

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-400 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
    </header>
  );
}
