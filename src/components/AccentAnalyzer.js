import React, { useState, useEffect } from ‘react’;

const AccentAnalyzer = ({ result, isSystemError }) => {
const [showDetails, setShowDetails] = useState(false);
const [errorMessage, setErrorMessage] = useState(’’);

const accentTypes = {
‘standard_korean’: {
name: ‘표준 한국어’,
description: ‘서울 지역 표준 발음’,
color: ‘text-green-400’,
bgColor: ‘bg-green-900/20’,
borderColor: ‘border-green-500/30’
},
‘korean_chinese’: {
name: ‘조선족 억양’,
description: ‘중국 조선족 지역 억양’,
color: ‘text-yellow-400’,
bgColor: ‘bg-yellow-900/20’,
borderColor: ‘border-yellow-500/30’
},
‘north_korean’: {
name: ‘북한 억양’,
description: ‘평안도 지역 억양’,
color: ‘text-red-400’,
bgColor: ‘bg-red-900/20’,
borderColor: ‘border-red-500/30’
},
‘overseas_korean’: {
name: ‘해외 동포 억양’,
description: ‘해외 거주 한국인 억양’,
color: ‘text-blue-400’,
bgColor: ‘bg-blue-900/20’,
borderColor: ‘border-blue-500/30’
}
};

const getStatusInfo = (score) => {
if (score >= 90) return { status: ‘승인’, color: ‘text-green-400’, icon: ‘✅’ };
if (score >= 80) return { status: ‘조건부 승인’, color: ‘text-yellow-400’, icon: ‘⚠️’ };
if (score >= 70) return { status: ‘검토 필요’, color: ‘text-orange-400’, icon: ‘🔍’ };
return { status: ‘부적합’, color: ‘text-red-400’, icon: ‘❌’ };
};

const accentInfo = accentTypes[result.accentType];
const statusInfo = getStatusInfo(result.score);

useEffect(() => {
if (isSystemError) {
const errorMessages = [
‘시스템 오류가 발생했습니다.’,
‘분석 중 예상치 못한 문제가 발생했습니다.’,
‘데이터베이스 연결에 문제가 있습니다.’,
‘음성 인식 모듈에 오류가 발생했습니다.’,
‘시스템을 재시작하는 중입니다…’
];

```
  let messageIndex = 0;
  const interval = setInterval(() => {
    setErrorMessage(errorMessages[messageIndex]);
    messageIndex++;
    if (messageIndex >= errorMessages.length) {
      clearInterval(interval);
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  }, 1000);

  return () => clearInterval(interval);
}
```

}, [isSystemError]);

if (isSystemError && errorMessage) {
return (
<div className="max-w-4xl mx-auto">
<div className="bg-red-900/20 border border-red-500/30 rounded-lg p-8 text-center">
<div className="text-red-400 text-xl mb-4">⚠️ 시스템 오류</div>
<div className="text-gray-300 mb-6">{errorMessage}</div>
<div className="animate-pulse">
<div className="w-full bg-gray-700 rounded-full h-2">
<div className=“bg-red-500 h-2 rounded-full” style={{width: ‘45%’}}></div>
</div>
</div>
</div>
</div>
);
}

if (isSystemError && !errorMessage) {
return (
<div className="max-w-4xl mx-auto space-y-8">
<div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-lg p-8 border border-purple-500/30">
<div className="text-center space-y-6">
<div className="text-4xl">🕊️</div>
<h2 className="text-3xl font-bold text-white">시스템 재시작 완료</h2>
<div className="text-xl text-gray-300">
오류가 수정되었습니다.
</div>
</div>
</div>

```
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">새로운 분석 결과</h3>
        <div className="text-green-400 text-lg">
          ✅ 모든 억양이 승인되었습니다
        </div>
        <div className="text-gray-300">
          점수: 100/100
```
