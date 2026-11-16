# Tracking Consent module

[Deutsch](#deutsch) | [English](#english)

## Deutsch

Dieses Projekt ist ein Consent preference Component, das man verwenden kann um Analytik zu laden. 

Es gibt ein Gesetz, das besagt das man die Zustimmung benötigt, bevor man ihre Nutzung verfolgen kann aber wenn man eine Website baust, musst man viel Codes schreiben um das zu machen. Deswegen habe ich diese Komponent gebaut. 

Mit diesem Component braucht man meistens nur ca. 3 Zeile Code zu schreiben.

### Benutzung

Man laedt das Component von GitHub pages und importiert es in einen HTML script tag oder in eine JavaScript file. 

```js 
import { initConsent } from "https://abdulroqib123.github.io/consent-component/js/index.js";

initConsent("[policyVersion]", "[tagId]", "[primaryBg]", "[secondaryBg]");
```

### Parameter

1. `policyVersion`: Der policyVersion parameter ist eine Version von deiner Datenschutzerklärung. Wenn die gespeicherte Abfrage geupdatet wurde, so muss der Benutzer die Datenschutzvereinbarung nochmal Akzeptieren/Ablehnen.
2. `tagId`: Der tagId ist was genuzt wird um die Analytik zu laden. 
3. `primaryBg`: Es wird für die "Accept" Button in der Zustimmungbanner genutzt, damit es konsitenz mit deine Website ist.
4. `secondaryBg`: Es wird für die "Reject" Button in der Zustimmungbanner auch genutzt.

### So funktioniert es

1. Drei Zustände:
      - granted: Analytik wird geladen
      - denied: Analytik wird nicht geladen
      - unknown: Analytik wird nicht geladen und der Zustimmungsbanner wird angezeigt, weil wir noch nicht wissen ob der Nutzer zustimmt oder nicht
2. Wenn die policyVersion sich ändert, wird die gespeichert Zustimmungsentscheidung gelöscht und erneut gefragt
3. Bei kaputtem oder blockiertem Speicher wird ein Fehler in der Console gemeldet und der Code wird weiter geladen. Nichts ist gestört
4. Nach Zustimmung Entscheidung wird eine "Consent settings" Button gezeigt. Dieser Button ist da, damit der Nuzter seine Entscheidung ändern kann. Wenn man auf den Button klickt, wird die gespeicherte Entscheidung gelöcht und lädt die Seite neu, weil die Analytik wahrscheinlich geladen ist.

### Hinweis

Analytics Loader ist nur ein Platzhalter. Das Komponent ist nur eine prototyp und noch nicht in einem echten Projekt verwendbar.

## English

This Project is a Consent preference Component, that can be used to laod analytics. 

There is a law that requires website operators to ask for user consents before tracking their usage but when a website is being built, there is a lot of codes that should be written just to make this possible. That is why i built this component.

With this component, you only need to write approximately 3 lines of code.

### Usage

The component can be loaded from GitHub pages by importing it in a script tag in HTML or in a JavaScript file. 

```js 
import { initConsent } from "https://abdulroqib123.github.io/consent-component/js/index.js";

initConsent("[policyVersion]", "[tagId]", "[primaryBg]", "[secondaryBg]");
```

### Parameter

1. `policyVersion`: The policyVersion parameter is a version of your privacy policy. If the stored version is diffrent from the one in the parameter, the user must accept/reject the privacy agreement again.
2. `tagId`: The tagId is what is used to load the analytics.
3. `primaryBg`: It is used for the 'Accept' button in the consent banner so that it is consistent with your website.
4. `secondaryBg`: It is also used for the 'Reject' button in the consent banner.

### How it works

1. Three states:
      - granted: Analytics is loaded
      - denied: Analytics is not loaded
      - unknown: Analytics is not loaded and the consent banner is shown, because we don't yet know if the user agrees or not
2. If the policyVersion changes, the saved consent decision is deleted and asked again
3. If storage is broken or blocked, an error is reported in the console but the code continues to load. Nothing is broken
4. After giving consent, a "Consent settings" button is shown. This button is there so the user can change their decision. When you click the button, the saved decision is deleted and the page reloads, because analytics is probably loaded.

### Note

Analytics Loader is just a placeholder. The component is just a prototype and not yet usable in a real project.