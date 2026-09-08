import { ServiceItem, ProjectItem, ValueItem, ImpactStat } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'connect',
    key: 'connect',
    title: {
      en: 'Connect',
      am: 'ኮኔክት'
    },
    subtitle: {
      en: 'Networking & IT Infrastructure',
      am: 'የኔትወርክ እና የአይቲ መሰረተ ልማት'
    },
    description: {
      en: 'Network infrastructure, Wi-Fi, LAN, routers, switches, firewalls and IT solutions.',
      am: 'የኔትወርክ መሰረተ ልማት፣ ዋይ-ፋይ፣ ላን፣ ራውተሮች፣ ስዊቾች፣ ፋየርዎሎች እና የአይቲ መፍትሄዎች።'
    },
    image: '/src/assets/images/service_connect_rack_1788830277535.jpg',
    iconName: 'Network',
    color: '#00f2fe',
    borderColor: 'border-cyan-500/50 hover:border-cyan-400',
    bgGlow: 'from-cyan-500/10 via-blue-500/5 to-transparent',
    features: {
      en: [
        'Enterprise LAN & WAN Architecture',
        'High-density Wi-Fi 6 Deployments',
        'Next-Gen Firewalls & Cyber Defense',
        'Optical Fiber Splicing & Structured Cabling',
        '24/7 Network Monitoring & NOC Support'
      ],
      am: [
        'የድርጅት LAN እና WAN ስነ-ህንፃ',
        'ከፍተኛ ፍጥነት ያለው Wi-Fi 6 ዝርጋታ',
        'ፋየርዎል እና የሳይበር ደህንነት ቁጥጥር',
        'ኦፕቲካል ፋይበር እና የተዋቀረ ገመድ ዝርጋታ',
        'የ24/7 ኔትወርክ ክትትል እና ድጋፍ'
      ]
    }
  },
  {
    id: 'build',
    key: 'build',
    title: {
      en: 'Build',
      am: 'ቢልድ'
    },
    subtitle: {
      en: 'Software & Digital Systems',
      am: 'ሶፍትዌር እና ዲጂታል ሲስተሞች'
    },
    description: {
      en: 'Websites, software, mobile apps, automation and digital systems.',
      am: 'ድረ-ገጾች፣ ሶፍትዌሮች፣ የሞባይል አፖች፣ አውቶሜሽን እና ዘመናዊ ዲጂታል ሲስተሞች።'
    },
    image: '/src/assets/images/service_build_dev_1788830292014.jpg',
    iconName: 'Code',
    color: '#10b981',
    borderColor: 'border-emerald-500/50 hover:border-emerald-400',
    bgGlow: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    features: {
      en: [
        'Custom Web & Mobile Applications',
        'Telebirr, Chapa & CBE Birr Payment Gateways',
        'Enterprise ERP & Business Automation',
        'Cloud Native Architecture & Microservices',
        'Scalable REST & GraphQL APIs'
      ],
      am: [
        'ብጁ ድረ-ገጾች እና የሞባይል አፕሊኬሽኖች',
        'የቴሌብር፣ ቻፓ እና ሲቢኢ ብር የክፍያ ውህደት',
        'የድርጅት ERP እና ቢዝነስ አውቶሜሽን',
        'ክላውድ ሲስተሞች እና ማይክሮሰርቪሶች',
        'አስተማማኝ የኤፒአይ ዝርጋታ'
      ]
    }
  },
  {
    id: 'academy',
    key: 'academy',
    title: {
      en: 'Academy',
      am: 'አካዳሚ'
    },
    subtitle: {
      en: 'Technology & Engineering Training',
      am: 'የቴክኖሎጂ እና ኢንጂነሪንግ ስልጠና'
    },
    description: {
      en: 'Programming, networking, Linux, computer skills and practical training.',
      am: 'ፕሮግራሚንግ፣ ኔትወርኪንግ፣ ሊኑክስ፣ የኮምፒውተር ክህሎቶች እና ተግባራዊ ስልጠናዎች።'
    },
    image: '/src/assets/images/service_academy_tech_1788830307419.jpg',
    iconName: 'GraduationCap',
    color: '#f59e0b',
    borderColor: 'border-amber-500/50 hover:border-amber-400',
    bgGlow: 'from-amber-500/10 via-orange-500/5 to-transparent',
    features: {
      en: [
        'Full-Stack Web Development Bootcamp',
        'Cisco CCNA & Network Engineering Labs',
        'Linux Administration & DevOps Fundamentals',
        'Hands-on Project Based Mentorship',
        'Industry Certification & Career Placement'
      ],
      am: [
        'የፉል-ስታክ ዌብ ዲቨሎፕመንት ስልጠና',
        'የሲስኮ CCNA እና የኔትወርክ ኢንጂነሪንግ ላብራቶሪ',
        'የሊኑክስ አስተዳደር እና ዴቭኦፕስ መሰረቶች',
        'ተግባራዊ ፕሮጀክት ላይ ያተኮረ ስልጠና',
        'የምስክር ወረቀት እና የስራ እድል ድጋፍ'
      ]
    }
  },
  {
    id: 'labs',
    key: 'labs',
    title: {
      en: 'Labs',
      am: 'ላብስ'
    },
    subtitle: {
      en: 'Innovation & Digital Products',
      am: 'ፈጠራ እና አዳዲስ ዲጂታል ምርቶች'
    },
    description: {
      en: 'Turning Ethiopian problems into technology products.',
      am: 'የኢትዮጵያን ተግዳሮቶች ወደ አዳዲስ የቴክኖሎጂ ምርቶች እና መፍትሄዎች መለወጥ።'
    },
    image: '/src/assets/images/service_labs_bulb_1788830327538.jpg',
    iconName: 'FlaskConical',
    color: '#a855f7',
    borderColor: 'border-purple-500/50 hover:border-purple-400',
    bgGlow: 'from-purple-500/10 via-indigo-500/5 to-transparent',
    features: {
      en: [
        'Agritech & Farmer Marketplace Systems',
        'AI Models for Ethiopic NLP & Speech',
        'Smart Mobility & Transit Routing Labs',
        'Civic Tech & Public Sector Innovation',
        'Incubation for Early-stage Tech Founders'
      ],
      am: [
        'የግብርና ቴክኖሎጂ እና የአርሶ አደር ገበያ ሲስተሞች',
        'ለአማርኛ ቋንቋ የሰለጠኑ አርቴፊሻል ኢንተለጀንስ ሞዴሎች',
        'ዘመናዊ የትራንስፖርት እና እንቅስቃሴ መፍትሄዎች',
        'ህዝባዊ አገልግሎቶችን የሚያቀላጥፉ ቴክኖሎጂዎች',
        'አዳዲስ የፈጠራ ባለቤቶችን ማብቃት'
      ]
    }
  }
];

