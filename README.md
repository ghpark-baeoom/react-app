# 배움 - 학점은행제 교육 플랫폼

학점은행제를 통해 대학 학위를 취득할 수 있는 온라인 교육 플랫폼입니다.

## 설치 및 실행

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

### 미리보기
```bash
npm run preview
```

## 주요 페이지

| 페이지 | 설명 |
|--------|------|
| `/` | 메인 페이지 (소개, 기능, 통계) |
| `/about` | 회사 소개 (미션, 비전, 팀) |
| `/courses` | 과정 목록 (필터링 기능) |
| `/registration` | 신청 폼 및 FAQ |

## 기술 스택

- **React 18** + TypeScript
- **Tailwind CSS** (Dark Mode 지원)
- **Framer Motion** (애니메이션)
- **React Router** (라우팅)
- **shadcn/ui** (UI 컴포넌트)
- **Lucide React** (아이콘)
- **Vite** (번들러)

## 폴더 구조

```
src/
├── pages/           # 페이지 컴포넌트
├── components/      # 재사용 컴포넌트
├── App.tsx          # 라우팅
├── index.css        # 전역 스타일
└── main.tsx         # 진입점
```

## 주요 기능

- ✅ 반응형 디자인
- ✅ 다크/라이트 모드
- ✅ 부드러운 애니메이션
- ✅ 과정 필터링
- ✅ 신청 폼 (유효성 검사 포함)
- ✅ FAQ 섹션

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 시작 |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run lint` | ESLint 검사 |

## 라이선스

MIT
