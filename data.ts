import { BlogPost, Testimonial, FAQItem, ServiceItem } from './types';

export const CLINIC_INFO = {
  address: "S.K. Jain Healthcare Center, 4th Floor, Platinum Medical Enclave, Apollo Road, New Delhi, India - 110025",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.123281488107!2d77.2089!3d28.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2bba08d7457%3A0xe2be5d2c20a8fe99!2sAIIMS%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  directionUrl: "https://maps.google.com/?q=AIIMS+New+Delhi+India",
  hours: [
    { days: "Monday - Friday", morning: "09:00 AM - 01:00 PM", evening: "04:30 PM - 08:30 PM" },
    { days: "Saturday", morning: "09:00 AM - 02:00 PM", evening: "Closed (By Appointment Only)" },
    { days: "Sunday", morning: "Emergency Consultation Only", evening: "Closed" }
  ],
  emergencyPhone: "+91 98765 43210",
  receptionPhone: "+91 11 4455 6677",
  whatsappNumber: "+919876543210",
  email: "appointments@drskjain.com",
  socials: {
    linkedin: "https://linkedin.com/in/dr-sk-jain",
    twitter: "https://twitter.com/drskjain_clinic",
    youtube: "https://youtube.com/c/DrSKJainHealthcare",
    instagram: "https://instagram.com/drskjain_healthcare"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "general-consultation",
    title: "General Consultation & Diagnostics",
    description: "In-depth physiological examinations, symptom auditing, and comprehensive diagnostic formulation.",
    detailedDescription: "A meticulous diagnostic process evaluating multi-system functions, reviewing comprehensive medical history, and clinical signs. We leverage state-of-the-art laboratory testing, high-resolution radiology partnerships, and advanced vital screening tools to pinpoint the root cause of health issues rather than just managing standard symptoms.",
    iconName: "Stethoscope",
    benefits: ["Detailed 30-minute consultation", "Precision diagnosis & lifestyle auditing", "Comprehensive prescription & review", "Personalized laboratory analysis mapping"]
  },
  {
    id: "preventive-healthcare",
    title: "Preventive Healthcare & Lifespan Science",
    description: "Advanced disease prevention panels, cardiovascular tracking, and longevity optimization strategies.",
    detailedDescription: "Shifting the clinical paradigm from reactive disease care to active longevity care. Includes genetic risk profile profiling, custom metabolic assessment, vascular screening, and detailed nutritional interventions. We analyze biometric data to shield against chronic illnesses like hypertension, coronary deficiencies, and autoimmune triggers before they develop.",
    iconName: "Shield",
    benefits: ["Proactive metabolic profiling", "Longevity-focused body index analysis", "Early tumor & vascular markers", "Tailored bio-nutrition blueprint"]
  },
  {
    id: "comprehensive-checkups",
    title: "Executive Health Screening Checkups",
    description: "Signature gold-standard health assessment panels tailored to custom age and lifestyle markers.",
    detailedDescription: "An elite diagnostic checkup incorporating complete hematology, cardiovascular stress testing, pulmonary function tests, hepatic and renal profile auditing, thyroid parameters, and lipid fractioning. Specially designed for executives, entrepreneurs, and seniors requiring an exhaustive periodic health clearance.",
    iconName: "HeartPulse",
    benefits: ["Complete multi-organ assessment", "Includes ultrasound baseline screening", "Reviewed by senior medical clinical board", "Fully-documented interactive health report"]
  },
  {
    id: "chronic-disease-management",
    title: "Chronic Care Management (CCM)",
    description: "Empathetic, evidence-backed therapy protocols for Diabetes, Hypertension, and Metabolic Syndromes.",
    detailedDescription: "A specialized multi-disciplinary care program for complex long-term illnesses. We incorporate continuous blood glucose monitoring integration, automated blood pressure logging systems, tailored medication cycle adjustment, and custom neuropathy screenings to arrest organic damage and ensure long-term vitality.",
    iconName: "Activity",
    benefits: ["A1C / sugar levels stabilization protocols", "Heart disease risk reduction track", "Direct portal support & vital audits", "Renal and vascular preservation plans"]
  },
  {
    id: "specialist-care",
    title: "Executive Medical & Specialist Care",
    description: "Direct referral management, multi-system critical diagnosis, and medical board coordination.",
    detailedDescription: "Advanced evaluation of complex, rare, or overlapping multi-system disorders. Dr. S.K. Jain leverages direct strategic medical pathways with leading cardiosurgical, oncology, and neuro-care boards to coordinate top-tier clinical pathways with zero wait times.",
    iconName: "BriefcaseMedical",
    benefits: ["Complex differential diagnoses", "Inter-disciplinary panel management", "Advanced pharmacotherapy optimization", "Priority clinical transitions"]
  },
  {
    id: "follow-up-consultation",
    title: "Structured Continuity & Virtual Follow-up",
    description: "Seamless telemedicine integrations and post-treatment recovery milestones progress check.",
    detailedDescription: "Ensuring you are never left alone after a clinical visit. Our digital care pathway allows patients to submit daily diaries, review prescription adjustments, and conduct secured encrypted virtual video follow-up sessions across borders with instant prescription updates.",
    iconName: "RefreshCw",
    benefits: ["Fully encrypted telemedicine streams", "Digital dosage optimization audits", "Post-intervention rehabilitation tracker", "Direct chat file submissions"]
  },
  {
    id: "patient-counseling",
    title: "Therapeutic Patient Counseling & Coaching",
    description: "Empathetic disease adjustment, behavioral transitions, and patient family empowerment.",
    detailedDescription: "We believe healing requires understanding. We offer highly custom counseling sessions focused on stress reduction, dietary behavioral conditioning, medication adherence strategies, and genetic risk counseling to help patients and families navigate difficult clinical diagnoses with grace and clarity.",
    iconName: "UserCheck",
    benefits: ["Behavioral behavioral habit design", "Family support group onboarding", "Anxiety & lifestyle modification coaching", "Direct recovery milestone goal mapping"]
  },
  {
    id: "emergency-assistance",
    title: "24/7 Clinical Emergency Assistance",
    description: "Priority triage hotline and direct admission pathways at affiliated premier healthcare institutions.",
    detailedDescription: "Provides a reliable, clinical safety net for registered patients under care. When emergencies occur, patients get immediate clinical triage over the phone, dynamic dispatch coordination with leading ICU-enabled ambulance suites, and expedited direct ICU admission pathways with zero emergency-room red tape.",
    iconName: "PhoneCall",
    benefits: ["Clinical triage direct lines", "Affiliated emergency hospital pre-admit", "ICU ambulance coordination", "Immediate medical record access integration"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Arvind Mehra",
    age: 54,
    condition: "Severe Coronary Artery Audit & Hypertension",
    rating: 5,
    review: "Dr. S.K. Jain is an absolute paragon of clinical excellence. While Apollo suggested immediate surgery, Dr. Jain's meticulous diagnostic auditing and non-invasive, pharmacotherapy protocol stabilized my cardiovascular markers in just 45 days. My ejection fraction is back to normal. Outstanding!",
    date: "May 12, 2026",
    avatarSeed: "arvind",
    verified: true
  },
  {
    id: "test-2",
    name: "Dr. Priyadarshini Mehta",
    age: 41,
    condition: "Critical Thyroid Dysfunction & Metabolic Recovery",
    rating: 5,
    review: "Being a surgeon myself, I am extremely demanding. Dr. S.K. Jain's diagnostic acuity is unparalleled. He doesn't just look at standard TSH ranges; he analyzed my absolute endocrine pathways, metabolic stress spikes, and sleep hygiene. His clinical approach is truly elite and modern.",
    date: "April 29, 2026",
    avatarSeed: "priya",
    verified: true
  },
  {
    id: "test-3",
    name: "Rajesh Singhania",
    age: 62,
    condition: "Chronic Type-2 Diabetes Management & Neuropathy",
    rating: 5,
    review: "My sugar levels were consistently hovering around 280 mg/dL for three years. Under Dr. S.K. Jain's Continuous Glucose Monitoring (CGM) integrated care plan, my glycemic variability has dropped to less than 10%. His daily digital follow-ups and diet alignment was the game changer.",
    date: "March 15, 2026",
    avatarSeed: "rajesh",
    verified: true
  },
  {
    id: "test-4",
    name: "Aurore de Montalembert",
    age: 35,
    condition: "Autoimmune Evaluation & Lifestyle Overhaul",
    rating: 5,
    review: "I traveled all the way from France to consult with Dr. S.K. Jain after hearing about his preventative lifespan protocols. The corporate health panel was the most thorough diagnostic series I've ever experienced. He gave me a customized wellness blueprint which has cleared all my physical lethargy.",
    date: "February 20, 2026",
    avatarSeed: "aurore",
    verified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Understanding Cardiovascular Risk Biomarkers Beyond Standard Cholesterol",
    excerpt: "Why typical lipid panels fail to predict 50% of heart attacks, and the advanced clinical biomarkers you must demand today.",
    content: "For decades, cardiovascular diagnostics focused almost exclusively on LDL-C and HDL-C levels. However, clinical studies across the Mayo Clinic and Cleveland Clinic show that nearly half of patients hospitalized with acute myocardial infarction present with normal LDL levels.\n\n### The Real Culprits: ApoB and Lp(a)\nTo genuinely assess plaque vulnerability, we must evaluate advanced arterial components:\n1. **Apolipoprotein B (ApoB):** Quantifies the absolute quantity of atherogenic particles in circulation. It is a far more robust cardiovascular hazard predictor than standard LDL.\n2. **Lipoprotein(a):** A genetically determined risk multiplier that causes clotting risks and arterial micro-calcification.\n3. **hs-CRP (High-Sensitivity C-Reactive Protein):** Acts as an indicator of systemic arterial inflammation.\n\nAt our clinic, we perform advanced preventive screening for all cardiovascular consults, allowing proactive arterial decalcification therapy and targeted medication mapping.",
    category: "Heart Health",
    readTime: "6 min read",
    date: "May 28, 2026",
    author: "Dr. S.K. Jain",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-2",
    title: "Reverse Insulin Resistance: Clinical Protocols Over Standard Sugar Pills",
    excerpt: "Innovative lifestyle strategies, intermittent metabolic switching, and medical interventions to cure diabetes markers permanently.",
    content: "Standard medical interventions often treat Type-2 Diabetes as a progressive, irreversible disease managed only with sugar-lowering medicines. However, clinical science demonstrates that insulin resistance is largely a metabolic overload that can be reversed with specific protocols.\n\n### The Three pillars of Glycemic Reversal\n- **Periodic Mitochondrial Resting:** Short fasting gaps (16:8) let pancreas beta cells recover and trigger autophagy in hepatic cells.\n- **Vascular Strength Conditioning:** Dynamic resistance training stimulates GLUT4 glucose receptors in muscle tissues independently of insulin.\n- **Continuous Bio-Feedback (CGM):** Wearing a CGM lets patients see real-time glucose spikes caused by stress, sleep deficits, and individual foods.\n\nBy following this continuous tracking loop, over 70% of our clinical diabetes cohort successfully decrease their medications under structured observation.",
    category: "Diabetes",
    readTime: "8 min read",
    date: "April 18, 2026",
    author: "Dr. S.K. Jain",
    image: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-3",
    title: "The Modern Pediatric and Adult Immunization Schedule for Global Citizens",
    excerpt: "Navigating international vaccine protocols, travel booster timings, and defending against emerging global viral threats.",
    content: "Global integration exposes us to highly varied local bio-environments. Ensuring you and your family have absolute immunological defense is critical.\n\n### Essential Vaccines for Worldwide Protection\n- **Influenza Quadrivalent Boosters:** Updated annually to match mutating genomic strains.\n- **Pneumococcal Conjugate (PCV13/PPSV23):** Prevents pneumococcal heart and lung infections in adults over 50.\n- **Shingrix:** Protects older adults from highly debilitating nerve damage caused by shingles.\n\nWe provide certified vaccination records for visa requirements, academic clearances, and strategic corporate relocation itineraries.",
    category: "Preventive",
    readTime: "5 min read",
    date: "March 10, 2026",
    author: "Dr. S.K. Jain",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-4",
    title: "Minding the Gut-Brain Axis: Combating Chronic fatigue and Systemic Lethargy",
    excerpt: "How intestinal microbiome diversity affects cognitive focus, cortisol output, and chronic fatigue symptoms.",
    content: "Up to 90% of our body's serotonin is manufactured in the intestine. Intestinal lining hyper-permeability (leaky gut) lets toxic lipopolysaccharides slip into our veins, causing systemic neuro-inflammation and chronic sluggishness.\n\n### Rebuilding Intestinal Integrity\n- **Probiotic Sequencing:** Introducing targeted strains like *Lactobacillus rhamnosus* and *Bifidobacterium longum* designed to combat cortisol stress triggers.\n- **Polyphenol Abundance:** Sourcing dark berries, extra virgin olive oil, and raw cacao to feed protective microbes.\n- **Limiting Antibiotic Erosion:** Avoiding clinical over-prescription to preserve the ancestral gut flora.\n\nBy optimizing microbiome wellness, patients report double the cognitive clarity and emotional endurance within 30 days.",
    category: "Wellness",
    readTime: "7 min read",
    date: "Jan 15, 2026",
    author: "Dr. S.K. Jain",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I secure an urgent consultation slot with Dr. S.K. Jain?",
    answer: "You can book an appointment via our online Premium Booking link. Alternatively, call our executive concierge desk at +91 11 4455 6677. Registered corporate/annual patients get priority same-day diagnostic queues.",
    category: "Process"
  },
  {
    id: "faq-2",
    question: "What are the standard consultation charges, and is online telemedicine supported?",
    answer: "Standard in-clinic consultation fees are INR 1,500. Secure online telemedicine consultations are supported globally on our encrypted patient platform for INR 1,200. Secure follow-up charts are updated immediately post-session.",
    category: "Charges"
  },
  {
    id: "faq-3",
    question: "Which medical insurances and corporate health panels are accepted at the clinic?",
    answer: "We support direct cashless settlements with all major premier insurance providers (including Star Health, Apollo Munich, ICICI Lombard, Max Bupa, and global Cigna policies). We also provide fully itemized medical diagnostics receipts and clinical summaries for manual tax/claim reimbursements.",
    category: "Insurance"
  },
  {
    id: "faq-4",
    question: "Does the clinic coordinate second opinions and international surgery pathways?",
    answer: "Yes, Dr. S.K. Jain regularly collaborates with leading cards, oncology, and neurosurgery departments at Apollo Hospitals, Max Super Speciality, AIIMS, and international boards (such as Cleveland Clinic and Mayo Clinic) to facilitate gold-standard surgical setups and post-op care management.",
    category: "In-Depth"
  },
  {
    id: "faq-5",
    question: "How are follow-up visits and routine vital monitoring structured?",
    answer: "We provide virtual patient monitoring support via our electronic diagnostic portal. For chronic diseases like hypertension or diabetes, patients submit daily digital telemetry files (BP levels, glucose sheets), which are audited by Dr. Jain weekly, adjusting medication dosages dynamically.",
    category: "Process"
  }
];
