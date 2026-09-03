# Quantum-Inspired Cyber Threat Detection for Digital Signatures

## Overview
A software simulation framework for quantum-inspired cyber threat detection, specifically designed for teleportation-based Quantum Digital Signature (QDS) systems. 

As quantum computing threatens classical cryptographic systems (like RSA and ECC), QDS protocols offer information-theoretic security. This framework detects threats to digital signatures—such as forgery, impersonation, replay attacks, and quantum channel manipulation—using fundamental quantum principles and statistical analysis, without relying on artificial intelligence or machine learning techniques.

## Features
- **State Generation & Entanglement:** Simulates the creation of Bell states to establish entanglement between communicating parties.
- **Quantum Teleportation:** Securely transmits quantum information (the signature) across the simulated network.
- **Signature Verification:** Applies Pauli correction operations and performs projective measurements on received quantum states.
- **Deterministic Threat Detection:** Uses statistical thresholding based on measurement outcomes to flag attacks with mathematically explainable rules.
- **Information-Theoretic Security:** Neutralizes threats from quantum algorithms (e.g., Shor's algorithm) by grounding security in the laws of physics.

## Technical Stack
- **Simulation Framework:** Qiskit / Python
- **Core Concepts:** Pauli Eigenstates, Bell-State Entanglement, Projective Measurements, Statistical Hypothesis Testing

