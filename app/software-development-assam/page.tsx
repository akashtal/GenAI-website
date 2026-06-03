import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Custom Software Development Company in Assam",
  description:
    "Leading custom software development company in Assam & Guwahati. We build enterprise software, SaaS platforms, cloud applications, and workflow automation for businesses in India, UK & USA.",
  keywords: [
    "software company Assam",
    "software development company Assam",
    "custom software development Assam",
    "software development company Guwahati",
    "enterprise software development India",
    "custom software development India",
    "SaaS development company India",
    "software development company UK",
    "offshore software development UK",
    "software development company USA",
    "offshore software development USA",
    "custom web application development Assam",
    "cloud application development Guwahati",
  ],
  alternates: {
    canonical: "https://genaidigitalsolution.com/software-development-assam",
  },
  openGraph: {
    title: "Custom Software Development Company in Assam | Gen AI Digital Solutions",
    description:
      "Enterprise custom software development in Assam. SaaS platforms, cloud apps, and workflow automation for India, UK & USA.",
    url: "https://genaidigitalsolution.com/software-development-assam",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of software does Gen AI Digital Solutions develop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We develop a wide range, including SaaS platforms, enterprise management systems, internal business tools, workflow automation software, data dashboards, APIs, and cloud-based applications.",
      },
    },
    {
      "@type": "Question",
      name: "Can you develop software for businesses outside Assam and India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with clients across India and internationally — including UK and USA companies looking for cost-effective, high-quality offshore software development partners.",
      },
    },
    {
      "@type": "Question",
      name: "What is your software development process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow an agile development process: Discovery & Requirements → Technical Design → Sprint-based Development → QA Testing → Deployment → Post-launch Support.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure software quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We implement comprehensive quality assurance: unit testing, integration testing, user acceptance testing (UAT), code reviews, and staged deployment processes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing software maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer ongoing maintenance and support packages to keep your software updated, secure, and performing optimally post-launch.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software development cost in Assam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom software costs vary significantly based on complexity. Simple automation tools start from ₹30,000. Mid-tier SaaS platforms start from ₹1,50,000+. Enterprise solutions are quoted after discovery. We offer transparent, fixed-scope pricing.",
      },
    },
  ],
}

export default function SoftwareDevelopmentAssamPage() {
  return (
    <ServicePageTemplate
      badge="Software Development — Assam, India"
      headline="Custom Software Development"
      headlineAccent="Company in Assam & India"
      subheadline="We engineer scalable, secure, and high-performance custom software — from SaaS platforms to enterprise automation — for companies in India, UK & USA."
      description="Gen AI Digital Solutions is a premier custom software development company headquartered in Guwahati, Assam. We design and build bespoke software solutions tailored to the exact needs of your business. Whether you need a complex enterprise system, a SaaS product, an internal workflow automation tool, or a data-driven analytics platform, our experienced engineering team delivers reliable, scalable solutions. We serve businesses across Northeast India and Assam, as well as clients across India's major tech hubs, and international companies in the United Kingdom and United States seeking premium offshore development partnerships."
      iconName="code"
      primaryMarket="Based in Guwahati, Assam — Serving India, UK & USA"
      markets={["Assam, India", "Pan-India", "United Kingdom", "United States"]}
      features={[
        {
          title: "Enterprise Software Systems",
          description: "Custom-built enterprise applications for managing complex operations at scale.",
        },
        {
          title: "SaaS Platform Development",
          description: "End-to-end SaaS product development from architecture to multi-tenant deployment.",
        },
        {
          title: "Cloud Application Development",
          description: "Scalable cloud-native applications on AWS, Google Cloud, or Azure infrastructure.",
        },
        {
          title: "Workflow Automation",
          description: "Custom automation tools that eliminate manual processes and save hours daily.",
        },
        {
          title: "API Development & Integration",
          description: "Secure, well-documented RESTful and GraphQL APIs connecting your systems seamlessly.",
        },
        {
          title: "Data Analytics Dashboards",
          description: "Interactive dashboards with real-time data visualisation and actionable business insights.",
        },
        {
          title: "Legacy System Modernisation",
          description: "Upgrade and migrate old legacy systems to modern, maintainable architectures.",
        },
        {
          title: "Custom Admin Panels",
          description: "Intuitive admin interfaces for managing your platform, users, and data with ease.",
        },
        {
          title: "Third-Party Integrations",
          description: "Connect your software with payment gateways, CRMs, ERPs, and external APIs.",
        },
      ]}
      benefitsList={[
        "4+ years building enterprise-grade custom software",
        "Transparent agile development process with sprint reviews",
        "Highly competitive pricing vs. UK and USA development agencies",
        "Full ownership of code and intellectual property — always",
        "Secure development practices with data protection compliance",
        "Scalable architecture designed for long-term growth",
        "Dedicated project manager and direct developer access",
        "Proven track record of 17+ successfully delivered projects",
      ]}
      faqs={[
        {
          question: "What types of software does Gen AI Digital Solutions develop?",
          answer:
            "We develop a wide range, including SaaS platforms, enterprise management systems, internal business tools, workflow automation software, data dashboards, APIs, and cloud-based applications.",
        },
        {
          question: "Can you develop software for businesses outside Assam and India?",
          answer:
            "Yes. We work with clients across India and internationally — including UK and USA companies looking for cost-effective, high-quality offshore software development partners.",
        },
        {
          question: "What is your software development process?",
          answer:
            "We follow an agile development process: Discovery & Requirements → Technical Design → Sprint-based Development → QA Testing → Deployment → Post-launch Support.",
        },
        {
          question: "How do you ensure software quality?",
          answer:
            "We implement comprehensive quality assurance: unit testing, integration testing, user acceptance testing (UAT), code reviews, and staged deployment processes.",
        },
        {
          question: "Do you provide ongoing software maintenance?",
          answer:
            "Yes. We offer ongoing maintenance and support packages to keep your software updated, secure, and performing optimally post-launch.",
        },
        {
          question: "How much does custom software development cost in Assam?",
          answer:
            "Custom software costs vary significantly based on complexity. Simple automation tools start from ₹30,000. Mid-tier SaaS platforms start from ₹1,50,000+. Enterprise solutions are quoted after discovery. We offer transparent, fixed-scope pricing.",
        },
      ]}
      ctaTitle="Let's Build Your Custom Software"
      ctaDescription="Tell us about your project and get a free technical consultation from our expert team in Assam. We build for India, UK & USA — competitively priced, premium quality."
      jsonLdData={faqJsonLd}
    />
  )
}
