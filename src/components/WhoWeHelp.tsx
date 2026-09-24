import { Scissors, PawPrint, Sparkles, Trees, Car, Wrench } from 'lucide-react';
import Reveal from './Reveal';

const businesses = [
  {
    icon: Scissors,
    name: 'Dog Groomers',
    description: 'Showcase your grooming services, pricing, and booking info.',
    image: 'https://images.pexels.com/photos/19145874/pexels-photo-19145874.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: PawPrint,
    name: 'Pet Sitters',
    description: 'Let pet owners find and trust you with a professional site.',
    image: 'https://images.pexels.com/photos/1526194/pexels-photo-1526194.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Sparkles,
    name: 'Cleaning Services',
    description: 'Present your cleaning packages and service areas clearly.',
    image: 'https://images.pexels.com/photos/9462162/pexels-photo-9462162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Trees,
    name: 'Landscapers',
    description: 'Display your landscaping work and seasonal services.',
    image: 'https://images.pexels.com/photos/38936344/pexels-photo-38936344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Car,
    name: 'Mobile Detailers',
    description: 'Promote your detailing packages and service areas.',
    image: 'https://images.pexels.com/photos/7154634/pexels-photo-7154634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Wrench,
    name: 'Home Services',
    description: 'Help homeowners find and contact you for repairs and projects.',
    image: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="bg-navy-50/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-teal-600">
            Who We Help
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            Built for independent service businesses
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            We handle the technical work so you can focus on your customers.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.map((biz, i) => (
            <Reveal key={biz.name} delay={i * 100}>
              <BusinessCard {...biz} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 px-8 py-10 text-center shadow-xl lg:px-12 lg:py-12">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              You focus on your craft. We'll handle the rest.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-navy-200 sm:text-lg">
              Whether you're just starting out or looking to upgrade your current
              website, NAM Digital makes it easy to look professional online —
              no technical work required on your end.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BusinessCard({
  icon: Icon,
  name,
  description,
  image,
}: {
  icon: React.ElementType;
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div className="group h-full overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/8">
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 text-white shadow-lg">
            <Icon className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold text-white">{name}</span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm leading-relaxed text-navy-500">{description}</p>
      </div>
    </div>
  );
}
