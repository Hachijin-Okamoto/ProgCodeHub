type Props = {
  value: number;
  onChange: (v: number) => void;
};

export default function LevelSelect({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="rounded border px-3 py-2 text-sm"
    >
      {[1, 2, 3, 4, 5].map((lv) => (
        <option key={lv} value={lv}>
          Level {lv}
        </option>
      ))}
    </select>
  );
}
