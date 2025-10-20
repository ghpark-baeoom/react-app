import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Home, ArrowRight } from 'lucide-react'

export function NotFound() {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8"
        >
          <div className="text-9xl sm:text-[150px] font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            404
          </div>
        </motion.div>

        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">페이지를 찾을 수 없습니다</h1>
          <p className="text-lg text-muted-foreground mb-8">
            죄송합니다. 요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 py-8"
        >
          <div className="inline-block">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl"
            >
              🚀
            </motion.div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="h-auto py-3 px-6">
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              홈으로 돌아가기
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-auto py-3 px-6">
            <Link to="/courses" className="flex items-center gap-2">
              과정 보기
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t"
        >
          <p className="text-sm text-muted-foreground mb-6">다른 페이지를 둘러보세요</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="text-primary hover:underline transition-all">
              홈
            </Link>
            <Link to="/about" className="text-primary hover:underline transition-all">
              배움 소개
            </Link>
            <Link to="/courses" className="text-primary hover:underline transition-all">
              과정
            </Link>
            <Link to="/registration" className="text-primary hover:underline transition-all">
              등록
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
