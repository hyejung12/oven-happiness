import { siteConfig } from '@/lib/data'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Clock, BarChart, Package, Calendar } from 'lucide-react'

export default async function ClassDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  // Mock data for the specific class
  const classInfo = {
    title: '바삭바삭 소금빵',
    cat: '원데이 클래스',
    price: '65,000원',
    level: '초급 (★☆☆)',
    duration: '2시간 30분',
    desc: '겉은 바삭하고 속은 촉촉한 마법의 소금빵. 버터의 풍미와 소금의 짭조름함이 어우러진 최고의 맛을 직접 만들어보세요. 초보자도 실패 없는 비법을 공개합니다.',
    inclusions: ['재료비 일체', '고급 포장 상자', '레시피 카드', '개인용 앞치마 대여'],
    timeline: [
      { time: '20분', task: '이론 설명 및 재료 소개' },
      { time: '60분', task: '반죽 및 성형 과정' },
      { time: '40분', task: '굽기 및 포토타임' },
      { time: '30분', task: '포장 및 시식' },
    ]
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 z-50 w-full border-b border-neutral-200/50 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-serif text-xl font-bold text-brand-700">
            {siteConfig.name}
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/classes" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" /> 목록으로
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* ── Left: Image and Info ─────────────────────── */}
            <div className="space-y-8">
              <div className="relative aspect-video rounded-2xl bg-neutral-200 overflow-hidden shadow-xl">
                <Image src="/assets/빵.PNG" alt="Class Image" fill className="object-cover" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-2">{classInfo.title}</h1>
                  <span className="inline-block bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-sm font-bold">
                    {classInfo.cat}
                  </span>
                </div>
                
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {classInfo.desc}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center p-4 bg-neutral-50 rounded-xl">
                    <BarChart className="h-5 w-5 text-brand-600 mr-3" />
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider">난이도</p>
                      <p className="font-bold text-neutral-900">{classInfo.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-neutral-50 rounded-xl">
                    <Clock className="h-5 w-5 text-brand-600 mr-3" />
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider">소요 시간</p>
                      <p className="font-bold text-neutral-900">{classInfo.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Booking and Details ────────────────── */}
            <div className="space-y-8">
              <Card className="p-8 border-none shadow-2xl bg-brand-50/50 backdrop-blur-sm sticky top-24">
                <div className="flex justify-between items-end mb-8">
                  <span className="text-neutral-600">클래스 수강료</span>
                  <span className="text-3xl font-bold text-brand-700">{classInfo.price}</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Package className="h-5 w-5 text-brand-600 mr-3 mt-1 shrink-0" />
                    <div>
                      <p className="font-bold text-neutral-900 mb-1">포함 사항</p>
                      <p className="text-sm text-neutral-600">{classInfo.inclusions.join(', ')}</p>
                    </div>
                  </div>
                </div>

                <Button variant="primary" className="w-full h-14 text-lg font-bold shadow-lg shadow-brand-500/30" asChild>
                  <Link href="/booking">예약 일정 확인하기</Link>
                </Button>
                <p className="text-center text-xs text-neutral-500 mt-4">
                  * 결제 완료 후 예약이 확정됩니다.
                </p>
              </Card>

              {/* ── Timeline ────────────────────────────────── */}
              <div className="p-8 border border-neutral-100 rounded-2xl">
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-6">커리큘럼 타임라인</h3>
                <div className="space-y-6">
                  {classInfo.timeline.map((step, idx) => (
                    <div key={idx} className="flex gap-4 relative">
                      {idx !== classInfo.timeline.length - 1 && (
                        <div className="absolute left-[7px] top-6 bottom-0 w-[2px] bg-neutral-100" />
                      )}
                      <div className="w-4 h-4 rounded-full bg-brand-400 mt-1.5 shrink-0 z-10" />
                      <div className="flex justify-between w-full">
                        <span className="text-neutral-900 font-medium">{step.task}</span>
                        <span className="text-sm text-neutral-500 font-mono">{step.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-neutral-50 py-12 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm text-neutral-500">{siteConfig.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
