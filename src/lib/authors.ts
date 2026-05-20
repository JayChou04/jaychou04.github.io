import site from '@data/site.yaml';

const normalize = (name: string): string =>
  name.toLowerCase().replace(/\s+/g, ' ').trim();

const ownerNames = new Set<string>([
  normalize(site.display_name as string),
  normalize(site.short_name as string),
  normalize(site.name as string),
]);

export const isOwner = (name: string): boolean => ownerNames.has(normalize(name));
