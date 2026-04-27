import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Card } from '@/components/ui/Card'
import { Star, MessageSquare, Instagram } from 'lucide-react'
import Image from 'next/image'

const REVIEWS = [
  { id: 1, user: '베이킹초보', date: '2024.03.20', content: '처음 해보는 베이킹이었는데 셰프님이 너무 친절하게 알려주셔서 소금빵 성공했어요! 가족들이 다 너무 맛있대요.', class: '바삭바삭 소금빵' },
  { id: 2, user: '빵순이', date: '2024.03.18', content: '공방 분위기가 너무 예뻐서 사진 찍기도 좋아요. 힐링하고 왔습니다.', class: '감성 가득 구움과자' },
  { id: 3, user: '주말취미', date: '2024.03.15', content: '재료도 다 준비해주시고 깔끔해서 너무 편하게 수업 들었습니다. 다음 달 정규반도 신청하려고요!', class: '원데이 클래스' },
  { id: 4, user: '행복한하루', date: '2024.03.12', content: '마카롱 꼬끄가 맨날 터져서 고민이었는데 드디어 해결책을 찾았어요. 역시 전문가는 다릅니다.', class: '프렌치 마카롱 정복' },
]

export default function ReviewsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Community" 
            subtitle="수강생들이 직접 전하는 오븐 해피니스의 행복한 이야기들을 확인해 보세요. 따뜻한 후기는 우리에게 가장 큰 힘이 됩니다." 
          />

          {/* ── Photo Gallery ────────────────────────────── */}
          <div className="mb-32">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-serif text-3xl font-bold text-neutral-900 flex items-center">
                Photo Gallery
              </h2>
              <div className="flex items-center text-brand-600 font-bold text-sm">
                <Instagram className="h-4 w-4 mr-2" /> @oven_happiness
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="aspect-square rounded-3xl bg-neutral-200 overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                      <MessageSquare className="text-white h-8 w-8" />
                    </div>
                    {/* Placeholder for review image */}
                    <div className="w-full h-full bg-neutral-300 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* ── Text Reviews ──────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {REVIEWS.map((review, idx) => (
              <AnimatedSection key={review.id} delay={idx * 0.1}>
                <Card className="p-10 border-none shadow-xl bg-white h-full flex flex-col rounded-[2.5rem] relative">
                   <div className="absolute top-8 right-10 text-neutral-100 italic font-serif text-8xl -z-0">"</div>
                  <div className="relative z-10 flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold mr-4 text-lg">
                        {review.user[0]}
                      </div>
                      <div>
                        <p className="font-bold text-neutral-900">{review.user}</p>
                        <p className="text-xs text-neutral-400">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex text-amber-500">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-current" />)}
                    </div>
                  </div>
                  <p className="relative z-10 text-neutral-600 mb-8 flex-grow leading-relaxed text-lg italic">
                    {review.content}
                  </p>
                  <div className="relative z-10 pt-6 border-t border-neutral-50 text-sm text-brand-600 font-bold flex items-center">
                    <div className="w-2 h-2 rounded-full bg-brand-400 mr-3" />
                    {review.class}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
