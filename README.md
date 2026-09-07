# Pixelpékség – Demo Website

Static (HTML/CSS/JS) marketing website for Pixelpékség's own business.
Built after the `fodrasz-demo` project, reusing the same proven technical
solutions (multilingual support, language picker modal, Setmore "Book Now"
widget). All comments in the code are written in English.

## File structure

- `index.html` – **Hungarian** version (Home, Our Services, Booking, Contact)
- `en/index.html` – **English** version
- `de/index.html` – **German** version
- `style.css` – shared styling for all three language pages
- `script.js` – shared JS: mobile menu, language picker modal, Setmore widget
- `images/` – images live here (see below)

## Color palette – easy to change

The 3 base colors live in the `:root` block of `style.css`; changing them
updates the color scheme of the entire site:

- `--color-bg` (`#f1f7ed`, pale mint) – main background color
- `--color-dark` (`#243e36`, dark forest green) – headings, footer, primary text
- `--color-primary` (`#7ca982`, sage green) – buttons, highlights, underlines (logo, email)

`--color-primary-dark`, `--color-bg-alt`, and `--color-border` are lighter
shades derived from these – if you move the base colors in a very different
direction, consider re-deriving these tones too.

## Images

- **`images/hero.jpeg`** – homepage background image (uploaded, optimized to 1920×1888px, ~179 KB)
- **`images/favicon.jpeg`** – browser tab icon (uploaded, cropped/optimized to 512×512px, ~8 KB)

If you replace either one with a new photo, compress it the same way first
(max ~1920px width for the hero, a 512×512px square for the favicon) –
otherwise an uncompressed phone photo can easily be several MB, which slows
the site down.

## Setmore booking link ("Website Consultation" service category)

`data-booking-url` appears **twice** in each language file (in the header's
"Booking" button and in the Booking section's button), and each one points
to the Setmore service category available in that language, with a
language-code prefix (this also translates the Setmore interface text –
see the `fodrasz-demo` README for a detailed explanation of the mechanism):

- `index.html`: `https://pixelpekseg.setmore.com/hu/categories/0037f81e-36a4-48d4-bc42-3b46f79f128e`
- `en/index.html`: `https://pixelpekseg.setmore.com/en/categories/dd21b91e-6831-42b8-baa4-7eff8aaf5d59`
- `de/index.html`: `https://pixelpekseg.setmore.com/de/categories/e52a89fd-6958-428e-9dd6-ecbcb98e0421`

**If you rename/recreate the service on Setmore**, get the new "Copy
booking link" for the category and update it in all three files, in both
places (6 spots total).

## Opening locally

No server needed – just double-click `index.html`, or open it in VS Code
with the "Live Server" extension.

## Publishing to GitHub Pages

1. Create a new repository on GitHub.
2. Push this folder to it (git init, add, commit, push).
3. In the repo's **Settings → Pages**, select the `main` branch (root
   folder) as the source.
4. Within a few minutes the site will be live at
   `https://<username>.github.io/<repo-name>/`.
5. Once you have your own domain, you can set it in **Settings → Pages →
   Custom domain**.

If you make changes later and push them, GitHub Pages automatically
updates the live site.
