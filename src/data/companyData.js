// Central Data Architecture for METRISYS Global Operations & Technology Ecosystem
// Authoritative data extracted from official METRISYS Company Profile

export const GLOBAL_REGIONS = [
  {
    id: 'pakistan-lahore',
    name: 'Pakistan (Lahore)',
    slug: 'pk',
    code: 'PK',
    flag: '🇵🇰',
    hubs: ['Lahore (Shamim Building, Jail Road)'],
    address: 'Shamim Building, Office 1A, 2nd Floor, Jail Road, Lahore, Pakistan',
    phone: '+92 301 4059575',
    email: 'nasir.hashmi@alwathiqservices.com',
    stats: { projects: 84, infrastructureCoverage: 'Urban & Education Infrastructure', activeSites: 120 },
    highlights: ['Centaurus Mall Systems Integration', 'Government College University Video Analytics', 'Jinnah Sindh Medical University Security']
  },
  {
    id: 'pakistan-ryk',
    name: 'Pakistan (Rahim Yar Khan)',
    slug: 'pk-ryk',
    code: 'PK',
    flag: '🇵🇰',
    hubs: ['Rahim Yar Khan (Abu-Dhabi Road)'],
    address: 'United Commercial Center, Abu-Dhabi Road, Opposite KFUEIT University, Rahim Yar Khan, Pakistan',
    phone: '+92 301 4059575',
    email: 'nasir.hashmi@alwathiqservices.com',
    stats: { projects: 45, infrastructureCoverage: 'Regional University & Commercial Infrastructure', activeSites: 60 },
    highlights: ['KFUEIT University Network & AI Surveillance', 'Regional Commercial Security Deployment']
  },
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    slug: 'uae',
    code: 'AE',
    flag: '🇦🇪',
    hubs: ['Dubai (Deira Hub)'],
    address: 'Office No. 4, Nesto Building, Muteena Road, Deira, Dubai, UAE',
    phone: '+971 4 380 9100',
    email: 'nasir.hashmi@alwathiqservices.com',
    stats: { projects: 195, infrastructureCoverage: 'Commercial & Hospitality Infrastructure', activeSites: 310 },
    highlights: ['Ibn Battuta Mall Integrated Systems', 'Deyaar Properties Access Control', 'Asteco Real Estate Facilities']
  },
  {
    id: 'saudi-arabia',
    name: 'Saudi Arabia',
    slug: 'saudi-arabia',
    code: 'SA',
    flag: '🇸🇦',
    hubs: ['Jeddah (Abi Abdulla Building)'],
    address: 'Office No. 26 & 28, 4th Floor, Abi Abdulla Building, Bin Laden Street, Al Rawabi, Jeddah, Saudi Arabia',
    phone: '+966 11 490 2200',
    email: 'nasir.hashmi@alwathiqservices.com',
    stats: { projects: 142, infrastructureCoverage: 'Commercial & Multi-Tenant Facilities', activeSites: 210 },
    highlights: ['Aries Tower Commercial Automation', 'Commercial Complex ANPR & Access Control']
  },
  {
    id: 'oman',
    name: 'Oman',
    slug: 'oman',
    code: 'OM',
    flag: '🇴🇲',
    hubs: ['Muscat (Majan Building, Ghala)'],
    address: 'Office No. 28, Majan Building, Ghala, Muscat, Sultanate of Oman',
    phone: '+968 79291678',
    email: 'nasir.hashmi@alwathiqservices.com',
    stats: { projects: 48, infrastructureCoverage: 'Maritime & Enterprise Operations', activeSites: 65 },
    highlights: ['Sultanate Port ANPR & Logistics Hub', 'Muscat Commercial Building Control']
  },
  {
    id: 'portugal',
    name: 'Portugal',
    slug: 'portugal',
    code: 'PT',
    flag: '🇵🇹',
    hubs: ['Lisbon (Rua Santa Marta)'],
    address: 'Rua Santa Marta 43 EF 3 D 1150-293 Lisbon, Portugal (NIF: 515518425)',
    phone: '+351 21 092 8500',
    email: 'nasir.hashmi@alwathiqservices.com',
    stats: { projects: 35, infrastructureCoverage: 'EU Tech & Commercial Infrastructure', activeSites: 50 },
    highlights: ['Lisbon Tech Center Smart Systems', 'European Facilities Management']
  }
];

