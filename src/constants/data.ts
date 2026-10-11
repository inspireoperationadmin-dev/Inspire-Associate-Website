// src/constants/data.ts
import {
  Code2, Smartphone, Settings, Palette, Star, Calculator, Database,
  ShoppingCart, TrendingUp, Cloud, Layout, Car, FileText, Baby,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: number;
  title: string;
  content: string;
  category: "Development" | "Design" | "Operations" | "Marketing" | "Infrastructure" | "Premium";
  icon: LucideIcon;
};

export const servicesData: Service[] = [
  { id: 1, title: "Web Development", content: "Full-stack web applications and scalable enterprise solutions.", category: "Development", icon: Code2 },
  { id: 2, title: "Mobile App Development", content: "Native and cross-platform mobile experiences for iOS and Android.", category: "Development", icon: Smartphone },
  { id: 4, title: "Custom Software & APIs", content: "Bespoke software systems and secure RESTful / GraphQL API architectures.", category: "Development", icon: Settings },
  { id: 5, title: "UI/UX & Product Design", content: "Figma designs, interactive prototypes, and user-centric design systems.", category: "Design", icon: Palette },
  { id: 13, title: "Brand Identity", content: "Memorable logos and brand guidelines for startups and growing businesses.", category: "Design", icon: Star },
  { id: 9, title: "Cloud & Infrastructure", content: "Managed hosting and cloud architecture on AWS, Azure, and Google Cloud.", category: "Infrastructure", icon: Cloud },
  { id: 16, title: "Accounting & Bookkeeping", content: "Professional financial record-keeping and accurate accounts management.", category: "Operations", icon: Calculator },
  { id: 17, title: "Back Office & Data Support", content: "Accurate data entry and administrative support to keep your business flowing.", category: "Operations", icon: Database },
  { id: 18, title: "E-commerce Operations", content: "Full-cycle online store management, from listings to order fulfilment.", category: "Operations", icon: ShoppingCart },
  { id: 19, title: "Digital Marketing & Growth", content: "SEO, social media management, and AI-assisted content creation.", category: "Marketing", icon: TrendingUp },
  { id: 20, title: "Triple S Advantage", content: "Space, Staff, and Storage solutions for seamless business scaling in Jaffna.", category: "Premium", icon: Layout },
];

export type ProjectStatus = "Live" | "In testing" | "In development";

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
    category: "Full-Stack Development",
    icon: Car,
    title: "AI-Powered Car Rental",
    desc: "A car rental platform with AI-driven document verification, GraphQL queries via Apollo, and database management with Prisma ORM.",
    tags: ["Next.js", "Apollo", "Prisma", "AI"],
    status: "In testing",
    note: "Currently in testing phase",
  },
  {
    category: "EdTech Solution",
    icon: FileText,
    title: "Exam Munnodi",
    desc: "A trilingual past-papers hub for students, built with React and React Native, powered by a centralised .NET API.",
    tags: ["React", "React Native", ".NET"],
    status: "In development",
    note: "Coming soon",
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
