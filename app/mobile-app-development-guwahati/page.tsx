import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Mobile App Development Company in Guwahati, Assam",
  description:
    "Top mobile app development company in Guwahati, Assam. Custom iOS & Android apps using React Native and Flutter. Serving businesses across India, UK & USA with cost-effective, high-quality mobile solutions.",
  keywords: [
    "mobile app development Guwahati",
    "mobile app development Assam",
    "app development company Guwahati",
    "iOS app development Assam",
    "Android app development Guwahati",
    "React Native app development India",
    "Flutter app development India",
    "mobile app development India",
    "app development company India",
    "mobile app development UK",
    "mobile app development USA",
    "cross platform app development India",
    "restaurant app development Guwahati",
    "e-commerce app development Assam",
    "custom mobile app development India",
  ],
  alternates: {
    canonical: "https://genaidigitalsolution.com/mobile-app-development-guwahati",
  },
  openGraph: {
    title: "Mobile App Development Company in Guwahati, Assam | Gen AI Digital Solutions",
    description:
      "Custom iOS & Android mobile app development in Guwahati. React Native & Flutter experts serving India, UK & USA businesses.",
    url: "https://genaidigitalsolution.com/mobile-app-development-guwahati",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you develop both iOS and Android apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build native iOS (Swift) and Android (Kotlin) apps, as well as cross-platform apps using React Native and Flutter — allowing you to target both platforms from a single codebase, saving cost and time.",
      },
    },
    {
      "@type": "Question",
      name: "How much does mobile app development cost in Guwahati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobile app development costs vary. A simple app with 5–10 screens starts from ₹50,000–₹1,50,000. Mid-tier apps with authentication, payments, and backend start from ₹2,00,000+. Complex enterprise apps are quoted after a detailed discovery session.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a mobile app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simple apps typically take 4–8 weeks. More complex apps with custom backends take 8–16 weeks. We provide a detailed timeline estimate after understanding your requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help publish the app to the App Store and Google Play Store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle the complete app submission process for both Apple App Store and Google Play Store, including app store optimisation (ASO) to maximise downloads.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build apps for UK and USA clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly partner with UK and USA businesses looking for high-quality offshore mobile app development at competitive India pricing. We operate on UK/US-friendly timezones and communication standards.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer post-launch app maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We offer flexible maintenance plans covering bug fixes, OS updates, feature additions, and performance monitoring to keep your app running smoothly after launch.",
      },
    },
  ],
}

export default function MobileAppDevelopmentGuwahatiPage() {
  return (
    <ServicePageTemplate
      badge="Mobile App Development — Guwahati, Assam"
      headline="Mobile App Development Company"
      headlineAccent="in Guwahati & Across India"
      subheadline="Custom iOS and Android mobile apps built with React Native & Flutter — for startups, restaurants, retailers, and enterprises in Assam, India, UK & USA."
      description="Gen AI Digital Solutions is a leading mobile app development company based in Guwahati, Assam. We design, develop, and launch high-quality mobile applications for both iOS and Android platforms. Our team specialises in cross-platform development using React Native and Flutter, enabling us to deliver apps for both platforms efficiently without compromising on performance or user experience. We have built apps for e-commerce, food delivery, business management, social networking, and enterprise use cases. Our clients include businesses in Guwahati and Assam, growing companies across India, and international clients in the United Kingdom and United States who value our premium quality at India-competitive pricing."
      iconName="smartphone"
      primaryMarket="Based in Guwahati, Assam — Serving India, UK & USA"
      markets={["Guwahati, Assam", "Northeast India", "Pan-India", "United Kingdom", "United States"]}
      features={[
        {
          title: "iOS App Development",
          description: "Native iOS apps built with Swift and SwiftUI for a premium Apple device experience.",
        },
        {
          title: "Android App Development",
          description: "High-performance Android apps built with Kotlin for the full Android ecosystem.",
        },
        {
          title: "React Native Cross-Platform Apps",
          description:
            "One codebase, two platforms — React Native apps with near-native performance and beautiful UI.",
        },
        {
          title: "Flutter App Development",
          description: "Beautiful, fast cross-platform apps with Flutter's modern widget-based architecture.",
        },
        {
          title: "E-Commerce Mobile Apps",
          description:
            "Full-featured shopping apps with product catalogues, cart, payments, order tracking, and push notifications.",
        },
        {
          title: "Restaurant & Food Delivery Apps",
          description: "Custom food ordering, delivery tracking, and restaurant management apps for Guwahati businesses.",
        },
        {
          title: "Enterprise Mobile Apps",
          description:
            "Internal business apps for employee management, field operations, and workflow automation.",
        },
        {
          title: "App Store Submission & ASO",
          description:
            "Complete App Store and Play Store submission with app store optimisation to maximise visibility.",
        },
        {
          title: "App Maintenance & Updates",
          description: "Ongoing maintenance, OS compatibility updates, and new feature development post-launch.",
        },
      ]}
      benefitsList={[
        "Expert React Native and Flutter cross-platform development",
        "UI/UX design optimised for mobile user experience",
        "17+ apps and digital products successfully delivered",
        "App Store & Google Play submission handled end-to-end",
        "Push notifications, payments, and maps integration",
        "Secure backend with real-time capabilities (WebSockets)",
        "Competitive pricing — up to 60% more cost-effective than UK/USA agencies",
        "Post-launch support and feature development roadmap",
      ]}
      faqs={[
        {
          question: "Do you develop both iOS and Android apps?",
          answer:
            "Yes. We build native iOS (Swift) and Android (Kotlin) apps, as well as cross-platform apps using React Native and Flutter — allowing you to target both platforms from a single codebase, saving cost and time.",
        },
        {
          question: "How much does mobile app development cost in Guwahati?",
          answer:
            "Mobile app development costs vary. A simple app with 5–10 screens starts from ₹50,000–₹1,50,000. Mid-tier apps with authentication, payments, and backend start from ₹2,00,000+. Complex enterprise apps are quoted after a detailed discovery session.",
        },
        {
          question: "How long does it take to develop a mobile app?",
          answer:
            "Simple apps typically take 4–8 weeks. More complex apps with custom backends take 8–16 weeks. We provide a detailed timeline estimate after understanding your requirements.",
        },
        {
          question: "Can you help publish the app to the App Store and Google Play Store?",
          answer:
            "Yes. We handle the complete app submission process for both Apple App Store and Google Play Store, including app store optimisation (ASO) to maximise downloads.",
        },
        {
          question: "Do you build apps for UK and USA clients?",
          answer:
            "Yes. We regularly partner with UK and USA businesses looking for high-quality offshore mobile app development at competitive India pricing. We operate on UK/US-friendly timezones and communication standards.",
        },
        {
          question: "Do you offer post-launch app maintenance?",
          answer:
            "Absolutely. We offer flexible maintenance plans covering bug fixes, OS updates, feature additions, and performance monitoring to keep your app running smoothly after launch.",
        },
      ]}
      ctaTitle="Build Your App With Guwahati's Best Mobile Team"
      ctaDescription="Get a free consultation and app scope estimate. We build iOS and Android apps for businesses in Assam, across India, and for international clients in UK & USA — at prices that make sense."
      jsonLdData={faqJsonLd}
    />
  )
}
