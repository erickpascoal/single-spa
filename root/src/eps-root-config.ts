import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@eps/core",
  app: () => System.import("@eps/core"),
  activeWhen: () => true,
});

// registerApplication({
//   name: "@eps/footer",
//   app: () => System.import("@eps/footer"),
//   activeWhen: (location) => location.pathname !== "/",
// });

start({
  urlRerouteOnly: true,
});
