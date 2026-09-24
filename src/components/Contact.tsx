import { Mail, MapPin, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import Reveal from './Reveal';

const EMAIL = 'hello.nam.biz@gmail.com';
const SUBJECT = 'NAM Digital website inquiry';
const BODY = 'Hi Nicolas,\n\nMy business name: \nWhat my business does: \nExisting website (if any): \nWhat I need help with: \n\nMy name: \nBest way to reach me: ';
const GMAIL_INQUIRY = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
const APP_INQUIRY = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-50/60 py-24 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-teal-500/8 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-navy-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-teal-600">Get In Touch</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            Let's Build Something Great{' '}
            <span className="text-teal-600">for Your Business</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-500">
            Tell us a little about your business and what you're looking for. We'd love to learn more.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8 text-center">
          <a
            href="tel:+14125404466"
            aria-label="Call NAM Digital at 412-540-4466"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-700"
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
            Call (412) 540-4466
          </a>
          <p className="mt-2 text-sm text-navy-500">Prefer email? Choose an email option below.</p>
        </Reveal>

        <Reveal delay={150} className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-xl shadow-navy-900/5">
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/20">
                  <Mail className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy-900">Email us directly</h3>
                <p className="mt-2 text-base text-navy-500">
                  Tell us what you have in mind. Email is the easiest way to reach us to discuss a website project.
                </p>
                <a href={GMAIL_INQUIRY} target="_blank" rel="noopener noreferrer"
                   className="group mt-6 flex items-center justify-between gap-2 rounded-2xl bg-teal-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-teal-500/20 transition-all hover:bg-teal-400 hover:shadow-teal-400/30">
                  <span>Compose in Gmail</span>
                  <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                </a>
                <a href={`mailto:${EMAIL}`} className="mt-3 text-sm font-semibold text-teal-700 underline underline-offset-2">
                  Use another email app
                </a>
                <p className="mt-2 text-sm text-navy-600">Or email us directly at <span className="break-all font-semibold">{EMAIL}</span></p>
                <div className="mt-8 flex items-start gap-3 rounded-2xl bg-navy-50/60 p-4">
                  <MapPin className="h-5 w-5 shrink-0 text-teal-600" />
                  <div>
                    <p className="text-sm font-semibold text-navy-800">Based near Pittsburgh, PA</p>
                    <p className="text-sm text-navy-500">Serving local businesses in person and clients remotely.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center border-t border-navy-100 bg-navy-50/40 p-8 text-center md:border-l md:border-t-0 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-100">
                  <MessageSquare className="h-7 w-7 text-navy-400" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy-900">Tell us about your project</h3>
                <p className="mt-2 max-w-xs text-base text-navy-500">
                  Open a ready-to-fill email with a few questions about your business and website needs.
                </p>
                <a href={GMAIL_INQUIRY} target="_blank" rel="noopener noreferrer"
                   className="mt-6 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-navy-900 px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-700">
                  Start a Gmail inquiry <ArrowRight className="h-4 w-4" />
                </a>
                <a href={APP_INQUIRY} className="mt-3 text-sm font-semibold text-teal-700 underline underline-offset-2">Use another email app</a>
                <p className="mt-3 text-xs text-navy-500">Gmail opens in your browser. You review and send your message yourself.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
