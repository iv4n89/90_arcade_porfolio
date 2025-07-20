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
        "Desarrollo de aplicaciones web con Next.js, con blog y page builder sobre WordPress",
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
        "Apoyo a partners en integración de chatbot Aura (MS Bot Framework), documentación y soporte técnico. Automatizaciones de procesos con Docker y Jenkins.",
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
        "Desarrollo de herramienta interna de gestión con Laravel, Node.js y Next.js. Integración de APIs y optimización de rendimiento.",
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
        "Proyecto base de e-commerce para diferentes brands de Telefónica. Next.js con integración SAP y page builder.",
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
        "Frontend para proyecto de verificación de imágenes, vídeos y audio generados por IA. Integración con API de verificación y gestión de usuarios.",
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
        "Rediseño completo de la plataforma tu.com para mostrar productos digitales de Telefónica. Migración a Next.js con integración WordPress y desarrollo de page builder personalizado.",
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
      description: "Aplicación de generación de firmas para emails.",
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
        "Desarrollo de chatbot para atención al cliente de Telefónica. Integración con MS Bot Framework y APIs de servicios.",
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
        "Backend para juego de Realidad Virtual Aimtropolis. AWS Lambda, DynamoDB y API Gateway.",
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
        "Proyecto personal de microservicios con Spring Boot. Kafka para mensajería y arquitectura DDD.",
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
        "Plantillas de Docker para proyectos web. Incluye configuraciones para Node.js, Nest.js, React, bases de datos y más.",
      url: "https://github.com/iv4n89/docker-templates",
      technologies: ["Docker"],
      status: "PERSONAL_PROJECT",
      year: "2023",
    },
    {
      title: "INTERNAL_MANAGEMENT_TOOL",
      description:
        "Herramienta interna de gestión de trabajos y tareas, con concurrencia y optimización de rendimiento. Arquitectura limpia y modular, siguiendo departamentos y roles de la empresa.",
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
        "Aplicación de creación de actividades interactivas para educación. Permite a los profesores crear y compartir actividades con sus alumnos.",
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
        "Proyecto personal de gestión de colección de videojuegos retro. Permite añadir juegos a colección, agregar imágenes o vídeos y seguir cambios de precio.",
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
      experience: "4 años",
      description:
        "Biblioteca favorita para interfaces modernas. Hooks, Context API, y optimización de performance.",
    },
    "Node.js": {
      level: "EXPERT",
      experience: "4 años",
      description:
        "Runtime principal para backend. APIs escalables, microservicios y real-time applications.",
    },
    TypeScript: {
      level: "EXPERT",
      experience: "4 años",
      description:
        "Lenguaje preferido para proyectos grandes. Type safety y mejor developer experience.",
    },
    Angular: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Framework principal para desarrollo enterprise. Especializado en arquitecturas complejas y microfrontends.",
    },
    Jest: {
      level: "ADVANCED",
      experience: "3 años",
      description:
        "Framework de testing principal. Unit tests, integration tests y mocks.",
    },
    Puppeteer: {
      level: "ADVANCED",
      experience: "3 años",
      description:
        "Automatización de pruebas y scraping. Generación de screenshots.",
    },
    "Testing Library": {
      level: "ADVANCED",
      experience: "3 años",
      description:
        "Testing de componentes React. Enfoque en user interactions y accessibility.",
    },
    Docker: {
      level: "ADVANCED",
      experience: "3 años",
      description:
        "Containerización para desarrollo y producción. Docker Compose y orquestación básica.",
    },
    AWS: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Servicios cloud para deployment y escalabilidad. EC2, S3, Lambda y RDS.",
    },
    MongoDB: {
      level: "ADVANCED",
      experience: "3 años",
      description:
        "Base de datos NoSQL para aplicaciones modernas. Aggregation pipelines y optimización.",
    },
    "Next.js": {
      level: "EXPERT",
      experience: "4 años",
      description:
        "Framework de React para aplicaciones universales. SSR, SSG y optimización de rendimiento.",
    },
    JavaScript: {
      level: "EXPERT",
      experience: "4 años",
      description:
        "Lenguaje base para desarrollo web. ES6+ features, async programming y optimización.",
    },
    WordPress: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "CMS principal para proyectos web. Desarrollo de themes y plugins personalizados. Page builder con Gutenberg.",
    },
    HTML5: {
      level: "EXPERT",
      experience: "4 años",
      description:
        "Estructura base de la web. Semántica, accesibilidad y mejores prácticas.",
    },
    CSS3: {
      level: "EXPERT",
      experience: "4 años",
      description:
        "Estilos modernos con Flexbox y Grid. Preprocesadores como SASS y Tailwind CSS.",
    },
    "Nest.js": {
      level: "ADVANCED",
      experience: "3 años",
      description:
        "Framework de Node.js para aplicaciones escalables. Arquitectura modular y microservicios.",
    },
    Java: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Lenguaje de programación para aplicaciones enterprise. Spring Boot y microservicios.",
    },
    "Spring Boot": {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Framework de Java para desarrollo rápido de aplicaciones. Microservicios y REST APIs.",
    },
    PHP: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Lenguaje de backend principal. Laravel para desarrollo web y APIs.",
    },
    Laravel: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Framework de PHP para desarrollo web. MVC, Eloquent y APIs REST.",
    },
    Python: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Lenguaje versátil para backend y scripts. Django y Flask para desarrollo web.",
    },
    Django: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Framework de Python para desarrollo web. ORM, autenticación y APIs REST.",
    },
    PostgreSQL: {
      level: "ADVANCED",
      experience: "3 años",
      description:
        "Base de datos relacional avanzada. Optimización de consultas y administración de datos.",
    },
    Redis: {
      level: "ADVANCED",
      experience: "3 años",
      description:
        "Base de datos en memoria para caching y pub/sub. Optimización de rendimiento y escalabilidad.",
    },
    "MS Bot Framework": {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Framework de Microsoft para desarrollo de chatbots. Integración con servicios de Azure y APIs.",
    },
    MySQL: {
      level: "ADVANCED",
      experience: "3 años",
      description:
        "Base de datos relacional popular. Optimización de consultas y administración de datos.",
    },
    Mockito: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Framework de Java para creación de mocks en pruebas unitarias. Facilita el testing de componentes aislados.",
    },
    JUnit: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Framework de Java para pruebas unitarias. Estructuración de tests y aserciones.",
    },
    Kafka: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Plataforma de mensajería distribuida. Ideal para aplicaciones en tiempo real y procesamiento de eventos o comunicaciones entre microservicios.",
    },
    Kubernetes: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Orquestación de contenedores para aplicaciones distribuidas. Gestión de clústers y despliegues.",
    },
    Jenkins: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Automatización de procesos de integración y entrega continua. Configuración de pipelines y gestión de versiones.",
    },
    GitHub: {
      level: "EXPERT",
      experience: "4 años",
      description:
        "Plataforma de control de versiones y colaboración. Pull requests, issues y gestión de proyectos.",
    },
    Git: {
      level: "EXPERT",
      experience: "4 años",
      description:
        "Sistema de control de versiones distribuido. Branching, merging y resolución de conflictos.",
    },
    Jira: {
      level: "ADVANCED",
      experience: "3 años",
      description:
        "Herramienta de gestión de proyectos y seguimiento de tareas. Scrum, Kanban y reporting.",
    },
    Figma: {
      level: "ADVANCED",
      experience: "3 años",
      description:
        "Herramienta de diseño colaborativo. Prototipos, wireframes y diseño UI/UX.",
    },
    DDD: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Enfoque de diseño de software centrado en el dominio. Modelado de dominios complejos y separación de preocupaciones.",
    },
    "Hexagonal Architecture": {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Patrón de arquitectura que separa la lógica de negocio de las dependencias externas. Facilita el testing y la evolución del software.",
    },
    Microservices: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Arquitectura de software que divide aplicaciones en servicios pequeños e independientes. Escalabilidad y despliegue independiente.",
    },
    "REST APIs": {
      level: "ADVANCED",
      experience: "3 años",
      description:
        "Diseño y desarrollo de APIs RESTful. Principios de diseño, autenticación y documentación.",
    },
    GraphQL: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Lenguaje de consulta para APIs. Permite a los clientes solicitar solo los datos necesarios. Optimización de consultas y gestión de datos.",
    },
    "CI/CD": {
      level: "ADVANCED",
      experience: "3 años",
      description:
        "Integración y entrega continua. Automatización de pruebas y despliegues. Mejora de la calidad del software y reducción de tiempos de entrega.",
    },
    CQRS: {
      level: "INTERMEDIATE",
      experience: "2 años",
      description:
        "Command Query Responsibility Segregation. Separación de comandos y consultas para mejorar la escalabilidad y el rendimiento.",
    },
    "Agile Methodologies": {
      level: "ADVANCED",
      experience: "3 años",
      description:
        "Metodologías ágiles para desarrollo de software. Scrum y Kanban. Mejora de la colaboración y adaptación al cambio.",
    },
  };

  const educationData: Education[] = [
    {
      title: "NODE_JS_APPLICATION_DEVELOPMENT_CERTIFICATE",
      institution: "The Linux Foundation",
      period: "2023",
      description:
        "Certificación oficial de The Linux Foundation en desarrollo de aplicaciones con Node.js. Enfoque en buenas prácticas, testing y optimización.",
      skills: ["Node.js", "JavaScript", "Testing", "Performance"],
    },
    {
      title: "ESPECIALISTA_PYTHON",
      institution: "CloudFTic Formación",
      period: "2022 - 2023",
      description:
        "Curso especializado en Python para desarrollo web, automatización de tareas, análisis de datos y web scraping.",
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
        "Máster en desarrollo Full Stack con Spring Boot (Java) y Angular. Enfoque en arquitecturas modernas, microservicios y desarrollo de aplicaciones web escalables.",
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
