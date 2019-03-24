
/**
 * Main module
 */
(function(tarte) {
  // Docs select menu listener
  document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector('select[id="navigation"]');
    if (select) {
      select.addEventListener("change", event => {
        window.location = event.target.value;
      });
    }
  });

  // Cookie consent banner
  {{ if not .Site.IsServer }}
    tarte.user.googletagmanagerId = "{{ .Site.Params.googleTagManagerID }}";
    (tarte.job = tarte.job || []).push("googletagmanager");
  {{ end }}

  tarte.init({
    privacyUrl: "" /* Privacy policy url */,
    hashtag: "#tarteaucitron" /* Open the panel with this hashtag */,
    cookieName: "tartaucitron" /* Cookie name */,
    orientation: "bottom" /* Banner position (top - bottom) */,
    showAlertSmall: false /* Show the small banner on bottom right */,
    cookieslist: false /* Show the cookie list */,
    adblocker: false /* Show a Warning if an adblocker is detected */,
    AcceptAllCta: true /* Show the accept all button when highPrivacy on */,
    highPrivacy: true /* Disable auto consent */,
    handleBrowserDNTRequest: false /* If Do Not Track == 1, disallow all */,
    removeCredit: true /* Remove credit link */,
    moreInfoLink: true /* Show more info link */,
    useExternalCss: true /* If false, the tarteaucitron.css file will be loaded */,
  });
})(tarteaucitron);
