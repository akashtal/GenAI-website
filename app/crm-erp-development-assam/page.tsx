import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "CRM & ERP Software Development in Guwahati, Assam | Gen AI Digital Solutions",
  description:
    "Custom CRM and ERP software development company in Guwahati, Assam. We build bespoke CRM systems, ERP platforms, and business management tools for companies in India, UK & USA.",
  keywords: [
    "ERP software Guwahati",
    "CRM development Assam",
    "ERP development Assam",
    "CRM software Guwahati",
    "custom CRM development India",
    "custom ERP development India",
    "CRM software company India",
    "ERP software company India",
    "business management software Assam",
    "CRM development UK",
    "ERP development UK",
    "CRM development USA",
    "custom ERP software India",
    "inventory management software Guwahati",
    "HR management software Assam",
  ],
  alternates: {
    canonical: "https://genaidigitalsolution.com/crm-erp-development-assam",
  },
  openGraph: {
    title: "CRM & ERP Software Development in Guwahati, Assam | Gen AI Digital Solutions",
    description:
      "Custom CRM & ERP software development in Assam. Bespoke business management systems for companies in India, UK & USA.",
    url: "https://genaidigitalsolution.com/crm-erp-development-assam",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why should I choose a custom CRM over off-the-shelf software like Salesforce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Off-the-shelf CRMs charge high recurring subscription fees and often have features you don't need. A custom CRM is built specifically for your business processes, eliminates unnecessary complexity, and you pay once — not monthly forever.",
      },
    },
    {
      "@type": "Question",
      name: "What does a custom ERP system include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A custom ERP typically includes modules for inventory management, purchase orders, sales management, finance and accounting, HR and payroll, production tracking, and reporting dashboards — all customised to your exact business workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a custom CRM or ERP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basic CRM system with core modules takes 6–10 weeks. A full ERP system with multiple integrated modules typically takes 3–6 months. We follow a phased approach so you can start using core features early.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate the CRM/ERP with existing software we use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We integrate with Tally, QuickBooks, payment gateways, shipping APIs, email marketing platforms, WhatsApp Business API, and any custom internal system via APIs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build CRM/ERP for businesses outside Assam and India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We develop custom CRM and ERP systems for businesses in the UK and USA as well. Many international businesses choose us as their offshore technology partner for competitive pricing and premium delivery quality.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you build CRM/ERP systems for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have experience building for retail, manufacturing, real estate, healthcare, hospitality, education, logistics, and professional services. Every industry has unique workflows — our custom approach handles them all.",
      },
    },
  ],
}

export default function CRMERPDevelopmentAssamPage() {
  return (
    <ServicePageTemplate
      badge="CRM & ERP Development — Assam, India"
      headline="Custom CRM & ERP Software"
      headlineAccent="Development in Guwahati & Assam"
      subheadline="Stop paying for features you don't use. Get a custom-built CRM or ERP system designed exactly for your business — for companies in Assam, India, UK & USA."
      description="Gen AI Digital Solutions builds powerful custom CRM (Customer Relationship Management) and ERP (Enterprise Resource Planning) software for businesses across Assam, India, and globally. Unlike generic off-the-shelf solutions like Salesforce or SAP that force your business to adapt to their system, our custom CRM and ERP systems are built around your exact workflows. This means faster adoption, lower total cost of ownership, and software that actually fits how your business operates. We serve businesses in Guwahati and Assam, companies across India, and international clients in the UK and USA who want a trusted offshore development partner for their internal business systems."
      iconName="database"
      primaryMarket="Based in Guwahati, Assam — Serving India, UK & USA"
      markets={["Guwahati, Assam", "Northeast India", "Pan-India", "United Kingdom", "United States"]}
      features={[
        {
          title: "Custom CRM Systems",
          description:
            "Sales pipeline management, lead tracking, customer profiles, and communication history in one place.",
        },
        {
          title: "ERP Platform Development",
          description:
            "Integrated modules for inventory, finance, HR, production, and reporting — all in one unified system.",
        },
        {
          title: "Inventory Management Systems",
          description:
            "Real-time stock tracking, purchase orders, supplier management, and low-stock alerts.",
        },
        {
          title: "HR & Payroll Modules",
          description:
            "Employee onboarding, attendance tracking, leave management, and automated payroll processing.",
        },
        {
          title: "Finance & Accounting Integration",
          description:
            "Invoice generation, expense tracking, GST compliance, and integration with Tally or QuickBooks.",
        },
        {
          title: "Sales & Order Management",
          description:
            "End-to-end order lifecycle management from quote to invoice with real-time status tracking.",
        },
        {
          title: "Business Intelligence Dashboards",
          description:
            "Role-based dashboards with KPIs, charts, and reports to make data-driven business decisions.",
        },
        {
          title: "Third-Party Integrations",
          description:
            "Connect with payment gateways, WhatsApp Business API, shipping providers, and external data sources.",
        },
        {
          title: "Mobile CRM/ERP Apps",
          description:
            "On-the-go access for your team with companion mobile apps for field sales and remote operations.",
        },
      ]}
      benefitsList={[
        "100% custom-built — no features you don't need, no missing ones you do",
        "Own the software forever — no recurring licence fees",
        "GST-compliant and India-specific financial workflows",
        "Role-based access control for teams at all levels",
        "Seamlessly scalable as your business grows",
        "WhatsApp & SMS notification integration",
        "Cloud or on-premise deployment options",
        "Training, documentation, and post-launch support included",
      ]}
      faqs={[
        {
          question: "Why should I choose a custom CRM over off-the-shelf software like Salesforce?",
          answer:
            "Off-the-shelf CRMs charge high recurring subscription fees and often have features you don't need. A custom CRM is built specifically for your business processes, eliminates unnecessary complexity, and you pay once — not monthly forever.",
        },
        {
          question: "What does a custom ERP system include?",
          answer:
            "A custom ERP typically includes modules for inventory management, purchase orders, sales management, finance and accounting, HR and payroll, production tracking, and reporting dashboards — all customised to your exact business workflows.",
        },
        {
          question: "How long does it take to build a custom CRM or ERP?",
          answer:
            "A basic CRM system with core modules takes 6–10 weeks. A full ERP system with multiple integrated modules typically takes 3–6 months. We follow a phased approach so you can start using core features early.",
        },
        {
          question: "Can you integrate the CRM/ERP with existing software we use?",
          answer:
            "Yes. We integrate with Tally, QuickBooks, payment gateways, shipping APIs, email marketing platforms, WhatsApp Business API, and any custom internal system via APIs.",
        },
        {
          question: "Do you build CRM/ERP for businesses outside Assam and India?",
          answer:
            "Yes. We develop custom CRM and ERP systems for businesses in the UK and USA as well. Many international businesses choose us as their offshore technology partner for competitive pricing and premium delivery quality.",
        },
        {
          question: "What industries do you build CRM/ERP systems for?",
          answer:
            "We have experience building for retail, manufacturing, real estate, healthcare, hospitality, education, logistics, and professional services. Every industry has unique workflows — our custom approach handles them all.",
        },
      ]}
      ctaTitle="Replace Generic Software With Something Built For You"
      ctaDescription="Get a free discovery session and see how a custom CRM or ERP can transform your business operations. We serve companies in Assam, across India, and internationally in UK & USA."
      jsonLdData={faqJsonLd}
    />
  )
}