export const valuesData: ValueItem[] = [
  {
    id: 'innovation',
    title: {
      en: 'Innovation',
      am: 'ፈጠራ'
    },
    description: {
      en: 'Turning ideas into real solutions.',
      am: 'ሀሳቦችን ወደ እውነተኛ እና ተግባራዊ መፍትሄዎች መለወጥ።'
    },
    icon: 'Lightbulb',
    color: 'text-cyan-400'
  },
  {
    id: 'collaboration',
    title: {
      en: 'Collaboration',
      am: 'ትብብር'
    },
    description: {
      en: 'Growing together with our community.',
      am: 'ከማህበረሰባችን ጋር በጋራ ማደግ እና መጎልበት።'
    },
    icon: 'Users',
    color: 'text-amber-400'
  },
  {
    id: 'impact',
    title: {
      en: 'Impact',
      am: 'ተፅዕኖ'
    },
    description: {
      en: 'Technology for a better tomorrow.',
      am: 'ቴክኖሎጂ ለተሻለች እና ብሩህ ነገ።'
    },
    icon: 'Target',
    color: 'text-emerald-400'
  },
  {
    id: 'ethiopia',
    title: {
      en: 'Ethiopia',
      am: 'ኢትዮጵያ'
    },
    description: {
      en: 'Building our digital future.',
      am: 'የዲጂታል የወደፊት እጣ ፈንታችንን እውን ማድረግ።'
    },
    icon: 'Sprout',
    color: 'text-emerald-400'
  }
];

