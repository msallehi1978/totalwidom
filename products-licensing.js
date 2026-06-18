/* ──────────────────────────────────────────────────────────────
   Licensing & Editions data — sourced from the licensing sections
   merged into each product's file in Data/total wisdom.
   Consumed by product.html (rendered under the description).
   Each entry: { title, intro, glance[], editions[{n,d}], tips[] }
────────────────────────────────────────────────────────────── */
window.PRODUCT_LICENSING = {

  "vmware": {
    title: "VMware (by Broadcom) Licensing — Models & Options",
    intro: "Subscription-only across the portfolio, licensed per CPU core. We align licensing to your core counts, storage needs, and hybrid strategy, and co-term renewals for clean audits — with local/remote support across the UAE and GCC.",
    glance: [
      "Subscription-only model; most core infrastructure is licensed per CPU core.",
      "Two foundations: VMware Cloud Foundation (VCF) and vSphere Foundation (VVF), with add-ons for storage, networking, DR, and load balancing.",
      "Minimums: 16 cores per CPU for VCF/VVF; ~72 cores per order may apply via partners/OEMs.",
      "vSAN capacity included: VCF = 1.0 TiB per core; VVF = 0.25 TiB per core, with per-TiB add-ons."
    ],
    editions: [
      { n: "VMware Cloud Foundation (VCF) — Full-Stack Private Cloud", d: "Subscription per core (16-core min per CPU). Includes vSphere Enterprise Plus, vCenter, vSAN (1.0 TiB/core), NSX for VCF, Aria Suite Enterprise, Tanzu Kubernetes Grid, and SDDC Manager. Fit: enterprises standardizing on a full-stack SDDC." },
      { n: "VMware vSphere Foundation (VVF) — Core Virtualization", d: "Subscription per core (16-core min per CPU); 1/3/5-year terms. Includes vSphere Enterprise Plus, vCenter, Aria Suite Standard, Tanzu Kubernetes Grid, and 0.25 TiB/core vSAN. Fit: datacenters needing enterprise-class virtualization." },
      { n: "vSAN Capacity — Included & Add-On", d: "VVF 0.25 TiB and VCF 1.0 TiB of raw vSAN per licensed core, pooled across clusters; purchase additional per-TiB capacity beyond the entitlement." },
      { n: "NSX Networking & Security — Add-On", d: "Add-on subscription aligned to VCF/VVF for micro-segmentation, overlay networking, and security-centric architectures." },
      { n: "VMware Avi Load Balancer — Add-On", d: "Add-on subscription providing L4–L7 application delivery and global server load balancing." },
      { n: "VMware Live Recovery — Add-On", d: "Add-on subscription for DR orchestration and ransomware-resilient recovery of vSphere/VCF estates." },
      { n: "VDI — Omnissa Horizon with vSphere Foundation", d: "Horizon SaaS/Term bundled with vSphere Foundation for VDI (vSphere, vCenter, vSAN). Named or Concurrent User; 1–5 year terms." }
    ],
    tips: [
      "Co-term all subscriptions (VVF/VCF/vSAN/NSX/Avi/DR) to a single renewal date.",
      "Validate core counts (incl. disabled cores) and observe the 16-core-per-CPU minimum.",
      "Right-size vSAN TiB: start with included entitlements and add per-TiB only where needed."
    ]
  },

  "kaspersky": {
    title: "Kaspersky Licensing — Models & Options",
    intro: "We align licensing models to your environment, co-term renewals for clean audits, and provide local/remote support across the UAE and GCC.",
    glance: [
      "Subscription terms of 12 / 24 / 36 months are common; Perpetual + annual Maintenance exists for selected SKUs/regions.",
      "Counting metrics vary: per device/endpoint, per server/VM, per user/mailbox, or per node for industrial environments.",
      "Management & activation via Kaspersky Security Center (on-prem or cloud) and Business Hub."
    ],
    editions: [
      { n: "Endpoint Security for Business (Select / Advanced)", d: "Subscription or Perpetual + Maintenance, per protected endpoint. Multi-layered protection with application/device/web control; Advanced adds encryption and systems management." },
      { n: "Endpoint Detection & Response (Optimum / Expert)", d: "Subscription per endpoint; threat hunting, incident investigation, IOC scanning, and automated response on top of KESB." },
      { n: "Hybrid Cloud Security", d: "Subscription per server or per VM/workload; protects Windows/Linux servers, virtualized workloads, and containers with light-agent/agentless options." },
      { n: "Security for Mail / Microsoft 365", d: "Subscription per user/mailbox; anti-phishing, anti-spam, and malware control across Exchange Online, OneDrive, SharePoint, and Teams." },
      { n: "Security for Internet Gateway", d: "Subscription per protected user; HTTP/HTTPS scanning, URL filtering, and gateway policy enforcement." },
      { n: "Industrial CyberSecurity (KICS)", d: "Subscription per node (KICS for Nodes) and per sensor/throughput (KICS for Networks); endpoint hardening and non-intrusive OT network visibility." },
      { n: "Endpoint Security Cloud (SMB)", d: "Subscription per user with device limits; cloud-managed protection for PCs and mobiles via Business Hub." }
    ],
    tips: [
      "Co-term all subscriptions to a single renewal date.",
      "Right-size endpoints/users/servers from actual inventories and mailbox definitions.",
      "Keep Kaspersky portal contacts current for entitlements, downloads, and cases."
    ]
  },

  "mdaemon": {
    title: "MDaemon Licensing — Models & Options",
    intro: "We align licensing to your user counts and mail flow, co-term renewals for clean audits, and provide local/remote support across the UAE and GCC.",
    glance: [
      "Annual subscription terms of 1 / 2 / 3 years across most SKUs (new, renewal, add users).",
      "Primary metric: per user/mailbox (sizes from 5 up to 2500+ users).",
      "Activation via license codes/files in the product UI; renew via Software License Renewal coverage."
    ],
    editions: [
      { n: "MDaemon Email Server", d: "Annual license (1/2/3 yrs) per users/mailboxes (50–2500+). Full Windows mail server with webmail/collaboration. Fit: on-prem alternative to Exchange/Microsoft 365." },
      { n: "ActiveSync for MDaemon", d: "Separately licensed subscription per user (5–2500); native sync of mail, calendars, contacts, and tasks to EAS devices and Outlook." },
      { n: "MDaemon Connector for Outlook", d: "Subscription per user (5–2500); Outlook groupware — calendars with free/busy, address books, tasks, notes, and shared folders." },
      { n: "SecurityGateway for Email Servers", d: "Subscription per user (on-prem 1/2/3-yr; hosted monthly tiers); standalone secure gateway for any platform with anti-spam/malware, DLP, and policy." },
      { n: "Software License Renewal Coverage", d: "Active coverage gives all major/minor updates and support eligibility; choose 1/2/3-year and co-term across products." }
    ],
    tips: [
      "Co-term renewals across products to simplify budgeting and compliance.",
      "Right-size user/mailbox counts (include shared/functional addresses if required).",
      "Keep license contacts current for entitlements, downloads, and support cases."
    ]
  },

  "microsoft": {
    title: "Microsoft Licensing — Models & Options",
    intro: "We align licensing to your workloads and user profiles, co-term renewals for clean audits, and provide local/remote support across the UAE and GCC.",
    glance: [
      "Subscriptions (monthly/annual) for cloud services (Microsoft 365, Dynamics 365, Intune, Defender).",
      "Perpetual licenses (with optional Software Assurance) for selected server products (Windows Server, SQL Server).",
      "Azure is consumption-based (PAYG) with 1/3-year reservations and Azure Hybrid Benefit.",
      "Managed via M365 Admin Center / Azure Portal / VLSC depending on SKU and program (CSP, EA)."
    ],
    editions: [
      { n: "Microsoft 365 for Business (Basic/Standard/Premium)", d: "Subscription per user; Exchange Online, OneDrive/SharePoint, Teams; desktop apps in Standard/Premium; Premium adds Defender for Business and Intune." },
      { n: "Microsoft 365 for Enterprise (F3/E3/E5)", d: "Subscription per user; enterprise productivity, Teams, Defender, Entra ID, and compliance (Purview); E5 adds advanced security, compliance, and voice." },
      { n: "Office 365 Enterprise (E1/E3/E5)", d: "Subscription per user; productivity-focused (email, Office apps, collaboration); security via add-ons." },
      { n: "Windows Server (Standard/Datacenter)", d: "Per-core + CALs (RDS CALs for remote desktop); Datacenter adds unlimited virtualization rights." },
      { n: "SQL Server (Standard/Enterprise)", d: "Per Core or Server + CAL; Enterprise adds advanced HA/BI and greater virtualization rights; Software Assurance adds license mobility." },
      { n: "Windows 11/10 Enterprise (E3/E5 & VDA)", d: "Subscription per user (E3/E5) or VDA for non-primary devices; advanced security and virtualization rights." },
      { n: "Intune & EMS (E3/E5)", d: "Subscription per user; MDM/MAM, compliance, and conditional access; EMS adds AIP/Purview and Entra ID P1/P2." },
      { n: "Microsoft Defender Plans", d: "Subscription per user/device; Defender for Endpoint, Office 365, Identity, and Cloud Apps; included in M365 E5." },
      { n: "Azure", d: "Consumption-based (PAYG) with Reserved Instances (1/3-yr) and Savings Plans; Azure Hybrid Benefit reduces compute/SQL cost." },
      { n: "Dynamics 365", d: "Subscription per user/app; Sales, Customer Service, Field Service, Finance, Supply Chain, and Business Central." }
    ],
    tips: [
      "Right-size user, device, and core counts; align add-ons (Defender/Intune) to actual needs.",
      "Choose the appropriate program (CSP/EA) and keep tenant/admin contacts current."
    ]
  },

  "sophos": {
    title: "Sophos XGS Licensing — Models & Options",
    intro: "We align licensing to your environment, co-term renewals for clean audits, and provide local/remote support across the UAE and GCC.",
    glance: [
      "Subscription terms: 12 / 24 / 36 months (device-based for XGS appliances).",
      "Base License ships with XGS appliances; advanced protections require subscriptions.",
      "Support plans (Enhanced / Enhanced Plus) available standalone or in bundles."
    ],
    editions: [
      { n: "Base License (included with XGS)", d: "Stateful firewall, SSL/IPsec VPN, wireless, HA, RED, SD-WAN, and reporting on Xstream architecture. At least one security subscription is required for active enforcement." },
      { n: "Xstream Protection Bundle", d: "Network Protection + Web Protection + Zero-Day Protection + Central Orchestration + DNS Protection + Enhanced Support. Fit: next-gen, high-performance deployments." },
      { n: "Standard Protection Bundle", d: "Network Protection + Web Protection + Enhanced Support. Fit: foundational security for branch and HQ." },
      { n: "Individual (Modular) Subscriptions", d: "Network Protection (IPS, app control), Web Protection (filtering, TLS inspection), Zero-Day Protection (ML/sandbox), Central Orchestration (SD-WAN/VPN), and DNS Protection." },
      { n: "Support (Enhanced / Enhanced Plus)", d: "Enhanced — standard support with updates; Enhanced Plus — 24/7 support, advanced RMA, and remote consult hours." },
      { n: "MSP Flex", d: "Monthly subscription management for eligible Sophos subscriptions; ideal for MSPs needing month-to-month flexibility." }
    ],
    tips: [
      "Note: Sophos XG Series reached End-of-Life on March 31, 2025 — standardize on XGS for new deployments.",
      "Co-term all subscriptions to a single renewal date.",
      "Right-size device counts and throughput; review licensed features vs actual usage."
    ]
  },

  "symantec": {
    title: "Symantec (Broadcom) Licensing — Clear Options",
    intro: "We map Symantec licensing to your environment and co-term renewals for clean, auditable operations across the UAE and GCC.",
    glance: [
      "Models: Subscription (term-based) and, for selected products, Perpetual + annual Maintenance.",
      "Managed via the Broadcom Support Portal with your registered Site ID — keys, entitlements, and renewals in one place."
    ],
    editions: [
      { n: "Symantec Endpoint Security (SES) — Cloud", d: "Subscription (12/24/36 mo), seat-based per managed device; editions SESC (Complete) and SESE (Enterprise). Fit: hybrid/cloud estates needing fast rollout and central control." },
      { n: "Symantec Endpoint Protection (SEP) — On-prem", d: "Perpetual + Maintenance (or Subscription); per endpoint/agent. Fit: environments requiring on-prem control and gradual cloud adoption." },
      { n: "Email Security.cloud", d: "Subscription per user for core filtering; add-ons for Policy-Based Encryption, Archiving, and ATP. Fit: Microsoft 365/Exchange estates." },
      { n: "Data Loss Prevention (DLP)", d: "Perpetual + Maintenance or Subscription; per Managed User or Device across Endpoint/Discover/Monitor. Fit: regulated sectors with strict data governance." }
    ],
    tips: [
      "Co-term all subscriptions to one renewal date.",
      "Right-size seats/users by actual enrollment and the official 'licensed user' definition.",
      "Keep your Site ID current for entitlements, downloads, and support cases."
    ]
  },

  "tenable": {
    title: "Tenable Licensing — Models & Options",
    intro: "We align licensing to your asset mix (IT, cloud, web apps, OT, identities), co-term renewals for clean audits, and provide local/remote support across the UAE and GCC.",
    glance: [
      "Subscription terms typically 12 / 24 / 36 months across the portfolio.",
      "Metrics vary: per asset (hosts/IPs), per web app, per user/identity, per cloud resource, or per OT node/sensor/site.",
      "Managed via Tenable tenants (Tenable One, Tenable.io), on-prem consoles (Tenable.sc, OT), and Nessus keys."
    ],
    editions: [
      { n: "Tenable One (Exposure Management)", d: "Subscription bundling VM, WAS, ASM, Identity, Cloud, and Lumin; business-aligned asset tiers. Fit: a unified, risk-based program with VPR prioritization." },
      { n: "Vulnerability Management (Tenable.io)", d: "Subscription per asset (host/IP); cloud-hosted VM with scanners/agents, dashboards, and reporting." },
      { n: "Nessus (Expert / Professional)", d: "Subscription per installation/node; standalone assessment scanner with IT, cloud, and configuration-audit templates." },
      { n: "Tenable.sc (Security Center)", d: "Subscription per managed asset/IP; on-prem VM with distributed scanners. Fit: regulated or air-gapped environments." },
      { n: "Tenable OT Security", d: "Subscription per OT node and/or sensor/site; passive discovery, asset inventory, and protocol-aware risk analytics." },
      { n: "Tenable Cloud Security (CNAPP)", d: "Subscription by cloud resources/identities; posture management and identity risk across AWS/Azure/GCP." },
      { n: "Attack Surface Management (ASM)", d: "Subscription by discovered internet-facing assets/domains; continuous external discovery integrated with VM workflows." },
      { n: "Identity Exposure (Active Directory)", d: "Subscription aligned to AD user objects; misconfiguration discovery, attack-path analysis, and exposure monitoring." },
      { n: "Web App Scanning (WAS)", d: "Subscription per web application/scan target; DAST for modern web apps and APIs with CI/CD integration." }
    ],
    tips: [
      "Co-term all subscriptions (Tenable One / VM / WAS / OT / Cloud) to one renewal date.",
      "Right-size asset counts across hosts, cloud resources, web apps, identities, and OT nodes.",
      "Keep tenant/admin contacts current for entitlements, keys, and support."
    ]
  },

  "veritas": {
    title: "Veritas Licensing — Clear Options",
    intro: "We align licensing models to your workloads and co-term renewals for clean, auditable operations across the UAE and GCC.",
    glance: [
      "Subscription (term-based) is standard across most portfolios; Perpetual + Maintenance remains for selected products/regions.",
      "Managed via the Veritas Entitlement Management System (VEMS) — entitlements, keys, contacts, and renewals in one place."
    ],
    editions: [
      { n: "NetBackup", d: "Subscription (capacity) or Perpetual + Maintenance; primary metric Front-End Terabytes (FETB). Cloud Marketplace and BYOL options for public cloud." },
      { n: "NetBackup Appliances", d: "Subscription bundles software with appliance platforms; integrated storage and MSDP with optional cloud-tier and Recovery Vault." },
      { n: "Backup Exec", d: "Subscription (capacity per FETB) with support included; simplifies coverage for VMs, applications, and cloud targets." },
      { n: "Enterprise Vault (On-Prem) & EV.cloud", d: "On-prem Subscription or Perpetual + Maintenance (per mailbox/user or archived TB); EV.cloud Subscription per user with retention tiers." },
      { n: "InfoScale (Availability/Storage)", d: "Subscription per core with tiers (Foundation/Availability/Enterprise); HA/DR and software-defined storage." },
      { n: "Veritas Alta (Cloud Portfolio)", d: "Subscription; Alta Data Protection uses capacity metrics, Recovery Vault is consumption-based per GB-month, and NetBackup SaaS Protection is per user/workload or capacity." }
    ],
    tips: [
      "Right-size FETB, user/mailbox counts, and per-core metrics from real inventories.",
      "Keep VEMS contacts current for entitlements, downloads, and support."
    ]
  },

  "fortinet": {
    title: "FortiGate Licensing — Models & Options",
    intro: "We align licensing to your environment, co-term renewals for clean audits, and provide local/remote support across the UAE and GCC.",
    glance: [
      "FortiOS and core NGFW ship with the appliance (Base); SD-WAN/VPN are built-in. Advanced protections need FortiGuard subscriptions.",
      "FortiGuard AI-Powered Security Services come in tiered bundles: ATP → UTP → Enterprise (ENT).",
      "FortiCare Support is per-device (Essential, Premium, Elite)."
    ],
    editions: [
      { n: "Base (included with appliances)", d: "NGFW policy engine, routing, SSL/IPsec VPN, SD-WAN, HA, and logging under FortiOS. Perpetual on hardware; term on virtual/cloud." },
      { n: "Advanced Threat Protection (ATP)", d: "Subscription (12/24/36 mo); core network/file security (IPS, AV, app control). Fit: branch/HQ where web filtering is handled elsewhere." },
      { n: "Unified Threat Protection (UTP)", d: "ATP + web protection (URL/DNS filtering) for complete UTM coverage. Fit: most enterprises standardize here." },
      { n: "Enterprise (ENT)", d: "UTP + advanced services (inline AI malware prevention, CASB, DLP) + FortiCare Premium. Fit: security-sensitive networks needing the broadest coverage." },
      { n: "360 Protection", d: "Security services + FortiManager Cloud + FortiAnalyzer Cloud + support; centralized operations and analytics for multi-site estates." },
      { n: "FortiCare Support (per device)", d: "Essential (base), Premium (24×7×365, faster SLAs), and Elite (highest SLAs, accelerated resolution, E-EoES options)." },
      { n: "FortiSASE Expansion (optional)", d: "Starter pack of FortiSASE users + Secure Private Access connectivity; supported on G-series (120G+) with 10/50/100-user kits." }
    ],
    tips: [
      "Co-term all subscriptions (UTP/ENT/360) to a single renewal date.",
      "Right-size per-device bundles vs a-la-carte add-ons; choose FortiCare tier by site criticality.",
      "If adopting SASE, start with the FortiGate SASE expansion and scale seats as adoption grows."
    ]
  }
};
