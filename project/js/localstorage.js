const DICTIONARIES = {
  'ru': RU,
  'en': EN,
}

const LOCALE_LANG = 'language';
const selectedLang = localStorage.getItem(LOCALE_LANG) || 'eng';
changeLang(selectedLang);

function changeLang(lang) {
  const dictionary = DICTIONARIES[lang];
  localStorage.setItem('language', lang);
  document.querySelectorAll('[data-lang-key]')
    .forEach(element => {
      const translateKey = element.dataset.langKey;
      element.textContent = dictionary[translateKey];
    })
}

