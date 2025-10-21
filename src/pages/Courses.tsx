import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Clock, Users, Award, BookOpen } from 'lucide-react'
import { useState } from 'react'

const courses = [
  {
    id: 1,
    title: '경영학 학위',
    category: 'Business',
    description: '현대 경영의 핵심 이론과 실무를 배웁니다',
    duration: '4학기',
    students: '890명',
    rating: 4.8,
    credits: 120,
    modules: ['경영학 원론', '회계학', '마케팅', '재무관리']
  },
  {
    id: 2,
    title: '컴퓨터공학 학위',
    category: 'Technology',
    description: '프로그래밍과 소프트웨어 개발을 학습합니다',
    duration: '4학기',
    students: '1,250명',
    rating: 4.9,
    credits: 120,
    modules: ['프로그래밍', '웹개발', '데이터베이스', '알고리즘']
  },
  {
    id: 3,
    title: '영어교육 학위',
    category: 'Education',
    description: '영어 교육의 이론과 실제 교수법을 배웁니다',
    duration: '4학기',
    students: '650명',
    rating: 4.7,
    credits: 120,
    modules: ['영어학', '교육학', '문학', '커뮤니케이션']
  },
  {
    id: 4,
    title: '심리학 학위',
    category: 'Health',
    description: '인간의 행동과 마음을 이해합니다',
    duration: '4학기',
    students: '720명',
    rating: 4.6,
    credits: 120,
    modules: ['일반심리학', '발달심리', '임상심리', '사회심리']
  },
  {
    id: 5,
    title: '회계학 학위',
    category: 'Business',
    description: '재무 회계와 관리 회계를 전문적으로 배웁니다',
    duration: '4학기',
    students: '540명',
    rating: 4.8,
    credits: 120,
    modules: ['재무회계', '관리회계', '세무회계', '감사']
  },
  {
    id: 6,
    title: '간호학 학위',
    category: 'Health',
    description: '간호의 이론과 실무를 종합적으로 학습합니다',
    duration: '4학기',
    students: '380명',
    rating: 4.9,
    credits: 120,
    modules: ['기초간호', '성인간호', '지역사회간호', '간호관리']
  }
]

const categories = ['All', 'Business', 'Technology', 'Education', 'Health']

export function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(course => course.category === selectedCategory)

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">우리의 과정</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              다양한 분야의 전문 교육 과정을 제공합니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium hover:cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-xl hover:border-primary/50 transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300" />

                  <CardHeader className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {course.category}
                      </span>
                      <span className="text-sm font-semibold text-yellow-500">★ {course.rating}</span>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-base">{course.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-grow">
                    {/* Course Info */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="h-4 w-4 text-primary" />
                        <span>{course.credits}학점</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>{course.modules.length}과목</span>
                      </div>
                    </div>

                    {/* Modules */}
                    <div>
                      <p className="text-xs font-semibold mb-2">주요 과목</p>
                      <div className="flex flex-wrap gap-2">
                        {course.modules.slice(0, 2).map((module, i) => (
                          <span key={i} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                            {module}
                          </span>
                        ))}
                        {course.modules.length > 2 && (
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                            +{course.modules.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>

                  {/* Button */}
                  <div className="p-6 pt-0">
                    <Button asChild className="w-full" variant="outline">
                      <Link to="/registration" state={{ course: course.title }}>
                        상세보기
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">해당하는 과정이 없습니다</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">완벽한 과정을 찾으셨나요?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              지금 바로 신청하고 당신의 미래를 준비하세요
            </p>
            <Button asChild size="lg" className="text-lg h-auto py-4 px-8">
              <Link to="/registration">등록하기</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
