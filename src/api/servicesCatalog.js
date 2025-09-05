// api/servicesCatalog.js

export const CATALOG = {
  training: {
    categories: [
      // =========================
      // FOOD SAFETY
      // =========================
      {
        id: "food-safety",
        name: "Food Safety",
        groups: [
          // ---- Municipality-Approved ----
          {
            id: "municipality",
            name: "Municipality-Approved",
            items: [
              {
                id: "bfst-dubai-fujairah",
                tag: "Food Safety",
                title: "Basic Food Safety Training (BFST) – Dubai, Fujairah",
                duration: "6 hours",
                image: "/images/courses/food/bfst.jpg",
                description:
                  "Core hygiene, temperature control, cross-contamination prevention, cleaning & sanitation, and allergen awareness for entry-level food handlers.",
                details: {
                  hero: "/images/courses/food/bfst-hero.jpg",
                  overview:
                    "In Dubai and Fujairah, food handlers (restaurants, cafés, catering, food trucks, cloud kitchens, hotels, manufacturing, wholesale and storage) must complete a municipality-approved Basic Food Safety & Hygiene training. This one-day program builds essential knowledge and compliance with local health regulations.",
                  sections: [
                    {
                      title: "Who Should Attend",
                      bullets: [
                        "Food handlers in restaurants, cafés, hotels, cloud kitchens and catering",
                        "Staff in food trucks, manufacturing, wholesale, storage and retail",
                        "New joiners or anyone requiring a mandatory refresher",
                      ],
                    },
                    {
                      title: "Key Outcomes",
                      bullets: [
                        "Prevent cross-contamination and foodborne illness",
                        "Temperature control & thermometer use",
                        "Personal hygiene & effective handwashing",
                        "Cleaning, sanitation and basic pest awareness",
                        "Record keeping and regulatory compliance",
                      ],
                    },
                    {
                      title: "Assessment & Certification",
                      bullets: [
                        "Short assessment at the end of the course",
                        "Municipality-approved certificate upon successful completion",
                      ],
                    },
                    {
                      title: "Delivery & Locations",
                      bullets: [
                        "Duration: 6 hours (one day)",
                        "Delivery: In-person (English/Arabic on request)",
                        "Locations: Dubai & Fujairah (onsite options available)",
                      ],
                    },
                  ],
                },
              },

              {
                id: "efst-abu-dhabi-al-ain-western",
                tag: "Food Safety",
                title:
                  "Essential Food Safety Training (EFST) – Abu Dhabi, Al Ain & Western Region",
                duration: "4 – 6 hours",
                image: "/images/courses/food/efst.jpg",
                description:
                  "Mandatory EFST by ADAFSA covering the four pillars of food safety for handlers across Abu Dhabi Emirate.",
                details: {
                  hero: "/images/courses/food/efst-hero.jpg",
                  overview:
                    "The Essential Food Safety Training (EFST) program, introduced by the Abu Dhabi Agriculture and Food Safety Authority (ADAFSA), is mandatory for all food handlers in Abu Dhabi Emirate (retail, catering, manufacturing and slaughterer houses). It ensures food is handled safely at every stage of the chain.",
                  sections: [
                    {
                      title: "Focus Areas",
                      bullets: [
                        "Cross-contamination prevention",
                        "Cooking",
                        "Cooling",
                        "Chilling",
                      ],
                    },
                    {
                      title: "Who Should Attend",
                      bullets: [
                        "All food handlers working in Abu Dhabi Emirate",
                        "Retail, catering, manufacturing, slaughterhouse staff",
                      ],
                    },
                    {
                      title: "Delivery",
                      bullets: [
                        "Duration: 4 – 6 hours",
                        "One-day delivery with assessment",
                      ],
                    },
                  ],
                },
              },

              {
                id: "ghp-managers-staff-sharjah",
                tag: "Food Safety",
                title: "GHP Managers & GHP Staff (Sharjah)",
                duration: "6 hours",
                image: "/images/courses/food/ghp.jpg",
                description:
                  "Good Hygiene Practices (GHP) for staff & managers in Sharjah: hygiene, safe handling, cleaning & sanitation, pest control, workplace safety.",
                details: {
                  hero: "/images/courses/food/ghp-hero.jpg",
                  overview:
                    "The Good Hygiene Practices (GHP) course in Sharjah is designed for both food staff and managers. It covers personal hygiene, safe food handling, cleaning and sanitation, pest control and workplace safety. The manager stream emphasises supervision responsibilities, compliance and implementing hygiene systems to ensure standards are consistently met.",
                  sections: [
                    {
                      title: "You’ll Learn",
                      bullets: [
                        "Personal hygiene and safe food handling",
                        "Cleaning & sanitation best practices",
                        "Pest control basics",
                        "Workplace safety and supervision",
                        "Regulatory compliance in Sharjah",
                      ],
                    },
                  ],
                },
              },

              {
                id: "bfsh-rak",
                tag: "Food Safety",
                title: "Basic Food Safety & Hygiene BFSH (Ras Al Khaimah)",
                duration: "4.5 – 6 hours",
                image: "/images/courses/food/bfsh-rak.jpg",
                description:
                  "Mandatory Basic Food Hygiene Training for all food handlers across RAK — awareness, risk reduction and compliance.",
                details: {
                  hero: "/images/courses/food/bfsh-rak-hero.jpg",
                  overview:
                    "The BFSH program is designed for all food handlers working in food businesses across Ras Al Khaimah. It builds awareness of essential food safety practices, reduces foodborne risks and ensures compliance with local regulations.",
                  sections: [
                    {
                      title: "Program Structure",
                      bullets: [
                        "General Category – retail, groceries/supermarkets, mills, fruit & vegetable shops, chocolatiers, cake shops, honey & dates stores, juice & ice-cream shops, cafés, kiosks, drivers, wholesale warehouses, etc.",
                        "High-Risk Category – food preparation & cooking activities (restaurants, catering, hospitality, manufacturing, bakeries, sandwich/pastry units, food trucks serving snacks).",
                      ],
                    },
                  ],
                },
              },
            ],
          },

          // ---- Advanced Level (with tracks) ----
          {
            id: "advanced",
            name: "Advanced Level",
            tracks: [
              {
                id: "iso-22000",
                name: "ISO 22000",
                items: [
                  {
                    id: "iso22000-intro-seminar",
                    tag: "ISO 22000",
                    title: "Introduction to ISO 22000 Seminar",
                    duration: "4 hours",
                    image: "/images/courses/food/iso22000-intro.jpg",
                    description:
                      "Overview of ISO 22000 structure, terminology and how a food safety management system fits within operations.",
                    details: {
                      hero: "/images/courses/food/iso22000-intro-hero.jpg",
                      overview:
                        "A concise introduction to the ISO 22000 Food Safety Management System — principles, clauses and practical relevance.",
                      sections: [
                        {
                          title: "You’ll Learn",
                          bullets: [
                            "Purpose and structure of ISO 22000",
                            "PDCA cycle & process approach",
                            "Prerequisite programs vs. HACCP",
                            "Pathways to implementation & certification",
                          ],
                        },
                      ],
                    },
                  },
                  {
                    id: "iso22000-implementation",
                    tag: "ISO 22000",
                    title: "ISO 22000 Implementation Course",
                    duration: "1 – 2 days",
                    image: "/images/courses/food/iso22000-implement.jpg",
                    description:
                      "Hands-on approach for building and rolling out an ISO 22000 FSMS in your facility.",
                    details: {
                      hero: "/images/courses/food/iso22000-implement-hero.jpg",
                      overview:
                        "Practical steps to plan, build, document and implement an ISO 22000 FSMS tailored to your operation.",
                      sections: [
                        {
                          title: "Key Topics",
                          bullets: [
                            "Gap assessment and project planning",
                            "PRPs, HACCP study and operational control",
                            "Documentation, training & communication",
                            "Internal audit & management review setup",
                          ],
                        },
                      ],
                    },
                  },
                  {
                    id: "iso22000-internal-audit",
                    tag: "ISO 22000",
                    title: "ISO 22000 Internal Audit Course",
                    duration: "1 day",
                    image: "/images/courses/food/iso22000-audit.jpg",
                    description:
                      "Plan, perform and report internal audits against ISO 22000 requirements.",
                    details: {
                      hero: "/images/courses/food/iso22000-audit-hero.jpg",
                      overview:
                        "Develop auditing skills to evaluate the effectiveness of your FSMS and drive continual improvement.",
                      sections: [
                        {
                          title: "Outcomes",
                          bullets: [
                            "Audit planning, checklists & sampling",
                            "Interviewing & evidence collection",
                            "Non-conformity grading & reporting",
                            "Follow-up, CAPA and effectiveness checks",
                          ],
                        },
                      ],
                    },
                  },
                ],
              },

              {
                id: "haccp",
                name: "HACCP",
                items: [
                  {
                    id: "haccp-awareness-seminar",
                    tag: "HACCP",
                    title: "HACCP Awareness Seminar",
                    duration: "4 hours",
                    image: "/images/courses/food/haccp-awareness.jpg",
                    description:
                      "Foundation session on Hazard Analysis & Critical Control Points and its role in safe food operations.",
                    details: {
                      hero: "/images/courses/food/haccp-awareness-hero.jpg",
                      overview:
                        "Introduces the principles of Hazard Analysis and Critical Control Points (HACCP) — a globally recognized system for ensuring food safety.",
                      sections: [
                        {
                          title: "You’ll Learn",
                          bullets: [
                            "HACCP principles and terminology",
                            "Hazard identification & risk control",
                            "Preventive measures in food handling",
                            "Where HACCP fits in your FSMS",
                          ],
                        },
                      ],
                    },
                  },
                  {
                    id: "level3-haccp-catering-highfield",
                    tag: "HACCP",
                    title: "Level 3 Award in HACCP for Catering (Highfield)",
                    duration: "8 hours",
                    image: "/images/courses/food/haccp-l3.jpg",
                    description:
                      "One-day qualification for supervisors/managers implementing HACCP in catering environments.",
                    details: {
                      hero: "/images/courses/food/haccp-l3-hero.jpg",
                      overview:
                        "Designed for those involved in developing and maintaining HACCP within catering. Builds practical skills to implement effective food safety management based on HACCP principles.",
                      sections: [
                        {
                          title: "Who Should Attend",
                          bullets: [
                            "Supervisors and managers",
                            "Small business owners with prior food safety knowledge",
                          ],
                        },
                        {
                          title: "Outcomes",
                          bullets: [
                            "Hazard analysis & CCP determination",
                            "Critical limits, monitoring & verification",
                            "Corrective actions and documentation",
                          ],
                        },
                      ],
                    },
                  },
                  {
                    id: "level4-haccp-management-highfield",
                    tag: "HACCP",
                    title: "Level 4 Award in HACCP Management (Highfield)",
                    duration: "24 – 30 hours",
                    image: "/images/courses/food/haccp-l4.jpg",
                    description:
                      "Advanced HACCP management: designing, validating and maintaining HACCP systems; leadership responsibilities.",
                    details: {
                      hero: "/images/courses/food/haccp-l4-hero.jpg",
                      overview:
                        "Advanced program for those responsible for designing and managing HACCP systems, including validation, verification and continual improvement.",
                      sections: [
                        {
                          title: "Key Topics",
                          bullets: [
                            "Advanced hazard analysis and risk assessment",
                            "Validation/verification and CCP management",
                            "Legal responsibilities & due diligence",
                            "Performance measurement and improvement",
                          ],
                        },
                      ],
                    },
                  },
                  {
                    id: "haccp-internal-audit",
                    tag: "HACCP",
                    title: "HACCP Internal Audit Course",
                    duration: "1 day",
                    image: "/images/courses/food/haccp-audit.jpg",
                    description:
                      "Conduct effective internal audits of HACCP plans and prerequisite programs.",
                    details: {
                      hero: "/images/courses/food/haccp-audit-hero.jpg",
                      overview:
                        "Build auditing capability to assess HACCP plans, PRPs and records against your procedures and regulatory requirements.",
                      sections: [
                        {
                          title: "You’ll Learn",
                          bullets: [
                            "Audit planning and checklist design",
                            "Evaluating hazard studies and CCPs",
                            "Sampling, tracing & record review",
                            "Reporting non-conformities and CAPA",
                          ],
                        },
                      ],
                    },
                  },
                ],
              },

              {
                id: "food-safety-adv",
                name: "Food Safety",
                items: [
                  {
                    id: "level3-food-safety-highfield",
                    tag: "Food Safety",
                    title: "Level 3 Award in Food Safety (Highfield)",
                    duration: "20 hours",
                    image: "/images/courses/food/fs-l3.jpg",
                    description:
                      "Supervisory food safety qualification focusing on hazard control, complaints, recalls and managing risk factors.",
                    details: {
                      hero: "/images/courses/food/fs-l3-hero.jpg",
                      overview:
                        "Designed for supervisors, middle managers and QA staff. Focuses on identifying and controlling hazards to prevent food poisoning, spoilage, customer complaints and costly recalls.",
                      sections: [
                        {
                          title: "You’ll Learn",
                          bullets: [
                            "Risk factors: temperature abuse, processing, storage",
                            "Safe cooling, thawing and reheating",
                            "Complaint handling & root cause analysis",
                            "Monitoring programs and documentation",
                          ],
                        },
                      ],
                    },
                  },
                  {
                    id: "level4-managing-food-safety-highfield",
                    tag: "Food Safety",
                    title:
                      "Level 4 Award in Managing Food Safety (Highfield)",
                    duration: "40 hours",
                    image: "/images/courses/food/fs-l4.jpg",
                    description:
                      "Advanced qualification for managers/trainers: hygiene in depth, hazard control, development and monitoring of food safety procedures.",
                    details: {
                      hero: "/images/courses/food/fs-l4-hero.jpg",
                      overview:
                        "Equips managers and aspiring managers with the knowledge to operate and oversee safe food operations in catering/manufacturing or retail. Ideal for those educating or supervising food handlers.",
                      sections: [
                        {
                          title: "Key Emphasis",
                          bullets: [
                            "Food hygiene in depth & hazard control",
                            "Developing, implementing and monitoring procedures",
                            "Coaching, supervision and compliance",
                          ],
                        },
                      ],
                    },
                  },
                ],
              },

              {
                id: "pic",
                name: "Person In Charge (PIC)",
                items: [
                  {
                    id: "pic-certification-highfield-tsi",
                    tag: "Food Safety",
                    title:
                      "Person In Charge PIC Certification for Food safety (Highfield, TSI)",
                    duration: "8 hours",
                    image: "/images/courses/food/pic.jpg",
                    description:
                      "PIC program aligned to Dubai Municipality regulations; equips operators & managers with compliance skills.",
                    details: {
                      hero: "/images/courses/food/pic-hero.jpg",
                      overview:
                        "The PIC (Person In Charge) training equips food business operators and managers with the knowledge and skills to ensure food safety compliance in line with Dubai Municipality regulations. Certificates are issued by municipality-approved awarding bodies (EIAC-accredited).",
                      sections: [
                        {
                          title: "You’ll Learn",
                          bullets: [
                            "Hygiene principles and supervisory practices",
                            "HACCP implementation basics",
                            "Regulatory framework and responsibilities",
                            "Maintaining high food safety standards",
                          ],
                        },
                        {
                          title: "Outcome",
                          bullets: [
                            "Certification as PIC upon successful completion",
                            "Ability to oversee operations and ensure compliance",
                          ],
                        },
                      ],
                    },
                  },
                  {
                    id: "pic-advanced-certification-highfield-tsi",
                    tag: "Food Safety",
                    title:
                      "Person In Charge PIC Advanced Certification for Food safety (Highfield, TSI)",
                    duration: "10 hours",
                    image: "/images/courses/food/pic-advanced.jpg",
                    description:
                      "Advanced PIC for managers/supervisors: risk assessment, Food Code compliance, inspection procedures and documentation.",
                    details: {
                      hero: "/images/courses/food/pic-advanced-hero.jpg",
                      overview:
                        "Specialized program for managers and supervisors focusing on advanced food safety management, risk assessment and compliance with Dubai’s Food Code.",
                      sections: [
                        {
                          title: "Topics Covered",
                          bullets: [
                            "Developing and implementing food safety systems",
                            "Hazard analysis & critical control monitoring",
                            "Legal responsibilities and inspection procedures",
                            "Documentation and best-practice guidance",
                          ],
                        },
                        {
                          title: "Outcome",
                          bullets: [
                            "Recognized certification qualifying candidates to act as designated PICs for higher-risk food businesses",
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },

          // ---- Special Courses ----
          {
            id: "special",
            name: "Special Courses",
            items: [
              {
                id: "l2-allergen-awareness-highfield",
                tag: "Food Safety",
                title:
                  "Level 2 Award in Food Allergen Awareness & Control (Highfield)",
                duration: "4 – 6 hours",
                image: "/images/courses/food/allergen-l2.jpg",
                description:
                  "Allergen fundamentals for handlers: cross-contact prevention, labeling and safe service.",
                details: {
                  hero: "/images/courses/food/allergen-l2-hero.jpg",
                  overview:
                    "Covers the core allergen risks, controls and communication needed for safe preparation and service.",
                  sections: [
                    {
                      title: "Key Topics",
                      bullets: [
                        "Major allergens and symptoms",
                        "Cross-contact prevention",
                        "Label reading and customer communication",
                        "Allergen-safe cleaning & changeover",
                      ],
                    },
                  ],
                },
              },
              {
                id: "l3-allergen-management-highfield",
                tag: "Food Safety",
                title:
                  "Level 3 Award in Food Allergen Management (Highfield)",
                duration: "8 – 12 hours",
                image: "/images/courses/food/allergen-l3.jpg",
                description:
                  "Manager-level allergen controls, verification and complaint/incident handling.",
                details: {
                  hero: "/images/courses/food/allergen-l3-hero.jpg",
                  overview:
                    "For supervisors/managers responsible for developing and verifying allergen controls.",
                  sections: [
                    {
                      title: "You’ll Learn",
                      bullets: [
                        "Risk assessment and validation",
                        "Supplier assurance and labeling compliance",
                        "Complaint handling & incident response",
                        "Monitoring, verification and improvement",
                      ],
                    },
                  ],
                },
              },
              {
                id: "l3-positive-food-safety-culture-highfield",
                tag: "Food Safety",
                title:
                  "Level 3 Award in Developing a Positive Food Safety Culture (Highfield)",
                duration: "1 day",
                image: "/images/courses/food/culture-l3.jpg",
                description:
                  "Develop leadership and behaviours that improve food safety culture across the operation.",
                details: {
                  hero: "/images/courses/food/culture-l3-hero.jpg",
                  overview:
                    "Explores leadership, behaviours and communication that drive a strong food safety culture and sustained compliance.",
                  sections: [
                    {
                      title: "Key Emphasis",
                      bullets: [
                        "Culture diagnostics & maturity",
                        "Setting expectations and leading by example",
                        "Coaching and feedback loops",
                        "Measuring and sustaining improvement",
                      ],
                    },
                  ],
                },
              },
              {
                id: "inspection-techniques-food-premises",
                tag: "Food Safety",
                title: "Inspection Techniques of Food Premises",
                duration: "1 day",
                image: "/images/courses/food/inspection.jpg",
                description:
                  "Practical inspection skills for supervisors and internal auditors of food premises.",
                details: {
                  hero: "/images/courses/food/inspection-hero.jpg",
                  overview:
                    "Builds practical skills to plan and conduct internal inspection of food premises against regulatory and company standards.",
                  sections: [
                    {
                      title: "Outcomes",
                      bullets: [
                        "Structured inspection planning & checklists",
                        "Evidence collection and photography",
                        "Grading, reporting and follow-up",
                      ],
                    },
                  ],
                },
              },
              {
                id: "food-poisoning-outbreak-investigation",
                tag: "Food Safety",
                title: "Food Poisoning Outbreak Investigation",
                duration: "1 day",
                image: "/images/courses/food/outbreak.jpg",
                description:
                  "How to respond to suspected outbreaks: data collection, tracing, controls and communication.",
                details: {
                  hero: "/images/courses/food/outbreak-hero.jpg",
                  overview:
                    "Covers investigation workflow from first alert to control measures, documentation and lessons learned.",
                  sections: [
                    {
                      title: "You’ll Learn",
                      bullets: [
                        "Case definition & epidemiology basics",
                        "Traceability and sampling",
                        "Control measures and stakeholder comms",
                        "Reporting and corrective actions",
                      ],
                    },
                  ],
                },
              },
            ],
          },
        ],
      },

      // =========================
      // HEALTH & SAFETY (light, extend anytime)
      // =========================
      {
        id: "health-safety",
        name: "Health & Safety",
        items: [
          {
            id: "fire-safety-awareness",
            tag: "Health & Safety",
            title: "Fire Safety Awareness",
            duration: "3 – 4 hours",
            image: "/images/courses/hs/fire-safety.jpg",
            description:
              "Basics of fire prevention, evacuation, and extinguisher use for the workplace.",
            details: {
              hero: "/images/courses/hs/fire-safety-hero.jpg",
              overview:
                "Covers fire triangle, common causes, alarms, evacuation and safe use of extinguishers.",
              sections: [
                {
                  title: "Key Topics",
                  bullets: [
                    "Fire triangle & classes of fire",
                    "Alarm, evacuation & assembly points",
                    "Practical use of extinguishers (demo)",
                  ],
                },
              ],
            },
          },
          {
            id: "manual-handling",
            tag: "Health & Safety",
            title: "Manual Handling",
            duration: "3 hours",
            image: "/images/courses/hs/manual-handling.jpg",
            description:
              "Safe lifting techniques and musculoskeletal injury prevention.",
            details: {
              hero: "/images/courses/hs/manual-handling-hero.jpg",
              overview:
                "Learn safe lifting, pushing, pulling and team handling techniques to reduce injury.",
              sections: [
                {
                  title: "You’ll Learn",
                  bullets: [
                    "Risk factors and biomechanics",
                    "Lifting & carrying techniques",
                    "Use of aids and team handling",
                  ],
                },
              ],
            },
          },
          {
            id: "risk-assessment-basics",
            tag: "Health & Safety",
            title: "Risk Assessment Basics",
            duration: "3 – 4 hours",
            image: "/images/courses/hs/risk.jpg",
            description:
              "Identify hazards, evaluate risks and implement controls using a simple 5-step model.",
            details: {
              hero: "/images/courses/hs/risk-hero.jpg",
              overview:
                "Introduces the 5-step risk assessment and ALARP principles to keep people safe.",
              sections: [
                {
                  title: "Outcomes",
                  bullets: [
                    "Hazard identification",
                    "Likelihood/Severity scoring",
                    "Hierarchy of controls",
                  ],
                },
              ],
            },
          },
        ],
      },

      // =========================
      // FIRST AID (light)
      // =========================
      {
        id: "first-aid",
        name: "First Aid",
        items: [
          {
            id: "basic-first-aid",
            tag: "First Aid",
            title: "Basic First Aid",
            duration: "1 day",
            image: "/images/courses/fa/basic.jpg",
            description:
              "Core first aid skills including scene assessment, bleeding control and recovery position.",
            details: {
              hero: "/images/courses/fa/basic-hero.jpg",
              overview:
                "Hands-on practice for key first aid responses at work or home.",
              sections: [
                {
                  title: "You’ll Learn",
                  bullets: [
                    "Primary survey (DRABC)",
                    "Wounds & bleeding control",
                    "Shock & recovery position",
                  ],
                },
              ],
            },
          },
          {
            id: "cpr-aed",
            tag: "First Aid",
            title: "CPR & AED",
            duration: "3 – 4 hours",
            image: "/images/courses/fa/cpr.jpg",
            description:
              "Adult CPR with the safe use of an Automated External Defibrillator.",
            details: {
              hero: "/images/courses/fa/cpr-hero.jpg",
              overview:
                "Learn high-quality CPR and how to deploy an AED quickly and safely.",
              sections: [
                {
                  title: "Practice Includes",
                  bullets: [
                    "Adult CPR cycles",
                    "AED setup and shock delivery",
                    "Handover to emergency services",
                  ],
                },
              ],
            },
          },
        ],
      },

      // =========================
      // PUBLIC HEALTH (light)
      // =========================
      {
        id: "public-health",
        name: "Public Health",
        items: [
          {
            id: "infection-prevention-control",
            tag: "Public Health",
            title: "Infection Prevention & Control (IPC)",
            duration: "4 hours",
            image: "/images/courses/ph/ipc.jpg",
            description:
              "Hand hygiene, PPE, cleaning and environmental controls to reduce infection risks.",
            details: {
              hero: "/images/courses/ph/ipc-hero.jpg",
              overview:
                "Covers routes of transmission, hygiene protocols and cleaning regimes.",
              sections: [
                {
                  title: "Topics",
                  bullets: [
                    "Hand hygiene & PPE",
                    "Cleaning & disinfection",
                    "Waste and environmental hygiene",
                  ],
                },
              ],
            },
          },
          {
            id: "environmental-health-basics",
            tag: "Public Health",
            title: "Environmental Health Basics",
            duration: "1 day",
            image: "/images/courses/ph/eh.jpg",
            description:
              "Foundations of environmental health: water, waste, pests and housing.",
            details: {
              hero: "/images/courses/ph/eh-hero.jpg",
              overview:
                "Introduces key EH themes and community protection measures.",
              sections: [
                {
                  title: "You’ll Learn",
                  bullets: [
                    "Water quality and sanitation",
                    "Vector & pest control overview",
                    "Housing & workplace environment",
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  },
};
