export interface Project {
  id: string;
  title: string;
  problem: string;
  technologies: string[];
  impact: string;
}

export interface Company {
  id: string;
  name: string;
  role: string;
  period: string;
  startYear: number;
  endYear: number | null;
  projects: Project[];
}

export interface Hobby {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  colSpan?: number;
  rowSpan?: number;
  badge?: string;
}

export interface ContactItem {
  id: string;
  platform: string;
  url: string;
  icon: string;
  handle: string;
}

export interface PersonalInfo {
  name: string;
  surname: string;
  title: string;
  photoUrl?: string;
  skills: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Hakan",
  surname: "Ateşli",
  title: "Senior Data Scientist",
  photoUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHRLEL4AodtQA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689084057291?e=1773878400&v=beta&t=n1eWzaANPF_C8N6doGa0pr5SiP5lwEltjuanZ-MyI1Y",
  skills: ["Machine Learning", "Sales Forecasting", "MLOps", "Time Series", "Data Engineering"],
};

export const companies: Company[] = [
  {
    id: "sakarya-university",
    name: "Sakarya University",
    role: "B.Sc. Computer Engineering",
    period: "2017 – 2021",
    startYear: 2017,
    endYear: 2021,
    projects: [],
  },
  {
    id: "ford-otosan",
    name: "Ford Otosan",
    role: "Data Analysis and Reporting Specialist",
    period: "2019 – 2022",
    startYear: 2019,
    endYear: 2022,
    projects: [
      {
        id: "digital-twin",
        title: "Manufacturing Info Systems (Digital Twin)",
        problem:
          "Production line monitoring relied on disparate sensor systems and manual inspection, making it difficult to identify bottlenecks and inefficiencies across the factory floor.",
        technologies: ["Cassandra DB", "SybaseDB", "SQL", "SAP Web Intelligence"],
        impact:
          "Developed a 'Digital Twin' of production lines using sensor data, improving factory efficiency by 30%.",
      },
      {
        id: "energy-management",
        title: "Energy Management System",
        problem:
          "Facility-wide resource consumption (Gas, Water, Electricity) lacked centralized, real-time monitoring, hindering sustainability efforts and cost control.",
        technologies: ["SybaseDB", "SQL", "Tableau", "SAP Web Intelligence"],
        impact:
          "Built a mobile-responsive monitoring system for facility-wide resource consumption, recognized as a key corporate sustainability initiative.",
      },
      {
        id: "executive-dashboards",
        title: "Executive Dashboards",
        problem:
          "Plant leadership lacked real-time visibility into critical factory KPIs, forcing reliance on periodic manual reports for strategic decision-making.",
        technologies: ["SybaseDB", "SQL", "Tableau"],
        impact:
          "Designed and implemented comprehensive executive dashboards providing real-time visibility into critical factory KPIs, enabling data-driven strategic decision-making.",
      },
    ],
  },
  {
    id: "hepsiburada",
    name: "Hepsiburada",
    role: "Data Scientist",
    period: "2022 – 2024",
    startYear: 2022,
    endYear: 2024,
    projects: [
      {
        id: "ml-infrastructure",
        title: "ML Infrastructure",
        problem:
          "Data Science lifecycle lacked standardization, with inconsistent workflows, fragmented tooling, and no unified deployment practices across the team.",
        technologies: ["GCP", "Airflow", "MLflow", "Docker", "Python", "Bigquery SQL", "FastAPI"],
        impact:
          "Standardized the entire DS lifecycle by migrating workflows to GCP, Airflow, and MLflow, establishing a unified Kanban methodology and a custom Python utility library.",
      },
      {
        id: "auto-hunt",
        title: "Auto Hunt (Pricing Optimization)",
        problem:
          "The existing optimization engine for balancing price-commission pairs was underperforming, leaving significant revenue and commission potential untapped.",
        technologies: ["Optimization Algorithms", "Price Elasticity"],
        impact:
          "Re-engineered and took full ownership of the optimization engine, achieving a 120% increase in weekly sales revenue and a 45% boost in commission revenue.",
      },
      {
        id: "deal-visibility",
        title: "Deal Visibility (Scoring System)",
        problem:
          "Storefront campaign prioritization lacked a data-driven approach, resulting in suboptimal product placement and missed high-engagement opportunities.",
        technologies: ["FastAPI", "LightGBM", "BigQuery"],
        impact:
          "Architected and deployed an end-to-end scoring service with minimal latency, predicting a 30% increase in product views for prioritized campaigns.",
      },
    ],
  },
  {
    id: "harmonyai",
    name: "HarmonyAI",
    role: "Senior Data Scientist",
    period: "2024 – Present",
    startYear: 2024,
    endYear: null,
    projects: [
      {
        id: "sales-forecasting",
        title: "AI-Driven Sales Forecasting",
        problem:
          "FMCG sector clients relied on traditional forecasting methods with limited accuracy, leading to poor demand planning and supply chain inefficiencies.",
        technologies: ["Nixtla", "StatsForecast", "MLForecast", "NeuralForecast"],
        impact:
          "Leading the development of AI-driven Sales Forecasting products specifically tailored for FMCG, enhancing prediction accuracy and supply chain resilience.",
      },
      {
        id: "stock-optimization",
        title: "Stock Optimization Product",
        problem:
          "Supply chain resilience suffered from suboptimal inventory management, causing stockouts and overstock situations across FMCG distribution networks.",
        technologies: ["Python", "Nixtla", "Airflow", "GCP", "Docker"],
        impact:
          "Architecting state-of-the-art time-series models to optimize stock levels, translating complex business requirements into scalable production-grade AI solutions.",
      },
    ],
  },
];

