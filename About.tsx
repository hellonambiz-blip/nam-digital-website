import { User, Heart, Handshake, Target } from 'lucide-react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Visual */}
          <Reveal>
            <div className="relative">
              <div className="aspect-square max-w-md rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-8 shadow-xl">
                {/* Avatar placeholder */}
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-teal-500/20 ring-4 ring-teal-400/20">
                    <User className="h-14 w-14 text-teal-400" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    Nicolas Molnar
                  </h3>
                  <p className="mt-1 text-sm text-teal-300">
                    Founder, NAM Digital
                  </p>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-300">
                    Based near Pittsburgh, Pennsylvania
                  </p>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-xl sm:-right-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100">
                    <Heart className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-900">
                      Personalized service
                    </p>
                    <p className="text-xs text-navy-400">
                      Direct, one-on-one support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Text */}
          <Reveal delay={150}>
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-teal-600">
                About NAM Digital
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
                Helping small businesses grow online
              </h2>

              <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
                <p>
                  NAM Digital was founded by Nicolas Molnar, who brings a
                  professional background in sales, account management, and
                  customer relationships. He understands what it takes to build
                  trust with clients and deliver service that goes beyond
                  expectations.
                </p>
                <p>
                  NAM Digital focuses on independent service businesses — dog
                  groomers, cleaners, landscapers, and others — that want a
                  straightforward way to present their work online.
                </p>
                <p>
                  The approach is simple: practical, personalized services that
                  help small business owners look professional online without
                  having to learn the technical side themselves.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Handshake, title: 'Relationship-first', text: 'Built on trust and communication' },
                  { icon: Target, title: 'Practical solutions', text: 'Focused on real results, not jargon' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-navy-50/40 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100">
                      <item.icon className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-navy-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
