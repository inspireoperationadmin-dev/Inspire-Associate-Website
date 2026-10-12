// src/constants/data.ts
import { Briefcase, Code2, FileText, Palette, Smartphone, Store, Warehouse, type LucideIcon } from "lucide-react";

export type ServiceItem = { title: string; desc: string };

export type Pillar = {
  id: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  items: ServiceItem[];
};

export const pillars: Pillar[] = [
  {
    id: "software",
    title: "Software & Cloud",
    blurb: "Digital products engineered to scale with your business.",
    icon: Code2,
    items: [
      { title: "Web Development", desc: "Full-stack web applications and scalable enterprise solutions." },
      { title: "Mobile App Development", desc: "Native and cross-platform apps for iOS and Android." },
      { title: "Custom Software & APIs", desc: "Bespoke systems and secure REST / GraphQL architectures." },
      { title: "Cloud & Infrastructure", desc: "Managed hosting and architecture on AWS, Azure, and Google Cloud." },
    ],
  },
  {
    id: "design",
    title: "Design & Marketing",
    blurb: "Brands, content, and communities people remember and trust.",
    icon: Palette,
    items: [
      { title: "UI/UX & Product Design", desc: "Figma designs, interactive prototypes, and design systems." },
      { title: "Brand Identity", desc: "Logos and brand guidelines for startups and growing businesses." },
      { title: "Social Media Management", desc: "Planning, publishing, and growing your brand across social platforms." },
      { title: "Content Creation", desc: "Graphics, copy, and AI-assisted content that tells your brand story." },
      { title: "SEO & Digital Marketing", desc: "Search and campaign work that brings the right customers to you." },
    ],
  },
  {
    id: "operations",
    title: "Business Operations",
    blurb: "Back-office support so your team can focus on growth.",
    icon: Briefcase,
    items: [
      { title: "Accounting & Bookkeeping", desc: "Accurate financial record-keeping and accounts management." },
      { title: "Back Office & Data Support", desc: "Data entry and administrative support to keep work flowing." },
      { title: "E-commerce Operations", desc: "Online store management, from listings to order fulfilment." },
      { title: "Triple S Advantage", desc: "Space, Staff, and Storage solutions for scaling in Jaffna." },
    ],
  },
];

export type ProjectStatus = "Live" | "Delivered" | "In development";

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** "browser" (default) for web apps, "phone" for portrait mobile-app screenshots. */
  device?: "browser" | "phone";
};

export type Project = {
  category: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
  status: ProjectStatus;
  note: string;
  /** Screenshot shown in the Projects section. Projects without one get a designed placeholder. */
  image?: ProjectImage;
};

export const projects: Project[] = [
  {
    category: "Mobile Development",
    icon: Smartphone,
    title: "Learning App",
    desc: "A Tamil learning app for students around the world, with a library of downloadable textbooks from kindergarten upward. Built with React Native and a .NET backend for ICEDT.",
    tags: ["React Native", ".NET 9", "ICEDT"],
    status: "Live",
    note: "Available on Google Play",
    image: {
      src: "/projects/learning-app.webp",
      width: 720,
      height: 1559,
      device: "phone",
      alt: "Learning App home screen in Tamil, with a welcome message and downloaded Tamil textbooks for kindergarten and Year 1",
    },
  },
  {
    category: "EdTech Platform",
    icon: FileText,
    title: "Exam Munnodi",
    desc: "An A/L exam-preparation platform with past and model papers, topic and mock exams, and clear mastery guidance. Trilingual, built with React and React Native on a centralised .NET API.",
    tags: ["React", "React Native", ".NET", "Trilingual"],
    status: "Live",
    note: "Live for students",
    image: {
      src: "/projects/exam-munnodi.webp",
      width: 1400,
      height: 787,
      alt: "Exam Munnodi home page: Master Your A/L Exams with Confidence, with past papers, mock exams and sign-in buttons",
    },
  },
  {
    category: "Stock Management System",
    icon: Warehouse,
    title: "SBDP Distribution",
    desc: "A stock and distribution system for SBDP Distribution: receive stock, load and return vehicles, create invoices, record payments, track pending cheques, and produce daily and monthly reports.",
    tags: ["Stock management", "Invoicing", "Reports"],
    status: "Delivered",
    note: "Built for SBDP Distribution",
    image: {
      src: "/projects/sbdp-dashboard.webp",
      width: 1400,
      height: 639,
      alt: "SBDP Distribution dashboard with workflow shortcuts and summaries for sales, payments, warehouse stock and vehicle stock",
    },
  },
  {
    category: "POS System",
    icon: Store,
    title: "Jas Kids",
    desc: "A multi-branch point-of-sale system for JAS Kids Indoor Playhouse, with branch reports, staff and access control, suppliers and accounts, items, services and packages, and expenses.",
    tags: ["Point of sale", "Multi-branch", "Role-based access"],
    status: "Delivered",
    note: "Built for JAS Kids",
    image: {
      src: "/projects/jaskids-pos.webp",
      width: 1400,
      height: 795,
      alt: "JAS Kids POS super admin overview with branches and reports, staff and access, suppliers, items and expenses",
    },
  },
];