export const hobbies: Hobby[] = [
  {
    id: "sailing",
    title: "Sailing",
    description: "Navigating open waters, combining strategy with the thrill of wind and waves.",
    icon: "Sailboat",
    imageUrl: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&q=80",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "tennis",
    title: "Tennis",
    description: "Competitive rallies that sharpen reflexes and mental endurance.",
    icon: "Trophy",
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80",
  },
  {
    id: "horse-riding",
    title: "Horse Riding",
    description: "Connecting with nature through equestrian sports, building balance and discipline.",
    icon: "Compass",
    imageUrl: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80",
  },
  {
    id: "technical-writing",
    title: "Technical Writing",
    description: "Writing on Explainable AI (SHAP), MLflow optimization, and Financial Customer Segmentation.",
    icon: "PenTool",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
    colSpan: 2,
    badge: "Medium",
  },
  {
    id: "volunteering",
    title: "Volunteering",
    description: "Mentoring at Bilim Seferberliği - YGA and participating in TedXIzmit.",
    icon: "Heart",
    imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
    colSpan: 2,
    badge: "YGA & TedX",
  },
  {
    id: "traveling",
    title: "Traveling",
    description: "Exploring new destinations, immersing in different cultures, and discovering hidden gems around the world.",
    icon: "MapPin",
    imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
    colSpan: 2,
  },
];

export const contactItems: ContactItem[] = [
  {
    id: "linkedin",
    platform: "LinkedIn",
    url: "https://linkedin.com/in/hakanatesli",
    icon: "Linkedin",
    handle: "/in/hakanatesli",
  },
  {
    id: "github",
    platform: "GitHub",
    url: "https://github.com/hakanatesli",
    icon: "Github",
    handle: "@hakanatesli",
  },
  {
    id: "medium",
    platform: "Medium",
    url: "https://medium.com/@hakanateslii",
    icon: "Medium",
    handle: "@hakanatesli",
  },
  {
    id: "email",
    platform: "Email",
    url: "mailto:hakanatesli@icloud.com",
    icon: "Mail",
    handle: "hakanatesli@icloud.com",
  },
];
