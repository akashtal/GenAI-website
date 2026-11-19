import type { Metadata } from "next"
import { StaticPageShell } from "@/components/static-page-shell"
import { SITE } from "@/lib/site"

// Plain-language draft describing what this website actually does with data (forms -> email/DB,
// Google Analytics / Tag Manager / Google Ads conversion tracking). Have it reviewed by a legal adviser.
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses and protects personal information submitted through this website.`,
  alternates: { canonical: "/privacy-policy" },
}

const UPDATED = "20 November 2026"

export default function PrivacyPolicyPage() {
  return (
    <StaticPageShell crumb="Privacy Policy" title="Privacy Policy" intro={<p>Last updated: {UPDATED}</p>}>
      <div className="space-y-10 leading-relaxed text-white/75 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
        <section>
          <p>
            This policy explains how {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;), headquartered in {SITE.city}, {SITE.region},{" "}
            {SITE.country}, handles personal information when you use {SITE.url.replace("https://", "")}. We aim to comply with
            India&apos;s Digital Personal Data Protection Act, 2023 and other applicable laws.
          </p>
        </section>

        <section>
          <h2>Information we collect</h2>
          <ul>
            <li>
              <strong className="text-white">Information you give us</strong> through our contact, quote and calculator forms: your
              name, email address, phone or WhatsApp number, company name, the service you are interested in, budget range and your
              message.
            </li>
            <li>
              <strong className="text-white">Messages you send us</strong> directly by email, phone or WhatsApp.
            </li>
            <li>
              <strong className="text-white">Usage data</strong> collected automatically through cookies and similar technologies –
              such as pages visited, approximate location, device and browser type, and how you arrived at the site.
            </li>
          </ul>
        </section>

        <section>
          <h2>How we use your information</h2>
          <ul>
            <li>To reply to your enquiry, prepare quotes and provide the services you ask for.</li>
            <li>To send you a confirmation that we received your message.</li>
            <li>To understand how visitors use the website and improve it.</li>
            <li>To measure the effectiveness of our advertising.</li>
            <li>To meet legal obligations and protect against fraud or misuse.</li>
          </ul>
          <p className="mt-3">We do not sell your personal information.</p>
        </section>

        <section>
          <h2>Cookies, analytics and advertising</h2>
          <p>
            We use Google Analytics and Google Tag Manager to understand website traffic, and Google Ads conversion tracking to measure
            our advertising. These services may set cookies and process usage data on Google&apos;s servers. You can block or delete
            cookies in your browser settings, and opt out of Google Analytics with Google&apos;s browser add-on. We also use Vercel
            Speed Insights to measure page performance.
          </p>
        </section>

        <section>
          <h2>Service providers we share data with</h2>
          <ul>
            <li>Our website hosting provider (Vercel).</li>
            <li>Our email delivery provider, which sends form notifications and confirmation emails.</li>
            <li>Our database provider, where enquiries may be stored so they are not lost.</li>
            <li>Google (analytics and advertising measurement, as described above).</li>
            <li>WhatsApp/Meta, if you choose to contact us on WhatsApp.</li>
          </ul>
          <p className="mt-3">
            These providers process data on our behalf and some may store it outside India. We share only what is needed for the
            service they provide.
          </p>
        </section>

        <section>
          <h2>How long we keep information</h2>
          <p>
            We keep enquiry information for as long as needed to respond to you and manage any resulting project, and as required for
            legal, tax or accounting purposes. You can ask us to delete it at any time (see below).
          </p>
        </section>

        <section>
          <h2>Your rights</h2>
          <p>
            You may ask to access, correct or delete the personal information we hold about you, withdraw consent, or raise a grievance.
            Email us at{" "}
            <a href={`mailto:${SITE.email}`} className="text-emerald-300 underline underline-offset-4">{SITE.email}</a> and we will
            respond within a reasonable time.
          </p>
        </section>

        <section>
          <h2>Security</h2>
          <p>
            The website is served over HTTPS and we take reasonable technical and organisational measures to protect personal
            information. No method of transmission or storage is completely secure.
          </p>
        </section>

        <section>
          <h2>Changes to this policy</h2>
          <p>We may update this policy from time to time. The &ldquo;last updated&rdquo; date above shows when it last changed.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            {SITE.name}, {SITE.city}, {SITE.region}, {SITE.country} ·{" "}
            <a href={`mailto:${SITE.email}`} className="text-emerald-300 underline underline-offset-4">{SITE.email}</a> ·{" "}
            <a href={SITE.phoneHref} className="text-emerald-300 underline underline-offset-4">{SITE.phone}</a>
          </p>
        </section>
      </div>
    </StaticPageShell>
  )
}
