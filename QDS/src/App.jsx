import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Code,
  Globe,
  MessageSquare,
  ChevronRight,
  Lock,
  User,
  ArrowLeft,
} from "lucide-react";

const sections = [
  {
    id: "what",
    tag: "01 / PURPOSE",
    title: "What This Project Does",
    content:
      "The framework acts as a robust software engine tailored for teleportation-based Quantum Digital Signature (QDS) protocols. It simulates quantum public key distribution leveraging Bell-state entanglement and quantum teleportation channels. By applying Pauli correction operations and projective measurements for signature verification, it immediately detects forgery, impersonation, replay attacks, and quantum channel manipulation without relying on unstable machine learning models.",
  },
  {
    id: "how",
    tag: "02 / WORKFLOW",
    title: "How It Works",
    content:
      "It initiates security by establishing shared Bell pairs between sender and receiver endpoints. When signing documents or assets, incoming tokens are evaluated via precise Pauli basis transformations and projective measurements. Measurement outcomes are then passed through strict statistical threshold decision rules—ensuring deterministic acceptance of legitimate signatures while flagging anomalous deviations instantly.",
  },
  {
    id: "audience",
    tag: "03 / STAKEHOLDERS",
    title: "Who Mostly Uses This",
    content:
      "Designed specifically for quantum cryptographers and academic researchers validating information-theoretic security bounds. It is also utilized by cybersecurity infrastructure architects aiming to harden authentication pipelines against post-quantum threats, alongside defense and government agencies requiring absolute, uncompromised multi-party communication integrity.",
  },
  {
    id: "why",
    tag: "04 / ADVANTAGES",
    title: "Why Choose This Framework",
    content:
      "Unlike classical RSA and ECC systems which are completely vulnerable to Shor’s algorithm, this solution provides absolute post-quantum resilience backed by the laws of quantum mechanics. It eliminates black-box AI uncertainties through strict deterministic logic, offering optimal verification performance, low computational complexity, and uncompromised information-theoretic security guarantees.",
  },
];

