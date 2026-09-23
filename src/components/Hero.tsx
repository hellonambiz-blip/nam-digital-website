import { ArrowRight, Sparkles, Check } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 pt-20 pb-16"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-teal-400/8 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-navy-600/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left: text */}
        <div className="animate-fade-in-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-300">
            <Sparkles className="h-4 w-4" />
            Websites for local service businesses
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Websites.{' '}
            <span className="bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
              Made Simple.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-navy-200 lg:mx-0">
            We help small businesses build a professional website and keep it
            running smoothly — with simple solutions and ongoing support.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <button
              onClick={() => scrollTo('#contact')}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-teal-500/25 transition-all hover:bg-teal-400 hover:shadow-teal-400/30 sm:w-auto"
            >
              Ask About a Website
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('#services')}
              className="flex w-full items-center justify-center rounded-xl border border-navy-400/40 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-navy-300/60 hover:bg-white/10 sm:w-auto"
            >
              Explore Our Services
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">
            {['No tech experience needed', 'Ongoing support', 'Based near Pittsburgh, PA'].map(
              (item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-navy-300"
                >
                  <Check className="h-4 w-4 text-teal-400" />
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right: device mockup */}
        <div className="relative hidden justify-center lg:flex animate-fade-in-delay">
          <DeviceMockup />
        </div>
      </div>
    </section>
  );
}

function DeviceMockup() {
  return (
    <div className="relative w-full max-w-lg">
      {/* Desktop browser mockup */}
      <div className="relative z-10 rounded-2xl border border-navy-400/20 bg-navy-800/80 shadow-2xl shadow-navy-950/50 backdrop-blur-sm">
        {/* Browser bar */}
        <div className="flex items-center gap-2 border-b border-navy-400/15 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
          <div className="ml-3 flex-1 rounded-md bg-navy-700/60 px-3 py-1 text-xs text-navy-300">
            pawsome-grooming.com
          </div>
        </div>
        {/* Browser content — mock website */}
        <div className="space-y-4 p-6">
          {/* Mock nav */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-teal-500/80" />
              <div className="h-3 w-28 rounded bg-navy-200/60" />
            </div>
            <div className="flex gap-3">
              <div className="h-2.5 w-12 rounded bg-navy-300/40" />
              <div className="h-2.5 w-12 rounded bg-navy-300/40" />
              <div className="h-2.5 w-14 rounded bg-teal-400/60" />
            </div>
          </div>
          {/* Mock hero */}
          <div className="rounded-xl bg-gradient-to-br from-teal-500/20 to-navy-700/40 p-5">
            <div className="h-4 w-48 rounded bg-navy-100/70" />
            <div className="mt-3 h-3 w-64 rounded bg-navy-200/40" />
            <div className="mt-3 h-3 w-56 rounded bg-navy-200/40" />
            <div className="mt-4 flex gap-3">
              <div className="h-8 w-28 rounded-lg bg-teal-500/80" />
              <div className="h-8 w-24 rounded-lg border border-navy-300/40" />
            </div>
          </div>
          {/* Mock cards */}
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-navy-400/15 bg-navy-700/30 p-3">
                <div className="h-8 w-8 rounded-lg bg-teal-500/30" />
                <div className="mt-2 h-2.5 w-full rounded bg-navy-200/40" />
                <div className="mt-1.5 h-2 w-2/3 rounded bg-navy-200/25" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone mockup */}
      <div className="absolute -bottom-8 -right-6 z-20 animate-float">
        <div className="h-72 w-36 rounded-[1.75rem] border-4 border-navy-600 bg-navy-900 shadow-2xl shadow-navy-950/60">
          <div className="flex h-full flex-col items-center p-3 pt-7">
            {/* Notch */}
            <div className="absolute left-1/2 top-2 h-1 w-12 -translate-x-1/2 rounded-full bg-navy-600" />
            {/* Mini website */}
            <div className="flex w-full items-center gap-1.5">
              <div className="h-4 w-4 rounded bg-teal-500/80" />
              <div className="h-1.5 w-12 rounded bg-navy-200/50" />
            </div>
            <div className="mt-3 w-full rounded-lg bg-gradient-to-br from-teal-500/25 to-navy-700/40 p-2.5">
              <div className="h-2 w-20 rounded bg-navy-100/60" />
              <div className="mt-2 h-1.5 w-24 rounded bg-navy-200/30" />
              <div className="mt-1.5 h-1.5 w-20 rounded bg-navy-200/30" />
              <div className="mt-2.5 h-5 w-16 rounded-md bg-teal-500/80" />
            </div>
            <div className="mt-2.5 w-full space-y-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-md border border-navy-400/15 bg-navy-700/30 p-2">
                  <div className="h-1.5 w-10 rounded bg-navy-200/30" />
                  <div className="mt-1 h-1.5 w-16 rounded bg-navy-200/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating accent badges */}
      <div className="absolute -left-8 top-1/3 z-20 animate-float-delay">
        <div className="rounded-2xl border border-teal-400/30 bg-navy-800/90 px-4 py-3 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/20">
              <Check className="h-4 w-4 text-teal-400" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Mobile-friendly</div>
              <div className="text-[10px] text-navy-300">Looks great everywhere</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
