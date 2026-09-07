# Pixelpékség – demó weboldal

Statikus (HTML/CSS/JS) bemutatkozó weboldal a Pixelpékség saját
vállalkozásához. A `fodrasz-demo` projekt mintájára készült, ugyanazokkal a
bevált technikai megoldásokkal (többnyelvűség, nyelvválasztó modal, Setmore
"Book Now" widget). A kódban minden komment angolul van írva.

## Fájlstruktúra

- `index.html` – **magyar** verzió (Kezdőlap, Szolgáltatásaink, Időpontfoglalás, Elérhetőségek)
- `en/index.html` – **angol** verzió
- `de/index.html` – **német** verzió
- `style.css` – közös kinézet mindhárom nyelvi oldalhoz
- `script.js` – közös JS: mobil menü, nyelvválasztó modal, Setmore widget
- `images/` – ide kerülnek a képek (lásd lent)

## Színpaletta – könnyen módosítható

A `style.css` `:root` blokkjában található a 3 alapszín, amiket ha
átírsz, az egész oldal színvilága frissül:

- `--color-bg` (`#f1f7ed`, halvány menta) – fő háttérszín
- `--color-dark` (`#243e36`, sötét erdőzöld) – címsorok, lábléc, elsődleges szöveg
- `--color-primary` (`#7ca982`, zsályazöld) – gombok, kiemelések, aláhúzások (logó, email)

A `--color-primary-dark`, `--color-bg-alt` és `--color-border` ezekből
levezetett, halványabb árnyalatok – ha nagyon más irányba viszed az
alapszíneket, érdemes ezeket a levezetett tónusokat is újragondolni.

## Képek

- **`images/hero.jpeg`** – a kezdőlap háttérképe (feltöltve, 1920×1888px-re optimalizálva, ~179 KB)
- **`images/favicon.jpeg`** – böngésző-fül ikon (feltöltve, 512×512px-re vágva/optimalizálva, ~8 KB)

Ha lecseréled bármelyiket egy új fotóra, érdemes ugyanígy előbb tömöríteni
(max. ~1920px szélesség a hero-nak, 512×512px négyzet a faviconnak) –
ellenkező esetben egy tömörítetlen telefonfotó könnyen több MB is lehet,
ami lassítja az oldalt.

## Setmore foglalási link ("Website Consultation" szolgáltatás-kategória)

A `data-booking-url` mindhárom nyelvi fájlban **két helyen** szerepel (a
fejléc "Időpontfoglalás" gombjában és az Időpontfoglalás szekció
gombjában), és mindegyik a saját nyelvén elérhető Setmore
szolgáltatás-kategóriára mutat, nyelvkód-előtaggal (ez fordítja le a
Setmore felület szövegeit is – lásd a `fodrasz-demo` README-jét a
mechanizmus részletes magyarázatáért):

- `index.html`: `https://pixelpekseg.setmore.com/hu/categories/0037f81e-36a4-48d4-bc42-3b46f79f128e`
- `en/index.html`: `https://pixelpekseg.setmore.com/en/categories/dd21b91e-6831-42b8-baa4-7eff8aaf5d59`
- `de/index.html`: `https://pixelpekseg.setmore.com/de/categories/e52a89fd-6958-428e-9dd6-ecbcb98e0421`

**Ha a Setmore-on átnevezed/újra létrehozod a szolgáltatást**, kérd le
újra a "Copy booking link"-et a kategóriánál, és frissítsd mindhárom
fájlban, mindkét helyen (6 helyen összesen).

## Helyi megnyitás

Nincs szükség szerverre, elég duplán kattintani az `index.html` fájlon,
vagy VS Code-ban a "Live Server" kiterjesztéssel megnyitni.

## Publikálás GitHub Pages-re

1. Hozz létre egy új repository-t a GitHub-on.
2. Töltsd fel ebbe a mappát (git init, add, commit, push).
3. A repo **Settings → Pages** menüjében válaszd ki a `main` branch-et (root mappa) forrásként.
4. Pár percen belül elérhető lesz az oldal a
   `https://<felhasznalonev>.github.io/<repo-nev>/` címen.
5. Amint megvan a saját domained, a **Settings → Pages → Custom domain**
   mezőben tudod beállítani.

Ha később módosítasz valamit és push-olod, a GitHub Pages automatikusan
frissíti az élő oldalt.
