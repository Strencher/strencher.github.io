export function parseHTML(text) {
  const dummyNode = document.createElement('div');
  dummyNode.innerHTML = text;

  return dummyNode.children.length > 1 ? Array.from(dummyNode.children) : dummyNode.children[0];
};

/**
 * 
 * @param {string} thing A document selector or html string
 * @returns {Element}
 */
export default function $(thing) {
  if (thing.trim().charAt(0) === '<') return parseHTML(thing);
  
  return document.querySelector(thing);
};