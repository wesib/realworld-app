const htmlUnsafe: { [key: string]: string } = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
};

function replaceHtmlUnsafe(tag: string): string {
  return htmlUnsafe[tag] || tag;
}

export function escapeHtml(str: string | null | undefined): string {
  return str ? str.replace(/[&<>]/g, replaceHtmlUnsafe) : '';
}