export const TECHNOLOGY_SOLUTIONS = [
  {
    id: 'cctv-analytics',
    title: 'CCTV & Video Analytics',
    shortDesc: 'Convert existing CCTV into self-learning AI video analytics apart from brand restrictions.',
    fullDesc: 'METRISYS converts existing CCTV networks into self-learning AI surveillance systems. Single-node and multi-node AI deployments analyze normal behavior and deliver real-time event tagging.',
    capabilities: [
      'Face Detection & Recognition',
      'Human & Intrusion Detection',
      'Loitering & Line Crossing',
      'Object Left Behind / Removal',
      'Fire & Smoke Detection',
      'PPE & Mask Detection'
    ],
    image: '/images/ai_control.jpg'
  },
  {
    id: 'access-control',
    title: 'Access Control & Security',
    shortDesc: 'FaceMe Security facial recognition, optical turnstiles, and door/lift access management.',
    fullDesc: 'Integrated biometric access control with face data verification, floor stand readers, vehicle terminals, and turnstile channel integration connected to central admin software.',
    capabilities: [
      'Facial Recognition Terminals',
      'Turnstile & Speed Gate Channel Sync',
      'Lift & Door Access Control',
      'Time & Attendance Tracking',
      'Visitor Management (i-Vizit)',
      'Guard Patrol Telemetry'
    ],
    image: '/images/security.jpg'
  },
  {
    id: 'traffic-management',
    title: 'Smart Traffic Management',
    shortDesc: 'Vehicle detection, ANPR, speed estimation, and intelligent traffic violation monitoring.',
    fullDesc: 'AI-powered traffic surveillance, vehicle classification, wrong-way detection, speed estimation, and ANPR license plate logging for municipal and highway infrastructure.',
    capabilities: [
      'ANPR / LPR License Plate Recognition',
      'Traffic Monitoring & Vehicle Counting',
      'Speed Estimation & Classification',
      'Illegal Parking & Wrong-Way Alerts',
      'Traffic Violation Detection',
      'Smart Heat Maps & Intelligence'
    ],
    image: '/images/parking.jpg'
  },
  {
    id: 'iot-cloud',
    title: 'IoT & Cloud Integration',
    shortDesc: 'AIoT platforms connecting tenants, security, commerce, and equipment automation.',
    fullDesc: 'Unified digital transformation bridging TimeTec Tenant, i-Account, i-Vizit, Guard Patrol, and TimeTec Epicamera into a synchronized building management ecosystem.',
    capabilities: [
      'AIoT Multi-Node Architecture',
      'Tenant Management Integration',
      'Property Accounting (i-Account)',
      'Near Field Commerce (i-Ad)',
      'Cloud Data Admin Software',
      'Facility Maintenance Automation'
    ],
    image: '/images/integration.jpg'
  },
  {
    id: 'data-ai-insights',
    title: 'Data Analytics & AI Insights',
    shortDesc: 'Self-learning behavior normalization, custom dashboards, and real-time incident reports.',
    fullDesc: 'Algorithmic all-in-one machines processing live HD Camera, DVR, and NVR video sources to output smart heat maps, occupancy metrics, and operational dashboards.',
    capabilities: [
      'Behavior Normalization Engine',
      'Smart Heat Maps & Business Intelligence',
      'AI Video Search & Smart Playback',
      'Custom Analytics Dashboard',
      'Real-Time Event Alerts',
      'Suspicious Activity Detection'
    ],
    image: '/images/flagship_project.jpg'
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure & Networking',
    shortDesc: 'Structured network cabling, rack servers, switch matrices, and high-speed data backbones.',
    fullDesc: 'Enterprise-grade networking and physical infrastructure deployment backed by global partners including Cisco, APC, Avaya, Eaton, and Siemens.',
    capabilities: [
      'Enterprise Network Racks',
      'Structured Cabling Systems',
      'High-Speed Switching Matrices',
      'Data Center Power & Protection (APC)',
      'Telecommunications (Avaya / Yeastar)',
      'Fiber Optic Networks (Guangxiang)'
    ],
    image: '/images/integration.jpg'
  },
  {
    id: 'smart-city',
    title: 'Smart City Solutions',
    shortDesc: 'City-scale surveillance, connected public infrastructure, and unified command centers.',
    fullDesc: 'Empowering businesses, communities, and cities with intelligent IoT solutions, safe city video walls, and public safety infrastructure.',
    capabilities: [
      'City-Scale Smart Surveillance',
      'Intelligent Traffic Intersections',
      'Public Facility Security',
      'Unified City Command Dashboard',
      'Sustainable Building Automation',
      'Environmental Sensor Networks'
    ],
    image: '/images/hero.jpg'
  },
  {
    id: 'smart-home',
    title: 'Smart Home Technology',
    shortDesc: 'KNX open automation, glass touch panels, climate control, and intelligent lighting.',
    fullDesc: 'Transforms residential living by integrating automation, security, energy management, and KNX open standards into flush stone & glass touch switch panels.',
    capabilities: [
      'KNX Open Automation Standard',
      'Flush Glass Touch Switch Panels',
      'Intelligent Lighting & Circadian Scenes',
      'HVAC Climate Control & Air Quality',
      'Motorized Curtains & Shutter Automation',
      'Multi-Room Audio & Video Intercom'
    ],
    image: '/images/smart_building.jpg'
  },
  {
    id: 'video-wall',
    title: 'All-in-One COB Display & Video Wall',
    shortDesc: 'COB LED displays, command room video walls, and HD video conferencing systems.',
    fullDesc: 'Complete visual communication and collaboration solutions for boardrooms and command centers using COB LED displays, low-latency AVoIP, and live CCTV display routing.',
    capabilities: [
      'COB LED Video Wall Displays',
      'Command & Control Center Desktops',
      'HD Video Conferencing Systems',
      'Live CCTV Grid Routing',
      'Interactive Meeting Touch Displays',
      '24/7 Energy-Efficient Displays'
    ],
    image: '/images/av.jpg'
  }
];

