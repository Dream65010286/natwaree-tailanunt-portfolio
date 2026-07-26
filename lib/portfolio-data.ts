export type Project = {
  title: string
  placeholder: string
  category: string
  badges: string[]
  summary: string
  metric: string
  date: string
  role: string
  link?: string
  overview: string
  achievements: string[]
  architecture: string[]
}

export const projects: Project[] = [
  {
    title: 'Shuttle Bus Tracking & ETA Prediction System',
    placeholder: 'Bus Dashboard',
    category: 'IoT',
    badges: ['IoT', 'Extended Kalman Filter', 'MQTT', 'React', 'Machine Learning'],
    summary:
      'Combined GPS & IMU sensors to deliver real-time positioning and accurate arrival predictions for campus shuttles.',
    metric: 'Reduced MAE by 55.16% · ETA accuracy 88.52%',
    date: 'Aug 2024 – Feb 2025',
    role: 'IoT & ML Engineer',
    link: '#',
    overview:
      'A senior capstone system that fuses GPS and IMU sensor data through an Extended Kalman Filter to stabilize positioning, then feeds a machine-learning model that predicts campus shuttle arrival times. The dashboard streams live vehicle positions over MQTT to a React front-end.',
    achievements: [
      'Reduced mean absolute error (MAE) of positioning by 55.16% using the Extended Kalman Filter.',
      'Achieved 88.52% ETA prediction accuracy across live campus routes.',
      'Built a real-time MQTT pipeline delivering sub-second position updates to the dashboard.',
      'Designed a responsive React dashboard visualizing routes, stops, and live vehicles.',
    ],
    architecture: [
      'Edge: ESP32 + GPS/IMU sensors publishing telemetry over MQTT.',
      'Processing: Extended Kalman Filter for sensor fusion + ML ETA regression model.',
      'Backend: MQTT broker streaming to a Node service.',
      'Front-end: React dashboard with live map and ETA overlays.',
    ],
  },
  {
    title: 'ESP32 & Flutter Bluetooth Telemetry System',
    placeholder: 'Mobile App & Hardware',
    category: 'Embedded',
    badges: ['Flutter', 'ESP32', 'Bluetooth Classic', 'OTA Update'],
    summary:
      'Built for Toyota Tsusho Nexty. Real-time telemetry with 256-bit fault-code decoding and over-the-air firmware updating.',
    metric: 'Real-time telemetry · OTA firmware',
    date: 'Nov 2025 – Mar 2026',
    role: 'Software Engineering Intern',
    link: '#',
    overview:
      'An embedded telemetry platform built during my internship at Toyota Tsusho Nexty Electronics. A Flutter mobile app pairs with an ESP32 over Bluetooth Classic to stream live vehicle telemetry, decode 256-bit fault codes, and push over-the-air firmware updates to the device.',
    achievements: [
      'Implemented 256-bit fault-code decoding for real-time diagnostics.',
      'Delivered over-the-air (OTA) firmware updating directly from the mobile app.',
      'Built a stable Bluetooth Classic streaming layer between ESP32 and Flutter.',
      'Designed an intuitive telemetry dashboard within the Flutter app.',
    ],
    architecture: [
      'Device: ESP32 firmware handling sensor sampling and fault detection.',
      'Transport: Bluetooth Classic serial link with framed packet protocol.',
      'App: Flutter client decoding telemetry and managing OTA sessions.',
      'OTA: Chunked firmware transfer with integrity verification.',
    ],
  },
  {
    title: 'CP AXTRA Product Management Initiatives',
    placeholder: 'PRD & App Design',
    category: 'Product',
    badges: ['Product Management', 'PRD', 'User Flow', 'Agile'],
    summary:
      "Lotus's Shopping App, In-store Picking Tool, and Rider App. Proposed features across the retail operations stack.",
    metric: 'Targeting 20% picking cycle time reduction',
    date: 'Apr – Jun 2025',
    role: 'Product Management Intern',
    link: '#',
    overview:
      "Product management work across CP AXTRA's retail ecosystem — the Lotus's Shopping App, the In-store Picking Tool, and the Rider App. I authored PRDs, mapped user flows, and proposed features prioritized against operational impact and downtime cost.",
    achievements: [
      'Analyzed 14.5M THB of downtime impact to prioritize the product roadmap.',
      'Proposed picking-tool improvements targeting a 20% cycle-time reduction.',
      'Authored PRDs and user flows for three interconnected retail apps.',
      'Collaborated with engineering in Agile sprints to validate feasibility.',
    ],
    architecture: [
      'Discovery: stakeholder interviews and downtime cost analysis.',
      'Definition: PRDs, acceptance criteria, and prioritized backlog.',
      'Design: user flows for shopper, picker, and rider journeys.',
      'Delivery: Agile sprints with engineering and QA.',
    ],
  },
  {
    title: 'Co-Working Space Satisfaction Analytics',
    placeholder: 'Data Analytics Dashboard',
    category: 'Data',
    badges: ['Python', 'Machine Learning', 'Scikit-Learn', 'Pandas'],
    summary:
      'Exploratory data analysis and ML regression models to predict department-level facility satisfaction.',
    metric: 'Predictive regression modeling',
    date: '2024',
    role: 'Data Analyst',
    overview:
      'A data science project analyzing co-working space survey data to understand and predict facility satisfaction across departments. Exploratory data analysis surfaced key drivers, and regression models predicted satisfaction scores from facility and usage features.',
    achievements: [
      'Cleaned and engineered features from multi-department survey data with Pandas.',
      'Built regression models in Scikit-Learn to predict satisfaction scores.',
      'Identified the strongest facility drivers of department-level satisfaction.',
      'Communicated findings through clear analytical visualizations.',
    ],
    architecture: [
      'Data: survey ingestion and cleaning with Pandas.',
      'Features: encoding and normalization of facility/usage variables.',
      'Modeling: Scikit-Learn regression with cross-validation.',
      'Reporting: visualization of drivers and predictions.',
    ],
  },
  {
    title: 'Dormitory Management Database System',
    placeholder: 'ER Diagram / Database Schema',
    category: 'Backend',
    badges: ['SQL', '3NF Normalization', 'ERD Design'],
    summary:
      'Full relational database schema with automated billing queries and real-time occupancy tracking.',
    metric: 'Automated billing · Occupancy tracking',
    date: '2023',
    role: 'Database Designer',
    overview:
      'A relational database system for dormitory management covering residents, rooms, contracts, and billing. The schema was normalized to 3NF and paired with SQL queries that automate monthly billing and track real-time room occupancy.',
    achievements: [
      'Designed a fully normalized (3NF) relational schema from an ERD.',
      'Automated monthly billing calculations through parameterized SQL queries.',
      'Enabled real-time occupancy tracking across rooms and buildings.',
      'Documented entity relationships and constraints for maintainability.',
    ],
    architecture: [
      'Modeling: ERD covering residents, rooms, contracts, and payments.',
      'Schema: 3NF-normalized tables with referential integrity constraints.',
      'Queries: automated billing and occupancy reporting.',
      'Validation: sample data and query verification.',
    ],
  },
  {
    title: 'Niau — Virtual Lipstick Try-On Web App',
    placeholder: 'Webcam Try-on UI',
    category: 'Web',
    badges: ['Next.js', 'Web Camera API', 'React'],
    summary:
      'Real-time lipstick color simulation web application using the device front camera.',
    metric: 'Live front-camera color simulation',
    date: '2024',
    role: 'Front-end Developer',
    link: '#',
    overview:
      'A browser-based virtual try-on app that uses the device front camera to render lipstick colors on the user in real time. Built with Next.js and the Web Camera API, it detects lip regions and overlays selectable shades live.',
    achievements: [
      'Implemented real-time front-camera capture with the Web Camera API.',
      'Rendered live lipstick color overlays on the detected lip region.',
      'Built a responsive shade-selection UI in React.',
      'Optimized rendering for smooth in-browser performance.',
    ],
    architecture: [
      'Capture: Web Camera API video stream.',
      'Detection: lip-region tracking per frame.',
      'Rendering: canvas overlay blending selected shades.',
      'UI: Next.js/React shade picker and controls.',
    ],
  },
]

