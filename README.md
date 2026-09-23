# NAM Digital website

This is the exported NAM Digital one-page website, revised without Bolt AI credits.

## What changed from the original Bolt ZIP

- Preserved the original layout, colors, and main website structure.
- Kept the two initial services: website creation and website care.
- Removed the extra mention of social media and Google Business Profile services from the Services section.
- Replaced the nonfunctional "contact form coming soon" mockup with a real email-inquiry link. This link opens a visitor's email application with a draft; it does not send or store a message on its own.
- Clarified that revision rounds, future features, and maintenance are agreed in the project scope rather than unlimited.
- Removed the generic Bolt social-preview image and replaced the missing starter favicon with a simple NAM icon.

## Run it locally

Install Node.js 20+ and run:

```bash
npm ci
npm run dev
```

Open the local address shown by Vite. To check and package the production website:

```bash
npm run typecheck
npm run lint
npm run build
```

The deployable static site is written to `dist/`. It can be hosted on a static hosting service that supports single-page apps. Uploading the source ZIP itself to an arbitrary web host is not the same as publishing the site; build the project or connect the repository to an appropriate build-enabled host.

## Before going live

- Confirm the wording accurately describes only the services you intend to offer.
- Test every button and the email inquiry link on your actual browser and phone; `mailto:` requires a visitor-configured email application.
- The "Pawsome Grooming" panel is a *mockup* of a fictional business, not a separate functioning client website. Keep it labeled as a demonstration until you build a live portfolio example.
- Replace any sample text you do not want to publish. Check accessibility, privacy needs, domain availability, and business registration requirements relevant to your eventual offering.
- Set up a custom domain and optional custom-domain email only when you are ready. No hosting subscription or Bolt tokens are required to modify the local source files.
