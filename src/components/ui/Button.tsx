'use client'

import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

/* ── Button Component ────────────────────────────────
 *  Reusable button with variant support and asChild support.
 *
 *  Variants:
 *    primary  — filled brand color (default)
 *    outline  — bordered, transparent background
 *    ghost    — text-only, no border
 *
 *  Sizes:
 *    sm / md (default) / lg
 * ──────────────────────────────────────────────────── */
type Variant = 'primary' | 'outline' | 'ghost' | 'link'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  asChild?: boolean
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 shadow-sm',
  outline:
    'border border-neutral-200 text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100',
  ghost: 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100',
  link: 'text-brand-600 hover:underline p-0 h-auto',
}

const sizeStyles: Record<Size, string> = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-8 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  asChild = false,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  )
}
