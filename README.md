# [Name of your module]

[Deutsch](#deutsch) | [English](#english)

## Deutsch

Diese Projekt ist ein Consent preference Component, die man verwenden kann um Analytik zu laden. 

Es ein Gesetz, zustimmung von nutzer zu fragen bevor man anfängt, ihre Nutzung zu verfolgen aber wenn man eine Website baust, musst man viel Codes schreben um das zu machen. Deswegen habe ich diese Komponent gebaut. 

Mit diese Component braucht man meistens nur 3 zeile von Codes zu schreiben.

### Benutzung

Man ladet das Kompoent durch ein CDN in eine HTML script tag oder in eine JavaScript file. 

```js 
import { initConsent } from "https://abdulroqib123.github.io/consent-component/js/index.js";

initConsent("[policyVersion]", "[tagId]", "[primaryBg]", "[secondaryBg]");
```

### Parameter

1. `policyVersion`: Der policyVersion parameter ist ein version von deine Datenschutzerklärung. Wenn es geändert ist und ist nicht gleich wie was gespeichert ist, wird die Zistimmung der benuzter erneut gefragt.
2. `tagId`: Der tagId ist was genuzt werd um deine Analytik zu laden. 
3. `primaryBg`: Es wird für die "Accept" Button in der Zustimmungbanner genutzt, damit es konsitenz mit deine Website ist.
4. `secondaryBg`: Es wird für die "Reject" Button in der Zustimmungbanner auch genutzt.

### So funktioniert es

1. Drei Zustände:
      - granted: Analytik wird geladen
      - denied: Analytik wird nicht geladen
      - unknown: Analytik wird nicht geladen und der Zustimmungsbanner wird angezeigt, weil wir noch nicht wissen ob der Nutzer zustimmt oder nicht
2. Wenn die policyVersion sich ändern, die gespeichert Zustimmungsentscheidung wird gelöscht und erneut gefragt
3. Bei kaputtem oder blockiertem Speicher wird eine fehler auf Console gemeldet und der Code wird weiter geladet. Nichts ist gestört
4. Nach zustimmung entscheidung wird eine "Consent settings" Button gezeigt. Diese Button ist da, damit der Nuzter seine Entscheidung ändern kann. Wenn man auf der Button klickt, wird die gespeicherte Entscheidung gelöcht und lädt die Seite neu, weil der Analytik ist wahrscheinlich geladet.

### Noch nicht fertig

1. Analytics Loader ist nur ein Platzhalter

### Hinweis

Das Komponent ist nur eine prototyp und noch nicht in eine Echte Projekt verwendbar.

## English
