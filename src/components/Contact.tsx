import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import Reveal from './Reveal';

const EMAIL = 'hello.nam.biz@gmail.com';
const PHONE_DISPLAY = '(412) 540-4466';
const PHONE_LINK = 'tel:+14125404466';
const SUBJECT = 'NAM Digital website inquiry';
const BODY = 'Hi Nicolas,\n\nMy business name: \nWhat my business does: \nExisting website (if any): \nWhat I need help with: \n\nMy name: \nBest way to reach me: ';
const GMAIL_INQUIRY = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
const APP_INQUIRY = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-50/60 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-teal-500/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-navy-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-teal-600">Get In Touch</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            Let's Talk About <span className="text-teal-600">Your Website</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-500">
            Have a project in mind? Call or email us to tell us a little about your business and what you need.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-xl shadow-navy-900/5">
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col p-7 sm:p-9 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/20">
                  <Phone className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-900">Give us a call</h3>
                <p className="mt-2 text-base text-navy-500">
                  Have a question or want to talk through your website idea? We'd love to hear from you.
                </p>
                <div className="mt-auto pt-7">
                  <a href={PHONE_LINK}
                     aria-label={`Call NAM Digital at ${PHONE_DISPLAY}`}
                     className="group flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-teal-500/20 transition-colors hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                    <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                    Call now
                  </a>
                  <p className="mt-3 text-center text-sm font-semibold text-navy-700">{PHONE_DISPLAY}</p>
                </div>
              </div>

              <div className="flex flex-col border-t border-navy-100 bg-navy-50/40 p-7 sm:p-9 md:border-l md:border-t-0 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-100">
                  <Mail className="h-7 w-7 text-navy-600" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-900">Send us an email</h3>
                <p className="mt-2 text-base text-navy-500">
                  Share a few details about your business and the website you have in mind.
                </p>
                <div className="mt-auto pt-7">
                  <a href={GMAIL_INQUIRY} target="_blank" rel="noopener noreferrer"
                     className="group flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-navy-900 px-5 py-4 text-base font-semibold text-white transition-colors hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900">
                    Email us
                    <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                  <p className="mt-3 break-all text-center text-sm font-semibold text-navy-700">{EMAIL}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-t border-navy-100 bg-white px-6 py-5 text-center sm:flex-row sm:text-left">
              <MapPin className="h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
              <p className="text-sm text-navy-600">
                <span className="font-semibold text-navy-800">Based near Pittsburgh, PA.</span>{' '}
                Serving local businesses in person and clients remotely.
              </p>
              <a href={APP_INQUIRY} className="text-sm font-semibold text-teal-700 underline underline-offset-2 sm:ml-auto sm:shrink-0">
                Use another email app
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
