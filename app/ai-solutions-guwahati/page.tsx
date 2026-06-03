import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "AI Solutions Company in Guwahati, Assam, India | Gen AI Digital Solutions",
  description:
    "Premier AI solutions company in Guwahati, Assam. We deliver custom AI chatbots, LLM integrations, machine learning models, and intelligent automation for businesses in India, UK & USA. Only 2 AI companies in Guwahati — be first.",
  keywords: [
    "AI solutions Guwahati",
    "AI solutions company Assam",
    "AI company Guwahati",
    "artificial intelligence company Assam",
    "AI solutions India",
    "AI company India",
    "AI chatbot development India",
    "machine learning company Guwahati",
    "LLM integration India",
    "generative AI solutions India",
    "AI automation company Assam",
    "AI solutions UK",
    "AI solutions USA",
    "AI agency UK",
    "GenAI solutions India",
  ],
  alternates: {
    canonical: "https://genaidigitalsolution.com/ai-solutions-guwahati",
  },
  openGraph: {
    title: "AI Solutions Company in Guwahati & Assam | Gen AI Digital Solutions",
    description:
      "Custom AI chatbots, LLM integrations, ML models, and intelligent automation for businesses in India, UK & USA. One of only 2 AI companies in Guwahati.",
    url: "https://genaidigitalsolution.com/ai-solutions-guwahati",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What AI services does Gen AI Digital Solutions offer in Guwahati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer custom AI chatbot development, LLM (Large Language Model) integration, machine learning model development, AI-powered automation, recommendation engines, computer vision solutions, and generative AI implementations for businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Are you the only AI company in Guwahati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are one of only 2 companies in Guwahati offering dedicated AI solutions services — which makes us uniquely positioned to help businesses in Assam and Northeast India adopt AI before their competitors do.",
      },
    },
    {
      "@type": "Question",
      name: "Can small businesses in Assam afford AI solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer AI solutions scaled for businesses of all sizes — from simple AI chatbots for small businesses to complex machine learning systems for enterprise clients. We provide transparent pricing and phased implementation plans.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build AI solutions for international clients in the UK and USA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with international clients in the UK and USA seeking world-class AI development at India's competitive price point. Our team delivers enterprise-grade AI solutions at a fraction of UK/US agency costs.",
      },
    },
    {
      "@type": "Question",
      name: "What large language models (LLMs) do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with OpenAI GPT models, Google Gemini, Anthropic Claude, Meta LLaMA, and open-source models via Ollama. We help you select the most cost-effective and capable model for your specific business use case.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help my business in Guwahati or Assam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can help your business automate customer support, analyse data for insights, personalise customer experiences, streamline internal workflows, generate marketing content, and much more — giving you a significant competitive edge in local and national markets.",
      },
    },
  ],
}

