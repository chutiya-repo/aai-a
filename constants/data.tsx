import React from 'react';
import { CardData, FooterLinkColumn } from '../types';

export const heroSlides = [
  {
    title: 'Spring Update',
    description: 'Introducing GPT-4o and making more capabilities available for free in our Product.',
    imageUrl: 'https://cdn1.webspaceai.in/76e5999d-71c2-40df-911f-90b943b0a3b1.png',
    buttonText: 'Learn more',
  },
  {
    title: 'Explore Our Research',
    description: 'Advancing AI to benefit all of humanity.',
    imageUrl: 'https://cdn1.webspaceai.in/d9f35bf7-3a1d-424b-b38f-491c2df1a522.png',
    buttonText: 'See publications',
  },
  {
    title: 'AI for Business',
    description: 'Deploy the world\'s most capable models in your own applications.',
    imageUrl: 'https://cdn1.webspaceai.in/90fe8a4f-afd9-4333-a1a4-ae82d3c8ee9a.png',
    buttonText: 'Discover our APIs',
  },
  {
    title: 'Join Our Team',
    description: 'Help us build the future of artificial intelligence.',
    imageUrl: 'https://picsum.photos/seed/team/1200/600',
    buttonText: 'View careers',
  },
];

export const productCards: CardData[] = [
  {
    category: 'For Everyone',
    title: 'WEBSPACEAI',
    imageUrl: 'https://cdn1.webspaceai.in/Gemini_Generated_Image_vui5rqvui5rqvui5_znfu0x_c_fill_w_1024_h_1024_jl3cz5.jpg',
  },
  {
    category: 'For Everyone',
    title: 'ONE',
    imageUrl: 'https://cdn1.webspaceai.in/467028089_550858827878595_1920798175618811742_n.jpeg',
  },
];

export const researchCards: CardData[] = [
  {
    category: 'GPT-4o',
    date: 'May 13, 2024',
    title: 'Hello GPT-4o',
    imageUrl: 'https://picsum.photos/seed/gpt4o/600/800',
  },
  {
    category: 'Sora',
    title: 'Video generation models as world simulators',
    imageUrl: 'https://picsum.photos/seed/sora/600/800',
  },
  {
    category: 'Safety',
    date: 'Dec 18, 2023',
    title: 'Weak-to-strong generalization in LLMs',
    imageUrl: 'https://picsum.photos/seed/safety_research/600/800',
  },
  {
    category: 'Multi-modal',
    date: 'Oct 25, 2023',
    title: 'Unified reasoning across text and vision',
    imageUrl: 'https://picsum.photos/seed/multimodal/600/800',
  },
];

export const newsCards: CardData[] = [
  {
    category: 'Company',
    date: 'Jun 10, 2024',
    title: 'WEBSPACEAI and Apple announce partnership',
    imageUrl: 'https://picsum.photos/seed/apple/600/600',
  },
  {
    category: 'Company',
    date: 'May 8, 2024',
    title: 'Introducing the Model Spec',
    imageUrl: 'https://picsum.photos/seed/modelspec/600/600',
  },
];

export const menuLinks: FooterLinkColumn[] = [
    {
        title: "Research",
        links: [
            { text: "Overview", href: "#" },
            { text: "Index", href: "#" },
            { text: "GPT-4o", href: "#" },
            { text: "Sora", href: "#" },
        ],
    },
    {
        title: "Products",
        links: [
            { text: "Our Product", href: "#" },
            { text: "API", href: "#" },
            { text: "Pricing", href: "#" },
            { text: "For Business", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { text: "About us", href: "#" },
            { text: "News", href: "#" },
            { text: "Careers", href: "#" },
            { text: "Security", href: "#" },
        ],
    },
    {
      title: "Safety",
      links: [
          { text: "Safety Framework", href: "/safety" },
          { text: "Safety Standards", href: "#" },
      ],
  }
];

export const footerLinks: FooterLinkColumn[] = [
    {
        title: "Research",
        links: [
            { text: "Overview", href: "#" },
            { text: "Index", href: "#" },
            { text: "Latest advancements", href: "#" },
            { text: "GPT-4", href: "#" },
            { text: "DALL·E 3", href: "#" },
            { text: "Sora", href: "#" },
        ],
    },
    {
        title: "Product",
        links: [
            { text: "For Everyone", href: "#" },
            { text: "For Teams", href: "#" },
            { text: "For Enterprises", href: "#" },
            { text: "Product login", href: "#", external: true },
        ],
    },
    {
        title: "API",
        links: [
            { text: "Platform overview", href: "#" },
            { text: "Pricing", href: "#" },
            { text: "Documentation", href: "#", external: true },
            { text: "API login", href: "#", external: true },
        ],
    },
    {
        title: "Explore more",
        links: [
            { text: "WEBSPACEAI for business", href: "#" },
            { text: "Stories", href: "#" },
        ],
    },
    {
        title: "Safety",
        links: [
            { text: "Safety Framework", href: "/safety" },
            { text: "Safety standards", href: "#" },
        ],
    },
    {
        title: "Teams",
        links: [
            { text: "Safety Systems", href: "#" },
            { text: "Preparedness", href: "#" },
            { text: "Superalignment", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { text: "About us", href: "#" },
            { text: "News", href: "#" },
            { text: "Our Charter", href: "#" },
            { text: "Security", href: "#" },
            { text: "Residency", href: "#" },
            { text: "Careers", href: "#" },
        ],
    },
    {
        title: "Terms & policies",
        links: [
            { text: "Terms of use", href: "#" },
            { text: "Privacy policy", href: "#" },
            { text: "Brand guidelines", href: "#" },
            { text: "Other policies", href: "#" },
        ],
    },
];
