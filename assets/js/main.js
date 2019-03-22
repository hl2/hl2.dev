
/**
 * Main module
 */
(function() {
  document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector('select[id="navigation"]');
    if (select) {
      select.addEventListener("change", event => {
        window.location = event.target.value;
      });
    }
  });
})();
