// src/constants/data.ts
import { Baby, Briefcase, Code2, FileText, Palette, Smartphone, Store, Warehouse, type LucideIcon } from "lucide-react";

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

export type Project = {
  category: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
  status: ProjectStatus;
  note: string;
};

export const projects: Project[] = [
  {
    category: "Mobile Development",
    icon: Smartphone,
    title: "Learning App",
    desc: "Educational mobile application built with React Native and a .NET backend, supporting global users with gamified learning paths.",
    tags: ["React Native", ".NET 9", "ICEDT"],
    status: "Live",
    note: "Available on Google Play",
  },
  {
    category: "EdTech Solution",
    icon: FileText,
    title: "Exam Munnodi",
    desc: "A trilingual past-papers hub for students, built with React and React Native, powered by a centralised .NET API.",
    tags: ["React", "React Native", ".NET"],
    status: "Live",
    note: "Live for students",
  },
  {
    category: "Stock Management System",
    icon: Warehouse,
    title: "SBDP Distribution",
    desc: "A stock management system built for SBDP Distribution to track inventory, stock movement, and day-to-day distribution operations in one place.",
    tags: ["Stock management", "Distribution"],
    status: "Delivered",
    note: "Built for SBDP Distribution",
  },
  {
    category: "POS System",
    icon: Store,
    title: "Jas Kids",
    desc: "A point-of-sale system built for Jas Kids, designed for fast billing and clear sales tracking at the counter.",
    tags: ["Point of sale", "Retail"],
    status: "Delivered",
    note: "Built for Jas Kids",
  },
  {
    category: "EdTech for Kids",
    icon: Baby,
    title: "DUDU-Learn",
    desc: "A trilingual early-childhood learning platform for ages 2–5, with a Java backend on AWS and a React Native mobile app.",
    tags: ["React Native", "Java", "AWS", "Trilingual"],
    status: "In development",
    note: "Launching soon",
  },
];
