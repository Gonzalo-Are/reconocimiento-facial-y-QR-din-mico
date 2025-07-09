export default function Container({ title, children, minHeight = "auto", maxHeight = "auto" }) {
  return (
    <div
      className="border border-gray-200 rounded-lg p-6 bg-white"
      style={{
        minHeight: minHeight,
        maxHeight: maxHeight
      }}
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}
