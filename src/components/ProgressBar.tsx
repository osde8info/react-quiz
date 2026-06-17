interface ProgressBarProps {
  value: number;
  label: string;
}

export function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div className="progress-wrap">
      <div className="progress-label-row">
        <span className="progress-label">{label}</span>
        <span className="progress-label">{value}%</span>
      </div>
      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
