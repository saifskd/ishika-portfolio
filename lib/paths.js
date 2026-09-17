// Next Link prefixes routes automatically; public-file URLs need this helper.
export function assetPath(path) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path || !path.startsWith('/') || path.startsWith('//') || (base && (path === base || path.startsWith(`${base}/`)))) return path;
  return `${base}${path}`;
}
