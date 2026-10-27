export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  qualifications?: string;
  image: string;
  bio: string[];
};

export const team: TeamMember[] = [
  {
    slug: "charles-enahonna",
    name: "Charles Enahonna",
    role: "Chief Executive Officer",
    qualifications: "B.Sc, MBA, PGD",
    image: "/images/team/charles-enahonna.jpg",
    bio: [
      "A Member of the Chartered Institute of Purchasing & Supply, UK (MCIPS), the Council of Supply Chain Management Professionals, USA (CSCMP), and the Chartered Institute of Logistics & Transport, UK (CILT).",
      "He started his professional career in 1997 as a Finance Officer in NAHQ 3 Armoured Division, Jos, Plateau State, before joining the UACN Group in 2002, where he worked at MDS Logistics and the UACN Property Development Company Plc.",
      "He held various management positions in Business Operations, Special Projects, Client Relationship Management and Joint Venture & Alliances, resigning in June 2016 as General Manager, Procurement & Supplies with UACN Property Development Company Plc, where he was responsible for the management, administration and supervision of the company's acquisition programs across contracting services, delivering end-to-end procurement services and materials for projects from construction to finishing and delivery stages.",
      "He has attended executive courses at Harvard Business School Boston USA, Cranfield School of Management UK, Massachusetts Institute of Technology Boston USA, Indian Institute of Management Bangalore India, Georgia State University Atlanta USA, Phillips Consulting and Lagos Business School.",
    ],
  },
  {
    slug: "elizabeth-enahonna",
    name: "Elizabeth Enahonna",
    role: "Director",
    image: "/images/team/elizabeth-enahonna-director.jpg",
    bio: [
      "An astute start-up entrepreneur and widely travelled international business woman.",
      "She has attended several national and international seminars, workshops, management and training programmes on leadership, strategy, project management and human resources from notable institutions and business schools, including the Haggai Christian Leadership Institute, Phillips Consulting, Lagos Business School (LBS) and Howard University, Washington DC, USA.",
      "She is Co-Founder of the Royal Priesthood Foundation, an NGO that provides scholarships to orphans and indigent students/pupils in rural areas, and is the Managing Director of the Royal Priesthood Garments.",
      "She is also a CAPRO-trained Christian Missionary, has carried out voluntary Christian work in California, USA with the International Church of the Foursquare Gospel, and serves as a Captain in the International Rescue Mission Chaplaincy (IRMC).",
    ],
  },
  {
    slug: "yemi-ajayi",
    name: "Yemi Ajayi",
    role: "Business Development",
    qualifications: "MSc, MNIM, MTIES",
    image: "/images/team/yemi-ajayi.jpg",
    bio: [
      "An international businessman and the Founder of Marble Masters Nigeria Limited.",
      "He is a professional specialised in providing final solutions to superior building finishing in accordance with international standards and practices.",
    ],
  },
  {
    slug: "steve-akhigbemidu",
    name: "Steve Akhigbemidu",
    role: "Estate Surveyor & Valuer",
    qualifications: "HND, MBA",
    image: "/images/team/steve-akhigbemidu.jpg",
    bio: [
      "An Associate of the Nigerian Institution of Estate Surveyors and Valuers (ANIVS) and the Nigerian Institute of Management (MNIM), duly registered with the Estate Surveyors and Valuers Registration Board of Nigeria (RSV) and the Financial Reporting Council of Nigeria (FRCN). He is also a Fellow of the Chartered Institute of Public Management (FIPM).",
      "He worked in the Property Division of UAC of Nigeria Plc and later at its subsidiary, UACN Property Development Company, from 1981 to 2013, where he held strategic management positions in property development & management, valuations, project management and facilities management.",
      "He was involved in the planning, development & management of the company's properties across all geo-political regions of Nigeria, including high-rise office buildings, factories & warehouses, and fully serviced residential and commercial properties. He has attended several national and international seminars, workshops, management and training programmes, including the MIPIM Property Conference in Cannes, France.",
    ],
  },
  {
    slug: "james-ogunsanya",
    name: "Engr. James Ogunsanya",
    role: "Mechanical Engineer",
    image: "/images/team/james-ogunsanya.jpg",
    bio: [
      "A Mechanical Engineer with a background in powerful problem-solving, analytical and communication skills, capable of multi-tasking within fiercely competitive and fast-paced environments to ensure the timely completion of projects.",
      "He has a clear understanding of standards, codes and specifications, and is proficient with Tekla, AutoCAD, PV Elite, Microsoft Suites, Autodesk Advanced Steel and Autodesk Inventor in solving engineering problems on projects.",
      "He has worked as one of the engineers on the fabrication of two 34,000-litre storage tanks for 21st Century Technology, fabrication of a monorail structure for Megastar, and fabrication of tank support for NB Plc.",
    ],
  },
];
