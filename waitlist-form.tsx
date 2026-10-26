'use client';

import { useEffect, useState } from 'react';
import { supabase, type WaitlistEntry } from '@/lib/supabase';
import { BRAND } from '@/lib/brand';
import { CheckCircle2, Loader2 } from 'lucide-react';

const DISTRICTS = [
  'Gaborone',
  'Francistown',
  'Maun',
  'Molepolole',
  'Mogoditshane',
  'Serowe',
  'Selebi-Phikwe',
  'Kanye',
  'Mochudi',
  'Lobatse',
  'Palapye',
  'Tlokweng',
  'Ramotswa',
  'Ghanzi',
  'Kasane',
];

const ROLES = ['farmer', 'buyer', 'investor', 'consultant'] as const;
type Role = (typeof ROLES)[number];

type ProofItem = { name: string; location: string; hoursAgo: number };
const PROOF_FALLBACK: ProofItem[] = [
  { name: 'Mma K.', location: 'Mogoditshane', hoursAgo: 2 },
  { name: 'Rra T.', location: 'Molepolole', hoursAgo: 5 },
  { name: 'GreenField', location: 'Tlokweng', hoursAgo: 8 },
];

export function WaitlistForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [role, setRole] = useState<Role>('farmer');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const [proof, setProof] = useState<ProofItem[]>(PROOF_FALLBACK);
  const [count, setCount] = useState(347);

  useEffect(() => {
    let active = true;
    (async () => {
      const [{ data: recent }, { count: c }] = await Promise.all([
        supabase
          .from('waitlist')
          .select('name, location, created_at')
          .order('created_at', { ascending: false })
          .limit(5),
        supabase.from('waitlist').select('*', { count: 'exact', head: true }),
      ]);
      if (!active) return;
      if (c) setCount(347 + c);
      if (recent && recent.length > 0) {
        const items: ProofItem[] = recent.slice(0, 3).map((r: { name: string; location: string; created_at: string }) => ({
          name: r.name.split(' ')[0].slice(0, 5) + (r.name.split(' ')[0].length > 5 ? '.' : ''),
          location: r.location,
          hoursAgo: Math.max(1, Math.round((Date.now() - new Date(r.created_at).getTime()) / 3600000)),
        }));
        setProof(items);
      }
    })();
    return () => { active = false; };
  }, []);

  const fireGaEvent = () => {
    try {
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'join_waitlist', {
          event_category: 'engagement',
          event_label: role,
        });
      }
    } catch {}
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !location) {
      setError('Please fill in all fields.');
      setStatus('error');
      return;
    }
    if (!consent) {
      setError('Please agree to the Privacy Policy to continue.');
      setStatus('error');
      return;
    }
    const cleanPhone = phone.replace(/\s/g, '');
    if (!/^(\+?267)?\d{7,8}$/.test(cleanPhone)) {
      setError('Please enter a valid Botswana number (e.g. 71 234 567 or +267 71 234 567).');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setError('');
    const { error: insError } = await supabase
      .from('waitlist')
      .insert({ name, phone: cleanPhone, location, role });
    if (insError) {
      setError('Something went wrong saving your spot. Please try again.');
      setStatus('error');
      return;
    }
    fireGaEvent();
    setStatus('success');
    setCount((c) => c + 1);
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
        <h3 className="mt-4 text-2xl font-extrabold text-foreground">Success! You joined AgriConnect BW</h3>
        <p className="mt-2 text-muted-foreground">
          We saved your spot, {name.split(' ')[0]}. Join our WhatsApp community for launch updates.
        </p>
        <a
          href={BRAND.whatsappCommunity}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#D4A45A] px-6 py-3.5 font-bold text-[#0F5D2E] transition hover:brightness-105"
        >
          Join WhatsApp Community for Updates
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h3 className="text-center text-2xl font-extrabold text-foreground">Be First When We Launch</h3>
      <p className="mt-1 text-center text-sm text-muted-foreground">
        Join {count.toLocaleString()}+ farmers, buyers, and investors already on the list.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold">Phone (Botswana)</label>
          <div className="flex">
            <span className="inline-flex items-center rounded-l-xl border border-r-0 border-input bg-muted px-3 py-3 text-sm font-semibold text-muted-foreground">
              +267
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="71 234 567"
              className="w-full rounded-r-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select your district…</option>
            {DISTRICTS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold">I am a…</label>
          <div className="grid grid-cols-2 gap-3">
            {ROLES.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`rounded-xl border px-4 py-3 text-sm font-bold capitalize transition ${
                  role === r
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-input bg-background hover:border-primary/50'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <label className="flex items-start gap-2.5 text-xs text-muted-foreground">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-input accent-[#0F5D2E]"
          />
          <span>
            I agree to the{' '}
            <a href="/privacy" className="font-semibold text-primary underline">Privacy Policy</a>{' '}
            and to be contacted via WhatsApp about AgriConnect updates.
          </span>
        </label>

        {error && (
          <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-bold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
        >
          {status === 'loading' ? (
            <><Loader2 className="h-5 w-5 animate-spin" /> Joining…</>
          ) : (
            'Join Waitlist'
          )}
        </button>
      </form>

      <div className="mt-5 space-y-2 border-t border-border pt-4">
        {proof.map((p, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-[#D4A45A]" />
            <span>
              <span className="font-semibold text-foreground">{p.name}</span> from {p.location} joined {p.hoursAgo}h ago
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export type { WaitlistEntry };
