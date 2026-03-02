export type Direction = 'ltr' | 'rtl';

export const getDirectionForLanguage = (languageCode: string): Direction => {
  const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
  return rtlLanguages.includes(languageCode) ? 'rtl' : 'ltr';
};

export const setHtmlDirection = (direction: Direction): void => {
  const htmlElement = document.documentElement;
  htmlElement.dir = direction;
  htmlElement.style.direction = direction;
};

export const initializeDirection = (languageCode: string): void => {
  const direction = getDirectionForLanguage(languageCode);
  setHtmlDirection(direction);
};
