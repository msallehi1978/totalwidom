/* ──────────────────────────────────────────────────────────────
   Product catalog data — sourced from Data/total wisdom (+ uni/IFW
   docs for the CYRUS line). Consumed by product.html.
   Each entry: { name, category, logo, lead, body[], solutions[{n,d}],
                 applications[], photos[{src,alt}], note }
────────────────────────────────────────────────────────────── */
window.PRODUCTS = {

  /* ── CYRUS flagship (Total Wisdom) ── */
  "cyrus-unidirectional": {
    name: "CYRUS Unidirectional Gateway",
    category: "OT / ICS Security Solutions",
    logo: "assets/cyrus-logo.png",
    lead: "The CYRUS Unidirectional Gateway is a next-generation data diode solution, engineered to provide absolute data security combined with exceptional high-performance transfer capabilities.",
    body: [
      "Unlike traditional firewalls, CYRUS ensures that information flows in a strictly one-way direction — from isolated networks to IT networks — completely eliminating the risk of external cyber threats.",
      "With its high throughput and protocol-level intelligence, CYRUS is designed to safeguard critical infrastructures, sensitive government environments, financial networks, and enterprise systems. Customers benefit from seamless integration, unmatched reliability, and guaranteed isolation security."
    ],
    solutions: [
      { n: "High Performance", d: "Large-scale data transfers at speeds up to 10 Gbps, transmitting multi-gigabyte files within seconds." },
      { n: "Absolute One-Way Security", d: "Hardware-enforced data flow guarantees no reverse communication is possible, preventing operator errors or insider sabotage." },
      { n: "Protocol-Level Control", d: "Blocks any unauthorized protocol before it enters the device — only approved traffic is allowed to pass." },
      { n: "High Availability (HA)", d: "Modular diodes and link aggregation increase bandwidth and keep communication alive even if a diode fails." },
      { n: "Multi-Protocol Handling", d: "Simultaneous Database, Syslog, and File Transfer support (FTP, TFTP, SFTP, FTPS, TLS, UDP, TCP)." },
      { n: "Future Expandability", d: "Additional protocols can be integrated based on customer requirements and joint technical sessions." }
    ],
    applications: [
      "Critical Infrastructure Protection — energy, utilities, and transportation requiring strict isolation",
      "Government & Defense — secure communication in classified environments",
      "Financial Institutions — secure database replication and log transmission",
      "Industrial Enterprises — protect isolated OT/ICS while exchanging data with IT",
      "SIEM & Monitoring — reliable one-way Syslog transfer without exposing the source network"
    ],
    photos: [
      { src: "assets/uni-general.png", alt: "CYRUS Unidirectional Gateway directing data one-way from OT to IT" },
      { src: "assets/uni-database.png", alt: "One-way database replication to an isolated zone" },
      { src: "assets/uni-syslog.png", alt: "One-way Syslog transfer to SIEM" },
      { src: "assets/uni-filetransfer.png", alt: "Secure one-way file transfer" }
    ],
    note: "True hardware-enforced one-way communication, protocol-level filtering, and high bandwidth — ensuring business continuity and uncompromised data security."
  },

  "cyrus-ics-firewall": {
    name: "CYRUS Industrial Firewall",
    category: "OT / ICS Security Solutions",
    logo: "assets/cyrus-logo.png",
    lead: "The CYRUS Industrial Firewall is a state-of-the-art, locally developed solution designed to protect industrial networks and critical infrastructures.",
    body: [
      "Combining rugged hardware, a secure Real-Time OS, and advanced software intelligence, CYRUS delivers multi-layered network security, ensuring maximum reliability and resilience in sensitive environments.",
      "Its integrated engine performs deep inspection of industrial communication traffic, industrial VPN, industrial IPS, and vulnerability-signature detection — comprehensively protecting the control network and helping you meet NERC-CIP requirements and ISA/IEC 62443 standards."
    ],
    solutions: [
      { n: "Industrial Protocol Support", d: "Modbus TCP/RTU, DNP3 TCP/Serial, IEC 60870-5-101 & 104, OPC DA/UA, S7-COM/S7-COM+, PROFIBUS & PROFINET." },
      { n: "Firewalling & Deep Packet Inspection", d: "Real-time inspection and filtering of Layer 2 and Layer 3 industrial protocols, with DPI for advanced threats." },
      { n: "Serial-to-TCP/IP Conversion", d: "Integrate legacy serial systems with modern IT networks while retaining full firewall and IDS protection." },
      { n: "Rugged Hardware", d: "Fanless design, -40°C to +75°C operating range, IP40, redundant power supplies, and bypass ports for non-stop operation." },
      { n: "Secure Real-Time OS", d: "Lightweight RTOS minimizes the attack surface; a simple, intuitive interface speeds configuration and monitoring." },
      { n: "Patented Innovation", d: "Patented under WO2024161187A1, combining L2/L3 protocol control, DPI, firewalling, and serial-to-TCP/IP conversion. HA supported." }
    ],
    applications: [
      "Industrial networks and automation (ICS / SCADA)",
      "Critical infrastructures and power plants",
      "Banking and financial networks",
      "Government and sensitive organizations",
      "Oil, gas, energy, and transportation industries"
    ],
    photos: [
      { src: "assets/ifw-1.png", alt: "CYRUS Industrial Firewall deep packet inspection between enterprise and industrial networks" },
      { src: "assets/ifw-2.png", alt: "CYRUS firewall industrial protocol control" },
      { src: "assets/ifw-3.png", alt: "CYRUS firewall deployment scenario" },
      { src: "assets/ifw-4.png", alt: "CYRUS firewall network architecture" },
      { src: "assets/ifw-5.png", alt: "CYRUS firewall rugged hardware" },
      { src: "assets/ifw-6.png", alt: "CYRUS firewall management" }
    ],
    note: "Recognized as one of the most complete industrial firewalls on the market — delivering complete visibility, control, and protection for industrial networks."
  },

  "cyrus-data-diode": {
    name: "CYRUS Data Diode",
    category: "OT / ICS Security Solutions",
    logo: "assets/cyrus-logo.png",
    lead: "The CYRUS Data Diode is a hardware device that makes the connection between two networks strictly one-way, with unidirectional communication guaranteed by hardware.",
    body: [
      "In sensitive industrial networks it is sometimes necessary to make communication between two networks one-way. With a data diode on the line, two-way communication is physically impossible — eliminating the risk of data flowing in the wrong direction.",
      "Designed to operate in extremely harsh environments, CYRUS fiber-system data diodes enable unidirectional transfer over fiber cable with hardware separation to guarantee security. No extra software is needed for one-way-compatible protocols such as UDP stream/broadcast, Syslog, NTP, and SNMP traps."
    ],
    solutions: [
      { n: "Hardware-Guaranteed One-Way", d: "A purely hardware simplex connection between two networks — no reverse path is possible." },
      { n: "Galvanic Separation", d: "Fiber-optic links provide galvanic isolation between networks while transparently forwarding data." },
      { n: "Ultra-Low Latency", d: "Total latency ≤ 384 ns for 1000Base-T and ≤ 361 ns for 100Base-TX." },
      { n: "Rugged & Robust", d: "Operates up to 125°C ambient and exceeds 8-kV IEC 61000-4-2 ESD protection." },
      { n: "Media Support & Conversion", d: "Copper and fiber; 1000Base-X/T, 100Base-FX/TX, with copper-to-fiber conversion." },
      { n: "Standards Compliant", d: "Time-Sensitive Network (TSN) compliant, IEEE 1588 support, and Jumbo Frame support." }
    ],
    photos: [
      { src: "assets/uni-general.png", alt: "Hardware-enforced one-way data flow between OT and IT" },
      { src: "assets/uni-database.png", alt: "One-way database transfer to an isolated zone" }
    ],
    note: "For software-rich environments, the CYRUS Unidirectional Gateway is a more evolved solution — combining hardware and software to overcome the limitations of a pure data diode."
  },

  /* ── Partner products (Data/total wisdom) ── */
  "vmware": {
    name: "VMware",
    category: "Data Center Hardware & Virtualization",
    logo: "assets/VMware-Logo.png",
    lead: "VMware is the global pioneer in virtualization, cloud infrastructure, and digital workspace technologies, empowering enterprises to reduce costs, improve efficiency, and accelerate innovation.",
    body: [
      "From data center modernization to multi-cloud strategies and software-defined networking, VMware enables organizations to transform their IT operations with flexibility and scale.",
      "As an official VMware partner in the UAE and GCC, Total Wisdom Technology LLC delivers more than just licenses. We provide consultancy, solution design, and deployment services to ensure VMware technologies are seamlessly integrated into enterprise environments.",
      "Our certified VMware experts specialize in server, network, and desktop virtualization, as well as hybrid cloud deployments. With local technical support and 24/7 assistance, we help organizations maximize performance while maintaining high availability and security."
    ],
    solutions: [
      { n: "VMware vSphere & vCenter", d: "Industry-leading server virtualization platform." },
      { n: "VMware Horizon", d: "Desktop and application virtualization for secure remote work." },
      { n: "VMware NSX", d: "Software-defined networking and micro-segmentation for enhanced security." },
      { n: "VMware Cloud Foundation", d: "Hybrid cloud infrastructure for digital transformation." }
    ],
    photos: [],
    note: "Partnering with Total Wisdom as your VMware representative in the UAE and GCC means accessing world-class virtualization and cloud technologies, reinforced with regional expertise and dedicated support."
  },

  "veritas": {
    name: "Veritas",
    category: "Data Backup & Disaster Recovery",
    logo: "assets/Veritas-Logo.jpg",
    lead: "Veritas is a global leader in data protection, backup, and information management, trusted by enterprises worldwide to keep their mission-critical data available, secure, and compliant.",
    body: [
      "With decades of innovation, Veritas solutions ensure business continuity, disaster recovery, and governance across on-premise, hybrid, and cloud environments.",
      "As an official Veritas partner in the UAE and GCC, Total Wisdom Technology LLC empowers enterprises to protect and optimize their data with tailored consultancy, solution design, and implementation services — going beyond licensing with custom proposals and professional support.",
      "Our certified Veritas specialists bring deep expertise in backup architecture, cloud integration, and compliance-driven data protection, ensuring customers can recover fast and stay resilient against cyber threats, human errors, or natural disasters."
    ],
    solutions: [
      { n: "Veritas NetBackup", d: "Enterprise-grade backup and recovery for hybrid and multi-cloud environments." },
      { n: "Veritas Backup Exec", d: "Flexible data protection for SMBs and mid-size enterprises." },
      { n: "Enterprise Vault", d: "Archiving and eDiscovery for compliance and data governance." },
      { n: "InfoScale", d: "High availability and disaster recovery for mission-critical applications." }
    ],
    photos: [],
    note: "With Total Wisdom as your Veritas representative in the UAE and GCC, you gain official access to world-class data protection plus the local expertise to keep your data secure, compliant, and always available."
  },

  "kaspersky": {
    name: "Kaspersky",
    category: "Endpoint & User Protection",
    logo: "assets/kaspersky-logo.jpg",
    lead: "Kaspersky is a globally recognized cybersecurity company, trusted by millions of users and thousands of enterprises worldwide for advanced endpoint protection and threat intelligence.",
    body: [
      "Known for combining innovation with deep research, Kaspersky defends organizations against malware, ransomware, and advanced persistent threats.",
      "As an official Kaspersky partner in the UAE and GCC, Total Wisdom Technology LLC offers expert consultancy, customized proposals, and full implementation services — ensuring Kaspersky technologies are optimally deployed and aligned with each organization's security requirements.",
      "Our certified Kaspersky engineers deliver professional local and remote support, helping enterprises of every size maintain a resilient security posture while meeting compliance and operational demands."
    ],
    solutions: [
      { n: "Endpoint Security for Business", d: "Multi-layered endpoint protection with AI-driven threat detection." },
      { n: "Kaspersky EDR", d: "Advanced endpoint detection, analysis, and incident response." },
      { n: "Hybrid Cloud Security", d: "Protection for workloads across private and public clouds." },
      { n: "Threat Intelligence Services", d: "Real-time global insights against emerging threats." }
    ],
    photos: [],
    note: "With Total Wisdom as your Kaspersky representative in the UAE and GCC, you benefit from official access to world-class cybersecurity, combined with regional expertise and dedicated technical support."
  },

  "cisco": {
    name: "Cisco",
    category: "Data Center Hardware & Virtualization",
    logo: "assets/Cisco_logo.png",
    lead: "Cisco is recognized worldwide as the leading provider of enterprise networking, cloud, and security solutions, powering digital transformation across every industry.",
    body: [
      "With decades of innovation, Cisco's advanced routers, switches, collaboration platforms, and enterprise security technologies are trusted by organizations everywhere.",
      "As an official Cisco partner in the UAE and GCC, Total Wisdom Technology LLC delivers world-class Cisco products together with tailored consultancy, solution design, and professional deployment services.",
      "Our team of certified Cisco engineers and security specialists ensures every project — from data center infrastructure to secure SD-WAN deployments — is implemented with maximum efficiency and reliability."
    ],
    solutions: [
      { n: "Catalyst & Nexus Switches", d: "High-performance enterprise networking." },
      { n: "Firepower & ASA Firewalls", d: "Advanced enterprise security." },
      { n: "Webex & Collaboration Suite", d: "Modern communication and collaboration." },
      { n: "Cisco SD-WAN", d: "Secure, intelligent connectivity for distributed enterprises." }
    ],
    photos: [],
    note: "With Total Wisdom, organizations in the UAE and GCC benefit from official Cisco representation, local expertise, and 24/7 technical support."
  },

  "symantec": {
    name: "Symantec",
    category: "Endpoint & User Protection",
    logo: "assets/Symantec-logo.webp",
    lead: "Symantec, a Broadcom company, is one of the most trusted names in enterprise cybersecurity and advanced threat protection.",
    body: [
      "With decades of experience, Symantec delivers cutting-edge solutions in endpoint security, data protection, and threat intelligence that safeguard organizations against sophisticated cyberattacks and compliance risks.",
      "As an official Symantec partner in the UAE and GCC, Total Wisdom Technology LLC brings consultancy, tailored proposals, and seamless deployment of Symantec's security solutions for enterprises of all sizes.",
      "Our certified specialists have deep expertise in designing and supporting Symantec enterprise environments, ensuring proactive defense, minimal downtime, and a robust security posture with 24/7 professional support."
    ],
    solutions: [
      { n: "Endpoint Protection (SEP & SEPM)", d: "Comprehensive protection for desktops, laptops, and servers." },
      { n: "Email Security.cloud", d: "Advanced protection against phishing and spam." },
      { n: "Data Loss Prevention (DLP)", d: "Safeguarding sensitive data and assuring compliance." },
      { n: "Cloud Workload Protection", d: "Securing applications and workloads across hybrid and cloud." }
    ],
    photos: [],
    note: "With Total Wisdom as your Symantec representative in the UAE and GCC, you gain official access to Broadcom's world-class technologies and the local expertise for long-term security success."
  },

  "sophos": {
    name: "Sophos",
    category: "IT Firewall & Email Protection",
    logo: "assets/Sophos-logo.png",
    lead: "Sophos is a global leader in next-generation cybersecurity, combining endpoint, network, email, and cloud security into a unified, AI-powered platform.",
    body: [
      "With flagship technologies like Intercept X and the XGS Firewall series, Sophos helps organizations of all sizes defend against ransomware, phishing, and advanced cyberattacks.",
      "As an official Sophos partner in the UAE and GCC, Total Wisdom Technology LLC delivers consultancy, solution design, and professional deployment services to ensure Sophos technologies are implemented effectively.",
      "Our certified Sophos engineers specialize in next-gen firewall deployments, endpoint protection rollouts, and centralized cloud-based management — backed by local expertise and 24/7 support."
    ],
    solutions: [
      { n: "Sophos XGS Firewall", d: "Next-generation firewall powered by Xstream architecture for high performance and advanced protection." },
      { n: "Intercept X Endpoint", d: "Industry-leading endpoint protection and anti-ransomware defense." },
      { n: "Sophos Central", d: "Unified cloud-based platform to manage all Sophos solutions." },
      { n: "Email & Web Security", d: "Comprehensive protection against phishing, malware, and data loss." },
      { n: "Mobile Security", d: "Securing sensitive business data across mobile devices." }
    ],
    photos: [],
    note: "With Total Wisdom as your Sophos representative in the UAE and GCC, you gain official access to cutting-edge cybersecurity combined with regional expertise and dedicated technical support."
  },

  "microsoft": {
    name: "Microsoft",
    category: "Network Infrastructure & Security",
    logo: "assets/Microsoft_logo.png",
    lead: "Microsoft offers one of the most comprehensive technology portfolios in the world, forming the backbone of modern digital infrastructure.",
    body: [
      "Its solutions span operating systems, Office applications, Azure cloud services, Microsoft 365 collaboration tools, and enterprise platforms like Dynamics 365.",
      "As an official Microsoft partner in the UAE and GCC, Total Wisdom Technology LLC focuses on delivering genuine Microsoft licenses and professional technical support, so clients benefit from fully authentic products with services that go far beyond simple license supply.",
      "Our certified Microsoft specialists assist with license management, installation and activation, Microsoft 365 migration, Azure deployment, and ongoing technical support — combining global technologies with localized expertise."
    ],
    solutions: [
      { n: "Windows Server & Active Directory", d: "Core infrastructure for enterprise IT." },
      { n: "Microsoft 365 Suite", d: "Cloud-based productivity and collaboration tools." },
      { n: "Azure Cloud Platform", d: "Secure, scalable, and intelligent cloud services." },
      { n: "Dynamics 365", d: "ERP and CRM solutions for digital growth." },
      { n: "Microsoft Security Solutions", d: "Identity, compliance, and threat protection." }
    ],
    photos: [],
    note: "With Total Wisdom as your Microsoft partner in the UAE and GCC, you gain genuine licensing plus dedicated local support — a combination offered by very few providers in the region."
  },

  "mdaemon": {
    name: "MDaemon",
    category: "Network Infrastructure & Security",
    logo: "assets/MDaemon_Logo.png",
    lead: "MDaemon Technologies delivers a proven, Windows-based email server with integrated webmail and collaboration, plus SecurityGateway for powerful, server-agnostic email security.",
    body: [
      "Organizations choose MDaemon for its simplicity, reliability, and rich, standards-based feature set — from mobile sync to encryption — without the overhead of heavyweight groupware stacks.",
      "As an MDaemon partner in the UAE and GCC, Total Wisdom Technology LLC provides consultancy, solution design, and end-to-end deployment, aligning configurations with your compliance, availability, and integration requirements.",
      "Our MDaemon-certified specialists support on-prem, hybrid, and hosted rollouts with localized 24/7 support for long-term operational confidence."
    ],
    solutions: [
      { n: "MDaemon Email Server", d: "Full IMAP/POP/SMTP server with webmail for email, calendars, contacts, tasks, notes, and shared folders." },
      { n: "ActiveSync for MDaemon", d: "Native mobile and Outlook synchronization for mail, calendar, contacts, and tasks." },
      { n: "MDaemon Connector for Outlook", d: "Outlook collaboration: shared calendars/contacts/tasks/notes and public folders." },
      { n: "SecurityGateway", d: "Stand-alone secure email gateway for any platform with anti-spam/malware, DLP, and policy enforcement." },
      { n: "Authentication & Encryption", d: "SPF, DKIM, DMARC controls plus OpenPGP (MDPGP) server-side encryption and TLS." }
    ],
    photos: [],
    note: "With Total Wisdom, organizations across the UAE and GCC get official access to MDaemon's email and gateway technologies plus regional expertise and round-the-clock support."
  },

  "fortinet": {
    name: "Fortinet",
    category: "IT Firewall & Email Protection",
    logo: "assets/Fortinet_logo.svg",
    lead: "Fortinet is a global leader in network security and secure networking, built around FortiGate Next-Generation Firewalls powered by FortiOS.",
    body: [
      "Fortinet converges security and networking — NGFW, advanced routing, ZTNA, SD-WAN, and SASE — to protect data centers, branches, clouds, and remote users with consistent policy and performance.",
      "As an official Fortinet partner in the UAE and GCC, Total Wisdom Technology LLC provides direct access to Fortinet technologies alongside consultancy, solution design, and end-to-end deployment aligned to business and compliance requirements.",
      "Our Fortinet-certified engineers deliver local and remote 24/7 support, centralized operations with FortiManager and FortiAnalyzer, and seamless integration across the Fortinet Security Fabric."
    ],
    solutions: [
      { n: "FortiGate NGFW", d: "High-performance next-gen firewalling across physical, virtual, and cloud form factors." },
      { n: "Fortinet Secure SD-WAN", d: "Converged SD-WAN with NGFW, advanced routing, and ZTNA in one OS." },
      { n: "FortiSASE", d: "Cloud-delivered security extending protection to the hybrid workforce." },
      { n: "FortiManager & FortiAnalyzer", d: "Centralized management, analytics, and automation for NOC/SOC efficiency." },
      { n: "FortiEDR & FortiSOAR", d: "Endpoint detection/response and orchestration to accelerate investigations." }
    ],
    photos: [],
    note: "Talk to Total Wisdom to scope, design, and support a Fortinet solution tailored to your organization across the UAE and GCC."
  },

  "hpe": {
    name: "Hewlett Packard Enterprise",
    category: "Data Center Hardware & Virtualization",
    logo: "assets/Hewlett_Packard_Enterprise_logo.png",
    lead: "Hewlett Packard Enterprise (HPE) is a global leader in enterprise IT infrastructure, hybrid cloud, and data center solutions.",
    body: [
      "With cutting-edge technologies in servers, storage, and networking, HPE enables organizations to scale their operations, optimize performance, and accelerate innovation.",
      "As an official HPE partner in the UAE and GCC, Total Wisdom Technology LLC provides direct access to the full HPE portfolio, combined with localized consultancy, solution architecture, and tailored proposals for enterprise projects.",
      "Our certified HPE engineers deliver professional support and deployment services, ensuring smooth integration of HPE technologies — from on-premise data centers to hybrid cloud strategies."
    ],
    solutions: [
      { n: "HPE ProLiant Servers", d: "Industry-leading performance for enterprise workloads." },
      { n: "HPE Storage Solutions", d: "Scalable storage systems for big data and cloud integration." },
      { n: "HPE Aruba Networking", d: "Advanced wireless and wired networking solutions." },
      { n: "HPE GreenLake", d: "Flexible hybrid cloud consumption model." }
    ],
    photos: [],
    note: "Partnering with Total Wisdom means having a trusted HPE representative in the UAE and GCC, backed by local expertise, responsive support, and proven enterprise infrastructure experience."
  },

  "tenable": {
    name: "Tenable",
    category: "Network Infrastructure & Security",
    logo: "assets/Tenable_logo.svg",
    lead: "Tenable is the architect of exposure management, bringing vulnerability, cloud, identity, web app, OT/ICS, and external attack-surface risks into a single, measurable program.",
    body: [
      "With the Tenable One platform — including Lumin Exposure View and VPR prioritization — security teams gain unified visibility, business-aligned metrics, and the context to act on what matters first.",
      "As an official Tenable partner in the UAE and GCC, Total Wisdom Technology LLC delivers consultancy, tailored proposals, and end-to-end deployment across on-prem and cloud — extending to industrial/OT networks via Tenable OT Security for asset-level visibility without disrupting operations.",
      "Our Tenable-certified engineers integrate external attack surface discovery, risk-based vulnerability management, and cloud-native application protection into one operating model."
    ],
    solutions: [
      { n: "Tenable One Exposure Management", d: "Unify IT, OT, cloud, web apps, identities, and EASM with business-level exposure metrics and VPR prioritization." },
      { n: "Tenable Vulnerability Management", d: "Cloud-based VM with modern dashboards, scanning, and reporting." },
      { n: "Nessus", d: "The industry's most widely used vulnerability assessment scanner." },
      { n: "Tenable OT Security", d: "Continuous asset discovery and risk monitoring for converged OT/IT environments." },
      { n: "Tenable Cloud Security (CNAPP)", d: "Identity-aware, multi-cloud security." },
      { n: "Tenable.sc", d: "On-prem risk-based VM for sensitive or disconnected networks." },
      { n: "Attack Surface Management (EASM)", d: "Continuous discovery and assessment of internet-facing assets, integrated with the VM stack." }
    ],
    photos: [],
    note: "With Total Wisdom as your Tenable partner in the UAE and GCC, you get regional expertise, official access, and 24/7 local support to operationalize exposure management and measurably reduce cyber risk."
  },

  "bitdefender": {
    name: "Bitdefender",
    category: "Endpoint & User Protection",
    logo: "assets/Bitdefender-Logo.png",
    lead: "Bitdefender is a global leader in advanced cybersecurity solutions, trusted by enterprises, governments, and consumers in over 170 countries.",
    body: [
      "Known for its AI-driven threat detection, endpoint protection, and cloud security, Bitdefender delivers unmatched performance against malware, ransomware, and evolving cyber threats.",
      "As an official Bitdefender partner in the UAE and GCC, Total Wisdom Technology LLC provides direct access to Bitdefender's award-winning solutions, backed by consultancy, tailored proposals, and end-to-end deployment services.",
      "Our certified Bitdefender specialists bring strong expertise in designing and supporting enterprise environments, ensuring proactive defense, simplified management, and reliable 24/7 support."
    ],
    solutions: [
      { n: "GravityZone Business Security", d: "Unified endpoint protection with centralized management." },
      { n: "Bitdefender EDR/XDR", d: "Extended detection and response for advanced cyber threats." },
      { n: "Cloud Security for MSPs", d: "Scalable protection for managed service providers." },
      { n: "Threat Intelligence Services", d: "Real-time global threat visibility." },
      { n: "Advanced Anti-Malware", d: "AI-powered security for enterprise workloads." }
    ],
    photos: [],
    note: "With Total Wisdom as your Bitdefender representative in the UAE and GCC, you gain official access to next-generation cybersecurity and the local expertise to stay one step ahead of today's threats."
  },

  "emc": {
    name: "EMC",
    category: "Data Center Storage & Protection",
    logo: "assets/EMC-Logo.svg",
    lead: "EMC, part of Dell Technologies, is a global leader in enterprise data storage, data protection, and information management — trusted to keep mission-critical data fast, available, and secure.",
    body: [
      "From primary storage and hyper-converged infrastructure to backup and long-term retention, EMC technologies help organizations consolidate, protect, and scale their data across on-premise, hybrid, and multi-cloud environments.",
      "As your technology partner in the UAE and GCC, Total Wisdom Technology LLC pairs EMC's enterprise storage portfolio with consultancy, solution design, and end-to-end deployment — sizing capacity and performance to your workloads and protection SLAs.",
      "Our specialists deliver professional local and remote support, ensuring smooth integration of EMC storage and data-protection platforms into existing data centers and virtualization estates."
    ],
    solutions: [
      { n: "PowerStore", d: "Modern, container-based unified storage for block, file, and VMware environments." },
      { n: "PowerMax", d: "High-end, mission-critical storage with extreme performance and end-to-end NVMe." },
      { n: "Unity XT", d: "Midrange all-flash unified storage balancing performance and simplicity." },
      { n: "PowerScale (Isilon)", d: "Scale-out NAS for unstructured data and demanding file workloads." },
      { n: "PowerProtect Data Domain", d: "Deduplication-based backup and long-term data protection targets." },
      { n: "VxRail", d: "VMware-integrated hyper-converged infrastructure for simplified operations." }
    ],
    photos: [],
    note: "With Total Wisdom as your EMC partner in the UAE and GCC, you gain enterprise-grade storage and data protection backed by regional expertise and dedicated technical support."
  }
};
