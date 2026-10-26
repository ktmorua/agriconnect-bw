import { cn } from '@/lib/utils';

const LOGO_SOURCE = '/Screenshot_2026-10-26-20-59-43-318_com.whatsapp.jpg';

export function Logo({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <div
      className={cn('relative shrink-0 overflow-hidden rounded-full', className)}
      style={{
        width: size,
        height: size,
        background: '#0F5D2E',
        border: '2px solid #D4A45A',
      }}
      aria-label="AgriConnect BW logo"
    >
      {/* The uploaded source includes generous screenshot margins; centered cover keeps the circular mark visible. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_SOURCE}
        alt="AgriConnect BW"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
