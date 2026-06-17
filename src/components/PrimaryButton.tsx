import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type PrimaryButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'solid' | 'ghost';
  }
>;

export function PrimaryButton({ children, variant = 'solid', className = '', ...props }: PrimaryButtonProps) {
  return (
    <button className={`primary-button primary-button--${variant} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