export const impactStatsData: ImpactStat[] = [
  {
    id: 'divisions',
    value: '4',
    label: {
      en: 'Core Tech Divisions',
      am: 'ዋና የቴክኖሎጂ ዘርፎች'
    },
    icon: 'Layers',
    color: '#00f2fe'
  },
  {
    id: 'reliability',
    value: '99.9%',
    label: {
      en: 'Reliability & Uptime',
      am: 'አስተማማኝነትና ቀጣይነት'
    },
    icon: 'ShieldCheck',
    color: '#10b981'
  },
  {
    id: 'technologies',
    value: '10+',
    label: {
      en: 'Modern Stacks & Cloud',
      am: 'ዘመናዊ የቴክኖሎጂ ቁልል'
    },
    icon: 'Cpu',
    color: '#f59e0b'
  },
  {
    id: 'commitment',
    value: '100%',
    label: {
      en: 'Ethiopian-Led Innovation',
      am: 'በኢትዮጵያውያን የሚመራ ፈጠራ'
    },
    icon: 'HeartHandshake',
    color: '#c084fc'
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'smartclass-edutrack',
    name: {
      en: 'SmartClass / EduTrack',
      am: 'ስማርት ክላስ / ኤዱትራክ'
    },
    category: {
      en: 'Student Management System',
      am: 'የትምህርት እና የተማሪዎች አስተዳደር ሲስተም'
    },
    shortDescription: {
      en: 'Comprehensive digital school portal for student records, attendance tracking, grades, and parent-teacher communication.',
      am: 'የተማሪዎች መረጃ፣ የክፍል መገኘት፣ የውጤት ካርድ እና የወላጅ-መምህር ግንኙነትን የሚያስተዳድር ዘመናዊ የትምህርት ቤት ፖርታል'
    },
    fullDescription: {
      en: 'EduTrack Pro / SmartClass streamlines school operations across primary and secondary institutions in Ethiopia. It automates report cards, sends instant SMS notifications to guardians, tracks fees, and provides interactive analytics dashboards for school administrators.',
      am: 'ኤዱትራክ ፕሮ በመላ ኢትዮጵያ ለሚገኙ ትምህርት ቤቶች የተዘጋጀ ሁሉን-አቀፍ የዲጂታል አስተዳደር ሲስተም ነው። የወላጆችን የኤስኤምኤስ ማሳወቂያ፣ የፈተና ውጤት ስሌት እና የትምህርት ጥራት ክትትልን ያቀላጥፋል።'
    },
    screenshot: 'smartclass',
    tags: ['React', 'Node.js', 'PostgreSQL', 'SMS Gateway'],
    accentColor: '#38bdf8',
    features: {
      en: [
        'Automated Grade Calculations & PDF Report Cards',
        'Real-time Daily Attendance with Guardian SMS alerts',
        'Tuition fee ledger & Telebirr payment reconciliation',
        'Offline-first sync for areas with sporadic connectivity'
      ],
      am: [
        'አውቶማቲክ የውጤት ስሌት እና የፒዲኤፍ ሪፖርት ካርድ',
        'የዕለት ተዕለት የተማሪዎች መገኘት ክትትል እና የኤስኤምኤስ መልዕክት',
        'የትምህርት ቤት ክፍያዎች በቴሌብር ማስተናገጃ',
        'ኔትወርክ ባልተሟላባቸው አካባቢዎች ያለ ኢንተርኔት የሚሰራ'
      ]
    },
    impactMetric: {
      en: 'Adopted by 12+ Schools & 8,500+ Students',
      am: 'በ12+ ትምህርት ቤቶች እና ከ8,500 በላይ ተማሪዎች ጥቅም ላይ ውሏል'
    },
    liveDemoUrl: 'https://smartclass.mengedtech.et',
    githubUrl: 'https://github.com/mengedtech/smartclass-edutrack'
  },
  {
    id: 'digital-ceremony',
    name: {
      en: 'Digital Ceremony',
      am: 'ዲጂታል ሴሬሞኒ'
    },
    category: {
      en: 'Wishing & Memory Platform',
      am: 'የምርቃትና የሰርግ ዲጂታል መድረክ'
    },
    shortDescription: {
      en: 'Digital invitation, interactive guest wishing wall, monetary gift registry, and eternal memories for Ethiopian celebrations.',
      am: 'ለሰርጎች፣ ለምረቃዎች እና ለበዓላት የተዘጋጀ ዲጂታል የግብዣ፣ የምኞት መግለጫ እና የስጦታ ማስተላለፊያ መድረክ።'
    },
    fullDescription: {
      en: 'Digital Ceremony redefines traditional Ethiopian celebratory events. Guests from around the world can view curated wedding timelines, send video and audio blessings, contribute monetary gifts directly through local & diaspora banking channels, and explore high-res celebration galleries.',
      am: 'ዲጂታል ሴሬሞኒ ባህላዊ የኢትዮጵያ በዓላትን እና ሰርጎችን ያዘምናል፤ በውጭ አገር የሚኖሩ ቤተሰቦች እና ወዳጆች በቪዲዮ፣ በድምጽ እና በቴሌብር ስጦታዎቻቸውን በቅጽበት እንዲያደርሱ ያስችላል።'
    },
    screenshot: 'ceremony',
    tags: ['Next.js', 'Tailwind', 'Cloud Firestore', 'Chapa Pay'],
    accentColor: '#ec4899',
    features: {
      en: [
        'Personalized QR-coded digital wedding & graduation cards',
        'Interactive live wishing wall with diaspora gift transfers',
        'Photo & video guestbook memory vault with cloud preservation',
        'Bilingual English and Amharic typography customization'
      ],
      am: [
        'ለግል የተበጁ የQR ኮድ ዲጂታል የግብዣ ካርዶች',
        'በቀጥታ ስጦታዎችን እና ምኞቶችን የማስተላለፊያ ገጽ',
        'የፎቶ እና ቪዲዮ አልበም የዘላቂ ማስታወሻ ማህደር',
        'በአማርኛ እና በእንግሊዝኛ የተዋቡ ንድፎች'
      ]
    },
    impactMetric: {
      en: '500+ Ceremonies Hosted with 45k+ Wishes Sent',
      am: 'ከ500 በላይ ዝግጅቶች እና ከ45ሺህ በላይ መልካም ምኞቶች ተላልፈዋል'
    },
    liveDemoUrl: 'https://ceremony.mengedtech.et',
    githubUrl: 'https://github.com/mengedtech/digital-ceremony'
  },
  {
    id: 'rome-1960-cafe',
    name: {
      en: 'ROME 1960 CAFE',
      am: 'ሮማ 1960 ካፌ'
    },
    category: {
      en: 'Digital Menu & Ordering System',
      am: 'የካፌ እና ሬስቶራንት ዲጂታል ሜኑ'
    },
    shortDescription: {
      en: 'Touchless QR-code digital dining menu, table-side self-ordering, barista kitchen display system, and bill splitting.',
      am: 'በQR ኮድ የሚቃኝ ፈጣን ዲጂታል ሜኑ፣ ከጠረጴዛ ላይ በቀጥታ የማዘዣ እና የክፍያ ሲስተም።'
    },
    fullDescription: {
      en: 'Custom-designed for premier cafes and dining establishments in Addis Ababa. Diners scan high-aesthetic NFC/QR tokens at their tables to explore gourmet roasts, pastries, and Italian-Ethiopian cuisine with nutritional labels, real-time wait times, and direct kitchen routing.',
      am: 'ለአዲስ አበባ ታዋቂ ካፌዎችና ሬስቶራንቶች የተሰራ ዘመናዊ ሲስተም ነው። ደንበኞች ጠረጴዛቸው ላይ ያለውን የQR ኮድ በመቃኘት ትዕዛዛቸውን በቀጥታ ወደ ባሪስታ እና ማብሰያ ክፍል እንዲደርስ ያደርጋሉ።'
    },
    screenshot: 'rome-cafe',
    tags: ['React', 'Express', 'WebSockets', 'Telebirr QR'],
    accentColor: '#f97316',
    features: {
      en: [
        'Zero-app download QR interactive menu with live photos',
        'Real-time kitchen order dispatch & barista workflow screen',
        'Digital bill generation with tips and Telebirr split payment',
        'Menu item availability toggles and price synchronization'
      ],
      am: [
        'መተግበሪያ ሳያወርዱ በስልክ በቀጥታ የሚከፈት ማራኪ ሜኑ',
        'ትዕዛዙን ወዲያውኑ ወደ ኩሽና የማስተላለፍ ቴክኖሎጂ',
        'ሂሳብ በቴሌብር እና በካርድ የመክፈያ ዘዴ',
        'የዋጋ እና የምግብ ዝርዝርን በቅጽበት የማስተካከል ችሎታ'
      ]
    },
    impactMetric: {
      en: '95,000+ Orders Processed with 35% Faster Table Turnover',
      am: 'ከ95,000 በላይ ትዕዛዞች የተስተናገዱበት'
    },
    liveDemoUrl: 'https://rome1960.mengedtech.et',
    githubUrl: 'https://github.com/mengedtech/rome-1960-cafe'
  },
  {
    id: 'transport-management',
    name: {
      en: 'Transport Management',
      am: 'የትራንስፖርት ማኔጅመንት'
    },
    category: {
      en: 'Vehicle & Fleet Telematics System',
      am: 'የተሽከርካሪ እና የበረራ ቁጥጥር ሲስተም'
    },
    shortDescription: {
      en: 'Real-time GPS fleet tracking, automated route dispatching, fuel consumption telemetry, and driver safety scoring.',
      am: 'በጂፒኤስ (GPS) የታገዘ የቀጥታ ተሽከርካሪ ክትትል፣ የነዳጅ ቁጥጥር እና የጭነት እንቅስቃሴ አስተዳደር።'
    },
    fullDescription: {
      en: 'A high-res logistics infrastructure suite purpose-built for Ethiopian freight, commercial transport, and corporate shuttle services. Provides map-based asset positioning along the Djibouti-Addis corridor, geofencing alarms, preventative maintenance alerts, and speed telemetry.',
      am: 'በአዲስ አበባ እና በክልል አውራ ጎዳናዎች ለሚንቀሳቀሱ የጭነት እና የህዝብ ትራንስፖርቶች የተሰራ ዘመናዊ የቴሌማቲክስ ሲስተም። የፍጥነት፣ የነዳጅ እና የመንገድ ደህንነትን በካርታ ላይ ያሳያል።'
    },
    screenshot: 'transport',
    tags: ['IoT', 'Python', 'Leaflet', 'TimescaleDB'],
    accentColor: '#3b82f6',
    features: {
      en: [
        'Live GPS fleet telemetry on interactive offline-cached maps',
        'Fuel level ultrasonic sensors & geofence perimeter alerts',
        'Driver behavior analysis (braking, speeding, idle hours)',
        'Automated trip manifests and maintenance scheduling'
      ],
      am: [
        'በካርታ ላይ የቀጥታ የጂፒኤስ እንቅስቃሴ ክትትል',
        'የነዳጅ ፍጆታ እና የተከለከለ ክልል ጥሰት ማንቂያ',
        'የአሽከርካሪዎች የጥንቃቄ እና የፍጥነት ምዘና',
        'የጥገና እና የጉዞ መረጃ አውቶማቲክ ሪፖርት'
      ]
    },
    impactMetric: {
      en: 'Tracking 320+ Active Fleet Vehicles Across East Africa',
      am: 'ከ320 በላይ የንግድ ተሽከርካሪዎችን በየቀኑ ይከታተላል'
    },
    liveDemoUrl: 'https://fleet.mengedtech.et',
    githubUrl: 'https://github.com/mengedtech/transport-management'
  },
  {
    id: 'ethio-exam-prep',
    name: {
      en: 'Ethio Exam Prep',
      am: 'ኢትዮ ኤግዛም ፕሬፕ'
    },
    category: {
      en: 'Grade 12 Exam Practice System',
      am: 'የ12ኛ ክፍል ብሄራዊ ፈተና መለማመጃ'
    },
    shortDescription: {
      en: 'Interactive national university entrance examination simulator with past matric papers, timed mocks, and deep explanations.',
      am: 'የ12ኛ ክፍል የዩኒቨርሲቲ መግቢያ ብሔራዊ ፈተናዎችን በጊዜ ገደብ ለመለማመድ የተዘጋጀ ዘመናዊ የፈተና መድረክ።'
    },
    fullDescription: {
      en: 'Ethio Exam Prep levels the playing field for high school scholars across all Ethiopian regions. Features 10+ years of solved national exams in Natural and Social science streams, step-by-step conceptual walkthroughs, subject performance diagnostics, and offline practice modes.',
      am: 'የተማሪዎችን የፈተና ዝግጁነት ከፍ ለማድረግ ያለፉ የ10 ዓመታት ብሔራዊ ፈተናዎችን፣ የተብራሩ መልሶችን እና የተማሪዎችን ድክመትና ጥንካሬ የሚተነትኑ ስታቲስቲክሶችን ያካተተ ነው።'
    },
    screenshot: 'exam',
    tags: ['React', 'TypeScript', 'PWA Offline', 'IndexedDB'],
    accentColor: '#22c55e',
    features: {
      en: [
        'Official 10-year matriculation past questions with explanations',
        'Timed exam simulation mimicking national testing conditions',
        'Subject-by-subject weakness diagnostics & suggested revisions',
        '100% offline functionality after first download on low-end phones'
      ],
      am: [
        'የ10 ዓመታት የፈተና ጥያቄዎች ከተብራሩ መልሶች ጋር',
        'ትክክለኛውን የፈተና ሰዓት የሚመስል የልምምድ ሰዓት ቆጣሪ',
        'የእያንዳንዱን የትምህርት አይነት ውጤት የሚተነትን መረጃ',
        'አንዴ ከተጫነ በኋላ ያለ ኢንተርኔት በየትኛውም ስልክ የሚሰራ'
      ]
    },
    impactMetric: {
      en: '28,000+ Active Students & 1.2M+ Questions Answered',
      am: 'ከ28,000 በላይ ተማሪዎች እና 1.2 ሚሊዮን ጥያቄዎች ተሰርተዋል'
    },
    liveDemoUrl: 'https://examprep.mengedtech.et',
    githubUrl: 'https://github.com/mengedtech/ethio-exam-prep'
  },
  {
    id: 'local-market',
    name: {
      en: 'Local Market',
      am: 'ሎካል ማርኬት'
    },
    category: {
      en: 'Community Marketplace Platform',
      am: 'የማህበረሰብ የገበያ መድረክ'
    },
    shortDescription: {
      en: 'Connecting local producers, artisans, farmers, and neighborhood shops directly to consumers with zero intermediary markup.',
      am: 'አምራቾችን፣ የሀገር ውስጥ እደ-ጥበብ ባለሙያዎችን እና ነጋዴዎችን በቀጥታ ከሸማቾች ጋር የሚያገናኝ ዲጂታል የገበያ አውታር።'
    },
    fullDescription: {
      en: 'Local Market empowers micro-merchants and urban consumers by digitizing local supply chains. With localized Amharic voice search, escrow delivery checkpoints, Telebirr integration, and merchant micro-storefronts, local trade thrives in the digital age.',
      am: 'አነስተኛ ነጋዴዎችን እና ገዢዎችን ያገናኛል፤ በቴሌብር እና በኢትዮጵያ ንግድ ባንክ ክፍያዎችን በቀላሉ በመቀበል ጥራት ያላቸው የሀገር ውስጥ ምርቶች ለተጠቃሚዎች እንዲደርሱ ያደርጋል።'
    },
    screenshot: 'market',
    tags: ['Mobile PWA', 'Node.js', 'Telebirr', 'PostGIS'],
    accentColor: '#eab308',
    features: {
      en: [
        'Hyperlocal vendor discovery based on proximity in Addis Ababa',
        'Voice-guided search in Amharic, Oromo, and English',
        'Built-in merchant ledger & automated order fulfillment',
        'Integrated Telebirr & CBE Birr seamless checkout'
      ],
      am: [
        'በአቅራቢያ የሚገኙ ሱቆችን እና አምራቾችን በካርታ ማፈላለጊያ',
        'በአማርኛ፣ በኦሮምኛ እና በእንግሊዝኛ የድምጽ ፍለጋ',
        'ቀላል የንግድ መዝገብ እና የትዕዛዝ አስተዳደር',
        'ከቴሌብር እና ከኢትዮጵያ ንግድ ባንክ ጋር በቀጥታ የተገናኘ'
      ]
    },
    impactMetric: {
      en: '1,400+ Verified Merchants & 60,000+ Transactions',
      am: 'ከ1,400 በላይ ነጋዴዎች እና ከ60ሺህ በላይ ግብይቶች'
    },
    liveDemoUrl: 'https://market.mengedtech.et',
    githubUrl: 'https://github.com/mengedtech/local-market'
  }
];
