export type Project = {
  title: string
  placeholder: string
  category: string
  badges: string[]
  summary: string
  metric: string
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
  },
  {
    title: 'ESP32 & Flutter Bluetooth Telemetry System',
    placeholder: 'Mobile App & Hardware',
    category: 'Embedded',
    badges: ['Flutter', 'ESP32', 'Bluetooth Classic', 'OTA Update'],
    summary:
      'Built for Toyota Tsusho Nexty. Real-time telemetry with 256-bit fault-code decoding and over-the-air firmware updating.',
    metric: 'Real-time telemetry · OTA firmware',
  },
  {
    title: 'CP AXTRA Product Management Initiatives',
    placeholder: 'PRD & App Design',
    category: 'Product',
    badges: ['Product Management', 'PRD', 'User Flow', 'Agile'],
    summary:
      "Lotus's Shopping App, In-store Picking Tool, and Rider App. Proposed features across the retail operations stack.",
    metric: 'Targeting 20% picking cycle time reduction',
  },
  {
    title: 'Co-Working Space Satisfaction Analytics',
    placeholder: 'Data Analytics Dashboard',
    category: 'Data',
    badges: ['Python', 'Machine Learning', 'Scikit-Learn', 'Pandas'],
    summary:
      'Exploratory data analysis and ML regression models to predict department-level facility satisfaction.',
    metric: 'Predictive regression modeling',
  },
  {
    title: 'Dormitory Management Database System',
    placeholder: 'ER Diagram / Database Schema',
    category: 'Backend',
    badges: ['SQL', '3NF Normalization', 'ERD Design'],
    summary:
      'Full relational database schema with automated billing queries and real-time occupancy tracking.',
    metric: 'Automated billing · Occupancy tracking',
  },
  {
    title: 'Niau — Virtual Lipstick Try-On Web App',
    placeholder: 'Webcam Try-on UI',
    category: 'Web',
    badges: ['Next.js', 'Web Camera API', 'React'],
    summary:
      'Real-time lipstick color simulation web application using the device front camera.',
    metric: 'Live front-camera color simulation',
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
