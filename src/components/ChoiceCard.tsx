import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ChoiceCardProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    selected?: boolean;
    correct?: boolean;
  }
>;

export function ChoiceCard({ children, selected, correct, className = '', ...props }: ChoiceCardProps) {
  const choiceState = correct ? 'is-correct' : selected ? 'is-selected' : '';

  return (
    <button className={`choice-card ${choiceState} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
