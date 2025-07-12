import React, { useState, useEffect } from ‘react’;
import { BrowserRouter as Router, Routes, Route, Link } from ‘react-router-dom’;
import VoiceUpload from ‘./components/VoiceUpload’;
import AccentAnalyzer from ‘./components/AccentAnalyzer’;
import DataVisualization from ‘./components/DataVisualization’;
import MultilingualPrayer from ‘./components/MultilingualPrayer’;
import ConfessionRoom from ‘./components/ConfessionRoom’;
import ‘./styles/globals.css’;

function App() {
const [audioData, setAudioData] = useState(null);
const [analysisResult, setAnalysisResult] = useState(null);
const [isSystemError, setIsSystemError] = useState(false);

const handleAudioUpload = (data) => {
setAudioData(data);
// 분석 시뮬레이션
setTimeout(() => {
const mockResult = {
accentType: Math.random() > 0.5 ? ‘korean_chinese’ : ‘standard_korean’,
score: Math.floor(Math.random() * 40) + 60,
confidence: Math.random() * 0.3 + 0.7
};
setAnalysisResult(mockResult);

```
  // 시스템 "오류" 트리거
  if (mockResult.score < 80) {
    setTimeout(() => setIsSystemError(true), 2000);
  }
}, 3000);
```

};

return (
<Router>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
<nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="text-xl font-bold">
신은 나의 억양을 들었다
</div>
<div className="flex space-x-4">
<Link to="/" className="hover:text-purple-300 transition-colors">
홈
</Link>
<Link to="/analyze" className="hover:text-purple-300 transition-colors">
분석
</Link>
<Link to="/data" className="hover:text-purple-300 transition-colors">
데이터
</Link>
<Link to="/prayers" className="hover:text-purple-300 transition-colors">
기도문
</Link>
<Link to="/confess" className="hover:text-purple-300 transition-colors">
고백실
</Link>
</div>
</div>
</div>
</nav>

```
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/analyze" 
          element={
            <div className="space-y-8">
              <VoiceUpload onUpload={handleAudioUpload} />
              {analysisResult && (
                <AccentAnalyzer 
                  result={analysisResult} 
                  isSystemError={isSystemError}
                />
              )}
            </div>
          } 
        />
        <Route path="/data" element={<DataVisualization />} />
        <Route path="/prayers" element={<MultilingualPrayer />} />
        <Route path="/confess" element={<ConfessionRoom />} />
      </Routes>
    </main>
  </div>
</Router>
```

);
}

function HomePage() {
return (
<div className="text-center space-y-12">
<div className="space-y-6">
<h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
신은 나의 억양을 들었다
</h1>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">
하나님은 정말 “표준” 억양만 들으실까요?<br />
같은 기도를 드리는데 왜 억양이 다르다고 차별받아야 할까요?
</p>
</div>

```
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
      <h3 className="text-xl font-semibold mb-3">음성 분석</h3>
      <p className="text-gray-300 mb-4">
        당신의 기도를 녹음하고 "교회 AI 시스템"의 분석을 받아보세요.
      </p>
      <Link 
        to="/analyze" 
        className="inline-block bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
      >
        시작하기
      </Link>
    </div>

    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
      <h3 className="text-xl font-semibold mb-3">데이터 시각화</h3>
      <p className="text-gray-300 mb-4">
        실시간으로 쌓이는 억양 분포와 차별 데이터를 확인하세요.
      </p>
      <Link 
        to="/data" 
        className="inline-block bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
      >
        보기
      </Link>
    </div>

    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
      <h3 className="text-xl font-semibold mb-3">다국어 기도문</h3>
      <p className="text-gray-300 mb-4">
        세계 각국 언어로 드리는 주기도문을 들어보세요.
      </p>
      <Link 
        to="/prayers" 
        className="inline-block bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
      >
        듣기
      </Link>
    </div>
  </div>

  <div className="mt-16 p-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
    <h2 className="text-3xl font-bold mb-4">작품 메시지</h2>
    <p className="text-lg text-gray-300 leading-relaxed">
      이 작업은 한국 교회에서 발생하는 억양 기반 차별을 비판적으로 다룹니다. 
      가상의 AI 시스템을 통해 관람객이 직접 언어 차별을 체험하고, 
      결국 모든 억양이 하나님께 동등하게 들린다는 메시지를 전달합니다.
    </p>
  </div>
</div>
```

);
}

export default App;
