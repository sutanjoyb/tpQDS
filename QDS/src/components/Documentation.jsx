import React, { useState } from "react";

const sections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction & Background",
    label: "FOUNDATION",
    content:
      "Quantum computing threatens classical public-key cryptography. Algorithms like Shor's efficiently solve integer factorization, rendering RSA and ECC obsolete. QDS-Secure introduces an alternative approach grounded in quantum mechanics for absolute security.",
  },
  {
    id: "teleportation",
    number: "02",
    title: "Teleportation-Based Protocols",
    label: "QUANTUM CHANNEL",
    content:
      "To handle real-world deployment challenges, the framework utilizes teleportation-based QDS protocols, leveraging pre-shared Bell-state entanglement pairs to securely transfer signature tokens.",
  },
  {
    id: "threat",
    number: "03",
    title: "Threat Detection Model",
    label: "THREAT ANALYSIS",
    content:
      "Instead of black-box machine learning, QDS-Secure relies on deterministic physics. Forgery attempts trigger state collapse via the no-cloning theorem, which is caught by statistical threshold rules.",
  },
];

export default function Documentation() {
  const [activeSection, setActiveSection] = useState("introduction");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveSection(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#050708] text-white font-mono pt-20 overflow-hidden">
      <style>{`
        @keyframes documentationScan {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }

          15% {
            opacity: 0.5;
          }

          85% {
            opacity: 0.5;
          }

          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        @keyframes documentationPulse {
          0%,
          100% {
            opacity: 0.3;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes documentationSignal {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(500%);
          }
        }

        @keyframes documentationRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .documentation-scan {
          animation: documentationScan 7s linear infinite;
        }

        .documentation-pulse {
          animation: documentationPulse 2s ease-in-out infinite;
        }

        .documentation-signal {
          animation: documentationSignal 3s linear infinite;
        }

        .documentation-rotate {
          animation: documentationRotate 18s linear infinite;
        }

        .documentation-grid {
          background-image:
            linear-gradient(to right, rgba(34,211,238,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34,211,238,0.035) 1px, transparent 1px);
          background-size: 56px 56px;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none documentation-grid opacity-40" />

      <div className="fixed left-0 right-0 h-24 pointer-events-none bg-gradient-to-b from-transparent via-cyan-400/[0.025] to-transparent documentation-scan" />

      <div className="relative z-10">
        <section className="border-b border-cyan-400/10">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-12 items-end">
              <div>
                <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-cyan-400">
                  <span>QDS_ENGINE</span>

                  <span className="w-10 h-px bg-cyan-400/40" />

                  <span>Technical Documentation</span>
                </div>

                <h1 className="mt-7 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[-0.04em] leading-[0.95]">
                  Security
                  <span className="block text-cyan-400">Architecture.</span>
                </h1>

                <p className="mt-8 max-w-3xl text-xs sm:text-sm leading-7 text-slate-500">
                  Technical specifications covering the quantum security model,
                  teleportation-based protocols, deterministic threat detection,
                  and simulator deployment.
                </p>
              </div>

              <div className="lg:justify-self-end w-full max-w-sm border border-cyan-400/15 bg-[#070a0c]/80">
                <div className="flex justify-between items-center px-5 py-4 border-b border-cyan-400/10">
                  <span className="text-[8px] uppercase tracking-[0.25em] text-slate-600">
                    Documentation Status
                  </span>

                  <span className="text-[8px] text-emerald-400">ONLINE</span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <div className="absolute inset-0 border border-cyan-400/20 rounded-full documentation-rotate" />

                      <div className="absolute inset-2 border border-emerald-400/20 rounded-full" />

                      <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] documentation-pulse" />
                    </div>

                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-slate-700">
                        System Documentation
                      </span>

                      <span className="block mt-1 text-sm text-white">
                        VERSION 2.4
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 h-px bg-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-16 h-full bg-cyan-400 documentation-signal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12 lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start py-10 lg:py-16">
              <div className="border border-white/10 bg-[#070a0c]/70">
                <div className="px-5 py-4 border-b border-white/10">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-slate-600">
                    System Index
                  </span>
                </div>

                <nav className="p-3">
                  {sections.map((section) => {
                    const active = activeSection === section.id;

                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-3 py-3 text-left transition-all duration-300 ${
                          active
                            ? "bg-cyan-400/[0.06] text-cyan-400"
                            : "text-slate-600 hover:text-white hover:bg-white/[0.025]"
                        }`}
                      >
                        <span className="text-[8px]">{section.number}</span>

                        <span className="text-[9px] uppercase tracking-wider">
                          {section.label}
                        </span>
                      </button>
                    );
                  })}

                  <button
                    onClick={() => scrollToSection("quick-start")}
                    className={`w-full flex items-center gap-3 px-3 py-3 text-left transition-all duration-300 ${
                      activeSection === "quick-start"
                        ? "bg-cyan-400/[0.06] text-cyan-400"
                        : "text-slate-600 hover:text-white hover:bg-white/[0.025]"
                    }`}
                  >
                    <span className="text-[8px]">04</span>

                    <span className="text-[9px] uppercase tracking-wider">
                      Quick Start
                    </span>
                  </button>
                </nav>
              </div>

              <div className="mt-5 px-4 py-4 border-l border-cyan-400/30">
                <span className="block text-[8px] uppercase tracking-widest text-slate-700">
                  Security Status
                </span>

                <div className="flex items-center gap-2 mt-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 documentation-pulse" />

                  <span className="text-[8px] text-emerald-400">
                    DOCUMENTATION VERIFIED
                  </span>
                </div>
              </div>
            </aside>

            <div className="py-10 lg:py-16 pb-28">
              <section
                id="introduction"
                className="scroll-mt-28 border border-white/10 bg-[#070a0c]/80 mb-8"
                onMouseEnter={() => setActiveSection("introduction")}
              >
                <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] text-cyan-400">01</span>

                    <span className="text-[9px] uppercase tracking-[0.25em] text-slate-600">
                      Foundation
                    </span>
                  </div>

                  <span className="text-[8px] uppercase tracking-widest text-slate-800">
                    SEC_01
                  </span>
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold uppercase text-white">
                    Introduction &
                    <span className="text-cyan-400"> Background</span>
                  </h2>

                  <div className="mt-7 border-l border-cyan-400/30 pl-5">
                    <p className="text-xs md:text-sm leading-7 text-slate-500">
                      Quantum computing threatens classical public-key
                      cryptography. Algorithms like Shor's efficiently solve
                      integer factorization, rendering RSA and ECC obsolete.
                      QDS-Secure introduces an alternative approach grounded in
                      quantum mechanics for absolute security.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mt-9">
                    <div className="bg-[#070a0c] p-5">
                      <span className="text-[8px] uppercase tracking-widest text-slate-700">
                        Threat
                      </span>

                      <span className="block mt-3 text-sm text-white">
                        QUANTUM COMPUTING
                      </span>
                    </div>

                    <div className="bg-[#070a0c] p-5">
                      <span className="text-[8px] uppercase tracking-widest text-slate-700">
                        Target
                      </span>

                      <span className="block mt-3 text-sm text-cyan-400">
                        RSA / ECC
                      </span>
                    </div>

                    <div className="bg-[#070a0c] p-5">
                      <span className="text-[8px] uppercase tracking-widest text-slate-700">
                        Approach
                      </span>

                      <span className="block mt-3 text-sm text-emerald-400">
                        QUANTUM SECURITY
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="teleportation"
                className="scroll-mt-28 border border-white/10 bg-[#070a0c]/80 mb-8"
                onMouseEnter={() => setActiveSection("teleportation")}
              >
                <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] text-cyan-400">02</span>

                    <span className="text-[9px] uppercase tracking-[0.25em] text-slate-600">
                      Quantum Channel
                    </span>
                  </div>

                  <span className="text-[8px] uppercase tracking-widest text-slate-800">
                    SEC_02
                  </span>
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold uppercase text-white">
                    Teleportation-Based
                    <span className="block text-cyan-400">Protocols</span>
                  </h2>

                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-10 items-center">
                    <div className="border-l border-cyan-400/30 pl-5">
                      <p className="text-xs md:text-sm leading-7 text-slate-500">
                        To handle real-world deployment challenges, the
                        framework utilizes teleportation-based QDS protocols,
                        leveraging pre-shared Bell-state entanglement pairs to
                        securely transfer signature tokens.
                      </p>
                    </div>

                    <div className="relative h-48 border border-cyan-400/10 bg-black/20 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-32 h-32">
                          <div className="absolute inset-0 rounded-full border border-cyan-400/20 documentation-rotate" />

                          <div className="absolute inset-5 rounded-full border border-cyan-400/30 documentation-rotate" />

                          <div className="absolute inset-10 rounded-full border border-emerald-400/20 documentation-rotate" />

                          <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />

                          <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.9)]" />

                          <div className="absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                        </div>
                      </div>

                      <div className="absolute bottom-3 left-4 text-[7px] uppercase tracking-widest text-slate-700">
                        ENTANGLEMENT_CHANNEL
                      </div>

                      <div className="absolute bottom-3 right-4 text-[7px] uppercase tracking-widest text-emerald-400">
                        SECURE
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="threat"
                className="scroll-mt-28 border border-white/10 bg-[#070a0c]/80 mb-8"
                onMouseEnter={() => setActiveSection("threat")}
              >
                <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] text-cyan-400">03</span>

                    <span className="text-[9px] uppercase tracking-[0.25em] text-slate-600">
                      Threat Analysis
                    </span>
                  </div>

                  <span className="text-[8px] uppercase tracking-widest text-slate-800">
                    SEC_03
                  </span>
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold uppercase text-white">
                    Threat Detection
                    <span className="block text-cyan-400">Model</span>
                  </h2>

                  <div className="mt-7 border-l border-cyan-400/30 pl-5">
                    <p className="text-xs md:text-sm leading-7 text-slate-500">
                      Instead of black-box machine learning, QDS-Secure relies
                      on deterministic physics. Forgery attempts trigger state
                      collapse via the no-cloning theorem, which is caught by
                      statistical threshold rules.
                    </p>
                  </div>

                  <div className="mt-9 border border-white/10 p-5">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[8px] uppercase tracking-widest text-slate-600">
                        Threat Monitor
                      </span>

                      <span className="text-[8px] text-emerald-400">
                        ACTIVE
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-[8px] mb-2">
                          <span className="text-slate-700">
                            STATE_INTEGRITY
                          </span>

                          <span className="text-cyan-400">99.8%</span>
                        </div>

                        <div className="h-1 bg-white/5 overflow-hidden">
                          <div className="h-full w-[99.8%] bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[8px] mb-2">
                          <span className="text-slate-700">INTERFERENCE</span>

                          <span className="text-emerald-400">CLEAR</span>
                        </div>

                        <div className="h-1 bg-white/5 overflow-hidden">
                          <div className="h-full w-[8%] bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[8px] mb-2">
                          <span className="text-slate-700">FORGERY_SIGNAL</span>

                          <span className="text-white">0.4%</span>
                        </div>

                        <div className="h-1 bg-white/5 overflow-hidden">
                          <div className="h-full w-[4%] bg-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="quick-start"
                className="scroll-mt-28 border border-cyan-400/20 bg-[#070a0c]/90"
                onMouseEnter={() => setActiveSection("quick-start")}
              >
                <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-cyan-400/10">
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] text-cyan-400">04</span>

                    <span className="text-[9px] uppercase tracking-[0.25em] text-slate-600">
                      Deployment
                    </span>
                  </div>

                  <span className="text-[8px] uppercase tracking-widest text-emerald-400">
                    READY
                  </span>
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold uppercase">
                    Quick Start &
                    <span className="text-cyan-400"> Installation</span>
                  </h2>

                  <p className="mt-6 text-xs md:text-sm leading-7 text-slate-500 max-w-3xl">
                    Initialize the QDS-Secure framework, install the required
                    dependencies, and launch the simulator environment.
                  </p>

                  <div className="mt-8 border border-white/10 bg-black/40">
                    <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400/60" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
                      </div>

                      <span className="text-[7px] uppercase tracking-widest text-slate-800">
                        terminal / qds-engine
                      </span>
                    </div>

                    <div className="p-6 text-xs leading-7 overflow-x-auto">
                      <div className="text-slate-700">
                        # Clone the repository
                      </div>

                      <div className="text-cyan-400">
                        git clone https://github.com/qds-secure/framework.git
                      </div>

                      <div className="mt-4 text-slate-700">
                        # Install dependencies & run simulator
                      </div>

                      <div className="text-emerald-400">
                        npm install && npm run simulator
                      </div>

                      <div className="mt-5 flex items-center gap-2 text-slate-700">
                        <span className="text-cyan-400">qds@secure-node</span>

                        <span>:</span>

                        <span>~/framework</span>

                        <span className="text-white">$</span>

                        <span className="w-2 h-4 bg-cyan-400 documentation-pulse" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 mt-8">
                    <div className="bg-[#070a0c] p-5">
                      <span className="text-[8px] uppercase tracking-widest text-slate-700">
                        Runtime
                      </span>

                      <span className="block mt-2 text-xs text-white">
                        NODE.JS
                      </span>
                    </div>

                    <div className="bg-[#070a0c] p-5">
                      <span className="text-[8px] uppercase tracking-widest text-slate-700">
                        Protocol
                      </span>

                      <span className="block mt-2 text-xs text-cyan-400">
                        QDS
                      </span>
                    </div>

                    <div className="bg-[#070a0c] p-5">
                      <span className="text-[8px] uppercase tracking-widest text-slate-700">
                        Status
                      </span>

                      <span className="block mt-2 text-xs text-emerald-400">
                        READY
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4 text-[8px] uppercase tracking-[0.2em] text-slate-800">
                <span>QDS_ENGINE / TECHNICAL SPECIFICATIONS</span>

                <span>DOCUMENTATION v2.4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
