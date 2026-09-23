import { Monitor, Wrench, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  {
    icon: Monitor,
    title: 'Website Design & Development',
    description:
      'Professional, mobile-friendly websites for independent service-based businesses — designed around your services and your customers.',
    features: ['Custom design', 'Mobile-friendly', 'Fast loading', 'SEO-ready'],
  },
  {
    icon: Wrench,
    title: 'Website Care & Maintenance',
    description:
      'Ongoing website updates, content changes, new photographs, and basic functionality checks — so your site stays current and reliable.',
    features: ['Content updates', 'New photographs', 'Service changes', 'Functionality checks'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-teal-600">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            Services built for your business
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Everything you need to look professional online — without having to
            build or manage it yourself.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-8 lg:px-16 xl:px-24">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 150}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-navy-100 bg-navy-50/50 px-6 py-5 text-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100">
              <ArrowRight className="h-5 w-5 text-teal-600" />
            </div>
            <p className="text-base text-navy-600">
              <span className="font-semibold text-navy-800">
                Start with what your business needs.
              </span>{' '}
              We can build your website first, then discuss updates and ongoing
              support separately. We'll agree on the scope before work begins.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="group h-full rounded-3xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-navy-900/8">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/20 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-navy-900">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-navy-500">{description}</p>
      <ul className="mt-5 space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-sm text-navy-600">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
