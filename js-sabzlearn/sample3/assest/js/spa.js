import router from "./router.js";

document.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.className.includes("nav-link")) {
    return false;
  }

  urlRoutes(event);
});

function urlRoutes(event) {
  window.history.pushState({}, "", "http://localhost:5500/js-sabzlearn/sample3" + event.target.pathname + ".html");
  locationHandler();
}

async function locationHandler() {
  const loc = window.location.pathname;

  console.log(loc);
  const route = router[loc] || router[404];
  const html = await fetch(route.template).then((res) => res.text());
  document.querySelector("#content").innerHTML = html;
  document.title = route.title;
}

window.onpopstate = locationHandler;