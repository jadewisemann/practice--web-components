import { loadTemplate } from "/utils/loadTemplate.js";

(async () => {
  const HTMLTemplate = await loadTemplate('/components/custom-button/custom-button.html')
  // const HTMLTemplate = await loadTemplate('./custom-button.html')
  
  class CustomButton extends HTMLElement {
    constructor() {
      super();
      const instance = HTMLTemplate.content.cloneNode(true);
      // this.attachShadow({ mode: 'open' }).appendChild(instance);
      this.appendChild(instance);
    };
    
  };
  
  customElements.define('custom-button', CustomButton);
})();
