export function idExtractor(id: string | undefined) {
  if (typeof id === "undefined") return;
  return id.replace("https://vostfree.in/", "").replace(".html", "");
}

export function restoreId(id: string) {
  if (typeof id === "undefined") return;
  return `https://vostfree.in/${id}.html`;
}

export function getPureID(id: string) {
  const regex = /(\d+)-/;
  const match = id.match(regex);

  if (match && match[1]) {
    const id = match[1];
    return id;
  } else {
    return "";
  }
}
