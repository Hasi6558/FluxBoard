import * as React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export default function Button({
  className = '',
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  const variants: Record<string, string> = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 ring-offset-neutral-950',
    secondary:
      'bg-neutral-800 text-neutral-100 hover:bg-neutral-700 focus-visible:ring-neutral-500 ring-offset-neutral-950',
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} px-4 py-2 ${className}`}
      {...props}
    />
  );
}
