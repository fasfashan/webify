// eslint-disable-next-line react/prop-types
export default function ButtonPrimary({ label, icon, url }) {
  return (
    <a
      href={url}
      className="bg-purple-600 w-fit text-white hover:bg-purple-400 transition-all gap-2 flex items-center shadow-sm  font-medium  px-4 py-2 rounded-md"
    >
      {label}
      {icon && <span className="icon">{icon}</span>}
    </a>
  );
}
