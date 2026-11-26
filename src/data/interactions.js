import dashboardImage from "../assets/isuru/dashboard.png";
import stayImage from "../assets/isuru/add-record.png";
import roomsImage from "../assets/isuru/rooms.png";
import incomeImage from "../assets/isuru/income.png";

const technologies = [{ items: ["React", "Electron", "Spring Boot", "PostgreSQL"] }];
const screenshots = [
  { id: "dashboard", src: dashboardImage, alt: "Isuru Villa operations dashboard" },
  { id: "stay", src: stayImage, alt: "Isuru Villa stay creation screen" },
  { id: "rooms", src: roomsImage, alt: "Isuru Villa room management screen" },
  { id: "income", src: incomeImage, alt: "Isuru Villa income tracking screen" }
];

export const interactions = [
  {
    id: "isuru-villa",
    name: "Isuru Villa",
    subtitle: "Villa Management System",
    status: "Completed",
    category: "Commercial Project",
    platform: "Desktop Application",
    year: 2026,
    role: "Full-Stack Developer",
    technologies,
    screenshots,
    upcomingDevelopments: [
      { id: "official-website", name: "Official Website", timeframe: "Near Future" }
    ],
    menuSections: [
      {
        label: "Project Overview",
        children: [
          {
            value: "dashboard",
            label: "Operations Dashboard",
            description: "The dashboard brings together current stays, room information, operational activity and key data in one central view.",
            screenshotId: "dashboard"
          }
        ]
      },
      {
        label: "System Features",
        children: [
          {
            value: "stays",
            label: "Guest & Stay Management",
            description: "Guest information, room selection, stay details and pricing are handled through a dedicated workflow.",
            screenshotId: "stay"
          },
          {
            value: "rooms",
            label: "Room Operations",
            description: "Room status and availability are shown in one place to make everyday room management easier to understand and maintain.",
            screenshotId: "rooms"
          },
          {
            value: "income",
            label: "Income & Reporting",
            description: "Financial information is presented clearly to support daily operational tracking and reporting.",
            screenshotId: "income"
          },
          {
            value: "audit",
            label: "Audit History",
            description: "Administrative actions are recorded so activity can be reviewed when needed."
          },
          {
            value: "other-features",
            label: "Other System Features",
            points: ["Checkout Workflow", "Cleaning Status", "User Roles", "Backup & Recovery"]
          }
        ]
      },
      {
        label: "Technical Details",
        children: [
          {
            value: "stack",
            label: "Technology Stack",
            description: "React frontend, Electron desktop shell, Spring Boot backend, and PostgreSQL database."
          },
          {
            value: "role",
            label: "Development Role",
            description: "Full-Stack Developer"
          }
        ]
      },
      {
        label: "Case Study",
        placement: "showcase",
        children: [
          {
            value: "context",
            label: "Project Context",
            heading: "Built around the way the villa actually operates.",
            paragraphs: [
              "Isuru Villa needed a more structured way to handle day-to-day operations including guests, stays, rooms, payments, cleaning status and administrative records.",
              "The goal was to bring those workflows together into one dedicated management system."
            ]
          },
          {
            value: "solution",
            label: "The Solution",
            heading: "One system for the core operations.",
            paragraphs: [
              "The desktop application centralizes the villa's operational workflow into a single interface designed for everyday use."
            ]
          },
          {
            value: "outcome",
            label: "Project Outcome",
            heading: "A centralized operational system for the villa.",
            points: [
              "Centralized guest records",
              "Structured stay management",
              "Clear room and cleaning status",
              "Better financial visibility",
              "Role-based system access",
              "Reliable operational history"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "bossone-lk",
    name: "BOSSONE.LK",
    subtitle: "B2B Wholesale Salon Marketplace & Business Management Platform",
    tagline: "Discover. Order. Manage. Deliver.",
    status: "In Development",
    statusTone: "development",
    developmentCompany: "Arqeno",
    reference: {
      label: "View Project on Arqeno",
      url: "https://arqeno.work/work/bossone-lk/"
    },
    category: "Team Project",
    platform: "Web & Mobile Applications",
    year: "2026 – Present",
    role: "Software Engineer | Full-Stack Developer",
    description: [
      "BOSSONE.LK is an integrated B2B wholesale marketplace and business management platform being developed to connect professional salons and wholesale beauty product operations through a unified digital ecosystem.",
      "The platform combines web applications, dedicated mobile applications and centralized backend infrastructure to support wholesale commerce, customer account management, inventory operations, quality control, financial management and delivery coordination."
    ],
    technologies: [
      { label: "Web", items: ["Next.js", "React", "TypeScript"] },
      { label: "Mobile", items: ["Expo", "React Native", "TypeScript"] },
      { label: "Backend", items: ["NestJS", "REST APIs"] },
      { label: "Database and Infrastructure", items: ["PostgreSQL", "Prisma", "Supabase", "Supabase Storage"] }
    ],
    screenshots: [],
    menuPlacement: "showcase",
    menuSections: [
      {
        label: "Project Overview",
        children: [
          {
            value: "context",
            label: "Project Context",
            description: "When wholesale purchasing, inventory, order fulfilment, payment collection and delivery coordination are handled separately, teams have to reconcile records and handoffs across those workflows. BOSSONE.LK is being developed to bring them together."
          },
          {
            value: "objectives",
            label: "Business Objectives",
            description: "Connect wholesale commerce, customer management and internal business operations through one centralized digital platform."
          },
          {
            value: "audience",
            label: "Target Audience",
            description: "Professional hair salons, salon owners, wholesale beauty product distributors and internal operational teams."
          }
        ]
      },
      {
        label: "Web Platform",
        children: [
          {
            value: "marketplace",
            label: "Customer Marketplace",
            description: "The marketplace scope includes product discovery, brand browsing, search, filters, wholesale pricing, minimum order quantities (MOQ), pack sizes, product comparison, wishlists and regular product lists."
          },
          {
            value: "accounts",
            label: "Customer Account Management",
            description: "Account workflows cover authentication, email and mobile verification, customer profiles, salon branch management, business verification, invoices, loyalty and account security."
          },
          {
            value: "checkout",
            label: "Checkout & Order Management",
            description: "The checkout and order scope covers cart management, quantity validation, verified branch selection, online payments, cash on delivery (COD), order tracking and invoice access."
          },
          {
            value: "administration",
            label: "Owner & Administration",
            description: "The administration scope includes business dashboards, catalogue management, wholesale configuration, staff roles, approvals, operational oversight, financial visibility and reporting."
          },
          {
            value: "service",
            label: "Service Management",
            description: "The service scope covers customer support, order enquiries, support cases, communication and promotional proposals."
          },
          {
            value: "stock",
            label: "Stock Management",
            description: "Stock workflows cover inventory visibility and monitoring, order picking, packing, stock movements and delivery handover."
          },
          {
            value: "quality",
            label: "Quality Control",
            description: "The quality control scope includes order inspection, item verification, product condition checks, inspection results and dispatch readiness."
          },
          {
            value: "accounting",
            label: "Accounting",
            description: "The accounting scope covers payment verification, COD monitoring, reconciliation, invoices, credit notes and financial reporting."
          }
        ]
      },
      {
        label: "Mobile Applications",
        children: [
          {
            value: "customer-app",
            label: "Customer Application",
            description: "The Android and iOS customer app scope includes product discovery, wholesale ordering, customer accounts, salon branch management, order tracking, invoices, loyalty and notifications."
          },
          {
            value: "deliverer-app",
            label: "Deliverer Application",
            description: "The dedicated Android and iOS deliverer app scope includes assigned deliveries, destination information, COD collection, delivery status updates, navigation and authorized delivery completion."
          }
        ]
      },
      {
        label: "Shared Infrastructure",
        children: [
          {
            value: "backend",
            label: "Backend & API Architecture",
            description: "The backend design uses centralized NestJS REST APIs for business logic, authentication integration, authorization, database operations and workflows for orders, payments, inventory and deliveries."
          },
          {
            value: "database",
            label: "Database & Data Management",
            description: "The data architecture uses PostgreSQL, Prisma and Supabase to maintain consistent business information across the web and mobile applications."
          },
          {
            value: "rbac",
            label: "Authentication & RBAC",
            description: "The access model uses centralized authentication and role-based access control for Customer, Owner/Admin, Service Manager, Stock Manager, Quality Controller, Deliverer and Accountant roles."
          },
          {
            value: "payments",
            label: "Payments & Business Rules",
            description: "The business rules cover server-verified online payments, full COD collection, wholesale quantity validation, stock reservation and verified salon branch requirements, with enforcement centralized on the backend."
          },
          {
            value: "notifications",
            label: "Notifications & Communication",
            description: "Planned notifications include centralized email, SMS, push and in-app messages triggered by verified backend events."
          },
          {
            value: "maps",
            label: "Maps & Delivery Tracking",
            description: "Planned capabilities include map integration, address search, route guidance, delivery navigation and authorized location-based tracking."
          },
          {
            value: "storage",
            label: "Cloud Storage",
            description: "The storage design uses Supabase Storage for product images, business verification documents, identity documents, support attachments and invoices, with access limited to authorized users."
          },
          {
            value: "security",
            label: "Security & Auditability",
            description: "The security scope includes protected APIs, server-side authorization, input validation, secure document handling, operational logging, audit records and controlled payment-state transitions."
          }
        ]
      },
      {
        label: "Technical Details",
        children: [
          {
            value: "stack",
            label: "Technology Stack",
            description: "The web platform uses Next.js, React and TypeScript. The mobile applications use Expo, React Native and TypeScript. NestJS provides REST APIs, with PostgreSQL and Prisma for data access and Supabase and Supabase Storage for infrastructure and file storage."
          },
          {
            value: "architecture",
            label: "System Architecture",
            description: "The web platform, Customer app and Deliverer app connect to centralized backend services. The shared backend coordinates access to business data and applies the same rules across web and mobile workflows."
          },
          {
            value: "role",
            label: "Development Role",
            heading: "Software Engineer | Full-Stack Developer",
            description: "I contribute to full-stack development across the platform as part of the BOSSONE.LK engineering team."
          }
        ]
      },
      {
        label: "Development Roadmap",
        children: [
          {
            value: "current",
            label: "Current Development",
            description: "The team is actively developing BOSSONE.LK as a connected wholesale commerce and business management platform. The workflows described here define the overall development scope."
          },
          {
            value: "vision",
            label: "Long-Term Vision",
            description: "Continue developing automation, operational analytics, communication infrastructure, delivery intelligence and business management capabilities."
          }
        ]
      }
    ]
  },
  {
    id: "slf-health-service-union",
    name: "SLF Health Service Union",
    subtitle: "Enterprise Administration & Digital Transformation",
    tagline: "Connecting people, information and administration.",
    status: "In Development",
    statusTone: "development",
    organization: "SLF Health Service Union Administration",
    developmentCompany: "Arqeno",
    reference: {
      label: "View Project on Arqeno",
      url: "https://arqeno.work/work/slf-health-service-union/"
    },
    category: "Client Project",
    platform: "Full-Stack Web Application",
    year: "2026 – Present",
    role: "Software Engineer | Full-Stack Developer",
    description: [
      "The SLF Health Service Union project focuses on modernizing spreadsheet-based administration through a centralized full-stack web application designed to support employee information management, reduce repetitive administrative work and enable gradual digital transformation.",
      "The platform follows a hybrid administrative approach, allowing established manual procedures to coexist with digital workflows while the organization progressively transitions toward structured digital administration."
    ],
    technologyLabel: "Proposed Technology Stack",
    technologies: [
      { label: "Frontend", items: ["Next.js", "React", "TypeScript"] },
      { label: "Backend", items: ["NestJS"] },
      { label: "Database and Infrastructure", items: ["PostgreSQL", "Prisma", "Supabase"] }
    ],
    screenshots: [],
    menuPlacement: "showcase",
    menuSections: [
      {
        label: "Project Overview",
        children: [
          {
            value: "context",
            label: "Project Context",
            description: "The project focuses on modernizing administrative processes that currently rely on large spreadsheets and manual procedures across healthcare institutions."
          },
          {
            value: "requirements",
            label: "Business Requirements",
            description: "As employee information grows across institutions, keeping administrative records consistent, organized and accessible becomes more difficult."
          },
          {
            value: "solution",
            label: "Proposed Solution",
            description: "The proposed full-stack web application would centralize administration while allowing existing manual procedures to continue alongside progressively automated digital workflows."
          }
        ]
      },
      {
        label: "System Features",
        children: [
          {
            value: "employee-information",
            label: "Employee Information Management",
            description: "The proposed workspace would centralize the organization and management of employee records."
          },
          {
            value: "institutional-administration",
            label: "Institutional Administration",
            description: "The project aims to organize administrative information across healthcare institutions and related organizations."
          },
          {
            value: "spreadsheet-modernization",
            label: "Spreadsheet Modernization",
            description: "The project plans a gradual move from fragmented spreadsheets to structured digital records."
          },
          {
            value: "workflow-automation",
            label: "Workflow Automation",
            description: "Digital workflows are intended to reduce repetitive administrative work where appropriate."
          },
          {
            value: "hybrid-administration",
            label: "Hybrid Administration",
            description: "The proposed approach supports manual procedures alongside automated digital processes."
          },
          {
            value: "information-accessibility",
            label: "Information Accessibility",
            description: "The project aims to make administrative information easier to organize, retrieve and manage."
          }
        ]
      },
      {
        label: "Technical Details",
        children: [
          {
            value: "stack",
            label: "Proposed Technology Stack",
            description: "The proposed stack uses Next.js, React and TypeScript for the frontend, NestJS for the backend, and PostgreSQL, Prisma and Supabase for data and infrastructure. The stack remains subject to final architectural decisions."
          },
          {
            value: "architecture",
            label: "Application Architecture",
            description: "The proposed architecture is a centralized full-stack web application that supports employee information management and lets manual and digital administrative workflows coexist."
          },
          {
            value: "role",
            label: "Development Role",
            heading: "Software Engineer | Full-Stack Developer",
            description: "I contribute to software engineering and full-stack development for the project through Arqeno."
          }
        ]
      },
      {
        label: "Project Objectives",
        children: [
          {
            value: "efficiency",
            label: "Administrative Efficiency",
            description: "Reduce dependence on fragmented spreadsheets, simplify employee information management and reduce repetitive administrative work."
          },
          {
            value: "continuity",
            label: "Operational Continuity",
            description: "Keep established administrative operations running while introducing appropriate digital workflows."
          },
          {
            value: "transformation",
            label: "Digital Transformation",
            description: "Support a gradual, sustainable transition to centralized digital administration."
          }
        ]
      }
    ]
  }
];
