export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "construction",
    name: "Construction Services",
    shortDescription:
      "General contracting across site clearing, roofing, roads and the repair, maintenance and rehabilitation of residential and commercial properties.",
    description:
      "CharEliz operates as a general contractor across residential, commercial and infrastructural works, taking projects from site clearing through to completion with a focus on quality and safety at every stage.",
    capabilities: [
      "Site clearing, demolition & evacuation",
      "Construction, repair, maintenance, renovation and rehabilitation of residential and commercial properties",
      "Roof works & felting — stone coated roofing sheet",
      "Roads, drainages and infrastructural works",
    ],
    image: "/images/illustrative/construction-rebar-cranes.jpg",
    imageAlt: "Steel reinforcement and tower cranes on a multi-storey construction site",
  },
  {
    slug: "real-estate",
    name: "Real Estate Services",
    shortDescription:
      "Leasing, facility management and subcontractor coordination for residential and commercial properties.",
    description:
      "Our real estate practice covers the full occupancy lifecycle of a property — from leasing and letting through to the facility management, landscaping and fumigation services that keep it running.",
    capabilities: [
      "Leasing / letting of residential and commercial properties",
      "Subcontractor coordination",
      "Facility management",
      "Property landscaping and fumigation services",
    ],
    image: "/images/illustrative/property-landscaping.jpg",
    imageAlt: "Grounds maintenance equipment landscaping a commercial property lawn",
  },
  {
    slug: "procurement",
    name: "Procurement",
    shortDescription:
      "Supply of oil & gas products, building and finishing materials, and aluminium door, window and partition installations.",
    description:
      "CharEliz sources and supplies materials and products across oil & gas, building finishes and aluminium systems, acting as manufacturers' representative and liaison where required.",
    capabilities: [
      "Supplier of oil and gas: PMS, diesel, engine oil",
      "Supplier & installation of aluminium doors and windows — wall cladding, curtain wall, office partitions",
      "Supply & installation of building/finishing materials — floor & wall tiles, sanitary wares, fitted kitchens, wardrobes",
      "Manufacturers' representatives / liaison",
    ],
    image: "/images/illustrative/finishing-materials.jpg",
    imageAlt: "Fitted wardrobe and shelving finishing materials",
  },
  {
    slug: "supply-chain",
    name: "Supply Chain Management",
    shortDescription:
      "Coordinated sourcing and supply chain management services for construction and institutional clients.",
    description:
      "Drawing on management experience across procurement and logistics, CharEliz coordinates sourcing, supply and delivery schedules so that project materials arrive where and when they are needed.",
    capabilities: [
      "Strategic sourcing & acquisition of materials and services",
      "Supply chain management services",
      "Manufacturers' representatives / liaison",
      "Marketing and merchandizing coordination",
    ],
    image: "/images/illustrative/supply-chain-logistics.jpg",
    imageAlt: "Container terminal with trucks and cranes representing supply chain logistics",
  },
  {
    slug: "consultancy",
    name: "Consultancy Services",
    shortDescription:
      "Property valuation, building plan approval, contract brokerage, government relations and event planning.",
    description:
      "Our consultancy practice supports clients through property valuation and appraisal, building plan approvals, contract brokerage and government relations management, together with event planning, protocol and laundry services.",
    capabilities: [
      "Property valuation / appraisal and building plan approval services",
      "Contract brokerage",
      "Government relations management",
      "Event planning & protocol services",
      "Laundry & dry cleaning services",
    ],
    image: "/images/illustrative/countertop-finishing.jpg",
    imageAlt: "Close-up of a finished stone countertop installation",
  },
];

export const serviceCategorySummary = [
  "General Contractors",
  "Consultancy Services",
  "Construction Services",
  "Supply Chain Management",
  "Real Estate Services",
  "Marketing and Merchandizing",
];
