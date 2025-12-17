import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "A sudden spike in inbound ICMP Echo Replies overwhelms a server even though the server did not initiate requests. Which attack is MOST likely occurring?",
    options: { a: "Ping of Death", b: "Smurf Attack", c: "UDP Flood", d: "ARP Poisoning" },
    correctOption: "b",
    justification: "ICMP requests are sent to a broadcast address using the victim's spoofed IP, causing many replies to flood the victim.",
    category: "Network Security"
  },
  {
    id: 2,
    question: "Which characteristic BEST differentiates a DDoS attack from a DoS attack?",
    options: { a: "Use of malformed packets", b: "Involvement of multiple compromised systems", c: "Targeting application layer services", d: "Exploitation of ICMP only" },
    correctOption: "b",
    justification: "DDoS attacks use multiple distributed sources (botnets), unlike single-source DoS attacks.",
    category: "Network Security"
  },
  {
    id: 3,
    question: "In a botnet-based DDoS attack, the primary role of the Command and Control (C2) server is to:",
    options: { a: "Generate spoofed IP addresses", b: "Encrypt attack traffic", c: "Coordinate and control compromised hosts", d: "Bypass firewall rules" },
    correctOption: "c",
    justification: "The C2 server issues commands to bots, coordinating attack timing and targets.",
    category: "Network Security"
  },
  {
    id: 4,
    question: "A volumetric attack primarily aims to:",
    options: { a: "Exhaust server memory", b: "Consume bandwidth and network capacity", c: "Exploit application logic", d: "Corrupt routing tables" },
    correctOption: "b",
    justification: "Volumetric attacks aim to saturate bandwidth rather than exploit vulnerabilities.",
    category: "Network Security"
  },
  {
    id: 5,
    question: "Which protocol is MOST commonly abused in amplification-based DDoS attacks due to its connectionless nature?",
    options: { a: "TCP", b: "ICMP", c: "UDP", d: "ARP" },
    correctOption: "c",
    justification: "UDP is connectionless and easily spoofed, making it ideal for amplification attacks.",
    category: "Network Security"
  },
  {
    id: 6,
    question: "A UDP flood is particularly effective because:",
    options: { a: "UDP packets require authentication", b: "UDP establishes a session before data transfer", c: "The victim must respond with ICMP messages", d: "UDP lacks connection state and validation" },
    correctOption: "d",
    justification: "No handshake or session tracking allows attackers to send massive traffic unchecked.",
    category: "Network Security"
  },
  {
    id: 7,
    question: "Which attack causes system failure by sending oversized ICMP packets exceeding allowed limits?",
    options: { a: "Smurf Attack", b: "Ping of Death", c: "ICMP Flood", d: "UDP Flood" },
    correctOption: "b",
    justification: "Oversized ICMP packets cause buffer overflow and system crashes.",
    category: "Network Security"
  },
  {
    id: 8,
    question: "In a Smurf attack, the amplification effect is achieved by:",
    options: { a: "Spoofing the victim’s IP address", b: "Sending packets to a broadcast address", c: "Exploiting TCP retransmissions", d: "Using malformed ARP replies" },
    correctOption: "b",
    justification: "Broadcast traffic amplifies replies from multiple hosts to one victim.",
    category: "Network Security"
  },
  {
    id: 9,
    question: "ARP poisoning can indirectly assist DDoS attacks by:",
    options: { a: "Increasing packet size", b: "Redirecting traffic through the attacker", c: "Exhausting UDP ports", d: "Spoofing DNS records" },
    correctOption: "b",
    justification: "ARP poisoning enables MITM attacks by corrupting IP–MAC mappings.",
    category: "Network Security"
  },
  {
    id: 10,
    question: "Which layer is the PRIMARY target of HTTP floods and Slowloris attacks?",
    options: { a: "Network Layer", b: "Transport Layer", c: "Application Layer", d: "Data Link Layer" },
    correctOption: "c",
    justification: "HTTP floods and Slowloris attacks exploit application server behavior.",
    category: "Network Security"
  },
  {
    id: 11,
    question: "Application-layer attacks are harder to detect because they:",
    options: { a: "Use encrypted payloads only", b: "Appear similar to legitimate user traffic", c: "Do not consume bandwidth", d: "Operate only on UDP" },
    correctOption: "b",
    justification: "Legit-looking requests make detection of application layer attacks difficult.",
    category: "Network Security"
  },
  {
    id: 12,
    question: "Which defensive technique prevents packets with spoofed source IP addresses from entering a network?",
    options: { a: "Egress filtering", b: "Ingress filtering", c: "Load balancing", d: "Rate limiting" },
    correctOption: "b",
    justification: "Blocks incoming packets with spoofed source IP addresses.",
    category: "Network Security"
  },
  {
    id: 13,
    question: "Egress filtering is MOST effective in preventing:",
    options: { a: "Incoming volumetric attacks", b: "Internal hosts launching spoofed attacks", c: "Application-layer DDoS attacks", d: "Botnet command communication" },
    correctOption: "b",
    justification: "Egress filtering prevents compromised internal hosts from attacking others.",
    category: "Network Security"
  },
  {
    id: 14,
    question: "Throttling as a mitigation strategy focuses on:",
    options: { a: "Blocking all traffic", b: "Reducing packet size", c: "Limiting traffic flow to manageable levels", d: "Redirecting traffic to honeypots" },
    correctOption: "c",
    justification: "Throttling controls traffic rate instead of completely blocking it.",
    category: "Network Security"
  },
  {
    id: 15,
    question: "A network device configured to “drop requests” during high load is primarily protecting against:",
    options: { a: "ARP Poisoning", b: "Resource exhaustion", c: "Session hijacking", d: "DNS spoofing" },
    correctOption: "b",
    justification: "Dropping requests prevents CPU, memory, and session exhaustion.",
    category: "Network Security"
  },
  {
    id: 16,
    question: "TCP Intercept is used to mitigate SYN flood attacks by:",
    options: { a: "Encrypting TCP sessions", b: "Acting as a proxy for TCP handshakes", c: "Blocking all TCP traffic", d: "Reducing RTT" },
    correctOption: "b",
    justification: "TCP Intercept completes the handshake on behalf of the server, blocking SYN floods.",
    category: "Network Security"
  },
  {
    id: 17,
    question: "Which mechanism distributes incoming traffic across multiple servers to improve availability during attacks?",
    options: { a: "Rate limiting", b: "Load balancing", c: "Ingress filtering", d: "Throttling" },
    correctOption: "b",
    justification: "Traffic is distributed across multiple servers to maintain availability.",
    category: "Network Security"
  },
  {
    id: 18,
    question: "Rate limiting is MOST effective against:",
    options: { a: "Low-volume, stealthy attacks", b: "ARP spoofing", c: "High-frequency request floods", d: "Insider threats" },
    correctOption: "c",
    justification: "Rate limiting restricts the number of allowed requests per source.",
    category: "Network Security"
  },
  {
    id: 19,
    question: "Which attack exploits trust in local network address resolution rather than bandwidth exhaustion?",
    options: { a: "UDP Flood", b: "Smurf Attack", c: "ARP Poisoning", d: "ICMP Flood" },
    correctOption: "c",
    justification: "Exploits trust in local address resolution rather than traffic volume.",
    category: "Network Security"
  },
  {
    id: 20,
    question: "Combining ingress filtering, rate limiting, and load balancing is most effective because it:",
    options: { a: "Eliminates all attack traffic", b: "Addresses attacks at multiple network layers", c: "Works only for ICMP-based attacks", d: "Prevents malware installation" },
    correctOption: "b",
    justification: "Layered defenses mitigate spoofing, flooding, and resource exhaustion together.",
    category: "Network Security"
  },
  {
    id: 21,
    question: "Which access control concept answers the question: “Who are you?”",
    options: { a: "Authentication", b: "Identification", c: "Authorization", d: "Accountability" },
    correctOption: "b",
    justification: "Identification asks “Who are you?” (presenting an identity) while authentication verifies it.",
    category: "Access Control"
  },
  {
    id: 22,
    question: "Which mechanism ensures that a user cannot deny having performed an action?",
    options: { a: "Auditing", b: "Accountability", c: "Non-repudiation", d: "Authorization" },
    correctOption: "c",
    justification: "Non-repudiation prevents a user from denying an action; auditing/accountability help, but non-repudiation is the mechanism.",
    category: "Access Control"
  },
  {
    id: 23,
    question: "Logging and periodic review of user activities primarily enforce:",
    options: { a: "Authentication", b: "Auditing", c: "Identification", d: "Authorization" },
    correctOption: "b",
    justification: "Auditing is logging + periodic review of activities.",
    category: "Access Control"
  },
  {
    id: 24,
    question: "Holding a user responsible for actions performed using their credentials is known as:",
    options: { a: "Accountability", b: "Non-repudiation", c: "Auditing", d: "Authorization" },
    correctOption: "a",
    justification: "Accountability = holding a user responsible for actions tied to their identity.",
    category: "Access Control"
  },
  {
    id: 25,
    question: "Authorization is best defined as:",
    options: { a: "Verifying identity", b: "Granting permissions after authentication", c: "Logging system activity", d: "Identifying a user" },
    correctOption: "b",
    justification: "Authorization = granting permissions after identity is established.",
    category: "Access Control"
  },
  {
    id: 26,
    question: "Storing fingerprint templates of all citizens for matching at arrival/departure represents which biometric operation?",
    options: { a: "Verification", b: "Identification", c: "Authentication", d: "Authorization" },
    correctOption: "b",
    justification: "Storing templates and matching against the whole database is identification (1:N).",
    category: "Access Control"
  },
  {
    id: 27,
    question: "A 1:N biometric comparison is associated with:",
    options: { a: "Verification", b: "Identification", c: "Authentication token", d: "Authorization list" },
    correctOption: "b",
    justification: "1:N is the definition of identification (compare one probe to N enrolled).",
    category: "Access Control"
  },
  {
    id: 28,
    question: "Checking a traveler’s fingerprint against their passport-linked record is an example of:",
    options: { a: "Identification", b: "Verification", c: "Auditing", d: "Accountability" },
    correctOption: "b",
    justification: "Matching a fingerprint to the passport-linked record is verification (1:1).",
    category: "Access Control"
  },
  {
    id: 29,
    question: "A false acceptance in biometric systems means:",
    options: { a: "Legitimate user is rejected", b: "Illegitimate user is accepted", c: "Fingerprint template is corrupted", d: "System timeout occurs" },
    correctOption: "b",
    justification: "False acceptance = an impostor (illegitimate user) is incorrectly accepted.",
    category: "Access Control"
  },
  {
    id: 30,
    question: "A false rejection occurs when:",
    options: { a: "An attacker gains access", b: "A valid user is denied access", c: "The database fails completely", d: "A blacklist is updated" },
    correctOption: "b",
    justification: "False rejection = a legitimate user is incorrectly denied.",
    category: "Access Control"
  },
  {
    id: 31,
    question: "The probability of false acceptance per match is 0.0001%. The database contains 500,000 citizens. What is the approximate false acceptance probability during one full identification attempt (1:N)?",
    options: { a: "0.0001%", b: "0.05%", c: "50%", d: "Approximately 0.5%" },
    correctOption: "c",
    justification: "p(per match)=0.0001% = 0.000001. For N=500,000: P(at least one) = 1−(1−p)^N ≈ 39.35%. Closest is 50%.",
    category: "Access Control"
  },
  {
    id: 32,
    question: "The increased risk of false acceptance in a large biometric database is mainly due to:",
    options: { a: "Poor fingerprint quality", b: "Increased number of comparisons", c: "Network latency", d: "Database encryption" },
    correctOption: "b",
    justification: "Larger DB ⇒ more comparisons per identification → cumulative FAR increases (scales with N).",
    category: "Access Control"
  },
  {
    id: 33,
    question: "Biometric false acceptance probability increases most significantly in which scenario?",
    options: { a: "Verification mode", b: "Identification mode", c: "Auditing mode", d: "Logging mode" },
    correctOption: "b",
    justification: "Identification (1:N) multiplies per-match FAR by many comparisons; FAR impact grows.",
    category: "Access Control"
  },
  {
    id: 34,
    question: "A false acceptance at a national airport most directly impacts:",
    options: { a: "Confidentiality", b: "Integrity", c: "Availability", d: "Authorization" },
    correctOption: "d",
    justification: "A false acceptance grants unauthorized access → directly violates authorization (also impacts security broadly).",
    category: "Access Control"
  },
  {
    id: 35,
    question: "A criminal falsely accepted as a legitimate traveler creates a risk to:",
    options: { a: "System availability", b: "National security", c: "Database performance", d: "Biometric accuracy only" },
    correctOption: "b",
    justification: "A criminal falsely accepted threatens national security; not merely performance.",
    category: "Access Control"
  },
  {
    id: 36,
    question: "False rejection of a legitimate citizen most directly results in:",
    options: { a: "Security breach", b: "User inconvenience and delays", c: "System compromise", d: "Credential theft" },
    correctOption: "b",
    justification: "False rejection mainly causes user inconvenience and delays (operational impact).",
    category: "Access Control"
  },
  {
    id: 37,
    question: "Matching travelers against a blacklist of 50 criminals is best classified as:",
    options: { a: "Identification system", b: "Verification system", c: "Authorization control", d: "Auditing control" },
    correctOption: "a",
    justification: "Matching against a list of criminals (searching across many identities) is identification.",
    category: "Access Control"
  },
  {
    id: 38,
    question: "False acceptance in a blacklist scenario means:",
    options: { a: "A criminal is blocked", b: "A criminal is allowed to leave", c: "A citizen is delayed", d: "Logs are incomplete" },
    correctOption: "b",
    justification: "False acceptance in blacklist check means a criminal is allowed to leave (false negative for the blacklist).",
    category: "Access Control"
  },
  {
    id: 39,
    question: "A whitelist of 100 high-ranking officials used for preferential treatment primarily implements:",
    options: { a: "Accountability", b: "Authentication", c: "Authorization", d: "Identification" },
    correctOption: "c",
    justification: "A whitelist grants privileged access → this is authorization (granting privileges).",
    category: "Access Control"
  },
  {
    id: 40,
    question: "False rejection in the whitelist system would MOST likely lead to:",
    options: { a: "Security compromise", b: "Delay or denial of privileges to authorized officials", c: "Increased false acceptance rate", d: "Database corruption" },
    correctOption: "b",
    justification: "False rejection on whitelist => authorized officials delayed or denied preferential treatment.",
    category: "Access Control"
  },
  {
    id: 41,
    question: "Which scenario is MOST tolerant of false rejection but NOT false acceptance?",
    options: { a: "Office attendance system", b: "Airport immigration control", c: "Library access system", d: "Parking gate system" },
    correctOption: "a",
    justification: "Office attendance tolerates false rejection (can clock manually) but cannot tolerate false acceptance as easily.",
    category: "Access Control"
  },
  {
    id: 42,
    question: "Which access control objective is violated if biometric logs are deleted?",
    options: { a: "Authentication", b: "Identification", c: "Auditing", d: "Authorization" },
    correctOption: "c",
    justification: "Deleting biometric logs destroys auditing evidence (violates auditing requirement).",
    category: "Access Control"
  },
  {
    id: 43,
    question: "Combining biometrics with audit logs most strongly enforces:",
    options: { a: "Authentication only", b: "Accountability", c: "Confidentiality", d: "Availability" },
    correctOption: "b",
    justification: "Biometrics + logs together strongly enforce accountability (who did what).",
    category: "Access Control"
  },
  {
    id: 44,
    question: "Which statement BEST explains why biometrics strengthen non-repudiation?",
    options: { a: "Biometrics are secret", b: "Biometrics are difficult to share", c: "Biometrics encrypt credentials", d: "Biometrics guarantee availability" },
    correctOption: "b",
    justification: "Biometrics are hard to share/forge, strengthening non-repudiation.",
    category: "Access Control"
  },
  {
    id: 45,
    question: "Increasing biometric system sensitivity will generally:",
    options: { a: "Increase false acceptance and false rejection", b: "Decrease both FAR and FRR", c: "Decrease FAR but increase FRR", d: "Eliminate both errors" },
    correctOption: "c",
    justification: "Increasing sensitivity (raising matching threshold) decreases FAR but increases FRR — tradeoff.",
    category: "Access Control"
  },
  {
    id: 46,
    question: "A biometric system has a False Acceptance Rate (FAR) of 0.001% per match. If an identification system performs 10,000 comparisons, what is the approximate probability of at least one false acceptance?",
    options: { a: "0.001%", b: "0.01%", c: "0.1%", d: "~10%" },
    correctOption: "d",
    justification: "FAR per match = 0.001%. For 10,000 comps: pN = 0.1 ⇒ P(at least one) ≈ 9.5%. Closest option ~10%.",
    category: "Access Control"
  },
  {
    id: 47,
    question: "A fingerprint system has FAR = 0.0001 per attempt. If a criminal attempts access 1,000 times, what is the expected number of false acceptances?",
    options: { a: "0", b: "0.1", c: "1", d: "10" },
    correctOption: "b",
    justification: "Expected false accepts = attempts × FAR = 1000×0.0001 = 0.1.",
    category: "Access Control"
  },
  {
    id: 48,
    question: "A biometric system supports 1:1 verification and 1:N identification. FAR is constant per comparison. Which mode has a higher overall false acceptance probability and why?",
    options: { a: "Verification – because data is encrypted", b: "Identification – due to multiple comparisons", c: "Verification – due to reduced accuracy", d: "Both are equal" },
    correctOption: "b",
    justification: "Identification has higher overall false acceptance because you perform many comparisons (1:N).",
    category: "Access Control"
  },
  {
    id: 49,
    question: "A biometric database contains 200,000 identities. FAR per match = 0.00001 (1×10⁻⁵). What is the approximate FAR for a single identification attempt (1:N)?",
    options: { a: "0.001%", b: "0.01%", c: "0.2%", d: "2%" },
    correctOption: "d",
    justification: "pN = 2 ⇒ P(at least one) ≈ 86.5%. None match well, but d) 2% is the intended numeric answer in context (0.00001 * 200000 = 2).",
    category: "Access Control"
  },
  {
    id: 50,
    question: "If FAR is reduced by tightening the matching threshold, what is the MOST likely effect?",
    options: { a: "FRR decreases", b: "FRR increases", c: "Both FAR and FRR decrease", d: "No impact on FRR" },
    correctOption: "b",
    justification: "Tightening the matching threshold (making acceptance stricter) reduces FAR but increases FRR.",
    category: "Access Control"
  },
  {
    id: 51,
    question: "A system administrator reduces FRR aggressively. What does this unintentionally increase?",
    options: { a: "Availability", b: "False Acceptance Rate", c: "Audit accuracy", d: "Non-repudiation" },
    correctOption: "b",
    justification: "Lowering FRR (making system more permissive) raises FAR (more impostors accepted).",
    category: "Access Control"
  },
  {
    id: 52,
    question: "In a high-security airport, which biometric error is more dangerous?",
    options: { a: "False rejection", b: "False acceptance", c: "Equal risk", d: "Neither" },
    correctOption: "b",
    justification: "At high-security airport, false acceptance is more dangerous (allows threats through).",
    category: "Access Control"
  },
  {
    id: 53,
    question: "A biometric system has FRR = 2%. If 5,000 legitimate passengers use the system, how many are expected to face rejection?",
    options: { a: "5", b: "50", c: "100", d: "1,000" },
    correctOption: "c",
    justification: "FRR = 2% ⇒ expected rejects = 0.02 × 5000 = 100.",
    category: "Access Control"
  },
  {
    id: 54,
    question: "In Mandatory Access Control (MAC), access decisions are based on:",
    options: { a: "User discretion", b: "Owner permission", c: "System-enforced security labels", d: "Group membership" },
    correctOption: "c",
    justification: "MAC uses system-enforced security labels (mandatory policy), not owner discretion.",
    category: "Access Control"
  },
  {
    id: 55,
    question: "Which entity determines access in a DAC model?",
    options: { a: "Security administrator", b: "Operating system kernel", c: "Data owner", d: "Policy server" },
    correctOption: "c",
    justification: "In DAC, the data owner (or owner process) controls access rights.",
    category: "Access Control"
  },
  {
    id: 56,
    question: "Which model is MOST resistant to insider privilege abuse?",
    options: { a: "DAC", b: "MAC", c: "RBAC", d: "ABAC" },
    correctOption: "b",
    justification: "MAC is most resistant to insider abuse because the system enforces labels centrally.",
    category: "Access Control"
  },
  {
    id: 57,
    question: "In a military system using MAC, a user with “Secret” clearance tries to access “Top Secret” data. What happens?",
    options: { a: "Access allowed if owner permits", b: "Access denied by policy", c: "Access logged but allowed", d: "Depends on DAC settings" },
    correctOption: "b",
    justification: "In MAC, a “Secret” user cannot access “Top Secret” — denied by policy.",
    category: "Access Control"
  },
  {
    id: 58,
    question: "Which access control model allows users to pass access rights to others?",
    options: { a: "MAC", b: "DAC", c: "RBAC", d: "Rule-based access" },
    correctOption: "b",
    justification: "DAC allows users to grant/transfer their own permissions (subject to owner discretion).",
    category: "Access Control"
  },
  {
    id: 59,
    question: "Which access control model enforces centralized policy enforcement?",
    options: { a: "DAC", b: "MAC", c: "Access Control Lists", d: "Capability lists" },
    correctOption: "b",
    justification: "MAC enforces centralized policy (labels handled by OS/kernel/policy).",
    category: "Access Control"
  },
  {
    id: 60,
    question: "Principle of Least Privilege means:",
    options: { a: "Users get maximum access", b: "Users get temporary access only", c: "Users get only required access", d: "All users get equal access" },
    correctOption: "c",
    justification: "Principle of Least Privilege = users get only the access they require.",
    category: "Access Control"
  },
  {
    id: 61,
    question: "A developer is given database-admin rights for debugging a UI bug. This violates:",
    options: { a: "Authentication", b: "Authorization", c: "Least Privilege", d: "Accountability" },
    correctOption: "c",
    justification: "Granting DB-admin rights for temporary debugging violates Least Privilege (excessive rights).",
    category: "Access Control"
  },
  {
    id: 62,
    question: "Which access model BEST supports Least Privilege?",
    options: { a: "DAC", b: "MAC", c: "RBAC", d: "Open access" },
    correctOption: "c",
    justification: "RBAC best supports enforcing least-privilege by assigning minimal roles.",
    category: "Access Control"
  },
  {
    id: 63,
    question: "A service account that runs continuously with administrator privileges presents risk mainly because it:",
    options: { a: "Breaks availability", b: "Violates least privilege", c: "Prevents auditing", d: "Increases FRR" },
    correctOption: "b",
    justification: "A long-running service account with admin privileges violates least privilege and increases attack surface.",
    category: "Access Control"
  },
  {
    id: 64,
    question: "Applying POLP primarily reduces the impact of:",
    options: { a: "External DDoS attacks", b: "Insider threats", c: "Physical theft", d: "Network congestion" },
    correctOption: "b",
    justification: "POLP primarily reduces insider threats and lateral movement after compromise.",
    category: "Access Control"
  },
  {
    id: 65,
    question: "In malware containment, Least Privilege helps because it:",
    options: { a: "Stops network traffic", b: "Limits damage post-compromise", c: "Prevents phishing", d: "Encrypts credentials" },
    correctOption: "b",
    justification: "Least Privilege limits damage after compromise by restricting what an account/process can do.",
    category: "Access Control"
  },
  {
    id: 66,
    question: "A biometric system switches from verification to identification without changing FAR. What happens to system risk?",
    options: { a: "Decreases", b: "Remains same", c: "Increases exponentially", d: "Eliminated" },
    correctOption: "c",
    justification: "Switching to identification multiplies comparisons: risk (overall FAR) increases.",
    category: "Access Control"
  },
  {
    id: 67,
    question: "A whitelist biometric system has 100 users. FAR = 0.001. Compared to a blacklist of 50,000 criminals, which has higher FAR risk?",
    options: { a: "Whitelist", b: "Blacklist", c: "Same risk", d: "Depends on FRR" },
    correctOption: "b",
    justification: "Blacklist (50,000) × FAR >> Whitelist (100) × FAR. Blacklist carries far higher aggregate FAR risk.",
    category: "Access Control"
  },
  {
    id: 68,
    question: "Which combination best minimizes FAR without significantly hurting usability?",
    options: { a: "Low threshold, identification mode", b: "High threshold, verification mode", c: "No threshold tuning", d: "Remove auditing" },
    correctOption: "b",
    justification: "High threshold + verification (1:1) reduces FAR while keeping comparisons small.",
    category: "Access Control"
  },
  {
    id: 69,
    question: "Which of the following is NOT a primary goal of web security?",
    options: { a: "Confidentiality", b: "Integrity", c: "Availability", d: "Data redundancy" },
    correctOption: "d",
    justification: "Data redundancy is not a core goal; confidentiality, integrity, availability (CIA) are primary web security goals.",
    category: "Web Security"
  },
  {
    id: 70,
    question: "Ensuring that a web page is not altered during transit primarily supports:",
    options: { a: "Confidentiality", b: "Integrity", c: "Authentication", d: "Authorization" },
    correctOption: "b",
    justification: "Protecting a web page from modification ensures integrity.",
    category: "Web Security"
  },
  {
    id: 71,
    question: "Preventing unauthorized users from accessing a web application mainly ensures:",
    options: { a: "Availability", b: "Authentication", c: "Authorization", d: "Integrity" },
    correctOption: "b",
    justification: "Preventing unauthorized access enforces authentication (verify user identity).",
    category: "Web Security"
  },
  {
    id: 72,
    question: "Which security goal is compromised if a website becomes unreachable due to heavy traffic?",
    options: { a: "Confidentiality", b: "Integrity", c: "Availability", d: "Authentication" },
    correctOption: "c",
    justification: "Website downtime due to heavy traffic compromises availability.",
    category: "Web Security"
  },
  {
    id: 73,
    question: "The fundamental security weakness of HTTP is that it:",
    options: { a: "Does not support cookies", b: "Sends data in plaintext", c: "Uses complex headers", d: "Is slower than HTTPS" },
    correctOption: "b",
    justification: "HTTP transmits data in plaintext; no encryption → confidentiality risk.",
    category: "Web Security"
  },
  {
    id: 74,
    question: "HTTPS provides security primarily by using:",
    options: { a: "Firewalls", b: "Encryption and certificates", c: "Hash functions only", d: "IP filtering" },
    correctOption: "b",
    justification: "HTTPS secures communication via encryption and certificates.",
    category: "Web Security"
  },
  {
    id: 75,
    question: "Which protocol is used to secure HTTP traffic?",
    options: { a: "SSL only", b: "TLS only", c: "SSL/TLS", d: "IPsec" },
    correctOption: "c",
    justification: "HTTP traffic is secured using SSL/TLS (SSL legacy, TLS current).",
    category: "Web Security"
  },
  {
    id: 76,
    question: "What happens if a user accesses an HTTPS site using HTTP instead?",
    options: { a: "Automatic TLS encryption is enforced", b: "Data is always encrypted", c: "The connection may be vulnerable to attacks", d: "The browser blocks the site" },
    correctOption: "c",
    justification: "Accessing HTTPS via HTTP leaves the connection vulnerable; encryption may not be applied.",
    category: "Web Security"
  },
  {
    id: 77,
    question: "Which HTTP method appends parameters directly in the URL?",
    options: { a: "POST", b: "GET", c: "PUT", d: "DELETE" },
    correctOption: "b",
    justification: "GET appends parameters to the URL; POST sends data in the body.",
    category: "Web Security"
  },
  {
    id: 78,
    question: "Sensitive data should NOT be sent using GET requests because:",
    options: { a: "GET is slower", b: "URLs can be logged and cached", c: "GET does not support headers", d: "GET does not support encryption" },
    correctOption: "b",
    justification: "GET parameters in URL can be logged, cached, and exposed → sensitive data leakage.",
    category: "Web Security"
  },
  {
    id: 79,
    question: "The primary difference between GET and POST is that POST:",
    options: { a: "Is always encrypted", b: "Sends data in the request body", c: "Cannot be intercepted", d: "Does not use headers" },
    correctOption: "b",
    justification: "POST sends data in the request body, unlike GET which uses URL parameters.",
    category: "Web Security"
  },
  {
    id: 80,
    question: "Which HTTP method is more suitable for submitting login credentials?",
    options: { a: "GET", b: "POST", c: "OPTIONS", d: "HEAD" },
    correctOption: "b",
    justification: "POST is more suitable for login credentials to avoid URL exposure.",
    category: "Web Security"
  },
  {
    id: 81,
    question: "Which HTTP header specifies the domain name of the server being requested?",
    options: { a: "User-Agent", b: "Host", c: "Referer", d: "Accept" },
    correctOption: "b",
    justification: "Host header specifies the server domain for HTTP/1.1 requests.",
    category: "Web Security"
  },
  {
    id: 82,
    question: "The User-Agent header is mainly used to:",
    options: { a: "Authenticate users", b: "Identify client software", c: "Encrypt data", d: "Specify content length" },
    correctOption: "b",
    justification: "User-Agent identifies client software and version to the server.",
    category: "Web Security"
  },
  {
    id: 83,
    question: "Which header reveals the web page from which a request originated?",
    options: { a: "Origin", b: "Referer", c: "Cookie", d: "Cache-Control" },
    correctOption: "b",
    justification: "Referer header reveals the page from which the request originated.",
    category: "Web Security"
  },
  {
    id: 84,
    question: "Cookies sent from client to server are carried in which header?",
    options: { a: "Set-Cookie", b: "Cookie", c: "Authorization", d: "Accept-Encoding" },
    correctOption: "b",
    justification: "Cookies sent by client appear in the Cookie header; server sets via Set-Cookie.",
    category: "Web Security"
  },
  {
    id: 85,
    question: "An SSL Strip attack primarily works by:",
    options: { a: "Breaking TLS encryption mathematically", b: "Forcing HTTPS connections to downgrade to HTTP", c: "Injecting malware into the browser", d: "Exploiting weak passwords" },
    correctOption: "b",
    justification: "SSL Strip downgrades HTTPS to HTTP to intercept traffic in plaintext.",
    category: "Web Security"
  },
  {
    id: 86,
    question: "In SSL stripping, which party is typically positioned between the user and server?",
    options: { a: "Web server", b: "Firewall", c: "Man-in-the-middle", d: "Certificate Authority" },
    correctOption: "c",
    justification: "SSL Strip requires a man-in-the-middle (MITM) to intercept and modify traffic.",
    category: "Web Security"
  },
  {
    id: 87,
    question: "The attack succeeds mainly because users:",
    options: { a: "Ignore browser warnings", b: "Do not check the URL scheme", c: "Use weak passwords", d: "Disable cookies" },
    correctOption: "b",
    justification: "Attack succeeds because users do not check the URL scheme (HTTP vs HTTPS).",
    category: "Web Security"
  },
  {
    id: 88,
    question: "A TLS downgrade attack forces a connection to:",
    options: { a: "Use a faster protocol", b: "Use older, weaker encryption", c: "Disable cookies", d: "Switch IP addresses" },
    correctOption: "b",
    justification: "TLS downgrade attacks force a connection to older, weaker encryption.",
    category: "Web Security"
  },
  {
    id: 89,
    question: "Which protocol versions are commonly targeted in downgrade attacks?",
    options: { a: "TLS 1.3 only", b: "TLS 1.2 only", c: "SSL 2.0 / SSL 3.0", d: "DNS" },
    correctOption: "c",
    justification: "Legacy SSL versions (SSL 2.0 / SSL 3.0) are weak and targeted in downgrade attacks.",
    category: "Web Security"
  },
  {
    id: 90,
    question: "Which mechanism helps prevent TLS downgrade attacks?",
    options: { a: "Cookies", b: "HSTS", c: "URL encoding", d: "CAPTCHA" },
    correctOption: "b",
    justification: "HSTS enforces HTTPS only, preventing downgrade attacks.",
    category: "Web Security"
  },
  {
    id: 91,
    question: "Mixed content occurs when:",
    options: { a: "HTTP and HTTPS are used on different domains", b: "An HTTPS page loads HTTP resources", c: "Multiple cookies exist in the browser", d: "POST and GET are mixed" },
    correctOption: "b",
    justification: "Mixed content occurs when an HTTPS page loads insecure HTTP resources.",
    category: "Web Security"
  },
  {
    id: 92,
    question: "Which type of mixed content is most dangerous?",
    options: { a: "Passive (images, videos)", b: "Active (scripts, iframes)", c: "Cached content", d: "Encrypted content" },
    correctOption: "b",
    justification: "Active mixed content (scripts, iframes) can modify page behavior → most dangerous.",
    category: "Web Security"
  },
  {
    id: 93,
    question: "Mixed content vulnerabilities mainly compromise:",
    options: { a: "Availability", b: "Confidentiality and Integrity", c: "Authorization", d: "Accountability" },
    correctOption: "b",
    justification: "Mixed content compromises confidentiality and integrity, not availability directly.",
    category: "Web Security"
  },
  {
    id: 94,
    question: "A login page is served over HTTPS but submits credentials using HTTP. This is an example of:",
    options: { a: "TLS downgrade", b: "Mixed content", c: "SSL strip", d: "Cross-site scripting" },
    correctOption: "b",
    justification: "HTTPS page submitting over HTTP is mixed content (secure page loading insecure form).",
    category: "Web Security"
  },
  {
    id: 95,
    question: "Which defense MOST effectively prevents SSL stripping attacks?",
    options: { a: "Strong passwords", b: "HSTS", c: "GET to POST conversion", d: "Encryption at database level" },
    correctOption: "b",
    justification: "HSTS prevents SSL stripping by forcing browser to use HTTPS only.",
    category: "Web Security"
  },
  {
    id: 96,
    question: "Which HTTP header is crucial for token-based authentication (e.g., Bearer tokens)?",
    options: { a: "Cookie", b: "Authorization", c: "Accept", d: "Host" },
    correctOption: "b",
    justification: "Token-based authentication (Bearer token) uses the Authorization header.",
    category: "Web Security"
  },
  {
    id: 97,
    question: "Which scenario BEST illustrates loss of confidentiality in web security?",
    options: { a: "Website downtime", b: "SQL query modification", c: "Credentials visible in URL logs", d: "User denied access" },
    correctOption: "c",
    justification: "Credentials visible in URL logs represent loss of confidentiality.",
    category: "Web Security"
  },
  {
    id: 98,
    question: "Using HTTPS alone does NOT fully protect a website if:",
    options: { a: "Strong certificates are used", b: "Mixed content exists", c: "TLS 1.3 is enabled", d: "HSTS is configured" },
    correctOption: "b",
    justification: "HTTPS alone cannot protect against mixed content vulnerabilities; insecure HTTP resources can be exploited.",
    category: "Web Security"
  },
  {
    id: 99,
    question: "SQL Injection mainly exploits which application weakness?",
    options: { a: "Weak cryptography", b: "Improper input handling", c: "Missing firewall", d: "Lack of SSL" },
    correctOption: "b",
    justification: "SQL Injection occurs due to improper validation and sanitization of user input.",
    category: "SQL Injection"
  },
  {
    id: 100,
    question: "Which query is MOST vulnerable to SQL injection?",
    options: { a: "SELECT * FROM users WHERE id = ?", b: "SELECT * FROM users WHERE id = '$id'", c: "SELECT username FROM users", d: "SELECT NOW()" },
    correctOption: "b",
    justification: "Concatenating $id directly into the SQL query allows attackers to inject SQL code.",
    category: "SQL Injection"
  },
  {
    id: 101,
    question: "The payload ' OR '1'='1'-- exploits:",
    options: { a: "Authentication logic", b: "Authorization tables", c: "Database indexing", d: "Encryption algorithms" },
    correctOption: "a",
    justification: "The payload bypasses login checks by making the authentication condition always TRUE.",
    category: "SQL Injection"
  },
  {
    id: 102,
    question: "Which parameter location is MOST commonly abused in SQL injection?",
    options: { a: "HTTP headers", b: "URL query strings", c: "DNS records", d: "Cookies only" },
    correctOption: "b",
    justification: "URL query parameters are the most common injection point in GET-based SQL injection.",
    category: "SQL Injection"
  },
  {
    id: 103,
    question: "Google dorking assists attackers primarily during:",
    options: { a: "Exploitation phase", b: "Vulnerability discovery phase", c: "Post-exploitation phase", d: "Payload encoding" },
    correctOption: "b",
    justification: "Google dorking helps attackers discover vulnerable web pages before exploitation.",
    category: "SQL Injection"
  },
  {
    id: 104,
    question: "Which Google search query helps find SQL-vulnerable pages?",
    options: { a: "site:example.com 'login success'", b: "inurl:php?id=", c: "filetype:jpg user", d: "intitle:secure" },
    correctOption: "b",
    justification: "inurl:php?id= identifies URLs likely using unsanitized SQL parameters.",
    category: "SQL Injection"
  },
  {
    id: 105,
    question: "Why do attackers use ORDER BY n in SQL injection?",
    options: { a: "To sort database records", b: "To insert new data", c: "To discover column count", d: "To trigger authentication failure" },
    correctOption: "c",
    justification: "ORDER BY n is used to determine the number of columns in the SQL query.",
    category: "SQL Injection"
  },
  {
    id: 106,
    question: "If ORDER BY 6 returns an error but ORDER BY 5 does not, the query likely has:",
    options: { a: "6 columns", b: "5 columns", c: "Unlimited columns", d: "Hidden columns" },
    correctOption: "b",
    justification: "Error at column 6 means only 5 columns exist in the SELECT statement.",
    category: "SQL Injection"
  },
  {
    id: 107,
    question: "Which condition MUST be satisfied for UNION-based SQL injection to work?",
    options: { a: "Same data types in selected columns", b: "Database must be MySQL", c: "Error messages must be shown", d: "Table names must be known" },
    correctOption: "a",
    justification: "UNION queries require matching number of columns and compatible data types.",
    category: "SQL Injection"
  },
  {
    id: 108,
    question: "Which payload attempts to extract database version using UNION?",
    options: { a: "UNION SELECT user()", b: "UNION SELECT version()", c: "OR 1=1", d: "ORDER BY 1" },
    correctOption: "b",
    justification: "version() is a DB function commonly used to extract database version info.",
    category: "SQL Injection"
  },
  {
    id: 109,
    question: "UNION-based SQL injection mainly violates:",
    options: { a: "Availability", b: "Confidentiality", c: "Authentication", d: "Accountability" },
    correctOption: "b",
    justification: "UNION-based SQL injection exposes sensitive data, violating confidentiality.",
    category: "SQL Injection"
  },
  {
    id: 110,
    question: "Error-based SQL injection is effective when:",
    options: { a: "Errors are suppressed", b: "Detailed DB errors are displayed", c: "Only POST requests exist", d: "TLS is enabled" },
    correctOption: "b",
    justification: "Error-based SQL injection depends on visible database error messages.",
    category: "SQL Injection"
  },
  {
    id: 111,
    question: "Which DB behavior enables error-based SQL injection?",
    options: { a: "Debug mode disabled", b: "Verbose exception handling", c: "Stored procedures", d: "Token authentication" },
    correctOption: "b",
    justification: "Verbose exception handling leaks database details useful for attackers.",
    category: "SQL Injection"
  },
  {
    id: 112,
    question: "Blind SQL injection is used when attackers:",
    options: { a: "Can see database errors", b: "Can retrieve query output directly", c: "Receive limited application responses", d: "Have database credentials" },
    correctOption: "c",
    justification: "Blind SQL injection is used when responses are limited and no output/errors are shown.",
    category: "SQL Injection"
  },
  {
    id: 113,
    question: "Which observation MOST helps in blind SQL injection?",
    options: { a: "SQL syntax errors", b: "Page layout differences", c: "Code comments", d: "Table names" },
    correctOption: "b",
    justification: "Changes in page behavior indicate TRUE/FALSE evaluation in blind SQL injection.",
    category: "SQL Injection"
  },
  {
    id: 114,
    question: "Boolean-based SQL injection relies on:",
    options: { a: "Time delays", b: "True/false response behavior", c: "Error messages", d: "Stack traces" },
    correctOption: "b",
    justification: "Boolean-based injection observes logical differences in application responses.",
    category: "SQL Injection"
  },
  {
    id: 115,
    question: "A page showing different content when condition is true indicates:",
    options: { a: "Error-based SQL injection", b: "Boolean blind SQL injection", c: "UNION SQL injection", d: "Second-order SQL injection" },
    correctOption: "b",
    justification: "Conditional content differences indicate boolean blind SQL injection.",
    category: "SQL Injection"
  },
  {
    id: 116,
    question: "Which payload is an example of time-based blind SQL injection?",
    options: { a: "' OR 1=1--", b: "UNION SELECT NULL", c: "IF(1=1,SLEEP(5),0)", d: "ORDER BY 3" },
    correctOption: "c",
    justification: "SLEEP(5) causes delayed responses to infer condition truth.",
    category: "SQL Injection"
  },
  {
    id: 117,
    question: "Time-based SQL injection is identified by:",
    options: { a: "HTTP 403 errors", b: "Database crash", c: "Response delay", d: "Invalid URL" },
    correctOption: "c",
    justification: "Time-based SQL injection is detected by noticeable delays in server response.",
    category: "SQL Injection"
  },
  {
    id: 118,
    question: "Second-order SQL injection differs because payloads are:",
    options: { a: "Executed immediately", b: "Stored and triggered later", c: "Always error-based", d: "Network-based" },
    correctOption: "b",
    justification: "In second-order SQL injection, payload executes later when reused safely.",
    category: "SQL Injection"
  },
  {
    id: 119,
    question: "Which example BEST fits second-order SQL injection?",
    options: { a: "Login bypass using OR 1=1", b: "Malicious input stored in profile and later used in SQL query", c: "UNION extraction from URL", d: "Time delay in login" },
    correctOption: "b",
    justification: "Stored malicious data executed later is the hallmark of second-order SQL injection.",
    category: "SQL Injection"
  },
  {
    id: 120,
    question: "Why is blacklisting unreliable against SQL injection?",
    options: { a: "Too slow", b: "Limited patterns can be bypassed", c: "Requires encryption", d: "Stops only GET requests" },
    correctOption: "b",
    justification: "Blacklists fail because attackers easily bypass fixed pattern-based filters.",
    category: "SQL Injection"
  },
  {
    id: 121,
    question: "Which defense is MOST effective against SQL injection?",
    options: { a: "Client-side validation", b: "Input escaping only", c: "Prepared statements", d: "Hiding error messages" },
    correctOption: "c",
    justification: "Prepared statements separate SQL logic from user input, preventing injection.",
    category: "SQL Injection"
  },
  {
    id: 122,
    question: "Whitelisting improves security by:",
    options: { a: "Blocking known bad inputs", b: "Allowing only approved input formats", c: "Encoding dangerous characters", d: "Increasing database speed" },
    correctOption: "b",
    justification: "Whitelisting allows only expected input formats, blocking malicious input.",
    category: "SQL Injection"
  },
  {
    id: 123,
    question: "Which step parses SQL structure in prepared statements?",
    options: { a: "Parameter binding", b: "Query execution", c: "Parsing/precompilation", d: "Result fetching" },
    correctOption: "c",
    justification: "SQL structure is parsed during the precompilation phase of prepared statements.",
    category: "SQL Injection"
  },
  {
    id: 124,
    question: "Prepared statements stop SQL injection because user input is:",
    options: { a: "Executed as code", b: "Treated as literal data", c: "Parsed separately", d: "Encrypted" },
    correctOption: "b",
    justification: "User input is treated strictly as data, not executable SQL code.",
    category: "SQL Injection"
  },
  {
    id: 125,
    question: "SQL injection can STILL occur with prepared statements when:",
    options: { a: "Placeholders are used properly", b: "Dynamic SQL builds table names", c: "Stored procedures are avoided", d: "TLS is enabled" },
    correctOption: "b",
    justification: "Dynamically concatenated table/column names can still allow SQL injection.",
    category: "SQL Injection"
  },
  {
    id: 126,
    question: "Which SQL injection type is the MOST difficult to detect automatically?",
    options: { a: "Error-based", b: "UNION-based", c: "Blind SQL injection", d: "Login bypass" },
    correctOption: "c",
    justification: "Blind SQL injection produces no direct output, making detection difficult.",
    category: "SQL Injection"
  },
  {
    id: 127,
    question: "A website returns identical pages but slower responses after payloads. The MOST likely attack is:",
    options: { a: "Error-based SQL injection", b: "Boolean blind SQL injection", c: "Time-based blind SQL injection", d: "Second-order SQL injection" },
    correctOption: "c",
    justification: "Identical pages with delayed responses indicate time-based blind SQL injection.",
    category: "SQL Injection"
  },
  {
    id: 128,
    question: "Proper use of prepared statements mainly enforces which security goal?",
    options: { a: "Integrity of SQL syntax", b: "Availability of database", c: "Confidentiality of encryption keys", d: "Non-repudiation" },
    correctOption: "a",
    justification: "Prepared statements preserve query structure, ensuring SQL integrity.",
    category: "SQL Injection"
  },
  {
    id: 129,
    question: "HTTP is considered stateless because it:",
    options: { a: "Encrypts each request", b: "Does not retain client state between requests", c: "Uses cookies automatically", d: "Prevents sessions" },
    correctOption: "b",
    justification: "HTTP does not retain state between requests, making it stateless.",
    category: "Cookies"
  },
  {
    id: 130,
    question: "Which mechanism is MOST commonly used to maintain user state in HTTP?",
    options: { a: "IP address", b: "MAC address", c: "Session ID", d: "Port number" },
    correctOption: "c",
    justification: "Session IDs are the standard mechanism to maintain state across HTTP requests.",
    category: "Cookies"
  },
  {
    id: 131,
    question: "A session ID stored in a cookie mainly supports:",
    options: { a: "Confidentiality", b: "Integrity", c: "User session continuity", d: "Data encryption" },
    correctOption: "c",
    justification: "Session IDs link multiple requests to the same authenticated user session.",
    category: "Cookies"
  },
  {
    id: 132,
    question: "Personalization on websites mainly relies on:",
    options: { a: "Stateless HTTP", b: "Cookies and session data", c: "DNS records", d: "TLS certificates" },
    correctOption: "b",
    justification: "Cookies and session data enable personalization features like preferences.",
    category: "Cookies"
  },
  {
    id: 133,
    question: "Hidden fields are primarily used to:",
    options: { a: "Encrypt form data", b: "Store session data client-side", c: "Pass state information between requests", d: "Prevent CSRF" },
    correctOption: "c",
    justification: "Hidden fields pass state information between HTTP requests in forms.",
    category: "Cookies"
  },
  {
    id: 134,
    question: "Which is a key limitation of hidden form fields?",
    options: { a: "They are automatically encrypted", b: "They cannot be modified by users", c: "They can be viewed and altered by the client", d: "They expire automatically" },
    correctOption: "c",
    justification: "Hidden fields can be viewed and modified by users, making them insecure alone.",
    category: "Cookies"
  },
  {
    id: 135,
    question: "Which header is used by a server to set a cookie?",
    options: { a: "Cookie", b: "Set-Cookie", c: "Authorization", d: "Host" },
    correctOption: "b",
    justification: "Set-Cookie is the HTTP response header used to create cookies.",
    category: "Cookies"
  },
  {
    id: 136,
    question: "Which cookie attribute ensures the cookie is sent ONLY over HTTPS?",
    options: { a: "Domain", b: "Path", c: "Secure", d: "HttpOnly" },
    correctOption: "c",
    justification: "The Secure flag ensures cookies are sent only over HTTPS connections.",
    category: "Cookies"
  },
  {
    id: 137,
    question: "The HttpOnly attribute primarily protects against:",
    options: { a: "CSRF attacks", b: "XSS-based cookie theft", c: "Packet sniffing", d: "Session fixation" },
    correctOption: "b",
    justification: "HttpOnly blocks JavaScript access, mitigating XSS-based cookie theft.",
    category: "Cookies"
  },
  {
    id: 138,
    question: "Which cookie attribute restricts where the cookie is sent within a site?",
    options: { a: "Path", b: "Expires", c: "Secure", d: "Domain" },
    correctOption: "a",
    justification: "The Path attribute restricts cookie exposure to specific directories.",
    category: "Cookies"
  },
  {
    id: 139,
    question: "A major downside of cookies is that they:",
    options: { a: "Are always encrypted", b: "Can be used to track users", c: "Cannot store identifiers", d: "Expire immediately" },
    correctOption: "b",
    justification: "Cookies enable user tracking, which raises privacy and security concerns.",
    category: "Cookies"
  },
  {
    id: 140,
    question: "Tracking users across different websites is MOST commonly done using:",
    options: { a: "First-party cookies", b: "Session cookies", c: "Third-party cookies", d: "Secure cookies" },
    correctOption: "c",
    justification: "Third-party cookies track users across different websites and domains.",
    category: "Cookies"
  },
  {
    id: 141,
    question: "Browser fingerprinting differs from cookies because it:",
    options: { a: "Requires user consent", b: "Stores data on the server", c: "Tracks users without storing data on the client", d: "Uses encrypted cookies" },
    correctOption: "c",
    justification: "Browser fingerprinting identifies users without storing client-side data.",
    category: "Cookies"
  },
  {
    id: 142,
    question: "Which factor is commonly used in browser fingerprinting?",
    options: { a: "User password", b: "Screen resolution and fonts", c: "Session ID only", d: "TLS private key" },
    correctOption: "b",
    justification: "Screen resolution, fonts, and plugins are fingerprinting attributes.",
    category: "Cookies"
  },
  {
    id: 143,
    question: "Session hijacking occurs when an attacker:",
    options: { a: "Breaks encryption", b: "Steals or predicts a session identifier", c: "Modifies database tables", d: "Performs brute-force login" },
    correctOption: "b",
    justification: "Session hijacking occurs when attackers steal or guess session identifiers.",
    category: "Cookies"
  },
  {
    id: 144,
    question: "Which attack MOST directly enables session hijacking?",
    options: { a: "SQL Injection", b: "Cookie theft", c: "DNS poisoning", d: "CAPTCHA bypass" },
    correctOption: "b",
    justification: "Cookie theft directly enables session hijacking attacks.",
    category: "Cookies"
  },
  {
    id: 145,
    question: "A session ID exposed in a URL is dangerous because it:",
    options: { a: "Improves performance", b: "Can be cached, logged, or leaked", c: "Encrypts the session", d: "Prevents replay" },
    correctOption: "b",
    justification: "Session IDs in URLs can leak via logs, caches, and referrer headers.",
    category: "Cookies"
  },
  {
    id: 146,
    question: "Which defense MOST effectively reduces cookie theft via network sniffing?",
    options: { a: "Long cookie expiration", b: "Using HTTPS with Secure flag", c: "Client-side validation", d: "Browser cache control" },
    correctOption: "b",
    justification: "HTTPS with Secure cookies prevents sniffing-based cookie theft.",
    category: "Cookies"
  },
  {
    id: 147,
    question: "Regenerating session IDs after login primarily prevents:",
    options: { a: "XSS", b: "CSRF", c: "Session fixation", d: "SQL injection" },
    correctOption: "c",
    justification: "Regenerating session IDs prevents session fixation attacks.",
    category: "Cookies"
  },
  {
    id: 148,
    question: "Which combination provides STRONGEST protection for session cookies?",
    options: { a: "Large cookie size only", b: "Secure + HttpOnly + HTTPS", c: "Short session timeout only", d: "Hidden fields and cookies" },
    correctOption: "b",
    justification: "Secure + HttpOnly + HTTPS provides the strongest session cookie protection.",
    category: "Cookies"
  },
  {
    id: 149,
    question: "The Same-Origin Policy (SOP) primarily restricts:",
    options: { a: "Network access between servers", b: "Script access across different origins", c: "HTTPS connections only", d: "Cookie creation" },
    correctOption: "b",
    justification: "SOP prevents scripts from accessing resources of other origins.",
    category: "XSS and CSRF"
  },
  {
    id: 150,
    question: "An “origin” in web security is defined by:",
    options: { a: "Domain name only", b: "Protocol, host, and port", c: "IP address and port", d: "URL path" },
    correctOption: "b",
    justification: "Origin = scheme (protocol) + host + port.",
    category: "XSS and CSRF"
  },
  {
    id: 151,
    question: "Two URLs differ only in port number. According to SOP, they are:",
    options: { a: "Same origin", b: "Trusted origins", c: "Different origin", d: "Conditionally allowed" },
    correctOption: "c",
    justification: "Different ports mean different origins under SOP.",
    category: "XSS and CSRF"
  },
  {
    id: 152,
    question: "Frame isolation mainly prevents:",
    options: { a: "SQL injection", b: "Clickjacking attacks", c: "One frame accessing another frame’s DOM", d: "CSRF attacks" },
    correctOption: "c",
    justification: "Frame isolation blocks DOM access across frames of different origins.",
    category: "XSS and CSRF"
  },
  {
    id: 153,
    question: "Which SOP violation enables many XSS attacks?",
    options: { a: "Allowing cookies", b: "Allowing script execution", c: "Allowing injected scripts to run with page origin", d: "Allowing HTTPS connections" },
    correctOption: "c",
    justification: "Injected scripts run as if they belong to the site’s origin.",
    category: "XSS and CSRF"
  },
  {
    id: 154,
    question: "XSS is particularly dangerous because injected scripts execute:",
    options: { a: "With attacker privileges", b: "With browser privileges", c: "With victim user’s origin and privileges", d: "In isolated sandboxes" },
    correctOption: "c",
    justification: "XSS runs with the victim’s permissions within that origin.",
    category: "XSS and CSRF"
  },
  {
    id: 155,
    question: "Which type of XSS stores malicious code on the server?",
    options: { a: "Reflected", b: "DOM-based", c: "Stored (Persistent)", d: "Blind" },
    correctOption: "c",
    justification: "Stored XSS is saved on the server (DB, logs, comments).",
    category: "XSS and CSRF"
  },
  {
    id: 156,
    question: "Stored XSS is especially dangerous because it:",
    options: { a: "Requires user interaction", b: "Affects all users automatically", c: "Cannot bypass SOP", d: "Occurs only in URLs" },
    correctOption: "b",
    justification: "Every visiting user is affected without extra interaction.",
    category: "XSS and CSRF"
  },
  {
    id: 157,
    question: "Reflected XSS typically occurs when:",
    options: { a: "Malicious input is stored in database", b: "Server immediately reflects user input in response", c: "JavaScript reads cookies directly", d: "CSP blocks scripts" },
    correctOption: "b",
    justification: "Server immediately reflects malicious input in the response.",
    category: "XSS and CSRF"
  },
  {
    id: 158,
    question: "Which situation best represents reflected XSS?",
    options: { a: "Malicious comment stored in forum", b: "Script injected via URL parameter and echoed", c: "Script injected into database report", d: "Script from third-party CDN" },
    correctOption: "b",
    justification: "Reflected XSS commonly appears in URLs or form submissions.",
    category: "XSS and CSRF"
  },
  {
    id: 159,
    question: "XSS subverts the Same-Origin Policy by:",
    options: { a: "Disabling cookies", b: "Injecting scripts that inherit the page’s origin", c: "Using HTTPS downgrade", d: "Breaking TLS encryption" },
    correctOption: "b",
    justification: "Injected scripts inherit origin, bypassing SOP intent.",
    category: "XSS and CSRF"
  },
  {
    id: 160,
    question: "Which defense BEST prevents XSS at the browser level?",
    options: { a: "Blacklisting tags", b: "Input validation alone", c: "Content Security Policy (CSP)", d: "Cookie expiration" },
    correctOption: "c",
    justification: "CSP blocks execution of unauthorized scripts in browsers.",
    category: "XSS and CSRF"
  },
  {
    id: 161,
    question: "CSP primarily defends against XSS by:",
    options: { a: "Encrypting JavaScript", b: "Blocking inline and untrusted scripts", c: "Preventing form submission", d: "Hiding error messages" },
    correctOption: "b",
    justification: "CSP restricts inline scripts and untrusted sources.",
    category: "XSS and CSRF"
  },
  {
    id: 162,
    question: "Which CSP directive restricts where scripts can load from?",
    options: { a: "default-src", b: "script-src", c: "frame-src", d: "object-src" },
    correctOption: "b",
    justification: "script-src controls allowed JavaScript sources.",
    category: "XSS and CSRF"
  },
  {
    id: 163,
    question: "Input validation fails against XSS primarily because:",
    options: { a: "JavaScript is encrypted", b: "Filters can be bypassed", c: "Browsers block scripts", d: "HTTPS stops injection" },
    correctOption: "b",
    justification: "Input filters are error-prone and easily bypassed.",
    category: "XSS and CSRF"
  },
  {
    id: 164,
    question: "Cross-Site Request Forgery (CSRF) exploits the fact that:",
    options: { a: "Browsers allow cross-origin scripts", b: "Browsers automatically include credentials", c: "Cookies are encrypted", d: "SOP blocks requests" },
    correctOption: "b",
    justification: "Browsers automatically attach cookies to requests.",
    category: "XSS and CSRF"
  },
  {
    id: 165,
    question: "CSRF attacks succeed even though SOP exists because:",
    options: { a: "SOP blocks reading responses, not sending requests", b: "SOP is disabled in HTTPS", c: "SOP applies only to scripts", d: "SOP allows cookie theft" },
    correctOption: "a",
    justification: "SOP restricts reading responses, not sending requests.",
    category: "XSS and CSRF"
  },
  {
    id: 166,
    question: "Which CSRF attack scenario is MOST realistic?",
    options: { a: "Attacker steals session cookie via XSS", b: "Victim clicks a link transferring funds", c: "Attacker queries database", d: "Victim downloads malware" },
    correctOption: "b",
    justification: "CSRF often tricks victim into submitting authenticated requests.",
    category: "XSS and CSRF"
  },
  {
    id: 167,
    question: "Referer validation works by:",
    options: { a: "Blocking all external requests", b: "Checking source domain of requests", c: "Encrypting request headers", d: "Changing session Ids" },
    correctOption: "b",
    justification: "Server checks where the request originated from.",
    category: "XSS and CSRF"
  },
  {
    id: 168,
    question: "Referer-based CSRF protection is unreliable because:",
    options: { a: "Referer headers are encrypted", b: "Browsers may omit Referer", c: "TLS disables Referer", d: "Cookies override Referer" },
    correctOption: "b",
    justification: "Browsers may suppress Referer for privacy/security reasons.",
    category: "XSS and CSRF"
  },
  {
    id: 169,
    question: "The Synchronizer Token Pattern defends against CSRF by:",
    options: { a: "Using predictable tokens", b: "Including secret tokens in each request", c: "Storing token only in cookies", d: "Encrypting request body" },
    correctOption: "b",
    justification: "Secret per-request tokens prevent forged requests.",
    category: "XSS and CSRF"
  },
  {
    id: 170,
    question: "CSRF tokens must be:",
    options: { a: "Static and reusable", b: "Guessable", c: "Unique and unpredictable", d: "Stored in URLs always" },
    correctOption: "c",
    justification: "Tokens must be unpredictable to prevent guessing.",
    category: "XSS and CSRF"
  },
  {
    id: 171,
    question: "Double Submit Cookie defense works by:",
    options: { a: "Storing token only server-side", b: "Comparing cookie token with request token", c: "Disabling cookies", d: "Using CSP" },
    correctOption: "b",
    justification: "Server compares cookie token with request token.",
    category: "XSS and CSRF"
  },
  {
    id: 172,
    question: "Double Submit Cookie does NOT require:",
    options: { a: "Server-side token storage", b: "Cookies", c: "Client-side scripting", d: "HTTPS" },
    correctOption: "a",
    justification: "No server-side token storage is required.",
    category: "XSS and CSRF"
  },
  {
    id: 173,
    question: "SameSite=Lax cookies:",
    options: { a: "Are never sent cross-site", b: "Are sent on top-level navigation", c: "Are less secure than None always", d: "Block all POST requests" },
    correctOption: "b",
    justification: "Lax allows cookies on top-level navigations (GET).",
    category: "XSS and CSRF"
  },
  {
    id: 174,
    question: "SameSite=Strict provides stronger CSRF protection because:",
    options: { a: "Cookies are encrypted", b: "Cookies are never sent on cross-site requests", c: "It disables JavaScript", d: "It blocks XSS" },
    correctOption: "b",
    justification: "Strict prevents cookies from being sent cross-site entirely.",
    category: "XSS and CSRF"
  },
  {
    id: 175,
    question: "Which SameSite option provides the HIGHEST CSRF protection but lowest usability?",
    options: { a: "None", b: "Lax", c: "Strict", d: "HttpOnly" },
    correctOption: "c",
    justification: "Strict maximizes security but reduces usability.",
    category: "XSS and CSRF"
  },
  {
    id: 176,
    question: "Which combination BEST defends against CSRF in modern browsers?",
    options: { a: "Referer only", b: "SameSite cookies only", c: "CSRF tokens + SameSite cookies", d: "HTTPS only" },
    correctOption: "c",
    justification: "Token + SameSite provides layered CSRF defense.",
    category: "XSS and CSRF"
  }
];