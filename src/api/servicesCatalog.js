// api/servicesCatalog.js
export const sharedEmails = ["admin@rmktheexperts.com", "ghada@rmktheexperts.com"];

export const CATALOG = {
    training: {
        categories: [
            /* ---------- FOOD SAFETY with levels & tracks ---------- */
            {
                id: "food-safety",
                name: "Food Safety",
                defaultGroup: "municipality",
                groups: [
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
                            },
                            {
                                id: "efst-abu-dhabi-al-ain-western",
                                tag: "Food Safety",
                                title: "Essential Food Safety Training (EFST) – Abu Dhabi, Al Ain & Western Region",
                                duration: "6 hours",
                                image: "/images/courses/food/efst.jpg",
                                description:
                                    "EFST aligned to local regulations: safe handling, cleaning & disinfection, pest control awareness, and personal hygiene.",
                            },
                            {
                                id: "ghp-managers-staff-sharjah",
                                tag: "Food Safety",
                                title: "GHP Managers & GHP Staff (Sharjah)",
                                duration: "6 hours",
                                image: "/images/courses/food/ghp.jpg",
                                description:
                                    "Good Hygiene Practices for staff and managers: personal hygiene, safe handling, sanitation, pest control, workplace safety; manager stream covers supervision & compliance.",
                            },
                            {
                                id: "bfsh-rak",
                                tag: "Food Safety",
                                title: "Basic Food Safety & Hygiene (BFSH) – RAK",
                                duration: "6 hours",
                                image: "/images/courses/food/bfsh.jpg",
                                description:
                                    "Foundation hygiene program for Ras Al Khaimah food businesses, including temperature monitoring and cleaning verification.",
                            },
                        ],
                    },

                    {
                        id: "advanced",
                        name: "Advanced Level",
                        tracks: [
                            {
                                id: "iso22000",
                                name: "ISO 22000",
                                items: [
                                    {
                                        id: "iso22000-intro-seminar",
                                        tag: "ISO 22000",
                                        title: "Introduction to ISO 22000 Seminar",
                                        duration: "1 day",
                                        image: "/images/courses/food/iso-intro.jpg",
                                        description:
                                            "Overview of FSMS principles, clauses, risk-based thinking, and documentation expectations.",
                                    },
                                    {
                                        id: "iso22000-implementation",
                                        tag: "ISO 22000",
                                        title: "ISO 22000 Implementation Course",
                                        duration: "2–3 days",
                                        image: "/images/courses/food/iso-impl.jpg",
                                        description:
                                            "Hands-on implementation: context, leadership, planning, support, operation, performance evaluation, improvement.",
                                    },
                                    {
                                        id: "iso22000-internal-audit",
                                        tag: "ISO 22000",
                                        title: "ISO 22000 Internal Audit Course",
                                        duration: "2 days",
                                        image: "/images/courses/food/iso-audit.jpg",
                                        description:
                                            "Plan, conduct and report FSMS internal audits; sampling, evidence, non-conformities, and CAPA.",
                                    },
                                ],
                            },

                            {
                                id: "haccp",
                                name: "HACCP",
                                items: [
                                    {
                                        id: "haccp-awareness",
                                        tag: "HACCP",
                                        title: "HACCP Awareness Seminar",
                                        duration: "1 day",
                                        image: "/images/courses/food/haccp-awareness.jpg",
                                        description:
                                            "Principles of hazard analysis and CCPs, prerequisite programs, monitoring and verification.",
                                    },
                                    {
                                        id: "l3-haccp-catering-highfield",
                                        tag: "HACCP",
                                        title: "Level 3 Award in HACCP for Catering (Highfield)",
                                        duration: "2 days",
                                        image: "/images/courses/food/haccp-l3.jpg",
                                        description:
                                            "Develop and maintain HACCP-based procedures in catering environments; assessment per awarding-body criteria.",
                                    },
                                    {
                                        id: "l4-haccp-management-highfield",
                                        tag: "HACCP",
                                        title: "Level 4 Award in HACCP Management (Highfield)",
                                        duration: "4–5 days",
                                        image: "/images/courses/food/haccp-l4.jpg",
                                        description:
                                            "Lead HACCP design, validation/verification, and system improvement; managerial competence focus.",
                                    },
                                    {
                                        id: "haccp-internal-audit",
                                        tag: "HACCP",
                                        title: "HACCP Internal Audit Course",
                                        duration: "2 days",
                                        image: "/images/courses/food/haccp-audit.jpg",
                                        description:
                                            "Structured auditing of HACCP systems, evidence collection and reporting.",
                                    },
                                ],
                            },

                            {
                                id: "food-safety-qual",
                                name: "Food Safety",
                                items: [
                                    {
                                        id: "l3-food-safety-highfield",
                                        tag: "Food Safety",
                                        title: "Level 3 Award in Food Safety (Highfield)",
                                        duration: "3 days",
                                        image: "/images/courses/food/fs-l3.jpg",
                                        description:
                                            "Supervisory-level food safety, contamination controls, microbiology, documentation, supervision duties.",
                                    },
                                    {
                                        id: "l4-managing-food-safety-highfield",
                                        tag: "Food Safety",
                                        title: "Level 4 Award in Managing Food Safety (Highfield)",
                                        duration: "5 days",
                                        image: "/images/courses/food/fs-l4.jpg",
                                        description:
                                            "Management-level food safety system design, leadership and continual improvement.",
                                    },
                                ],
                            },

                            {
                                id: "pic",
                                name: "Person In Charge (PIC)",
                                items: [
                                    {
                                        id: "pic-certification",
                                        tag: "PIC",
                                        title: "Person In Charge (PIC) Certification for Food Safety (Highfield, TSI)",
                                        duration: "2–3 days",
                                        image: "/images/courses/food/pic.jpg",
                                        description:
                                            "Mandatory PIC competencies for regulatory compliance; risk assessment, controls, documentation.",
                                    },
                                    {
                                        id: "pic-advanced",
                                        tag: "PIC",
                                        title:
                                            "Person In Charge (PIC) Advanced Certification for Food Safety (Highfield, TSI)",
                                        duration: "3–4 days",
                                        image: "/images/courses/food/pic-adv.jpg",
                                        description:
                                            "Advanced PIC leadership, verification, root-cause analysis, food safety culture and performance.",
                                    },
                                ],
                            },
                        ],
                    },

                    {
                        id: "special",
                        name: "Special Courses",
                        items: [
                            {
                                id: "l2-allergen-awareness",
                                tag: "Allergens",
                                title: "Level 2 Award in Food Allergen Awareness & Control (Highfield)",
                                duration: "1 day",
                                image: "/images/courses/food/allergen-l2.jpg",
                                description:
                                    "Identification, control and communication of allergens across the food chain.",
                            },
                            {
                                id: "l3-allergen-management",
                                tag: "Allergens",
                                title: "Level 3 Award in Food Allergen Management (Highfield)",
                                duration: "2 days",
                                image: "/images/courses/food/allergen-l3.jpg",
                                description:
                                    "Design and manage allergen risk controls, supplier assurance, and incident response.",
                            },
                            {
                                id: "l3-positive-food-safety-culture",
                                tag: "Food Safety Culture",
                                title: "Level 3 Award in Developing a Positive Food Safety Culture (Highfield)",
                                duration: "2 days",
                                image: "/images/courses/food/culture.jpg",
                                description:
                                    "Leadership behaviours, measurement and improvement of food safety culture.",
                            },
                            {
                                id: "inspection-techniques",
                                tag: "Inspection",
                                title: "Inspection Techniques of Food Premises",
                                duration: "1–2 days",
                                image: "/images/courses/food/inspection.jpg",
                                description:
                                    "Systematic inspection skills: facilities, process flows, records, and evidence capture.",
                            },
                            {
                                id: "food-poisoning-outbreak",
                                tag: "Investigation",
                                title: "Food Poisoning Outbreak Investigation",
                                duration: "1–2 days",
                                image: "/images/courses/food/outbreak.jpg",
                                description:
                                    "Epidemiology basics, trace-back, sampling, interviews, control actions, reporting.",
                            },
                        ],
                    },
                ],
            },

            /* ---------- other training categories (unchanged) ---------- */
            {
                id: "health-safety",
                name: "Health & Safety",
                items: [
                    {
                        id: "hs-foundation",
                        tag: "Health & Safety",
                        title: "Health & Safety Foundation",
                        duration: "1 day",
                        image: "/images/courses/hs/foundation.jpg",
                        description:
                            "Risk assessment, signage, PPE, emergency response and incident reporting.",
                    },
                ],
            },
            {
                id: "first-aid",
                name: "First Aid",
                items: [
                    {
                        id: "first-aid-basic",
                        tag: "First Aid",
                        title: "Basic First Aid",
                        duration: "1 day",
                        image: "/images/courses/firstaid/basic.jpg",
                        description:
                            "Scene safety, CPR/AED (brand-safe), choking, bleeding and recovery position.",
                    },
                ],
            },
            {
                id: "public-health",
                name: "Public Health",
                items: [
                    {
                        id: "public-health-awareness",
                        tag: "Public Health",
                        title: "Public Health Awareness",
                        duration: "1 day",
                        image: "/images/courses/public/awareness.jpg",
                        description:
                            "Sanitation, vector control basics and health communication for hospitality & facilities teams.",
                    },
                ],
            },
        ],
    },

    /* keep your consultancy and assessment blocks as before */
};
