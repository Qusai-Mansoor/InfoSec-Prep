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
  },
  // --- Lecture 01: Introduction to Information Security ---
  {
    id: 177,
    question: "The \"CIA Triad\" consists of which three core principles?",
    options: { a: "Confidentiality, Intelligence, Authentication", b: "Confidentiality, Integrity, Availability", c: "Control, Integrity, Authorization", d: "Cyber, Information, Assets" },
    correctOption: "b",
    justification: "The three core principles of the CIA Triad are Confidentiality, Integrity, and Availability[cite: 2, 4, 7].",
    category: "Introduction to Information Security"
  },
  {
    id: 178,
    question: "Which term describes the process of ensuring that data has not been altered or tampered with by unauthorized entities?",
    options: { a: "Confidentiality", b: "Availability", c: "Integrity", d: "Non-repudiation" },
    correctOption: "c",
    justification: "Integrity is the process of ensuring data has not been altered or tampered with[cite: 8, 11, 13].",
    category: "Introduction to Information Security"
  },
  {
    id: 179,
    question: "In the \"Scooter and the Fence\" analogy, the \"Hole in the Fence\" represents which security term?",
    options: { a: "Threat", b: "Asset", c: "Vulnerability", d: "Risk" },
    correctOption: "c",
    justification: "A vulnerability is a weakness, represented by the hole in the fence in this analogy[cite: 14, 17, 19].",
    category: "Introduction to Information Security"
  },
  {
    id: 180,
    question: "Which type of attacker is motivated by ideology, principles, or beliefs (e.g., Anonymous)?",
    options: { a: "Script Kiddie", b: "Hacktivist", c: "Nation-State Actor", d: "Insider" },
    correctOption: "b",
    justification: "Hacktivists are attackers motivated by ideology, principles, or beliefs[cite: 20, 22, 25].",
    category: "Introduction to Information Security"
  },
  {
    id: 181,
    question: "Which step of the \"Cyber Kill Chain\" involves creating a deliverable payload (like a PDF with a virus)?",
    options: { a: "Reconnaissance", b: "Weaponization", c: "Installation", d: "Command and Control" },
    correctOption: "b",
    justification: "Weaponization involves creating the deliverable payload[cite: 26, 28, 31].",
    category: "Introduction to Information Security"
  },
  {
    id: 182,
    question: "What is the definition of \"Risk\" in information security?",
    options: { a: "A weakness in a system.", b: "The person carrying out the attack.", c: "The likelihood that a threat agent will exploit a vulnerability.", d: "An item of value to the organization." },
    correctOption: "c",
    justification: "Risk is defined as the likelihood that a threat agent will exploit a vulnerability[cite: 32, 35, 37].",
    category: "Introduction to Information Security"
  },
  {
    id: 183,
    question: "Which defense principle suggests using multiple different types of protection (e.g., Firewall + Antivirus + Strong Passwords) so that if one fails, others stand?",
    options: { a: "Obscurity", b: "Limiting", c: "Layering (Defense in Depth)", d: "Simplicity" },
    correctOption: "c",
    justification: "Layering, or Defense in Depth, uses multiple types of protection[cite: 38, 41, 43].",
    category: "Introduction to Information Security"
  },
  {
    id: 184,
    question: "An attacker who lacks technical knowledge and uses automated tools (scripts) written by others is known as:",
    options: { a: "Black Hat", b: "White Hat", c: "Script Kiddie", d: "Broker" },
    correctOption: "c",
    justification: "Script Kiddies lack technical knowledge and rely on tools written by others[cite: 44, 47, 49].",
    category: "Introduction to Information Security"
  },
  {
    id: 185,
    question: "The attack on \"Sony\" mentioned in the slides primarily utilized which attack vector to steal millions of accounts?",
    options: { a: "Phishing", b: "SQL Injection", c: "DDoS", d: "Buffer Overflow" },
    correctOption: "b",
    justification: "The Sony attack mentioned utilized SQL Injection[cite: 50, 52, 55].",
    category: "Introduction to Information Security"
  },
  {
    id: 186,
    question: "What is \"Security through Obscurity\"?",
    options: { a: "Making the system code open source.", b: "Relying on hiding design details (like OS version or software brand) to provide security.", c: "Using complex encryption keys.", d: "Hiding the server in a dark room." },
    correctOption: "b",
    justification: "Security through Obscurity relies on hiding design details rather than strong controls[cite: 56, 58, 61].",
    category: "Introduction to Information Security"
  },

  // --- Lecture 02: Malware ---
  {
    id: 187,
    question: "Which type of malware self-replicates and spreads across a network without requiring a host program or user action?",
    options: { a: "Virus", b: "Trojan", c: "Worm", d: "Logic Bomb" },
    correctOption: "c",
    justification: "A Worm self-replicates and spreads without a host program or user action[cite: 63, 66, 68].",
    category: "Malware"
  },
  {
    id: 188,
    question: "A malicious program that masquerades as a legitimate application but performs malicious activities in the background is called:",
    options: { a: "Worm", b: "Trojan Horse", c: "Rootkit", d: "Polymorphic Virus" },
    correctOption: "b",
    justification: "A Trojan Horse masquerades as a legitimate application[cite: 69, 71, 74].",
    category: "Malware"
  },
  {
    id: 189,
    question: "Which type of malware encrypts a user's files and demands payment to decrypt them?",
    options: { a: "Spyware", b: "Ransomware", c: "Adware", d: "Logic Bomb" },
    correctOption: "b",
    justification: "Ransomware encrypts files and demands payment[cite: 75, 77, 80].",
    category: "Malware"
  },
  {
    id: 190,
    question: "What is a \"Rootkit\"?",
    options: { a: "A program that records keystrokes.", b: "Malware that hides its presence by modifying the operating system's kernel or system files.", c: "A virus that infects the boot sector.", d: "Adware that displays pop-ups." },
    correctOption: "b",
    justification: "A Rootkit hides its presence by modifying the OS kernel or system files[cite: 81, 83, 86].",
    category: "Malware"
  },
  {
    id: 191,
    question: "\"Stuxnet\" is a famous example of which type of attack?",
    options: { a: "Adware", b: "Advanced Persistent Threat (APT) / Cyberwarfare weapon", c: "Ransomware", d: "SQL Injection" },
    correctOption: "b",
    justification: "Stuxnet is a prime example of an APT or Cyberwarfare weapon[cite: 87, 89, 92].",
    category: "Malware"
  },
  {
    id: 192,
    question: "What is the difference between \"Polymorphic\" and \"Metamorphic\" malware?",
    options: { a: "Polymorphic rewrites its code; Metamorphic encrypts its payload.", b: "Polymorphic uses a variable encryption key/decryptor; Metamorphic rewrites its internal code logic/instructions each iteration.", c: "Polymorphic targets Windows; Metamorphic targets Linux.", d: "There is no difference." },
    correctOption: "b",
    justification: "Polymorphic varies the encryption/decryptor, while Metamorphic rewrites its internal code logic[cite: 93, 95, 98].",
    category: "Malware"
  },
  {
    id: 193,
    question: "A \"Logic Bomb\" is code that:",
    options: { a: "Explodes the computer hardware.", b: "Lies dormant until a specific logical condition (e.g., a specific date or an employee being fired) is met.", c: "Spreads via email attachments.", d: "Floods a network with traffic." },
    correctOption: "b",
    justification: "A Logic Bomb lies dormant until a specific condition is met[cite: 99, 101, 104].",
    category: "Malware"
  },
  {
    id: 194,
    question: "\"Oligomorphic\" malware is characterized by:",
    options: { a: "Having no decryptor.", b: "Using a small, predefined pool of decryptors that it switches between.", c: "Rewriting its entire source code.", d: "Infecting only image files." },
    correctOption: "b",
    justification: "Oligomorphic malware uses a small pool of decryptors to switch between[cite: 105, 107, 110].",
    category: "Malware"
  },
  {
    id: 195,
    question: "Which malware type exploits the \"AutoRun\" feature on USB drives to infect computers?",
    options: { a: "Macro Virus", b: "Boot Sector Virus / USB Worm", c: "Adware", d: "Scareware" },
    correctOption: "b",
    justification: "USB Worms or Boot Sector viruses often exploit AutoRun features[cite: 111, 113, 116].",
    category: "Malware"
  },
  {
    id: 196,
    question: "Malvertising is defined as:",
    options: { a: "Advertising bad products.", b: "Using legitimate online advertising networks to distribute malware.", c: "Sending spam emails.", d: "Blocking advertisements." },
    correctOption: "b",
    justification: "Malvertising uses legitimate ad networks to distribute malware[cite: 117, 119, 122].",
    category: "Malware"
  },

  // --- Lecture 03: Social Engineering ---
  {
    id: 197,
    question: "Gaining unauthorized access to a secure facility by following closely behind an authorized person is called:",
    options: { a: "Phishing", b: "Tailgating / Piggybacking", c: "Dumpster Diving", d: "Shoulder Surfing" },
    correctOption: "b",
    justification: "Tailgating or Piggybacking is following an authorized person into a secure facility[cite: 124, 126, 129].",
    category: "Social Engineering"
  },
  {
    id: 198,
    question: "Which social engineering attack involves digging through trash to find discarded sensitive documents?",
    options: { a: "Vishing", b: "Dumpster Diving", c: "Whaling", d: "Baiting" },
    correctOption: "b",
    justification: "Dumpster Diving involves digging through trash for sensitive documents[cite: 130, 132, 135].",
    category: "Social Engineering"
  },
  {
    id: 199,
    question: "\"Spear Phishing\" differs from standard Phishing because:",
    options: { a: "It uses voice calls instead of email.", b: "It targets a specific individual or organization with personalized information.", c: "It targets only wealthy individuals.", d: "It involves physical access." },
    correctOption: "b",
    justification: "Spear Phishing targets specific individuals or organizations with personalized info[cite: 136, 138, 141].",
    category: "Social Engineering"
  },
  {
    id: 200,
    question: "An attack where a perpetrator leaves an infected USB drive in a parking lot, hoping a curious employee will plug it in, is called:",
    options: { a: "Pretexting", b: "Baiting", c: "Quid Pro Quo", d: "Vishing" },
    correctOption: "b",
    justification: "Baiting involves leaving physical media like a USB drive for a victim to find[cite: 142, 144, 147].",
    category: "Social Engineering"
  },
  {
    id: 201,
    question: "\"Vishing\" is a combination of:",
    options: { a: "Video and Phishing", b: "Voice (VoIP) and Phishing", c: "Virus and Phishing", d: "Virtual and Phishing" },
    correctOption: "b",
    justification: "Vishing stands for Voice Phishing[cite: 148, 150, 153].",
    category: "Social Engineering"
  },
  {
    id: 202,
    question: "Which attack involves an attacker pretending to be from IT Support and asking for your password to \"fix a problem\"?",
    options: { a: "Tailgating", b: "Pretexting / Impersonation", c: "SQL Injection", d: "Man-in-the-Middle" },
    correctOption: "b",
    justification: "Pretexting or Impersonation involves creating a scenario to steal credentials[cite: 154, 156, 159].",
    category: "Social Engineering"
  },
  {
    id: 203,
    question: "\"Typosquatting\" (or URL Hijacking) relies on:",
    options: { a: "Users typing a website address incorrectly (e.g., goggle.com instead of google.com).", b: "Hacking the DNS server.", c: "Stealing the domain name.", d: "Using SQL injection on the URL." },
    correctOption: "a",
    justification: "Typosquatting relies on users making typographical errors in URLs[cite: 160, 161, 165].",
    category: "Social Engineering"
  },
  {
    id: 204,
    question: "\"Whaling\" is a form of phishing that specifically targets:",
    options: { a: "Low-level employees.", b: "High-value targets like CEOs or CFOs (\"The Big Fish\").", c: "System Administrators only.", d: "Random internet users." },
    correctOption: "b",
    justification: "Whaling targets high-value individuals like executives[cite: 166, 168, 171].",
    category: "Social Engineering"
  },

  // --- Lecture 04: Cryptography - Classical Ciphers ---
  {
    id: 205,
    question: "The \"Caesar Cipher\" is a type of:",
    options: { a: "Transposition Cipher", b: "Mono-alphabetic Substitution Cipher", c: "Poly-alphabetic Substitution Cipher", d: "Asymmetric Cipher" },
    correctOption: "b",
    justification: "The Caesar Cipher is a Mono-alphabetic Substitution Cipher[cite: 173, 175, 178].",
    category: "Cryptography - Classical"
  },
  {
    id: 206,
    question: "Using a Caesar Cipher with a shift (key) of k=3, what is the ciphertext for \"ABC\"?",
    options: { a: "XYZ", b: "DEF", c: "BCD", d: "GHI" },
    correctOption: "b",
    justification: "A+3=D, B+3=E, C+3=F[cite: 179, 184].",
    category: "Cryptography - Classical"
  },
  {
    id: 207,
    question: "The \"ROT-13\" cipher is unique because:",
    options: { a: "It uses 13 keys.", b: "It is its own inverse (Applying it twice returns the original text).", c: "It shifts letters by 26 places.", d: "It is unbreakable." },
    correctOption: "b",
    justification: "ROT-13 is its own inverse; shifting by 13 twice returns the original text[cite: 185, 187, 190].",
    category: "Cryptography - Classical"
  },
  {
    id: 208,
    question: "In an Affine Cipher, the encryption function is E(x)=(ax+b) mod m. If a=3, b=2, and m=26 encrypt the letter 'A' (Assume A=0).",
    options: { a: "B (1)", b: "C (2)", c: "D (3)", d: "E (4)" },
    correctOption: "b",
    justification: "Calculation: E(0) = (3*0 + 2) % 26 = 2. Letter 2 is 'C'[cite: 191, 197, 198].",
    category: "Cryptography - Classical"
  },
  {
    id: 209,
    question: "For an Affine Cipher to work correctly, the value 'a' must be:",
    options: { a: "An even number.", b: "Coprime to 'm' (size of alphabet).", c: "Greater than 'm'.", d: "Equal to 'b'." },
    correctOption: "b",
    justification: "Value 'a' must be coprime to 'm' to ensure a modular inverse exists[cite: 199, 201, 204].",
    category: "Cryptography - Classical"
  },
  {
    id: 210,
    question: "Which cipher uses a grid to scramble the positions of the letters (e.g., writing the message in diagonals and reading row by row)?",
    options: { a: "Caesar Cipher", b: "Rail Fence Cipher (Transposition)", c: "Vigenère Cipher", d: "Playfair Cipher" },
    correctOption: "b",
    justification: "The Rail Fence Cipher is a transposition cipher that scrambles positions[cite: 205, 207, 210].",
    category: "Cryptography - Classical"
  },
  {
    id: 211,
    question: "You are using a Rail Fence Cipher with a depth (rows) of 2. The plaintext is \"HELLO\". What is the ciphertext?",
    options: { a: "HLOEL", b: "EHLLO", c: "LLEHO", d: "OLLHE" },
    correctOption: "a",
    justification: "Row 1: H.L.O; Row 2: .E.L.; Read: HLOEL[cite: 211, 217, 219].",
    category: "Cryptography - Classical"
  },
  {
    id: 212,
    question: "The Vigenère Cipher is an example of:",
    options: { a: "Mono-alphabetic Substitution", b: "Poly-alphabetic Substitution", c: "Transposition", d: "Stream Cipher" },
    correctOption: "b",
    justification: "Vigenère is a Poly-alphabetic Substitution cipher[cite: 222, 224, 227].",
    category: "Cryptography - Classical"
  },
  {
    id: 213,
    question: "In a Vigenère cipher, if the Plaintext letter is 'A' (0) and the Key letter is 'B' (1), what is the Ciphertext?",
    options: { a: "A", b: "B", c: "C", d: "Z" },
    correctOption: "b",
    justification: "0 + 1 = 1, which corresponds to B[cite: 228, 233].",
    category: "Cryptography - Classical"
  },
  {
    id: 214,
    question: "Cryptanalysis using \"Frequency Analysis\" is most effective against:",
    options: { a: "Mono-alphabetic Substitution Ciphers (like Caesar)", b: "Poly-alphabetic Ciphers (like Vigenère with long keys)", c: "One-Time Pads", d: "AES" },
    correctOption: "a",
    justification: "Frequency analysis is most effective against Mono-alphabetic Substitution because it preserves language statistics[cite: 234, 235, 239].",
    category: "Cryptography - Classical"
  },
  {
    id: 215,
    question: "\"Kerckhoffs's Principle\" states that:",
    options: { a: "The security of a system should depend on keeping the algorithm secret.", b: "The security of a system should depend only on the secrecy of the key, not the algorithm.", c: "Long keys are always secure.", d: "Transposition is better than substitution." },
    correctOption: "b",
    justification: "Kerckhoffs's Principle states security should depend only on the key's secrecy[cite: 240, 242, 245].",
    category: "Cryptography - Classical"
  },
  {
    id: 216,
    question: "An encryption scheme is \"Unconditionally Secure\" if:",
    options: { a: "It uses a 128-bit key.", b: "The ciphertext provides no information about the plaintext, regardless of computational power (e.g., One-Time Pad).", c: "It takes 100 years to crack.", d: "The algorithm is hidden." },
    correctOption: "b",
    justification: "Unconditional security means the ciphertext reveals nothing about the plaintext regardless of computing power[cite: 246, 248, 251].",
    category: "Cryptography - Classical"
  },

  // --- Lecture 05: Data Encryption Standard (DES) ---
  {
    id: 217,
    question: "DES is a block cipher that operates on plaintext blocks of what size?",
    options: { a: "32 bits", b: "64 bits", c: "128 bits", d: "256 bits" },
    correctOption: "b",
    justification: "DES operates on 64-bit blocks[cite: 253, 255, 258].",
    category: "Cryptography - DES"
  },
  {
    id: 218,
    question: "What is the effective key length of DES?",
    options: { a: "56 bits", b: "64 bits", c: "48 bits", d: "128 bits" },
    correctOption: "a",
    justification: "The effective key length of DES is 56 bits (64 bits minus 8 parity bits)[cite: 259, 260, 264].",
    category: "Cryptography - DES"
  },
  {
    id: 219,
    question: "How many rounds of processing (Feistel rounds) does DES perform?",
    options: { a: "8", b: "10", c: "16", d: "32" },
    correctOption: "c",
    justification: "DES performs 16 Feistel rounds[cite: 265, 268, 270].",
    category: "Cryptography - DES"
  },
  {
    id: 220,
    question: "In DES, the \"Expansion P-Box\" converts the 32-bit Right Half into how many bits before XORing with the Round Key?",
    options: { a: "32 bits", b: "48 bits", c: "56 bits", d: "64 bits" },
    correctOption: "b",
    justification: "The Expansion P-Box converts 32 bits to 48 bits[cite: 271, 273, 276].",
    category: "Cryptography - DES"
  },
  {
    id: 221,
    question: "A DES S-Box takes an input of X bits and produces an output of Y bits. What are X and Y?",
    options: { a: "6 input, 4 output", b: "4 input, 6 output", c: "8 input, 8 output", d: "48 input, 32 output" },
    correctOption: "a",
    justification: "A DES S-Box takes 6 bits input and produces 4 bits output[cite: 277, 278, 282].",
    category: "Cryptography - DES"
  },
  {
    id: 222,
    question: "If the input to a DES S-Box is 100011, how do you determine the Row and Column?",
    options: { a: "Row = 11 (3), Column = 0001 (1)", b: "Row = 10 (2), Column = 0011 (3)", c: "Row = 01 (1), Column = 1000 (8)", d: "It is random." },
    correctOption: "a",
    justification: "Row is first/last bits (11=3), Column is middle bits (0001=1)[cite: 283, 284, 289].",
    category: "Cryptography - DES"
  },
  {
    id: 223,
    question: "The \"Initial Permutation\" (IP) and \"Final Permutation\" (FP) in DES:",
    options: { a: "Significantly increase cryptographic strength.", b: "Are inverses of each other and have no cryptographic significance.", c: "Are used to generate the keys.", d: "Compress the data." },
    correctOption: "b",
    justification: "IP and FP are inverses and have no cryptographic significance[cite: 291, 293, 296].",
    category: "Cryptography - DES"
  },
  {
    id: 224,
    question: "What is the \"Feistel Structure\" used in DES?",
    options: { a: "A structure where the entire block is encrypted at once.", b: "A structure that splits the block into two halves, processes one half, and swaps them.", c: "A structure that uses only substitution.", d: "A stream cipher structure." },
    correctOption: "b",
    justification: "Feistel structure splits the block, processes one half, and swaps[cite: 297, 299, 302].",
    category: "Cryptography - DES"
  },
  {
    id: 225,
    question: "In DES key generation, the 56-bit key is split into two 28-bit halves. What operation is performed on these halves in each round?",
    options: { a: "XOR", b: "Circular Left Shift", c: "Right Shift", d: "Substitution" },
    correctOption: "b",
    justification: "Circular Left Shift is performed on the key halves[cite: 303, 306, 309].",
    category: "Cryptography - DES"
  },
  {
    id: 226,
    question: "Why is DES no longer considered secure?",
    options: { a: "The algorithm was leaked.", b: "The key size (56 bits) is too small to withstand modern brute-force attacks.", c: "It is too slow.", d: "It has a backdoor." },
    correctOption: "b",
    justification: "The 56-bit key size is too small for modern brute-force attacks[cite: 310, 312, 315].",
    category: "Cryptography - DES"
  },

  // --- Lecture 06: Advanced Encryption Standard (AES) ---
  {
    id: 227,
    question: "AES was designed to replace which aging encryption standard?",
    options: { a: "RSA", b: "DES", c: "3DES", d: "Blowfish" },
    correctOption: "b",
    justification: "AES was designed to replace DES[cite: 317, 319, 322].",
    category: "Cryptography - AES"
  },
  {
    id: 228,
    question: "Unlike DES, which uses a Feistel structure, AES uses a:",
    options: { a: "Substitution-Permutation Network (SPN)", b: "Stream Cipher structure", c: "Block Chaining Network", d: "Recursive structure" },
    correctOption: "a",
    justification: "AES uses a Substitution-Permutation Network (SPN)[cite: 323, 324, 328].",
    category: "Cryptography - AES"
  },
  {
    id: 229,
    question: "What is the fixed block size for AES?",
    options: { a: "64 bits", b: "128 bits", c: "256 bits", d: "Variable depending on key length" },
    correctOption: "b",
    justification: "AES has a fixed block size of 128 bits[cite: 329, 331, 334].",
    category: "Cryptography - AES"
  },
  {
    id: 230,
    question: "If you are using AES-256, how many rounds of processing are performed?",
    options: { a: "10", b: "12", c: "14", d: "16" },
    correctOption: "c",
    justification: "AES-256 uses 14 rounds[cite: 335, 338, 340].",
    category: "Cryptography - AES"
  },
  {
    id: 231,
    question: "Which operation in the AES round involves a non-linear substitution using an S-Box?",
    options: { a: "ShiftRows", b: "MixColumns", c: "AddRoundKey", d: "SubBytes" },
    correctOption: "d",
    justification: "SubBytes performs non-linear substitution using an S-Box[cite: 342, 346, 347].",
    category: "Cryptography - AES"
  },
  {
    id: 232,
    question: "In the \"ShiftRows\" transformation, how many bytes is the first row (Row 0) shifted?",
    options: { a: "0 bytes (It is not shifted)", b: "1 byte", c: "2 bytes", d: "3 bytes" },
    correctOption: "a",
    justification: "Row 0 is not shifted (0 bytes)[cite: 348, 349, 353].",
    category: "Cryptography - AES"
  },
  {
    id: 233,
    question: "In the \"ShiftRows\" transformation, how many bytes is the last row (Row 3) shifted?",
    options: { a: "0 bytes", b: "1 byte", c: "2 bytes", d: "3 bytes" },
    correctOption: "d",
    justification: "Row 3 is shifted by 3 bytes[cite: 354, 358, 359].",
    category: "Cryptography - AES"
  },
  {
    id: 234,
    question: "Which AES transformation is omitted in the final round?",
    options: { a: "SubBytes", b: "ShiftRows", c: "MixColumns", d: "AddRoundKey" },
    correctOption: "c",
    justification: "MixColumns is omitted in the final round[cite: 360, 363, 365].",
    category: "Cryptography - AES"
  },
  {
    id: 235,
    question: "The \"AddRoundKey\" transformation combines the State with the Round Key using which bitwise operation?",
    options: { a: "AND", b: "OR", c: "XOR", d: "NAND" },
    correctOption: "c",
    justification: "AddRoundKey uses XOR[cite: 366, 369, 371].",
    category: "Cryptography - AES"
  },
  {
    id: 236,
    question: "In AES, the 128-bit block is arranged as a State Matrix of what dimensions (in bytes)?",
    options: { a: "2x8", b: "4x4", c: "8x8", d: "1x16" },
    correctOption: "b",
    justification: "The State Matrix is 4x4 bytes[cite: 372, 374, 378].",
    category: "Cryptography - AES"
  },
  {
    id: 237,
    question: "Which layer of AES provides \"Diffusion\" by mixing data across the columns?",
    options: { a: "SubBytes", b: "ShiftRows", c: "MixColumns", d: "AddRoundKey" },
    correctOption: "c",
    justification: "MixColumns provides diffusion by mixing data across columns[cite: 379, 382, 384].",
    category: "Cryptography - AES"
  },

  // --- Lecture 07: AES Key Expansion ---
  {
    id: 238,
    question: "For AES-128, the input key is 16 bytes (4 words). How many words does the Expanded Key contain in total (for all 10 rounds + initial)?",
    options: { a: "40 words", b: "44 words", c: "50 words", d: "60 words" },
    correctOption: "b",
    justification: "4 words/round * 11 sets = 44 words total[cite: 386, 389, 392].",
    category: "Cryptography - AES Key Expansion"
  },
  {
    id: 239,
    question: "In the key expansion algorithm, specific processing (Function g) is applied to a word when its index is a multiple of:",
    options: { a: "2", b: "4", c: "8", d: "10" },
    correctOption: "b",
    justification: "Function g is applied when the index is a multiple of 4[cite: 393, 395, 398].",
    category: "Cryptography - AES Key Expansion"
  },
  {
    id: 240,
    question: "The \"RotWord\" function performs a cyclic left shift on a 4-byte word. If the input is [A, B, C, D], what is the output?",
    options: { a: "[D, A, B, C]", b: "[B, C, D, A]", c: "[A, C, B, D]", d: "[D, C, B, A]" },
    correctOption: "b",
    justification: "RotWord shifts left, resulting in [B, C, D, A][cite: 399, 402, 405].",
    category: "Cryptography - AES Key Expansion"
  },
  {
    id: 241,
    question: "Apply RotWord to the hex word 1A 2B 3C 4D.",
    options: { a: "4D 1A 2B 3C", b: "2B 3C 4D 1A", c: "1A 4D 3C 2B", d: "3C 4D 1A 2B" },
    correctOption: "b",
    justification: "Cyclic left shift moves 1A to the end: 2B 3C 4D 1A[cite: 406, 408, 411].",
    category: "Cryptography - AES Key Expansion"
  },
  {
    id: 242,
    question: "What is the purpose of the \"Rcon\" (Round Constant) in AES Key Expansion?",
    options: { a: "To add symmetry to the key.", b: "To eliminate linearity and ensure each round key is different.", c: "To shift the rows of the key.", d: "To convert the key to ASCII." },
    correctOption: "b",
    justification: "Rcon eliminates linearity and ensures distinct round keys[cite: 412, 414, 417].",
    category: "Cryptography - AES Key Expansion"
  },
  {
    id: 243,
    question: "If the round constant Rcon [1] is 01 00 00 00 and the output of the SubWord step is AB CD EF 12, what is the result of SubWord XOR Rcon?",
    options: { a: "AC CD EF 12", b: "AA CD EF 12", c: "AB CD EF 13", d: "00 00 00 00" },
    correctOption: "b",
    justification: "AB (10101011) XOR 01 (00000001) = AA (10101010)[cite: 418, 420, 423].",
    category: "Cryptography - AES Key Expansion"
  },
  {
    id: 244,
    question: "For words that are NOT a multiple of 4 (Wi where i ≠ 4k), the word is calculated as:",
    options: { a: "Wi-1 XOR Wi-4", b: "Wi-1 + Wi-4", c: "SubWord(Wi-1) XOR Wi-4", d: "RotWord(Wi-1)" },
    correctOption: "a",
    justification: "Words not a multiple of 4 are calculated as Wi-1 XOR Wi-4[cite: 425, 426, 430].",
    category: "Cryptography - AES Key Expansion"
  },

  // --- Lecture 08: Public Key Cryptography & RSA ---
  {
    id: 245,
    question: "In a Public Key Infrastructure, which key is kept secret?",
    options: { a: "The Public Key", b: "The Private Key", c: "Both keys", d: "Neither key" },
    correctOption: "b",
    justification: "The Private Key is kept secret[cite: 432, 434, 437].",
    category: "Cryptography - RSA"
  },
  {
    id: 246,
    question: "If User A wants to send an encrypted message to User B using RSA, which key does User A use to encrypt?",
    options: { a: "User A's Private Key", b: "User A's Public Key", c: "User B's Public Key", d: "User B's Private Key" },
    correctOption: "c",
    justification: "Encryption is done using the recipient's (User B's) Public Key[cite: 438, 441, 443].",
    category: "Cryptography - RSA"
  },
  {
    id: 247,
    question: "The security of RSA depends on the computational difficulty of:",
    options: { a: "Calculating discrete logarithms.", b: "Factoring large integers into prime numbers.", c: "Solving elliptic curve equations.", d: "Permuting blocks of text." },
    correctOption: "b",
    justification: "RSA security depends on the difficulty of factoring large integers into primes[cite: 444, 446, 449].",
    category: "Cryptography - RSA"
  },
  {
    id: 248,
    question: "In RSA key generation, if you choose primes p=3 and q=11, what is the value of n?",
    options: { a: "14", b: "33", c: "20", d: "8" },
    correctOption: "b",
    justification: "n = p * q = 3 * 11 = 33[cite: 450, 452, 455].",
    category: "Cryptography - RSA"
  },
  {
    id: 249,
    question: "Using p=3 and q=11, what is the value of φ(n) (Euler's Totient)?",
    options: { a: "33", b: "14", c: "20", d: "30" },
    correctOption: "c",
    justification: "φ(n) = (p-1)(q-1) = 2 * 10 = 20[cite: 456, 459, 461].",
    category: "Cryptography - RSA"
  },
  {
    id: 250,
    question: "If φ(n)=20 and you choose the public exponent e=3, which of the following is the correct Private Key exponent d? (Hint: d * e ≡ 1 mod 20)",
    options: { a: "3", b: "7", c: "11", d: "13" },
    correctOption: "b",
    justification: "3 * 7 = 21, which is 1 mod 20. So d=7[cite: 462, 465, 468].",
    category: "Cryptography - RSA"
  },
  {
    id: 251,
    question: "If Public Key={7,33} and Plaintext M=2, what is the Ciphertext C? (Hint: C=M^e mod n)",
    options: { a: "2", b: "8", c: "29", d: "128" },
    correctOption: "c",
    justification: "2^7 = 128. 128 / 33 = 3 remainder 29. C=29[cite: 469, 473, 475].",
    category: "Cryptography - RSA"
  },
  {
    id: 252,
    question: "In RSA, the public exponent e must meet which condition regarding φ(n)?",
    options: { a: "e must be larger than φ(n).", b: "e must be a factor of φ(n).", c: "e must be relatively prime (coprime) to φ(n).", d: "e must be even." },
    correctOption: "c",
    justification: "e must be coprime to φ(n)[cite: 477, 480, 482].",
    category: "Cryptography - RSA"
  },
  {
    id: 253,
    question: "Which attack against RSA involves analyzing the time it takes for the system to decrypt a message?",
    options: { a: "Brute Force", b: "Mathematical Attack", c: "Timing Attack (Side Channel)", d: "Chosen Ciphertext Attack" },
    correctOption: "c",
    justification: "Timing attacks analyze the time taken for decryption[cite: 483, 486, 488].",
    category: "Cryptography - RSA"
  },

  // --- Lecture 09: Diffie-Hellman Key Exchange ---
  {
    id: 254,
    question: "What is the primary purpose of the Diffie-Hellman algorithm?",
    options: { a: "To encrypt large files.", b: "To securely exchange a shared secret key over an insecure channel.", c: "To digitally sign documents.", d: "To hash passwords." },
    correctOption: "b",
    justification: "Diffie-Hellman is used to securely exchange a shared secret key[cite: 490, 492, 495].",
    category: "Cryptography - Diffie-Hellman"
  },
  {
    id: 255,
    question: "Diffie-Hellman relies on the difficulty of which mathematical problem?",
    options: { a: "Integer Factorization", b: "Discrete Logarithm Problem", c: "Knapsack Problem", d: "Traveling Salesman Problem" },
    correctOption: "b",
    justification: "Diffie-Hellman relies on the Discrete Logarithm Problem[cite: 496, 498, 501].",
    category: "Cryptography - Diffie-Hellman"
  },
  {
    id: 256,
    question: "In Diffie-Hellman, the public parameters known to everyone are:",
    options: { a: "The private keys XA and XB.", b: "The shared secret K.", c: "The prime modulus q and its primitive root α.", d: "The encrypted message." },
    correctOption: "c",
    justification: "The prime modulus q and primitive root α are public[cite: 502, 505, 507].",
    category: "Cryptography - Diffie-Hellman"
  },
  {
    id: 257,
    question: "User A selects private key XA=4. The public parameters are q=11 and α=2. What is User A's Public Key YA? (Hint: Y = α^X mod q)",
    options: { a: "8", b: "6", c: "5", d: "9" },
    correctOption: "c",
    justification: "2^4 = 16. 16 mod 11 = 5[cite: 508, 513, 515].",
    category: "Cryptography - Diffie-Hellman"
  },
  {
    id: 258,
    question: "User B sends Public Key YB=3. User A (with private key XA=4 and q=11) wants to calculate the Shared Secret K. What is K? (Hint: K = YB^XA mod q)",
    options: { a: "9", b: "4", c: "1", d: "5" },
    correctOption: "b",
    justification: "3^4 = 81. 81 / 11 = 7 remainder 4. K=4[cite: 517, 521, 524].",
    category: "Cryptography - Diffie-Hellman"
  },
  {
    id: 259,
    question: "What is the major security weakness of the basic Diffie-Hellman protocol?",
    options: { a: "It cannot generate long keys.", b: "It is vulnerable to Man-in-the-Middle (MitM) attacks because it lacks authentication.", c: "It requires too much processing power.", d: "It relies on small prime numbers." },
    correctOption: "b",
    justification: "Basic Diffie-Hellman lacks authentication, making it vulnerable to MitM[cite: 526, 528, 531].",
    category: "Cryptography - Diffie-Hellman"
  },
  {
    id: 260,
    question: "If q is a prime number, a \"primitive root\" α must generate:",
    options: { a: "Only even numbers.", b: "All integers from 1 to q-1 when raised to powers modulo q.", c: "Only prime numbers.", d: "Random numbers." },
    correctOption: "b",
    justification: "A primitive root generates all integers from 1 to q-1[cite: 532, 534, 537].",
    category: "Cryptography - Diffie-Hellman"
  },

  // --- Lecture 10: Cryptographic Systems Standards ---
  {
    id: 261,
    question: "Which standard is widely used to secure web traffic (HTTPS)?",
    options: { a: "IPsec", b: "SSL/TLS", c: "Kerberos", d: "WPA2" },
    correctOption: "b",
    justification: "SSL/TLS is the standard for securing web traffic (HTTPS)[cite: 539, 541, 544].",
    category: "Cryptographic Standards"
  },
  {
    id: 262,
    question: "In a cryptographic system handshake, what happens during \"Stage 1\"?",
    options: { a: "Authentication of the user.", b: "Negotiation of security methods and cipher suites.", c: "Key exchange.", d: "Data transmission." },
    correctOption: "b",
    justification: "Stage 1 involves negotiating security methods and cipher suites[cite: 545, 547, 550].",
    category: "Cryptographic Standards"
  },
  {
    id: 263,
    question: "A \"Cipher Suite\" typically includes algorithms for all the following EXCEPT:",
    options: { a: "Key Exchange (e.g., RSA/DH)", b: "Message Integrity (e.g., SHA)", c: "Compression (e.g., ZIP)", d: "Encryption (e.g., AES)" },
    correctOption: "c",
    justification: "Cipher suites do not typically include compression algorithms[cite: 551, 554, 556].",
    category: "Cryptographic Standards"
  },
  {
    id: 264,
    question: "What is the threat posed by Quantum Computing to current cryptography?",
    options: { a: "It can break symmetric keys (AES) instantly.", b: "It can solve the factoring and discrete log problems efficiently, breaking RSA and Diffie-Hellman.", c: "It can reverse hash functions.", d: "It prevents digital signatures." },
    correctOption: "b",
    justification: "Quantum computing can efficiently solve factoring and discrete log problems, threatening RSA/DH[cite: 557, 559, 562].",
    category: "Cryptographic Standards"
  },
  {
    id: 265,
    question: "Quantum Key Distribution (QKD) relies on:",
    options: { a: "The difficulty of factoring.", b: "The behavior of fundamental particles (physics) rather than mathematics.", c: "Extremely long passwords.", d: "Blockchain technology." },
    correctOption: "b",
    justification: "QKD relies on physics (behavior of particles) rather than math[cite: 563, 565, 568].",
    category: "Cryptographic Standards"
  },
  {
    id: 266,
    question: "IPsec operates at which layer of the OSI model?",
    options: { a: "Application Layer (Layer 7)", b: "Transport Layer (Layer 4)", c: "Network Layer (Layer 3)", d: "Data Link Layer (Layer 2)" },
    correctOption: "c",
    justification: "IPsec operates at the Network Layer (Layer 3)[cite: 569, 572, 574].",
    category: "Cryptographic Standards"
  },

  // --- Lecture 11: Hash Functions & Digital Signatures ---
  {
    id: 267,
    question: "Which property of a hash function ensures that it is computationally infeasible to find any two different messages x and y such that H(x)=H(y)?",
    options: { a: "Pre-image resistance", b: "Second pre-image resistance", c: "Collision resistance", d: "Reversibility" },
    correctOption: "c",
    justification: "Collision resistance ensures it's hard to find two messages with the same hash[cite: 576, 579, 581].",
    category: "Hash Functions & Digital Signatures"
  },
  {
    id: 268,
    question: "The \"Avalanche Effect\" in hashing means:",
    options: { a: "The hash function crashes the system.", b: "A small change in the input (1 bit) results in a massive, unpredictable change in the output hash.", c: "The output is always smaller than the input.", d: "The function is slow to compute." },
    correctOption: "b",
    justification: "The Avalanche Effect means a small input change causes a large output change[cite: 582, 584, 587].",
    category: "Hash Functions & Digital Signatures"
  },
  {
    id: 269,
    question: "To create a Digital Signature, the sender encrypts the message hash with:",
    options: { a: "The Sender's Public Key", b: "The Sender's Private Key", c: "The Receiver's Public Key", d: "The Shared Symmetric Key" },
    correctOption: "b",
    justification: "Digital Signatures are created by encrypting the hash with the Sender's Private Key[cite: 588, 590, 593].",
    category: "Hash Functions & Digital Signatures"
  },
  {
    id: 270,
    question: "Digital Signatures provide all the following security services EXCEPT:",
    options: { a: "Authentication", b: "Data Integrity", c: "Non-Repudiation", d: "Confidentiality" },
    correctOption: "d",
    justification: "Digital Signatures do not provide confidentiality; the message itself is often visible[cite: 594, 598, 599].",
    category: "Hash Functions & Digital Signatures"
  },
  {
    id: 271,
    question: "What is an HMAC?",
    options: { a: "A hash function that does not use keys.", b: "A Message Authentication Code constructed using a cryptographic hash function and a secret key.", c: "A digital signature algorithm.", d: "An encryption standard." },
    correctOption: "b",
    justification: "HMAC is a Message Authentication Code using a hash and a secret key[cite: 600, 602, 605].",
    category: "Hash Functions & Digital Signatures"
  },
  {
    id: 272,
    question: "If User A sends a message to User B with a Digital Signature, how does User B verify it?",
    options: { a: "B decrypts the signature with A's Public Key and compares the hash.", b: "B decrypts the signature with B's Private Key.", c: "B asks A to send the password.", d: "B encrypts the message with A's Public Key." },
    correctOption: "a",
    justification: "Verification involves decrypting the signature with the sender's (A's) Public Key[cite: 606, 607, 611].",
    category: "Hash Functions & Digital Signatures"
  },
  {
    id: 273,
    question: "Which SHA version produces a 160-bit hash value?",
    options: { a: "SHA-1", b: "SHA-256", c: "SHA-512", d: "MD5" },
    correctOption: "a",
    justification: "SHA-1 produces a 160-bit hash[cite: 612, 613, 617].",
    category: "Hash Functions & Digital Signatures"
  },
  {
    id: 274,
    question: "Why is MD5 no longer recommended?",
    options: { a: "It is too slow.", b: "It has been found vulnerable to collision attacks.", c: "The output is too large.", d: "It is proprietary." },
    correctOption: "b",
    justification: "MD5 is vulnerable to collision attacks[cite: 618, 620, 623].",
    category: "Hash Functions & Digital Signatures"
  },
  {
    id: 275,
    question: "The input to a hash function can be of variable length, but the output is always:",
    options: { a: "Variable length.", b: "Fixed length.", c: "Twice the input length.", d: "Zero." },
    correctOption: "b",
    justification: "Hash functions produce a fixed-length output[cite: 624, 626, 629].",
    category: "Hash Functions & Digital Signatures"
  },
  {
    id: 276,
    question: "What is \"Second Pre-image Resistance\"?",
    options: { a: "Given a hash h, it is hard to find x.", b: "Given an input x, it is hard to find a different input y such that H(y)=H(x).", c: "It is hard to find any pair (x,y) that collide.", d: "It is hard to decrypt the hash." },
    correctOption: "b",
    justification: "Second Pre-image Resistance means it is hard to find a different input y with the same hash as x[cite: 630, 632, 635].",
    category: "Hash Functions & Digital Signatures"
  },

  // --- Lecture 12: SQL Injection ---
  {
    id: 277,
    question: "SQL Injection is primarily caused by which of the following?",
    options: { a: "Using weak passwords for database accounts", b: "The blurring of the boundary between developer code and user data", c: "Failing to encrypt the database", d: "Allowing users to upload files to the server" },
    correctOption: "b",
    justification: "SQL Injection is caused by the blurring of the boundary between code and user data[cite: 637, 638].",
    category: "SQL Injection"
  },
  {
    id: 278,
    question: "Which of the following is considered the most common attack vector, accounting for over 50% of web application attacks?",
    options: { a: "Cross-Site Scripting (XSS)", b: "Denial of Service (DoS)", c: "SQL Injection (SQLI)", d: "Phishing" },
    correctOption: "c",
    justification: "SQL Injection is the most common attack vector mentioned[cite: 639, 640].",
    category: "SQL Injection"
  },
  {
    id: 279,
    question: "In the classic SQL injection payload frank' OR 1=1 --, what is the purpose of --?",
    options: { a: "To execute the query immediately", b: "To check if the password is correct", c: "To comment out the rest of the query so the password check is ignored", d: "To join two tables together" },
    correctOption: "c",
    justification: "The '--' comments out the rest of the query[cite: 641, 642].",
    category: "SQL Injection"
  },
  {
    id: 280,
    question: "Consider the query: SELECT * FROM Users WHERE name = '$user' AND password = '$pass';. If an attacker enters admin' -- into the user field, what does the database execute?",
    options: { a: "SELECT * FROM Users WHERE name = 'admin' --' AND password = '$pass';", b: "SELECT * FROM Users WHERE name = 'admin';", c: "SELECT * FROM Users WHERE name = 'admin' AND password = '';", d: "It generates a syntax error." },
    correctOption: "a",
    justification: "It effectively executes option B because the rest is commented out, but A is the literal string resulting from injection[cite: 643, 645, 647].",
    category: "SQL Injection"
  },
  {
    id: 281,
    question: "Which SQL injection technique involves using the UNION operator?",
    options: { a: "Blind SQL Injection", b: "Retrieving data from a different table by combining results", c: "Deleting the database schema", d: "Bypassing the login screen using boolean logic" },
    correctOption: "b",
    justification: "UNION-based injection retrieves data from different tables by combining results[cite: 648, 649].",
    category: "SQL Injection"
  },
  {
    id: 282,
    question: "When performing a UNION-based SQL injection, why might an attacker use ORDER BY 1, ORDER BY 2, etc.?",
    options: { a: "To sort the passwords alphabetically", b: "To find the version of the SQL database", c: "To determine the number of columns in the original query", d: "To delete the logs" },
    correctOption: "c",
    justification: "ORDER BY is used to determine the number of columns in the original query[cite: 650, 651].",
    category: "SQL Injection"
  },
  {
    id: 283,
    question: "What is \"Blind\" SQL Injection?",
    options: { a: "The attacker steals data without seeing the database schema.", b: "The attacker cannot see the data directly but infers it from the server's response behavior.", c: "The attacker deletes the data so no one can see it.", d: "The attack happens automatically without human intervention." },
    correctOption: "b",
    justification: "Blind SQL Injection involves inferring data from server behavior without direct output[cite: 652, 653, 655].",
    category: "SQL Injection"
  },
  {
    id: 284,
    question: "Which of the following is a method used in Blind SQL Injection?",
    options: { a: "Measuring the time delay of a response (Time-based)", b: "Using UNION SELECT to dump the table to the screen", c: "Viewing the error message directly to see the table name", d: "Using Google Dorks to find the page" },
    correctOption: "a",
    justification: "Time-based measuring is a method for Blind SQL Injection[cite: 656, 657].",
    category: "SQL Injection"
  },
  {
    id: 285,
    question: "In a Time-Based Blind SQL injection, what payload would confirm a vulnerability if the server pauses?",
    options: { a: "OR 1=1", b: "WAITFOR DELAY '0:0:30'", c: "DROP TABLE Users", d: "SELECT * FROM Users" },
    correctOption: "b",
    justification: "WAITFOR DELAY causes the server to pause, confirming the vulnerability[cite: 658, 659].",
    category: "SQL Injection"
  },
  {
    id: 286,
    question: "What is \"Second Order\" SQL Injection?",
    options: { a: "An injection that happens in the second database of a cluster.", b: "Malicious input is stored in the database first, then executed later in a different query.", c: "An attack that requires two different users to execute.", d: "Using two apostrophes instead of one." },
    correctOption: "b",
    justification: "Second Order SQL Injection occurs when stored malicious input is executed later[cite: 660, 661, 663].",
    category: "SQL Injection"
  },
  {
    id: 287,
    question: "Which of the following is the most effective defense against SQL Injection?",
    options: { a: "Blacklisting characters like ' and --", b: "Using Prepared Statements (Parameterized Queries)", c: "Encrypting the table names", d: "Running the database on a separate server" },
    correctOption: "b",
    justification: "Prepared Statements are the most effective defense against SQL Injection[cite: 664, 665].",
    category: "SQL Injection"
  },
  {
    id: 288,
    question: "Why is \"Blacklisting\" (removing bad characters) generally considered a weak defense?",
    options: { a: "It slows down the database significantly.", b: "It prevents legitimate users like \"Peter O'Connor\" from entering their names.", c: "Attackers can bypass it using encoding (like Hex) to hide characters.", d: "Both B and C." },
    correctOption: "d",
    justification: "Blacklisting is weak because it blocks legitimate input and can be bypassed via encoding[cite: 666, 668].",
    category: "SQL Injection"
  },
  {
    id: 289,
    question: "What is the key advantage of using Prepared Statements?",
    options: { a: "They encrypt the data automatically.", b: "They decouple the code from the data, ensuring user input is treated strictly as data.", c: "They allow the database to execute queries faster by skipping the compilation phase.", d: "They work even if the database is offline." },
    correctOption: "b",
    justification: "Prepared Statements decouple code from data, treating input strictly as data[cite: 669, 670, 672].",
    category: "SQL Injection"
  },
  {
    id: 290,
    question: "What does the Google Dork inurl:index.php?id= typically look for?",
    options: { a: "Admin login pages", b: "Websites that are likely using a database query based on an ID parameter", c: "Encrypted HTTPS websites", d: "Websites running on IIS servers" },
    correctOption: "b",
    justification: "This dork looks for sites using ID parameters in queries, potentially vulnerable to SQLi[cite: 673, 674].",
    category: "SQL Injection"
  },
  {
    id: 291,
    question: "If a website is vulnerable to SQL injection, adding a single apostrophe (') to the URL usually results in:",
    options: { a: "A redirect to the homepage", b: "A successful login", c: "A SQL syntax error message", d: "The server shutting down" },
    correctOption: "c",
    justification: "Adding an apostrophe often causes a SQL syntax error[cite: 675].",
    category: "SQL Injection"
  },

  // --- Lecture 13: HTTP(S) ---
  {
    id: 292,
    question: "Which protocol is considered \"stateless\"?",
    options: { a: "FTP", b: "HTTP", c: "SSH", d: "TCP" },
    correctOption: "b",
    justification: "HTTP is a stateless protocol[cite: 677].",
    category: "HTTP(S) Security"
  },
  {
    id: 293,
    question: "Because HTTP is stateless, what mechanism is commonly used to maintain a user's session (e.g., keeping them logged in)?",
    options: { a: "Keep-Alive headers", b: "Cookies", c: "POST requests", d: "The Referer header" },
    correctOption: "b",
    justification: "Cookies are commonly used to maintain user sessions[cite: 677, 678].",
    category: "HTTP(S) Security"
  },
  {
    id: 294,
    question: "Which HTTP method places parameters directly into the URL?",
    options: { a: "POST", b: "HEAD", c: "GET", d: "CONNECT" },
    correctOption: "c",
    justification: "GET requests place parameters directly in the URL[cite: 679].",
    category: "HTTP(S) Security"
  },
  {
    id: 295,
    question: "Why should sensitive data (like passwords) never be sent via a GET request?",
    options: { a: "GET requests are encrypted by default.", b: "GET requests remain in the browser history and logs.", c: "GET requests are slower than POST.", d: "GET requests are only for images." },
    correctOption: "b",
    justification: "GET requests (and parameters) remain in browser history and logs[cite: 680, 681].",
    category: "HTTP(S) Security"
  },
  {
    id: 296,
    question: "Which header tells the server to keep the TCP connection open for multiple requests?",
    options: { a: "Connection: close", b: "Connection: keep-alive", c: "Accept: keep-alive", d: "Host: keep-alive" },
    correctOption: "b",
    justification: "'Connection: keep-alive' keeps the TCP connection open[cite: 683, 684].",
    category: "HTTP(S) Security"
  },
  {
    id: 297,
    question: "In an HTTP response, what does the Content-Type header specify?",
    options: { a: "The size of the file being downloaded", b: "The type of content in the message body (e.g., text/html)", c: "The encoding used (e.g., gzip)", d: "The browser version of the client" },
    correctOption: "b",
    justification: "Content-Type specifies the media type of the message body[cite: 685, 686].",
    category: "HTTP(S) Security"
  },
  {
    id: 298,
    question: "What is the primary function of HTTPS?",
    options: { a: "To compress data for faster transmission", b: "To encrypt communication between client and server using SSL/TLS", c: "To allow unlimited data transfer", d: "To prevent SQL injection attacks" },
    correctOption: "b",
    justification: "HTTPS encrypts communication using SSL/TLS[cite: 687].",
    category: "HTTP(S) Security"
  },
  {
    id: 299,
    question: "What is an \"SSL Strip\" attack?",
    options: { a: "An attack that deletes the SSL certificate from the server.", b: "A Man-in-the-Middle attack that downgrades a user's connection from HTTPS to HTTP.", c: "An attack that strips the headers from an HTTP request.", d: "A Denial of Service attack on port 443." },
    correctOption: "b",
    justification: "SSL Strip is a MITM attack downgrading HTTPS to HTTP[cite: 688, 689].",
    category: "HTTP(S) Security"
  },
  {
    id: 300,
    question: "How does an attacker typically execute an SSL Strip attack?",
    options: { a: "By guessing the server's password", b: "By rewriting HTTPS URLs in the response to HTTP", c: "By turning off the victim's WiFi", d: "By injecting SQL into the login form" },
    correctOption: "b",
    justification: "Attackers rewrite HTTPS URLs to HTTP[cite: 692, 693].",
    category: "HTTP(S) Security"
  },
  {
    id: 301,
    question: "What is \"Mixed Content\"?",
    options: { a: "When a website uses both English and Spanish.", b: "When a secure HTTPS page loads insecure resources (images/scripts) over HTTP.", c: "When a POST request is sent to a GET-only server.", d: "When a website runs on both Linux and Windows." },
    correctOption: "b",
    justification: "Mixed Content is when an HTTPS page loads insecure HTTP resources[cite: 694, 695].",
    category: "HTTP(S) Security"
  },
  {
    id: 302,
    question: "Which of the following is a defense against SSL Strip and Downgrade attacks?",
    options: { a: "HTTP Strict Transport Security (HSTS)", b: "Using shorter passwords", c: "Disabling Cookies", d: "Using HTTP/1.1 instead of HTTP/2" },
    correctOption: "a",
    justification: "HSTS is a defense against SSL Strip and Downgrade attacks[cite: 698, 699].",
    category: "HTTP(S) Security"
  },
  {
    id: 303,
    question: "What is a \"Downgrade Attack\"?",
    options: { a: "Forcing a server to restart in safe mode.", b: "Forcing a protocol to abandon a high-quality mode (encrypted) for a lower-quality mode (cleartext).", c: "Downloading a file that contains a virus.", d: "Reducing the bandwidth of the victim." },
    correctOption: "b",
    justification: "Downgrade attacks force a protocol to use lower-quality modes[cite: 700, 701].",
    category: "HTTP(S) Security"
  },
  {
    id: 304,
    question: "What does the Referer header indicate?",
    options: { a: "The IP address of the user.", b: "The URL of the page the user came from before the current request.", c: "The version of the browser being used.", d: "The type of content the user accepts." },
    correctOption: "b",
    justification: "Referer indicates the previous page URL[cite: 703, 704].",
    category: "HTTP(S) Security"
  },
  {
    id: 305,
    question: "Which HTTP method should be used for actions that have side-effects (like uploading data or making a purchase)?",
    options: { a: "GET", b: "POST", c: "HEAD", d: "TRACE" },
    correctOption: "b",
    justification: "POST should be used for actions with side-effects[cite: 706, 707].",
    category: "HTTP(S) Security"
  },
  {
    id: 306,
    question: "In the context of web security, what does the \"Host\" header specify?",
    options: { a: "The IP address of the client", b: "The hostname that appeared in the full URL being requested", c: "The operating system of the server", d: "The admin email of the website" },
    correctOption: "b",
    justification: "Host header specifies the hostname from the requested URL[cite: 708, 709].",
    category: "HTTP(S) Security"
  },

  // --- Mixed / Application Scenarios ---
  {
    id: 307,
    question: "An attacker notices the URL ...id=50. They change it to ...id=50 AND 1=2. The page loads but is missing the item description. What does this likely indicate?",
    options: { a: "The site is immune to SQL injection.", b: "The site is vulnerable to Blind SQL Injection.", c: "The database is down.", d: "The attacker needs to use a POST request." },
    correctOption: "b",
    justification: "Changes in page content based on logic injection indicate Blind SQL Injection[cite: 711, 712, 714].",
    category: "Application Security Scenarios"
  },
  {
    id: 308,
    question: "A user is on a coffee shop WiFi. They type http://bank.com. The browser loads the bank's page, but the lock icon is missing. This user is likely a victim of:",
    options: { a: "SQL Injection", b: "Cross-Site Scripting", c: "SSL Strip", d: "A DDoS attack" },
    correctOption: "c",
    justification: "Missing lock icon on a bank site via HTTP suggests SSL Strip[cite: 716, 718].",
    category: "Application Security Scenarios"
  },
  {
    id: 309,
    question: "Which of the following commands would an attacker typically inject to verify a Time-Based Blind SQLi vulnerability on a Microsoft SQL Server?",
    options: { a: "SLEEP(10)", b: "WAITFOR DELAY '0:0:10'", c: "PAUSE 10", d: "PING -n 10 localhost" },
    correctOption: "b",
    justification: "WAITFOR DELAY is the command for time delays in MS SQL Server[cite: 719, 720].",
    category: "Application Security Scenarios"
  },
  {
    id: 310,
    question: "In a prepared statement, what character is typically used as a placeholder for user data?",
    options: { a: "*", b: "?", c: "%", d: "$" },
    correctOption: "b",
    justification: "'?' is typically used as the placeholder in prepared statements[cite: 721, 722].",
    category: "Application Security Scenarios"
  },
  {
    id: 311,
    question: "If you visit https://secure-site.com but the browser warns you that parts of the page are not secure (e.g., an image loaded via http://), this is an example of:",
    options: { a: "Downgrade Attack", b: "Mixed Content", c: "Certificate Pinning", d: "Cross-Site Request Forgery" },
    correctOption: "b",
    justification: "This warning describes Mixed Content[cite: 723].",
    category: "Application Security Scenarios"
  },

  // --- Lecture 14: Cookies & Session Management ---
  {
    id: 312,
    question: "Why are cookies necessary for modern web applications?",
    options: { a: "Because HTTP is a stateful protocol that stores too much data.", b: "Because HTTP is a stateless protocol and cannot remember users between requests.", c: "To encrypt the connection between client and server.", d: "To prevent SQL injection attacks." },
    correctOption: "b",
    justification: "Cookies are needed because HTTP is stateless[cite: 725, 726].",
    category: "Session Management"
  },
  {
    id: 313,
    question: "Which of the following is a disadvantage of using \"Hidden Form Fields\" for session management instead of cookies?",
    options: { a: "They are not supported by older browsers.", b: "They require the session ID to be manually injected into every single page link and form.", c: "They encrypt the data, making it too slow.", d: "They persist even after the browser is closed." },
    correctOption: "b",
    justification: "Hidden fields require manual injection into every link/form[cite: 728, 729].",
    category: "Session Management"
  },
  {
    id: 314,
    question: "If a cookie is set with the attribute HttpOnly, what is the primary security benefit?",
    options: { a: "The cookie is encrypted during transmission.", b: "The cookie cannot be accessed by client-side scripts (JavaScript), preventing XSS theft.", c: "The cookie is only sent to the original server.", d: "The cookie expires immediately when the tab is closed." },
    correctOption: "b",
    justification: "HttpOnly prevents client-side scripts (JS) from accessing the cookie[cite: 731, 732].",
    category: "Session Management"
  },
  {
    id: 315,
    question: "A developer wants to ensure a session cookie is NEVER sent over an unencrypted (HTTP) connection. Which flag must be set?",
    options: { a: "HttpOnly", b: "SameSite", c: "Secure", d: "Private" },
    correctOption: "c",
    justification: "The Secure flag ensures transmission only over encrypted connections[cite: 735, 736].",
    category: "Session Management"
  },
  {
    id: 316,
    question: "Which of the following best describes a \"Third-Party Cookie\"?",
    options: { a: "A cookie set by the website you are currently visiting.", b: "A cookie set by a domain different from the one in the address bar (e.g., an ad server).", c: "A cookie that requires three passwords to access.", d: "A cookie used solely for banking transactions." },
    correctOption: "b",
    justification: "Third-party cookies are set by domains different from the address bar[cite: 737, 739].",
    category: "Session Management"
  },
  {
    id: 317,
    question: "What is \"Session Hijacking\"?",
    options: { a: "An attacker crashes the server to stop the session.", b: "An attacker steals a valid session cookie to impersonate a legitimate user.", c: "An attacker creates a new account with fake details.", d: "The browser deletes the session key automatically." },
    correctOption: "b",
    justification: "Session Hijacking is stealing a valid session cookie to impersonate a user[cite: 741, 742].",
    category: "Session Management"
  },
  {
    id: 318,
    question: "In the Twitter (2013) case study, what was the critical flaw in their session management?",
    options: { a: "They used HTTP instead of HTTPS.", b: "The auth_token cookie did not change after login and didn't expire immediately upon logout.", c: "They didn't use cookies at all.", d: "They allowed duplicate usernames." },
    correctOption: "b",
    justification: "The flaw was that the auth_token didn't change after login/logout[cite: 744, 745].",
    category: "Session Management"
  },
  {
    id: 319,
    question: "Which attribute limits the scope of a cookie to a specific folder on the server?",
    options: { a: "Domain", b: "Secure", c: "Path", d: "Expires" },
    correctOption: "c",
    justification: "The Path attribute limits cookie scope to a specific folder[cite: 747, 748].",
    category: "Session Management"
  },
  {
    id: 320,
    question: "Even if a user blocks cookies, advertisers can still track them using:",
    options: { a: "SQL Injection", b: "Browser Fingerprinting (screen resolution, fonts, battery level)", c: "DNS Spoofing", d: "SSL Stripping" },
    correctOption: "b",
    justification: "Browser Fingerprinting tracks users without cookies[cite: 749, 750].",
    category: "Session Management"
  },
  {
    id: 321,
    question: "What is the standard defense against session prediction attacks?",
    options: { a: "Making session IDs short and easy to remember.", b: "Using sequential session IDs (1001, 1002, 1003).", c: "Generating long, random, and unpredictable session IDs.", d: "Using the user's username as the session ID." },
    correctOption: "c",
    justification: "Using long, random, and unpredictable session IDs prevents prediction[cite: 751, 752].",
    category: "Session Management"
  },

  // --- Lecture 15: Cross-Site Request Forgery (CSRF) ---
  {
    id: 322,
    question: "Which of the following best defines a CSRF attack?",
    options: { a: "Injecting a script to steal user cookies.", b: "Forcing an authenticated user's browser to send an unwanted request to a vulnerable application.", c: "Overloading the server with traffic (DDoS).", d: "Stealing the database password." },
    correctOption: "b",
    justification: "CSRF forces an authenticated browser to send unwanted requests[cite: 755, 756].",
    category: "CSRF"
  },
  {
    id: 323,
    question: "Why does CSRF work?",
    options: { a: "Because browsers automatically include session cookies with every request to a domain, even if initiated by a third party.", b: "Because the attacker knows the user's password.", c: "Because the web server is offline.", d: "Because the victim has disabled JavaScript." },
    correctOption: "a",
    justification: "CSRF works because browsers automatically include session cookies[cite: 758, 759].",
    category: "CSRF"
  },
  {
    id: 324,
    question: "Which of the following HTML tags can be used to trigger a GET-based CSRF attack?",
    options: { a: "<img src=\"...\">", b: "<table border=\"...\">", c: "<h1 class=\"...\">", d: "<title>..." },
    correctOption: "a",
    justification: "Image tags with src attributes can trigger GET requests[cite: 761, 762].",
    category: "CSRF"
  },
  {
    id: 325,
    question: "The most effective defense against CSRF is:",
    options: { a: "Using SSL/HTTPS.", b: "The Synchronizer Token Pattern (Anti-CSRF Tokens).", c: "Hiding the URL of the admin page.", d: "Using a firewall." },
    correctOption: "b",
    justification: "The Synchronizer Token Pattern is the most effective defense[cite: 763, 764].",
    category: "CSRF"
  },
  {
    id: 326,
    question: "How do \"SameSite\" cookies help prevent CSRF?",
    options: { a: "They encrypt the cookie value.", b: "They instruct the browser not to send the cookie if the request comes from a third-party site.", c: "They ensure the cookie is only valid for 5 minutes.", d: "They allow the cookie to be shared with all subdomains." },
    correctOption: "b",
    justification: "SameSite cookies prevent sending cookies on third-party requests[cite: 765, 766].",
    category: "CSRF"
  },
  {
    id: 327,
    question: "What is \"Drive-By Pharming\"?",
    options: { a: "An attack where a script changes a home router's DNS settings by guessing default passwords.", b: "Driving past an office to steal Wi-Fi.", c: "Installing malware on a pharmacy website.", d: "Using a USB drive to steal data." },
    correctOption: "a",
    justification: "Drive-By Pharming changes router DNS settings via default passwords[cite: 769, 770].",
    category: "CSRF"
  },
  {
    id: 328,
    question: "What is the key difference between XSS and CSRF?",
    options: { a: "XSS targets the server; CSRF targets the database.", b: "XSS exploits the user's trust in the site; CSRF exploits the site's trust in the user's browser.", c: "XSS cannot steal data; CSRF can.", d: "There is no difference." },
    correctOption: "b",
    justification: "XSS exploits user trust in site; CSRF exploits site trust in user browser[cite: 772, 773].",
    category: "CSRF"
  },

  // --- Lecture 16: Cross-Site Scripting (XSS) ---
  {
    id: 329,
    question: "Which type of XSS involves the malicious script being permanently saved to the database (e.g., in a comment section)?",
    options: { a: "Reflected XSS", b: "Stored (Persistent) XSS", c: "DOM-Based XSS", d: "Ephemeral XSS" },
    correctOption: "b",
    justification: "Stored XSS involves saving the script permanently to the database[cite: 776, 777].",
    category: "XSS"
  },
  {
    id: 330,
    question: "How does \"Reflected XSS\" typically work?",
    options: { a: "The script is stored on the server's hard drive.", b: "The script is embedded in a URL (e.g., search query) and bounces off the server to the victim.", c: "The attack happens entirely in the browser's cache.", d: "It requires the attacker to have physical access to the server." },
    correctOption: "b",
    justification: "Reflected XSS embeds the script in a URL which bounces off the server[cite: 778, 779].",
    category: "XSS"
  },
  {
    id: 331,
    question: "Which of the following is a capability of a malicious JavaScript injected via XSS?",
    options: { a: "It can format the hard drive of the server.", b: "It can read the document.cookie and send it to the attacker.", c: "It can shut down the power grid.", d: "It can overheat the CPU." },
    correctOption: "b",
    justification: "Injected JS can read document.cookie and send it to the attacker[cite: 782, 784].",
    category: "XSS"
  },
  {
    id: 332,
    question: "The \"Samy Worm\" on MySpace was an example of:",
    options: { a: "SQL Injection.", b: "Stored XSS.", c: "CSRF.", d: "A Virus." },
    correctOption: "b",
    justification: "The Samy Worm was a Stored XSS attack[cite: 786, 787].",
    category: "XSS"
  },
  {
    id: 333,
    question: "What is the \"Same Origin Policy\" (SOP)?",
    options: { a: "A rule that says scripts from one domain cannot access resources from another domain.", b: "A rule that forces all websites to be hosted in the same country.", c: "A rule that users must use the same password for all sites.", d: "A rule that prevents cookies from being deleted." },
    correctOption: "a",
    justification: "SOP prevents scripts from one domain accessing resources from another[cite: 788, 789].",
    category: "XSS"
  },
  {
    id: 334,
    question: "Which header allows administrators to whitelist trusted domains for scripts, effectively neutralizing XSS?",
    options: { a: "Strict-Transport-Security", b: "Content-Security-Policy (CSP)", c: "X-Frame-Options", d: "Access-Control-Allow-Origin" },
    correctOption: "b",
    justification: "CSP allows whitelisting of trusted domains[cite: 792, 793].",
    category: "XSS"
  },
  {
    id: 335,
    question: "The best way to prevent XSS in user inputs is to:",
    options: { a: "Use Blacklisting (removing words like \"script\").", b: "Use Output Encoding (converting < to &lt;).", c: "Trust the user input.", d: "Disable HTML entirely." },
    correctOption: "b",
    justification: "Output Encoding is the best way to prevent XSS in user inputs[cite: 794, 795].",
    category: "XSS"
  },

  // --- Lecture 17: Access Control & Biometrics ---
  {
    id: 336,
    question: "Which pillar of access control is responsible for proving that a user is who they claim to be?",
    options: { a: "Identification", b: "Authentication", c: "Authorization", d: "Auditing" },
    correctOption: "b",
    justification: "Authentication is proving the user is who they claim to be[cite: 797, 798].",
    category: "Access Control & Biometrics"
  },
  {
    id: 337,
    question: "\"Principle of Least Privilege\" means:",
    options: { a: "Giving all users administrator access.", b: "Giving users only the permissions strictly necessary to do their job.", c: "Giving users access to files only on weekends.", d: "Authenticating users with the shortest password possible." },
    correctOption: "b",
    justification: "Least Privilege means giving only strictly necessary permissions[cite: 799, 800].",
    category: "Access Control & Biometrics"
  },
  {
    id: 338,
    question: "A system where the central authority sets strict access rules that users cannot change (e.g., Top Secret clearance) is called:",
    options: { a: "Discretionary Access Control (DAC)", b: "Role-Based Access Control (RBAC)", c: "Mandatory Access Control (MAC)", d: "Open Access Control" },
    correctOption: "c",
    justification: "MAC involves central authority setting strict rules users cannot change[cite: 802].",
    category: "Access Control & Biometrics"
  },
  {
    id: 339,
    question: "Which of the following is an example of \"Authentication by Characteristic\" (What you are)?",
    options: { a: "Password", b: "Smart Card", c: "Fingerprint", d: "Typing Rhythm" },
    correctOption: "c",
    justification: "Fingerprints are an example of Authentication by Characteristic (What you are)[cite: 803, 804].",
    category: "Access Control & Biometrics"
  },
  {
    id: 340,
    question: "In biometrics, the \"False Acceptance Rate\" (FAR) refers to:",
    options: { a: "The percentage of legitimate users who are blocked.", b: "The percentage of impostors who are incorrectly matched and allowed access.", c: "The time it takes to scan a finger.", d: "The cost of the scanner." },
    correctOption: "b",
    justification: "FAR is the percentage of impostors incorrectly matched and allowed access[cite: 805, 806].",
    category: "Access Control & Biometrics"
  },
  {
    id: 341,
    question: "Which biometric method has the lowest False Acceptance Rate (highest security) but is very expensive?",
    options: { a: "Face Recognition", b: "Voice Recognition", c: "Iris Recognition", d: "Hand Geometry" },
    correctOption: "c",
    justification: "Iris Recognition offers the lowest FAR but is expensive[cite: 808, 809].",
    category: "Access Control & Biometrics"
  },
  {
    id: 342,
    question: "A biometric system has a False Acceptance Rate (FAR) of 0.1% (or 1/1000). If you use this system for VERIFICATION (1-to-1 match), what is the probability of a false acceptance?",
    options: { a: "0.1% (0.001)", b: "10%", c: "50%", d: "1%" },
    correctOption: "a",
    justification: "In verification (1-to-1), the risk is exactly the FAR (0.1%)[cite: 810, 811, 812].",
    category: "Access Control & Biometrics"
  },
  {
    id: 343,
    question: "The same system (FAR=0.1% or 1/1000) is used for IDENTIFICATION (1-to-Many). There are 2,000 users in the database. If an impostor scans their finger, what is the approximate probability of a false match?",
    options: { a: "0.1%", b: "1%", c: "100%", d: "50%" },
    correctOption: "c",
    justification: "Risk scales with database size: 2000 * 0.001 = 2.0, implying a high probability (approx 100%)[cite: 813, 815].",
    category: "Access Control & Biometrics"
  },
  {
    id: 344,
    question: "If you tighten a biometric system to reduce False Acceptances (make it harder to get in), what happens to the False Rejection Rate (FRR)?",
    options: { a: "It decreases.", b: "It stays the same.", c: "It increases (more legitimate users will be accidentally blocked).", d: "It becomes zero." },
    correctOption: "c",
    justification: "Tightening the system increases the False Rejection Rate[cite: 816, 818].",
    category: "Access Control & Biometrics"
  },
  {
    id: 345,
    question: "Why is \"Identification\" (1-to-Many) generally considered riskier than \"Verification\" (1-to-1)?",
    options: { a: "Because it is slower.", b: "Because the probability of a false match increases with every user added to the database.", c: "Because it requires a password.", d: "Because it uses older technology." },
    correctOption: "b",
    justification: "Identification is riskier because false match probability increases with database size[cite: 819, 820].",
    category: "Access Control & Biometrics"
  },
  {
    id: 346,
    question: "What is the primary purpose of \"Auditing\"?",
    options: { a: "To speed up the database.", b: "To decide what a user is allowed to do.", c: "To record what a user actually did for accountability.", d: "To encrypt user passwords." },
    correctOption: "c",
    justification: "Auditing records what a user did for accountability[cite: 822, 823].",
    category: "Access Control & Biometrics"
  },
  {
    id: 347,
    question: "A \"Smart Card\" is an example of which authentication factor?",
    options: { a: "What you know.", b: "What you have.", c: "What you are.", d: "What you do." },
    correctOption: "b",
    justification: "A Smart Card is a 'What you have' factor[cite: 825, 826].",
    category: "Access Control & Biometrics"
  },
  {
    id: 348,
    question: "Which Access Control model is best suited for an organization with high turnover where permissions are based on job titles (e.g., Manager, Teller)?",
    options: { a: "DAC", b: "MAC", c: "RBAC (Role-Based Access Control)", d: "ABAC" },
    correctOption: "c",
    justification: "RBAC is best suited for high turnover/job title based permissions[cite: 827, 828].",
    category: "Access Control & Biometrics"
  },
  {
    id: 349,
    question: "Why are passwords usually \"hashed\" before storage?",
    options: { a: "To make them shorter.", b: "So that even if the file is stolen, the attacker cannot see the actual passwords.", c: "To make them easier to remember.", d: "To allow the admin to recover them if lost." },
    correctOption: "b",
    justification: "Passwords are hashed so attackers cannot see the actual passwords if the file is stolen[cite: 829, 830].",
    category: "Access Control & Biometrics"
  },
  {
    id: 350,
    question: "\"Keystroke Recognition\" (typing rhythm) is an example of:",
    options: { a: "Behavioral Biometrics", b: "Physiological Biometrics", c: "Two-Factor Authentication", d: "Token-based Authentication" },
    correctOption: "a",
    justification: "Keystroke recognition is a Behavioral Biometric[cite: 832].",
    category: "Access Control & Biometrics"
  }
];