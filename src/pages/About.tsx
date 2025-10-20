import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

export function About() {
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
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">배움에 대해</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              우리의 비전, 미션, 그리고 성장 이야기
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">우리의 이야기</h2>
              <p className="text-lg text-muted-foreground mb-4">
                (주)배움은 2015년에 설립되었으며, 학점은행제를 통해 누구나 쉽게 대학 학위를 취득할 수 있도록 돕는 것을 목표로 합니다.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                우리는 직장인, 부모, 그리고 모든 꿈꾸는 사람들을 위해 유연하고 질 높은 교육을 제공하고 있습니다.
              </p>
              <p className="text-lg text-muted-foreground">
                지금까지 10,000명 이상의 학생들이 우리와 함께 그들의 목표를 달성했습니다.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 min-h-80 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-7xl font-bold text-primary mb-4">9+</div>
                <p className="text-2xl font-semibold">연의 경험</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Mission and Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-2xl">우리의 미션</CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-muted-foreground">
                <p>
                  모든 사람이 자신의 속도에 맞춰 학습할 수 있도록 하며, 교육의 기회를 제공하여 사회 발전에 기여하는 것입니다.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-2xl">우리의 비전</CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-muted-foreground">
                <p>
                  학점은행제 분야의 선두주자가 되어 개개인의 꿈과 목표 달성을 통해 더 나은 미래를 만드는 것입니다.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">우리의 가치</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: '투명성',
                  description: '모든 정보를 명확하고 솔직하게 제공합니다',
                  items: ['명확한 커리큘럼', '투명한 가격정책', '정직한 상담']
                },
                {
                  title: '지속성',
                  description: '장기적인 성장을 지원합니다',
                  items: ['지속적 학습지원', '졸업 후 관리', '커뮤니티 제공']
                },
                {
                  title: '혁신',
                  description: '최신 기술과 교육방법을 활용합니다',
                  items: ['온라인 플랫폼', '맞춤형 교육', '최신 콘텐츠']
                }
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl">{value.title}</CardTitle>
                      <CardDescription className="text-base">{value.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {value.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">우리의 팀</h2>
            <p className="text-muted-foreground text-lg">
              경험 많은 전문가들이 당신의 성공을 위해 힘쓰고 있습니다
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { name: '김학배', role: '대표 이사', specialty: '교육학 박사' },
              { name: '이지은', role: '교육 담당자', specialty: '커리큘럼 개발' },
              { name: '박준호', role: '학생 지원 담당자', specialty: '상담 전문가' }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5" />
                  <CardHeader className="pt-6">
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-base">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.specialty}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
