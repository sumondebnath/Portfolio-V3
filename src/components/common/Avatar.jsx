/**
 * Profile avatar with two states:
 * - image provided -> clean circular <img> (object-cover)
 * - no image       -> intentional initials monogram (never a broken image)
 */
export default function Avatar({ name, image, alt, className = '', loading = 'lazy' }) {
  if (image) {
    return (
      <img
        src={image}
        alt={alt || name}
        loading={loading}
        className={`rounded-full border border-tint-border object-cover ${className}`}
      />
    );
  }

  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');

  return (
    <span
      aria-hidden="true"
      className={`flex items-center justify-center rounded-full border border-tint-border bg-tint-strong font-bold text-primary ${className}`}
    >
      {initials}
    </span>
  );
}