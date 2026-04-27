import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        {/* ── Brand Philosophy ───────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Story" 
            subtitle="오븐 해피니스는 단순한 베이킹 클래스를 넘어, 빵을 굽는 시간 동안 느낄 수 있는 평온함과 구워진 빵을 나눌 때의 기쁨을 지향합니다." 
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <AnimatedSection>
              <h3 className="font-serif text-3xl font-bold text-neutral-950 mb-8 leading-snug">
                "오븐에서 갓 구운 빵의 향기는 <br /> 세상에서 가장 따뜻한 위로입니다."
              </h3>
              <div className="space-y-6 text-neutral-600 leading-relaxed text-lg">
                <p>
                  우리는 바쁜 일상 속에서 잠시 멈추어, 밀가루를 만지고 반죽의 변화를 지켜보는 과정 자체가 하나의 명상이 될 수 있다고 믿습니다. 
                </p>
                <p>
                  오븐 해피니스의 모든 레시피는 수백 번의 테스트를 거쳐 완성되었습니다. 
                  초보자도 실패 없이 전문적인 맛을 낼 수 있도록 과학적인 원리와 감성적인 터치를 함께 전달합니다.
                </p>
                <p>
                  이곳에서 만든 빵 한 덩이가 당신의 식탁을 더 풍성하게 하고, 사랑하는 사람들과의 대화를 더 달콤하게 만들기를 진심으로 바랍니다.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-neutral-100" />
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2052&auto=format&fit=crop')] bg-cover bg-center" />
            </AnimatedSection>
          </div>

          {/* ── Chef Introduction ────────────────────────── */}
          <div className="bg-neutral-50 rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="aspect-square bg-neutral-200 rounded-full overflow-hidden shadow-inner max-w-[280px] mx-auto w-full border-8 border-white">
                {/* Placeholder for chef profile */}
                <div className="w-full h-full bg-neutral-300" />
              </div>
              
              <div className="md:col-span-2">
                <span className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4 inline-block">Founder & Main Chef</span>
                <h3 className="font-serif text-3xl font-bold text-neutral-950 mb-6">Chef. Lee Happiness</h3>
                <div className="space-y-4 text-neutral-600">
                  <p>프랑스 르 꼬르동 블루(Le Cordon Bleu) 제빵 디플로마 수료</p>
                  <p>파리 유명 블랑제리 'La Boulangerie' 경력 5년</p>
                  <p>전직 패션 매거진 에디터 — 감각적인 디자인 베이킹 전문</p>
                  <p>現 오븐 해피니스 대표 셰프</p>
                </div>
                <p className="mt-8 text-neutral-500 italic leading-relaxed">
                  "제게 베이킹은 소통입니다. 재료와의 소통, 그리고 빵을 통해 만나는 수강생분들과의 소통이죠. 
                  진심이 담긴 빵은 누구나 알아본다고 생각합니다."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
