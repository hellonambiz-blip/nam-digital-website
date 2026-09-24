import { useEffect, useState } from 'react';
import { Menu, X, Globe, Phone, MessageCircle, Mail } from 'lucide-react';

const PHONE_LINK = 'tel:+14125404466';
const SMS_LINK = 'sms:+14125404466';
const EMAIL = 'hello.nam.biz@gmail.com';
const SUBJECT = 'NAM Digital website inquiry';
const BODY = 'Hi Nicolas,\n\nMy business name: \nWhat my business does: \nExisting website (if any): \nWhat I need help with: \n\nMy name: \nBest way to reach me: ';
const GMAIL_INQUIRY = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Who We Help', href: '#who-we-help' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-lg shadow-navy-950/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 lg:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex shrink-0 items-center gap-2.5 text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 font-extrabold text-white">
            <Globe className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            NAM<span className="text-teal-400"> Digital</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="rounded-lg px-2 py-2 text-sm font-medium text-navy-100 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Compact desktop contact actions. Full phone and email details remain in Contact and Footer. */}
        <div className="hidden shrink-0 items-center gap-1.5 xl:flex">
          <a
            href={PHONE_LINK}
            aria-label="Call NAM Digital at (412) 540-4466"
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-teal-400/70 px-2.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </a>
          <a
            href={SMS_LINK}
            aria-label="Text NAM Digital at (412) 540-4466"
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-teal-400/70 px-2.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Text
          </a>
          <a
            href={GMAIL_INQUIRY}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email NAM Digital in Gmail"
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg bg-teal-500 px-2.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 xl:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-navy-950/98 backdrop-blur-md transition-all duration-300 xl:hidden ${
          mobileOpen ? 'max-h-screen border-t border-white/10' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block rounded-lg px-4 py-3 text-base font-medium text-navy-100 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="block rounded-xl bg-teal-500 px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-teal-400"
            >
              Ask About a Website
            </a>
          </li>
          <li className="mt-2 grid grid-cols-2 gap-2">
            <a
              href={SMS_LINK}
              onClick={() => setMobileOpen(false)}
              aria-label="Text NAM Digital at (412) 540-4466"
              className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-teal-400/70 px-3 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Text
            </a>
            <a
              href={GMAIL_INQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              aria-label="Email NAM Digital in Gmail"
              className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-teal-500 px-3 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
