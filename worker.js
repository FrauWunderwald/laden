// cloudflare worker
// proxy requests from */shop to ww.pages.dev

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // proxy requests from */shop to ww.pages.dev
    if (url.pathname.startsWith("/shop")) {
      url.hostname = "laden-landingpage.pages.dev";

      // strip /shop from start of pathname
      url.pathname = url.pathname.replace(/^\/shop/, "");

      return fetch(url.toString(), request);
    }

    // return regular request
    return fetch(request);
  },
};
