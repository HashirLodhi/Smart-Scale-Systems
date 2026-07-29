const HTML_ACCEPT = 'text/html';

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || request.method !== 'GET') return response;

    const acceptsHtml = (request.headers.get('accept') || '').includes(HTML_ACCEPT);
    if (!acceptsHtml) return response;

    const fallbackUrl = new URL('/index.html', request.url);
    return env.ASSETS.fetch(new Request(fallbackUrl, request));
  },
};
