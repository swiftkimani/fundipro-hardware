import { Product } from '../types';

export const featuredDeals: Product[] = [
  {
    id: 'bamburi-cement-wholesale',
    title: 'Bamburi Cement 50kg - Wholesale',
    brand: 'Bamburi',
    category: 'Building Materials',
    price: 850,
    originalPrice: 950,
    unit: 'bag',
    badge: 'Bulk Offer',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtDgTcUxftxpjXIUePOQdKihEPxhu2VBNH3KXRj0MvfSMHNxq8PFAYugcehAQ6yeDfnqKoxP2VunK2ooMbmQbTF4wxjYSx7dthC9H9NdYTIW9EeZYyEh6HvRnTcbqYQ9xRRwFm0CIZ2avd61F7cr2lC2UVMP7WNFtRzfP9A1DqMz4GvW23wQhtcA2NWjPLTCrQbaiY8aXiWelECi2LPrKAf3xPeSlizBm9Lc8sccNbSvP-zcGdidNGmw',
    specs: [
      { label: 'Weight', value: '50kg' },
      { label: 'Grade', value: '32.5N / 42.5N' },
      { label: 'Min Wholesale Order', value: '50 Bags' }
    ],
    description: 'Bamburi Power Plus & Nguvu Cement for heavy construction, masonry, foundation slab work, and plastering. KEBS certified high-strength portland cement.',
    inStock: true
  },
  {
    id: 'd12-steel-bar',
    title: 'D12 High Tensile Steel Rebar',
    brand: 'Building Materials',
    category: 'Building Materials',
    price: 1200,
    unit: '/ pc',
    badge: 'Hot Deal',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAetsKsZHZZ15AnGhS7UvcOkj4brViGuRjpfD0PEhVO96HI423-kt6V5WEcAuVFwZRm2gWeud3COsgXgZjWmw_QAfsa-syQ8Rayfp6ivbmOY5MM59zLwbaQhYsXA02dOSxtyNwcq3fnEVAVUBpwiNwtVc_FyqoHCflHHlX6cdquEbHGTj0kWD36eSAx4bbWhJKGzpqeZywDSnrk3Fr51dPnCMXtyi4SJMGqQetYjufPuiESHe0He1v9nA',
    specs: [
      { label: 'Diameter', value: '12mm (D12)' },
      { label: 'Standard Length', value: '12 Meters' },
      { label: 'Quality Grade', value: 'BS 4449 Grade 500' }
    ],
    description: 'High tensile deformed steel bars engineered for reinforced concrete pillars, foundation slabs, and structural beams.',
    inStock: true
  }
];

