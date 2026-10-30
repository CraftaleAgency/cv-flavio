# cv-flavio

Il mio CV come sito Next.js: un unico file di contenuti (`lib/cv.ts`) e sei impaginazioni A4 pronte da stampare o salvare in PDF.

| Template | Stile |
|---|---|
| `/professionale` | Navy corporate, foto e numeri chiave |
| `/latex` | Ispirato a Jake's Resume: serif, bianco e nero |
| `/harvard` | Formato lineare delle business school, EB Garamond |
| `/awesome` | Ispirato ad Awesome-CV, bordeaux su bianco |
| `/moderno` | Ardesia con accento indaco |
| `/terminal` | Testata scura da terminale, timeline in stile git |

Tutti i template sono in 2 pagine, a colonna singola (tranne Terminal) e con testo selezionabile.

## Uso

```bash
npm install
npm run dev          # http://localhost:3000
npm run pdf          # build + PDF del template principale
node scripts/pdf.mjs out.pdf /latex   # PDF di un template specifico (dopo `npm run build`)
npm run ats          # build + controllo ATS su tutti i template
```

`npm run pdf` e `scripts/pdf.mjs` usano Chrome headless: imposta `CHROME_PATH` se non è in `/Applications/Google Chrome.app`.

## Controllo ATS

`scripts/ats.mjs` genera il PDF di ogni template, ne estrae il testo con `pdftotext` (poppler) come farebbe un parser e verifica che i dati siano completi, le sezioni in ordine e le esperienze non mescolate.

## Modificare i contenuti

Tutto il testo sta in `lib/cv.ts`; l'elenco dei template in `lib/templates.ts`. Per aggiungere un template basta una cartella in `app/` con un CSS module e, per i layout a colonna singola, il componente `components/single-column.tsx`.
