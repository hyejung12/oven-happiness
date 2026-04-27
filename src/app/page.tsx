import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/data'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ArrowRight, Star, Heart, Clock, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 font-sans text-neutral-900">
      <Navbar />

      <main>
        {/* ── Hero Section ────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-widest mb-6">
                Premium Baking Studio
              </span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-neutral-950 mb-8">
                오븐에서 갓 구운 <br />
                <span className="text-brand-600 italic">행복</span>을 만나보세요
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-lg leading-relaxed">
                엄선된 재료와 셰프의 정성이 담긴 베이킹 클래스. 
                당신의 일상에 달콤한 휴식과 성취감을 선물합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="rounded-full px-10 py-7 text-lg shadow-xl shadow-brand-500/20">
                  <Link href="/classes">클래스 보러가기</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-full px-10 py-7 text-lg border-neutral-300">
                  <Link href="/about">브랜드 스토리</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="relative aspect-[4/5] lg:aspect-square">
              <div className="absolute inset-0 bg-brand-200 rounded-3xl rotate-3 scale-95 opacity-50" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/hero.png"
                  alt="Freshly baked artisan bread"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-[240px]">
                <div className="flex text-amber-500 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-sm font-medium text-neutral-900 leading-snug">
                  "인생 첫 소금빵 성공했어요! 셰프님 설명이 너무 친절해요."
                </p>
                <p className="text-xs text-neutral-400 mt-2">— 수강생 김민지 님</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Brand Story Section ─────────────────────────── */}
        <section className="py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <AnimatedSection className="order-2 lg:order-1 relative aspect-video lg:aspect-square">
                 <div className="absolute inset-0 bg-neutral-100 rounded-2xl overflow-hidden">
                    {/* Placeholder for brand image */}
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
                 </div>
              </AnimatedSection>
              
              <AnimatedSection className="order-1 lg:order-2">
                <SectionHeader 
                  title="Happiness in Every Bite" 
                  subtitle="우리는 단순히 빵을 만드는 기술을 넘어, 베이킹이 주는 치유와 즐거움을 공유합니다." 
                  align="left" 
                  className="mb-10"
                />
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div className="ml-5">
                      <h4 className="text-lg font-bold text-neutral-900">정성을 담은 재료</h4>
                      <p className="mt-2 text-neutral-600 leading-relaxed">프랑스산 고메 버터와 유기농 밀가루만을 사용하여 깊고 풍부한 풍미를 보장합니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                      <Users className="h-6 w-6" />
                    </div>
                    <div className="ml-5">
                      <h4 className="text-lg font-bold text-neutral-900">소수 정예 클래스</h4>
                      <p className="mt-2 text-neutral-600 leading-relaxed">한 명 한 명 세심한 지도가 가능하도록 소규모로 운영하여 완벽한 결과물을 약속합니다.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <Button variant="link" asChild className="p-0 text-brand-600 font-bold group">
                    <Link href="/about" className="flex items-center">
                      더 자세한 스토리 보기 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Best Classes Section ────────────────────────── */}
        <section className="py-32 bg-neutral-50 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="베스트 베이킹 클래스" 
              subtitle="가장 많은 사랑을 받은 시그니처 클래스를 만나보세요." 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { 
                  title: '바삭쫄깃 소금빵', 
                  desc: '겉바속촉의 정석, 오븐 해피니스만의 비법 레시피로 배우는 시그니처 소금빵 클래스입니다.',
                  time: '3시간',
                  level: '초급',
                  price: '₩80,000'
                },
                { 
                  title: '천연 발효종 사워도우', 
                  desc: '건강한 재료와 정성으로 빚어내는 사워도우의 깊은 매력을 경험해 보세요.',
                  time: '5시간',
                  level: '중급',
                  price: '₩120,000'
                },
                { 
                  title: '프렌치 구움과자 세트', 
                  desc: '휘낭시에, 마들렌, 까눌레까지. 프랑스 정통 구움과자의 모든 것을 배웁니다.',
                  time: '4시간',
                  level: '초급',
                  price: '₩95,000'
                },
              ].map((cls, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col h-full bg-white rounded-3xl">
                    <div className="aspect-[4/3] bg-neutral-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-neutral-300 transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-neutral-900 shadow-sm">
                          {cls.level}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center text-xs text-neutral-400 mb-3 space-x-3">
                        <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {cls.time}</span>
                        <span className="flex items-center font-bold text-brand-600">{cls.price}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-4">{cls.title}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed flex-grow">
                        {cls.desc}
                      </p>
                      <Button variant="outline" size="sm" asChild className="mt-8 rounded-full border-neutral-200 group-hover:border-brand-300 group-hover:bg-brand-50 group-hover:text-brand-700 transition-all">
                        <Link href="/classes">신청하기</Link>
                      </Button>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <Button size="lg" variant="outline" asChild className="rounded-full px-12 border-neutral-300">
                <Link href="/classes">전체 클래스 보기</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Testimonials Section ────────────────────────── */}
        <section className="py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-600 rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-3xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-700 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center space-x-1 text-brand-200 mb-8">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-6 w-6 fill-current" />)}
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-10">
                  "베이킹을 시작하고 제 주말이 <br /> 완전히 달라졌어요."
                </h2>
                <p className="text-lg text-brand-100 opacity-90 mb-12 italic">
                  처음엔 어려울 것 같아 걱정했는데, 셰프님의 친절한 설명과 완벽한 레시피 덕분에 매번 맛있는 빵을 만들어가요. 
                  가족들이 제가 만든 빵을 기다리는 모습에 너무 행복합니다.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-brand-200" />
                  <div className="text-left">
                    <p className="text-white font-bold">수강생 한지혜 님</p>
                    <p className="text-brand-200 text-sm">정규반 수강 중</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Call to Action ──────────────────────────────── */}
        <section className="py-32 bg-neutral-50">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <AnimatedSection>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-neutral-950 mb-8">
                함께 행복을 <br /> 구워볼까요?
              </h2>
              <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
                지금 첫 번째 클래스를 예약하고, 오븐 해피니스만의 달콤한 베이킹 여정을 시작해 보세요.
              </p>
              <Button size="lg" asChild className="rounded-full px-16 py-8 text-xl shadow-2xl shadow-brand-500/20">
                <Link href="/booking">지금 예약하기</Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
