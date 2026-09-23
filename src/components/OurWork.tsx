import { Monitor, Smartphone, ArrowUpRight, ImageOff } from 'lucide-react';
import Reveal from './Reveal';

export default function OurWork() {
  return (
    <section id="our-work" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-teal-600">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            A look at what's coming
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            We're building a portfolio of professional websites for local service
            businesses. Here's a preview of what's in development.
          </p>
        </Reveal>

        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-navy-100 bg-navy-50/40 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/8">
            {/* Browser frame */}
            <div className="flex items-center gap-2 border-b border-navy-100 bg-white px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-red-300" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-green-300" />
              <div className="ml-3 flex-1 rounded-md bg-navy-50 px-3 py-1 text-xs text-navy-400">
                pawsome-grooming.com
              </div>
              <span className="hidden items-center gap-1 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700 sm:flex">
                Coming Soon
              </span>
            </div>

            {/* Mock website preview */}
            <div className="relative">
              {/* Desktop view */}
              <div className="hidden p-8 md:block">
                <DemoWebsiteDesktop />
              </div>

              {/* Mobile view */}
              <div className="block p-8 md:hidden">
                <DemoWebsiteMobile />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <p className="text-center text-sm text-navy-400">
            This is a demonstration project for a fictional dog grooming company.
            Real client projects will be added as they're completed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function DemoWebsiteDesktop() {
  return (
    <div className="rounded-2xl bg-white shadow-lg">
      {/* Nav */}
      <div className="flex items-center justify-between border-b border-navy-50 px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 text-white">
            <Monitor className="h-4 w-4" />
          </div>
          <span className="font-bold text-navy-900">Pawsome Grooming</span>
        </div>
        <div className="flex items-center gap-5 text-sm text-navy-400">
          <span>Services</span>
          <span>About</span>
          <span>Pricing</span>
          <span className="rounded-lg bg-teal-500 px-4 py-1.5 font-semibold text-white">
            Book Now
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className="grid items-center gap-6 p-8 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-extrabold text-navy-900">
            Pamper Your Pup at Pawsome Grooming
          </h3>
          <p className="mt-3 text-sm text-navy-400">
            Professional dog grooming services in Pittsburgh. Baths, haircuts,
            nail trims, and more — all in a calm, caring environment.
          </p>
          <div className="mt-5 flex gap-3">
            <span className="rounded-lg bg-teal-500 px-5 py-2 text-sm font-semibold text-white">
              Book an Appointment
            </span>
            <span className="rounded-lg border border-navy-200 px-5 py-2 text-sm font-semibold text-navy-600">
              View Services
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-navy-50 p-8">
          <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-white/60">
            <ImageOff className="h-10 w-10 text-navy-300" />
          </div>
        </div>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-3 gap-4 px-8 pb-8">
        {['Full Groom', 'Bath & Brush', 'Nail Trim'].map((s) => (
          <div key={s} className="rounded-xl border border-navy-50 p-4">
            <div className="h-8 w-8 rounded-lg bg-teal-100" />
            <p className="mt-3 text-sm font-semibold text-navy-700">{s}</p>
            <p className="mt-1 text-xs text-navy-400">
              Professional service for your dog.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DemoWebsiteMobile() {
  return (
    <div className="mx-auto max-w-xs rounded-2xl border-4 border-navy-200 bg-white p-3 shadow-lg">
      <div className="flex items-center justify-between border-b border-navy-50 pb-3">
        <div className="flex items-center gap-1.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-teal-500 text-white">
            <Smartphone className="h-3 w-3" />
          </div>
          <span className="text-xs font-bold text-navy-900">Pawsome</span>
        </div>
        <span className="rounded bg-teal-500 px-2.5 py-1 text-[10px] font-semibold text-white">
          Book
        </span>
      </div>
      <div className="pt-3">
        <h3 className="text-base font-bold text-navy-900">
          Pamper Your Pup
        </h3>
        <p className="mt-1.5 text-xs text-navy-400">
          Professional dog grooming in Pittsburgh.
        </p>
        <span className="mt-3 block rounded-md bg-teal-500 px-3 py-1.5 text-center text-xs font-semibold text-white">
          Book an Appointment
        </span>
      </div>
      <div className="mt-3 space-y-2">
        {['Full Groom', 'Bath & Brush', 'Nail Trim'].map((s) => (
          <div key={s} className="rounded-lg border border-navy-50 p-2">
            <p className="text-xs font-semibold text-navy-700">{s}</p>
            <p className="text-[10px] text-navy-400">Professional care.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
