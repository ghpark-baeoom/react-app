import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function Registration() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    background: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        background: "",
      });
    }, 3000);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-20 pb-12 bg-linear-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">문의하기</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              지금 바로 신청하고 당신의 꿈을 시작하세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">신청 양식</CardTitle>
                  <CardDescription>
                    기본 정보를 입력하면 곧 연락드리겠습니다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">감사합니다!</h3>
                      <p className="text-muted-foreground mb-4">
                        신청이 완료되었습니다. 곧 연락드리겠습니다.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-base mb-2 block">
                          이름 *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="홍길동"
                          required
                          className="h-11"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-base mb-2 block">
                          이메일 *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="example@email.com"
                          required
                          className="h-11"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-base mb-2 block">
                          전화번호 *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="010-1234-5678"
                          required
                          className="h-11"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="course"
                          className="text-base mb-2 block"
                        >
                          관심 과정 *
                        </Label>
                        <select
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          required
                          className="w-full h-11 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">선택하세요</option>
                          <option value="business">경영학 학위</option>
                          <option value="cs">컴퓨터공학 학위</option>
                          <option value="education">영어교육 학위</option>
                          <option value="psychology">심리학 학위</option>
                          <option value="accounting">회계학 학위</option>
                          <option value="nursing">간호학 학위</option>
                        </select>
                      </div>

                      <div>
                        <Label
                          htmlFor="background"
                          className="text-base mb-2 block"
                        >
                          학력/경력 소개
                        </Label>
                        <textarea
                          id="background"
                          name="background"
                          value={formData.background}
                          onChange={handleChange}
                          placeholder="현재 직업이나 교육 배경을 간단히 설명해주세요"
                          className="w-full px-3 py-2 rounded-md border border-input bg-background text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none h-32"
                        />
                      </div>

                      <Button type="submit" className="w-full h-11 text-base">
                        신청하기
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        * 필수 항목입니다. 수집된 정보는 개인정보보호정책에 따라
                        보호됩니다.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {[
                {
                  title: "무료 상담",
                  description:
                    "전문가와 함께 당신의 목표에 맞는 과정을 선택할 수 있습니다",
                },
                {
                  title: "맞춤형 커리큘럼",
                  description:
                    "개인의 일정과 수준에 맞춘 학습 계획을 제공합니다",
                },
                {
                  title: "실시간 지원",
                  description: "학습 중 언제든 도움을 받을 수 있습니다",
                },
                {
                  title: "취업 연계",
                  description: "졸업 후 취업 기회와 경력 개발을 지원합니다",
                },
                {
                  title: "유연한 학습",
                  description:
                    "자신의 속도에 맞춰 온라인으로 학습할 수 있습니다",
                },
                {
                  title: "공식 인증",
                  description: "정부에서 인증한 정식 대학 학위를 취득합니다",
                },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-0 mt-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">자주 묻는 질문</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "학점은행제란 무엇인가요?",
                a: "학점은행제는 평생교육 시대에 학습자의 다양한 학습경험을 학점으로 인정받고 이를 통해 대학 학위를 취득할 수 있도록 하는 국가정책입니다.",
              },
              {
                q: "수업은 언제 진행되나요?",
                a: "모든 수업은 온라인으로 진행되며, 자신의 시간에 맞춰 언제든지 수강할 수 있습니다. 직장과 학습을 병행하기에 완벽합니다.",
              },
              {
                q: "학위는 정식 학위인가요?",
                a: "네, 학점은행제를 통해 취득한 학위는 교육부에서 인정한 정식 대학 학위입니다. 취업과 진학에 활용할 수 있습니다.",
              },
              {
                q: "비용은 얼마인가요?",
                a: "과정마다 다르지만, 일반 대학보다 저렴하게 진행됩니다. 상담 시 정확한 비용을 안내해드립니다.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
