import { useEffect, useState } from 'react';
import { Globe, Mail, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Who We Help', href: '#who-we-help' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const EMAIL = 'hello.nam.biz@gmail.com';
const PHONE_DISPLAY = '(412) 540-4466';
const PHONE_LINK = 'tel:+14125404466';

export default function Footer() {
  const [hideMobileCall, setHideMobileCall] = useState(false);

  useEffect(() => {
    // Avoid covering the call/email cards or footer links on small screens.
    const sections = [document.getElementById('contact'), document.getElementById('site-footer')]
      .filter((section): section is HTMLElement => section !== null);
    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    const visibility = new Map<Element, boolean>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visibility.set(entry.target, entry.isIntersecting));
      setHideMobileCall(Array.from(visibility.values()).some(Boolean));
    });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <footer id="site-footer" className="bg-navy-950 py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500">
                <Globe className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">
                NAM<span className="text-teal-400"> Digital</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-400">
              Professional websites and ongoing support for busy small-business
              owners. Based near Pittsburgh, Pennsylvania.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-navy-200">
              Navigation
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-navy-400 transition-colors hover:text-teal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-navy-200">
              Get In Touch
            </h4>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 flex items-center gap-2.5 text-sm text-navy-400 transition-colors hover:text-teal-400"
            >
              <Mail className="h-4 w-4 text-teal-500" />
              {EMAIL}
            </a>
            <a
              href={PHONE_LINK}
              aria-label={`Call NAM Digital at ${PHONE_DISPLAY}`}
              className="mt-4 flex items-center gap-2.5 text-sm text-navy-300 transition-colors hover:text-teal-400"
            >
              <Phone className="h-4 w-4 text-teal-500" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <p className="mt-3 text-sm text-navy-500">
              Serving local businesses in person and clients remotely.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-navy-500">
            © {new Date().getFullYear()} NAM Digital. All rights reserved.
          </p>
          <p className="text-sm text-navy-500">
            Professional websites. Made simple.
          </p>
        </div>
      </div>
    </footer>
    {!hideMobileCall && (
      <a
        href={PHONE_LINK}
        aria-label={`Call NAM Digital at ${PHONE_DISPLAY}`}
        className="fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-navy-900/20 transition-colors hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 lg:hidden"
        style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call now
      </a>
    )}
    </>
  );
}
