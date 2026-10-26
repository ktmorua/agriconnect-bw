import {
  Menu,
  Camera,
  Tag,
  MessageCircle,
  Radio,
  PlayCircle,
  Wheat,
  Beef,
  FileText,
  FlaskConical,
  Wrench,
  Video,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import { WaitlistForm } from '@/components/waitlist-form';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { BRAND } from '@/lib/brand';

const IMG = {
  maize: 'https://images.pexels.com/photos/38668660/pexels-photo-38668660.jpeg?auto=compress&cs=tinysrgb&w=400',
  cattle: 'https://images.pexels.com/photos/26706139/pexels-photo-26706139.jpeg?auto=compress&cs=tinysrgb&w=400',
  poultry: 'https://images.pexels.com/photos/17765441/pexels-photo-17765441.jpeg?auto=compress&cs=tinysrgb&w=400',
  livestream: 'https://images.pexels.com/photos/16678079/pexels-photo-16678079.jpeg?auto=compress&cs=tinysrgb&w=900',
  vegetables: 'https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=400',
  soil: 'https://images.pexels.com/photos/8851253/pexels-photo-8851253.jpeg?auto=compress&cs=tinysrgb&w=400',
  seeds: 'https://images.pexels.com/photos/29319112/pexels-photo-29319112.jpeg?auto=compress&cs=tinysrgb&w=400',
};

const SERVICES = [
  { icon: Wheat, title: 'Crops & Fresh Produce', desc: 'Maize, vegetables, sorghum — sell your harvest directly to buyers.', img: IMG.vegetables },
  { icon: Beef, title: 'Livestock & Poultry', desc: 'Cattle, goats, Tswana chicken — showcase and sell to the highest bidder.', img: IMG.cattle },
  { icon: FileText, title: 'Business Proposals & Funding', desc: 'Seek investors for farm projects. Present your plan to ready funders.', img: IMG.poultry },
  { icon: FlaskConical, title: 'Versatile Consultancy', desc: 'CIPA registration, business plans, soil testing, farm planning.', img: IMG.soil },
  { icon: Wrench, title: 'Farm Inputs & Equipment', desc: 'Seeds, feeds, irrigation tools — source what your farm needs.', img: IMG.seeds },
  { icon: Video, title: 'Expert Advice & Live Training', desc: 'Go live from your farm. Share knowledge and build trust.', img: IMG.livestream },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
          <div className="flex items-center gap-2.5">
            <Logo size={40} />
            <div className="leading-tight">
              <div className="text-base font-extrabold text-foreground">AgriConnect BW</div>
              <div className="text-[10px] font-semibold text-muted-foreground">Botswana</div>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <a href="#how" className="transition hover:text-primary">How it Works</a>
            <a href="#services" className="transition hover:text-primary">Services</a>
            <a href="#live" className="transition hover:text-primary">Live</a>
            <a href="#waitlist" className="transition hover:text-primary">Join Waitlist</a>
          </nav>
          <a
            href="#waitlist"
            className="rounded-xl bg-[#D4A45A] px-4 py-2.5 text-sm font-bold text-[#0F5D2E] transition hover:brightness-105"
          >
            Join Free
          </a>
          <button className="ml-1 text-muted-foreground md:hidden" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/8 via-background to-[#D4A45A]/8" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A45A]/40 bg-[#D4A45A]/15 px-4 py-1.5 text-xs font-bold text-[#0F5D2E]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#D4A45A]" />
              Trusted by 347+ Farmers Across Botswana
            </div>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-balance text-foreground sm:text-4xl md:text-5xl">
              Everything Agriculture, In One Platform
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Crops, Livestock, Business Proposals & Expert Consultancy. AgriConnect BW connects
              farmers, buyers, investors and consultants across Botswana. No middleman. Direct WhatsApp.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#waitlist"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0F5D2E] px-6 py-4 font-bold text-white transition hover:bg-[#0F5D2E]/90"
              >
                Sell Your Farm Produce — Join Free <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#0F5D2E] px-6 py-4 font-bold text-[#0F5D2E] transition hover:bg-[#0F5D2E]/5"
              >
                Explore Farming Services
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative animate-float">
              <div className="relative w-[280px] rounded-[2.5rem] border-[10px] border-foreground/90 bg-background shadow-2xl sm:w-[310px]">
                <div className="absolute left-1/2 top-0 h-5 w-32 -translate-x-1/2 rounded-b-2xl bg-foreground/90" />
                <div className="overflow-hidden rounded-[2rem]">
                  <div className="bg-gradient-to-b from-[#0F5D2E] to-[#0F5D2E]/80 px-4 pt-8 pb-4 text-white">
                    <div className="text-sm font-bold">AgriConnect Feed</div>
                    <div className="text-[11px] opacity-80">Live · Across Botswana</div>
                  </div>
                  <div className="space-y-3 bg-muted/40 p-3">
                    <FeedCard img={IMG.maize} name="Mma K" title="Maize 50kg" price="P320" loc="Mogoditshane" />
                    <FeedCard img={IMG.cattle} name="Rra T" title="Tswana Cattle" price="P4,500" loc="Molepolole" />
                    <FeedCard img={IMG.poultry} name="GreenField" title="Business Proposal: Poultry Project" price="Seeking P50k Investor" loc="Tlokweng" investor />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">How It Works</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Camera, step: 1, title: 'Showcase', desc: 'Post crops, livestock, business proposal or consultancy service with photos.' },
              { icon: Tag, step: 2, title: 'Detail', desc: 'Add your own price (P), location, and details — prices are manual, set by you.' },
              { icon: MessageCircle, step: 3, title: 'Connect', desc: 'Buyers chat you directly on your own WhatsApp — no middleman.' },
            ].map((s) => (
              <div key={s.step} className="relative rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#D4A45A] px-3 py-1 text-xs font-extrabold text-[#0F5D2E]">
                  Step {s.step}
                </div>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A45A]/15 text-[#6B3F2A]">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="mt-4 text-lg font-extrabold text-[#0F5D2E]">{s.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">What You Can Do On AgriConnect</h2>
            <p className="mt-2 text-muted-foreground">Six ways to grow, sell, and connect across Botswana.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4A45A] text-[#0F5D2E]">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live section */}
      <section id="live" className="bg-[#0F5D2E] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.livestream}
              alt="Farmer livestreaming from the farm"
              className="aspect-video w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D4A45A] text-[#0F5D2E] shadow-lg transition hover:scale-110">
                <PlayCircle className="h-10 w-10" />
              </div>
            </div>
            <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> LIVE
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A45A]/20 px-3 py-1 text-xs font-bold text-[#D4A45A]">
              <Radio className="h-3.5 w-3.5" /> Go Live
            </div>
            <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
              Go Live From Your Farm — Build Instant Trust
            </h2>
            <p className="mt-3 text-white/75">
              Stream your harvest, livestock health, farm tour live to buyers and investors.
              No more guessing — they see it with their own eyes.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/85">
              <li className="flex items-center gap-2"><span className="text-[#D4A45A]">●</span> Stream from your phone — no equipment needed</li>
              <li className="flex items-center gap-2"><span className="text-[#D4A45A]">●</span> Buyers and investors watch in real time</li>
              <li className="flex items-center gap-2"><span className="text-[#D4A45A]">●</span> Build trust — repeat buyers come back</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="relative overflow-hidden border-t border-border bg-gradient-to-b from-[#0F5D2E]/5 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-xl">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-[#0F5D2E] py-12 text-white/80">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo size={36} />
              <span className="font-extrabold text-white">AgriConnect BW</span>
            </div>
            <p className="mt-3 text-sm text-white/60">{BRAND.tagline}</p>
            <p className="mt-1 text-xs text-white/40">{BRAND.domain}</p>
          </div>
          <div className="text-sm">
            <h4 className="font-bold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="/privacy" className="transition hover:text-[#D4A45A]">Privacy Policy</a></li>
              <li><a href="/terms" className="transition hover:text-[#D4A45A]">Terms of Service</a></li>
              <li>
                <a href={BRAND.whatsappCommunity} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#D4A45A]">
                  WhatsApp Community
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h4 className="font-bold text-white">Connect</h4>
            <a
              href={BRAND.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#D4A45A] px-4 py-2.5 font-bold text-[#0F5D2E] transition hover:brightness-105"
            >
              <MessageCircle className="h-4 w-4" /> Join WhatsApp Community
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-white/15 px-4 pt-6 text-center text-xs text-white/40 sm:px-6">
          © {new Date().getFullYear()} AgriConnect BW · {BRAND.domain}
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}

function FeedCard({
  img,
  name,
  title,
  price,
  loc,
  investor,
}: {
  img: string;
  name: string;
  title: string;
  price: string;
  loc: string;
  investor?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={title} className="h-24 w-full object-cover" loading="lazy" />
      <div className="p-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-foreground">{name}</span>
          {!investor && (
            <span className="rounded-md bg-[#D4A45A] px-1.5 py-0.5 text-xs font-extrabold text-[#0F5D2E]">
              {price}
            </span>
          )}
        </div>
        <div className="mt-0.5 text-[11px] font-semibold text-foreground/80">{title}</div>
        {investor && (
          <div className="mt-1 rounded-md bg-[#0F5D2E] px-1.5 py-0.5 text-[10px] font-bold text-white">
            {price}
          </div>
        )}
        <div className="mt-0.5 flex items-center gap-1 text-[10px] text-muted-foreground">
          <MapPin className="h-2.5 w-2.5" /> {loc}
        </div>
      </div>
    </div>
  );
}
