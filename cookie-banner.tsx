'use client';

import { useEffect, useState } from 'react';
import { BRAND } from '@/lib/brand';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('ac_cookie_consent');
    if (!stored) {
      setVisible(true);
    } else {
      setConsent(stored as 'accepted' | 'declined');
    }
  }, []);

  const choose = (choice: 'accepted' | 'declined') => {
    localStorage.setItem('ac_cookie_consent', choice);
    setConsent(choice);
    setVisible(false);
    if (choice === 'accepted') {
      window.location.reload();
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-in border-t border-border bg-card px-4 py-4 shadow-2xl sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          We use cookies and Google Analytics (GA4) to improve your experience. See our{' '}
          <a href="/privacy" className="font-semibold text-primary underline">Privacy Policy</a>.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => choose('declined')}
            className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted"
          >
            Decline
          </button>
          <button
            onClick={() => choose('accepted')}
            className="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
