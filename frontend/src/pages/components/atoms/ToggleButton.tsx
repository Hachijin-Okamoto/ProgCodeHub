type ToggleButtonProps = {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export default function ToggleButton({
  isActive,
  onClick,
  children,
}: ToggleButtonProps) {
  const baseStyle = 'px-4 py-1.5 text-sm font-medium transition-colors';
  const activeStyle = 'bg-white shadow text-gray-900';
  const inactiveStyle = 'text-gray-500 hover:text-gray-700';

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
    >
      {children}
    </button>
  );
}
