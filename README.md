# Helppoint website

A responsive static website built with HTML, CSS, and JavaScript. The enquiry form sends submissions to the Helppoint enquiries form in Formspree.

## Preview locally

Open `index.html` in a browser, or use VS Code's Live Server extension and select **Go Live**.

## View enquiries

Sign in at [Formspree](https://formspree.io/forms) with the account linked to Helppoint. Open **Helppoint enquiries** to view submissions. New submissions are also delivered to the email address configured on that Formspree form.

The site's form endpoint is in the `action` attribute on the enquiry form in `index.html`. Do not add passwords, one-time codes, payment details, account numbers, or wallet recovery phrases to the form.

## Deploy

The site is static and can be deployed through the connected Vercel project. Push changes to the repository's `main` branch for Vercel to build a new deployment.
