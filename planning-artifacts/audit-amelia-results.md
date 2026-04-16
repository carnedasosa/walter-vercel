# Amelia's Adversarial Code Audit Results

**Date**: 2026-04-16  
**Auditor**: Amelia (Senior Developer Agent)  
**Scope**: wlater-vercel-sito (Next.js 16 + GSAP)  
**Status**: Critical Findings Identified  

---

## 1. Critical: Bugs & Leaks (GSAP/React 19)

### [A01] Legacy Animation Lifecycle
- **File**: `components/animations/SiteAnimations.tsx`
- **Issue**: Utilizzo di `useEffect` + `gsap.context`.
- **Risk**: In React 19 (Concurrent Mode), `useEffect` può scattare in modi che causano doppie inizializzazioni o cleanup incompleti se non gestiti con precisione chirurgica.
- **Fix**: Migrare a `@gsap/react` e utilizzare l'hook `useGSAP()`.

### [A02] Unreliable Scroll Refresh
- **File**: `components/animations/SiteAnimations.tsx` (L92-94)
- **Issue**: `setTimeout(() => ScrollTrigger.refresh(), 100)`.
- **Risk**: "Magic number" non deterministico. Se il layout richiede >100ms per stabilizzarsi (es. caricamento immagini pesanti), i trigger saranno fuori posto.
- **Fix**: Utilizzare `ResizeObserver` o triggerare il refresh al completamento del caricamento dei font/immagini.

---

## 2. Mobile Interaction (The "Lock-in" Bug)

### [M01] Touch Event Interception (Custom Cursor)
- **File**: `components/ui/CustomCursor.tsx` + `app/globals.css` (L124)
- **Issue**: Nonostante `display: none` via CSS, gli elementi del cursore hanno `z-index: 10000` e sono nel DOM.
- **Risk**: Su alcuni motori mobile, elementi fissi con z-index elevato possono "catturare" l'evento `touchstart` prima che il CSS venga applicato o se la risoluzione delle `pointer-events` è ritardata.
- **Fix**: Non renderizzare affatto i componenti `CustomCursor` se `!hasFinePointer` (JS-side guard).

### [M02] SVG Filter Input Lag (Noise Overlay)
- **File**: `app/globals.css` (L113-121)
- **Issue**: Overlay `.noise::before` con `feTurbulence` fisso su tutto il viewport.
- **Risk**: Il rendering del rumore frattale SVG è computazionalmente costoso sulla GPU mobile. Satura il thread grafico impedendo l'elaborazione fluida degli eventi di scrolling. Il "long-press" forza lo sblocco perché il browser prioritizza l'interazione di sistema.
- **Fix**: Disabilitare il filtro SVG su dispositivi mobile; sostituire con una texture `.png` ripetuta a bassa opacità.

### [M03] Dynamic Viewport Jitter
- **File**: `components/sections/Hero.tsx` (L48)
- **Issue**: Uso di `min-h-screen`.
- **Risk**: Su mobile, `100vh` cambia dimensione quando la barra degli indirizzi scompare/appare durante lo scroll, causando salti continui del layout e ricalcoli di GSAP.
- **Fix**: Utilizzare `min-h-[100dvh]` (Dynamic Viewport Height).

---

## 3. Performance & GPU (Reflow/Jank)

### [P01] Layout Reflow Trigger (Custom Cursor)
- **File**: `components/ui/CustomCursor.tsx` (L30-31, L37-38)
- **Issue**: Aggiornamento di `style.left` e `style.top` all'interno di `requestAnimationFrame`.
- **Risk**: L'aggiornamento delle proprietà posizionali (top/left) forza il browser a eseguire il ricalcolo del layout (reflow) a ogni frame.
- **Fix**: Utilizzare `transform: translate3d(x, y, 0)` per spostare il calcolo sulla GPU.

### [P02] Backdrop-Filter Overhead
- **File**: `app/globals.css` (L163)
- **Issue**: `.glass` applica `backdrop-filter: blur(20px)`.
- **Risk**: Molteplici elementi con blur dinamico sovrapposti causano rallentamenti enormi su dispositivi non high-end.
- **Fix**: Ridurre `blur` su mobile o disabilitare `backdrop-filter` se le performance scendono sotto i 60fps.

---

## 4. Architectural Debt

### [D01] Missing Context Optimization
- **File**: `context/LanguageContext.tsx` (L44)
- **Issue**: Il `value` del Provider viene ricreato a ogni render.
- **Risk**: Tutti i componenti che usano `useLanguage` eseguono un re-render non necessario anche se `lang` non è cambiato.
- **Fix**: Avvolgere il valore in `useMemo`.

### [D02] Lack of Error Boundaries
- **File**: `app/page.tsx`
- **Issue**: Assenza di Error Boundaries granulari.
- **Risk**: Se un Client Component (es. `SiteAnimations`) fallisce, l'intera pagina crasha.
- **Fix**: Implementare Error Boundaries attorno ai componenti critici.

---

**End of Report.**
Awaiting user confirmation for refactoring tasks.
