# Stenungsunds Schackklubb

En modern webbplats för Stenungsunds Schackklubb.

## Projektstruktur

```
stenungsundchess/
├── index.html                 # Root-pekare som vidarebefordrar till src/pages/hem.html
├── CNAME                      # GitHub Pages-domän
├── README.md                  # Projektdokumentation
├── knatterallyt-invites/      # PDF-filer för Knatterallyt-tävlingar (deprecated)
├── src/
│   ├── pages/                 # Alla HTML-sidor
│   │   ├── hem.html           # Hemsida
│   │   ├── verksamhet.html    # Verksamhetssida
│   │   ├── nyheter.html       # Nyheter
│   │   ├── traning.html       # Träning
│   │   ├── allsvenskan.html   # Allsvenskan
│   │   ├── distriktserien.html
│   │   ├── historia.html
│   │   ├── klubbmasterskap.html
│   │   ├── knatterallyt.html
│   │   └── vett-och-etikett.html
│   ├── styles/                # CSS-filer
│   │   └── style.css          # Huvudstil
│   ├── scripts/               # JavaScript-filer
│   │   └── script.js          # Huvudscript
│   ├── assets/                # Resurser
│   │   ├── docs/              # PDF-filer för Knatterallyt-tävlingar
│   │   └── images/            # Bilder
│   │       ├── ssk.svg            # Klubbens logotyp
│   │       ├── laab-logo.png
│   │       ├── lifood-logo.svg
│   │       ├── schackbutiken-logo.jpg
│   │       ├── timmerviks-skafferi-logo.png
│   │       └── tjorns-sparbank-logo.jpg
│   ├── components/            # Framtida komponenter
│   ├── api/                   # Framtida API-integrationer
│   └── utils/                 # Framtida hjälpfunktioner
```

## Utveckling

### Lokal utveckling

1. Klona repot
2. Öppna `src/pages/hem.html` i din webbläsare, eller använd en lokal server

### Bygg och deploy

Webbplatsen är en statisk sida som kan hostas var som helst. För närvarande används GitHub Pages.

## Teknikstack

- HTML5
- CSS3 (med CSS-variabler)
- Vanilla JavaScript (ES6+)
- Inga byggnadsverktyg krävs

## Strukturprinciper

- **Separation of Concerns**: HTML, CSS och JavaScript är organiserade i separata kataloger
- **Relativa sökvägar**: Alla resurser använder relativa sökvägar för portabilitet
- **Modulär design**: Koden är uppdelad i logiska delar för enkel underhållning
- **Framtida utbyggnad**: Tomma kataloger (components, api, utils) är förberedda för framtida utökning

## Kontakt

- E-post: stenungsundschack@gmail.com
- Webbplats: [stenungsunds schackklubb](https://stenungsundschackklubb.se)