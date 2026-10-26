import { FileText } from 'lucide-react';
import { BRAND } from '@/lib/brand';

export const metadata = { title: 'Terms of Service — AgriConnect BW', alternates: { canonical: `${BRAND.domain}/terms` } };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="flex items-center gap-2 text-[#0F5D2E]">
          <FileText className="h-6 w-6" />
          <h1 className="text-3xl font-extrabold text-foreground">Terms of Service</h1>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: October 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-bold text-foreground">1. The platform</h2>
            <p className="mt-2">
              AgriConnect BW is a marketplace that connects farmers, buyers, investors, and
              consultants across Botswana. We facilitate the connection — we do not buy, sell, or
              guarantee any product.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">2. Product quality & verification</h2>
            <p className="mt-2">
              Prices are set manually by sellers. We are not responsible for the quality, health, or
              accuracy of any listed product. Always verify products before buying and agree on
              terms directly with the other party.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">3. No liability</h2>
            <p className="mt-2">
              Transactions happen directly between users, typically via WhatsApp. AgriConnect BW is
              not responsible for payment disputes, product quality, delivery, or any agreement
              made between parties.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">4. Honest listings</h2>
            <p className="mt-2">
              Users agree to post accurate photos, prices, and details. Misuse may result in
              removal from the platform.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">5. Contact</h2>
            <p className="mt-2">
              Contact us via our{' '}
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
