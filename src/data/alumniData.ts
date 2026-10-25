
export interface ExperienceItem {
  role: string;
  organization: string;
  period?: string;
  description?: string;
}

export interface ResearchItem {
  type: string;
  title: string;
  applicationNumber?: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  program: string;
  period?: string;
  details?: string;
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
    image: "/alumni-img/raj-thakur.png",
    title: "Optima Developer",
    organization: "Aurbient Technologies",
    location: "Indore, Madhya Pradesh, India",
    linkedinUrl: "https://www.linkedin.com/in/raj-thakur-9a4987251",
    introduction:
      "Former Chairperson of the SUI-IEEE Student Branch, Raj Thakur led student-focused IEEE initiatives and initiated the IEEE PathX Forum at SAGE University Indore. His tenure from June 2024 to November 2025 reflects his involvement in student leadership, event management, and fostering a culture of technical learning and professional development.",
    biography: [
      "Raj Thakur is an alumnus of SAGE University Indore, where he studied Computer Technology with a specialization in Artificial Intelligence. During his time at the university, he served as Chairperson of the SUI-IEEE Student Branch, leading student-focused initiatives and initiating the IEEE PathX Forum to encourage knowledge sharing, technical learning, and professional development among students.",
      "His professional experience includes working as an AI Developer Intern at Parul Chemicals, where he developed a customer relationship management (CRM) system for the sales and marketing team, and as a Data Science Intern at CodSoft, where he gained experience in exploratory data analysis and Pandas. He is currently associated with Aurbient Technologies as an Optima Developer.",
      "Raj has also contributed to research and innovation in autonomous systems and healthcare logistics. He is a co-author of the published Indian patent application titled 'A System and Method for Autonomous Organ Transport with Predictive Preservation and Cross-Domain UAV Control' (Application No. 202621048517 A). The application explores the use of autonomous UAV technology and predictive preservation in organ transportation.",
      "His interests include artificial intelligence, software development, automation, data science, and emerging technologies. Through his leadership at SUI-IEEE and his continued professional development, Raj's journey connects student community engagement, technical learning, and innovation.",
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
  {
    slug: "neelesh-singh-choursiya",
    name: "Neelesh Singh Choursiya",
    image: "/alumni-img/neelesh-singh-choursiya.png",
    title: "Data Analyst",
    organization: "Parul Chemicals",
    linkedinUrl: "https://www.linkedin.com/in/neeleshsinghchoursiya",
    introduction:
      "Neelesh Singh Choursiya is an AI/ML engineer and alumnus of SAGE University Indore. A former Vice Chair of the SUI-IEEE Student Branch, he contributed to IEEE activities and student engagement while developing interests in machine learning, Generative AI, data analytics, and applied AI systems.",
    biography: [
      "Neelesh Singh Choursiya is an AI/ML engineer and alumnus of SAGE University Indore, where he completed his Bachelor of Technology in Artificial Intelligence with a CGPA of 8.24. During his university journey, he served as Vice Chair of the SUI-IEEE Student Branch from June 2024 to December 2025, spearheading IEEE activities and events for more than 200 students and promoting innovation in artificial intelligence and machine learning. He also contributed to the IEEE community through student-focused initiatives and technical engagement.",
      "Professionally, Neelesh works as a Data Analyst at Parul Chemicals, where his experience includes data cleaning, preprocessing, exploratory data analysis, and predictive modelling. His earlier experience includes an AI Engineer Internship at Codenscious Technologies, an AI Developer role at Aurbient Technologies, and an Oracle Fusion Technical Consultant Internship at Rainbow Cons. His work and interests span machine learning, Generative AI, large language models (LLMs), retrieval-augmented generation (RAG), natural language processing (NLP), and production-oriented ML systems.",
      "Neelesh has also contributed to research and academic publishing, including research published on IEEE Xplore and book chapters on artificial intelligence and machine learning in marketing and federated learning. His projects include RAG-based applications, NLP systems for market sentiment analysis, sales forecasting pipelines, and LLM-powered assistants. He is interested in bridging research with practical applications and building reliable AI systems that address real-world challenges.",
      "His journey reflects a combination of student leadership, research engagement, data analytics, and applied AI development.",
    ],
    ieeeJourney: {
      role: "Vice Chair",
      period: "June 2024 – December 2025",
      description: [
        "Neelesh Singh Choursiya served as Vice Chair of the SUI-IEEE Student Branch at SAGE University Indore from June 2024 to December 2025. During his tenure, he spearheaded IEEE activities and events for more than 200 students, promoted innovation in artificial intelligence and machine learning, and contributed to student-focused initiatives and technical engagement.",
      ],
    },
    experience: [
      {
        role: "Data Analyst",
        organization: "Parul Chemicals",
        period: "Current role",
        description:
          "Experience includes data cleaning, preprocessing, exploratory data analysis, and predictive modelling.",
      },
      {
        role: "AI Engineer Intern",
        organization: "Codenscious Technologies",
      },
      {
        role: "AI Developer",
        organization: "Aurbient Technologies",
      },
      {
        role: "Oracle Fusion Technical Consultant Intern",
        organization: "Rainbow Cons.",
      },
    ],
    research: [
      {
        type: "Academic Publishing",
        title: "Research and Academic Publishing",
        description: [
          "Research published on IEEE Xplore.",
          "Book chapters on artificial intelligence and machine learning in marketing.",
          "Book chapters on federated learning.",
        ],
      },
      {
        type: "Projects",
        title: "Projects",
        description: [
          "RAG-based applications.",
          "NLP systems for market sentiment analysis.",
          "Sales forecasting pipelines.",
          "LLM-powered assistants.",
        ],
      },
    ],
    education: [
      {
        institution: "SAGE University Indore",
        program: "Bachelor of Technology (B.Tech) in Artificial Intelligence",
        period: "June 2022 – June 2026",
        details: "CGPA: 8.24",
      },
    ],
    expertise: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Retrieval-Augmented Generation (RAG)",
      "Natural Language Processing (NLP)",
      "Deep Learning",
      "Python",
      "PyTorch",
      "LangChain",
      "FastAPI",
      "Data Analytics",
      "Predictive Modelling",
      "Research",
    ],
  },
];
