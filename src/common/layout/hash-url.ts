export function hashURL(url: URL): URL {

  const base = new URL('/', url.href);

  return new URL(url.hash.substring(1), base);
}

export function setHashURL(url: URL, hashURL: URL): URL {

  const hashBaseLen = new URL('/', hashURL).href.length;
  const result = new URL(url.href);

  result.hash = hashURL.href.substring(hashBaseLen);

  return result;
}
