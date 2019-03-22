
/**
 * Main module
 */
(function() {
  document.addEventListener("DOMContentLoaded", function() {
    document
      .querySelector('select[id="navigation"]')
      .addEventListener("change", function(event) {
        window.location = event.target.value;
      });
  });
})();
