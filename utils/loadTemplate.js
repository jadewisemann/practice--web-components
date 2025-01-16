export const loadTemplate = async (path) => {
  const templateHTML = await fetch(path);
  const textHTMLTemplate = await templateHTML.text();
  return new DOMParser()
    .parseFromString(textHTMLTemplate, 'text/html')
    .querySelector('template');
};
