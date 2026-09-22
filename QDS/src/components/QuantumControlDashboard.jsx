import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function QuantumControlDashboard({ setActiveTab }) {
  const [telemetry, setTelemetry] = useState({
    entanglement: 0.0,
    teleportation: 0.0,
    noise: 0.0,
    degradation: 0.0,
  });

  const [bits, setBits] = useState({
    sent: "0000000000000000",
    received: "0000000000000000",
  });

  const [quantumState, setQuantumState] = useState("IDLE");
  const [errorRate, setErrorRate] = useState(0.0);
  const [threatLevel, setThreatLevel] = useState("STANDBY");
  const [isLiveActive, setIsLiveActive] = useState(false);
  const [transmissionLogs, setTransmissionLogs] = useState([]);
  const [auditReport, setAuditReport] = useState(null);
  const [activeNav, setActiveNav] = useState("telemetry");

  const containerRef = useRef(null);
  const streamTimerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current.children,
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.07,
          ease: "power3.out",
        },
      );
    }, containerRef);

    return () => {
      ctx.revert();

      if (streamTimerRef.current) {
        clearInterval(streamTimerRef.current);
      }
    };
  }, []);

  const executeTransmissionCycle = () => {
    setQuantumState("SUPERPOSITION");

    const generatedBits = Array.from({ length: 16 }, () =>
      Math.random() > 0.5 ? "1" : "0",
    ).join("");

    const interceptAttempt = Math.random() > 0.7;

    let evaluatedBits = generatedBits;

    if (interceptAttempt) {
      const targetBitIndex = Math.floor(Math.random() * 16);

      evaluatedBits =
        generatedBits.substring(0, targetBitIndex) +
        (generatedBits[targetBitIndex] === "1" ? "0" : "1") +
        generatedBits.substring(targetBitIndex + 1);
    }

    setBits({
      sent: generatedBits,
      received: evaluatedBits,
    });

    let bitErrors = 0;

    for (let i = 0; i < 16; i++) {
      if (generatedBits[i] !== evaluatedBits[i]) {
        bitErrors++;
      }
    }

    const currentErrorRate = Number(((bitErrors / 16) * 100).toFixed(1));

    setErrorRate(currentErrorRate);

    let status = "SECURE";

    if (currentErrorRate > 10) {
      status = "INTERCEPTED";
    } else if (currentErrorRate > 0) {
      status = "NOISE";
    }

    setThreatLevel(status);

    const updatedMetrics = {
      entanglement: Number((100 - currentErrorRate * 1.5).toFixed(1)),
      teleportation: Number((97 - currentErrorRate * 2.1).toFixed(1)),
      noise: Number((currentErrorRate + 0.8).toFixed(1)),
      degradation: Number((currentErrorRate * 0.9).toFixed(1)),
    };

    setTelemetry(updatedMetrics);

    const timestamp = new Date().toISOString().split("T")[1].slice(0, 8);

    const logString = `[${timestamp}] SENT: ${generatedBits} | RECV: ${evaluatedBits} | ERR: ${currentErrorRate}% | ${status}`;

    setTransmissionLogs((prevLogs) => [logString, ...prevLogs.slice(0, 6)]);

    setTimeout(() => {
      setQuantumState(currentErrorRate > 10 ? "COLLAPSED" : "VERIFIED");
    }, 400);
  };

  const toggleLiveTelemetryStream = () => {
    if (isLiveActive) {
      clearInterval(streamTimerRef.current);
      setIsLiveActive(false);
      compileAuditReport();
    } else {
      setIsLiveActive(true);
      setAuditReport(null);
      executeTransmissionCycle();

      streamTimerRef.current = setInterval(() => {
        executeTransmissionCycle();
      }, 1800);
    }
  };

  const compileAuditReport = () => {
    const reportData = {
      timestamp: new Date().toLocaleString(),
      avgEntanglement: telemetry.entanglement,
      maxError: errorRate,
      finalStatus: threatLevel,
      totalPackets: transmissionLogs.length + 1,
      conclusion:
        errorRate > 10 ? "REJECTED: Tampering detected." : "PASSED: Verified.",
    };

    setAuditReport(reportData);
  };

  const statusColor =
    threatLevel === "INTERCEPTED"
      ? "text-red-400"
      : threatLevel === "NOISE"
        ? "text-amber-400"
        : "text-emerald-400";

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#05070a] text-slate-100 font-sans selection:bg-cyan-400/20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.035) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[130px]" />

      <aside className="relative z-10 w-full border-b border-cyan-400/10 bg-[#070a0f]/90 backdrop-blur-xl md:fixed md:left-0 md:top-0 md:flex md:h-screen md:w-[280px] md:flex-col md:border-b-0 md:border-r">
        <div className="flex h-full flex-col justify-between p-6">
          <div>
            <div className="mb-10 border-b border-slate-800/70 pb-7">
              <button
                onClick={() => {
                  if (setActiveTab) {
                    setActiveTab("home");
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }
                }}
                className="mb-8 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 transition-all hover:translate-x-1 hover:text-cyan-300"
              >
                <span>←</span>
                Return to Workspace
              </button>

              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/5">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                  <div className="absolute inset-2 animate-[spin_6s_linear_infinite] rounded-full border border-dashed border-cyan-400/30" />
                </div>

                <div>
                  <span className="block text-[9px] font-mono uppercase tracking-[0.25em] text-cyan-400">
                    Architecture
                  </span>

                  <h2 className="mt-1 text-lg font-semibold tracking-tight text-white">
                    QDS Protocol
                  </h2>
                </div>
              </div>
            </div>

            <nav className="space-y-1.5 font-mono text-[10px]">
              {[
                ["telemetry", "01", "Overview"],
                ["bitstream", "02", "Bitstreams"],
                ["engine", "03", "Engine Logic"],
                ["logs", "04", "Archive Log"],
              ].map(([id, number, label]) => (
                <button
                  key={id}
                  onClick={() => setActiveNav(id)}
                  className={`group relative flex w-full items-center justify-between overflow-hidden rounded-lg border px-4 py-3.5 text-left uppercase tracking-[0.16em] transition-all duration-300 ${
                    activeNav === id
                      ? "border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300"
                      : "border-transparent text-slate-500 hover:border-slate-800 hover:bg-white/[0.025] hover:text-slate-200"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span
                      className={
                        activeNav === id ? "text-cyan-400" : "text-slate-700"
                      }
                    >
                      {number}
                    </span>

                    {label}
                  </span>

                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      activeNav === id
                        ? "bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                        : "bg-slate-800 group-hover:bg-slate-600"
                    }`}
                  />

                  {activeNav === id && (
                    <span className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="hidden rounded-xl border border-slate-800/70 bg-[#090d14] p-4 md:block">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-slate-600">
                Stream Status
              </span>

              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isLiveActive
                    ? "animate-pulse bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                    : "bg-slate-700"
                }`}
              />
            </div>

            <div
              className={`font-mono text-[10px] font-semibold tracking-wider ${
                isLiveActive ? "text-emerald-400" : "text-slate-400"
              }`}
            >
              {isLiveActive ? "ACTIVE_TELEMETRY" : "SYSTEM_IDLE"}
            </div>

            <div className="mt-3 h-px bg-slate-800" />

            <div className="mt-3 flex justify-between text-[8px] font-mono uppercase text-slate-600">
              <span>Node</span>
              <span>QDS-01</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="relative z-10 h-screen overflow-y-auto md:ml-[280px]">
        <div className="mx-auto max-w-[1500px] p-5 sm:p-8 lg:p-12">
          <div className="mb-8 flex flex-col justify-between gap-6 border-b border-slate-800/70 pb-7 lg:flex-row lg:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-400" />

                <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-cyan-400">
                  Execution Node
                </span>
              </div>

              <h1 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Quantum Control <span className="text-cyan-400">Room</span>
              </h1>

              <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-500">
                Real-time quantum transmission monitoring, deterministic threat
                analysis and protocol verification.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={executeTransmissionCycle}
                disabled={isLiveActive}
                className="group relative overflow-hidden border border-slate-700 bg-[#0a0e15] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <span className="relative z-10">Test Single Pulse</span>

                <span className="absolute inset-0 -translate-x-full bg-cyan-400/[0.05] transition-transform duration-500 group-hover:translate-x-0" />
              </button>

              <button
                onClick={toggleLiveTelemetryStream}
                className={`relative overflow-hidden px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                  isLiveActive
                    ? "bg-amber-500 text-black shadow-[0_0_25px_rgba(245,158,11,0.15)]"
                    : "bg-cyan-400 text-black shadow-[0_0_25px_rgba(34,211,238,0.12)] hover:bg-cyan-300"
                }`}
              >
                {isLiveActive ? "Halt Stream" : "Initialize Stream"}
              </button>
            </div>
          </div>

          {(activeNav === "telemetry" || activeNav === "engine") && (
            <div className="mb-8 grid grid-cols-1 gap-px overflow-hidden border border-slate-800/70 bg-slate-800/50 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Entanglement Purity", telemetry.entanglement, "cyan"],
                ["Teleportation Index", telemetry.teleportation, "cyan"],
                ["Channel Noise", telemetry.noise, "slate"],
                ["Degradation Factor", telemetry.degradation, "slate"],
              ].map(([label, value, color], index) => (
                <div
                  key={label}
                  className="group relative bg-[#080c12] p-6 transition-all duration-500 hover:bg-[#0b1119]"
                >
                  <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-slate-600">
                      0{index + 1}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-700 transition-all group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  </div>

                  <span className="block text-[9px] font-mono uppercase tracking-[0.17em] text-slate-500">
                    {label}
                  </span>

                  <div className="mt-3 flex items-end gap-1">
                    <span className="text-3xl font-semibold tracking-tight text-white">
                      {value}
                    </span>

                    <span className="mb-1 text-xs text-slate-600">%</span>
                  </div>

                  <div className="mt-5 h-[2px] w-full bg-slate-900">
                    <div
                      className={`h-full transition-all duration-700 ${
                        color === "cyan"
                          ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                          : "bg-slate-500"
                      }`}
                      style={{
                        width:
                          label === "Channel Noise" ||
                          label === "Degradation Factor"
                            ? `${value * 10}%`
                            : `${value}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {(activeNav === "telemetry" || activeNav === "bitstream") && (
            <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-[0.8fr_1.5fr]">
              <div className="group relative overflow-hidden border border-slate-800/70 bg-[#080c12] p-7">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/[0.025] blur-3xl transition-all duration-700 group-hover:bg-cyan-400/[0.06]" />

                <div className="relative">
                  <div className="mb-7 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-cyan-400">
                        Wave Mechanics
                      </span>

                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                        Quantum Collapse
                      </h3>
                    </div>

                    <div className="h-8 w-8 border border-cyan-400/20">
                      <div className="h-full w-full animate-pulse bg-cyan-400/[0.04]" />
                    </div>
                  </div>

                  <p className="max-w-md text-xs leading-6 text-slate-500">
                    External measurement attempts immediately collapse
                    superpositional states into classical values.
                  </p>

                  <div className="mt-8 border border-slate-800 bg-[#05080d] p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-slate-600">
                        Current Vector State
                      </span>

                      <span className="text-[8px] font-mono text-cyan-500">
                        LIVE
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="relative flex h-12 w-12 items-center justify-center">
                        <div className="absolute inset-0 animate-ping rounded-full border border-cyan-400/20" />

                        <div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
                      </div>

                      <div className="font-mono text-sm font-bold tracking-[0.2em] text-cyan-300">
                        {quantumState}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden border border-slate-800/70 bg-[#080c12] p-7">
                <div className="mb-7 flex items-end justify-between border-b border-slate-800/70 pb-5">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-cyan-400">
                      Bitstream Comparison
                    </span>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                      Transmission Matrix
                    </h3>
                  </div>

                  <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600 sm:block">
                    16-BIT CHANNEL
                  </span>
                </div>

                <div className="space-y-3 font-mono">
                  <div className="group flex flex-col gap-3 border border-slate-800 bg-[#05080d] p-4 transition-all duration-300 hover:border-cyan-400/20 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

                      <span className="text-[9px] uppercase tracking-wider text-slate-500">
                        Alice Sent
                      </span>
                    </div>

                    <div className="overflow-x-auto text-xs font-bold tracking-[0.3em] text-cyan-200">
                      {bits.sent}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="h-5 w-px bg-gradient-to-b from-cyan-400/50 to-transparent" />
                  </div>

                  <div className="group flex flex-col gap-3 border border-slate-800 bg-[#05080d] p-4 transition-all duration-300 hover:border-cyan-400/20 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

                      <span className="text-[9px] uppercase tracking-wider text-slate-500">
                        Bob Recv
                      </span>
                    </div>

                    <div className="overflow-x-auto text-xs font-bold tracking-[0.3em] text-cyan-200">
                      {bits.received}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {(activeNav === "telemetry" ||
            activeNav === "engine" ||
            activeNav === "logs") && (
            <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="relative overflow-hidden border border-slate-800/70 bg-[#080c12] p-7">
                <div className="absolute right-0 top-0 h-px w-32 bg-gradient-to-l from-cyan-400 to-transparent" />

                <div className="mb-7">
                  <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-cyan-400">
                    Deterministic Engine
                  </span>

                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                    Threat Level Analysis
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-px overflow-hidden border border-slate-800/70 bg-slate-800/70">
                  <div className="bg-[#05080d] p-5">
                    <span className="text-[8px] font-mono uppercase tracking-[0.18em] text-slate-600">
                      Calculated Error
                    </span>

                    <div className="mt-3 text-2xl font-semibold text-white">
                      {errorRate}%
                    </div>
                  </div>

                  <div className="bg-[#05080d] p-5">
                    <span className="text-[8px] font-mono uppercase tracking-[0.18em] text-slate-600">
                      System Security
                    </span>

                    <div
                      className={`mt-4 text-xs font-bold uppercase tracking-wider ${statusColor}`}
                    >
                      {threatLevel}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-[8px] font-mono uppercase tracking-[0.18em]">
                    <span className="text-slate-600">Threat Assessment</span>

                    <span className={statusColor}>{errorRate}%</span>
                  </div>

                  <div className="h-1 bg-slate-900">
                    <div
                      className={`h-full transition-all duration-500 ${
                        threatLevel === "INTERCEPTED"
                          ? "bg-red-400"
                          : threatLevel === "NOISE"
                            ? "bg-amber-400"
                            : "bg-emerald-400"
                      }`}
                      style={{
                        width: `${Math.min(errorRate * 5, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden border border-slate-800/70 bg-[#080c12] p-7">
                <div className="mb-7 flex items-end justify-between">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-cyan-400">
                      Event Ledger
                    </span>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                      Telemetry Log History
                    </h3>
                  </div>

                  <span className="text-[8px] font-mono text-slate-600">
                    {transmissionLogs.length} EVENTS
                  </span>
                </div>

                <div className="h-36 overflow-y-auto border border-slate-800 bg-[#05080d] p-4 font-mono text-[9px] leading-6">
                  {transmissionLogs.length === 0 ? (
                    <span className="text-slate-700">
                      No historical entries available. Run a pulse or start
                      stream.
                    </span>
                  ) : (
                    transmissionLogs.map((item, index) => (
                      <div
                        key={index}
                        className="border-b border-slate-900 py-1 text-slate-500 transition-colors hover:text-cyan-300"
                      >
                        <span className="mr-2 text-cyan-500">{">"}</span>

                        {item}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {auditReport && (
            <div className="relative overflow-hidden border border-cyan-400/20 bg-[#080c12] p-7 shadow-[0_0_50px_rgba(34,211,238,0.035)]">
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

              <div className="mb-7 flex flex-col justify-between gap-3 border-b border-slate-800/70 pb-5 sm:flex-row sm:items-center">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-cyan-400">
                    Security Audit
                  </span>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    Comprehensive Audit Verdict
                  </h3>
                </div>

                <span className="font-mono text-[9px] text-slate-600">
                  {auditReport.timestamp}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-px overflow-hidden border border-slate-800/70 bg-slate-800/70 sm:grid-cols-4">
                <div className="bg-[#05080d] p-5">
                  <span className="text-[8px] font-mono uppercase tracking-wider text-slate-600">
                    Avg Entanglement
                  </span>

                  <div className="mt-2 text-sm font-bold text-white">
                    {auditReport.avgEntanglement}%
                  </div>
                </div>

                <div className="bg-[#05080d] p-5">
                  <span className="text-[8px] font-mono uppercase tracking-wider text-slate-600">
                    Max Error Rate
                  </span>

                  <div className="mt-2 text-sm font-bold text-white">
                    {auditReport.maxError}%
                  </div>
                </div>

                <div className="bg-[#05080d] p-5">
                  <span className="text-[8px] font-mono uppercase tracking-wider text-slate-600">
                    Total Packets
                  </span>

                  <div className="mt-2 text-sm font-bold text-white">
                    {auditReport.totalPackets}
                  </div>
                </div>

                <div className="bg-[#05080d] p-5">
                  <span className="text-[8px] font-mono uppercase tracking-wider text-slate-600">
                    Final Verdict
                  </span>

                  <div className="mt-2 text-sm font-bold uppercase text-cyan-300">
                    {auditReport.finalStatus}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 border border-slate-800 bg-[#05080d] p-4">
                <div
                  className={`h-2 w-2 rounded-full ${
                    auditReport.maxError > 10 ? "bg-red-400" : "bg-emerald-400"
                  }`}
                />

                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-400">
                  {auditReport.conclusion}
                </span>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
