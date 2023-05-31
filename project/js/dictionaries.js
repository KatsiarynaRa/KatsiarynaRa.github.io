const RU = {
  "Sort by": "Сортировать по",
  "Episode:": "Эпизод:",
  "Episod number": "По номеру эпизода",
  "Release date": "По дате релиза",
  Search: "Искать",
};
const EN = {
  "Sort by": "Sort by",
  "Episode:": "Episode:",
  "Episod number": "Episod number",
  "Release date": "Release date",
  Search: "Search",
};

const DICTIONARIES = {
  ru: RU,
  en: EN,
};

const LOCALE_LANG = "language";
const selectedLang = localStorage.getItem(LOCALE_LANG) || "eng";
changeLang(selectedLang);

function changeLang(lang) {
  const dictionary = DICTIONARIES[lang];
  localStorage.setItem("language", lang);
  document.querySelectorAll("[data-lang-key]").forEach((element) => {
    const translateKey = element.dataset.langKey;
    element.textContent = dictionary[translateKey];
  });
}

