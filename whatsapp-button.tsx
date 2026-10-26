'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND } from '@/lib/brand';

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 overflow-hidden rounded-2xl border border-border bg-card shadow-xl animate-fade-up">
          <div className="flex items-center justify-between bg-[#D4A45A] px-4 py-3">
            <span className="font-bold text-[#0F5D2E]">AgriConnect Community</span>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-[#0F5D2E]">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4 text-sm text-muted-foreground">
            Join our WhatsApp community for updates, farming tips, and to connect with buyers and farmers across Botswana.
            <a
              href={BRAND.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-lg bg-[#D4A45A] px-4 py-2 text-center font-bold text-[#0F5D2E] transition hover:brightness-105"
            >
              Join Community
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Join WhatsApp community"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4A45A] text-[#0F5D2E] shadow-lg animate-pulse-ring transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </div>
  );
}
