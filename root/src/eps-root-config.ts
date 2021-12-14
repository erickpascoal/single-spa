import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@eps/header",
  app: () => System.import("@eps/header"),
  activeWhen: (location) => location.pathname !== "/",
});

registerApplication({
  name: "@eps/footer",
  app: () => System.import("@eps/footer"),
  activeWhen: (location) => location.pathname !== "/",
});

registerApplication({
  name: "@eps/auth",
  app: () => System.import("@eps/auth"),
  activeWhen: (location) => location.pathname === "/",
});

start({
  urlRerouteOnly: true,
});
