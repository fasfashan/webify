export default function ButtonSecondary({ label, icon, url }) {
  return (
    <a
      href={url}
      className="bg-white hover:bg-neutral-100 text-center justify-center items-center transition-all gap-2 flex  shadow-sm border font-medium border-neutral-300 px-4 py-2 rounded-md"
    >
      {label}
      {icon && <span className="icon">{icon}</span>}
    </a>
  );
}
