'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/data'
import { Button } from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { name: '브랜드 스토리', href: '/about' },
  { name: '클래스 목록', href: '/classes' },
  { name: '커뮤니티', href: '/reviews' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-neutral-200/50 bg-white/80 backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl font-bold tracking-tight text-neutral-900"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center space-x-10 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  pathname === link.href ? 'text-brand-600' : 'text-neutral-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="primary" asChild size="sm" className="rounded-full px-6">
              <Link href="/booking">예약하기</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-neutral-200 p-4 md:hidden shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-neutral-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="primary" asChild className="w-full">
              <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>예약하기</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
