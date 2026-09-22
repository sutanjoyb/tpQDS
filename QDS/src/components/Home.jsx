import React, { useEffect, useRef, useState } from "react";

const features = [
  {
    tag: "01",
    short: "ENTANGLEMENT",
    title: "BELL-STATE ENTANGLEMENT",
    desc: "Creates shared quantum states between trusted endpoints before signature verification begins.",
  },
  {
    tag: "02",
    short: "BASIS CONTROL",
    title: "PAULI BASIS CORRECTION",
    desc: "Applies controlled basis transformations to preserve state integrity during quantum transmission.",
  },
  {
    tag: "03",
    short: "SECURITY MODEL",
    title: "INFORMATION-THEORETIC SECURITY",
    desc: "Uses quantum information principles to establish security guarantees independent of computational assumptions.",
  },
  {
    tag: "04",
    short: "THREAT DETECTION",
    title: "NO-CLONING DETECTION",
    desc: "Detects anomalous state duplication and identifies potential interference inside the transmission channel.",
  },
  {
    tag: "05",
    short: "VERIFICATION",
    title: "DETERMINISTIC VERIFICATION",
    desc: "Performs deterministic signature validation before accepting the transmitted quantum-secured message.",
  },
];

const faqs = [
  {
    question: "What is QDS.Engine?",
    answer:
      "QDS.Engine is a quantum-oriented digital signature and security framework designed around entanglement, state verification, threat detection, and deterministic authentication.",
  },
  {
    question: "How does the quantum security pipeline work?",
    answer:
      "The security pipeline establishes an entangled state, performs basis correction, applies information-theoretic security validation, monitors for cloning or interference, and finally performs deterministic verification.",
  },
  {
    question: "What does zero-trust mean in this architecture?",
    answer:
      "Zero-trust means that no endpoint, state, or transmission is automatically trusted. Each stage must independently satisfy the required verification conditions before the next stage can proceed.",
  },
  {
    question: "How is a compromised quantum state detected?",
    answer:
      "The threat detection layer continuously evaluates the transmitted state for unexpected changes, duplication indicators, or interference patterns that violate the expected security model.",
  },
  {
    question: "Can the simulator be used for testing?",
    answer:
      "Yes. The simulator provides a controlled environment for observing protocol behavior, security telemetry, verification states, and threat detection events.",
  },
  {
    question: "Is this intended to replace conventional cryptography?",
    answer:
      "The platform is designed as a quantum security research and simulation framework. Its purpose is to explore quantum-oriented authentication and verification concepts rather than automatically replace established cryptographic systems.",
  },
];

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrame;
    let particles = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        90,
        Math.max(35, Math.floor((width * height) / 18000)),
      );

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        size: Math.random() * 1.6 + 0.5,
        opacity: Math.random() * 0.45 + 0.15,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${p1.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(34, 211, 238, 0.6)";
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 135) {
            const opacity = (1 - distance / 135) * 0.16;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
    />
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } transition-all duration-1000 ease-out`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home({ setActiveTab, scrollToSection }) {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [integrity, setIntegrity] = useState(0);
  const [confidence, setConfidence] = useState(0);

  useEffect(() => {
    let integrityFrame;
    let confidenceFrame;

    const start = performance.now();

    const animateIntegrity = (time) => {
      const progress = Math.min((time - start) / 1400, 1);
      setIntegrity((99.8 * progress).toFixed(1));

      if (progress < 1) {
        integrityFrame = requestAnimationFrame(animateIntegrity);
      }
    };

    const confidenceStart = performance.now();

    const animateConfidence = (time) => {
      const progress = Math.min((time - confidenceStart) / 1600, 1);
      setConfidence(Math.floor(92 * progress));

      if (progress < 1) {
        confidenceFrame = requestAnimationFrame(animateConfidence);
      }
    };

    integrityFrame = requestAnimationFrame(animateIntegrity);
    confidenceFrame = requestAnimationFrame(animateConfidence);

    return () => {
      cancelAnimationFrame(integrityFrame);
      cancelAnimationFrame(confidenceFrame);
    };
  }, []);

  const launchSimulator = () => {
    if (setActiveTab) {
      setActiveTab("simulator");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const goToPipeline = () => {
    const element = document.getElementById("pipeline");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goToFaq = () => {
    const element = document.getElementById("faq");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <style>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.85);
            opacity: 0.7;
          }

          70% {
            transform: scale(1.15);
            opacity: 0;
          }

          100% {
            transform: scale(1.15);
            opacity: 0;
          }
        }

        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes floatNode {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes signal {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(500%);
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 0.25;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes glitch {
          0%,
          90%,
          100% {
            transform: translate(0);
          }

          92% {
            transform: translate(-2px, 1px);
          }

          94% {
            transform: translate(2px, -1px);
          }

          96% {
            transform: translate(-1px, 0);
          }
        }

        .scan-animation {
          animation: scan 6s linear infinite;
        }

        .pulse-ring {
          animation: pulseRing 2.8s ease-out infinite;
        }

        .rotate-slow {
          animation: rotateSlow 18s linear infinite;
        }

        .rotate-reverse {
          animation: rotateReverse 13s linear infinite;
        }

        .float-node {
          animation: floatNode 4s ease-in-out infinite;
        }

        .signal-animation {
          animation: signal 3s linear infinite;
        }

        .blink-animation {
          animation: blink 2s ease-in-out infinite;
        }

        .glitch-animation {
          animation: glitch 5s infinite;
        }

        .faq-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 450ms cubic-bezier(.4,0,.2,1);
        }

        .faq-content.open {
          grid-template-rows: 1fr;
        }

        .faq-inner {
          overflow: hidden;
        }
      `}</style>

      <main className="bg-[#050708] text-white font-mono overflow-hidden">
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden border-b border-cyan-400/10 bg-[#050708]">
          <div className="absolute inset-0 pointer-events-none">
            <ParticleBackground />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.07),transparent_55%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.035),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.025),transparent_30%)]" />

            <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-cyan-400/[0.025] to-transparent scan-animation" />
          </div>

          <div className="absolute top-[18%] left-[9%] w-1.5 h-1.5 rounded-full bg-cyan-400 float-node shadow-[0_0_15px_rgba(0,229,255,0.9)]" />

          <div
            className="absolute top-[65%] left-[25%] w-1 h-1 rounded-full bg-emerald-400 float-node"
            style={{ animationDelay: "1s" }}
          />

          <div
            className="absolute top-[30%] right-[17%] w-1.5 h-1.5 rounded-full bg-cyan-400 float-node"
            style={{ animationDelay: "2s" }}
          />

          <div
            className="absolute bottom-[15%] right-[8%] w-1 h-1 rounded-full bg-emerald-400 float-node"
            style={{ animationDelay: "0.5s" }}
          />

          <div className="relative z-10 w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-24 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-14 xl:gap-24 items-center">
              <Reveal>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                    <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_12px_rgba(0,229,255,0.8)] blink-animation" />

                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-cyan-400">
                      Quantum Security / Digital Signature Engine
                    </span>
                  </div>

                  <h1 className="glitch-animation text-5xl sm:text-6xl md:text-7xl xl:text-[86px] leading-[0.9] font-bold tracking-[-0.05em] uppercase text-white">
                    Absolute
                    <span className="block text-cyan-400">Security.</span>
                  </h1>

                  <div className="mt-8 flex justify-center lg:justify-start">
                    <div className="w-px bg-cyan-400/50 mr-5" />

                    <p className="max-w-2xl text-sm md:text-base leading-7 text-slate-500 text-left">
                      Quantum-mechanical security architecture engineered around
                      Bell-state entanglement, real-time state verification,
                      threat detection, and deterministic authentication.
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-9">
                    <button
                      onClick={launchSimulator}
                      className="group relative overflow-hidden px-7 py-3 bg-cyan-400 text-black text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
                    >
                      <span className="relative z-10">Launch Simulator →</span>

                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/30 transition-transform duration-500" />
                    </button>

                    <button
                      onClick={goToPipeline}
                      className="group px-7 py-3 border border-slate-700 text-slate-400 text-[10px] uppercase tracking-[0.2em] hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/[0.03] transition-all duration-300"
                    >
                      Inspect Architecture
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 border-y border-white/10">
                    <div className="py-4 px-4 border-r border-white/10 hover:bg-white/[0.025] transition-colors">
                      <span className="block text-[8px] uppercase tracking-widest text-slate-700">
                        Protocol
                      </span>

                      <span className="block mt-2 text-xs text-slate-400">
                        QDS / AQS
                      </span>
                    </div>

                    <div className="py-4 px-4 border-r border-white/10 hover:bg-cyan-400/[0.025] transition-colors">
                      <span className="block text-[8px] uppercase tracking-widest text-slate-700">
                        Encryption
                      </span>

                      <span className="block mt-2 text-xs text-cyan-400">
                        QUANTUM
                      </span>
                    </div>

                    <div className="py-4 px-4 border-r border-white/10 hover:bg-emerald-400/[0.025] transition-colors">
                      <span className="block text-[8px] uppercase tracking-widest text-slate-700">
                        Detection
                      </span>

                      <span className="block mt-2 text-xs text-emerald-400">
                        ACTIVE
                      </span>
                    </div>

                    <div className="py-4 px-4 hover:bg-white/[0.025] transition-colors">
                      <span className="block text-[8px] uppercase tracking-widest text-slate-700">
                        Trust
                      </span>

                      <span className="block mt-2 text-xs text-slate-400">
                        ZERO-TRUST
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="w-full max-w-[620px] lg:justify-self-end">
                  <div className="relative border border-cyan-400/20 bg-[#070a0c]/95 shadow-[0_0_60px_rgba(0,229,255,0.04)] transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_80px_rgba(0,229,255,0.08)]">
                    <div className="absolute -top-1 left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

                    <div className="flex items-center justify-between px-5 py-4 border-b border-cyan-400/10">
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] text-cyan-400">//</span>

                        <span className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
                          Security Telemetry
                        </span>
                      </div>

                      <span className="text-[8px] uppercase tracking-widest text-emerald-400">
                        [ LIVE ]
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between pb-6 border-b border-white/10">
                        <div>
                          <span className="block text-[8px] uppercase tracking-widest text-slate-700">
                            System Integrity
                          </span>

                          <span className="block mt-2 text-5xl font-bold text-white tabular-nums">
                            {integrity}%
                          </span>
                        </div>

                        <div className="relative w-20 h-20 flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full border border-cyan-400/10" />
                          <div className="absolute inset-2 rounded-full border border-cyan-400/20 rotate-slow" />
                          <div className="absolute inset-5 rounded-full border border-emerald-400/20 rotate-reverse" />
                          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)]" />
                          <div className="absolute inset-0 rounded-full border border-cyan-400/20 pulse-ring" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2">
                        <div className="py-6 pr-6 border-r border-b border-white/10">
                          <span className="block text-[8px] uppercase tracking-widest text-slate-700">
                            Entanglement
                          </span>

                          <span className="block mt-3 text-xl text-cyan-400">
                            STABLE
                          </span>
                        </div>

                        <div className="py-6 pl-6 border-b border-white/10">
                          <span className="block text-[8px] uppercase tracking-widest text-slate-700">
                            No-Cloning
                          </span>

                          <span className="block mt-3 text-xl text-emerald-400">
                            ACTIVE
                          </span>
                        </div>

                        <div className="py-6 pr-6 border-r border-white/10">
                          <span className="block text-[8px] uppercase tracking-widest text-slate-700">
                            Threat Level
                          </span>

                          <span className="block mt-3 text-xl text-white">
                            LOW
                          </span>
                        </div>

                        <div className="py-6 pl-6">
                          <span className="block text-[8px] uppercase tracking-widest text-slate-700">
                            Response
                          </span>

                          <span className="block mt-3 text-xl text-cyan-400">
                            READY
                          </span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="flex justify-between mb-2">
                          <span className="text-[8px] uppercase tracking-widest text-slate-700">
                            Verification Confidence
                          </span>

                          <span className="text-[8px] text-slate-500">
                            {confidence}%
                          </span>
                        </div>

                        <div className="relative h-[3px] bg-white/5 overflow-hidden">
                          <div
                            className="absolute left-0 top-0 bottom-0 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)] transition-all duration-100"
                            style={{
                              width: `${confidence}%`,
                            }}
                          />

                          <div className="absolute top-0 left-0 w-20 h-full bg-white/60 blur-sm signal-animation" />
                        </div>
                      </div>

                      <div className="mt-6 border border-white/5 bg-black/30 p-4">
                        <div className="flex items-center gap-2 text-[8px] uppercase tracking-widest text-slate-600">
                          <span className="text-emerald-400 blink-animation">
                            ●
                          </span>
                          Security Event Stream
                        </div>

                        <div className="mt-4 space-y-3">
                          <div className="flex justify-between text-[8px]">
                            <span className="text-slate-600">
                              ENTANGLEMENT_CHANNEL
                            </span>

                            <span className="text-emerald-400">SECURE</span>
                          </div>

                          <div className="flex justify-between text-[8px]">
                            <span className="text-slate-600">
                              SIGNATURE_STATE
                            </span>

                            <span className="text-cyan-400">VERIFIED</span>
                          </div>

                          <div className="flex justify-between text-[8px]">
                            <span className="text-slate-600">
                              INTRUSION_MONITOR
                            </span>

                            <span className="text-emerald-400">CLEAR</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between px-5 py-3 border-t border-cyan-400/10 text-[7px] uppercase tracking-[0.25em] text-slate-700">
                      <span>QDS_ENGINE</span>
                      <span>SECURE_NODE_01</span>
                      <span>V1.0.0</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[7px] uppercase tracking-[0.25em] text-slate-800 pointer-events-none">
            <span>QDS_ENGINE // SECURE TRANSMISSION FRAMEWORK</span>
            <span>ENCRYPTED SESSION</span>
          </div>
        </section>

        <section
          id="pipeline"
          className="relative py-28 border-b border-cyan-400/10 bg-[#050708]"
        >
          <div className="absolute inset-0 pointer-events-none">
            <ParticleBackground />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.025),transparent_55%)]" />
          </div>

          <div className="relative max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
            <Reveal>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
                <div>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                    <span>01</span>
                    <span className="w-10 h-px bg-cyan-400/40" />
                    <span>Security Architecture</span>
                  </div>

                  <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
                    Protocol Pipeline
                  </h2>
                </div>

                <p className="max-w-xl text-xs md:text-sm leading-6 text-slate-600 uppercase">
                  A sequential verification chain designed to isolate,
                  authenticate, and reject compromised quantum states.
                </p>
              </div>
            </Reveal>

            <div className="relative">
              <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent">
                <div className="absolute top-[-1px] left-0 w-20 h-[3px] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] signal-animation" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-l border-t border-white/10">
                {features.map((feature, idx) => {
                  const active = hoveredStep === idx;

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredStep(idx)}
                      onMouseLeave={() => setHoveredStep(null)}
                      className={`relative h-[350px] p-6 xl:p-8 border-r border-b border-white/10 overflow-hidden cursor-pointer transition-all duration-500 ${
                        active
                          ? "bg-cyan-400/[0.035] border-cyan-400/30"
                          : "bg-transparent"
                      }`}
                    >
                      <div className="relative z-10 flex justify-between items-start">
                        <span
                          className={`text-xs transition-all duration-300 ${
                            active
                              ? "text-cyan-400 translate-x-1"
                              : "text-slate-700"
                          }`}
                        >
                          {feature.tag}
                        </span>

                        <span
                          className={`text-[8px] uppercase tracking-widest transition-colors ${
                            active ? "text-emerald-400" : "text-slate-800"
                          }`}
                        >
                          {active ? "ACTIVE" : "STAGE"}
                        </span>
                      </div>

                      <div className="relative z-10 mt-14">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-slate-700">
                          {feature.short}
                        </span>

                        <h3
                          className={`mt-3 text-lg xl:text-xl font-bold uppercase leading-tight transition-all duration-500 ${
                            active
                              ? "text-cyan-300 translate-x-1"
                              : "text-slate-300"
                          }`}
                        >
                          {feature.title}
                        </h3>
                      </div>

                      <div
                        className={`absolute left-6 right-6 xl:left-8 xl:right-8 bottom-7 transition-all duration-500 ${
                          active
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4 pointer-events-none"
                        }`}
                      >
                        <div className="h-px bg-cyan-400/40 mb-5" />

                        <p className="text-[11px] leading-6 text-slate-400">
                          {feature.desc}
                        </p>

                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            launchSimulator();
                          }}
                          className="mt-4 text-[9px] uppercase tracking-widest text-cyan-400 hover:text-white transition-colors"
                        >
                          Test Module →
                        </button>
                      </div>

                      <div
                        className={`absolute bottom-4 right-5 text-[8px] uppercase tracking-widest transition-colors ${
                          active ? "text-cyan-400" : "text-slate-900"
                        }`}
                      >
                        {active ? "INSPECTING" : `0${idx + 1}`}
                      </div>

                      <div
                        className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-500 ${
                          active
                            ? "bg-cyan-400 shadow-[0_0_12px_rgba(0,229,255,0.7)]"
                            : "bg-transparent"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border border-cyan-400/10 border-t-0 px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-5 bg-cyan-400/[0.015]">
              <div className="flex items-center gap-3">
                <span className="text-[8px] uppercase tracking-[0.25em] text-cyan-400">
                  Threat Module
                </span>

                <span className="hidden md:block w-12 h-px bg-white/10" />

                <span className="text-xs md:text-sm text-slate-500">
                  Continuous quantum state validation and anomaly inspection.
                </span>
              </div>

              <button
                onClick={launchSimulator}
                className="text-[9px] uppercase tracking-[0.2em] text-cyan-400 hover:text-white transition-colors whitespace-nowrap"
              >
                Test Module →
              </button>
            </div>
          </div>
        </section>

        <section className="relative py-28 bg-[#030506] border-b border-cyan-400/10">
          <div className="absolute inset-0 pointer-events-none">
            <ParticleBackground />
          </div>

          <div className="relative max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
            <Reveal>
              <div className="mb-14">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                  <span>02</span>
                  <span className="w-10 h-px bg-cyan-400/40" />
                  <span>Security Framework</span>
                </div>

                <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white">
                  Built For
                  <span className="text-cyan-400"> Zero Trust.</span>
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10">
              {[
                {
                  number: "01",
                  title: "ZERO-TRUST",
                  accent: "SECURITY",
                  text: "Every state, signature, and communication channel is independently verified before trust is established.",
                },
                {
                  number: "02",
                  title: "REAL-TIME",
                  accent: "MONITORING",
                  text: "Security telemetry continuously evaluates the quantum channel for anomalies, interference, and compromised states.",
                },
                {
                  number: "03",
                  title: "DETERMINISTIC",
                  accent: "VALIDATION",
                  text: "Digital signatures are validated through a deterministic security pipeline before transmission is accepted.",
                },
              ].map((item, index) => (
                <Reveal key={item.number} delay={index * 120}>
                  <div className="group h-full p-8 md:p-10 border-b md:border-b-0 md:border-r last:border-r-0 border-white/10 hover:bg-cyan-400/[0.025] transition-all duration-500">
                    <div className="flex justify-between">
                      <span className="text-[9px] text-cyan-400">
                        {item.number}
                      </span>

                      <span className="text-[8px] text-slate-800">
                        SYS_0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-10 text-2xl font-bold uppercase text-white">
                      {item.title}

                      <span className="block text-cyan-400 group-hover:translate-x-2 transition-transform duration-500">
                        {item.accent}
                      </span>
                    </h3>

                    <p className="mt-6 text-xs leading-6 text-slate-600">
                      {item.text}
                    </p>

                    <div className="mt-8 h-px bg-white/10 relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-16 bg-cyan-400 group-hover:translate-x-[400px] transition-transform duration-1000" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="relative py-28 bg-[#050708] border-b border-cyan-400/10"
        >
          <div className="absolute inset-0 pointer-events-none">
            <ParticleBackground />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.025),transparent_55%)]" />
          </div>

          <div className="relative max-w-[1100px] mx-auto px-6 sm:px-10">
            <Reveal>
              <div className="text-center mb-14">
                <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                  <span className="w-10 h-px bg-cyan-400/40" />
                  <span>03 / Intelligence Base</span>
                  <span className="w-10 h-px bg-cyan-400/40" />
                </div>

                <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white">
                  Frequently
                  <span className="block text-cyan-400">Asked Questions</span>
                </h2>

                <p className="max-w-xl mx-auto mt-6 text-xs md:text-sm leading-6 text-slate-600">
                  Technical information about the QDS.Engine security
                  architecture, verification pipeline, and simulator.
                </p>
              </div>
            </Reveal>

            <div className="border-t border-white/10">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <Reveal key={index} delay={index * 70}>
                    <div className="border-b border-white/10">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full flex items-center justify-between gap-8 py-7 text-left group"
                      >
                        <div className="flex items-center gap-5">
                          <span
                            className={`text-[9px] transition-colors ${
                              isOpen ? "text-cyan-400" : "text-slate-800"
                            }`}
                          >
                            0{index + 1}
                          </span>

                          <span
                            className={`text-sm md:text-base uppercase tracking-wide transition-colors ${
                              isOpen
                                ? "text-cyan-400"
                                : "text-slate-400 group-hover:text-white"
                            }`}
                          >
                            {faq.question}
                          </span>
                        </div>

                        <span
                          className={`flex-shrink-0 w-8 h-8 border flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "border-cyan-400 text-cyan-400 rotate-45"
                              : "border-slate-800 text-slate-600 group-hover:border-cyan-400 group-hover:text-cyan-400"
                          }`}
                        >
                          +
                        </span>
                      </button>

                      <div className={`faq-content ${isOpen ? "open" : ""}`}>
                        <div className="faq-inner">
                          <div className="pb-7 pl-10 md:pl-14 pr-10">
                            <div className="border-l border-cyan-400/30 pl-5">
                              <p className="text-xs md:text-sm leading-7 text-slate-500">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={250}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 border border-cyan-400/10 px-6 py-5 bg-cyan-400/[0.015]">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                  <span className="text-[9px] uppercase tracking-widest text-slate-600">
                    Knowledge base synchronized
                  </span>
                </div>

                <button
                  onClick={goToPipeline}
                  className="text-[9px] uppercase tracking-widest text-cyan-400 hover:text-white transition-colors"
                >
                  Review Architecture →
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative py-20 bg-[#030506]">
          <div className="absolute inset-0 pointer-events-none">
            <ParticleBackground />
          </div>

          <div className="relative max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
            <div className="border border-cyan-400/10 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-px bg-cyan-400" />
              <div className="absolute bottom-0 right-0 w-32 h-px bg-cyan-400" />

              <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.03] pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-cyan-400">
                    QDS_ENGINE / SECURE NODE
                  </span>

                  <h2 className="mt-4 text-3xl md:text-4xl font-bold uppercase">
                    Ready to test the
                    <span className="text-cyan-400"> security engine?</span>
                  </h2>

                  <p className="mt-5 max-w-xl text-xs leading-6 text-slate-600">
                    Enter the simulator and inspect the protocol pipeline,
                    verification states, telemetry, and threat response
                    mechanisms.
                  </p>
                </div>

                <button
                  onClick={launchSimulator}
                  className="group relative overflow-hidden flex-shrink-0 px-8 py-4 bg-cyan-400 text-black text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-300"
                >
                  <span className="relative z-10">Enter Test Bed →</span>

                  <span className="absolute inset-0 bg-white/40 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="h-10 bg-[#030506] flex items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-24 text-[7px] uppercase tracking-[0.25em] text-slate-800">
          <span>QDS_ENGINE // SECURE TRANSMISSION FRAMEWORK</span>
          <span>ENCRYPTED SESSION</span>
        </div>
      </main>
    </>
  );
}
