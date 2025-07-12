import React, { useState, useRef } from ‘react’;

const VoiceUpload = ({ onUpload }) => {
const [isRecording, setIsRecording] = useState(false);
const [audioBlob, setAudioBlob] = useState(null);
const [recordingTime, setRecordingTime] = useState(0);
const mediaRecorderRef = useRef(null);
const timerRef = useRef(null);
const streamRef = useRef(null);

const prayerTexts = {
korean: `하늘에 계신 우리 아버지여, 이름이 거룩히 여김을 받으시오며, 나라이 임하옵시며, 뜻이 하늘에서 이룬 것같이 땅에서도 이루어지이다. 오늘날 우리에게 일용할 양식을 주옵시고, 우리가 우리에게 죄지은 자를 사하여 준 것같이 우리 죄를 사하여 주옵시고, 우리를 시험에 들게 하지 마옵시고, 다만 악에서 구하옵소서. 아멘.`,
english: `Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven. Give us today our daily bread. And forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from the evil one. Amen.`
};

const [selectedLanguage, setSelectedLanguage] = useState(‘korean’);

const startRecording = async () => {
try {
const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
streamRef.current = stream;

```
  const mediaRecorder = new MediaRecorder(stream);
  mediaRecorderRef.current = mediaRecorder;
  
  const chunks = [];
  mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
  
  mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'audio/wav' });
    setAudioBlob(blob);
    onUpload(blob);
  };

  mediaRecorder.start();
  setIsRecording(true);
  setRecordingTime(0);
  
  timerRef.current = setInterval(() => {
    setRecordingTime(prev => prev + 1);
  }, 1000);
  
} catch (error) {
  console.error('Error accessing microphone:', error);
  alert('마이크 접근 권한이 필요합니다.');
}
```

};

const stopRecording = () => {
if (mediaRecorderRef.current) {
mediaRecorderRef.current.stop();
setIsRecording(false);
clearInterval(timerRef.current);

```
  if (streamRef.current) {
    streamRef.current.getTracks().forEach(track => track.stop());
  }
}
```

};

const formatTime = (seconds) => {
const mins = Math.floor(seconds / 60);
const secs = seconds % 60;
return `${mins}:${secs.toString().padStart(2, '0')}`;
};

return (
<div className="max-w-4xl mx-auto space-y-8">
<div className="text-center space-y-4">
<h2 className="text-3xl font-bold text-white">교회 음성 인식 시스템</h2>
<p className="text-gray-300">
아래 기도문을 읽어주세요. AI가 당신의 억양을 분석하여 교회 참여 적합성을 판단합니다.
</p>
</div>

```
  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
    <div className="flex justify-center mb-4">
      <div className="flex space-x-4">
        <button
          onClick={() => setSelectedLanguage('korean')}
          className={`px-4 py-2 rounded-lg ${
            selectedLanguage === 'korean' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-600 text-gray-300'
          }`}
        >
          한국어
        </button>
        <button
          onClick={() => setSelectedLanguage('english')}
          className={`px-4 py-2 rounded-lg ${
            selectedLanguage === 'english' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-600 text-gray-300'
          }`}
        >
          English
        </button>
      </div>
    </div>

    <div className="bg-black/20 rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-white mb-4">
        {selectedLanguage === 'korean' ? '주기도문' : 'The Lord\'s Prayer'}
      </h3>
      <div className="text-gray-300 leading-relaxed whitespace-pre-line">
        {prayerTexts[selectedLanguage]}
      </div>
    </div>

    <div className="text-center space-y-4">
      <div className="flex justify-center items-center space-x-4">
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center space-x-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
            <span>녹음 시작</span>
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center space-x-2"
          >
            <div className="w-6 h-6 bg-red-500 rounded-sm animate-pulse"></div>
            <span>녹음 중지 ({formatTime(recordingTime)})</span>
          </button>
        )}
      </div>

      {isRecording && (
        <div className="text-center">
          <div className="text-yellow-400 mb-2">🎤 녹음 중...</div>
          <div className="text-sm text-gray-400">
            기도문을 천천히, 마음을 담아 읽어주세요
          </div>
        </div>
      )}

      {audioBlob && !isRecording && (
        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
          <div className="text-green-400 mb-2">✅ 녹음 완료</div>
          <div className="text-sm text-gray-300">
            AI가 당신의 억양을 분석하고 있습니다...
          </div>
          <div className="mt-4">
            <audio 
              controls 
              src={URL.createObjectURL(audioBlob)}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  </div>

  <div className="text-center text-sm text-gray-500">
    <p>
      ⚠️ 본 시스템은 실제 교회에서는 사용되지 않습니다.
    </p>
  </div>
</div>
```

);
};

export default VoiceUpload;
