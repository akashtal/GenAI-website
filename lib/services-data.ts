// Single source of truth for the service landing pages (/services/[slug]).
// Positioning: India-wide + international. Guwahati appears only as the HQ address (footer/schema).
// Each service has an answer-first `summary` – the format AI search engines (Google AI Overviews,
// ChatGPT, Perplexity) extract and quote.

export type IconKey = "globe" | "smartphone" | "code" | "database" | "zap"

export interface ServiceData {
  slug: string
  /** old URLs that 301 to this page */
  legacyPaths: string[]
  name: string
  shortName: string
  icon: IconKey
  metaTitle: string
  metaDescription: string
  keywords: string[]
  badge: string
  headline: string
  headlineAccent: string
  subheadline: string
  summary: string
  description: string
  features: { title: string; description: string }[]
  benefits: string[]
  faqs: { question: string; answer: string }[]
  ctaTitle: string
  ctaDescription: string
  priceFrom?: { amount: number; currency: "INR"; note: string }
  /** Optional override for the features section heading */
  featuresTitle?: string
}

const MARKETS = ["Pan-India", "United Kingdom", "United States", "UAE & Middle East", "Europe", "Australia"]
export const SERVICE_MARKETS = MARKETS

export const SERVICES: ServiceData[] = [
  {
    slug: "web-development",
    legacyPaths: ["/web-development-company-guwahati"],
    name: "Website Development",
    shortName: "Web Development",
    icon: "globe",
    metaTitle: "Web Development Company in India",
    metaDescription:
    "Business websites, e-commerce stores and web apps (Next.js, React, WordPress) for clients in India, Northeast India and abroad. From ₹15,000. Free quote.",
    keywords: [
      "web development company India",
      "website development company",
      "ecommerce website development India",
      "Next.js development company",
      "React development agency",
      "WordPress development India",
      "offshore web development India",
      "web development company for UK clients",
      "website design company India",
      "landing page development",
    ],
    badge: "Web Development Company · India & Worldwide",
    headline: "Websites that load fast,",
    headlineAccent: "rank on Google and win customers",
    subheadline:
      "Business websites, e-commerce stores and custom web apps for companies across India and around the world – with a fixed quote and weekly demos.",
    summary:
      "Gen AI Digital Solutions is an Indian web development company that builds business websites, e-commerce stores and web applications with Next.js, React and WordPress. A business website typically costs ₹15,000–₹50,000 and takes 1–2 weeks; e-commerce and custom web apps start from ₹50,000 and take 3–6 weeks. Every site ships with technical SEO, mobile-first design and post-launch support.",
    description:
      "We design and build custom, high-performance websites using modern technologies like Next.js and React. Whether you need a business website, a full e-commerce platform, a custom web application or a high-converting landing page, we deliver on time and on budget. Our clients range from small businesses and startups across India to growing companies in the United Kingdom, United States and beyond – all managed remotely with weekly progress demos.",
    features: [
      { title: "Custom Business Websites", description: "Professional, fast-loading websites tailored to your brand and built to generate enquiries." },
      { title: "E-Commerce Stores", description: "Online stores with Razorpay/Stripe payments, inventory, order tracking and GST-ready invoicing." },
      { title: "React & Next.js Web Apps", description: "Interactive, server-rendered web applications that are fast, secure and SEO-friendly." },
      { title: "Landing Pages", description: "High-converting landing pages for ad campaigns, product launches and lead generation." },
      { title: "API & Backend Development", description: "Secure REST APIs and server logic with Node.js, Express and cloud databases." },
      { title: "SEO-First Development", description: "Core Web Vitals, structured data, sitemaps and clean semantic HTML from day one." },
      { title: "Industry Websites", description: "Restaurants, hotels, clinics, schools, real estate and professional services – with booking and lead forms." },
      { title: "WordPress & WooCommerce", description: "Custom themes and stores that your team can update without a developer." },
      { title: "Website Redesign", description: "Modernise an outdated site to improve speed, rankings and conversion rate." },
    ],
    benefits: [
      "4+ years of hands-on web development experience",
      "17+ projects delivered for clients in India and abroad",
      "Fixed, transparent pricing agreed before work starts",
      "Mobile-first, responsive design on every device",
      "Technical SEO built in from day one",
      "Weekly demo links so you see progress as it happens",
      "Post-launch maintenance and support",
      "Time-zone friendly collaboration for UK, US & Middle East clients",
    ],
    faqs: [
      {
        question: "How much does website development cost in India?",
        answer:
          "A professional business website typically costs ₹15,000–₹50,000. E-commerce stores and custom web applications start from ₹50,000 and scale with features. International projects are quoted in USD or GBP. You get a fixed quote in writing before any work begins.",
      },
      {
        question: "Do you build websites for clients outside India?",
        answer:
          "Yes. We work with businesses across India – Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata and beyond – and with international clients in the UK, USA, UAE, Europe and Australia. All projects are run remotely with weekly video calls and live demo links.",
      },
      {
        question: "What technologies do you use for web development?",
        answer:
          "We build with Next.js, React, TypeScript, Node.js, MongoDB, PostgreSQL, Tailwind CSS and WordPress/WooCommerce, choosing the stack that best fits your budget, content needs and growth plans.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A standard business website takes 1–2 weeks. E-commerce stores and custom web apps usually take 3–6 weeks depending on features. You get a timeline with milestones before we start.",
      },
      {
        question: "Will my website be SEO-optimised?",
        answer:
          "Yes. Every website includes technical SEO: unique meta tags, structured data (schema.org), XML sitemap, fast Core Web Vitals, mobile responsiveness and clean semantic HTML, so Google and AI search engines can understand your business.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. We redesign existing websites to improve speed, design, search rankings and conversion rate, and we migrate your content and set up redirects so you keep your existing Google rankings.",
      },
    ],
    ctaTitle: "Ready to build a website that brings in customers?",
    ctaDescription: "Get a free consultation and a fixed project quote within 24 hours – wherever your business is based.",
    priceFrom: { amount: 15000, currency: "INR", note: "Business websites from ₹15,000" },
  },
  {
    slug: "mobile-app-development",
    legacyPaths: ["/mobile-app-development-guwahati"],
    name: "Mobile App Development",
    shortName: "Mobile Apps",
    icon: "smartphone",
    metaTitle: "App Development Company in India",
    metaDescription:
    "Android & iOS apps built with React Native and Flutter for startups and businesses in India and worldwide. Apps from ₹50,000. Free consultation.",
    keywords: [
      "mobile app development company India",
      "android app development company",
      "iOS app development India",
      "React Native app development company",
      "Flutter app development India",
      "ecommerce app development",
      "food delivery app development",
      "offshore mobile app development India",
      "app development company for startups",
      "app developers India for UK clients",
    ],
    badge: "Mobile App Development · India & Worldwide",
    headline: "Android & iOS apps",
    headlineAccent: "your customers actually use",
    subheadline:
      "Cross-platform apps built with React Native and Flutter for startups and growing businesses in India and around the world – from idea to App Store.",
    summary:
      "Gen AI Digital Solutions is an Indian mobile app development company that builds Android and iOS apps from a single React Native or Flutter codebase. A simple app with 5–10 screens typically costs ₹50,000–₹1,50,000 and takes 4–8 weeks; apps with logins, payments and a custom backend start from ₹2,00,000. We handle App Store and Play Store publishing and post-launch support.",
    description:
      "We design, develop and launch high-quality mobile applications for iOS and Android. Our team specialises in cross-platform development with React Native and Flutter, so you get both platforms from one codebase without compromising on performance or user experience. We have built apps for e-commerce, hospitality, B2B ordering, business management and customer loyalty – including HashView, a reviews-and-rewards app used by restaurants and hotels in the UK.",
    features: [
      { title: "iOS App Development", description: "Polished iPhone and iPad apps that meet Apple's App Store guidelines." },
      { title: "Android App Development", description: "High-performance Android apps optimised for the full range of devices used in India and abroad." },
      { title: "React Native Apps", description: "One codebase, two platforms – near-native performance at a lower cost." },
      { title: "Flutter Apps", description: "Fast, beautiful cross-platform apps with Flutter's modern widget architecture." },
      { title: "E-Commerce & B2B Ordering Apps", description: "Catalogues, cart, UPI/card payments, order tracking and push notifications." },
      { title: "Food Delivery & Booking Apps", description: "Ordering, table/room booking, delivery tracking and restaurant management." },
      { title: "Enterprise & Field Apps", description: "Internal apps for field sales, attendance, inspections and workflow automation." },
      { title: "App Store & Play Store Launch", description: "Complete submission, store listing and App Store Optimisation (ASO)." },
      { title: "Maintenance & Updates", description: "OS updates, bug fixes, analytics and new features after launch." },
    ],
    benefits: [
      "React Native and Flutter cross-platform expertise",
      "Mobile-first UI/UX design included",
      "Live apps in production for UK and Indian businesses",
      "App Store & Google Play submission handled end-to-end",
      "Payments (UPI, Razorpay, Stripe), maps and push notifications",
      "Secure backends with real-time features",
      "Typically 40–60% more cost-effective than UK/US agencies",
      "Post-launch support and a feature roadmap",
    ],
    faqs: [
      {
        question: "Do you develop both Android and iOS apps?",
        answer:
          "Yes. We usually build cross-platform apps with React Native or Flutter, which gives you Android and iOS from one codebase and saves cost and time. Where a project needs it, we build platform-specific features natively.",
      },
      {
        question: "How much does it cost to build a mobile app in India?",
        answer:
          "A simple app with 5–10 screens typically costs ₹50,000–₹1,50,000. Apps with user accounts, payments and a custom backend start from around ₹2,00,000. Complex or enterprise apps are quoted after a free discovery call. International projects are quoted in USD or GBP.",
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "Simple apps typically take 4–8 weeks. Apps with custom backends and integrations take 8–16 weeks. You get a milestone plan and weekly test builds on your phone.",
      },
      {
        question: "Will you publish the app on the App Store and Google Play?",
        answer:
          "Yes. We handle the complete submission process for the Apple App Store and Google Play Store, including store listings, screenshots and App Store Optimisation (ASO).",
      },
      {
        question: "Do you build apps for clients in the UK, USA and other countries?",
        answer:
          "Yes. We work with clients in the UK, USA, UAE, Europe and Australia who want high-quality app development at Indian pricing. We overlap working hours with your time zone and communicate in English on Slack, WhatsApp or email.",
      },
      {
        question: "Do you offer app maintenance after launch?",
        answer:
          "Yes. Flexible maintenance plans cover bug fixes, OS compatibility updates, performance monitoring and new features.",
      },
    ],
    ctaTitle: "Have an app idea? Let's scope it together.",
    ctaDescription: "Get a free consultation and an app cost estimate within 24 hours – for businesses in India and worldwide.",
    priceFrom: { amount: 50000, currency: "INR", note: "Mobile apps from ₹50,000" },
  },
  {
    slug: "custom-software-development",
    legacyPaths: ["/software-development-assam"],
    name: "Custom Software Development",
    shortName: "Custom Software",
    icon: "code",
    metaTitle: "Custom Software Development in India",
    metaDescription:
    "Custom software, SaaS platforms, dashboards and workflow automation for businesses in India and worldwide. You own the code. Free consultation.",
    keywords: [
      "custom software development company India",
      "software development company",
      "SaaS development company India",
      "offshore software development India",
      "workflow automation software",
      "dashboard development",
      "enterprise software development India",
      "software outsourcing India",
      "API development company",
      "legacy system modernisation",
    ],
    badge: "Custom Software Development · India & Worldwide",
    headline: "Custom software that",
    headlineAccent: "replaces spreadsheets and manual work",
    subheadline:
      "SaaS platforms, internal tools, dashboards and automation built around how your business actually works – for companies in India and around the world.",
    summary:
      "Gen AI Digital Solutions is an Indian custom software development company that builds SaaS platforms, internal business tools, analytics dashboards, APIs and workflow automation. Simple automation tools start from ₹30,000 and mid-sized SaaS platforms from ₹1,50,000. Projects run in agile sprints with fixed-scope pricing, and you keep full ownership of the code.",
    description:
      "We design and build bespoke software tailored to the exact needs of your business. Whether you need an enterprise system, a SaaS product, an internal workflow tool or a data-driven analytics platform, our engineering team delivers reliable, scalable solutions. We work with startups and SMEs across India and with international companies in the UK, USA and beyond that want a dependable offshore development partner.",
    features: [
      { title: "Enterprise Software", description: "Custom systems for managing complex operations, teams and data at scale." },
      { title: "SaaS Product Development", description: "From MVP to multi-tenant SaaS with subscriptions, billing and admin panels." },
      { title: "Cloud Applications", description: "Scalable cloud-native apps on AWS, Google Cloud or Azure." },
      { title: "Workflow Automation", description: "Tools that eliminate repetitive manual work and save hours every day." },
      { title: "API Development & Integration", description: "Secure, documented REST and GraphQL APIs that connect your systems." },
      { title: "Analytics Dashboards", description: "Real-time dashboards and reports for data-driven decisions." },
      { title: "Legacy Modernisation", description: "Migrate old systems to modern, maintainable architectures without downtime." },
      { title: "Admin Panels & Portals", description: "Customer, vendor and staff portals with role-based access." },
      { title: "Third-Party Integrations", description: "Payment gateways, CRMs, ERPs, WhatsApp, Tally and other external APIs." },
    ],
    benefits: [
      "4+ years building production software",
      "Agile sprints with demos every week",
      "Highly competitive pricing vs. UK and US agencies",
      "You own 100% of the code and intellectual property",
      "Secure development practices and data protection",
      "Architecture designed for long-term growth",
      "Direct access to the developers building your product",
      "17+ projects successfully delivered",
    ],
    faqs: [
      {
        question: "What types of software do you develop?",
        answer:
          "We build SaaS platforms, enterprise management systems, internal business tools, workflow automation, analytics dashboards, customer and vendor portals, APIs and cloud applications.",
      },
      {
        question: "Do you work with businesses outside India?",
        answer:
          "Yes. We work with clients across India and internationally – including the UK, USA, UAE, Europe and Australia – as a cost-effective, high-quality offshore software development partner.",
      },
      {
        question: "What is your software development process?",
        answer:
          "Discovery and requirements → technical design → sprint-based development with weekly demos → QA testing → deployment → post-launch support. You approve each milestone before we move on.",
      },
      {
        question: "How do you ensure software quality?",
        answer:
          "We use code reviews, automated unit and integration tests, user acceptance testing (UAT) and staged deployments, so issues are caught before they reach your users.",
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer:
          "Yes. Maintenance and support packages keep your software updated, secure and performing well after launch.",
      },
      {
        question: "How much does custom software development cost in India?",
        answer:
          "Simple automation tools start from ₹30,000. Mid-sized SaaS platforms start from around ₹1,50,000. Enterprise systems are quoted after a free discovery session. We offer transparent, fixed-scope pricing.",
      },
    ],
    ctaTitle: "Let's build the software your business needs",
    ctaDescription: "Tell us about your project and get a free technical consultation and estimate within 24 hours.",
    priceFrom: { amount: 30000, currency: "INR", note: "Automation tools from ₹30,000" },
  },
  {
    slug: "crm-erp-development",
    legacyPaths: ["/crm-erp-development-assam"],
    name: "CRM & ERP Development",
    shortName: "CRM & ERP",
    icon: "database",
    metaTitle: "Custom CRM & ERP Development in India",
    metaDescription:
    "Custom CRM and ERP software: inventory, GST billing, HR & payroll, WhatsApp integration. No monthly licence fees. For businesses in India and abroad.",
    keywords: [
      "custom CRM development India",
      "ERP software development company India",
      "custom ERP for small business",
      "inventory management software development",
      "GST billing software development",
      "HR payroll software development",
      "CRM with WhatsApp integration",
      "Tally integration ERP",
      "Salesforce alternative custom CRM",
      "ERP development company",
    ],
    badge: "CRM & ERP Development · India & Worldwide",
    headline: "A CRM or ERP built",
    headlineAccent: "exactly around your business",
    subheadline:
      "Stop paying monthly for features you don't use. Get custom CRM and ERP software that fits your workflows – with GST billing, WhatsApp and Tally integration.",
    summary:
      "Gen AI Digital Solutions builds custom CRM and ERP software for businesses in India and abroad, covering sales pipelines, inventory, purchase orders, GST billing, HR and payroll, and reporting. A core CRM typically takes 6–10 weeks and a multi-module ERP 3–6 months, delivered in phases. You own the software with no recurring per-user licence fees.",
    description:
      "Unlike off-the-shelf tools such as Salesforce, Zoho or SAP that force your team to adapt to them, our custom CRM and ERP systems are built around your exact workflows. That means faster adoption, a lower total cost of ownership and software that fits how your business operates. We build for retailers, manufacturers, distributors, clinics, schools, real estate firms and service businesses in India and internationally.",
    features: [
      { title: "Custom CRM", description: "Lead tracking, sales pipeline, customer profiles, follow-up reminders and communication history." },
      { title: "ERP Platform", description: "Inventory, purchasing, finance, HR, production and reporting in one system." },
      { title: "Inventory Management", description: "Real-time stock, purchase orders, suppliers, batches and low-stock alerts." },
      { title: "HR & Payroll", description: "Onboarding, attendance, leave and automated payroll." },
      { title: "GST Billing & Accounting", description: "GST-compliant invoices, expenses and Tally or QuickBooks integration." },
      { title: "Sales & Order Management", description: "Quote-to-invoice order lifecycle with real-time status tracking." },
      { title: "BI Dashboards", description: "Role-based KPI dashboards and reports for owners and managers." },
      { title: "WhatsApp & Integrations", description: "WhatsApp Business API, SMS, payment gateways and shipping providers." },
      { title: "Mobile CRM/ERP Apps", description: "Companion apps for field sales, delivery staff and remote teams." },
    ],
    benefits: [
      "100% custom – only the features you actually need",
      "Own the software: no recurring per-user licence fees",
      "GST-compliant, India-specific finance workflows",
      "Role-based access for every level of your team",
      "Scales as your business grows",
      "WhatsApp and SMS notification integration",
      "Cloud or on-premise deployment",
      "Training, documentation and post-launch support included",
    ],
    faqs: [
      {
        question: "Why choose a custom CRM over Salesforce or Zoho?",
        answer:
          "Off-the-shelf CRMs charge recurring per-user fees and include features you don't need, while missing ones you do. A custom CRM is built around your processes, is simpler for your team to use, and you pay once instead of every month.",
      },
      {
        question: "What does a custom ERP system include?",
        answer:
          "Typically inventory, purchase orders, sales, GST billing and accounting, HR and payroll, production tracking and reporting dashboards – each module customised to your workflows. You can start with one or two modules and add more later.",
      },
      {
        question: "How long does it take to build a custom CRM or ERP?",
        answer:
          "A core CRM takes 6–10 weeks. A full ERP with several integrated modules typically takes 3–6 months. We deliver in phases so your team can start using core features early.",
      },
      {
        question: "Can it integrate with Tally, WhatsApp and our existing software?",
        answer:
          "Yes. We integrate with Tally, QuickBooks, payment gateways, shipping APIs, email platforms, the WhatsApp Business API and any internal system that offers an API.",
      },
      {
        question: "Do you build CRM and ERP systems for businesses outside India?",
        answer:
          "Yes. We build for businesses in the UK, USA, UAE and elsewhere, adapting tax, currency and compliance workflows to your country.",
      },
      {
        question: "Which industries do you build CRM and ERP software for?",
        answer:
          "Retail, distribution, manufacturing, real estate, healthcare, hospitality, education, logistics and professional services. Every industry has unique workflows, and a custom system handles them properly.",
      },
    ],
    ctaTitle: "Replace generic software with something built for you",
    ctaDescription: "Book a free discovery session and see what a custom CRM or ERP would look like for your business.",
  },
  {
    slug: "ai-solutions",
    legacyPaths: ["/ai-solutions-guwahati", "/services/ai-automation"],
    name: "AI Solutions & Chatbots",
    shortName: "AI Solutions",
    icon: "zap",
    metaTitle: "AI Chatbot & AI Development in India",
    metaDescription:
    "WhatsApp and website AI chatbots, GPT/Claude/Gemini integrations, ML and automation for businesses in India and worldwide. Free AI strategy call.",
    keywords: [
      "AI development company India",
      "AI chatbot development company",
      "WhatsApp chatbot development",
      "LLM integration services",
      "generative AI development company",
      "AI automation services",
      "machine learning company India",
      "computer vision development",
      "custom GPT development",
      "AI solutions for small business",
    ],
    badge: "AI Development Company · India & Worldwide",
    headline: "Practical AI that",
    headlineAccent: "saves time and wins customers",
    subheadline:
      "WhatsApp and website chatbots, LLM integrations, machine learning and AI automation – built for real business results, not hype.",
    summary:
      "Gen AI Digital Solutions is an Indian AI development company that builds custom AI chatbots for WhatsApp and websites, integrates large language models (GPT, Claude, Gemini, LLaMA) into business software, and develops machine learning and computer vision systems. Projects start with a free AI strategy call and are delivered in phases, from simple chatbots for small businesses to enterprise AI platforms.",
    description:
      "We design and implement AI solutions tailored to your business: customer-facing chatbots trained on your data, generative AI tools, backend machine learning pipelines and predictive analytics. Our work includes a real-time AI video analytics platform for safety and surveillance. We serve startups, SMEs and enterprises across India and international clients in the UK, USA and beyond.",
    features: [
      { title: "AI Chatbots (WhatsApp & Web)", description: "Chatbots trained on your data for support, sales and lead qualification, 24/7." },
      { title: "LLM Integration", description: "Add GPT, Claude, Gemini or LLaMA to your products and internal tools." },
      { title: "Machine Learning Models", description: "Prediction, classification, recommendation and anomaly detection." },
      { title: "Generative AI Tools", description: "Content, document and image generation tailored to your workflows." },
      { title: "AI Process Automation", description: "Automate data entry, follow-ups, document processing and reporting." },
      { title: "AI-Powered Analytics", description: "Turn business data into forecasts and actionable insights." },
      { title: "Computer Vision", description: "Object detection and video analytics for safety, retail and manufacturing." },
      { title: "NLP & Sentiment Analysis", description: "Understand reviews, feedback and support tickets at scale." },
      { title: "AI Strategy Consulting", description: "Identify the highest-ROI AI opportunities in your business before you spend." },
    ],
    benefits: [
      "Dedicated in-house AI engineering team",
      "Experience with GPT, Claude, Gemini, LLaMA and open-source models",
      "Solutions for every budget – small business to enterprise",
      "Competitive Indian pricing for international clients",
      "ROI-focused: we start with the business problem, not the tech",
      "Data privacy and security built in",
      "Phased rollout to avoid disrupting your operations",
      "Ongoing monitoring, retraining and optimisation",
    ],
    faqs: [
      {
        question: "What AI services do you offer?",
        answer:
          "Custom AI chatbots for WhatsApp and websites, LLM integration, machine learning models, AI process automation, recommendation engines, computer vision and generative AI tools.",
      },
      {
        question: "How much does an AI chatbot cost in India?",
        answer:
          "A focused chatbot that answers customer questions from your own content can be built in a few weeks at a small-business budget. Chatbots with CRM, booking or payment integrations, and custom ML systems, are quoted after a free discovery call. You get a fixed quote before work starts.",
      },
      {
        question: "Can small businesses afford AI?",
        answer:
          "Yes. Many AI wins are small and fast – a WhatsApp chatbot that answers common questions, or automation that removes manual data entry. We start with the highest-impact, lowest-cost use case and expand from there.",
      },
      {
        question: "Do you build AI solutions for clients in the UK, USA and other countries?",
        answer:
          "Yes. We work with international clients who want production-grade AI development at Indian pricing, with working-hour overlap and clear English communication.",
      },
      {
        question: "Which large language models do you work with?",
        answer:
          "OpenAI GPT models, Anthropic Claude, Google Gemini, Meta LLaMA and open-source models via Ollama. We help you pick the most cost-effective and capable model for your use case and data-privacy needs.",
      },
      {
        question: "How can AI help my business?",
        answer:
          "AI can answer customer queries 24/7, qualify leads, automate follow-ups, extract data from documents, forecast demand, analyse feedback and generate marketing content – freeing your team to focus on customers.",
      },
    ],
    ctaTitle: "Find out where AI can save you time and money",
    ctaDescription: "Book a free AI strategy session – we'll map the quickest wins for your business.",
  },
]

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}

