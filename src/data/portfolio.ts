import { CaseStudy, SupplyHighlight, Branch } from '../types';

export const featuredCaseStudy: CaseStudy = {
  id: 'kilimani-suites',
  title: 'Kilimani Luxury Suites',
  year: 'COMPLETED 2023',
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqnqxjeA-SGjFzgQgyU72cwrraIeIu5U6vuo-LLTfIDPsvKclDk9HP9Tr-lJmwdYEdrj7RhpK4MQT7qu3Nlgbt9KglxWI0KUFGJZlYyLMR36uwjCR3bxaYYwndyxOVwTAYTgAZ7evQIl3yphqHwn2otEkaxZmXmgDVOa9OVpww36-zZ4eSPm742CNaiB-IMwLdmwjj2Zz0vOr5hGvlXAWfwkP5JGVZNP7RaMnf1kmjjBpCyxnph75MiA',
  description: 'FundiPro was selected as the primary supplier for all internal structural plumbing and commercial-grade electrical fixtures for this premium 12-story residential development. We ensured zero downtime in supply chains, meeting strict safety and quality certifications.',
  scope: 'Electrical & Plumbing',
  scale: '120 Units',
  compliance: 'KEBS Class A'
};

export const supplyHighlights: SupplyHighlight[] = [
  {
    id: 'industrial-piping',
    title: 'Industrial Piping',
    description: 'Bulk supply of heavy-duty PVC and galvanized steel pipes for commercial drainage systems.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-EZRopArA6oF1yDy51jn_kKvgpsvB36IAkLkO3IxKVv0xYdpyNfj_Q1w6Frn8TQyYSW8SH2gtrG5v261MYSVoqJuz7ezMW8Cz8eY3mHN9s8J5WIa79_-L0kKoL9gP8nEvuMd_6v2juc8wQzRdMPPm-iSsftx-5pfAbj3pH0dHx9SeV9V3oxKXsBo5MCjpKoB822fALCzAKdW6QRH_0GZI_SORCcSHO8it1QG2IZAKLbeKup-NWTyZoQ'
  },
  {
    id: 'commercial-electricals',
    title: 'Commercial Electricals',
    description: 'High-capacity distribution boards, heavy gauge wiring, and industrial conduits.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBsCUiM7CglI_joNDr1EO8KO7CLm_Z9NwIXvmWoYfON6c7ss5U-TkyDMY63PyPVpZNAzS4meOVOmkcGNggm7LRw5wuvTgPx7kiwEugnj9OxsDgU7nAZP50XQi-L38P28JvggIstM5xQtaOCuoGo6SscC9aLBUncB9pQhmEQFvMHkuSwpk3kWFfn1Cw8k8fYlrkJpJYtH-M-x-1HlcLCw6pM7z3flKbQHIrtQ2JjZUZyKSyqN_KrKLpBQ'
  },
  {
    id: 'structural-steel',
    title: 'Structural Steel & Tools',
    description: 'Deformed bars, binding wire, and professional-grade power tools for the foundation phase.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9A54s4qtdw56G4uvCCDV3TyDe4xL9O_ZBnLOAXJKHPD-iHx0rEcCRvTldLGddDj88AJXECvspz1mL-Fd5GAutszWp79p2W424iQMYqOKDBVNjrYDJdSWD7MBp5sYu3PDGE1sxVtE-kAAVvbV1n0GrVdCwAYnNhTprOPUwnpKXbNh4snkdT20FUYGkpZ8CI-_WumnYft0xTWWz6pBhy7fW4Fsx-cJdCl2daDpHs_MhdqoLIzOv5JqXRA'
  }
];

export const branches: Branch[] = [
  {
    name: 'Nairobi Main Branch',
    address: 'Enterprise Road, Industrial Area',
    city: 'Nairobi, Kenya',
    phone: '+254 700 123 456',
    whatsapp: '254700123456',
    email: 'nairobi@fundipro.co.ke',
    hours: 'Mon - Sat: 7:00 AM - 6:00 PM'
  },
  {
    name: 'Mombasa Coastal Branch',
    address: 'Mbaraki Commercial Hub, Port Reitz Road',
    city: 'Mombasa, Kenya',
    phone: '+254 711 987 654',
    whatsapp: '254711987654',
    email: 'mombasa@fundipro.co.ke',
    hours: 'Mon - Sat: 7:30 AM - 5:30 PM'
  }
];
