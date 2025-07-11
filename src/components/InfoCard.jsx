export default function InfoCard({
  color,
  title,
  description,
  icon: Icon,
  data,
  badge
}) {
  // Default color configuration
  const colorConfig = {
    blue: {
      bg: 'bg-gradient-to-br from-blue-50/80 to-[#DEECFE]',
      border: 'border-blue-500/20',
      iconBg: 'bg-blue-500',
      textColor: 'text-blue-600',
      shadow: 'hover:shadow-blue-500/20'
    },
    green: {
      bg: 'bg-gradient-to-br from-green-50/80 to-[#DFFCE9]',
      border: 'border-green-500/20',
      iconBg: 'bg-green-500',
      textColor: 'text-green-600',
      shadow: 'hover:shadow-green-500/20'
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-50/80 to-[#F4EAFF]',
      border: 'border-purple-500/20',
      iconBg: 'bg-purple-500',
      textColor: 'text-purple-600',
      shadow: 'hover:shadow-purple-500/20'
    },
    orange: {
      bg: 'bg-gradient-to-br from-orange-50/80 to-[#FFEED8]',
      border: 'border-orange-500/20',
      iconBg: 'bg-orange-500',
      textColor: 'text-orange-600',
      shadow: 'hover:shadow-orange-500/20'
    }
  };

  const config = colorConfig[color] || colorConfig.blue;

  return (
    <div className={`group relative overflow-hidden rounded-xl border ${config.border} ${config.bg} p-5 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${config.shadow}`}>
      {Icon && (
        <div className="flex items-start justify-between mb-3">
          <div className={`p-2.5 rounded-lg ${config.iconBg} text-white`}>
            <Icon className="w-5 h-5" />
          </div>
          {badge && (
            <span className="text-xs text-gray-700 bg-gray-200/80 px-2 py-1 rounded-full font-medium">
              {badge}
            </span>
          )}
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <div className={`text-2xl font-bold ${config.textColor} mb-1`}>{data}</div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
