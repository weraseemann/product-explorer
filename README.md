# Produkt-Explorer
Eine Single-Page-App “Produkt-Explorer”

## Inhalte
  1. Statische Produktliste (20–30 Einträge)
  2. Live-Filter:
• Textsuche (mit Debounce ~300 ms)
• Kategorien-Checkboxen mit “Alle”-Logik
• Preisslider (min/max)
  3. Produkt-Grid mit Bild, Name, Preis, Kategorie
  4. Responsives und barrierearmes Design
  5. Kurzes README mit Setup-Anleitung und Erläuterungen

Technische Vorgaben: 
  - Vanilla JS + CSS
  - Grid/Flexbox  
  - Frameworks fürs Grund-Styling
 

## Projektstruktur

product-explorer/

 /js
    app.js
    products-data.js
  /screenshots
    /desktop   
    /mobile.js
  index.html
  README.md
  styles.css


## Start-Anleitung
1. Repository klonen: git clone 
2. Öffne index.html in einem Browser (z. B. per Doppelklick oder mit Live Server)
3. Instalation: Es ist keine installation notwendig.

## Design-Entscheidungen

- Verwendung von :root-Variablen für Wiederverwendbarkeit und einfache Pflege mit dem Ziel Zentrale Verwaltung von Farben, Schriftarten und Größen – leicht anpassbar für Theme-Änderungen.
- Für Filterbereich: Blauer Hintergrund und Schatten ergibt optisch hervorgehobenen Bereich. Benutzung der Flexbox-Struktur für responsives Layout (Ausrichtung über flex-direction).
- Füe Checkboxen: Farbliche Hervorhebung mit accent-color (modern & barriereärmer). Große Checkboxenfläche für bessere UX.
- Interakriven und modernen Slider mit zwei Inputfeldern und einem Balken. 
- Responsives Layout mit Media Queries (Schmalere Darstellung unter 768px und 481px) für Produktdarstellung, Filterbereich: Texteingabe, Checkboxen, Slider für gute UX auf Handy & Tablet.
- Karten- und Listenstruktur für Inhalte durch automatische Anpassung mit auto-fill (mobilfreundlich).Responsive Grid-Darstellung von Produktkarten.
- Benutzung der Buttonsproperties für Produktkartendarstellung: große buttons, klare Farben, leicht klickbar, optisch erkennbar als Call-to -Action. Es ist möglich Modale einzubauen für mehr Information über ein Produkt. 

#### Zusammenfassung 
Saubere Designprinzipien durch konsistente Fardben und Typography, gute UX mit responsiven Elementen, klare Trennung von Struktur, Design und Logik. 