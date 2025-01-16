import { loadTemplate } from "/utils/loadTemplate.js";
import '/components/custom-button/custom-button.js'

(async () => {
  const HTMLTemplate = await loadTemplate('/components/custom-card/custom-card.html')
  
  class CustomCard extends HTMLElement { 
    constructor() {
      super();
      const instance = HTMLTemplate.content.cloneNode(true);
      // this.attachShadow({ mode: 'open' }).appendChild(instance);
      this.appendChild(instance);
    };
    
  };
  
  customElements.define('custom-card', CustomCard);
})();