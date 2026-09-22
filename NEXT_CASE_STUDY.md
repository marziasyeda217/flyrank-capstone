# Next Case Study Roadmap & Implementation Plan

**Candidate:** Marzia Syeda  
**Project:** FlyRank Foundations Capstone  
**Featured Work:** EduWatch AI: Ghost Teacher Detection & Biometric Auditing  
**Primary Repository:** [https://github.com/marziasyeda217/EduWatch-AI-Ghost-Teacher-Detection-Platform](https://github.com/marziasyeda217/EduWatch-AI-Ghost-Teacher-Detection-Platform)  
**Scheduled Cadence:** Monthly Sprint Review · Recurring on October 2nd

---

## 1. Selected Project: EduWatch AI

EduWatch AI is an edge-computing computer vision platform engineered to combat public school teacher absenteeism and payroll fraud ("ghost teachers") in rural developing districts.

By combining on-device biometric inference, cryptographic tamper seals, and offline-first queue synchronization, EduWatch AI provides a reliable, transparent verification mechanism that operates effectively even under severe bandwidth constraints.

---

## 2. Four Concrete Execution Steps

### Step 1: Automated Attendance Ingestion Pipeline & Biometric Hashing
- **Action:** Transition the raw facial descriptor vector calculation from client-side JavaScript to an optimized WebAssembly (Wasm) or edge Python inference container.
- **Specification:** Ensure one-way hashing of biometric facial landmarks (Euclidean embedding vectors) using SHA-256 with salted public keys, guaranteeing zero retention of unencrypted photographic images on remote hardware.
- **Target Deadline:** October 2, 2026.

### Step 2: Zero-Trust Offline Log Reconciliation via Merkle Trees
- **Action:** Implement a decentralized Merkle DAG synchronization protocol for rural schools suffering multi-day electrical and internet blackouts.
- **Specification:** When an offline school unit reconnects, it transmits a signed Merkle root of queued attendance logs to the cloud Next.js backend, preventing rollback attacks or unauthorized retrospective tampering.
- **Target Deadline:** October 16, 2026.

### Step 3: Interactive Visual Telemetry & Audit Dispute Resolution UI
- **Action:** Build out an administrative dashboard in Next.js 14 utilizing Server Actions and WebSockets for real-time district overview.
- **Specification:** Provide district school inspectors with an evidence timeline, confidence rating intervals (98.4% baseline), and a one-click dispute escalation workflow for union representatives.
- **Target Deadline:** October 30, 2026.

### Step 4: Automated Synthetic Load & Anti-Spoofing Benchmark Suite
- **Action:** Construct an automated end-to-end testing pipeline utilizing Playwright and synthetic 3D facial mesh vectors.
- **Specification:** Validate liveness detection (blink detection, micro-movement tracking) against print attacks and digital display playback attacks, maintaining a 0% false-positive dispute rate.
- **Target Deadline:** November 14, 2026.

---

## 3. Recurring Calendar Reminder Evidence

To ensure continuous iterative review, a recurring monthly calendar reminder has been established across development sprints:

```text
================================================================================
CALENDAR REMINDER NOTIFICATION
Event:       EduWatch AI Architecture & Milestone Review
Frequency:   Monthly (Recurring on the 2nd of each month)
Next Date:   October 2, 2026 · 10:00 AM - 11:00 AM PKT
Organizer:   Marzia Syeda (marziasyeda217@gmail.com)
Attendees:   FlyRank Review Committee, Core Mentors
Agenda:
  1. Inspect Merkle tree log reconciliation latency
  2. Review pilot audit logs from 420 rural schools
  3. Validate WCAG 2.1 AA keyboard accessibility on telemetry dashboard
  4. Benchmark edge Wasm facial recognition inference times (<450ms)
Status:      CONFIRMED & SYNCED
================================================================================
```

---

*Documented by Marzia Syeda as part of FlyRank Foundations Capstone.*
