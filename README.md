# EduAudit — School IT Audit Website

A static, dependency-free website for EduAudit: independent IT audits for UK and international schools.

## Pages

- `index.html` — homepage
- `it-audit.html` — the School IT Audit service
- `compliance.html` — KCSIE & DfE compliance
- `cyber-essentials.html` — Cyber Essentials & Plus certification
- `international.html` — international schools (Hong Kong & UAE)
- `about.html` — about the company
- `contact.html` — contact / book a free call

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages** in the repo.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Select the `main` branch and the `/ (root)` folder, then **Save**.
5. Once GitHub publishes, your site is live at `https://<username>.github.io/<repo-name>/`.

All paths are relative, so the site works from the repo root or a sub-path (e.g. `username.github.io/edu-audit`). For a clean custom domain, add a `CNAME` file containing your domain and configure DNS at your registrar.

## Before going live

- Replace the placeholder contact details in the footer and on `contact.html`:
  - Email: `hello@eduaudit.co.uk`
  - Phone: `020 0000 0000`
- Connect the contact form to a live inbox. Recommended: [Formspree](https://formspree.io) — create a form, then set the form's `action` to your Formspree endpoint and swap `data-js-form` for `action` + `method="POST"`. Alternatively, point the email and phone links at your real details and hide the form's demo notice.

## Local development

Just open `index.html` in a browser, or run a simple static server:

```bash
python -m http.server 8000
```