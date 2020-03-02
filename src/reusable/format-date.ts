const thisYearDateFormat = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' });
const otherYearFateFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export function formatDate(date: Date): string {

  const now = new Date();
  const format = now.getFullYear() === date.getFullYear() ? thisYearDateFormat : otherYearFateFormat;

  return format.format(date);
}
