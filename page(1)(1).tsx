import { ShieldCheck } from 'lucide-react';
import { BRAND } from '@/lib/brand';

export const metadata = { title: 'Privacy Policy — AgriConnect BW', alternates: { canonical: `${BRAND.domain}/privacy` } };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="flex items-center gap-2 text-[#0F5D2E]">
          <ShieldCheck className="h-6 w-6" />
          <h1 className="text-3xl font-extrabold text-foreground">Privacy Policy</h1>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: October 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-bold text-foreground">1. Data we collect</h2>
            <p className="mt-2">
              When you join the AgriConnect BW waitlist, we collect: your name, phone number,
              location (district), and your role (farmer, buyer, investor, or consultant). This is
              stored securely to contact you when we launch and to connect you with relevant parties.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">2. Google Analytics</h2>
            <p className="mt-2">
              We use Google Analytics 4 (GA4 ID: {BRAND.ga4Id}) to understand how visitors use our
              site. You can decline this via the cookie banner — if you decline, GA4 is not loaded.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">3. Data storage</h2>
            <p className="mt-2">
              Your waitlist details are stored in our secure database. WhatsApp communication is
              optional — by joining the community you agree to WhatsApp&apos;s own terms.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">4. Your rights under the Botswana Data Protection Act</h2>
            <p className="mt-2">
              Under the Botswana Data Protection Act, you have the right to access, correct, and
              request deletion of your personal data. To exercise these rights, contact us through
              our WhatsApp community.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">5. Contact</h2>
            <p className="mt-2">
              We are contactable via our{' '}
              <a href={BRAND.whatsappCommunity} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0F5D2E] underline">
                WhatsApp Community
              </a>{' '}
              only. Domain: {BRAND.domain}
            </p>
          </section>
        </div>

        <a href="/" className="mt-10 inline-flex items-center rounded-xl bg-[#0F5D2E] px-5 py-3 font-bold text-white">
          Back to home
        </a>
      </div>
    </main>
  );
}