export const BRAND_PARTNERS = [
  'HIKVISION', 'Rapiscan Systems', 'Hanwha Vision', 'ANVIZ', 'APC',
  'AVAYA', 'AVIGILON', 'AXIS Communications', 'BOSCH', 'BOSE',
  'CISCO', 'Coopers', 'Dahua Technology', 'EATON', 'Garrett',
  'GARMIN', 'Grandstream', 'Honeywell', 'JBL', 'ZKTeco',
  'COMMAX', 'SIEMENS', 'Simplex', 'Suprema', 'UNV (Uniview)',
  'Yeastar', 'AJAX', 'KNX Automation', 'ITC Audio', 'GVS'
];

export const CLIENT_LOGOS = [
  { name: 'Centaurus Mall', desc: 'Mega Mall, Residencia & Corporate Tower' },
  { name: 'Ibn Battuta Mall', desc: 'Dubai Retail & Commercial Hub' },
  { name: 'Asteco Real Estate', desc: 'Leading Property Management' },
  { name: 'Deyaar Properties', desc: 'Premier Real Estate Dubai' },
  { name: 'OSN (Orbit Showtime Network)', desc: 'Broadcast & Media Center' },
  { name: 'MAG Development', desc: 'Luxury Real Estate UAE' },
  { name: 'Government College University Faisalabad', desc: 'Academic Campus Security' },
  { name: 'King Edward Medical University', desc: 'Medical Campus Infrastructure' },
  { name: 'Jinnah Sindh Medical University', desc: 'Healthcare & Campus Systems' },
  { name: 'University of Kotli AJK', desc: 'Higher Education Campus Network' },
  { name: 'University of Balochistan', desc: 'Regional University CCTV & Security' },
  { name: 'Park View City Islamabad', desc: 'Smart Residential Community' },
  { name: 'Aries Tower', desc: 'Corporate Commercial Tower' },
  { name: 'Qazi Mall', desc: 'Commercial Complex' }
];

export const COMPANY_PROFILE_STATS = {
  headline: 'Securing Today, Powering Tomorrow with Intelligence.',
  tagline: 'Empowering Businesses, Communities & Cities with Intelligent IoT Solutions',
  subtext: 'Building Intelligent • Connected • Secure Communities',
  pillars: [
    { title: 'Innovative Solutions', desc: 'Self-learning AI video analytics and open automation standards.' },
    { title: 'Precise Execution', desc: 'Specialized technical teams delivering full turn-key deployment.' },
    { title: 'Secure Future', desc: 'Scalable, post-project support and ongoing 24/7 technical management.' }
  ]
};

export const ECOSYSTEM_FLOW = [
  { step: '01', title: 'AI & VIDEO INTELLIGENCE', desc: 'Computer vision analysis layer extracting telemetry from real-world visual feeds.' },
  { step: '02', title: 'SECURITY SYSTEMS', desc: 'Enterprise physical access, CCTV monitoring, and multi-tier perimeter protection.' },
  { step: '03', title: 'SMART ENVIRONMENTS', desc: 'HVAC, lighting, occupancy sensors, and adaptive energy management.' },
  { step: '04', title: 'AV & COLLABORATION', desc: 'Command center video walls, interactive dashboards, and executive conference AV.' },
  { step: '05', title: 'PARKING & ANPR', desc: 'Automated vehicle identification, barrier control, and mobility flow telemetry.' },
  { step: '06', title: 'SYSTEMS INTEGRATION', desc: 'The orchestrating software backbone connecting all physical & digital subsystems.' }
];

export const FLAGSHIP_PROJECT = {
  title: 'Global Operations & Mobility Infrastructure Complex',
  badge: 'SELECTED APPLICATION',
  location: 'Jeddah / Dubai International Corridor',
  industry: 'Enterprise Infrastructure & Smart Mobility',
  solutionsUsed: [
    'AI Video Intelligence',
    'ANPR Vehicle Recognition',
    'Integrated Command Center',
    'Building Automation & Energy Control'
  ],
  description: 'A 140,000 m² multi-tower corporate and transportation facility utilizing METRISYS\'s unified systems integration engine. Over 1,200 video analytics streams, 42 automated ANPR access lanes, and centralized HVAC/lighting controls are monitored from a single central video wall environment.',
  image: '/images/flagship_project.jpg'
};