export default function AISolutionsGuwahatiPage() {
  return (
    <ServicePageTemplate
      badge="AI Solutions Company — Guwahati, Assam"
      headline="Premier AI Solutions Company"
      headlineAccent="in Guwahati, Assam & India"
      subheadline="Custom AI chatbots, LLM integrations, machine learning models, and intelligent business automation — serving companies in India, UK & USA with one of Guwahati's only dedicated AI teams."
      description="Gen AI Digital Solutions is one of only two dedicated AI solutions companies in Guwahati, Assam — giving local businesses a unique first-mover advantage when adopting artificial intelligence. We design and implement custom AI solutions tailored to your specific business needs: from customer-facing AI chatbots and generative AI tools to backend machine learning pipelines and predictive analytics models. Our AI expertise spans the full spectrum of modern AI technologies including Large Language Models (LLMs), computer vision, natural language processing (NLP), and intelligent automation. We serve businesses of all sizes — from Guwahati startups and Assam enterprises to India-wide companies and international clients in the United Kingdom and United States."
      iconName="zap"
      primaryMarket="Based in Guwahati, Assam — One of Only 2 AI Companies in Guwahati"
      markets={["Guwahati, Assam", "Northeast India", "Pan-India", "United Kingdom", "United States"]}
      features={[
        {
          title: "Custom AI Chatbots",
          description:
            "Intelligent, context-aware AI chatbots trained on your data for customer support, sales, and internal use.",
        },
        {
          title: "LLM Integration & Fine-tuning",
          description:
            "Integrate GPT, Gemini, Claude, or LLaMA models into your existing products and workflows.",
        },
        {
          title: "Machine Learning Models",
          description:
            "Custom ML models for prediction, classification, clustering, and anomaly detection.",
        },
        {
          title: "Generative AI Solutions",
          description:
            "AI-powered content generation, image generation, and creative tools for your business.",
        },
        {
          title: "Intelligent Process Automation",
          description:
            "Replace repetitive manual tasks with smart AI automation that learns and improves over time.",
        },
        {
          title: "AI-Powered Data Analytics",
          description:
            "Turn raw business data into actionable insights using AI-powered analytics and forecasting.",
        },
        {
          title: "Computer Vision Solutions",
          description:
            "Image recognition, object detection, and video analysis for manufacturing, retail, and security.",
        },
        {
          title: "NLP & Sentiment Analysis",
          description:
            "Extract meaning from text data — reviews, feedback, support tickets — with natural language processing.",
        },
        {
          title: "AI Strategy Consulting",
          description:
            "Not sure where to start? We help you identify the highest-impact AI opportunities in your business.",
        },
      ]}
      benefitsList={[
        "One of only 2 dedicated AI companies in Guwahati",
        "Experience with GPT-4, Gemini, Claude, LLaMA, and open-source LLMs",
        "AI solutions for every budget — startup to enterprise",
        "Competitive India pricing for UK & USA clients",
        "Practical, ROI-focused AI — not just tech for tech's sake",
        "Full data privacy and security compliance",
        "Phased implementation to minimise business disruption",
        "Ongoing AI model monitoring, retraining, and optimisation",
      ]}
      faqs={[
        {
          question: "What AI services does Gen AI Digital Solutions offer in Guwahati?",
          answer:
            "We offer custom AI chatbot development, LLM integration, machine learning model development, AI-powered automation, recommendation engines, computer vision solutions, and generative AI implementations for businesses.",
        },
        {
          question: "Are you the only AI company in Guwahati?",
          answer:
            "We are one of only 2 companies in Guwahati offering dedicated AI solutions services — which makes us uniquely positioned to help businesses in Assam and Northeast India adopt AI before their competitors do.",
        },
        {
          question: "Can small businesses in Assam afford AI solutions?",
          answer:
            "Yes. We offer AI solutions scaled for businesses of all sizes — from simple AI chatbots for small businesses to complex machine learning systems for enterprise clients. We provide transparent pricing and phased implementation plans.",
        },
        {
          question: "Do you build AI solutions for international clients in the UK and USA?",
          answer:
            "Yes. We work with international clients in the UK and USA seeking world-class AI development at India's competitive price point. Our team delivers enterprise-grade AI solutions at a fraction of UK/US agency costs.",
        },
        {
          question: "What large language models (LLMs) do you work with?",
          answer:
            "We work with OpenAI GPT models, Google Gemini, Anthropic Claude, Meta LLaMA, and open-source models via Ollama. We help you select the most cost-effective and capable model for your specific business use case.",
        },
        {
          question: "How can AI help my business in Guwahati or Assam?",
          answer:
            "AI can help your business automate customer support, analyse data for insights, personalise customer experiences, streamline internal workflows, generate marketing content, and much more — giving you a significant competitive edge in local and national markets.",
        },
      ]}
      ctaTitle="Claim Your AI Advantage — Before Your Competitors Do"
      ctaDescription="There are only 2 dedicated AI companies in all of Guwahati. Don't let your competitors get there first. Get a free AI strategy session today — we serve Assam, India, UK & USA."
      jsonLdData={faqJsonLd}
    />
  )
}
