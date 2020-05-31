//
// SW registrieren (nicht im IE11)
//
if (
  "serviceWorker" in navigator &&
  !navigator.userAgent.match(/Trident.*rv\:11\./)
) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("sw.js")
      .then(function(registration) {
        console.log("Service Worker registered");
      })
      .catch(function(err) {
        console.log("SW registration failed");
      });
  });
}
