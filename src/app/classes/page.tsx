import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Clock, Users, BookOpen, Calendar } from 'lucide-react'
import Link from 'next/link'

const CLASSES = [
  {
    id: 1,
    title: '바삭쫄깃 소금빵',
    category: '정규 클래스',
    description: '겉은 바삭하고 속은 쫄깃한 소금빵의 정석을 배웁니다. 발효부터 성형까지 모든 노하우를 공개합니다.',
    time: '3시간',
    capacity: '최대 4명',
    price: '80,000원',
    level: '초급',
  },
  {
    id: 2,
    title: '천연 발효종 사워도우',
    category: '정규 클래스',
    description: '인공 첨가물 없이 시간과 정성으로 빚어내는 건강한 빵. 발효종 키우기부터 굽기까지 전 과정을 마스터합니다.',
    time: '5시간',
    capacity: '최대 3명',
    price: '120,000원',
    level: '중급',
  },
  {
    id: 3,
    title: '프렌치 구움과자 3종',
    category: '원데이 클래스',
    description: '휘낭시에, 마들렌, 까눌레. 선물하기 가장 좋은 프랑스 정통 구움과자 3종을 하루 만에 배웁니다.',
    time: '4시간',
    capacity: '최대 6명',
    price: '95,000원',
    level: '초급',
  },
  {
    id: 4,
    title: '포카치아 & 치아바타',
    category: '원데이 클래스',
    description: '올리브와 허브 향이 가득한 이탈리아 대표 식사 빵. 집에서도 쉽게 구울 수 있는 홈베이킹 맞춤 레시피입니다.',
    time: '3.5시간',
    capacity: '최대 4명',
    price: '85,000원',
    level: '초급',
  },
]

export default function ClassesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Baking Classes" 
            subtitle="당신의 수준과 관심사에 맞는 다양한 클래스가 준비되어 있습니다. 셰프와 함께 즐거운 베이킹 여정을 시작해 보세요." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {CLASSES.map((cls, idx) => (
              <AnimatedSection key={cls.id} delay={idx * 0.1}>
                <Card className="flex flex-col md:flex-row overflow-hidden border-none shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white group rounded-3xl h-full">
                  <div className="md:w-2/5 aspect-[4/3] md:aspect-auto bg-neutral-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-neutral-300 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">{cls.category}</span>
                        <span className="px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] font-bold text-neutral-500 uppercase">{cls.level}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-neutral-950 mb-4">{cls.title}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        {cls.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center text-xs text-neutral-400">
                          <Clock className="h-3.5 w-3.5 mr-2 text-brand-400" /> {cls.time}
                        </div>
                        <div className="flex items-center text-xs text-neutral-400">
                          <Users className="h-3.5 w-3.5 mr-2 text-brand-400" /> {cls.capacity}
                        </div>
                        <div className="flex items-center text-xs text-neutral-400">
                          <BookOpen className="h-3.5 w-3.5 mr-2 text-brand-400" /> 레시피 포함
                        </div>
                        <div className="flex items-center text-xs text-neutral-400">
                          <Calendar className="h-3.5 w-3.5 mr-2 text-brand-400" /> 주말/평일 선택
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-neutral-50">
                      <span className="text-lg font-bold text-neutral-900">{cls.price}</span>
                      <Button size="sm" className="rounded-full px-6" asChild>
                        <Link href="/booking">신청하기</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-20 p-12 bg-white rounded-[2rem] border border-neutral-100 shadow-sm text-center">
            <h4 className="font-serif text-2xl font-bold text-neutral-900 mb-4">기업 단체 및 외부 출강 문의</h4>
            <p className="text-neutral-500 max-w-xl mx-auto mb-8">
              팀빌딩, 동호회, 학교 행사 등 단체 클래스 진행이 가능합니다. 인원과 예산에 맞춰 커리큘럼을 제안해 드립니다.
            </p>
            <Button variant="outline" className="rounded-full px-10 border-neutral-300">문의하기</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
