import Reveal from './Reveal';

const steps = [
  {
    number: '01',
    title: 'Tell Us About Your Business',
    description:
      "Share what your business does, who you serve, and what you need. No technical knowledge required — just tell us about your work.",
  },
  {
    number: '02',
    title: 'We Design Your Website',
    description:
      "We build a website tailored to your business, share it for your review, and make the revisions included in your agreed project scope.",
  },
  {
    number: '03',
    title: 'Launch & Ongoing Support',
    description:
      'We help launch your website. If you want ongoing updates or new features, we can agree on a separate support plan.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-teal-500/8 blur-3xl" />
        <div className="absolute left-0 bottom-10 h-80 w-80 rounded-full bg-navy-600/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-teal-400">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Three simple steps to your new website
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            No complicated process. No technical jargon. Just a straightforward
            path from idea to launch.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 200}>
              <div className="group relative h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-white/8">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 translate-x-full bg-gradient-to-r from-white/20 to-transparent lg:block" />
                )}

                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-extrabold text-teal-400/30 transition-colors group-hover:text-teal-400/50">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-navy-300">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