export type TimelineItem = {
  org: string
  role: string
  period: string
  detail: string
}

export const timeline: TimelineItem[] = [
  {
    org: 'Toyota Tsusho Nexty Electronics',
    role: 'Software Engineering Intern',
    period: 'Nov 2025 – Mar 2026',
    detail:
      'Developed a Flutter + ESP32 Bluetooth telemetry system with 256-bit fault-code decoding and OTA firmware updates.',
  },
  {
    org: 'CP AXTRA (Lotus\u2019s)',
    role: 'Product Management Intern',
    period: 'Apr – Jun 2025',
    detail:
      "Drove product initiatives across Lotus's Shopping App, In-store Picking Tool, and Rider App; analyzed 14.5M THB downtime impact.",
  },
  {
    org: 'King Mongkut\u2019s Institute of Technology Ladkrabang (KMITL)',
    role: 'Dual Degree — B.Eng IoT & B.Sc. Industrial Physics',
    period: 'Graduating April 2026',
    detail:
      'B.Eng Information & Communication Technology / IoT (GPA 3.22) and B.Sc. Industrial Physics (GPA 3.13).',
  },
]

export const certificates: string[] = [
  'AWS Academy Graduate — Cloud Developing (2025)',
  'My Order Cloud Hero — GCP Cloud & BigQuery (2024)',
  '42 Bangkok — Discovery Piscine Web & Python (2024)',
  'Bangkok Bank Tech Tournament Day 2026',
]

export const metrics = [
  {
    value: '14.5M THB',
    label: 'Analyzed downtime impact during product management internship.',
  },
  {
    value: '+49.03%',
    label: 'Sensor accuracy gain via Extended Kalman Filter (EKF).',
  },
  {
    value: 'Dual Degree',
    label: 'B.Eng IoT (GPA 3.22) & B.Sc. Industrial Physics (GPA 3.13).',
  },
]
