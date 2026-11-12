/*
 A consent component that can be 
 imported to any javascript file
*/

//STATES
const states = {
  granted: "granted",
  denied: "denied",
  unknown: "unknown",
};

//LOGIC THAT HANDLES THE CONSENT
export function initConsent(policyVersion, tagId, primaryBg, secondaryBg) {
  if (!policyVersion)
    throw new Error("Please give the policy version as the first parameter");
  if (!tagId)
    throw new Error("Please give your tracking id as the second parameter");

  const savedConsent = getConsent(policyVersion);

  if (savedConsent === states.granted) {
    loadAnalytics(tagId);
  } else if (savedConsent === states.unknown) {
    createConsentBanner(primaryBg, secondaryBg);

    const acceptBtn = document.getElementById("acceptConsentBtn");
    const denyBtn = document.getElementById("denyConsentBtn");

    if (!acceptBtn)
      throw new Error(
        "Accept button is not found in the DOM. Please make sure initConsent loads after the DOM",
      );
    if (!denyBtn)
      throw new Error(
        "Deny button is not found in the DOM. Please make sure initConsent loads after the DOM",
      );

    //ACCEPT OR DENY BUTTON CLICK HANDLER
    acceptBtn.addEventListener("click", () => {
      saveConsent(states.granted, policyVersion);
      loadAnalytics(tagId);
    });
    denyBtn.addEventListener("click", () => {
      saveConsent(states.denied, policyVersion);
    });
  }
}

//GET CONSENT PREFERENCE FROM LOCALSTORAGE
function getConsent(policyVersion) {
  let savedConsent;

  try {
    savedConsent = JSON.parse(localStorage.getItem("savedConsent"));
  } catch {
    return states.unknown;
  }

  if (!savedConsent || savedConsent.policyVersion !== policyVersion)
    return states.unknown;

  if (savedConsent === states.granted || savedConsent === states.denied) {
    return savedConsent.choice;
  } else {
    return states.unknown;
  }
}

//SAVE CONSENT PREFERENCE
function saveConsent(choice, policyVersion) {
  document.querySelector(".consentCard")?.remove();
  const dataToStore = {
    choice,
    policyVersion,
  };

  try {
    localStorage.setItem("savedConsent", JSON.stringify(dataToStore));
  } catch {
    console.error("An error occured. Storage might be blocked");
  }
}

//RESET PREFERENCE
function resetConsent() {
  localStorage.removeItem("savedConsent");
}

export function createConsentBanner(primaryColor, secondaryColor) {
  const card = document.createElement("div");
  card.classList.add("consentCard");

  const headingText = document.createElement("h2");
  headingText.textContent = "We use cookies";

  const text = document.createElement("p");
  text.textContent =
    "We use cookies to improve your experience, analyze usage, and enhance our services. You can choose to accept or decline.";

  const acceptBtn = document.createElement("button");
  acceptBtn.type = "button";
  acceptBtn.textContent = "Accept";
  acceptBtn.style.background = primaryColor;
  acceptBtn.id = "acceptConsentBtn";

  const denyBtn = document.createElement("button");
  denyBtn.type = "button";
  denyBtn.textContent = "Reject";
  denyBtn.style.background = secondaryColor;
  denyBtn.id = "denyConsentBtn";

  card.append(headingText, text, acceptBtn, denyBtn);

  document.body.append(card);
}

function loadAnalytics(tagId) {
  console.log("Analytics loaded");
}
