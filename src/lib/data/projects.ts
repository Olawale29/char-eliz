export type ProjectStatus = "Completed" | "Ongoing" | "Stalled";
export type ProjectCategory =
  | "Construction"
  | "Real Estate"
  | "Consultancy"
  | "Manufacturing";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  status: ProjectStatus;
  value?: string;
  awardDate?: string;
  completionDate?: string;
  location?: string;
  scope: string;
  partneredWith?: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "firs-kano-zaria-road",
    title: "Completion of FIRS Zaria Road, MSTO, Kano",
    client: "Federal Inland Revenue Service (FIRS)",
    category: "Construction",
    status: "Completed",
    value: "₦212,516,215.35",
    awardDate: "December 2016",
    completionDate: "November 2017",
    location: "Zaria Road, Kano",
    scope:
      "Completion works on the FIRS Zaria Road MSTO facility in Kano, delivered in partnership with Tangent Construction Limited.",
    partneredWith: "Tangent Construction Limited",
    image: "/images/illustrative/construction-rebar-cranes.jpg",
    imageAlt: "Illustrative construction imagery — steel reinforcement and tower cranes on an active building site",
  },
  {
    slug: "rccg-prayer-pavilion",
    title: "Construction of Prayer Pavilion",
    client: "RCCG, National Headquarters Church",
    category: "Construction",
    status: "Completed",
    value: "₦120,000,000",
    awardDate: "September 2016",
    completionDate: "November 2016",
    location: "Throne of Grace, Ebute-Metta, Lagos",
    scope:
      "Construction of the Prayer Pavilion for the Redeemed Christian Church of God, Throne of Grace, Ebute-Metta, Lagos.",
    image: "/images/illustrative/roofing-works.jpg",
    imageAlt: "Illustrative construction imagery — stone-coated roofing works",
  },
  {
    slug: "rccg-canal-drainage-reclamation",
    title: "Canal Concrete Drainage & Land Reclamation",
    client: "Redeemed Christian Church of God, Throne of Grace",
    category: "Construction",
    status: "Completed",
    value: "₦75,000,000.00",
    awardDate: "2018",
    completionDate: "2018",
    location: "Throne of Grace, Ebute-Metta, Lagos",
    scope:
      "Construction of canal concrete drainage and reclamation of land from the canal to the lagoon at the RCCG-Throne of Grace site.",
    image: "/images/illustrative/construction-rebar-cranes.jpg",
    imageAlt: "Illustrative construction imagery — steel reinforcement and tower cranes on an active building site",
  },
  {
    slug: "rccg-perimeter-fencing",
    title: "Perimeter Fencing (Block & Steel Grill)",
    client: "RCCG, National Headquarters Church",
    category: "Construction",
    status: "Completed",
    value: "₦20,000,000.00",
    awardDate: "2020",
    completionDate: "2020",
    scope:
      "Construction of perimeter fencing using block work and steel security grills for the RCCG National Headquarters Church.",
    image: "/images/illustrative/construction-team-skyline.jpg",
    imageAlt: "Illustrative construction imagery — site team reviewing a multi-storey building under construction",
  },
  {
    slug: "rccg-facility-renovations",
    title: "Renovation of Various Facilities",
    client: "RCCG, National Headquarters Church",
    category: "Construction",
    status: "Completed",
    value: "₦10,000,000.00",
    scope:
      "Renovation works across various facilities including the RCCG Maternity and Prayer Pavilion.",
    image: "/images/illustrative/roofing-works.jpg",
    imageAlt: "Illustrative construction imagery — stone-coated roofing works",
  },
  {
    slug: "oluku-modern-market",
    title: "Construction of 577 Units of Shops, Oluku Modern Market",
    client: "D'ellarch Limited & Nehemiah Grace Developers Limited",
    category: "Construction",
    status: "Stalled",
    value: "₦57,000,000.00",
    awardDate: "2018",
    location: "Oluku, Edo State",
    scope:
      "Construction of 577 units of shops at the Oluku Modern Market development in Edo State.",
    image: "/images/illustrative/construction-rebar-cranes.jpg",
    imageAlt: "Illustrative construction imagery — steel reinforcement and tower cranes on an active building site",
  },
  {
    slug: "okomu-latex-cups",
    title: "Production & Manufacturing of Latex Cups",
    client: "Okomu Rubber Plantation",
    category: "Manufacturing",
    status: "Ongoing",
    location: "Edo State",
    scope: "Production and manufacturing of latex cups for Okomu Rubber Plantation, Edo State.",
    image: "/images/illustrative/supply-chain-logistics.jpg",
    imageAlt: "Illustrative industrial imagery — container terminal and logistics operation",
  },
  {
    slug: "idimu-isheri-property-sale",
    title: "Sale of Tenanted Duplex & Flats",
    client: "Pastor Yomi Joel",
    category: "Real Estate",
    status: "Completed",
    location: "Idimu-Isheri, Lagos",
    scope:
      "Property sale of a fully tenanted 4-bedroom semi-detached duplex and two units of 3-bedroom flats at Idimu-Isheri, Lagos.",
    image: "/images/illustrative/property-render.jpg",
    imageAlt: "Illustrative real estate imagery — residential property exterior at dusk",
  },
  {
    slug: "accra-property-lease",
    title: "Property Lease & Rental",
    client: "Pearl Consultants",
    category: "Real Estate",
    status: "Completed",
    location: "Accra, Ghana",
    scope: "Property lease and rental management on behalf of Pearl Consultants in Accra, Ghana.",
    image: "/images/illustrative/property-landscaping.jpg",
    imageAlt: "Illustrative real estate imagery — grounds maintenance on a managed property",
  },
  {
    slug: "isolo-building-purchase",
    title: "Purchase of a Semi-Detached Building",
    client: "Mrs. Funke Ilori",
    category: "Real Estate",
    status: "Completed",
    location: "Isolo, Lagos",
    scope: "Coordination of the purchase of a semi-detached building at Isolo on behalf of the client.",
    image: "/images/illustrative/property-render.jpg",
    imageAlt: "Illustrative real estate imagery — residential property exterior at dusk",
  },
  {
    slug: "ekpoma-hotel-feasibility",
    title: "Feasibility Studies — 65-Room Hotel Project",
    client: "Mr. Amos Omoigerale",
    category: "Consultancy",
    status: "Completed",
    location: "Ekpoma",
    scope: "Feasibility studies for a proposed 65-room hotel project at Ekpoma.",
    image: "/images/illustrative/property-render.jpg",
    imageAlt: "Illustrative real estate imagery — proposed property development render",
  },
  {
    slug: "onipanu-redevelopment-feasibility",
    title: "Feasibility Studies — Commercial Property Redevelopment",
    client: "Mr. Sola Apara",
    category: "Consultancy",
    status: "Completed",
    location: "Ikorodu Road, Onipanu, Lagos",
    scope: "Feasibility studies for the redevelopment of a commercial property along Ikorodu Road, Onipanu, Lagos.",
    image: "/images/illustrative/countertop-finishing.jpg",
    imageAlt: "Illustrative consultancy imagery — close-up of a finished commercial interior surface",
  },
  {
    slug: "unico-cpfa-valuation",
    title: "Valuation for Statutory Accounts",
    client: "UNICO CPFA Limited",
    category: "Consultancy",
    status: "Completed",
    scope: "Valuation of residential and commercial properties for statutory accounts purposes.",
    image: "/images/illustrative/countertop-finishing.jpg",
    imageAlt: "Illustrative consultancy imagery — close-up of a finished commercial interior surface",
  },
  {
    slug: "uac-foods-farm-valuation",
    title: "Valuation of UAC Farms, Maya",
    client: "UAC Foods Limited",
    category: "Consultancy",
    status: "Completed",
    location: "Maya",
    scope: "Valuation of UAC Foods' farm holdings at Maya.",
    image: "/images/illustrative/property-landscaping.jpg",
    imageAlt: "Illustrative consultancy imagery — land and grounds maintenance",
  },
  {
    slug: "mds-logistics-valuation",
    title: "Valuation of Properties for Acquisition",
    client: "MDS Logistics Limited",
    category: "Consultancy",
    status: "Completed",
    location: "Kaduna & Ilorin",
    scope: "Valuation of properties in Kaduna and Ilorin ahead of acquisition.",
    image: "/images/illustrative/supply-chain-logistics.jpg",
    imageAlt: "Illustrative logistics imagery — container terminal and freight operation",
  },
  {
    slug: "woneks-bottling-plant-valuation",
    title: "Valuation of Water Bottling Plant",
    client: "Woneks Business Ventures Limited",
    category: "Consultancy",
    status: "Completed",
    scope: "Valuation of a water bottling plant on behalf of Woneks Business Ventures Limited.",
    image: "/images/illustrative/supply-chain-logistics.jpg",
    imageAlt: "Illustrative industrial imagery — plant and logistics operation",
  },
];

export const projectCategories: ProjectCategory[] = [
  "Construction",
  "Real Estate",
  "Consultancy",
  "Manufacturing",
];
