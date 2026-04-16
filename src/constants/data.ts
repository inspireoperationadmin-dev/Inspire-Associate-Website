// src/constants/data.ts
import {
  Code2, Smartphone, Monitor, Settings, Palette, Globe,
  Wrench, TrendingUp, Cloud, GraduationCap, Video, Layout,
  Star, Share2, TestTube2,
  Calculator,
  Database,
  ShoppingCart,
} from "lucide-react";

export const servicesData = [
  // --- 01. CORE SOFTWARE DEVELOPMENT ---
  { 
    id: 1, 
    title: "Web Development", 
    date: "Core", 
    content: "Full-stack web applications and scalable enterprise solutions.", 
    category: "Development", 
    icon: Code2, 
    relatedIds: [2, 6, 9], 
    status: "completed" as const, 
    energy: 90 
  },
  { 
    id: 2, 
    title: "Mobile App Dev", 
    date: "Core", 
    content: "Native and cross-platform mobile experiences for iOS and Android.", 
    category: "Development", 
    icon: Smartphone, 
    relatedIds: [1, 5], 
    status: "completed" as const, 
    energy: 88 
  },
  { 
    id: 4, 
    title: "Custom Software & APIs", 
    date: "Core", 
    content: "Bespoke software systems and secure RESTful/GraphQL API architectures.", 
    category: "Development", 
    icon: Settings, 
    relatedIds: [1, 6, 15], 
    status: "completed" as const, 
    energy: 85 
  },

  // --- 02. DESIGN & BRANDING (Merged 5, 12, 13) ---
  { 
    id: 5, 
    title: "UI/UX & Product Design", 
    date: "Design", 
    content: "Pixel-perfect Figma designs, interactive prototypes, and user-centric systems.", 
    category: "Design", 
    icon: Palette, 
    relatedIds: [1, 2, 13], 
    status: "completed" as const, 
    energy: 82 
  },
  { 
    id: 13, 
    title: "Brand Identity", 
    date: "Branding", 
    content: "Memorable logos and comprehensive brand guidelines for startups.", 
    category: "Branding", 
    icon: Star, 
    relatedIds: [5, 19], 
    status: "completed" as const, 
    energy: 75 
  },

  // --- 03. BUSINESS PROCESS OUTSOURCING (BPO) & MARKETING (Merged 8, 14, 16, 17, 18, 19) ---
  { 
    id: 16, 
    title: "Accounting & Bookkeeping", 
    date: "BPO", 
    content: "Professional financial record-keeping and data-driven accounts management.", 
    category: "Operations", 
    icon: Calculator, 
    relatedIds: [17], 
    status: "active" as const, 
    energy: 70 
  },
  { 
    id: 17, 
    title: "Back Office & Data Support", 
    date: "BPO", 
    content: "Accurate data entry and administrative support to optimize business flow.", 
    category: "Operations", 
    icon: Database, 
    relatedIds: [16, 18], 
    status: "active" as const, 
    energy: 65 
  },
  { 
    id: 18, 
    title: "E-commerce Operations", 
    date: "BPO", 
    content: "Full-cycle online store management, from listings to order fulfillment.", 
    category: "Operations", 
    icon: ShoppingCart, 
    relatedIds: [19], 
    status: "active" as const, 
    energy: 72 
  },
  { 
    id: 19, 
    title: "Digital Marketing & Growth", 
    date: "Marketing", 
    content: "Strategic SEO, social media management, and AI-powered content creation.", 
    category: "Marketing", 
    icon: TrendingUp, 
    relatedIds: [18, 13], 
    status: "active" as const, 
    energy: 78 
  },

  { 
    id: 9, 
    title: "Cloud & Infrastructure", 
    date: "Infra", 
    content: "Managed hosting and cloud architecture on AWS, Azure, and Google Cloud.", 
    category: "Infrastructure", 
    icon: Cloud, 
    relatedIds: [1, 4], 
    status: "in-progress" as const, 
    energy: 75 
  },
  { 
    id: 20, 
    title: "Triple S Advantage", 
    date: "Jaffna",
    content: "Complete 'Space, Staff, and Storage' solutions for seamless business scaling.", 
    category: "Premium",
    icon: Layout,
    relatedIds: [16, 17, 18],
    status: "active" as const, 
    energy: 95 
  },
];

