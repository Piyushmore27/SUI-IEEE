
export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface ResearchItem {
  type: string;
  title: string;
  applicationNumber: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  program: string;
}

export interface IeeeJourney {
  role: string;
  period: string;
  description: string[];
}

export interface Alumni {
  slug: string;
  name: string;
  image?: string;
  title?: string;
  organization?: string;
  location?: string;
  linkedinUrl?: string;
  details?: string;
  introduction?: string;
  biography?: string[];
  ieeeJourney?: IeeeJourney;
  experience?: ExperienceItem[];
  research?: ResearchItem[];
  education?: EducationItem[];
  expertise?: string[];
}

/**
 * Alumni records for the SUI-IEEE Student Branch at SAGE University Indore.
 */
export const alumniData: Alumni[] = [
  {
    slug: "raj-thakur",
    name: "Raj Thakur",
    image: "/alumni-img/raj-thakur.jpg",
    title: "Optima Developer",
    organization: "Aurbient Technologies",
    location: "Indore, Madhya Pradesh, India",
    linkedinUrl: "https://www.linkedin.com/in/raj-thakur-9a4987251",
    introduction:
      "Raj Thakur is an Optima Developer at Aurbient Technologies, specializing in AI-driven solutions, intelligent business systems, and software automation. A Computer Technology (Artificial Intelligence) alumnus of SAGE University Indore, he previously served as Chairperson of the SUI-IEEE Student Branch from June 2024 to November 2025, contributing to student leadership and event management.",
    biography: [
      "Raj Thakur is a technology professional working at the intersection of artificial intelligence, software development, business automation, and intelligent systems. He is currently an Optima Developer at Aurbient Technologies, where his professional focus includes AI-driven solutions, intelligent business systems, operational intelligence, automation, and scalable digital infrastructure.",
      "He pursued Computer Technology with a specialization in Artificial Intelligence at SAGE University Indore, developing an academic foundation aligned with his interests in emerging technologies and software innovation. His professional journey includes experience in AI development, customer relationship management systems, and data science. During his internship at Parul Chemicals, he developed a customer relationship management (CRM) system for the company's sales and marketing team. Earlier, as a Data Science Intern at CodSoft, he gained experience in exploratory data analysis and working with Pandas.",
      "Raj also contributed to the SUI-IEEE Student Branch at SAGE University Indore, serving as Chairperson from June 2024 to November 2025. His responsibilities included team leadership and event management, providing experience in coordinating student initiatives and supporting the branch's activities.",
      "His interest in research and innovation is reflected in his co-authorship of the published Indian patent application titled 'A System and Method for Autonomous Organ Transport with Predictive Preservation and Cross-Domain UAV Control' (Application No. 202621048517 A). The application concerns the intersection of autonomous UAV technology, predictive preservation, and healthcare logistics.",
      "Raj's professional interests span artificial intelligence, computer vision, intelligent workflows, software automation, enterprise systems, and operational intelligence. His journey reflects a combination of technical development, applied problem-solving, research participation, and student leadership.",
    ],
    ieeeJourney: {
      role: "Chairperson",
      period: "June 2024 – November 2025",
      description: [
        "Raj Thakur served as Chairperson of the SUI-IEEE Student Branch at SAGE University Indore from June 2024 to November 2025. During his tenure, his responsibilities included team leadership and event management, contributing to the coordination of student-branch activities and the organization of events.",
        "This experience formed an important part of his development beyond technical work, providing opportunities to engage with team coordination, organizational responsibilities, and student leadership within the university's IEEE community.",
      ],
    },
    experience: [
      {
        role: "Optima Developer",
        organization: "Aurbient Technologies",
        period: "January 2026 – Present",
        description:
          "Works in the area of intelligent business systems, with a professional focus on AI-driven solutions, operational intelligence, automation, and scalable digital infrastructure.",
      },
      {
        role: "AI Developer Intern",
        organization: "Parul Chemicals",
        period: "July 2025 – June 2026",
        description:
          "Developed a customer relationship management (CRM) system for the company's sales and marketing team.",
      },
      {
        role: "Chairperson",
        organization: "SUI-IEEE Student Branch, SAGE University Indore",
        period: "June 2024 – November 2025",
        description:
          "Held a student leadership position with responsibilities including team leadership and event management.",
      },
      {
        role: "Member",
        organization: "Computer Society of India (CSI)",
        period: "September 2023 – July 2024",
        description:
          "Participated as a member of the Computer Society of India.",
      },
      {
        role: "Data Science Intern",
        organization: "CodSoft",
        period: "August 2023 – September 2023",
        description:
          "Gained experience in exploratory data analysis and working with the Pandas library.",
      },
    ],
    research: [
      {
        type: "Published Indian Patent Application",
        title:
          "A System and Method for Autonomous Organ Transport with Predictive Preservation and Cross-Domain UAV Control",
        applicationNumber: "202621048517 A",
        description: [
          "Raj Thakur is a co-author of this published Indian patent application, which addresses autonomous organ transport through the integration of unmanned aerial vehicle (UAV) technology, predictive preservation, and healthcare logistics.",
          "The proposed system brings together autonomous transportation and preservation-related approaches for organ logistics. The application represents his participation in research and innovation at the intersection of emerging technology and healthcare applications.",
        ],
      },
    ],
    education: [
      {
        institution: "SAGE University Indore",
        program: "Computer Technology — Artificial Intelligence",
      },
    ],
    expertise: [
      "Artificial Intelligence and Computer Vision",
      "AI Integration and Intelligent Workflows",
      "Software Development and Automation",
      "Business Process Automation",
      "Customer Relationship Management (CRM) Systems",
      "Data Science and Exploratory Data Analysis",
      "Enterprise Systems and Operational Intelligence",
      "Technical Project Leadership",
      "Team Leadership and Event Management",
      "Strategic Planning and Business Consulting",
    ],
  },
];
