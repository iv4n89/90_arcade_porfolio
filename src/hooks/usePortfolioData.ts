import type {
  Education,
  Experience,
  Project,
  SkillDetail,
  SkillsData,
} from "../types";

export const usePortfolioData = () => {
  const experienceData: Experience[] = [
    {
      title: "FULL_STACK_DEVELOPER",
      company: "BCNC - TELEFONICA",
      period: "2024 - PRESENT",
      description:
        "Web application development with Next.js, blog and page builder on WordPress",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "WordPress",
        "Redis",
        "GraphQL",
        "Java",
        "SpringBoot",
        "Auth0",
        "Docker",
        "Figma",
        "Jest",
        "Puppeteer",
        "Testing Library",
      ],
    },
    {
      title: "PARTNER_ENGINEER",
      company: "BCNC - TELEFONICA",
      period: "2022 - 2024",
      description:
        "Partner support in Aura chatbot integration (MS Bot Framework), documentation and technical support. Process automation with Docker and Jenkins.",
      technologies: [
        "Node.js",
        "MS Bot Framework",
        "MongoDB",
        "Jenkins",
        "Docker",
        "Git",
        "TypeScript",
        "Python",
        "Redis",
        "Azure",
        "GitHub Pages",
      ],
    },
    {
      title: "FULL_STACK_DEVELOPER",
      company: "AIUDO",
      period: "2021 - 2022",
      description:
        "Development of internal management tool with Laravel, Node.js and Next.js. API integration and performance optimization.",
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Laravel",
        "Git",
        "Docker",
        "Socket.io",
        "Redis",
        "Tailwind CSS",
        "AWS",
        "Figma",
        "Jest",
        "Puppeteer",
        "Cucumber",
      ],
    },
  ];

  const projectsData: Project[] = [
    {
      title: "E-COMMERCE_FRONTEND",
      description:
        "E-commerce base project for different Telefónica brands. Next.js with SAP integration and page builder.",
      url: "https://www.esimflag.com",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Docker",
        "SAP",
        "Redis",
        "CSS3",
        "Jest",
        "Puppeteer",
        "Testing Library",
        "Kubernetes",
        "Git",
        "GitHub",
        "Figma",
        "Jira",
      ],
      status: "PRODUCTION",
      year: "2025",
    },
    {
      title: "AI_VERIFY_ECOMMERCE_FRONTEND",
      description:
        "Frontend for AI-generated image, video and audio verification project. Integration with verification API and user management.",
      url: "https://www.tu.com/verifai",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Docker",
        "Java",
        "SpringBoot",
        "Auth0",
        "Redis",
        "GraphQL",
        "WordPress",
        "Jest",
        "Puppeteer",
        "Testing Library",
        "CSS3",
        "Kubernetes",
        "Git",
        "GitHub",
        "Figma",
        "Jira",
      ],
      status: "PRODUCTION",
      year: "2025",
    },
    {
      title: "TU_COM_DIGITAL_PRODUCTS_PLATFORM",
      description:
        "Complete redesign of tu.com platform to showcase Telefónica's digital products. Migration to Next.js with WordPress integration and custom page builder development.",
      url: "https://www.tu.com",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Docker",
        "WordPress",
        "Redis",
        "GraphQL",
        "Jest",
        "Puppeteer",
        "Testing Library",
        "CSS3",
        "Kubernetes",
        "Git",
        "GitHub",
        "Figma",
        "Jira",
      ],
      status: "PRODUCTION",
      year: "2024 - 2025",
    },
    {
      title: "SIGNER_APP",
      description: "Email signature generation application.",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Docker",
        "CSS3",
        "Tailwind CSS",
        "Jest",
        "Puppeteer",
        "Testing Library",
      ],
      status: "PRODUCTION",
      year: "2024",
    },
    {
      title: "AURA_CHATBOT",
      description:
        "Chatbot development for Telefónica customer service. Integration with MS Bot Framework and service APIs.",
      url: "https://aura.telefonica.com/",
      technologies: [
        "Node.js",
        "TypeScript",
        "Python",
        "MS Bot Framework",
        "MongoDB",
        "Redis",
        "Docker",
        "GitHub Pages",
        "Azure",
        "Jenkins",
        "Kubernetes",
        "Git",
        "GitHub",
        "Jira",
      ],
      status: "PRODUCTION",
      year: "2022 - 2024",
    },
    {
      title: "AIMTROPOLIS_GAME_BACKEND",
      description:
        "Backend for Virtual Reality game Aimtropolis. AWS Lambda, DynamoDB and API Gateway.",
      url: "https://www.aimtropolis.com",
      technologies: [
        "Node.js",
        "AWS Lambda",
        "DynamoDB",
        "API Gateway",
        "JavaScript",
        "Unity",
      ],
      status: "PRODUCTION",
      year: "2023",
    },
    {
      title: "BACKEND_MICROSERVICES_SPRINGBOOT",
      description:
        "Personal microservices project with Spring Boot. Kafka for messaging and DDD architecture.",
      url: "https://github.com/iv4n89?tab=repositories&q=java-ddd-films&type=&language=&sort=",
      technologies: [
        "Java",
        "Spring Boot",
        "Kafka",
        "Docker",
        "DDD",
        "Hexagonal Architecture",
        "Mockito",
        "JUnit",
        "MySQL",
        "PostgreSQL",
      ],
      status: "PERSONAL_PROJECT",
      year: "2023",
    },
    {
      title: "DOCKER_TEMPLATES",
      description:
        "Docker templates for web projects. Includes configurations for Node.js, Nest.js, React, databases and more.",
      url: "https://github.com/iv4n89/docker-templates",
      technologies: ["Docker"],
      status: "PERSONAL_PROJECT",
      year: "2023",
    },
    {
      title: "INTERNAL_MANAGEMENT_TOOL",
      description:
        "Internal work and task management tool with concurrency and performance optimization. Clean and modular architecture, following company departments and roles.",
      technologies: [
        "Laravel",
        "PHP",
        "TypeScript",
        "Node.js",
        "Nest.js",
        "React",
        "Next.js",
        "Tailwind CSS",
        "CSS3",
        "Docker",
        "MySQL",
        "AWS",
        "Jest",
        "Puppeteer",
        "Git",
        "GitHub",
        "Figma",
        "Jira",
      ],
      status: "PRODUCTION",
      year: "2021 - 2022",
    },
    {
      title: "INTERACTIVE_ACTIVITY_APP",
      description:
        "Interactive activities creation app for education. Allows teachers to create and share activities with their students.",
      technologies: [
        "Node.js",
        "React",
        "Angular",
        "TypeScript",
        "Next.js",
        "Nest.js",
        "Java",
        "Spring Boot",
        "Laravel",
        "Python",
        "Django",
        "MongoDB",
        "PostgreSQL",
        "Docker",
      ],
      status: "PERSONAL_PROJECT",
      year: "CURRENT",
    },
    {
      title: "GAMES_LIBRARY",
      description:
        "Personal retro videogames collection management project. Allows adding games to collection, adding images or videos and tracking price changes.",
      url: "https://github.com/iv4n89/GamesDB-NestJs",
      technologies: [
        "Node.js",
        "Nest.js",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "React",
        "Next.js",
        "Tailwind CSS",
        "CSS3",
        "Jest",
        "Testing Library",
      ],
      status: "PERSONAL_PROJECT",
      year: "CURRENT",
    },
  ];

  const skillsData: SkillsData = {
    frontend: [
      "React",
      "Next.js",
      "Redux",
      "Angular",
      "TypeScript",
      "JavaScript",
      "WordPress",
      "HTML5",
      "CSS3",
      "Jest",
      "Puppeteer",
      "Testing Library",
    ],
    backend: [
      "Node.js",
      "Nest.js",
      "Java",
      "Spring Boot",
      "PHP",
      "Laravel",
      "Python",
      "Django",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "MS Bot Framework",
      "Mockito",
      "JUnit",
      "Kafka",
    ],
    tools: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Jenkins",
      "GitHub",
      "Git",
      "Jira",
      "Figma",
    ],
    architecture: [
      "DDD",
      "Hexagonal Architecture",
      "Microservices",
      "REST APIs",
      "GraphQL",
      "CI/CD",
      "Agile Methodologies",
      "CQRS",
    ],
  };

  const skillDetails: Record<string, SkillDetail> = {
    React: {
      level: "EXPERT",
      experience: "4 years",
      description:
        "Favorite library for modern interfaces. Hooks, Context API, and performance optimization.",
    },
    "Node.js": {
      level: "EXPERT",
      experience: "4 years",
      description:
        "Main runtime for backend. Scalable APIs, microservices and real-time applications.",
    },
    TypeScript: {
      level: "EXPERT",
      experience: "4 years",
      description:
        "Preferred language for large projects. Type safety and better developer experience.",
    },
    Angular: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Main framework for enterprise development. Specialized in complex architectures and microfrontends.",
    },
    Jest: {
      level: "ADVANCED",
      experience: "3 years",
      description:
        "Main testing framework. Unit tests, integration tests and mocks.",
    },
    Puppeteer: {
      level: "ADVANCED",
      experience: "3 years",
      description:
        "Test automation and scraping. Screenshot generation.",
    },
    "Testing Library": {
      level: "ADVANCED",
      experience: "3 years",
      description:
        "React component testing. Focus on user interactions and accessibility.",
    },
    Docker: {
      level: "ADVANCED",
      experience: "3 years",
      description:
        "Containerization for development and production. Docker Compose and basic orchestration.",
    },
    AWS: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Cloud services for deployment and scalability. EC2, S3, Lambda and RDS.",
    },
    MongoDB: {
      level: "ADVANCED",
      experience: "3 years",
      description:
        "NoSQL database for modern applications. Aggregation pipelines and optimization.",
    },
    "Next.js": {
      level: "EXPERT",
      experience: "4 years",
      description:
        "React framework for universal applications. SSR, SSG and performance optimization.",
    },
    JavaScript: {
      level: "EXPERT",
      experience: "4 years",
      description:
        "Base language for web development. ES6+ features, async programming and optimization.",
    },
    WordPress: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Main CMS for web projects. Custom themes and plugins development. Page builder with Gutenberg.",
    },
    HTML5: {
      level: "EXPERT",
      experience: "4 years",
      description:
        "Web structure foundation. Semantics, accessibility and best practices.",
    },
    CSS3: {
      level: "EXPERT",
      experience: "4 years",
      description:
        "Modern styling with Flexbox and Grid. Preprocessors like SASS and Tailwind CSS.",
    },
    Redux: {
        level: "INTERMEDIATE",
        experience: "2 years",
        description:
            "State management for React applications. Middleware, selectors and performance optimization.",
    },
    "Nest.js": {
      level: "ADVANCED",
      experience: "3 years",
      description:
        "Node.js framework for scalable applications. Modular architecture and microservices.",
    },
    Java: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Programming language for enterprise applications. Spring Boot and microservices.",
    },
    "Spring Boot": {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Java framework for rapid application development. Microservices and REST APIs.",
    },
    PHP: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Main backend language. Laravel for web development and APIs.",
    },
    Laravel: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "PHP framework for web development. MVC, Eloquent and REST APIs.",
    },
    Python: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Versatile language for backend and scripts. Django and Flask for web development.",
    },
    Django: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Python framework for web development. ORM, authentication and REST APIs.",
    },
    PostgreSQL: {
      level: "ADVANCED",
      experience: "3 years",
      description:
        "Advanced relational database. Query optimization and data management.",
    },
    Redis: {
      level: "ADVANCED",
      experience: "3 years",
      description:
        "In-memory database for caching and pub/sub. Performance optimization and scalability.",
    },
    "MS Bot Framework": {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Microsoft framework for chatbot development. Integration with Azure services and APIs.",
    },
    MySQL: {
      level: "ADVANCED",
      experience: "3 years",
      description:
        "Popular relational database. Query optimization and data management.",
    },
    Mockito: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Java framework for creating mocks in unit tests. Facilitates testing of isolated components.",
    },
    JUnit: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Java framework for unit testing. Test structuring and assertions.",
    },
    Kafka: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Distributed messaging platform. Ideal for real-time applications and event processing or microservices communication.",
    },
    Kubernetes: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Container orchestration for distributed applications. Cluster management and deployments.",
    },
    Jenkins: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Process automation for continuous integration and delivery. Pipeline configuration and version management.",
    },
    GitHub: {
      level: "EXPERT",
      experience: "4 years",
      description:
        "Version control and collaboration platform. Pull requests, issues and project management.",
    },
    Git: {
      level: "EXPERT",
      experience: "4 years",
      description:
        "Distributed version control system. Branching, merging and conflict resolution.",
    },
    Jira: {
      level: "ADVANCED",
      experience: "3 years",
      description:
        "Project management and task tracking tool. Scrum, Kanban and reporting.",
    },
    Figma: {
      level: "ADVANCED",
      experience: "3 years",
      description:
        "Collaborative design tool. Prototypes, wireframes and UI/UX design.",
    },
    DDD: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Domain-driven software design approach. Complex domain modeling and separation of concerns.",
    },
    "Hexagonal Architecture": {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Architecture pattern that separates business logic from external dependencies. Facilitates testing and software evolution.",
    },
    Microservices: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Software architecture that divides applications into small, independent services. Scalability and independent deployment.",
    },
    "REST APIs": {
      level: "ADVANCED",
      experience: "3 years",
      description:
        "RESTful API design and development. Design principles, authentication and documentation.",
    },
    GraphQL: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Query language for APIs. Allows clients to request only necessary data. Query optimization and data management.",
    },
    "CI/CD": {
      level: "ADVANCED",
      experience: "3 years",
      description:
        "Continuous integration and delivery. Test and deployment automation. Software quality improvement and delivery time reduction.",
    },
    CQRS: {
      level: "INTERMEDIATE",
      experience: "2 years",
      description:
        "Command Query Responsibility Segregation. Separation of commands and queries to improve scalability and performance.",
    },
    "Agile Methodologies": {
      level: "ADVANCED",
      experience: "3 years",
      description:
        "Agile methodologies for software development. Scrum and Kanban. Improving collaboration and adaptation to change.",
    },
  };

  const educationData: Education[] = [
    {
      title: "NODE_JS_APPLICATION_DEVELOPMENT_CERTIFICATE",
      institution: "The Linux Foundation",
      period: "2023",
      description:
        "Official certification from The Linux Foundation in Node.js application development. Focus on best practices, testing and optimization.",
      skills: ["Node.js", "JavaScript", "Testing", "Performance"],
    },
    {
      title: "PYTHON_SPECIALIST",
      institution: "CloudFTic Formación",
      period: "2022 - 2023",
      description:
        "Specialized course in Python for web development, task automation, data analysis and web scraping.",
      skills: [
        "Python",
        "Django",
        "Flask",
        "Data Analysis",
        "Web Scraping",
        "Automation",
        "REST APIs",
        "Data Visualization",
      ],
    },
    {
      title: "MASTER_FULL_STACK_DEVELOPER",
      institution: "CloudFTic Formación",
      period: "2021",
      description:
        "Master's degree in Full Stack development with Spring Boot (Java) and Angular. Focus on modern architectures, microservices and scalable web application development.",
      skills: [
        "Java",
        "Spring Boot",
        "Angular",
        "Microservices",
        "REST APIs",
        "Docker",
        "Kubernetes",
        "CSS3",
        "HTML5",
        "TypeScript",
        "JavaScript",
        "Git",
        "Agile Methodologies",
      ],
    },
  ];

  return {
    experienceData,
    projectsData,
    skillsData,
    skillDetails,
    educationData,
  };
};
