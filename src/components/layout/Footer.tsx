import Link from 'next/link'
import { siteConfig } from '@/lib/data'
import { Instagram, Facebook, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-neutral-950 py-20 text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif text-2xl font-bold text-white">
              {siteConfig.name}
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex space-x-5">
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">브랜드 스토리</Link></li>
              <li><Link href="/classes" className="hover:text-white transition-colors">클래스 목록</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">수강생 리뷰</Link></li>
              <li><Link href="/booking" className="hover:text-white transition-colors">예약 안내</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li>서울특별시 강남구 테헤란로 123</li>
              <li>02-1234-5678</li>
              <li>hello@ovenhappiness.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 border-t border-neutral-800 pt-8 text-center text-xs">
          <p>{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
