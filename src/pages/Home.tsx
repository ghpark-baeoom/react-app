import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              누구나 쉽게 대학 학위를
              <span className="block text-primary">취득할 수 있습니다</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              학점은행제를 통해 당신의 꿈을 현실로 만드세요. 일과 학습의 균형을 맞추며 학위를 취득하는 새로운 방법입니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button asChild size="lg" className="text-lg h-auto py-4 px-8">
              <Link to="/registration">지금 시작하기</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg h-auto py-4 px-8">
              <Link to="/courses">자세히 보기</Link>
            </Button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">왜 배움을 선택하나요?</h2>
            <p className="text-muted-foreground text-lg">학점은행제의 주요 장점들을 확인해보세요</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: BookOpen,
                title: '유연한 학습',
                description: '자신의 시간에 맞춰 학습할 수 있습니다'
              },
              {
                icon: Users,
                title: '전문 강사진',
                description: '경험 많은 전문가들이 지도합니다'
              },
              {
                icon: Award,
                title: '정부 인증',
                description: '국가에서 인증한 정식 학위입니다'
              },
              {
                icon: TrendingUp,
                title: '경력 성장',
                description: '취업 및 승진에 도움이 됩니다'
              }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div key={idx} variants={item}>
                  <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: '10,000+', label: '성공한 학생' },
              { number: '500+', label: '개설 과정' },
              { number: '98%', label: '만족도' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground rounded-lg mx-4 lg:mx-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">지금 바로 시작하세요</h2>
            <p className="text-lg mb-8 opacity-90">
              더 이상 미루지 마세요. 당신의 꿈을 위해 지금 바로 신청하세요.
            </p>
            <Button asChild variant="secondary" size="lg" className="text-lg h-auto py-4 px-8">
              <Link to="/registration">무료 상담 신청</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
