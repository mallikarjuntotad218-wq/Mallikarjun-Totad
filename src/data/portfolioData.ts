/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CENTRAL PORTFOLIO DATA - MALLIKARJUN TOTAD
 * -------------------------------------------------------------
 * Edit this file to update your personal details, links, or text.
 * All information is based strictly on your uploaded resume.
 */

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectData {
  title: string;
  technologies: string[];
  summary: string;
  implementedFeatures: string[];
  plannedFeatures: string[];
  githubUrl: string; // Editable placeholder
  demoUrl: string;   // Editable placeholder
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    intro: string;
    about: {
      paragraphs: string[];
      careerGoal: string;
    };
  };
  skills: SkillCategory[];
  project: ProjectData;
  education: {
    degree: string;
    institution: string;
    location: string;
    expectedGraduation: string;
    curriculum: string[];
  };
  certifications: string[];
  contact: {
    email: string;
    phone: string;
    linkedIn: string;
    github: string;
    location: string;
    resumePdfUrl: string;
  };
}

export const initialPortfolioData: PortfolioData = {
  personal: {
    name: "Mallikarjun Totad",
    title: "Aspiring Data Engineer",
    intro:
      "I am a Computer Science Engineering student at CMR University, Bengaluru, graduating in 2028. I am interested in Python, SQL, data engineering, ETL pipelines, data modeling, and cloud technologies. My goal is to build reliable data pipelines that transform raw data into clean, structured datasets.",
    about: {
      paragraphs: [
        "My passion lies in backend data engineering—designing resilient pipelines that take unstructured or messy operational inputs and transform them into verified, well-modeled data tables ready for analysis and reporting.",
        "Through my coursework at CMR University and dedicated hands-on project work, I have focused on relational modeling, SQL-based data validation to isolate duplicates and null anomalies, modular pipeline development in Databricks and Python, and fundamental cloud storage concepts.",
        "I am actively preparing for Summer 2027 internship opportunities in Data Engineering and Product Analytics, where I can apply strong data fundamentals, learn from senior engineers, and build reliable data infrastructure.",
      ],
      careerGoal: "Seeking Data Engineer Intern and Product Analytics opportunities for Summer 2027.",
    },
  },
  skills: [
    {
      title: "Programming",
      skills: ["Python", "SQL"],
    },
    {
      title: "Data Engineering",
      skills: [
        "ETL/ELT",
        "Data modeling",
        "Data warehousing concepts",
        "Data quality and validation",
        "Databricks",
        "Basic PySpark",
      ],
    },
    {
      title: "Databases",
      skills: [
        "Relational databases",
        "Query optimization",
        "Aggregation and reporting",
      ],
    },
    {
      title: "Cloud",
      skills: ["AWS S3", "AWS IAM"],
    },
    {
      title: "Core Computer Science",
      skills: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Databases",
      ],
    },
  ],
  project: {
    title: "Farmer Database and Intelligence System",
    technologies: ["Python", "Databricks", "SQL"],
    summary:
      "A centralized data engineering project focused on farmer data consolidation, relational data modeling, ETL pipeline development, SQL data quality validation, and structured reporting datasets.",
    implementedFeatures: [
      "Consolidated raw, unformatted farmer records into a centralized schema architecture.",
      "Designed relational data models defining farmer profiles, land parcels, cultivation cycles, and harvest records.",
      "Built modular Python and Databricks pipeline stages separating raw ingestion from cleaned staging.",
      "Implemented SQL validation checks to identify duplicate records, missing keys, and invalid values.",
      "Created structured SQL aggregation queries to produce clean datasets for crop yield reporting.",
    ],
    plannedFeatures: [
      "Scheduled workflow triggers for automated recurring data ingestion.",
      "PySpark scaling for distributed processing on larger datasets.",
      "Cloud data lake sync with AWS S3 under granular IAM access control.",
    ],
    githubUrl: "https://github.com/mallikarjuntotad/farmer-database-intelligence-system", // Edit placeholder here
    demoUrl: "https://github.com/mallikarjuntotad/farmer-database-intelligence-system#demo",   // Edit placeholder here
  },
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "CMR University",
    location: "Bengaluru, Karnataka, India",
    expectedGraduation: "2028",
    curriculum: [
      "Core coursework in Data Structures & Algorithms, Operating Systems, and Relational Database Systems.",
      "Applied laboratory training in data modeling, SQL query design, and software engineering principles.",
    ],
  },
  certifications: [
    "Python Programming",
    "SQL",
    "Operating Systems",
  ],
  contact: {
    email: "mallikarjuntotadmd2005@gmail.com",
    phone: "+91-9019381479",
    linkedIn: "https://linkedin.com/in/mallikarjuntotad-97b54038a",
    github: "https://github.com/mallikarjuntotad", // Edit placeholder here
    location: "Bengaluru, Karnataka, India",
    resumePdfUrl: "/Mallikarjun_Totad_Resume.pdf", // Place your PDF in the public folder or paste your Google Drive/cloud link here
  },
};