export const productsCatalog: Product[] = [
  {
    id: 'makita-9557nb',
    title: '9557NB Angle Grinder 115mm 840W',
    brand: 'Makita',
    category: 'Power Tools',
    price: 12500,
    badge: 'Top Seller',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQDQlsAWPSqBHr9_dbaqh1jol6siCsGxYfOdxJHVpYOC-3zZPY2Mf7wJ3SVMhxqnhUI4m3DmfuPCDL7byQTpVCYtkqVcygd8x6OKuGOK0nTUfcv3EKBlghRikVN1poXKGekWOSXRR34_0fAWWxmFsJsDrTFa1_p-DYvIPEj4lkqaC5PFmM_mhBsj08j2_vnhB-g0_dNtc8ADObh9bjNw5AaxdXAqxm7kxAjP89ZZW58KoTGYzifiD5pQ',
    specs: [
      { label: 'Power', value: '840W' },
      { label: 'Disc', value: '115mm' },
      { label: 'Weight', value: '2.1kg' }
    ],
    description: 'Compact yet powerful Makita angle grinder featuring high-heat resistance motor, labyrinth construction seal to protect gears from dust, and comfortable slim barrel grip.',
    inStock: true,
    rating: 4.9
  },
  {
    id: 'bosch-gbh-2-26',
    title: 'GBH 2-26 DRE Rotary Hammer',
    brand: 'Bosch',
    category: 'Power Tools',
    price: 24000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG2QgnxvoQYMK5brmdPgpa9EQ2TODUG99VmTnBvHM05gd22w70_P-mCLzMbRH6X7sGKLDY9FyQPoWguKwkAmXJ5XTsVfSaC3AG3mVHZZ_j-Qiq2o1xyHCMnrmSumy2od4EifLRTiArkibTGbnejOMT_YUYBR-bs2Ok75wN3rWjB1TU1o1qqkdd7mJ9c0mOBXiNcbl5M4v6-dOVdODOT8XNVRCFSPBvQykhLafq91po7ikN0T8M_oWGWg',
    specs: [
      { label: 'Power', value: '800W' },
      { label: 'Impact Energy', value: '2.7 J' },
      { label: 'Chuck', value: 'SDS-plus' }
    ],
    description: 'Professional Bosch rotary hammer for fast drilling in concrete, brick, and masonry. Rotation stop for chiseling and softgrip handle for low vibration operation.',
    inStock: true,
    rating: 4.8
  },
  {
    id: 'rhino-mabati-box-30',
    title: 'Box Profile Roofing Sheet (Gauge 30)',
    brand: 'Rhino Mabati',
    category: 'Roofing (Mabati)',
    price: 1850,
    unit: '/ pc',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-SVjb1nta4OZlk3OX5nP4q28vBUCRl457xM9hFD7dHtTdWu0RCbyFGrAJiq0MniO0TIgbXKRo0N5Vm9DvOfKDk2wxzWwOmG4PR61y-eSyJ7HmDlPVJy9xKNBDSc2c0-mHGNK6Scq3IZgv45ZtUe8530kGMH_uRnesVn42yDQddzNIhViJIKg_vKbl3zorNc5HSrFXTKMDLFH6WoTjCCxDHqFr4CmskLIHj_UwnSKs1pVoGCwWPZ2lBA',
    specs: [
      { label: 'Length', value: '3 Meters' },
      { label: 'Gauge', value: '30' },
      { label: 'Finish', value: 'Matte Dark Grey' }
    ],
    description: 'Rhino Mabati box profile roof sheets made with anti-corrosion zinc-aluminum alloy technology. Perfect for residential, commercial, and agricultural roofs.',
    inStock: true,
    rating: 4.9
  },
  {
    id: 'dewalt-20v-drill',
    title: 'DeWalt 20V Max Cordless Drill',
    brand: 'DeWalt',
    category: 'Power Tools',
    price: 18500,
    badge: 'Hot Deal',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwKVY_pnd4TiXlE17KkKrWTwJuZ6P7HKCJ01DjqcVxtONS36ZEjVy2LYxp-T54RfSkluqIPwGrf4zaLUhPbqImjOn8C3JVWeJQT94bdFmBteNcFtwcBxGNr6QtdMJOIPkKwo68i_VAS6CDqko9PNDDDTsXuK1ueoy1GbmTY-AlSNaFeqIigG9aJl7tw2okpA972fKuXp57oBCG6q3m0tPfslDY6fGykRxxhW2o9H7CvOLmHagVXOgiAQ',
    specs: [
      { label: 'Power', value: '20V Max' },
      { label: 'Batteries Included', value: '2 x 2.0Ah Li-Ion' },
      { label: 'Torque Settings', value: '15 Positions' }
    ],
    description: 'Heavy duty brushless motor delivering up to 57% more runtime over brushed motors. Ergonomic grip handle, LED light with 20-second delay trigger switch.',
    inStock: true,
    rating: 4.9
  },
  {
    id: 'stanley-wrench-set',
    title: 'Stanley 14-Piece Wrench Set',
    brand: 'Stanley',
    category: 'Hand Tools - Fundi',
    price: 4200,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC3mOWOfmxTXIaymiBSBsbGRQYaSgJ-7W9-4Jpczj60mulwiyJ5Bb4LEt711x2O4GnbEGZ3VXIVspdutZ9P5UFGoldMcUkfcSqwYwM_tMtqzgAb63fb0LI7Jl95fcIWvOOW0fXw_KpPgLJVv73ORQ4VZuMQMTnYPEQdcG1Ctcg2MNv1X_2IkDw3yffVogDUzYIagfKW5Kae8ItQIZFR2Z7SnP9KRElfly-JC_6wYo3yu2ayXkLpW1GbQ',
    specs: [
      { label: 'Material', value: 'Chrome Vanadium Steel' },
      { label: 'Sizes', value: '8mm - 24mm Metric' },
      { label: 'Finish', value: 'Full Polish Chrome' }
    ],
    description: 'Professional fundi combination spanner set built with anti-slip drive design. Exceeds ANSI specifications for durable plumbing and mechanical work.',
    inStock: true,
    rating: 4.7
  },
  {
    id: 'd10-steel-bar',
    title: 'D10 High Tensile Steel Rebar',
    brand: 'Building Materials',
    category: 'Building Materials',
    price: 880,
    unit: '/ pc',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAetsKsZHZZ15AnGhS7UvcOkj4brViGuRjpfD0PEhVO96HI423-kt6V5WEcAuVFwZRm2gWeud3COsgXgZjWmw_QAfsa-syQ8Rayfp6ivbmOY5MM59zLwbaQhYsXA02dOSxtyNwcq3fnEVAVUBpwiNwtVc_FyqoHCflHHlX6cdquEbHGTj0kWD36eSAx4bbWhJKGzpqeZywDSnrk3Fr51dPnCMXtyi4SJMGqQetYjufPuiESHe0He1v9nA',
    specs: [
      { label: 'Diameter', value: '10mm (D10)' },
      { label: 'Standard Length', value: '12 Meters' },
      { label: 'Quality Grade', value: 'BS 4449 Grade 500' }
    ],
    description: 'Deformed high-yield steel reinforcement bars for lintels, floor slabs, ring beams, and staircase structural works.',
    inStock: true,
    rating: 4.8
  },
  {
    id: 'commercial-circuit-breaker-board',
    title: 'Schneider 12-Way Distribution Board',
    brand: 'Schneider',
    category: 'Electricals',
    price: 15500,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBsCUiM7CglI_joNDr1EO8KO7CLm_Z9NwIXvmWoYfON6c7ss5U-TkyDMY63PyPVpZNAzS4meOVOmkcGNggm7LRw5wuvTgPx7kiwEugnj9OxsDgU7nAZP50XQi-L38P28JvggIstM5xQtaOCuoGo6SscC9aLBUncB9pQhmEQFvMHkuSwpk3kWFfn1Cw8k8fYlrkJpJYtH-M-x-1HlcLCw6pM7z3flKbQHIrtQ2JjZUZyKSyqN_KrKLpBQ',
    specs: [
      { label: 'Capacity', value: '12-Way Three Phase' },
      { label: 'Enclosure', value: 'Heavy Duty Metal Clad' },
      { label: 'Voltage', value: '415V / 240V' }
    ],
    description: 'Commercial grade electrical distribution board equipped with main isolator switch and busbars for industrial developments and apartment complexes.',
    inStock: true,
    rating: 4.9
  },
  {
    id: 'heavy-duty-pvc-pipe',
    title: 'Heavy Duty 4" PVC Drainage Pipe',
    brand: 'Building Materials',
    category: 'Building Materials',
    price: 2100,
    unit: '/ 6m length',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-EZRopArA6oF1yDy51jn_kKvgpsvB36IAkLkO3IxKVv0xYdpyNfj_Q1w6Frn8TQyYSW8SH2gtrG5v261MYSVoqJuz7ezMW8Cz8eY3mHN9s8J5WIa79_-L0kKoL9gP8nEvuMd_6v2juc8wQzRdMPPm-iSsftx-5pfAbj3pH0dHx9SeV9V3oxKXsBo5MCjpKoB822fALCzAKdW6QRH_0GZI_SORCcSHO8it1QG2IZAKLbeKup-NWTyZoQ',
    specs: [
      { label: 'Diameter', value: '110mm (4 Inch)' },
      { label: 'Length', value: '6 Meters' },
      { label: 'Pressure Rating', value: 'Class 4 Soil & Waste' }
    ],
    description: 'Thick-walled industrial PVC drainage pipe designed for commercial underground sewerage and high-volume wastewater disposal.',
    inStock: true,
    rating: 4.7
  }
];