export default function App() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("home");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveTab("home");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offsetTop =
          element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Successfully submitted ${activeTab === "login" ? "Login" : "Sign In"} form!`,
    );
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white text-neutral-950 font-sans antialiased selection:bg-neutral-950 selection:text-white scroll-smooth flex flex-col justify-between"
    >
   
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setActiveTab("home")}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-950" />
            <span className="text-sm font-semibold tracking-wider uppercase text-neutral-950">
              QDS-SECURE
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-xs font-medium uppercase tracking-widest text-neutral-500">
            <a
              href="#what"
              onClick={(e) => scrollToSection(e, "what")}
              className="hover:text-neutral-950 transition-colors"
            >
              Purpose
            </a>
            <a
              href="#how"
              onClick={(e) => scrollToSection(e, "how")}
              className="hover:text-neutral-950 transition-colors"
            >
              Mechanism
            </a>
            <a
              href="#audience"
              onClick={(e) => scrollToSection(e, "audience")}
              className="hover:text-neutral-950 transition-colors"
            >
              Users
            </a>
            <a
              href="#why"
              onClick={(e) => scrollToSection(e, "why")}
              className="hover:text-neutral-950 transition-colors"
            >
              Advantages
            </a>
            <button
              onClick={() => {
                setActiveTab("docs");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`hover:text-neutral-950 transition-colors uppercase tracking-widest ${activeTab === "docs" ? "text-neutral-950 font-semibold underline underline-offset-4" : ""}`}
            >
              Docs
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                setActiveTab("signin");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xs font-medium uppercase tracking-wider text-neutral-600 hover:text-neutral-950 transition-all"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setActiveTab("login");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-neutral-950 text-white text-xs font-medium uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-all"
            >
              Login
            </button>
          </div>
        </div>
      </header>

      
      <main className="flex-grow">
        {activeTab === "home" && (
          <>
         
            <section className="pt-44 pb-32 px-8 border-b border-neutral-200">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6 bg-neutral-100 px-3 py-1 rounded-full">
                  Information-Theoretic Security Protocol
                </span>

                <h1 className="text-4xl md:text-6xl font-normal tracking-tight text-neutral-950 mb-8 leading-[1.15]">
                  Quantum-Inspired Cyber Threat Detection for Digital Signatures
                </h1>

                <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                  Mitigating classical cryptographic vulnerabilities against
                  Shor’s algorithm through Bell-state entanglement and
                  projective measurements.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-neutral-950 text-white text-xs font-medium uppercase tracking-wider px-7 py-3.5 rounded-full hover:bg-neutral-800 transition-all"
                  >
                    Start Simulator <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#what"
                    onClick={(e) => scrollToSection(e, "what")}
                    className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-800 text-xs font-medium uppercase tracking-wider px-7 py-3.5 rounded-full hover:border-neutral-950 transition-all"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </section>
            <div className="max-w-7xl mx-auto px-8 py-24 space-y-32">
              {sections.map((section, index) => {
                const isEven = index % 2 === 1;
                return (
                  <motion.div
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-32 ${
                      isEven ? "md:grid-flow-dense" : ""
                    }`}
                  >
                    <div
                      className={`${isEven ? "md:col-start-2" : "md:col-start-1"} border-l-2 md:border-l-0 md:border-r-2 border-neutral-950 pl-6 md:pl-0 md:pr-12`}
                    >
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                        {section.tag}
                      </span>
                      <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-neutral-950">
                        {section.title}
                      </h2>
                    </div>

                    <div
                      className={`${isEven ? "md:col-start-1" : "md:col-start-2"}`}
                    >
                      <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}

        {activeTab === "docs" && (
          <div className="pt-36 pb-24 px-8 max-w-5xl mx-auto">
            <div className="mb-12 border-b border-neutral-200 pb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                SYSTEM DOCUMENTATION v2.4
              </span>
              <h1 className="text-4xl font-normal tracking-tight text-neutral-950">
                QDS-Secure Technical Documentation
              </h1>
              <p className="text-neutral-600 font-light mt-3">
                Comprehensive guides, protocol specifications, and mathematical
                modeling details for Quantum Digital Signatures.
              </p>
            </div>

            <div className="space-y-12 text-neutral-700 font-light leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl font-normal text-neutral-950 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-neutral-400" /> 1.
                  Introduction & Background
                </h2>
                <p>
                  The emergence of scalable quantum computing poses an
                  existential threat to classical public-key cryptography.
                  Algorithms such as Shor's algorithm efficiently solve integer
                  factorization and discrete logarithms, rendering schemes like
                  RSA and Elliptic Curve Cryptography (ECC) insecure. The
                  QDS-Secure framework introduces an alternative approach based
                  on the foundational laws of quantum mechanics, guaranteeing
                  information-theoretic security.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-normal text-neutral-950 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-neutral-400" /> 2.
                  Teleportation-Based QDS Protocols
                </h2>
                <p>
                  Traditional Quantum Digital Signatures face immense deployment
                  hurdles due to channel noise and complex multi-node state
                  transmissions. Our framework utilizes teleportation-based QDS
                  protocols, leveraging pre-shared Bell-state entanglement pairs
                  to securely transfer signature tokens with minimal operational
                  complexity.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-normal text-neutral-950 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-neutral-400" /> 3.
                  Threat Detection Model (Non-AI)
                </h2>
                <p>
                  Unlike conventional intrusion detection systems that rely on
                  machine learning or heuristic black-boxes, QDS-Secure uses
                  deterministic quantum physics. The verification algorithm
                  applies Pauli correction matrices and projective measurements
                  on outcome states. Any eavesdropping or forgery attempt
                  disturbs the underlying quantum states according to the
                  no-cloning theorem, triggering statistical deviations beyond
                  acceptable threshold limits.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-normal text-neutral-950 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-neutral-400" /> 4.
                  Installation & Quick Start
                </h2>
                <div className="bg-neutral-900 text-neutral-200 p-6 rounded-xl font-mono text-xs space-y-2">
                  <p className="text-neutral-400"># Clone the repository</p>
                  <p>git clone https://github.com/qds-secure/framework.git</p>
                  <p className="text-neutral-400 mt-4">
                    # Install dependencies
                  </p>
                  <p>npm install</p>
                  <p className="text-neutral-400 mt-4">
                    # Run the local simulation node
                  </p>
                  <p>npm run simulator</p>
                </div>
              </section>
            </div>
          </div>
        )}

        {(activeTab === "signin" || activeTab === "login") && (
          <div className="pt-36 pb-28 px-6 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("home")}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-950 mb-8 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </button>

            <div className="border border-neutral-200 rounded-2xl p-8 bg-neutral-50/50 shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                  {activeTab === "login" ? "PORTAL ACCESS" : "NEW ACCOUNT"}
                </span>
                <h1 className="text-2xl font-normal tracking-tight text-neutral-950">
                  {activeTab === "login"
                    ? "Sign in to QDS-Secure"
                    : "Create your account"}
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {activeTab === "signin" && (
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
                      <input
                        type="text"
                        required
                        placeholder="Dr. Alex Vance"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-950 focus:outline-none focus:border-neutral-950 transition-colors"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
                    <input
                      type="email"
                      required
                      placeholder="alex@quantum.org"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-950 focus:outline-none focus:border-neutral-950 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-950 focus:outline-none focus:border-neutral-950 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-neutral-950 text-white font-medium text-xs uppercase tracking-wider py-3.5 rounded-lg hover:bg-neutral-800 transition-all mt-4"
                >
                  {activeTab === "login" ? "Access Node" : "Register Account"}
                </button>
              </form>

              <div className="mt-6 text-center text-xs font-light text-neutral-600">
                {activeTab === "login" ? (
                  <p>
                    Don't have an account?{" "}
                    <button
                      onClick={() => setActiveTab("signin")}
                      className="text-neutral-950 font-medium underline underline-offset-2"
                    >
                      Sign In
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <button
                      onClick={() => setActiveTab("login")}
                      className="text-neutral-950 font-medium underline underline-offset-2"
                    >
                      Login
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-neutral-900 text-neutral-400 py-16 px-8 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
              <span className="text-sm font-semibold tracking-wider uppercase text-white">
                QDS-SECURE
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm font-light leading-relaxed">
              Next-generation cryptographic framework ensuring absolute
              post-quantum digital signature verification via
              information-theoretic security principles.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <a
                  href="#what"
                  onClick={(e) => scrollToSection(e, "what")}
                  className="hover:text-white transition-colors"
                >
                  Purpose
                </a>
              </li>
              <li>
                <a
                  href="#how"
                  onClick={(e) => scrollToSection(e, "how")}
                  className="hover:text-white transition-colors"
                >
                  Mechanism
                </a>
              </li>
              <li>
                <a
                  href="#audience"
                  onClick={(e) => scrollToSection(e, "audience")}
                  className="hover:text-white transition-colors"
                >
                  Users
                </a>
              </li>
              <li>
                <a
                  href="#why"
                  onClick={(e) => scrollToSection(e, "why")}
                  className="hover:text-white transition-colors"
                >
                  Advantages
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab("docs");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Documentation
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Connect
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full transition-colors"
                title="GitHub"
              >
                <Code className="w-4 h-4" />
              </a>
              <a
                href="https://qds-secure.io"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full transition-colors"
                title="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://forum.qds-secure.io"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full transition-colors"
                title="Community Forum"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
            <a
              href="mailto:contact@qds-secure.io"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> contact@qds-secure.io
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center text-xs font-mono gap-4">
          <div>Quantum Digital Signature Threat Detection Engine © 2026</div>
          <div className="text-neutral-500">
            All rights reserved. Built with React & Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
}