// One REGIONAL page for all 8 Northeast states (deliberately not 8 thin city/state doorway pages).
// Delivery is remote from the Guwahati HQ; no offices, clients or addresses are claimed in other states.
export const NORTHEAST_PAGE: ServiceData = {
  slug: "northeast-india",
  legacyPaths: [],
  name: "Web & App Development in Northeast India",
  featuresTitle: "What we build across the eight Northeast states",
  shortName: "Northeast India",
  icon: "globe",
  metaTitle: "Web & App Development in Northeast India",
  metaDescription:
    "Websites, apps and software for businesses in Assam, Meghalaya, Tripura, Manipur, Mizoram, Nagaland, Arunachal Pradesh and Sikkim, from a Guwahati team.",
  keywords: [],
  badge: "Serving all 8 Northeast states · HQ Guwahati",
  headline: "A Northeast team building",
  headlineAccent: "websites, apps & software for the region",
  subheadline:
    "From Shillong homestays to Agartala retailers and Gangtok tour operators – we build websites, booking systems, apps and business software for Northeast India, working remotely from our Guwahati headquarters.",
  summary:
    "Gen AI Digital Solutions is a Guwahati-based software company that builds websites, e-commerce stores, mobile apps, CRM/ERP systems and AI chatbots for businesses across all eight Northeast Indian states: Assam, Meghalaya, Tripura, Manipur, Mizoram, Nagaland, Arunachal Pradesh and Sikkim. Projects outside Guwahati are delivered remotely over WhatsApp and video calls, with business websites starting from ₹15,000.",
  description:
    "Businesses in the Northeast often sell to customers who are far away – tourists planning a trip, buyers elsewhere in India looking for local tea, handloom or crafts, or students and parents comparing institutions online. That makes a fast, mobile-friendly website, a booking or ordering flow, and visibility on Google and WhatsApp especially important. Because we are based in the region, we understand patchy mobile connectivity, seasonal tourism and the value of WhatsApp-first communication, and we build with those realities in mind.",
  features: [
    { title: "Assam", description: "Tea and agri-businesses, hotels, clinics, coaching institutes, retailers and startups in Guwahati, Dibrugarh, Jorhat, Silchar, Tezpur and beyond. Meet us in person in Guwahati." },
    { title: "Meghalaya", description: "Homestay, hotel and tour-operator websites with direct booking for Shillong, Sohra and the wider tourism circuit, plus sites for schools and local brands." },
    { title: "Sikkim", description: "Booking-ready websites for hotels, travel agents and trek operators in Gangtok and beyond, and online stores for organic produce and local products." },
    { title: "Arunachal Pradesh", description: "Tourism and adventure-travel websites, permit and itinerary information pages, and sites for institutions and local enterprises." },
    { title: "Tripura", description: "Websites and online stores for retailers, handloom and bamboo-craft sellers, and service businesses in Agartala and across the state." },
    { title: "Manipur", description: "E-commerce for handloom and handicraft makers selling across India, and websites for sports academies, schools and local businesses in Imphal." },
    { title: "Nagaland", description: "Event, tourism and hospitality websites for Kohima and Dimapur, and online stores for local food and craft brands." },
    { title: "Mizoram", description: "Websites, apps and business software for Aizawl businesses, institutions and startups, built mobile-first for local connectivity." },
    { title: "Across the region", description: "CRM, billing and inventory software, WhatsApp chatbots, and Google Business Profile & local SEO for businesses anywhere in the Northeast." },
  ],
  benefits: [
    "Headquartered in Guwahati – a Northeast team, not a distant agency",
    "Built mobile-first for patchy networks and low-data phones",
    "WhatsApp-first communication and enquiry buttons",
    "Booking, ordering and payment flows (UPI, Razorpay)",
    "Local SEO and Google Business Profile setup",
    "Business websites from ₹15,000 with a fixed quote",
    "Remote delivery across all 8 states with weekly demos",
    "Hindi, Assamese and English support",
  ],
  faqs: [
    {
      question: "Do you work with businesses outside Assam in the Northeast?",
      answer:
        "Yes. We work with businesses in all eight Northeast states – Assam, Meghalaya, Tripura, Manipur, Mizoram, Nagaland, Arunachal Pradesh and Sikkim. Our team is in Guwahati; projects elsewhere run remotely over WhatsApp, phone and video calls with weekly demo links.",
    },
    {
      question: "Do you have offices in Shillong, Agartala, Imphal or other cities?",
      answer:
        "No. Our only office is our headquarters in Guwahati, Assam. Clients in other Northeast states work with us remotely, and are welcome to meet us in Guwahati.",
    },
    {
      question: "How much does a website cost for a business in the Northeast?",
      answer:
        "The same as anywhere else we work: a business website typically costs ₹15,000–₹50,000, and booking websites or e-commerce stores start from ₹50,000. See our pricing page for full details. You get a fixed quote before work starts.",
    },
    {
      question: "Can you build a booking website for my homestay or hotel?",
      answer:
        "Yes. We build hotel and homestay websites with room galleries, availability enquiries or direct booking, UPI/card payments, Google Maps and WhatsApp buttons, so you rely less on commission-based booking platforms.",
    },
    {
      question: "Can you help me sell my products online across India?",
      answer:
        "Yes. We build online stores with UPI, card and cash-on-delivery payments, GST invoices and courier integrations, which suits tea, handloom, handicraft, organic food and other Northeast products sold nationwide.",
    },
    {
      question: "Will my website work well on slow mobile networks?",
      answer:
        "Yes. We build mobile-first, compress images, and keep pages light so they load quickly even on weaker 4G connections common in hilly and rural areas.",
    },
  ],
  ctaTitle: "Building something for your Northeast business?",
  ctaDescription: "Tell us what you need – we reply within 24 hours, wherever you are in the Northeast.",
  priceFrom: { amount: 15000, currency: "INR", note: "Business websites from ₹15,000" },
}

