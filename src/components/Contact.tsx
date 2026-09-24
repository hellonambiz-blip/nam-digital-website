import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Reveal from './Reveal';

const EMAIL = 'hello.nam.biz@gmail.com';
const PHONE_DISPLAY = '(412) 540-4466';
const PHONE_LINK = 'tel:+14125404466';
const SMS_LINK = 'sms:+14125404466';
const SUBJECT = 'NAM Digital website inquiry';
const BODY = 'Hi Nicolas,\n\nMy business name: \nWhat my business does: \nExisting website (if any): \nWhat I need help with: \n\nMy name: \nBest way to reach me: ';
const GMAIL_INQUIRY = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
const APP_INQUIRY = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

const actionClasses =
  'flex min-h-24 min-w-0 flex-col items-center justify-center gap-2 rounded-xl bg-teal-500 px-2 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition-colors hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 sm:min-h-28 sm:gap-3 sm:rounded-2xl sm:text-base';

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
            Have a question or an idea? We'd love to hear what you have in mind.
          </p>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-10 max-w-2xl">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <a
              href={PHONE_LINK}
              aria-label={`Call NAM Digital at ${PHONE_DISPLAY}`}
              className={actionClasses}
            >
              <Phone className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" aria-hidden="true" />
              <span>Call us</span>
            </a>
            <a
              href={SMS_LINK}
              aria-label={`Text NAM Digital at ${PHONE_DISPLAY}`}
              className={actionClasses}
            >
              <MessageCircle className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" aria-hidden="true" />
              <span>Text us</span>
            </a>
            <a
              href={GMAIL_INQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Email NAM Digital at ${EMAIL} using Gmail`}
              className={actionClasses}
            >
              <Mail className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" aria-hidden="true" />
              <span>Email us</span>
            </a>
          </div>

          <div className="mt-7 flex flex-col items-center gap-2 text-center">
            <a href={PHONE_LINK} className="text-base font-semibold text-navy-900 underline-offset-2 hover:underline">
              {PHONE_DISPLAY}
            </a>
            <a href={APP_INQUIRY} className="break-all text-sm font-medium text-navy-600 underline-offset-2 hover:underline">
              {EMAIL}
            </a>
            <a href={APP_INQUIRY} className="text-sm font-semibold text-teal-700 underline underline-offset-2">
              Use another email app
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-2 border-t border-navy-100 pt-6 text-center sm:flex-row">
            <MapPin className="h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
            <p className="text-sm text-navy-600">
              <span className="font-semibold text-navy-800">Based near Pittsburgh, PA.</span>{' '}
              Serving local businesses in person and clients remotely.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
