import { initPageA } from "../pages/page-a";
import { initPageB } from "../pages/page-b";
import { initPageC } from "../pages/page-c";

const routes = [
  {
    path: "/welcome",
    handler: initPageA,
  },

  {
    path: "/step-1",
    handler: initPageB,
  },

  {
    path: "/thankyou",
    handler: initPageC,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (route == r.path) {
        const el = r.handler({ goTo: goTo });

        while (container.firstChild) {
          container.firstChild.remove();
        }

        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
    console.log(location.pathname);
  };
}
