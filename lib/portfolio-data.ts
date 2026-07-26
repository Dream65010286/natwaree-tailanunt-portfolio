export type CategoryGroup =
  | 'IoT & Embedded Systems'
  | 'Data Science & Analytics'
  | 'Database & Systems Analysis'
  | 'Web & Mobile Applications'

export type Project = {
  title: string
  placeholder: string
  category: string
  group: CategoryGroup
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

export const categoryFilters: Array<{ label: string; value: 'all' | CategoryGroup }> = [
  { label: 'All Categories', value: 'all' },
  { label: 'IoT & Embedded Systems', value: 'IoT & Embedded Systems' },
  { label: 'Data Science & Analytics', value: 'Data Science & Analytics' },
  { label: 'Database & Systems Analysis', value: 'Database & Systems Analysis' },
  { label: 'Web & Mobile Applications', value: 'Web & Mobile Applications' },
]

export const projects: Project[] = [
  {
    title: 'Shuttle Bus Tracking & ETA Prediction System',
    placeholder: 'Bus Dashboard',
    category: 'IoT',
    group: 'IoT & Embedded Systems',
    badges: ['ESP32', 'Extended Kalman Filter', 'Machine Learning', 'MQTT', 'React', 'Leaflet'],
    summary:
      'Combined GPS & IMU sensors to deliver real-time positioning and accurate arrival predictions for campus shuttles.',
    metric: 'Reduced MAE by 55.16% · ETA accuracy 88.52%',
    date: 'Aug 2024 – Feb 2025',
    role: 'IoT & ML Engineer',
    link: '#',
    overview:
      'A senior capstone system that fuses GPS and IMU sensor data through an Extended Kalman Filter to stabilize positioning, then feeds a machine-learning model that predicts campus shuttle arrival times. The dashboard streams live vehicle positions over MQTT to a React front-end rendered on a Leaflet map.',
    achievements: [
      'Reduced mean absolute error (MAE) of positioning by 55.16% using the Extended Kalman Filter.',
      'Achieved 88.52% ETA prediction accuracy across live campus routes.',
      'Built a real-time MQTT pipeline delivering sub-second position updates to the dashboard.',
      'Designed a responsive React + Leaflet dashboard visualizing routes, stops, and live vehicles.',
    ],
    architecture: [
      'Edge: ESP32 + GPS/IMU sensors publishing telemetry over MQTT.',
      'Processing: Extended Kalman Filter for sensor fusion + ML ETA regression model.',
      'Backend: MQTT broker streaming to a Node service.',
      'Front-end: React + Leaflet dashboard with live map and ETA overlays.',
    ],
  },
  {
    title: 'ESP32 & Flutter Bluetooth Telemetry System',
    placeholder: 'Mobile App & Hardware',
    category: 'Embedded',
    group: 'IoT & Embedded Systems',
    badges: ['Flutter', 'ESP32', 'Bluetooth Classic', 'OTA Firmware', '256-bit Decoding'],
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
    title: 'Motorized Christmas Tree System',
    placeholder: 'PLD Logic & Stepper Motor',
    category: 'Digital Logic',
    group: 'IoT & Embedded Systems',
    badges: ['GAL16V8 PLD', 'ULN2003 Driver', 'Stepper Motor', 'WinSim'],
    summary:
      'Digital logic and state-machine design driving a stepper motor through a programmable logic device.',
    metric: 'State-machine driven motor control',
    date: '2023',
    role: 'Digital Systems Designer',
    overview:
      'A digital-logic project that rotates a motorized Christmas tree using a finite state machine implemented on a GAL16V8 programmable logic device. The PLD sequences a ULN2003 driver to step a stepper motor, with logic verified in WinSim before hardware deployment.',
    achievements: [
      'Designed a finite state machine on a GAL16V8 PLD to sequence motor steps.',
      'Drove a stepper motor through a ULN2003 Darlington array driver.',
      'Verified logic and timing in WinSim prior to hardware programming.',
      'Integrated logic and hardware into a working motorized display.',
    ],
    architecture: [
      'Logic: GAL16V8 PLD implementing the stepping state machine.',
      'Driver: ULN2003 array translating logic outputs to coil currents.',
      'Actuator: stepper motor rotating the tree.',
      'Simulation: WinSim verification of state transitions.',
    ],
  },
  {
    title: 'IoT Smart Lighting System',
    placeholder: 'Arduino & Mobile App',
    category: 'IoT',
    group: 'IoT & Embedded Systems',
    badges: ['Arduino', 'NodeMCU', 'NE555 Timer', 'CD4017 Counter', 'Mobile App'],
    summary:
      'Remote LED control and sequential lighting logic combining discrete ICs with a mobile app.',
    metric: 'Remote control · Sequential logic',
    date: '2023',
    role: 'IoT Developer',
    link: '#',
    overview:
      'A smart lighting system that blends classic discrete logic with modern IoT control. An NE555 timer clocks a CD4017 decade counter for sequential LED patterns, while a NodeMCU exposes remote LED control to a companion mobile app.',
    achievements: [
      'Built sequential LED patterns using an NE555 timer and CD4017 counter.',
      'Enabled remote LED control via NodeMCU over Wi-Fi.',
      'Developed a mobile app to toggle and schedule lighting.',
      'Integrated discrete-logic and IoT control into one system.',
    ],
    architecture: [
      'Timing: NE555 astable clock feeding the counter.',
      'Sequencing: CD4017 decade counter driving LED stages.',
      'Connectivity: NodeMCU Wi-Fi endpoint for remote control.',
      'Control: mobile app issuing commands to the NodeMCU.',
    ],
  },
  {
    title: 'Heart Rate Monitor System',
    placeholder: 'Raspberry Pi & Pulse Sensor',
    category: 'Embedded',
    group: 'IoT & Embedded Systems',
    badges: ['Raspberry Pi Zero', 'Pulse Sensor', 'Python', 'Audio Feedback'],
    summary:
      'Real-time pulse processing on a Raspberry Pi Zero with threshold-based audio alerts.',
    metric: 'Real-time processing · Audio alerts',
    date: '2023',
    role: 'Embedded Developer',
    overview:
      'A wearable-style heart rate monitor built on a Raspberry Pi Zero. A pulse sensor feeds a Python processing pipeline that computes beats per minute in real time and triggers audio feedback when readings cross configured thresholds.',
    achievements: [
      'Processed pulse-sensor signals in real time with Python.',
      'Computed live BPM and smoothed noisy sensor readings.',
      'Implemented threshold-based audio alerts for abnormal rates.',
      'Packaged the system on a compact Raspberry Pi Zero.',
    ],
    architecture: [
      'Sensing: pulse sensor sampled by the Raspberry Pi Zero.',
      'Processing: Python signal filtering and BPM computation.',
      'Alerting: threshold logic triggering audio feedback.',
      'Output: speaker/headphone audio cues.',
    ],
  },
  {
    title: 'Co-Working Space & Resource Satisfaction Analytics',
    placeholder: 'Data Analytics Dashboard',
    category: 'Data',
    group: 'Data Science & Analytics',
    badges: ['Python', 'Pandas', 'Scikit-Learn', 'Random Forest', 'Joblib'],
    summary:
      'Survey EDA and ML regression models to predict department-level facility satisfaction, with model serialization.',
    metric: 'Random Forest regression · Serialized models',
    date: '2024',
    role: 'Data Analyst',
    overview:
      'A data science project analyzing co-working space survey data to understand and predict facility and resource satisfaction across departments. Exploratory data analysis surfaced key drivers, and Random Forest regression models predicted satisfaction scores, serialized with Joblib for reuse.',
    achievements: [
      'Performed EDA and feature engineering on multi-department survey data with Pandas.',
      'Built Random Forest regression models in Scikit-Learn to predict satisfaction.',
      'Serialized trained models with Joblib for reproducible inference.',
      'Identified the strongest facility and resource drivers of satisfaction.',
    ],
    architecture: [
      'Data: survey ingestion and cleaning with Pandas.',
      'Features: encoding and normalization of facility/usage variables.',
      'Modeling: Scikit-Learn Random Forest with cross-validation.',
      'Serialization: Joblib model persistence for deployment.',
    ],
  },
  {
    title: 'Dormitory Management Database System',
    placeholder: 'ER Diagram / Database Schema',
    category: 'Database',
    group: 'Database & Systems Analysis',
    badges: ['SQL', 'ERD', '3NF Normalization', 'Complex Queries'],
    summary:
      'Full relational schema with automated billing/reporting queries and real-time occupancy tracking.',
    metric: 'Automated billing · Occupancy tracking',
    date: '2023',
    role: 'Database Designer',
    overview:
      'A relational database system for dormitory management covering residents, rooms, contracts, and billing. The schema was normalized to 3NF from an ERD and paired with complex SQL queries that automate monthly billing, reporting, and real-time room occupancy tracking.',
    achievements: [
      'Designed a fully normalized (3NF) relational schema from an ERD.',
      'Automated monthly billing and reporting through complex SQL queries.',
      'Enabled real-time occupancy tracking across rooms and buildings.',
      'Documented entity relationships and constraints for maintainability.',
    ],
    architecture: [
      'Modeling: ERD covering residents, rooms, contracts, and payments.',
      'Schema: 3NF-normalized tables with referential integrity constraints.',
      'Queries: automated billing, reporting, and occupancy analytics.',
      'Validation: sample data and query verification.',
    ],
  },
  {
    title: 'Veterinary Clinic Management System — Analysis & Design',
    placeholder: 'UML / DFD / ERD Diagrams',
    category: 'Systems Analysis',
    group: 'Database & Systems Analysis',
    badges: ['SDLC', 'UML', 'DFD', 'ERD', 'Use Case', 'Activity & Sequence Diagrams'],
    summary:
      'Complete system specification for a veterinary clinic following the software development lifecycle.',
    metric: 'End-to-end system specification',
    date: '2024',
    role: 'Systems Analyst',
    overview:
      'A full systems analysis and design project specifying a veterinary clinic management system across the SDLC. The deliverables model requirements and behavior through UML — including use case, activity, and sequence diagrams — alongside data flow diagrams and an entity-relationship diagram.',
    achievements: [
      'Followed the SDLC to capture requirements and produce a full specification.',
      'Modeled system behavior with use case, activity, and sequence diagrams.',
      'Mapped data movement with data flow diagrams (DFD).',
      'Designed the data model with an entity-relationship diagram (ERD).',
    ],
    architecture: [
      'Requirements: SDLC-driven elicitation and scoping.',
      'Behavior: UML use case, activity, and sequence diagrams.',
      'Data flow: leveled DFDs of clinic processes.',
      'Data model: ERD of patients, owners, appointments, and billing.',
    ],
  },
  {
    title: 'Mamoo — Temple Finder Chatbot App',
    placeholder: 'Chatbot & Map UI',
    category: 'Web',
    group: 'Web & Mobile Applications',
    badges: ['Node.js', 'Bootstrap', 'HTML/CSS', 'REST API'],
    summary:
      'Cultural discovery app with a temple-finder chatbot and user authentication.',
    metric: 'Cultural discovery · User auth',
    date: '2024',
    role: 'Full-stack Developer',
    link: '#',
    overview:
      'A cultural discovery web app that helps users find and learn about temples through a chatbot interface. Built on Node.js with a Bootstrap front-end, it integrates REST APIs for temple data and includes user authentication for personalized experiences.',
    achievements: [
      'Built a temple-finder chatbot for cultural discovery.',
      'Integrated REST APIs to serve temple information and locations.',
      'Implemented user authentication and session handling.',
      'Delivered a responsive Bootstrap front-end.',
    ],
    architecture: [
      'Front-end: Bootstrap + HTML/CSS responsive UI.',
      'Backend: Node.js server with REST API integration.',
      'Chatbot: conversational temple-finder flow.',
      'Auth: user registration and session management.',
    ],
  },
  {
    title: 'Niau — Virtual Lipstick Try-On Application',
    placeholder: 'Webcam Try-on UI',
    category: 'Web',
    group: 'Web & Mobile Applications',
    badges: ['Next.js', 'Web Camera API', 'Color Overlay', 'React'],
    summary:
      'Real-time lipstick color preview using the device front camera and live color overlay.',
    metric: 'Live front-camera color simulation',
    date: '2024',
    role: 'Front-end Developer',
    link: '#',
    overview:
      'A browser-based virtual try-on app that uses the device front camera to render lipstick colors on the user in real time. Built with Next.js and the Web Camera API, it detects the lip region and overlays selectable shades live.',
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
  {
    title: 'IoT Engineering Department Admission Website',
    placeholder: 'WordPress Admissions Portal',
    category: 'Web',
    group: 'Web & Mobile Applications',
    badges: ['WordPress', 'UX/UI', 'Information Architecture'],
    summary:
      'KMITL admissions portal for the IoT Engineering department with structured information architecture.',
    metric: 'KMITL admissions portal',
    date: '2024',
    role: 'UX/UI & Web Developer',
    link: '#',
    overview:
      'An admissions portal for the IoT Engineering department at KMITL, built on WordPress. The project focused on clear information architecture and UX/UI so prospective students can navigate programs, requirements, and application steps with ease.',
    achievements: [
      'Structured the site information architecture for admissions content.',
      'Designed UX/UI for prospective-student navigation.',
      'Built and configured the portal on WordPress.',
      'Organized program, requirement, and application information clearly.',
    ],
    architecture: [
      'Platform: WordPress CMS.',
      'IA: content hierarchy for programs and admissions.',
      'Design: UX/UI wireframes and page templates.',
      'Delivery: configured pages, menus, and media.',
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