// One dedicated LOCAL landing page (not part of SERVICES, so it isn't duplicated in nav/related lists).
// Search Console shows "web development company in guwahati" / "... in assam" are the site's only
// near-page-1 non-brand queries, so this page keeps its original URL and targets them with unique local content.
export const GUWAHATI_PAGE: ServiceData = {
  slug: "web-development-company-guwahati",
  legacyPaths: [],
  name: "Web & App Development in Guwahati",
  shortName: "Guwahati",
  icon: "globe",
  metaTitle: "Web Development Company in Guwahati",
  metaDescription:
    "Web & app development company in Guwahati. Websites from ₹15,000, e-commerce, Android & iOS apps for businesses in Assam & Northeast India.",
  keywords: [
    "web development company in guwahati",
    "website development company in guwahati",
    "web developer in guwahati",
    "web design company in guwahati",
    "web development company in assam",
    "app development company guwahati",
    "ecommerce website development guwahati",
    "website designer guwahati",
  ],
  badge: "Web Development Company · Guwahati, Assam",
  headline: "Guwahati's web & app team",
  headlineAccent: "for businesses across Assam",
  subheadline:
    "Websites, online stores and mobile apps for shops, hotels, clinics, schools and startups in Guwahati and Northeast India – built locally, with in-person meetings when you want them.",
  summary:
    "Gen AI Digital Solutions is a web and app development company headquartered in Guwahati, Assam. We build business websites (from ₹15,000, ready in 1–2 weeks), e-commerce stores with UPI/Razorpay payments, Android & iOS apps and custom software for businesses across Guwahati, Assam and Northeast India, and meet clients in person in Guwahati.",
  description:
    "Being based in Guwahati means we understand how local businesses actually win customers: Google Maps and \"near me\" searches, WhatsApp enquiries, Instagram and word of mouth. We build websites that show up for those searches, take WhatsApp and phone enquiries in one tap, and load fast on the mobile data your customers use. Typical clients include hotels and homestays, restaurants and cafés, clinics and diagnostic centres, coaching institutes and schools, real-estate developers, retailers, and tea and handloom businesses selling online across India.",
  features: [
    { title: "Business Websites", description: "Professional websites for Guwahati businesses, built to rank on Google and bring WhatsApp & phone enquiries." },
    { title: "Online Stores", description: "Sell across India with UPI, Razorpay and COD, GST invoices and shipping integration (Shiprocket, Delhivery)." },
    { title: "Hotel & Homestay Websites", description: "Direct booking, room galleries and Google Maps – reduce your OTA commission." },
    { title: "Clinic, School & Coaching Sites", description: "Appointment booking, admissions forms, results and notice boards." },
    { title: "Android & iOS Apps", description: "Ordering, booking and loyalty apps for local businesses and startups." },
    { title: "Local SEO & Google Business Profile", description: "Show up in \"near me\" searches and on Google Maps in Guwahati and Assam." },
    { title: "Website Redesign", description: "Turn an old, slow website into a fast, mobile-first one that brings enquiries." },
    { title: "CRM, Billing & Inventory", description: "Custom software for shops, distributors and service businesses – with Tally and WhatsApp." },
    { title: "Maintenance & Hosting", description: "Updates, backups, security and hosting handled by a local team you can call." },
  ],
  benefits: [
    "Headquartered in Guwahati – meet the team in person",
    "Understands local buyers: WhatsApp, Google Maps and mobile-first",
    "Business websites from ₹15,000 with a fixed quote",
    "Also serving clients across India, the UK and USA",
    "Hindi, Assamese and English support",
    "Websites ready in 1–2 weeks",
    "Local SEO and Google Business Profile setup",
    "Ongoing support after launch",
  ],
  faqs: [
    {
      question: "How much does a website cost in Guwahati?",
      answer:
        "A professional business website for a Guwahati business typically costs ₹15,000–₹50,000 depending on pages and features. E-commerce stores and booking websites start from ₹50,000. You get a fixed quote in writing before work starts.",
    },
    {
      question: "Can I meet your team in person in Guwahati?",
      answer:
        "Yes. We are headquartered in Guwahati and happy to meet at your office or shop for the first discussion and the final handover. Day-to-day updates happen over WhatsApp and video calls.",
    },
    {
      question: "Will my website show up on Google for searches in Guwahati?",
      answer:
        "Every website includes technical SEO and local SEO basics: your business name, address and phone in structured data, Google Business Profile setup or optimisation, and pages written for the searches your customers in Guwahati and Assam actually make.",
    },
    {
      question: "Do you work with businesses outside Guwahati?",
      answer:
        "Yes. We work across Assam and Northeast India – Shillong, Dibrugarh, Jorhat, Silchar, Tezpur and more – and with clients across India and internationally. See our national service pages for details.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "A standard business website takes 1–2 weeks once we have your content. E-commerce stores and booking sites take 3–6 weeks.",
    },
    {
      question: "Do you also build mobile apps in Guwahati?",
      answer:
        "Yes. We build Android and iOS apps with React Native and Flutter – for ordering, bookings, loyalty and internal business use – starting from around ₹50,000 for a simple app.",
    },
  ],
  ctaTitle: "Building something for your Guwahati business?",
  ctaDescription: "Tell us what you need – we'll reply within 24 hours and can meet you in person in Guwahati.",
  priceFrom: { amount: 15000, currency: "INR", note: "Business websites from ₹15,000" },
}
