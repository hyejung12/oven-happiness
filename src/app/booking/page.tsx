'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle2 } from 'lucide-react'

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen flex-col bg-neutral-50">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-20">
          <AnimatedSection className="max-w-md w-full px-4 text-center">
            <div className="w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-8">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">예약 신청이 완료되었습니다!</h2>
            <p className="text-neutral-600 mb-10">
              담당자가 확인 후 24시간 이내에 연락드려 최종 예약을 확정해 드립니다. 조금만 기다려 주세요!
            </p>
            <Button asChild className="rounded-full px-10">
              <a href="/">홈으로 돌아가기</a>
            </Button>
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 font-sans">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Book Your Class" 
            subtitle="원하시는 날짜와 클래스를 선택해 예약 신청을 남겨주세요. 오븐 해피니스에서 특별한 하루를 만들어 드립니다." 
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <Card className="p-8 md:p-12 border-none shadow-2xl bg-white rounded-[2.5rem]">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-sm font-bold text-neutral-900 flex items-center">
                          <User className="h-4 w-4 mr-2 text-brand-500" /> 이름
                        </label>
                        <input 
                          required
                          type="text" 
                          placeholder="성함을 입력해주세요"
                          className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border-none focus:ring-2 focus:ring-brand-400 transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-bold text-neutral-900 flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-brand-500" /> 연락처
                        </label>
                        <input 
                          required
                          type="tel" 
                          placeholder="010-0000-0000"
                          className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border-none focus:ring-2 focus:ring-brand-400 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-bold text-neutral-900 flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-brand-500" /> 희망 클래스 선택
                      </label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border-none focus:ring-2 focus:ring-brand-400 transition-all outline-none appearance-none">
                        <option>바삭쫄깃 소금빵 (80,000원)</option>
                        <option>천연 발효종 사워도우 (120,000원)</option>
                        <option>프렌치 구움과자 3종 (95,000원)</option>
                        <option>포카치아 & 치아바타 (85,000원)</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-bold text-neutral-900 flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2 text-brand-500" /> 기타 문의사항
                      </label>
                      <textarea 
                        rows={4}
                        placeholder="알러지 여부나 추가 궁금한 점을 적어주세요"
                        className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border-none focus:ring-2 focus:ring-brand-400 transition-all outline-none resize-none"
                      />
                    </div>

                    <div className="pt-6">
                      <Button 
                        disabled={isLoading}
                        type="submit" 
                        className="w-full py-8 text-lg font-bold rounded-2xl shadow-xl shadow-brand-500/20"
                      >
                        {isLoading ? '신청 중...' : '예약 신청하기'}
                      </Button>
                      <p className="text-center text-xs text-neutral-400 mt-4">
                        * 예약 신청 후 담당자의 안내에 따라 결제가 완료되어야 예약이 확정됩니다.
                      </p>
                    </div>
                  </form>
                </Card>
              </AnimatedSection>
            </div>

            <div className="space-y-8">
              <AnimatedSection delay={0.1}>
                <Card className="p-8 border-none bg-brand-600 text-white rounded-[2.5rem] shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-50" />
                  <h4 className="font-serif text-xl font-bold mb-6 relative z-10">예약 안내 사항</h4>
                  <ul className="space-y-4 text-sm text-brand-100 relative z-10">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                      모든 클래스는 선착순 예약제로 운영됩니다.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                      수업 3일 전까지는 100% 환불이 가능합니다.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                      준비물(앞치마, 필기구 등)은 모두 제공됩니다.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                      주차 공간이 협소하니 대중교통 이용을 권장합니다.
                    </li>
                  </ul>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="p-8 border-none bg-white rounded-[2.5rem] shadow-lg text-center">
                   <h4 className="font-serif text-xl font-bold text-neutral-900 mb-4">빠른 상담</h4>
                   <p className="text-sm text-neutral-500 mb-6">전화나 카카오톡이 더 편하신가요?</p>
                   <div className="space-y-3">
                     <Button variant="outline" className="w-full rounded-full border-neutral-200">02-1234-5678</Button>
                     <Button variant="outline" className="w-full rounded-full border-neutral-200 bg-yellow-50 text-yellow-800 border-yellow-100 hover:bg-yellow-100">카카오톡 문의</Button>
                   </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
