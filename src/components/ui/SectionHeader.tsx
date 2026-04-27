import { AnimatedSection } from './AnimatedSection'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ title, subtitle, align = 'center', className = '' }: SectionHeaderProps) {
  const isCenter = align === 'center'
  
  return (
    <AnimatedSection className={`mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="font-serif text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-neutral-600 max-w-2xl ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-8 h-1 w-20 bg-brand-400 ${isCenter ? 'mx-auto' : ''}`} />
    </AnimatedSection>
  )
}