export const testimonialsData = [
  { text: "Inspire Associate transformed our entire web presence. The team delivered a blazing-fast platform that doubled our user engagement within weeks.", image: "https://randomuser.me/api/portraits/women/1.jpg", name: "Briana Patton", role: "Operations Manager" },
  { text: "Smooth implementation, clean code, and a UI our whole team loves. The onboarding was effortless.", image: "https://randomuser.me/api/portraits/men/2.jpg", name: "Bilal Ahmed", role: "IT Manager" },
  { text: "The support team is second to none. They guided us through every step.", image: "https://randomuser.me/api/portraits/women/3.jpg", name: "Saman Malik", role: "Customer Support Lead" },
  { text: "From product build to cloud hosting, Inspire Associate handled everything seamlessly.", image: "https://randomuser.me/api/portraits/men/4.jpg", name: "Omar Raza", role: "CEO" },
  { text: "Their robust mobile app exceeded all expectations. Intuitive design and performance.", image: "https://randomuser.me/api/portraits/women/5.jpg", name: "Zainab Hussain", role: "Project Manager" },
  { text: "The Figma prototypes were pixel-perfect and translated into code flawlessly.", image: "https://randomuser.me/api/portraits/women/6.jpg", name: "Aliza Khan", role: "Business Analyst" },
  { text: "Our digital marketing results skyrocketed after integrating their strategy. Conversions are up 60%.", image: "https://randomuser.me/api/portraits/men/7.jpg", name: "Farhan Siddiqui", role: "Marketing Director" },
  { text: "They understood our vision from day one and delivered a solution that genuinely elevated our sales.", image: "https://randomuser.me/api/portraits/women/8.jpg", name: "Sana Sheikh", role: "Sales Manager" },
  { text: "The automated testing suite they built gives us real confidence every release. Zero regressions.", image: "https://randomuser.me/api/portraits/men/9.jpg", name: "Hassan Ali", role: "E-commerce Manager" },
];

// src/constants/data.ts

export const projects = [
{ 
    category: "Mobile Development", 
    icon: "Smartphone", 
    title: "Learning App", 
    desc: "Educational mobile application built with React Native and .NET backend, supporting global users with gamified learning paths.", 
    tags: ["React Native", ".NET 9", "ICEDT"], 
    result: "Live on Play Store & Global Adoption", 
    accent: "text-cyan-400" 
  },
  { 
    category: "Full-Stack Development", 
    icon: "Car", 
    title: "AI-Powered Car Rental", 
    desc: "A sophisticated car rental ecosystem featuring AI-driven document verification, high-performance GraphQL queries via Apollo, and robust database management with Prisma ORM.", 
    tags: ["Next.js", "Apollo", "Prisma", "AI"], 
    result: "Currently in Testing Phase", 
    accent: "text-indigo-400" 
  },
  { 
    category: "EdTech Solution", 
    icon: "FileText", 
    title: "Exam Munnodi", 
    desc: "A comprehensive trilingual papers hub for students, built with React and React Native. Featuring a centralized .NET API for seamless exam preparation.", 
    tags: ["React", "React Native", ".NET"], 
    result: "Development in Progress - Coming Soon", 
    accent: "text-emerald-400" 
  },
  { 
    category: "EdTech for Kids", 
    icon: "Baby", 
    title: "DUDU-Learn", 
    desc: "A trilingual early-childhood learning platform designed for kids aged 2-5, powered by a robust Java backend on AWS and a seamless React Native mobile interface.", 
    tags: ["React Native", "Java", "AWS", "Trilingual"], 
    result: "Development in Progress - Launching Soon", 
    accent: "text-orange-400" 
  }
];