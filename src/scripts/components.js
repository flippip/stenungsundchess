/**
 * Component Loader - Loads header and footer components
 * This version embeds the component HTML directly for file:// compatibility
 */

(function() {
  'use strict';

  // Embedded header component HTML
  const HEADER_HTML = `
<header class="site-header">
  <a class="brand" href="hem.html#hem" aria-label="Stenungsunds Schackklubb startsida">
    <img src="../assets/images/ssk.svg" alt="" class="brand-logo" />
    <span class="brand-text">Stenungsunds Schackklubb</span>
  </a>
  <nav class="site-nav" aria-label="Huvudmeny">
    <a href="hem.html#hem">Hem</a>
    <a href="verksamhet.html">Verksamhet</a>
    <a href="nyheter.html">Nyheter</a>
    <a href="styrelse.html">Styrelsen</a>
    <a href="hem.html#kontakt">Kontakt</a>
  </nav>
</header>
`.trim();

  // Embedded footer component HTML
  const FOOTER_HTML = `
<footer class="footer">
  <img src="../assets/images/ssk.svg" alt="" />
  <p>© 2026 Stenungsunds Schackklubb</p>
</footer>
`.trim();

  /**
   * Insert HTML content into placeholder elements
   * @param {string} html - HTML content to insert
   * @param {string} selector - CSS selector for placeholder elements
   */
  function insertComponent(html, selector) {
    const placeholders = document.querySelectorAll(selector);
    
    if (placeholders.length === 0) {
      console.warn(`No placeholder elements found for: ${selector}`);
      return;
    }

    placeholders.forEach(placeholder => {
      // Create a temporary container to parse the HTML
      const template = document.createElement('template');
      template.innerHTML = html.trim();
      
      // Replace the placeholder with the component content
      placeholder.replaceWith(template.content.cloneNode(true));
    });
  }

  /**
   * Initialize component insertion when DOM is ready
   */
  function init() {
    // Insert header component
    insertComponent(HEADER_HTML, '[data-component="header"]');
    
    // Insert footer component
    insertComponent(FOOTER_HTML, '[data-component="footer"]');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();