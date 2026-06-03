import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Web Development Company in Guwahati, Assam | Gen AI Digital Solutions",
  description:
    "Top-rated web development company in Guwahati, Assam. We craft high-performance React & Next.js websites, e-commerce platforms, and conversion-optimised landing pages for businesses across India, UK & USA.",
  keywords: [
    "web development company Guwahati",
    "web development company Assam",
    "website development Guwahati",
    "web development company India",
    "Next.js development company Assam",
    "React development company Guwahati",
    "ecommerce website development Guwahati",
    "affordable web development India",
    "web development company UK",
    "web development company USA",
    "restaurant website development Guwahati",
    "hotel website development Assam",
    "professional website design Guwahati",
  ],
  alternates: {
    canonical: "https://genaidigitalsolution.com/web-development-company-guwahati",
  },
  openGraph: {
    title: "Web Development Company in Guwahati, Assam | Gen AI Digital Solutions",
    description:
      "Top-rated web development company in Guwahati. High-performance React & Next.js websites for businesses in India, UK & USA.",
    url: "https://genaidigitalsolution.com/web-development-company-guwahati",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does website development cost in Guwahati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web development costs in Guwahati vary based on complexity. A professional business website starts from ₹15,000–₹50,000. E-commerce platforms and custom web apps start from ₹50,000 upwards. Gen AI Digital Solutions offers competitive pricing with premium quality.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer web development services across India, not just Assam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While we are based in Guwahati, Assam, we serve clients across India — including Mumbai, Delhi, Bangalore, Chennai — and internationally in the UK and USA. All projects are managed remotely with regular updates.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you use for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build with Next.js, React, TypeScript, Node.js, MongoDB, PostgreSQL, Tailwind CSS, and more. We choose the best stack for your specific project requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard business website takes 1–2 weeks. E-commerce or custom platforms typically take 3–6 weeks depending on the feature set. We always provide a timeline estimate before starting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build SEO-optimized websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every website we build includes technical SEO optimisations: meta tags, structured data, sitemap, fast page load times, mobile responsiveness, and clean semantic HTML.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We offer full website redesign services to modernise your existing site, improve performance, and increase conversion rates.",
      },
    },
  ],
}

export default function WebDevelopmentGuwahatiPage() {
  return (
    <ServicePageTemplate
      badge="Web Development Company — Guwahati, Assam"
      headline="Best Web Development Company"
      headlineAccent="in Guwahati & Across India"
      subheadline="We build blazing-fast, beautifully designed websites that rank on Google and convert visitors into customers — for businesses in Assam, India, UK & USA."
      description="Gen AI Digital Solutions is a leading web development company based in Guwahati, Assam. We design and build custom, high-performance websites using modern technologies like Next.js and React. Whether you need a business website, a full-featured e-commerce platform, a custom web application, or a marketing landing page — we deliver results-driven solutions on time. Our clients range from local businesses in Guwahati and Assam to growing companies across India and international businesses in the United Kingdom and United States."
      iconName="globe"
      primaryMarket="Based in Guwahati, Assam — Serving India, UK & USA"
      markets={["Guwahati, Assam", "India", "United Kingdom", "United States"]}
      features={[
        {
          title: "Custom Business Websites",
          description: "Professional, fast-loading websites tailored to your brand identity and business goals.",
        },
        {
          title: "E-Commerce Platforms",
          description:
            "Full-featured online stores with payment gateway integration, inventory management, and order tracking.",
        },
        {
          title: "React & Next.js Web Apps",
          description: "Highly interactive, SSR-optimised web applications built with React and Next.js.",
        },
        {
          title: "Landing Page Development",
          description: "High-converting landing pages designed to maximise leads and sales for your campaigns.",
        },
        {
          title: "API & Backend Development",
          description: "Secure RESTful APIs and server-side logic using Node.js, Express, and cloud databases.",
        },
        {
          title: "SEO-First Development",
          description: "Every website is built with technical SEO: fast Core Web Vitals, structured data, and clean semantics.",
        },
        {
          title: "Restaurant & Hotel Websites",
          description: "Specialised hospitality websites with booking forms, menus, gallery, and local SEO for Guwahati.",
        },
        {
          title: "WordPress Development",
          description: "Custom WordPress themes and WooCommerce stores for cost-effective, easily manageable websites.",
        },
        {
          title: "Website Redesign",
          description: "Modernise your outdated website to improve performance, SEO rankings, and user experience.",
        },
      ]}
      benefitsList={[
        "4+ years of hands-on web development experience",
        "17+ successful projects delivered across India and globally",
        "Competitive pricing — quality without the premium price tag",
        "Mobile-first, responsive design on all devices",
        "Technical SEO baked in from day one",
        "Transparent project management with regular updates",
        "Post-launch maintenance & support included",
        "UK & USA-compatible remote collaboration workflow",
      ]}
      faqs={[
        {
          question: "How much does website development cost in Guwahati?",
          answer:
            "Web development costs in Guwahati vary based on complexity. A professional business website starts from ₹15,000–₹50,000. E-commerce platforms and custom web apps start from ₹50,000 upwards. Gen AI Digital Solutions offers competitive pricing with premium quality.",
        },
        {
          question: "Do you offer web development services across India, not just Assam?",
          answer:
            "Yes. While we are based in Guwahati, Assam, we serve clients across India — including Mumbai, Delhi, Bangalore, Chennai — and internationally in the UK and USA. All projects are managed remotely with regular updates.",
        },
        {
          question: "What technologies do you use for web development?",
          answer:
            "We build with Next.js, React, TypeScript, Node.js, MongoDB, PostgreSQL, Tailwind CSS, and more. We choose the best stack for your specific project requirements.",
        },
        {
          question: "How long does it take to build a website?",
          answer:
            "A standard business website takes 1–2 weeks. E-commerce or custom platforms typically take 3–6 weeks depending on the feature set. We always provide a timeline estimate before starting.",
        },
        {
          question: "Do you build SEO-optimized websites?",
          answer:
            "Yes. Every website we build includes technical SEO optimisations: meta tags, structured data, sitemap, fast page load times, mobile responsiveness, and clean semantic HTML.",
        },
        {
          question: "Can you redesign my existing website?",
          answer:
            "Absolutely. We offer full website redesign services to modernise your existing site, improve performance, and increase conversion rates.",
        },
      ]}
      ctaTitle="Ready to Build Your Dream Website?"
      ctaDescription="Get a free consultation and project estimate from Guwahati's leading web development team. We serve clients across India, UK & USA — let's build something amazing together."
      jsonLdData={faqJsonLd}
    />
  )
}
