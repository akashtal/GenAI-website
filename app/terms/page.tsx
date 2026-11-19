import type { Metadata } from "next"
import Link from "next/link"
import { StaticPageShell } from "@/components/static-page-shell"
import { SITE } from "@/lib/site"

// Plain-language website terms (use of this site, not a client service contract – projects are governed
// by the written quote/agreement for each engagement). Have it reviewed by a legal adviser.
export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms that apply when you use the ${SITE.name} website.`,
  alternates: { canonical: "/terms" },
}

const UPDATED = "20 November 2026"

export default function TermsPage() {
  return (
    <StaticPageShell crumb="Terms of Use" title="Terms of Use" intro={<p>Last updated: {UPDATED}</p>}>
      <div className="space-y-10 leading-relaxed text-white/75 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white">
        <section>
          <p>
            These terms apply to your use of {SITE.url.replace("https://", "")} (the &ldquo;website&rdquo;), operated by {SITE.name},{" "}
            {SITE.city}, {SITE.region}, {SITE.country}. By using the website you agree to them.
          </p>
        </section>

        <section>
          <h2>Information on this website</h2>
          <p>
            Content on the website, including prices, timelines and service descriptions, is general information. Prices shown are
            typical ranges, not offers. The scope, price and timeline of any project are set only in the written quote or agreement we
            send you for that project.
          </p>
        </section>

        <section>
          <h2>Client projects</h2>
          <p>
            Work we do for clients is governed by the quote, proposal or agreement accepted for that project, which takes precedence
            over these website terms.
          </p>
        </section>

        <section>
          <h2>Intellectual property</h2>
          <p>
            The website&apos;s content, design and branding belong to {SITE.name} unless stated otherwise. Project screenshots are shown
            as examples of our work. You may not copy or reuse website content for commercial purposes without our permission.
          </p>
        </section>

        <section>
          <h2>Acceptable use</h2>
          <p>
            Do not misuse the website: no attempts to disrupt it, gain unauthorised access, send spam through our forms, or submit
            false information.
          </p>
        </section>

        <section>
          <h2>Third-party links</h2>
          <p>The website links to third-party services (for example WhatsApp and social networks). We are not responsible for their content or policies.</p>
        </section>

        <section>
          <h2>Limitation of liability</h2>
          <p>
            The website is provided &ldquo;as is&rdquo;. To the extent permitted by law, we are not liable for losses arising from use of,
            or inability to use, the website or reliance on its general information.
          </p>
        </section>

        <section>
          <h2>Privacy</h2>
          <p>
            Our <Link href="/privacy-policy" className="text-emerald-300 underline underline-offset-4">Privacy Policy</Link> explains how
            we handle personal information.
          </p>
        </section>

        <section>
          <h2>Governing law</h2>
          <p>These terms are governed by the laws of India, and courts in Guwahati, Assam have jurisdiction.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${SITE.email}`} className="text-emerald-300 underline underline-offset-4">{SITE.email}</a>
          </p>
        </section>
      </div>
    </StaticPageShell>
  )
}
