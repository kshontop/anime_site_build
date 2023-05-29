export function idExtractor(id: string | undefined) {
  if (typeof id === "undefined") return;
  return id.replace("https://vostfree.in/", "").replace(".html", "");
}

export function restoreId(id: string | undefined) {
  if (typeof id === "undefined") return;
  return `https://vostfree.in/${id}.html`;
}
