# god-heard-my-accent
신은 나의 억양을 들었다
# 신은 나의 억양을 들었다 (God Heard My Accent)

한국 교회 내 조선족 언어 차별 문제를 다루는 인터랙티브 웹 설치 작업

## 프로젝트 개요

이 프로젝트는 한국 교회에서 발생하는 억양 기반 차별을 비판적으로 다루는 웹 기반 설치 작업입니다. 가상의 “교회 음성 인식 시스템”을 통해 관람객이 직접 언어 차별을 체험하고, 결국 모든 억양이 하나님께 동등하게 들린다는 메시지를 전달합니다.

## 주요 기능

- 🎤 **음성 업로드**: 주기도문을 녹음하여 억양 분석
- 📊 **억양 분류**: AI 시뮬레이션을 통한 억양 분류 및 점수 제공
- 🌍 **다국어 기도문**: 세계 각국 언어로 듣는 주기도문
- 💬 **익명 고백실**: 억양 차별 경험담 공유
- 📈 **실시간 데이터**: 참여자 억양 분포 시각화

## 설치 방법

### 1. 저장소 클론

```bash
git clone https://github.com/yourusername/god-heard-my-accent.git
cd god-heard-my-accent
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

```bash
cp .env.example .env
# .env 파일을 편집하여 Firebase 설정 추가
```

### 4. 개발 서버 실행

```bash
npm start
```

## 배포

### GitHub Pages

```bash
npm run build
npm run deploy
```

### Netlify

1. GitHub 저장소를 Netlify에 연결
1. Build command: `npm run build`
1. Publish directory: `build`

## 기술 스택

- **Frontend**: React, Web Audio API, Chart.js
- **Backend**: Firebase (실시간 데이터베이스)
- **ML**: TensorFlow.js (음성 분석 시뮬레이션)
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages / Netlify

## 디렉토리 구조

```
god-heard-my-accent/
├── public/
│   ├── index.html
│   ├── audio/
│   │   ├── prayers/
│   │   └── samples/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── VoiceUpload.js
│   │   ├── AccentAnalyzer.js
│   │   ├── DataVisualization.js
│   │   ├── MultilingualPrayer.js
│   │   └── ConfessionRoom.js
│   ├── utils/
│   │   ├── audioProcessor.js
│   │   ├── accentClassifier.js
│   │   └── firebase.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.js
│   └── index.js
├── package.json
├── README.md
└── .env.example
```

## 작품 메시지

이 작업은 다음과 같은 질문을 던집니다:

- 하나님은 정말 “표준” 억양만 들으실까요?
- 같은 기도를 드리는데 왜 억양이 다르다고 차별받아야 할까요?
- 교회는 정말 모든 사람에게 열린 공간일까요?

## 기여하기

이 프로젝트는 오픈소스입니다. 언어 차별 문제 해결을 위한 아이디어와 기여를 환영합니다.

1. Fork the repository
1. Create your feature branch (`git checkout -b feature/AmazingFeature`)
1. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
1. Push to the branch (`git push origin feature/AmazingFeature`)
1. Open a Pull Request

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 <LICENSE> 파일을 참고하세요.

## 연락처

프로젝트에 대한 문의사항이나 제안사항이 있으시면 이슈를 생성해주세요.

-----

*“하나님은 모든 억양을 들으신다”*
