import { Phone } from 'lucide-react';

/** Visible only below the desktop breakpoint. Uses the phone dialer via tel:. */
export default function MobileCallButton() {
  return (
    <a
      href="tel:+14125404466"
      aria-label="Call NAM Digital at 412-540-4466"
      className="fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-teal-500 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-navy-950/25 transition-colors hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 lg:hidden"
    >
      <Phone aria-hidden="true" className="h-5 w-5" />
      Call now
    </a>
  );
}
