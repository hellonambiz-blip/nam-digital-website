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

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 py-14">
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
              href="tel:+14125404466"
              aria-label="Call NAM Digital at 412-540-4466"
              className="mt-3 flex items-center gap-2.5 text-sm text-navy-400 transition-colors hover:text-teal-400"
            >
              <Phone aria-hidden="true" className="h-4 w-4 text-teal-500" />
              (412) 540-4466
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
  );
}
